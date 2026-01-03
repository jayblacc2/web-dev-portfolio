/**
 * Unified Logger Utility
 * Provides consistent logging across the application with
 * production-safe error tracking integration.
 */

import config from '../config';

/**
 * Log levels for controlling output verbosity
 */
const LOG_LEVELS = {
    DEBUG: 0,
    INFO: 1,
    WARN: 2,
    ERROR: 3,
};

/**
 * Current log level based on environment
 */
const currentLevel = config.isProduction ? LOG_LEVELS.WARN : LOG_LEVELS.DEBUG;

/**
 * Format log message with timestamp and component info
 */
function formatMessage(level, component, message) {
    const timestamp = new Date().toISOString();
    return `[${timestamp}] [${level}] ${component ? `[${component}] ` : ''}${message}`;
}

/**
 * Send error to tracking service (Sentry, etc.)
 */
function reportToErrorTracking(error, context = {}) {
    if (window.Sentry && config.errorTracking?.enabled) {
        window.Sentry.captureException(error, {
            tags: {
                component: context.component || 'unknown',
                ...context.tags,
            },
            extra: {
                userAgent: navigator.userAgent,
                url: window.location.href,
                timestamp: new Date().toISOString(),
                ...context.extra,
            },
        });
    }
}

/**
 * Unified logger object
 */
export const logger = {
    /**
     * Debug level - only in development
     */
    debug(message, component = null) {
        if (currentLevel <= LOG_LEVELS.DEBUG) {
            console.debug(formatMessage('DEBUG', component, message));
        }
    },

    /**
     * Info level - general information
     */
    info(message, component = null) {
        if (currentLevel <= LOG_LEVELS.INFO) {
            console.info(formatMessage('INFO', component, message));
        }
    },

    /**
     * Warning level - potential issues
     */
    warn(message, component = null) {
        if (currentLevel <= LOG_LEVELS.WARN) {
            console.warn(formatMessage('WARN', component, message));
        }
    },

    /**
     * Error level - always logged, sent to error tracking in production
     */
    error(message, error = null, context = {}) {
        const component = context.component || null;
        console.error(formatMessage('ERROR', component, message), error);

        // Report to error tracking in production
        if (config.isProduction && error) {
            reportToErrorTracking(error, context);
        }
    },

    /**
     * Track user action for analytics (non-PII)
     */
    track(action, data = {}) {
        if (config.isProduction && window.gtag) {
            window.gtag('event', action, data);
        } else if (!config.isProduction) {
            console.log(formatMessage('TRACK', null, `${action}: ${JSON.stringify(data)}`));
        }
    },

    /**
     * Performance timing helper
     */
    time(label) {
        if (!config.isProduction) {
            console.time(label);
        }
    },

    timeEnd(label) {
        if (!config.isProduction) {
            console.timeEnd(label);
        }
    },
};

export default logger;
