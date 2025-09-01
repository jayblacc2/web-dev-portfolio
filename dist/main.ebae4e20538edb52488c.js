/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 742:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(601);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `#about .btn--hero {
  display: inline-block;
}
.stack__card {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 12;

  width: 100%;
  display: flex;
  justify-content: space-around;
  gap: 2rem;
  flex-wrap: wrap;
}

.card__container {
  padding: 1.5rem 1rem;
  width: 10rem;
  height: 12rem;
  background: rgba(15, 23, 42, 0.85);
  backdrop-filter: blur(20px);
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4), 0 2px 8px rgba(0, 0, 0, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  text-align: center;
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.08);
  position: relative;
  overflow: hidden;

  transform: translateY(0) scale(1);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Subtle gradient border effect */
.card__container::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(
    90deg,
    transparent 0%,
    var(--color-primary) 50%,
    transparent 100%
  );
  transform: scaleX(0);
  transition: transform 0.4s ease;
}

.card__container:hover {
  transform: translateY(-12px) scale(1.05);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5), 0 8px 16px rgba(84, 98, 255, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.15);
  border-color: rgba(84, 98, 255, 0.3);
  background: rgba(15, 23, 42, 0.95);
}

.card__container:hover::before {
  transform: scaleX(1);
}

/* Enhanced Icon Styling */
.icon__container {
  position: relative;
  margin-bottom: 1rem;
  /* display: flex; */
  justify-content: center;
  align-items: center;
  height: 80px;
}

.icon__container .card__icon {
  width: 70px;
  height: 70px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.3));
}

.card__container:hover .card__icon {
  transform: scale(1.1) rotate(3deg);
  filter: drop-shadow(0 8px 20px rgba(84, 98, 255, 0.4));
}

/* Enhanced Card Title */
.card__title {
  font-size: 1rem;
  font-weight: 600;
  margin: 0.5rem 0 1rem 0;
  color: #ffffff;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
}

.card__container:hover .card__title {
  color: #ffffff;
  transform: translateY(-2px);
}

/* Enhanced Progress Bar */
.card__progress-container {
  width: 100%;
  height: 8px;
  border-radius: 12px;
  margin-top: auto;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.08);
  transform: translateY(60px);
  opacity: 0;
  border: none;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
}

/* Shimmer effect for progress container */
.card__progress-container::before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(255, 255, 255, 0.1) 50%,
    transparent 100%
  );
  animation: shimmer 2s infinite;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.card__container:hover .card__progress-container {
  transform: translateY(40px);
  opacity: 1;
}

.card__container:hover .card__progress-container::before {
  opacity: 1;
}

.card__progressbar {
  height: 100%;
  background: linear-gradient(90deg, var(--color-primary) 0%, #6366f1 100%);
  font-size: 0.7rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  border-radius: 12px;
  position: relative;
  overflow: hidden;
  transition: width 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 2px 8px rgba(84, 98, 255, 0.3);
}

/* Progress bar shine effect */
.card__progressbar::after {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.3),
    transparent
  );
  animation: progressShine 2s infinite;
}

/* Keyframe Animations */
@keyframes shimmer {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

@keyframes progressShine {
  0% {
    left: -100%;
  }
  100% {
    left: 100%;
  }
}

/* Card Accessibility & Focus States */
.card__container:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 4px;
  transform: translateY(-8px) scale(1.02);
}

.card__container[tabindex="0"] {
  cursor: pointer;
}

/* Responsive Card Design */
@media (max-width: 1024px) {
  .stack__card {
    gap: 1.5rem;
  }

  .card__container {
    width: 9rem;
    height: 11rem;
    padding: 1.2rem 0.8rem;
  }

  .icon__container .card__icon {
    width: 60px;
    height: 60px;
  }
}

@media (max-width: 768px) {
  .stack__card {
    position: relative;
    justify-content: space-between;
    top: 0;
    left: 0;
    transform: translate(0, 0);
    margin-top: 2rem;
  }

  .card__container {
    width: 8rem;
    height: 10rem;
    padding: 1rem 0.6rem;
  }

  .icon__container {
    height: 60px;
    margin-bottom: 0.8rem;
  }

  .icon__container .card__icon {
    width: 50px;
    height: 50px;
  }

  .card__title {
    font-size: 0.9rem;
    margin: 0.3rem 0 0.8rem 0;
  }
}

@media (max-width: 480px) {
  .stack__card {
    gap: 0.8rem;
  }

  .card__container {
    width: 7rem;
    height: 9rem;
    padding: 0.8rem 0.5rem;
  }

  .icon__container {
    height: 50px;
    margin-bottom: 0.6rem;
  }

  .icon__container .card__icon {
    width: 40px;
    height: 40px;
  }

  .card__title {
    font-size: 0.8rem;
    margin: 0.2rem 0 0.6rem 0;
  }

  .card__progress-container {
    height: 6px;
  }
}

/* Reduced Motion Support */
@media (prefers-reduced-motion: reduce) {
  .card__container,
  .card__icon,
  .card__title,
  .card__progress-container,
  .card__progressbar {
    transition: none;
    animation: none;
  }

  .card__container:hover {
    transform: none;
  }

  .card__container:hover .card__icon {
    transform: none;
  }
}

/* High Contrast Mode */
@media (prefers-contrast: high) {
  .card__container {
    border: 2px solid #ffffff;
    background: rgba(0, 0, 0, 0.9);
  }

  .card__container:hover {
    border-color: var(--color-primary);
  }

  .card__progress-container {
    background: rgba(255, 255, 255, 0.2);
  }
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 136:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(601);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* Animation Keyframes */
@keyframes morphing {
  0% {
    border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  }
  50% {
    border-radius: 70% 30% 30% 70% / 70% 70% 30% 30%;
  }
  100% {
    border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  }
}

@keyframes floatAnimation {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-8px);
  }
  100% {
    transform: translateY(0);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes spin {
  to {
    transform: rotate(1turn);
  }
}

@keyframes slideTextDown {
  0% {
    -webkit-transform: translateY(-20%);
    transform: translateY(-20%);
    opacity: 0;
  }
  40% {
    -webkit-transform: translateY(-10%);
    transform: translateY(-10%);
  }
  100% {
    -webkit-transform: translateY(0%);
    transform: translateY(0%);
    opacity: 1;
  }
}

@keyframes slideUp {
  0% {
    -webkit-transform: translate3d(0, 10px, 0);
    transform: translate3d(0, 10px, 0);
    opacity: 0;
  }
  30% {
    -webkit-transform: translate3d(0, 5px, 0);
    transform: translate3d(0, 10%, 0);
    opacity: 0;
  }
  100% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}

@keyframes slideInRight {
  0% {
    -webkit-transform: translateX(120px) scale(0.8);
    transform: translateX(120px) scale(0.8);
    opacity: 0;
    filter: blur(10px);
  }
  60% {
    -webkit-transform: translateX(-10px) scale(1.02);
    transform: translateX(-10px) scale(1.02);
    opacity: 0.8;
    filter: blur(2px);
  }
  100% {
    -webkit-transform: translateX(0) scale(1);
    transform: translateX(0) scale(1);
    opacity: 1;
    filter: blur(0);
  }
}

@keyframes slideInLeft {
  0% {
    -webkit-transform: translateX(-10%);
    transform: translateX(-10%);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes heartbeat {
  from {
    -webkit-transform: scale(1);
    transform: scale(1);
    -webkit-transform-origin: center center;
    transform-origin: center center;
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
  10% {
    -webkit-transform: scale(0.91);
    transform: scale(0.91);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
  17% {
    -webkit-transform: scale(0.98);
    transform: scale(0.98);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
  33% {
    -webkit-transform: scale(0.87);
    transform: scale(0.87);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
  45% {
    -webkit-transform: scale(1);
    transform: scale(1);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
}

@keyframes rotate-in-center {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotateZ(0deg);
  }
  50% {
    -webkit-transform: rotateZ(180deg);
    transform: rotate(180deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes backgroundAnimation {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.slide-in {
  animation: slideInRight 1s cubic-bezier(0.16, 1, 0.3, 1) 0.2s both;
}

.slide-out {
  animation: slide-out 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.5s both;
}

@keyframes slide-out {
  100% {
    -webkit-transform: translateX(100px);
    transform: translateX(100px);
    opacity: 0;
  }
  0% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    opacity: 1;
  }
}

/* Project Card Animations */
@keyframes projectCardReveal {
  0% {
    opacity: 0;
    transform: translateY(80px) scale(0.8) rotateX(25deg);
    filter: blur(8px);
  }
  50% {
    opacity: 0.6;
    transform: translateY(20px) scale(0.95) rotateX(5deg);
    filter: blur(2px);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1) rotateX(0deg);
    filter: blur(0);
  }
}

@keyframes projectCardHover {
  0% {
    transform: translateY(-8px) rotateY(5deg) rotateX(2deg) scale(1.05);
  }
  25% {
    transform: translateY(-10px) rotateY(3deg) rotateX(1deg) scale(1.06);
  }
  50% {
    transform: translateY(-6px) rotateY(7deg) rotateX(3deg) scale(1.04);
  }
  75% {
    transform: translateY(-9px) rotateY(2deg) rotateX(1deg) scale(1.055);
  }
  100% {
    transform: translateY(-8px) rotateY(5deg) rotateX(2deg) scale(1.05);
  }
}

@keyframes stackTagBounce {
  0% {
    opacity: 0;
    transform: translateY(30px) scale(0.5);
  }
  60% {
    opacity: 0.8;
    transform: translateY(-5px) scale(1.1);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@keyframes slideInFromBottom {
  0% {
    transform: translateY(100px) scale(0.9);
    opacity: 0;
  }
  60% {
    transform: translateY(-5px) scale(1.02);
    opacity: 0.8;
  }
  100% {
    transform: translateY(0) scale(1);
    opacity: 1;
  }
}

.cookie-consent.slide-in {
  animation: slideInFromBottom 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.5s both;
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 721:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(601);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.social-icons {
  animation: slideUp 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}
.social-icons a {
  position: relative;
  margin-right: 20px;
  border: 2px solid var(--color-secondary);
  border-radius: 50%;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: var(--transition);
}

.social-icons a:hover {
  border: none;
  width: 100%;
  padding: 10px;
  aspect-ratio: 1;
  border-radius: 50%;

  -webkit-mask-composite: source-out;
  mask-composite: subtract;
  animation: spin 1s infinite linear;
}

.social-icons a::after {
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  background-color: transparent;
  border-radius: 50%;
  border-bottom: 1px solid transparent;
  border-top: 1px solid transparent;
  transition: var(--transition);
  aspect-ratio: 1;
}

.social-icons a:hover::after {
  border-bottom-color: var(--color-primary);
  border-top-color: var(--color-primary);
  animation: rotate-in-center 1.2s linear infinite;
}

.social-icons a svg {
  transition: var(--transition);
  margin: 5px;
}

.social-icons a svg:hover {
  fill: var(--color-primary);
}

/* Enhanced Contact Section */

.form__container {
  position: relative;
  max-width: 600px;
  margin: 2rem 0 1rem auto;
  display: flex;
  flex-direction: column;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.1),
    rgba(255, 255, 255, 0.05)
  );
  backdrop-filter: blur(20px);
  border-radius: 24px;
  padding: 1.5rem 1rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1),
    0 0 0 1px rgba(255, 255, 255, 0.05);
}

.enhanced-form {
  animation: slideInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

#contact .hero__img {
  width: 55%;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Form Header */
.form__header {
  text-align: center;
  margin-bottom: 1.2rem;
  animation: fadeInDown 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.form__title {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-primary);
  margin: 0 0 0.5rem 0;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.form__subtitle {
  font-size: 0.7rem;
  color: var(--color-secondary-text);
  margin: 0;
  opacity: 0.9;
  line-height: 1.5;
}

/* Enhanced Form */
.enhanced-contact-form {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.form__row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.form__field {
  position: relative;
  margin-bottom: 0.5rem;
}

/* Input Wrapper */
.input-wrapper {
  position: relative;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  border: 2px solid transparent;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
}

.input-wrapper::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), transparent);
  pointer-events: none;
  border-radius: 14px;
}

.input-wrapper.focused {
  border-color: var(--color-primary);
  background: rgba(255, 255, 255, 0.12);
  box-shadow: 0 0 0 4px rgba(84, 98, 255, 0.1), 0 8px 25px rgba(0, 0, 0, 0.1);
  transform: translateY(-2px);
}

.input-wrapper.error {
  border-color: #ef4444;
  background: rgba(239, 68, 68, 0.05);
  animation: shake 0.5s cubic-bezier(0.36, 0.07, 0.19, 0.97);
}

/* Form Controls */
.form__control {
  width: 100%;
  padding: 1.25rem 1rem 0.75rem 1rem;
  background: transparent;
  border: none;
  outline: none;
  font-size: 1rem;
  color: var(--text-color);
  font-family: inherit;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.form__control::placeholder {
  color: transparent;
}

.textarea-wrapper .form__control {
  resize: vertical;
  min-height: 120px;
  padding-top: 1.5rem;
  line-height: 1.5;
}

/* Floating Labels */
.floating-label {
  position: absolute;
  top: 50%;
  left: 1rem;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--color-secondary-text);
  font-size: 1rem;
  font-weight: 500;
  pointer-events: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 2;
}

.textarea-wrapper .floating-label {
  top: 1.5rem;
  transform: none;
}

.floating-label.active,
.input-wrapper.focused .floating-label {
  top: -0.2rem;
  transform: translateY(0) scale(0.85);
  color: var(--color-primary);
  font-weight: 600;
}

.label-icon {
  font-size: 1rem;
  opacity: 0.8;
}

.label-text {
  white-space: nowrap;
}

/* Input Border Animation */
.input-border {
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, var(--color-primary), #7c3aed);
  transform: translateX(-50%);
  transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.input-wrapper.focused .input-border {
  width: 100%;
}

/* Character Counter */
.character-count {
  position: absolute;
  bottom: 0.5rem;
  right: 1rem;
  font-size: 0.75rem;
  color: var(--color-secondary-text);
  opacity: 0.7;
  transition: all 0.3s;
}

.character-count.over-limit {
  color: #ef4444;
  font-weight: 600;
}

/* Field Errors */
.field-error {
  color: #ef4444;
  font-size: 0.8rem;
  margin-top: 0.5rem;
  margin-left: 1rem;
  font-weight: 500;
  opacity: 0;
  transform: translateY(-10px);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.input-wrapper.error + .field-error {
  opacity: 1;
  transform: translateY(0);
}

/* Form Actions */
.form__actions {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

/* Enhanced Submit Button */
.btn__submit {
  position: relative;
  background: linear-gradient(135deg, var(--color-primary), #7c3aed);
  color: white;
  border: none;
  border-radius: 16px;
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  min-width: 180px;
  justify-content: center;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 8px 25px rgba(84, 98, 255, 0.3),
    0 0 0 1px rgba(255, 255, 255, 0.1);
  overflow: hidden;
}

.btn__submit::before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.2),
    transparent
  );
  transition: left 0.5s;
}

.btn__submit:hover::before {
  left: 100%;
}

.btn__submit:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 35px rgba(84, 98, 255, 0.4),
    0 0 0 1px rgba(255, 255, 255, 0.2);
}

.btn__submit:active {
  transform: translateY(0);
  box-shadow: 0 4px 15px rgba(84, 98, 255, 0.3),
    0 0 0 1px rgba(255, 255, 255, 0.1);
}

.btn__submit:disabled {
  cursor: not-allowed;
  opacity: 0.7;
  transform: none;
}

/* Button States */
.btn__submit.loading {
  pointer-events: none;
}

.btn__submit.loading .btn-text,
.btn__submit.loading .btn-icon {
  opacity: 0;
}

.btn__submit.loading .btn-loading {
  opacity: 1;
}

.btn__submit.success {
  background: linear-gradient(135deg, #10b981, #059669);
  animation: successPulse 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.btn__submit.error {
  background: linear-gradient(135deg, #ef4444, #dc2626);
  animation: errorShake 0.5s cubic-bezier(0.36, 0.07, 0.19, 0.97);
}

/* Button Content */
.btn-text {
  transition: opacity 0.3s;
}

.btn-icon {
  font-size: 1.1rem;
  transition: all 0.3s;
}

.btn__submit.hovered .btn-icon {
  transform: translateX(4px);
}

/* Loading Spinner */
.btn-loading {
  position: absolute;
  opacity: 0;
  transition: opacity 0.3s;
}

.loading-spinner {
  width: 20px;
  height: 20px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top: 2px solid white;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

/* Privacy Notice */
.form__privacy {
  text-align: center;
  opacity: 0.8;
}

.form__privacy small {
  color: var(--color-secondary-text);
  font-size: 0.85rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

/* Form Animations */
.enhanced-contact-form.shake {
  animation: formShake 0.6s cubic-bezier(0.36, 0.07, 0.19, 0.97);
}

.enhanced-contact-form.success-submitted {
  animation: successGlow 1s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Keyframe Animations */
@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes shake {
  0%,
  100% {
    transform: translateX(0);
  }
  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translateX(-2px);
  }
  20%,
  40%,
  60%,
  80% {
    transform: translateX(2px);
  }
}

@keyframes formShake {
  0%,
  100% {
    transform: translateX(0);
  }
  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translateX(-4px);
  }
  20%,
  40%,
  60%,
  80% {
    transform: translateX(4px);
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes successPulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes errorShake {
  0%,
  100% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(-4px);
  }
  75% {
    transform: translateX(4px);
  }
}

@keyframes successGlow {
  0% {
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  }
  50% {
    box-shadow: 0 20px 40px rgba(16, 185, 129, 0.3);
  }
  100% {
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  }
}

/* Responsive Design */

/* Large tablets and small desktops */
@media (min-width: 769px) and (max-width: 1024px) {
  .form__container {
    max-width: 100%;
    width: 100%;
    margin: 2rem 0;
    padding: 2rem 1.5rem;
    border-radius: 24px;
  }

  #contact .hero__img {
    width: 100%;
  }

  .form__title {
    font-size: 1.8rem;
  }

  .form__subtitle {
    font-size: 0.9rem;
  }

  .form__row {
    grid-template-columns: 1fr 1fr;
    gap: 1.25rem;
  }

  .form__control {
    padding: 1.25rem 1rem 0.75rem 1rem;
    font-size: 1rem;
  }

  .floating-label {
    left: 1rem;
    font-size: 1rem;
  }

  .textarea-wrapper .form__control {
    min-height: 130px;
    padding-top: 1.5rem;
  }

  .btn__submit {
    padding: 1rem 2rem;
    font-size: 1rem;
    min-width: 200px;
  }

  .character-count {
    bottom: 0.5rem;
    right: 1rem;
    font-size: 0.8rem;
  }

  .field-error {
    margin-left: 1rem;
    font-size: 0.85rem;
  }
}

/* Small tablets (iPad Mini, etc.) */
@media (min-width: 768px) and (max-width: 820px) {
  .form__container {
    max-width: 100%;
    width: 100%;
    margin: 1.5rem 0;
    padding: 1.75rem 1.25rem;
    border-radius: 22px;
  }

  #contact .hero__img {
    width: 100%;
  }

  .form__title {
    font-size: 1.7rem;
  }

  .form__subtitle {
    font-size: 0.85rem;
  }

  .form__row {
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }

  .form__control {
    padding: 1.1rem 0.9rem 0.6rem 0.9rem;
    font-size: 0.95rem;
  }

  .floating-label {
    left: 0.9rem;
    font-size: 0.95rem;
  }

  .textarea-wrapper .form__control {
    min-height: 110px;
    padding-top: 1.4rem;
  }

  .btn__submit {
    padding: 0.9rem 1.75rem;
    font-size: 0.95rem;
    min-width: 180px;
  }

  .character-count {
    bottom: 0.4rem;
    right: 0.9rem;
    font-size: 0.75rem;
  }

  .field-error {
    margin-left: 0.9rem;
    font-size: 0.8rem;
  }
}

/* Mobile devices */
@media (max-width: 767px) {
  .form__container {
    max-width: 90%;
    margin: 1rem auto;
    padding: 1.5rem;
    border-radius: 20px;
  }

  #contact .hero__img {
    width: 100%;
  }

  .form__title {
    font-size: 1.75rem;
  }

  .form__subtitle {
    font-size: 0.9rem;
  }

  .form__row {
    grid-template-columns: 1fr;
    gap: 0;
  }

  .form__control {
    padding: 1rem 0.75rem 0.5rem 2.5rem;
    font-size: 0.9rem;
  }

  .floating-label {
    left: 0.75rem;
    font-size: 0.9rem;
  }

  .label-icon {
    font-size: 1rem;
  }

  .textarea-wrapper .form__control {
    min-height: 100px;
    padding-top: 1.25rem;
  }

  .btn__submit {
    padding: 0.875rem 1.5rem;
    font-size: 0.9rem;
    min-width: 160px;
  }

  .character-count {
    bottom: 0.25rem;
    right: 0.75rem;
    font-size: 0.7rem;
  }

  .field-error {
    margin-left: 0.75rem;
    font-size: 0.75rem;
  }

  .form__field .form__message {
    height: 300px;
  }

  .form__message + label {
    top: 97%;
  }

  .form__container {
    max-width: 100%;
  }
}

@media (max-width: 480px) {
  .form__container {
    max-width: 95%;
    padding: 1rem;
    border-radius: 16px;
  }

  .form__header {
    margin-bottom: 1.5rem;
  }

  .form__title {
    font-size: 1.5rem;
  }

  .form__subtitle {
    font-size: 0.85rem;
  }

  .enhanced-contact-form {
    gap: 1.25rem;
  }

  .form__control {
    padding: 0.875rem 0.5rem 0.5rem 2.25rem;
    font-size: 0.85rem;
  }

  .floating-label {
    left: 0.5rem;
    font-size: 0.85rem;
    gap: 0.375rem;
  }

  .textarea-wrapper .form__control {
    min-height: 80px;
    padding-top: 1rem;
  }

  .btn__submit {
    padding: 0.75rem 1.25rem;
    font-size: 0.85rem;
    min-width: 140px;
  }

  .form__privacy small {
    font-size: 0.75rem;
  }

  .character-count {
    font-size: 0.65rem;
  }
}

/* High contrast mode support */
@media (prefers-contrast: high) {
  .form__container {
    border: 2px solid var(--color-primary);
    background: rgba(255, 255, 255, 0.15);
  }

  .input-wrapper {
    border: 2px solid rgba(255, 255, 255, 0.3);
    background: rgba(255, 255, 255, 0.1);
  }

  .input-wrapper.focused {
    border-color: var(--color-primary);
    border-width: 3px;
  }

  .input-wrapper.error {
    border-color: #ef4444;
    border-width: 3px;
  }

  .btn__submit {
    border: 2px solid rgba(255, 255, 255, 0.3);
  }
}

/* Reduced motion support */
@media (prefers-reduced-motion: reduce) {
  .form__container,
  .input-wrapper,
  .floating-label,
  .btn__submit,
  .field-error {
    transition: none;
    animation: none;
  }

  .enhanced-form {
    animation: none;
  }

  .form__header {
    animation: none;
  }

  .btn__submit::before {
    display: none;
  }

  .loading-spinner {
    animation: none;
    border: 2px solid rgba(255, 255, 255, 0.3);
    border-top: 2px solid white;
  }
}

/* Dark mode support */
@media (prefers-color-scheme: dark) {
  .form__control {
    color: #ffffff;
  }

  .form__control::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }

  .floating-label {
    color: rgba(255, 255, 255, 0.7);
  }

  .floating-label.active,
  .input-wrapper.focused .floating-label {
    color: var(--color-primary);
  }

  .character-count {
    color: rgba(255, 255, 255, 0.6);
  }

  .form__privacy small {
    color: rgba(255, 255, 255, 0.7);
  }
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 972:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(601);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* Home section styles */

/* Home section specific styles */
#home .hero__img {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 500px;
}

/* Main dark background circle */
#home .hero__background-shape {
  position: absolute;
  width: 380px;
  height: 380px;
  background: radial-gradient(
    circle at center,
    rgba(30, 41, 59, 0.95) 0%,
    rgba(15, 23, 42, 0.98) 50%,
    rgba(2, 6, 23, 1) 100%
  );
  border-radius: 50%;
  box-shadow: 0 0 50px rgba(59, 130, 246, 0.15),
    inset 0 0 50px rgba(0, 0, 0, 0.3);
  animation: pulseGlow 6s ease-in-out infinite;
}

/* Outer decorative ring */
#home .hero__outer-ring {
  position: absolute;
  width: 520px;
  height: 520px;
  border: 2px solid transparent;
  border-radius: 50%;
  background: linear-gradient(
    45deg,
    rgba(59, 130, 246, 0.3) 0%,
    rgba(147, 51, 234, 0.3) 25%,
    rgba(236, 72, 153, 0.3) 50%,
    rgba(251, 146, 60, 0.3) 75%,
    rgba(59, 130, 246, 0.3) 100%
  );
  background-clip: padding-box;
  animation: rotateRingReverse 20s linear infinite;
}

#home .hero__outer-ring::before {
  content: "";
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  background: linear-gradient(
    45deg,
    rgba(59, 130, 246, 0.6) 0%,
    rgba(147, 51, 234, 0.6) 25%,
    rgba(236, 72, 153, 0.6) 50%,
    rgba(251, 146, 60, 0.6) 75%,
    rgba(59, 130, 246, 0.6) 100%
  );
  border-radius: 50%;
  z-index: -1;
  animation: rotateRingReverse 20s linear infinite;
}

/* Middle ring (inner ring) - clockwise rotation */
#home .hero__middle-ring {
  position: absolute;
  width: 420px;
  height: 420px;
  border: 1px solid rgba(59, 130, 246, 0.4);
  border-radius: 50%;
  background: transparent;
  animation: rotateRing 20s linear infinite;
}

@keyframes rotateRingReverse {
  0% {
    transform: rotate(360deg);
  }
  100% {
    transform: rotate(0deg);
  }
}

/* Image container with enhanced styling */
#home .image__container {
  position: relative;
  z-index: 10;
  width: fit-content;
}

#home .image__wrapper {
  width: 280px;
  height: 280px;
  border-radius: 50%;
  padding: 6px;
  background: linear-gradient(
    135deg,
    rgba(59, 130, 246, 0.8) 0%,
    rgba(147, 51, 234, 0.8) 25%,
    rgba(236, 72, 153, 0.8) 50%,
    rgba(251, 146, 60, 0.8) 75%,
    rgba(34, 197, 94, 0.8) 100%
  );
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3), 0 0 20px rgba(59, 130, 246, 0.2);
}

#home .image__wrapper::before {
  content: "";
  position: absolute;
  top: -3px;
  left: -3px;
  right: -3px;
  bottom: -3px;
  background: linear-gradient(
    135deg,
    rgba(59, 130, 246, 0.4) 0%,
    rgba(147, 51, 234, 0.4) 25%,
    rgba(236, 72, 153, 0.4) 50%,
    rgba(251, 146, 60, 0.4) 75%,
    rgba(34, 197, 94, 0.4) 100%
  );
  border-radius: 50%;
  z-index: -1;
  opacity: 0;
  transition: opacity 0.4s ease;
}

#home .image__wrapper img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid rgba(255, 255, 255, 0.9);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

#home .image__overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(
    circle,
    transparent 40%,
    rgba(59, 130, 246, 0.1) 70%,
    rgba(0, 0, 0, 0.2) 100%
  );
  border-radius: 50%;
  opacity: 0;
  transition: opacity 0.4s ease;
}

/* Hover effects */
#home .image__container:hover .image__wrapper {
  transform: scale(1.08) translateY(-5px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4), 0 0 30px rgba(59, 130, 246, 0.4);
}

#home .image__container:hover .image__wrapper::before {
  opacity: 1;
}

#home .image__container:hover .image__overlay {
  opacity: 1;
}

#home .image__container:hover .image__wrapper img {
  border-color: rgba(255, 255, 255, 1);
  transform: scale(1.02);
}

/* Enhanced floating animation */
#home .animate-profile {
  animation: enhancedFloat 6s ease-in-out infinite;
}

/* Keyframe animations */
@keyframes enhancedFloat {
  0%,
  100% {
    transform: translateY(0px) rotate(0deg);
  }
  25% {
    transform: translateY(-8px) rotate(1deg);
  }
  50% {
    transform: translateY(-12px) rotate(0deg);
  }
  75% {
    transform: translateY(-8px) rotate(-1deg);
  }
}

@keyframes pulseGlow {
  0%,
  100% {
    box-shadow: 0 0 50px rgba(59, 130, 246, 0.15),
      inset 0 0 50px rgba(0, 0, 0, 0.3);
    transform: scale(1);
  }
  50% {
    box-shadow: 0 0 80px rgba(59, 130, 246, 0.25),
      inset 0 0 60px rgba(0, 0, 0, 0.4);
    transform: scale(1.02);
  }
}

@keyframes rotateRing {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

/* Responsive design for enhanced home section */
@media screen and (max-width: 1024px) {
  #home .hero__background-shape {
    width: 400px;
    height: 400px;
  }

  #home .hero__outer-ring {
    width: 440px;
    height: 440px;
  }

  #home .hero__middle-ring {
    width: 360px;
    height: 360px;
  }

  #home .image__wrapper {
    width: 240px;
    height: 240px;
    padding: 5px;
  }
}

@media screen and (max-width: 768px) {
  #home .hero__img {
    min-height: 400px;
  }

  #home .hero__background-shape {
    width: 350px;
    height: 350px;
  }

  #home .hero__outer-ring {
    width: 380px;
    height: 380px;
  }

  #home .hero__middle-ring {
    width: 320px;
    height: 320px;
  }

  #home .image__wrapper {
    width: 220px;
    height: 220px;
    padding: 4px;
  }

  #home .image__wrapper img {
    border-width: 2px;
  }
}

@media screen and (max-width: 480px) {
  #home .hero__img {
    min-height: 350px;
  }

  #home .hero__background-shape {
    width: 280px;
    height: 280px;
  }

  #home .hero__outer-ring {
    width: 310px;
    height: 310px;
  }

  #home .hero__middle-ring {
    width: 250px;
    height: 250px;
  }

  #home .image__wrapper {
    width: 180px;
    height: 180px;
    padding: 3px;
  }

  #home .image__wrapper img {
    border-width: 2px;
  }

  #home .animate-profile {
    animation: enhancedFloat 4s ease-in-out infinite;
  }
}

/* Floating particles effect */
#home .floating-particles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

#home .particle {
  position: absolute;
  width: 4px;
  height: 4px;
  background: rgba(59, 130, 246, 0.6);
  border-radius: 50%;
  animation: floatParticle 8s ease-in-out infinite;
}

#home .particle-1 {
  top: 20%;
  left: 15%;
  animation-delay: 0s;
  background: rgba(147, 51, 234, 0.5);
}

#home .particle-2 {
  top: 60%;
  left: 80%;
  animation-delay: 1.5s;
  background: rgba(236, 72, 153, 0.5);
}

#home .particle-3 {
  top: 30%;
  left: 85%;
  animation-delay: 3s;
  background: rgba(251, 146, 60, 0.5);
}

#home .particle-4 {
  top: 80%;
  left: 20%;
  animation-delay: 4.5s;
  background: rgba(34, 197, 94, 0.5);
}

#home .particle-5 {
  top: 15%;
  left: 70%;
  animation-delay: 6s;
  background: rgba(59, 130, 246, 0.5);
}

#home .particle-6 {
  top: 70%;
  left: 10%;
  animation-delay: 7.5s;
  background: rgba(168, 85, 247, 0.5);
}

@keyframes floatParticle {
  0%,
  100% {
    transform: translateY(0px) translateX(0px) scale(1);
    opacity: 0.3;
  }
  25% {
    transform: translateY(-20px) translateX(10px) scale(1.2);
    opacity: 0.8;
  }
  50% {
    transform: translateY(-30px) translateX(-5px) scale(0.8);
    opacity: 0.6;
  }
  75% {
    transform: translateY(-15px) translateX(-10px) scale(1.1);
    opacity: 0.9;
  }
}

/* Accessibility improvements */
@media (prefers-reduced-motion: reduce) {
  #home .animate-profile,
  #home .hero__background-shape,
  #home .hero__outer-ring,
  #home .hero__middle-ring,
  #home .particle {
    animation: none;
  }

  #home .image__container:hover .image__wrapper {
    transform: none;
  }
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 806:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(601);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* Enhanced Project Cards Styling */
.project__section .container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  width: 100%;
  margin-top: 3rem;
  padding: 0 1rem;
}

.project__section h2 {
  font-size: clamp(2rem, 4vw, 2.8rem);
  font-weight: 400;
  margin: 0.5rem;
  color: var(--color-secondary-dark);
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  letter-spacing: -0.02em;
}

.project__section h2 span {
  font-size: clamp(1.5rem, 3vw, 2rem);
  color: var(--color-primary);
  font-weight: 300;
  opacity: 0.8;
}

.project__section p {
  font-size: clamp(0.9rem, 1.5vw, 1rem);
  color: var(--color-secondary-text);
  margin-top: 0.5rem;
  font-weight: 500;
}

.project__section .container > div {
  position: relative;
  cursor: pointer;
  height: 220px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  opacity: 0;
  animation: projectCardReveal 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

/* Ensure content is visible over background images */
.project__section .container > div::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    135deg,
    rgba(0, 0, 0, 0.3) 0%,
    rgba(0, 0, 0, 0.1) 50%,
    rgba(0, 0, 0, 0.3) 100%
  );
  border-radius: 12px;
  transition: opacity 0.3s ease;
  z-index: 1;
}

.project__section .container > div:hover::before {
  opacity: 0.7;
}

.project__section .container > div:hover {
  transform: translateY(-10px) scale(1.05);
  box-shadow: 0 20px 40px rgba(84, 98, 255, 0.2),
    0 8px 32px rgba(84, 98, 255, 0.15);
  border: 1px solid rgba(84, 98, 255, 0.3);
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(84, 98, 255, 0.8);
  opacity: 0;
  visibility: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 12px;
}

.project__section .container > div:hover .overlay {
  opacity: 1;
  visibility: visible;
}

.project__section .container > div:nth-of-type(1) {
  grid-column: 1/3;
}

.project__section .container > div:nth-child(6) {
  grid-column: 3/5;
}

.project__section .container > div:nth-child(9) {
  grid-column: 3/5;
}

.project__section .container > div:nth-child(10) {
  grid-column: 1/3;
}

/* Fallback backgrounds when no image is provided */
.bg1:not([style*="background-image"]) {
  background: linear-gradient(135deg, #f8f9ff 0%, #e8ecff 100%);
}

.bg1:not([style*="background-image"]) .content-wrapper {
  color: var(--text-color);
  text-shadow: none;
}

.bg1:not([style*="background-image"]) .project-title {
  color: var(--text-color) !important;
  text-shadow: none;
}

.bg1:not([style*="background-image"]) .project-label {
  color: var(--color-secondary-text) !important;
  text-shadow: none;
}

.bg2:not([style*="background-image"]) {
  background: linear-gradient(135deg, #f0f2f5 0%, #dde1e7 100%);
}

.bg2:not([style*="background-image"]) .content-wrapper {
  color: var(--text-color);
  text-shadow: none;
}

.bg2:not([style*="background-image"]) .project-title {
  color: var(--text-color) !important;
  text-shadow: none;
}

.bg2:not([style*="background-image"]) .project-label {
  color: var(--color-secondary-text) !important;
  text-shadow: none;
}

/* Override the general ::before for cards without background images */
.bg1:not([style*="background-image"])::before,
.bg2:not([style*="background-image"])::before {
  background: linear-gradient(
    135deg,
    transparent 0%,
    rgba(84, 98, 255, 0.05) 100%
  );
  opacity: 0.3;
}

.bg1:not([style*="background-image"]):hover::before,
.bg2:not([style*="background-image"]):hover::before {
  opacity: 0.6;
}

.project-overlay {
  position: absolute;
  bottom: 10px;
  left: 10px;
  right: 10px;
  background: rgba(0, 0, 0, 0.5);
  padding: 10px;
  border-radius: 5px;
}

.project-overlay h3 {
  margin: 0;
  font-size: 20px;
}

.project-overlay p {
  margin: 5px 0 0;
  font-size: 14px;
}

/* Enhanced Modal Styles */
.modal-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    135deg,
    rgba(0, 0, 0, 0.4) 0%,
    rgba(0, 0, 0, 0.8) 100%
  );
  backdrop-filter: blur(8px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  opacity: 0;
  visibility: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.modal-background.open {
  opacity: 1;
  visibility: visible;
}

.modal-content {
  background: linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%);
  padding: 0;
  border-radius: 20px;
  max-width: min(90vw, 800px);
  max-height: 90vh;
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr 1fr;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25),
    0 0 0 1px rgba(255, 255, 255, 0.1);
  transform: scale(0.9) translateY(20px);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
}

.modal-background.open .modal-content {
  transform: scale(1) translateY(0);
}

.modal__image-container {
  position: relative;
  background: linear-gradient(135deg, #f1f3f4 0%, #e8eaed 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 20px 0 0 20px;
  min-height: 400px;
  height: 100%;
}

.modal__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.modal__image.loading {
  opacity: 0;
}

.loading-spinner {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 40px;
  height: 40px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid var(--color-primary);
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}

.modal__image:hover {
  transform: scale(1.05);
}

.modal-info {
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.5rem;
  background: white;
  border-radius: 0 20px 20px 0;
  position: relative;
}

.modal-info::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, var(--color-primary) 0%, #6366f1 100%);
  border-radius: 0 20px 0 0;
}

.modal-title {
  font-size: clamp(1.5rem, 4vw, 2rem);
  font-weight: 600;
  color: var(--text-color);
  margin: 0;
  line-height: 1.2;
  letter-spacing: -0.02em;
}

.modal__description {
  font-size: 1rem;
  color: var(--color-secondary-text);
  line-height: 1.6;
  margin: 0;
  text-align: left;
}

/* Enhanced Stack Tags */
.modal__stacks {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 0;
}

.modal__stacks .stack {
  font-size: 0.8rem;
  font-weight: 500;
  color: var(--color-primary);
  padding: 0.5rem 1rem;
  border-radius: 25px;
  background: rgba(84, 98, 255, 0.1);
  border: 1px solid rgba(84, 98, 255, 0.2);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.modal__stacks .stack::before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.4),
    transparent
  );
  transition: left 0.5s;
}

.modal__stacks .stack:hover {
  background: var(--color-primary);
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(84, 98, 255, 0.3);
}

.modal__stacks .stack:hover::before {
  left: 100%;
}

/* Enhanced Action Buttons */
.modal__actions {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
}

.modal__git-link {
  padding: 0.75rem 1.5rem;
  color: white;
  text-decoration: none;
  border-radius: 12px;
  background: linear-gradient(
    135deg,
    var(--color-secondary-dark) 0%,
    #2d3748 100%
  );
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 500;
  font-size: 0.9rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  border: none;
  cursor: pointer;
}

.modal__git-link::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, var(--color-primary) 0%, #6366f1 100%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.modal__git-link:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.modal__git-link:hover::before {
  opacity: 1;
}

.modal__git-link i,
.modal__git-link span {
  position: relative;
  z-index: 1;
}

.modal__demo-link {
  padding: 0.75rem 1.5rem;
  color: var(--color-primary);
  text-decoration: none;
  border-radius: 12px;
  background: transparent;
  border: 2px solid var(--color-primary);
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 500;
  font-size: 0.9rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
}

.modal__demo-link:hover {
  background: var(--color-primary);
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(84, 98, 255, 0.25);
}

/* Enhanced Project Card Interactions */
.project__section .container .project-card {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
}

.project__section .container .project-card:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 12px 40px rgba(84, 98, 255, 0.15);
}

.project__section .container .project-card:focus {
  outline: 3px solid var(--color-primary);
  outline-offset: 4px;
  transform: translateY(-4px);
}

.project__section .container .project-card:active {
  transform: translateY(-2px) scale(1.01);
  transition: transform 0.1s ease;
}

/* Content wrapper improvements */
.content-wrapper {
  position: relative;
  z-index: 3;
  transition: transform 0.3s ease;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  color: white;
}

.project__section .container > div:hover .content-wrapper {
  transform: translateY(-5px);
}

/* Ensure text is readable over background images */
.project-title {
  color: white !important;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.7);
  font-weight: 600;
}

.project-label {
  color: rgba(255, 255, 255, 0.9) !important;
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.6);
  font-weight: 500;
}

/* Loading state for project cards */
.project-card.loading {
  opacity: 0.7;
  pointer-events: none;
}

.project-card.loading::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 20px;
  height: 20px;
  margin: -10px 0 0 -10px;
  border: 2px solid var(--color-primary);
  border-top: 2px solid transparent;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

.modal-background {
  opacity: 0;
  transition: opacity 0.3s ease;
}

.modal-background.open {
  opacity: 1;
}

/* Enhanced Close Button */
.modal-close {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  z-index: 1001;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  backdrop-filter: blur(10px);
  color: var(--color-secondary-text);
  font-size: 18px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.modal-close:hover {
  background: rgba(239, 68, 68, 0.1);
  border-color: rgba(239, 68, 68, 0.3);
  color: #ef4444;
  transform: scale(1.1) rotate(90deg);
}

.modal-close:active {
  transform: scale(0.95) rotate(90deg);
}

/* Loading States */
.loading-spinner {
  width: 40px;
  height: 40px;
  border: 3px solid rgba(84, 98, 255, 0.1);
  border-top: 3px solid var(--color-primary);
  border-radius: 50%;
  animation: spin 1s linear infinite;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.modal__image.loading {
  opacity: 0;
}

.image-error {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  color: var(--color-secondary-text);
  font-size: 0.9rem;
  padding: 2rem;
}

.image-error::before {
  content: "🖼️";
  font-size: 3rem;
  opacity: 0.5;
}

/* Image Zoom Feature */
.modal__image-container.zoomable {
  cursor: zoom-in;
}

.modal__image-container.zoomed {
  cursor: zoom-out;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1002;
  background: rgba(0, 0, 0, 0.95);
  border-radius: 0;
}

.modal__image-container.zoomed .modal__image {
  max-width: 90vw;
  max-height: 90vh;
  width: auto;
  height: auto;
  object-fit: contain;
}

/* Project Stats */
.modal__stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
  padding: 1rem;
  background: rgba(84, 98, 255, 0.05);
  border-radius: 12px;
  border: 1px solid rgba(84, 98, 255, 0.1);
}

.modal__stat {
  text-align: center;
}

.modal__stat-value {
  font-size: 1rem;
  font-weight: 600;
  color: var(--color-primary);
  display: block;
}

.modal__stat-label {
  font-size: 0.75rem;
  color: var(--color-secondary-text);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-top: 0.25rem;
}

/* Keyframe Animations */
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes slideInUp {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInScale {
  0% {
    opacity: 0;
    transform: scale(0.9);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes projectCardReveal {
  0% {
    opacity: 0;
    transform: translateY(30px) scale(0.95);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@keyframes stackTagBounce {
  0% {
    opacity: 0;
    transform: translateY(30px) scale(0.5);
  }
  60% {
    opacity: 0.8;
    transform: translateY(-5px) scale(1.05);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

/* Enhanced Responsive Design */
@media (max-width: 1200px) {
  .project__section .container {
    grid-template-columns: repeat(3, 1fr);
    gap: 1.25rem;
  }

  .project__section .container > div:nth-of-type(1) {
    grid-column: 1/3;
  }
}

/* This media query was conflicting with tablet styles - removed */

/* iPad Mini and smaller tablets - 2x3 Grid Layout */
@media (min-width: 768px) and (max-width: 820px) {
  .project__section .container {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    gap: 1rem;
    margin-top: 2rem;
    padding: 0 1rem;
    max-width: 100%;
    height: auto;
  }

  .project__section .container > div {
    height: 240px;
    border-radius: 12px;
    /* Remove hover animations for tablets */
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }

  /* Remove hover effects for tablets */
  .project__section .container > div:hover {
    transform: none;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    border: 1px solid rgba(255, 255, 255, 0.1);
  }

  .project__section .container > div:hover::before {
    opacity: 0.3;
  }

  .project__section .container > div:hover .content-wrapper {
    transform: none;
  }

  /* Reset all special grid positioning for clean 2x3 layout */
  .project__section .container > div:nth-of-type(1),
  .project__section .container > div:nth-child(6),
  .project__section .container > div:nth-child(9),
  .project__section .container > div:nth-child(10) {
    grid-column: span 1;
    height: 240px;
  }

  /* Apply same animations as large screens */
  .project__section .container > div {
    opacity: 0;
    animation: projectCardReveal 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  }

  span.overlay-stack {
    animation: stackTagBounce 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55)
      forwards;
    animation-delay: calc(var(--i) * 0.1s + 0.3s);
    opacity: 0;
    transform: translateY(30px) scale(0.5);
  }

  /* Adjust text sizes for smaller tablets */
  .project__section h2 {
    font-size: clamp(2rem, 4vw, 2.4rem);
    margin-bottom: 1rem;
  }

  .project__section h2 span {
    font-size: clamp(1.4rem, 3vw, 1.8rem);
  }

  .project__section p {
    font-size: clamp(0.9rem, 1.5vw, 1rem);
    margin-bottom: 1.5rem;
  }
}

/* Larger tablets (iPad Pro, etc.) */
@media (min-width: 821px) and (max-width: 1024px) {
  .project__section .container {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
    margin-top: 2.5rem;
    padding: 0 1.5rem;
    max-width: 100%;
  }

  .project__section .container > div {
    height: 280px;
    border-radius: 16px;
    /* Remove hover animations for tablets */
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }

  /* Reset all special grid positioning for clean 2-column layout */
  .project__section .container > div:nth-of-type(1),
  .project__section .container > div:nth-child(6),
  .project__section .container > div:nth-child(9),
  .project__section .container > div:nth-child(10) {
    grid-column: span 1;
    height: 280px;
  }

  /* Remove hover effects for tablets - apply same as large screens */
  .project__section .container > div:hover {
    transform: none;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    border: 1px solid rgba(255, 255, 255, 0.1);
  }

  .project__section .container > div:hover::before {
    opacity: 0.3;
  }

  .project__section .container > div:hover .content-wrapper {
    transform: none;
  }

  /* Apply same animations as large screens */
  .project__section .container > div {
    opacity: 0;
    animation: projectCardReveal 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  }

  span.overlay-stack {
    animation: stackTagBounce 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55)
      forwards;
    animation-delay: calc(var(--i) * 0.1s + 0.3s);
    opacity: 0;
    transform: translateY(30px) scale(0.5);
  }

  /* Overlay adjustments for tablets */
  .overlay {
    padding: 1.5rem;
    border-radius: 16px;
  }

  .overlay-description {
    font-size: 0.9rem;
    margin-bottom: 1rem;
    line-height: 1.5;
  }

  span.overlay-stack {
    font-size: 0.75rem;
    padding: 0.4rem 0.8rem;
    margin: 0.25rem;
    border-radius: 20px;
  }

  /* Modal optimizations for tablets */
  .modal-content {
    max-width: 90vw;
    max-height: 90vh;
    border-radius: 24px;
  }

  .modal-info {
    padding: 2.5rem 2rem;
    gap: 1.5rem;
  }

  .modal__actions {
    flex-direction: row;
    gap: 1.25rem;
    margin-top: 1.5rem;
  }

  .modal__git-link,
  .modal__demo-link {
    flex: 1;
    justify-content: center;
    padding: 0.9rem 1.5rem;
    font-size: 0.95rem;
  }

  .modal__stats {
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    padding: 1.25rem;
  }

  .modal-title {
    font-size: 1.9rem;
    line-height: 1.3;
  }

  .modal__description {
    font-size: 1.05rem;
    line-height: 1.7;
  }

  .modal__stacks .stack {
    font-size: 0.85rem;
    padding: 0.6rem 1.1rem;
  }
  /* Additional tablet-specific improvements */
  .project__section .container > div::before {
    transition: opacity 0.4s ease;
  }

  .project__section .container > div:hover::before {
    opacity: 0.8;
  }

  /* Better text readability on tablets */
  .content-wrapper {
    padding: 1rem;
  }

  .project-title {
    font-size: clamp(1.1rem, 2.5vw, 1.3rem);
    font-weight: 700;
    margin-bottom: 0.5rem;
  }

  .project-label {
    font-size: clamp(0.85rem, 2vw, 0.95rem);
    font-weight: 500;
  }

  /* Improved modal close button for tablets */
  .modal-close {
    width: 44px;
    height: 44px;
    font-size: 20px;
    top: 1.25rem;
    right: 1.25rem;
  }

  /* Better stack tag layout in modal */
  .modal__stacks {
    gap: 0.75rem;
    margin: 1.25rem 0;
  }
}

@media (max-width: 768px) {
  .project__section .container {
    grid-template-columns: repeat(2, 1fr);
    gap: 0.75rem;
    margin-top: 2rem;
  }

  .project__section .container > div {
    height: 180px;
    /* Remove hover animations for mobile */
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }

  /* Remove hover effects for mobile */
  .project__section .container > div:hover {
    transform: none;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    border: 1px solid rgba(255, 255, 255, 0.1);
  }

  .project__section .container > div:hover::before {
    opacity: 0.3;
  }

  .project__section .container > div:hover .content-wrapper {
    transform: none;
  }

  /* Apply same animations as large screens */
  .project__section .container > div {
    opacity: 0;
    animation: projectCardReveal 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  }
}

@media (max-width: 576px) {
  .project__section .container {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .project__section .container > div {
    height: 200px;
  }

  .project__section .container > div:nth-of-type(1) {
    grid-column: 1;
  }

  .project__section h2 {
    text-align: center;
  }
}

/* Mobile devices (300px and above) - Fixed layout */
@media (min-width: 300px) and (max-width: 480px) {
  .project__section .container {
    grid-template-columns: 1fr;
    gap: 0.75rem;
    margin-top: 1.5rem;
    padding: 0 0.75rem;
    max-width: 100%;
  }

  .project__section .container > div {
    height: 200px;
    border-radius: 12px;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
    /* Remove hover animations for mobile */
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }

  /* Remove hover effects for mobile */
  .project__section .container > div:hover {
    transform: none;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    border: 1px solid rgba(255, 255, 255, 0.1);
  }

  .project__section .container > div:hover::before {
    opacity: 0.3;
  }

  .project__section .container > div:hover .content-wrapper {
    transform: none;
  }

  /* Apply same animations as large screens */
  .project__section .container > div {
    opacity: 0;
    animation: projectCardReveal 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  }

  /* Reset all special grid positioning for single column layout */
  .project__section .container > div:nth-of-type(1),
  .project__section .container > div:nth-child(6),
  .project__section .container > div:nth-child(9),
  .project__section .container > div:nth-child(10) {
    grid-column: 1;
    height: 200px;
  }

  .content-wrapper {
    padding: 0.75rem;
  }

  .project-title {
    font-size: clamp(1rem, 3.5vw, 1.2rem);
    margin-bottom: 0.3rem;
    font-weight: 600;
  }

  .project-label {
    font-size: clamp(0.8rem, 2.8vw, 0.9rem);
    font-weight: 500;
  }

  .project__section h2 {
    font-size: clamp(1.5rem, 5.5vw, 2rem);
    margin-bottom: 1rem;
    text-align: center;
  }

  .project__section h2 span {
    font-size: clamp(1.2rem, 4.2vw, 1.5rem);
  }

  .project__section p {
    font-size: clamp(0.85rem, 2.8vw, 0.95rem);
    margin-bottom: 1rem;
    text-align: center;
  }
}

/* Very small devices (below 300px) */
@media (max-width: 299px) {
  .project__section .container {
    grid-template-columns: 1fr;
    gap: 0.5rem;
    margin-top: 1rem;
    padding: 0 0.5rem;
  }

  .project__section .container > div {
    height: 180px;
    border-radius: 10px;
    /* Remove hover animations for very small mobile */
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }

  /* Remove hover effects for very small mobile */
  .project__section .container > div:hover {
    transform: none;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    border: 1px solid rgba(255, 255, 255, 0.1);
  }

  .project__section .container > div:hover::before {
    opacity: 0.3;
  }

  .project__section .container > div:hover .content-wrapper {
    transform: none;
  }

  /* Apply same animations as large screens */
  .project__section .container > div {
    opacity: 0;
    animation: projectCardReveal 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  }

  /* Reset all special grid positioning for single column layout */
  .project__section .container > div:nth-of-type(1),
  .project__section .container > div:nth-child(6),
  .project__section .container > div:nth-child(9),
  .project__section .container > div:nth-child(10) {
    grid-column: 1;
    height: 180px;
  }

  .content-wrapper {
    padding: 0.6rem;
  }

  .project-title {
    font-size: clamp(0.9rem, 4vw, 1.1rem);
    margin-bottom: 0.25rem;
  }

  .project-label {
    font-size: clamp(0.75rem, 3.2vw, 0.85rem);
  }

  .project__section h2 {
    font-size: clamp(1.3rem, 6.5vw, 1.7rem);
    margin-bottom: 0.8rem;
    text-align: center;
  }

  .project__section h2 span {
    font-size: clamp(1rem, 5vw, 1.3rem);
  }

  .project__section p {
    font-size: clamp(0.8rem, 3.2vw, 0.9rem);
    margin-bottom: 0.8rem;
    text-align: center;
  }
}

/* Accessibility improvements */
@media (prefers-reduced-motion: reduce) {
  .project__section .container > div,
  .overlay,
  .content-wrapper {
    transition: none;
    animation: none;
    opacity: 1;
    transform: none;
  }
}

/* Modal Responsive Design */
@media (max-width: 768px) {
  .modal-content {
    grid-template-columns: 1fr;
    max-width: 95vw;
    max-height: 95vh;
    overflow-y: auto;
  }

  .modal__image-container {
    border-radius: 20px 20px 0 0;
    min-height: 250px;
  }

  .modal-info {
    border-radius: 0 0 20px 20px;
    padding: 2rem 1.5rem;
  }

  .modal-info::before {
    border-radius: 20px 20px 0 0;
  }

  .modal__actions {
    flex-direction: column;
  }

  .modal__git-link,
  .modal__demo-link {
    justify-content: center;
    width: 100%;
  }

  .modal__stats {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Modal for mobile devices (300px and above) */
@media (min-width: 300px) and (max-width: 480px) {
  .modal-content {
    grid-template-columns: 1fr;
    max-width: 92vw;
    max-height: 90vh;
    margin: 1rem;
    border-radius: 16px;
  }

  .modal__image-container {
    border-radius: 16px 16px 0 0;
    min-height: 200px;
    max-height: 250px;
  }

  .modal-info {
    border-radius: 0 0 16px 16px;
    padding: 1.5rem 1rem;
    gap: 1rem;
  }

  .modal-info::before {
    border-radius: 16px 16px 0 0;
  }

  .modal-title {
    font-size: clamp(1.2rem, 4vw, 1.5rem);
    line-height: 1.3;
  }

  .modal__description {
    font-size: clamp(0.85rem, 2.8vw, 0.95rem);
    line-height: 1.5;
  }

  .modal__stacks {
    gap: 0.4rem;
    margin: 0.75rem 0;
  }

  .modal__stacks .stack {
    font-size: 0.75rem;
    padding: 0.4rem 0.8rem;
  }

  .modal__actions {
    flex-direction: column;
    gap: 0.75rem;
    margin-top: 1rem;
  }

  .modal__git-link,
  .modal__demo-link {
    justify-content: center;
    width: 100%;
    padding: 0.75rem 1rem;
    font-size: 0.85rem;
  }

  .modal__stats {
    grid-template-columns: repeat(2, 1fr);
    gap: 0.75rem;
    padding: 1rem;
  }

  .modal__stat-value {
    font-size: 0.9rem;
  }

  .modal__stat-label {
    font-size: 0.7rem;
  }

  .modal-close {
    width: 36px;
    height: 36px;
    font-size: 16px;
    top: 1rem;
    right: 1rem;
  }
}

/* High contrast mode support */
@media (prefers-contrast: high) {
  .project__section .container > div {
    border: 2px solid var(--color-primary);
  }

  .overlay {
    background: rgba(0, 0, 0, 0.95);
  }

  .modal-content {
    border: 2px solid var(--color-primary);
  }

  .modal__stacks .stack {
    border: 2px solid var(--color-primary);
    background: white;
  }
}

/* Print styles */
@media print {
  .modal-background {
    display: none;
  }
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 763:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(601);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* Enhanced Skills Container */
.parent__container {
  z-index: 10;
  position: absolute;
  width: 80%;
  height: 80%;
  animation: backgroundAnimation 10s ease infinite;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 20px;
  backdrop-filter: blur(10px);
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.enhanced-skills-container {
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1),
    0 0 0 1px rgba(255, 255, 255, 0.05);
}

.parent__container:hover canvas {
  transform: scale(1.02);
  cursor: pointer;
}

canvas {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 15px;
  filter: drop-shadow(0 10px 20px rgba(0, 0, 0, 0.1));
}

/* Skills Header */
.skills-header {
  position: absolute;
  top: 15px;
  left: 20%;
  transform: translateX(-50%);
  text-align: center;
  z-index: 10;
  background: rgba(0, 0, 0, 0.4);
  padding: 12px 15px;
  border-radius: 12px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.skills-title {
  font-size: 0.9rem;
  font-weight: 600;
  color: #ffffff;
  margin: 0 0 4px 0;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.skills-subtitle {
  font-size: 0.6rem;
  color: rgba(255, 255, 255, 0.8);
  margin: 0;
  opacity: 0.9;
}

/* Enhanced Tooltip */
.tooltip {
  position: absolute;
  padding: 12px 16px;
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.8));
  color: #fff;
  border-radius: 12px;
  pointer-events: none;
  opacity: 0;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  transform: scale(0.8);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  max-width: 200px;
  z-index: 1000;
}

.enhanced-tooltip {
  font-size: 0.85rem;
  line-height: 1.4;
}

.tooltip-header {
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 8px;
}

.tooltip-category {
  font-size: 0.7rem;
  opacity: 0.7;
  color: var(--color-primary);
}

.tooltip-proficiency {
  color: #ffd700;
  font-size: 0.9rem;
  margin-bottom: 6px;
}

.tooltip-tip {
  font-size: 0.7rem;
  opacity: 0.6;
  font-style: italic;
}

.enhanced-theme-selector {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.theme-label {
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 500;
  margin-right: 4px;
}

.theme-button {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  cursor: pointer;
  border: 2px solid rgba(255, 255, 255, 0.3);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.theme-button:hover {
  transform: scale(1.1);
  border-color: rgba(255, 255, 255, 0.6);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.theme-button:active {
  transform: scale(0.95);
}

/* Enhanced Details Panel */
.details {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%) scale(0.9);
  padding: 16px 20px;
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.8));
  color: #fff;
  border-radius: 16px;
  opacity: 0;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
  max-width: 300px;
  min-width: 250px;
  z-index: 1000;
}

.enhanced-details {
  font-size: 0.9rem;
  line-height: 1.5;
}

.details-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
  padding-bottom: 8px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.details-header h4 {
  margin: 0;
  color: var(--color-primary);
  font-size: 1.1rem;
  font-weight: 600;
}

.details-close {
  background: none;
  border: none;
  color: rgba(255, 255, 255, 0.6);
  font-size: 1.2rem;
  cursor: pointer;
  padding: 4px;
  border-radius: 4px;
  transition: all 0.2s;
}

.details-close:hover {
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
}

.details-actions {
  display: flex;
  gap: 8px;
  margin-top: 12px;
  padding-top: 12px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.details-btn {
  flex: 1;
  padding: 8px 12px;
  background: var(--color-primary);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 0.8rem;
  cursor: pointer;
  transition: all 0.2s;
  font-weight: 500;
}

.details-btn:hover {
  background: var(--color-primary-rgb);
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(84, 98, 255, 0.3);
}

/* Controls Panel */
.controls-panel,
.theme-selector {
  position: absolute;
  bottom: 15px;
  display: flex;
  align-items: center;
  gap: 10px;
  background: rgba(0, 0, 0, 0.4);
  padding: 10px 15px;
  border-radius: 25px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.controls-panel {
  right: 15px;
}

/* Enhanced Theme Selector */
.theme-selector {
  left: 15px;
}

.control-btn {
  background: none;
  border: none;
  font-size: 0.8rem;
  cursor: pointer;
  padding: 4px;
  border-radius: 8px;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.8);
}

.control-btn:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: scale(1.1);
  color: #ffffff;
}

.control-btn:active {
  transform: scale(0.95);
}

.speed-control {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.8);
}

.speed-control label {
  font-weight: 500;
  color: rgba(255, 255, 255, 0.9);
}

.speed-control input[type="range"] {
  width: 60px;
  height: 4px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 2px;
  outline: none;
  appearance: none;
  -webkit-appearance: none;
}

.speed-control input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 12px;
  height: 12px;
  background: var(--color-primary);
  border-radius: 50%;
  cursor: pointer;
}

.speed-control input[type="range"]::-moz-range-thumb {
  width: 12px;
  height: 12px;
  background: var(--color-primary);
  border-radius: 50%;
  cursor: pointer;
  border: none;
}

/* Skill Counter */
.skill-counter {
  position: absolute;
  top: 15px;
  right: 15px;
  background: rgba(0, 0, 0, 0.4);
  padding: 10px 15px;
  border-radius: 25px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 500;
}

.skill-counter span {
  color: #ffffff;
  font-weight: 700;
  font-size: 1rem;
}

/* Skill Stats Container */
.skill-stats-container {
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
  flex-wrap: wrap;
  margin: 1rem 0;
}

.skill-stat-card {
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.1),
    rgba(255, 255, 255, 0.05)
  );
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 1rem 1.25rem;
  text-align: center;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  min-width: 120px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.skill-stat-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  border-color: rgba(255, 255, 255, 0.2);
}

.stat-icon {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  display: block;
}

.stat-value {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-primary);
  margin-bottom: 0.25rem;
  line-height: 1;
}

.stat-label {
  font-size: 0.8rem;
  color: var(--color-secondary-text);
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

/* Animations */
@keyframes skillPulse {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}

@keyframes skillGlow {
  0%,
  100% {
    box-shadow: 0 0 5px rgba(84, 98, 255, 0.3);
  }
  50% {
    box-shadow: 0 0 20px rgba(84, 98, 255, 0.6);
  }
}

.skill-stat-card:hover {
  animation: skillPulse 2s infinite;
}

/* Tablet Specific Styles */
@media (min-width: 768px) and (max-width: 1024px) {
  .parent__container {
    width: 90%;
    height: 75%;
    max-height: 500px;
  }

  .skills-header {
    top: 15px;
    left: 50%;
    transform: translateX(-50%);
    padding: 10px 20px;
    max-width: 80%;
  }

  .skills-title {
    font-size: 1rem;
  }

  .skills-subtitle {
    font-size: 0.75rem;
  }

  .theme-selector {
    bottom: 15px;
    left: 15px;
    padding: 10px 15px;
    gap: 10px;
  }

  .theme-button {
    width: 22px;
    height: 22px;
  }

  .theme-label {
    font-size: 0.8rem;
  }

  .controls-panel {
    bottom: 15px;
    right: 15px;
    padding: 10px 15px;
    gap: 12px;
  }

  .control-btn {
    font-size: 1.1rem;
    padding: 6px;
  }

  .speed-control {
    font-size: 0.8rem;
  }

  .speed-control input[type="range"] {
    width: 70px;
  }

  .skill-counter {
    top: 15px;
    right: 15px;
    padding: 10px 15px;
    font-size: 0.85rem;
  }

  .skill-counter span {
    font-size: 1rem;
  }

  .details {
    bottom: 20px;
    max-width: 350px;
    min-width: 280px;
    padding: 16px 20px;
  }

  .details-header h4 {
    font-size: 1.1rem;
  }

  .tooltip {
    max-width: 220px;
    padding: 12px 16px;
    font-size: 0.85rem;
  }

  .skill-stats-container {
    gap: 1rem;
    margin-top: 1.5rem;
    justify-content: center;
    flex-wrap: wrap;
  }

  .skill-stat-card {
    min-width: 110px;
    max-width: 140px;
    padding: 0.8rem 1rem;
    flex: 0 1 calc(33.333% - 1rem);
  }

  .stat-icon {
    font-size: 1.3rem;
  }

  .stat-value {
    font-size: 1.3rem;
  }

  .stat-label {
    font-size: 0.75rem;
  }
}

/* Mobile Styles */
@media (max-width: 768px) {
  .parent__container {
    width: 95%;
    height: 85%;
  }

  .skills-header {
    top: 10px;
    padding: 8px 15px;
    max-width: 90%;
  }

  .skills-title {
    font-size: 0.95rem;
  }

  .skills-subtitle {
    font-size: 0.7rem;
  }

  .theme-selector {
    bottom: 10px;
    left: 10px;
    padding: 8px 12px;
    gap: 8px;
  }

  .theme-button {
    width: 20px;
    height: 20px;
  }

  .theme-label {
    display: none;
  }

  .controls-panel {
    bottom: 70px;
    right: 10px;
    padding: 8px 12px;
    gap: 10px;
  }

  .control-btn {
    font-size: 1rem;
    padding: 5px;
  }

  .speed-control {
    font-size: 0.7rem;
  }

  .speed-control input[type="range"] {
    width: 50px;
  }

  .skill-counter {
    top: 10px;
    right: 10px;
    padding: 8px 12px;
    font-size: 0.75rem;
  }

  .skill-counter span {
    font-size: 0.9rem;
  }

  .details {
    bottom: 10px;
    max-width: 280px;
    min-width: 220px;
    padding: 12px 16px;
  }

  .details-header h4 {
    font-size: 1rem;
  }

  .tooltip {
    max-width: 180px;
    padding: 10px 12px;
    font-size: 0.8rem;
  }

  .skill-stats-container {
    gap: 0.5rem;
    margin-top: 1rem;
    justify-content: center;
    flex-wrap: wrap;
  }

  .skill-stat-card {
    min-width: 85px;
    max-width: 105px;
    padding: 0.6rem 0.7rem;
    flex: 0 1 calc(33.333% - 0.5rem);
  }

  .stat-icon {
    font-size: 1.1rem;
  }

  .stat-value {
    font-size: 1.1rem;
  }

  .stat-label {
    font-size: 0.65rem;
  }
}

@media (max-width: 480px) {
  .skills-header {
    display: none;
  }

  .skill-stats-container {
    flex-direction: column;
    align-items: stretch;
    gap: 0.6rem;
    margin-top: 0.8rem;
    width: 100%;
  }

  .skill-stat-card {
    width: 100%;
    max-width: none;
    padding: 0.8rem 1rem;
    min-width: unset;
    flex: none;
    margin: 0;
  }

  .stat-icon {
    font-size: 1.2rem;
  }

  .stat-value {
    font-size: 1.2rem;
  }

  .stat-label {
    font-size: 0.65rem;
  }

  .controls-panel {
    flex-direction: row;
    gap: 8px;
    padding: 6px 10px;
    bottom: 10px;
    right: 5px;
    font-size: 0.8rem;
  }

  .speed-control {
    flex-direction: row;
    gap: 4px;
    align-items: center;
  }

  .speed-control label {
    font-size: 0.65rem;
  }

  .speed-control input[type="range"] {
    width: 40px;
  }

  .details {
    max-width: 260px;
    min-width: 200px;
  }

  .details-actions {
    flex-direction: column;
    gap: 6px;
  }
}

/* iPhone 12 Pro Max (428px width) - Specific layout for uniform grid */
@media (max-width: 428px) and (min-width: 401px) {
  .parent__container {
    width: 95%;
    height: 80%;
  }

  .skill-stats-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0.8rem;
    margin-top: 1rem;
    width: 100%;
    padding: 0 0.5rem;
  }

  .skill-stat-card {
    width: 100%;
    min-width: unset;
    max-width: none;
    padding: 0.8rem 0.6rem;
    flex: none;
    margin: 0;
    aspect-ratio: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .stat-icon {
    font-size: 1.2rem;
    margin-bottom: 0.3rem;
  }

  .stat-value {
    font-size: 1.1rem;
    margin-bottom: 0.2rem;
  }

  .stat-label {
    font-size: 0.6rem;
    letter-spacing: 0.3px;
  }

  .skills-header {
    top: 10px;
    padding: 8px 15px;
    max-width: 90%;
  }

  .skills-title {
    font-size: 0.9rem;
  }

  .skills-subtitle {
    font-size: 0.65rem;
  }

  .controls-panel {
    bottom: 8px;
    right: 5px;
    padding: 6px 8px;
    gap: 6px;
  }

  .control-btn {
    font-size: 0.85rem;
    padding: 4px;
  }

  .speed-control {
    font-size: 0.65rem;
  }

  .speed-control input[type="range"] {
    width: 45px;
  }
}

/* For screens smaller than 400px */
@media (max-width: 400px) {
  .skills-header {
    display: none;
  }

  .skill-stats-container {
    flex-direction: column;
    align-items: stretch;
    gap: 0.5rem;
    margin-top: 0.8rem;
    width: 100%;
    padding: 0 0.5rem;
  }

  .skill-stat-card {
    width: 100%;
    min-width: unset;
    max-width: none;
    padding: 0.4rem 0.6rem;
    flex: none;
    margin: 0;
  }

  .stat-icon {
    font-size: 1.1rem;
  }

  .stat-value {
    font-size: 1.1rem;
  }

  .stat-label {
    font-size: 0.6rem;
    letter-spacing: 0.3px;
  }

  .controls-panel {
    bottom: 5px;
    right: 2px;
    padding: 4px 6px;
    gap: 4px;
  }

  .control-btn {
    font-size: 0.9rem;
    padding: 3px;
  }

  .speed-control {
    display: none;
  }
}

@media (max-width: 300px) {
  .skill-stats-container {
    padding: 0 0.25rem;
    gap: 0.4rem;
  }

  .skill-stat-card {
    padding: 0.6rem 0.8rem;
  }

  .stat-icon {
    font-size: 1rem;
  }

  .stat-value {
    font-size: 1rem;
  }

  .stat-label {
    font-size: 0.55rem;
  }
}

/* High contrast mode support */
@media (prefers-contrast: high) {
  .parent__container {
    border: 2px solid var(--color-primary);
    background: rgba(255, 255, 255, 0.1);
  }

  .tooltip,
  .details {
    background: rgba(0, 0, 0, 0.95);
    border: 2px solid var(--color-primary);
  }

  .theme-button {
    border-width: 3px;
  }

  .skill-stat-card {
    border: 2px solid rgba(255, 255, 255, 0.3);
  }
}

/* Reduced motion support */
@media (prefers-reduced-motion: reduce) {
  .parent__container,
  .canvas,
  .tooltip,
  .details,
  .theme-button,
  .control-btn,
  .skill-stat-card {
    transition: none;
    animation: none;
  }

  .parent__container:hover canvas {
    transform: none;
  }
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 106:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(601);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_animate_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(136);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(972);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_skills_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(763);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_project_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(806);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_about_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(742);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_contact_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(721);
// Imports








var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_animate_css__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_skills_css__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_project_css__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_about_css__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_contact_css__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* @import "responsive.css"; */

:root {
  --color-primary: #5462ffe4;
  --color-primary-rgb: 84, 98, 255;
  --color-secondary: #fff3f1;
  --color-secondary-dark: #808793;
  --color-light: #fff;
  --transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  --radius: 0.75rem;
  --color-secondary-text: #808793;

  --bg1: linear-gradient(135deg, #f8f9ff 0%, #e8ecff 100%);
  --bg2: linear-gradient(135deg, #f0f2f5 0%, #dde1e7 100%);
  --text-color: #374151;
  --overlay-bg: linear-gradient(
    135deg,
    rgba(0, 0, 0, 0.85) 0%,
    rgba(84, 98, 255, 0.9) 100%
  );
  --overlay-text: #fff;

  /* Enhanced shadow system */
  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
  --shadow-primary: 0 12px 40px rgba(var(--color-primary-rgb), 0.15);
}

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

html {
  box-sizing: border-box;
}

body {
  line-height: 1.4;
  color: var(--color-secondary);
  font-family: "Raleway", sans-serif;
  background-image: radial-gradient(
    circle,
    #051937,
    #0e142c,
    #100f21,
    #0d0817,
    #05020a
  );
}
.brand {
  font-size: 1.3rem;
  font-weight: 900;
  color: var(--color-light);
}
.center {
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

#content {
  max-width: 1200px;
  width: 90%;
  margin: 0 auto;
}

img {
  max-width: 100%;
  height: auto;
}

a {
  text-decoration: none;
  color: inherit;
}

/* header section */
.header {
  display: flex;
  justify-content: space-between;
  height: 50px;
  align-items: center;
  padding: 0 15px;

  width: 90%;
  margin: 0 auto;
  position: sticky;
  top: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.3);
  z-index: 99;
  background: rgba(29, 29, 29, 0.8);
  backdrop-filter: blur(10px);
  border-radius: var(--radius);
}

.burger-menu {
  display: none;
  font-size: 20px;
  cursor: pointer;
  background: transparent;
  border: none;
  color: var(--color-light);
  padding: 5px;
  line-height: 0;
}

.nav__menu {
  display: flex;
  margin-bottom: 0.5rem;
}

.nav__btn {
  color: #fff;
  font-weight: 700;
}

.nav__link {
  color: var(--color-light);
  background-color: transparent;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 0.8rem;
  font-weight: 600;
  transition: var(--transition);
  border: 1px solid var(--color-primary);
  position: relative;
  overflow: hidden;
  transform: translateY(0);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}

.nav__link::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    135deg,
    var(--color-primary),
    var(--color-primary-variant, #6366f1)
  );
  transform: translateY(100%);
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: -1;
  border-radius: inherit;
}

.nav__link::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  transition: width 0.6s ease, height 0.6s ease;
}

.nav__link:hover {
  color: var(--color-white, #ffffff);
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  border-color: transparent;
}

.nav__link:hover::before {
  transform: translateY(0);
  color: #e2e2e2;
}

.nav__link:hover::after {
  width: 300px;
  height: 300px;
}

.nav__link:active {
  transform: translateY(-1px);
  transition: transform 0.1s ease;
}

.nav__link:focus {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
  transform: translateY(-1px);
  border-color: transparent;
}

/* Active state styles */
.nav__btn.active {
  color: var(--color-primary);
  font-weight: bold;
}

.nav__link.active {
  border-color: var(--color-primary);
}

.hero {
  min-height: 80vh;
  display: flex;
  overflow: hidden;
}

.hero__content {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  margin-top: 4rem;
  width: 50%;
}

.main__title {
  font-family: "Mitr", sans-serif;
  font-size: 2rem;
  padding-right: 3rem;
  font-weight: 400;
  color: var(--color-light);
  line-height: 40px;
  text-transform: capitalize;

  display: flex;
  flex-direction: column;
}

.main__title-text {
  opacity: 0;
  transform: translate3d(0, -2px, 0);
  animation-name: fadeIn;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;
}

.sub__title {
  font-size: 0.9rem;
  color: var(--color-secondary-text);
  font-weight: 300;
  width: 70%;
  margin: 1.2rem 0;
  transform: translateY(10px);
  animation: slideTextDown 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

.btn {
  font-size: 1.125rem;
  font-family: "Mitr", sans-serif;
  border: 0;
  text-transform: capitalize;
  cursor: pointer;
}

.btn--hero {
  color: var(--color-light);
  background: linear-gradient(135deg, var(--color-primary), #7c3aed);
  border-radius: 7px;
  animation: slideUp 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.5s both;
  border: 1px solid var(--color-primary);
  font-size: 0.9rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 8px 25px rgba(84, 98, 255, 0.3),
    0 0 0 1px rgba(255, 255, 255, 0.1);
  padding: 0.8rem 2rem;
}

.btn--hero:hover {
  background-color: var(--color-primary);
  backdrop-filter: blur(10px);
  border-color: var(--color-primary);
  box-shadow: 0 0 10px rgba(255, 255, 225, 0.6);
}

.nav__btn {
  margin-right: 1.2rem;
  background-color: transparent;
  border: 2px solid transparent;
  transition: var(--transition);
  font-size: 0.9rem;
  font-weight: 400;
}

.nav__btn:hover {
  color: var(--color-primary);
  border-bottom-color: var(--color-primary);
}

.hero__img {
  animation: slideInRight 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.3s both;
  width: 50%;
}
.about__hero-content {
  flex: 1;
}

.hero-flex {
  flex: 1;
}

.alert__badge {
  position: fixed;
  bottom: 5%;
  right: 2%;
  background-color: var(--color-secondary-text);
  min-width: 150px;
  min-height: 30px;
  border-radius: var(--radius);
  padding: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.text__box {
  position: absolute;
  bottom: 5%;
  left: 5%;
  width: 60%;
  height: 8rem;
  background-color: var(--color-secondary-text);
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;
  z-index: 11;
  animation: slideInLeft 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.5s both;
}

.footer {
  width: 100%; /* Take full width */
  padding: 20px; /* Add padding */
  display: flex;
  justify-content: center;
}

.footer > p span {
  font-family: "Mitr", sans-serif;
  font-weight: 400;
}

.mobile__menu {
  display: none;
}

.mobile__menu {
  transition: transform 0.3s ease-in-out;
  transform: translateX(-100%);
}

.mobile__menu.open {
  transform: translateX(0);
}

.menu-open {
  overflow: hidden;
}

.menu-open::after {
  content: "";
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 98;
}

/* iPhone 12 Pro Max (428px width) */
@media (max-width: 428px) and (min-width: 401px) {
  .hero {
    overflow-y: scroll;
  }
  
  .mobile__menu .nav__btn {
    font-size: 0.85rem;
  }

  .parent__container:hover canvas {
    transform: scale(1.3);
  }

  .main__title {
    font-size: 1.6rem;
    line-height: 28px;
    text-align: left;
  }

  .sub__title {
    width: 100%;
  }

  .nav__link {
    display: none;
  }
  
  .burger-menu {
    display: block;
  }

  #home .hero__background-shape {
    width: 320px;
    height: 320px;
  }

  #home .image__wrapper {
    width: 220px;
    height: 220px;
    padding: 4px;
  }

  #home .image__wrapper img {
    border-width: 2px;
  }

  #home .animate-profile {
    animation: floatAnimation 3s ease-in-out infinite;
  }

  .icon__container .card__icon {
    width: 52px;
    height: auto;
  }
  
  .stack__card {
    gap: 0.8rem;
    margin: 0.8rem 0;
  }

  .card__container {
    padding: 6px;
    width: 8.5rem;
    height: 8.5rem;
  }

  #contact .hero__img {
    width: 100%;
  }

  .stack__card {
    position: relative;
    top: 0;
    left: 0;
    transform: translate(0, 0);
    margin-top: 2rem;
  }

  /* Skills section specific adjustments for iPhone 12 Pro Max */
  #skills .parent__container {
    width: 95%;
    height: 80%;
    margin: 0 auto;
  }
}

/* Small devices  */
@media (max-width: 400px) {
  .hero {
    overflow-y: scroll;
  }
  .mobile__menu .nav__btn {
    font-size: 0.8rem;
  }

  .parent__container:hover canvas {
    transform: scale(1.4);
  }

  .main__title {
    font-size: 1.5rem;
    line-height: 25px;
    text-align: left;
  }

  .sub__title {
    width: 100%;
  }

  .nav__link {
    display: none;
  }
  .burger-menu {
    display: block;
  }

  #home .hero__background-shape {
    width: 300px;
    height: 300px;
  }

  #home .image__wrapper {
    width: 200px;
    height: 200px;
    padding: 3px;
  }

  #home .image__wrapper img {
    border-width: 2px;
  }

  #home .animate-profile {
    animation: floatAnimation 3s ease-in-out infinite;
  }

  /* Project section styles handled in project.css */

  .icon__container .card__icon {
    width: 50px;
    height: auto;
  }
  .stack__card {
    gap: 0.6rem;
    margin: 0.7rem 0;
  }

  .card__container {
    padding: 5px;
    width: 8rem;
    height: 8rem;
  }

  #contact .hero__img {
    width: 100%;
  }

  .stack__card {
    position: relative;
    top: 0;
    left: 0;
    transform: translate(0, 0);
    margin-top: 2rem;
  }
}

@media (max-width: 576px) {
  .brand {
    font-size: 0.8rem;
  }

  .nav__link {
    display: none;
  }
  .burger-menu {
    display: block;
  }

  .hero {
    margin: auto 0;
  }

  .hero__content,
  .hero__img {
    width: 100%;
  }

  .parent__container {
    width: 100%;
    height: 100%;
  }

  canvas {
    width: 100% !important;
    height: 100% !important;
    object-fit: cover;
    border-radius: 15px;
    transition: transform 0.3s;
  }
  /* Project section styles handled in project.css */

  #contact .hero__img {
    width: 100%;
  }

  .hero {
    overflow-y: visible;
  }

  .footer {
    text-wrap: wrap;
    text-align: center;
  }
}

/* mobile devices */
@media (max-width: 767px) {
  .hero {
    flex-direction: column;
  }

  .hero__content {
    margin: 4rem 0 1rem 0;
  }

  .hero,
  .hero__content,
  .sub__title,
  .hero__img,
  #contact .hero__img {
    width: 100%;
  }

  #home .hero__background-shape {
    width: 380px;
    height: 380px;
  }

  #home .image__wrapper {
    width: 240px;
    height: 240px;
    padding: 4px;
  }

  #home .image__wrapper img {
    border-width: 3px;
  }

  .hero-flex {
    flex: 0;
  }

  .parent__container {
    height: 450px;
    width: 100%;
  }

  /* Skills section mobile adjustments */
  #skills .parent__container {
    height: 400px;
    width: 95%;
    margin: 0 auto;
  }

  .nav__link,
  .nav__menu {
    display: none;
  }
  .burger-menu {
    display: block;
  }

  .mobile__menu.open {
    display: flex;
    transform: translateY(0);
    opacity: 1;
  }

  .mobile__menu .nav__btn {
    font-size: 0.6rem;
    margin-right: 0.5rem;
  }

  .sub__title {
    width: 100%;
  }

  .project-card {
    width: 100%;
  }

  .modal-content {
    width: 90%;
    height: auto;
  }
  .nav__link,
  .nav__menu {
    display: none;
  }
  .burger-menu {
    display: block;
  }

  .mobile__menu {
    display: flex;
  }

  .mobile__menu {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: rgb(42, 41, 41);
    padding: 10px 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    justify-content: space-between;
    border-radius: var(--radius);
    margin-top: 5px;
    transform: translateY(-10px);
    opacity: 0;
    transition: var(--transition);
  }

  .mobile__menu.open {
    display: flex;
    transform: translateY(0);
    opacity: 1;
  }
}

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) {
  .parent__container {
    width: 80%;
    height: 80%;
  }

  .form__container {
    max-width: 100%;
  }
}

/* Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {
  .parent__container {
    width: 100%;
    height: 100%;
  }
}

@keyframes spin {
  to {
    transform: rotate(1turn);
  }
}

/* *****************Landscape and Tablet************* */

/* Small tablets (iPad Mini, etc.) */
@media (min-width: 768px) and (max-width: 820px) {
  body {
    font-size: 17px;
  }

  .hero {
    flex-direction: column;
    min-height: 80vh;
  }

  .hero,
  .hero__content,
  .sub__title,
  .hero__img {
    width: 100%;
  }

  /* Contact section specific small tablet layout */
  #contact .hero {
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }

  #contact .hero__content {
    width: 100%;
  }

  #contact .hero__img {
    width: 100%;
  }

  .hero__content {
    margin-top: 1.5rem;
    margin-bottom: 1rem;
  }

  .hero-flex {
    flex: 0;
  }

  .parent__container {
    width: 95%;
    height: 55vh;
    max-height: 450px;
    margin: 0 auto;
  }

  /* Apply iPad Pro layout (3x2 grid) to smaller tablets */
  .stack__card {
    justify-content: space-between;
  }

  .card__container {
    width: 13rem;
    height: 13rem;
  }

  /* Skills section specific tablet adjustments */
  #skills .hero {
    min-height: 90vh;
  }

  #skills .hero__content {
    margin-bottom: 2rem;
  }

  #skills .parent__container {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  /* Ensure canvas scales properly on tablets */
  #skills canvas {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
}

/* Large tablets and small desktops */
@media (min-width: 821px) and (max-width: 1024px) {
  body {
    font-size: 18px;
  }

  .hero {
    flex-direction: column;
    min-height: 85vh;
  }

  .hero,
  .hero__content,
  .sub__title,
  .hero__img {
    width: 100%;
  }

  /* Contact section specific tablet layout */
  #contact .hero {
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }

  #contact .hero__content {
    width: 100%;
  }

  #contact .hero__img {
    width: 100%;
  }

  .hero__content {
    margin-top: 2rem;
    margin-bottom: 1rem;
  }

  .hero-flex {
    flex: 0;
  }

  .parent__container {
    width: 100%;
    height: 60vh;
    max-height: 500px;
    margin: 0 auto;
  }

  .stack__card {
    justify-content: space-between;
  }

  .card__container {
    width: 13rem;
    height: 13rem;
  }

  .form__container {
    max-width: 100%;
  }

  /* Skills section specific tablet adjustments */
  #skills .hero {
    min-height: 90vh;
  }

  #skills .hero__content {
    margin-bottom: 2rem;
  }

  #skills .parent__container {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  /* Ensure canvas scales properly on tablets */
  #skills canvas {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }

  /* Navigation improvements for tablets */
  .nav__link {
    padding: 8px 16px;
    font-size: 0.75rem;
    margin-right: 0.8rem;
  }

  .header {
    padding: 0 20px;
  }

  /* Content wrapper improvements */
  #content {
    width: 90%;
  }
}

@media (max-height: 500px) and (orientation: landscape) {
  body {
    font-size: 12px;
  }
  .hero {
    flex-direction: column;
    overflow: scroll;
  }

  .hero__content,
  .hero__img {
    width: 100%;
  }

  .parent__container {
    width: 100%;
    height: 400px;
  }

  .card__container {
    width: 13rem;
    height: 12rem;
  }

  .stack__card {
    position: relative;
    top: 0;
    left: 0;
    transform: translate(0, 0);
    margin-top: 2rem;
  }

  /* Project section styles handled in project.css */
}

/* ******************************** */

/*  */
@media screen and (max-width: 1024px) {
  #home .hero__background-shape {
    width: 450px;
    height: 450px;
    border: 1px solid white;
  }

  #home .image__wrapper {
    width: 280px;
    height: 280px;
  }
}

@media screen and (max-width: 480px) {
  #home .hero__background-shape {
    width: 300px;
    height: 300px;
  }

  #home .image__wrapper {
    width: 200px;
    height: 200px;
    padding: 3px;
  }

  #home .image__wrapper img {
    border-width: 2px;
  }

  #home .animate-profile {
    animation: floatAnimation 3s ease-in-out infinite;
  }
}

/* Cookie Consent Styles */
.cookie-consent {
  position: fixed;
  bottom: 20px;
  right: 20px;
  max-width: 400px;
  background: linear-gradient(
    135deg,
    var(--color-primary),
    var(--color-secondary-text)
  );
  border: 1px solid rgba(84, 98, 255, 0.2);
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15),
    0 0 0 1px rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  z-index: 1000;
  font-family: "Mitr", sans-serif;
}

.cookie-message {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin-bottom: 16px;
}

.cookie-icon {
  font-size: 24px;
  flex-shrink: 0;
}

.cookie-message p {
  margin: 0;
  font-size: 14px;
  line-height: 1.5;
  color: var(--color-dark);
}

.cookie-buttons {
  display: flex;
  gap: 10px;
  align-items: center;
  flex-wrap: wrap;
}

.cookie-btn {
  padding: 8px 16px;
  border: none;
  border-radius: 6px;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  font-family: "Mitr", sans-serif;
}

.cookie-accept {
  background: linear-gradient(135deg, var(--color-primary), #7c3aed);
  color: white;
  box-shadow: 0 4px 12px rgba(84, 98, 255, 0.3);
  border: 2px solid var(--color-primary);
}

.cookie-accept:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(84, 98, 255, 0.4);
}

.cookie-decline {
  background: rgba(var(--color-primary), 0.15);
  color: var(--color-secondary);
  border: 1px solid rgba(107, 114, 128, 0.2);
}

.cookie-decline:hover {
  background: rgba(var(--color-primary), 0.25);
  transform: translateY(-1px);
}

.cookie-learn-more {
  font-size: 12px;
  color: var(--color-primary);
  text-decoration: none;
  margin-left: auto;
  padding: 4px 8px;
  border-radius: 4px;
  transition: all 0.3s ease;
}

.cookie-learn-more:hover {
  background: rgba(84, 98, 255, 0.1);
  text-decoration: underline;
}

/* Responsive adjustments */
@media (max-width: 480px) {
  .cookie-consent {
    bottom: 10px;
    right: 10px;
    left: 10px;
    max-width: none;
  }

  .cookie-buttons {
    justify-content: space-between;
  }

  .cookie-btn {
    flex: 1;
    min-width: 80px;
  }
}

/* Duplicate cookie styles removed - keeping only the original ones above */
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 518:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


;// ./src/images/icons/react.svg
/* harmony default export */ const react = (__webpack_require__.p + "images/react.5e2f41da636b894b3943e4551033ef33.svg");
;// ./src/images/icons/git.svg
/* harmony default export */ const git = (__webpack_require__.p + "images/git.be6c11a0bddd2ee53a5390e7f3a6377e.svg");
;// ./src/images/icons/html.svg
/* harmony default export */ const html = (__webpack_require__.p + "images/html.5ae349e9a69b4708bcdcf760c4d71cc5.svg");
;// ./src/images/icons/css.svg
/* harmony default export */ const css = (__webpack_require__.p + "images/css.430aaa69183e75c38c24960b0cf27ef2.svg");
;// ./src/images/icons/js.svg
/* harmony default export */ const js = (__webpack_require__.p + "images/js.4222f3c84649466674aac6e4e503d59f.svg");
;// ./src/images/icons/vuejs.svg
/* harmony default export */ const vuejs = (__webpack_require__.p + "images/vuejs.c443ae87739e672eadc19dbf75fee30a.svg");
;// ./src/utils/constant.js







const CLASSES = {
  HERO: "hero",
  HERO_CONTENT: "hero__content hero-flex",
  HERO_CONTENT_CONTAINER: "hero__content-container",
  MAIN_TITLE: "main__title",
  SUB_TITLE: "sub__title",
  BTN_HERO: "btn btn--hero",
  HERO_IMAGE: "hero__img about__hero-content",
  STACK_CARD: "stack__card",
  CARD_CONTAINER: "card__container",
  ICON_CONTAINER: "icon__container",
  CARD_ICON: "card__icon",
  CARD_TITLE: "card__title",
  PROGRESS_CONTAINER: "card__progress-container",
  PROGRESSBAR: "card__progressbar",
  TEXT_BOX: "text__box",
};

const TEXTS = {
  BUTTON_TEXT: "Get Resume",
  TITLES: ["Turning Designs", "into Reality"],
  ABOUT_TEXT:
    "I am a passionate frontend developer with a strong focus on creating visually appealing and user-friendly web applications. With a solid foundation in HTML, CSS, and JavaScript, I bring designs to life and ensure seamless user experiences. I am constantly expanding my skill set and staying up-to-date with the latest frontend technologies to deliver cutting-edge solutions. I am dedicated to delivering high-quality code and collaborating with cross-functional teams to create exceptional digital experiences. Let's work together to bring your ideas to life!",
};

const STACK_DATA = [
  { icon: vuejs, text: "Vuejs", width: 60 },
  { icon: git, text: "Git", width: 60 },
  { icon: html, text: "HTML", width: 80 },
  { icon: css, text: "CSS", width: 80 },
  { icon: js, text: "JavaScript", width: 70 },
  { icon: react, text: "React", width: 70 },
];

;// ./src/utils/utils.js


function createSvgIcon(svgIcon, options = {}, icon) {
  icon.innerHTML = svgIcon;

  const { size = "24px", color = "#000" } = options;

  // Apply styles to the icon container
  Object.assign(icon.style, {
    width: size,
    height: size,
    fill: color,
  });

  // Apply attributes to the SVG element if it exists
  const svgElement = icon.firstElementChild;
  if (svgElement) {
    ["width", "height", "fill"].forEach((attr) =>
      svgElement.setAttribute(attr, options[attr] || icon.style[attr])
    );
  }

  return icon;
}

function createHtmlElement(element, attributes) {
  const htmlElement = document.createElement(element);

  if (attributes) {
    for (const [key, value] of Object.entries(attributes)) {
      if (value !== undefined && value !== null && value !== "") {
        htmlElement.setAttribute(key, value);
      } else {
        htmlElement.removeAttribute(key);
      }
    }
  }
  return htmlElement;
}

function sectionButton(text, type = "", classname) {
  const btn = createHtmlElement("button", {
    class: classname,
    type: type,
  });
  btn.innerText = text;
  return btn;
}

function renderTitle(titles, container) {
  titles.forEach((title, index) => {
    const titleSpan = createHtmlElement("span", { class: "main__title-text" });
    titleSpan.innerText = title;

    const animationDuration = (index + 2) * 0.5;
    titleSpan.style.animationDuration = `${animationDuration}s`;

    container.appendChild(titleSpan);
  });

  return container;
}

function renderSubTitle(text, classname) {
  const programmingLanguages = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "TypeScript",
    "SCSS",
    "Git",
    "Bootstrap",
    "Tailwind",
  ];

  let highlightedText = text
    .split(" ")
    .map((word) => {
      let cleanWord = word.replace(/[\.,:]/g, ""); // Remove punctuation for accurate matching
      if (programmingLanguages.includes(cleanWord)) {
        return `<span style="color: #5462ffe4; font-weight: bolder">${word}</span>`;
      }
      return word;
    })
    .join(" ");

  const subTitle = createHtmlElement("p", { class: classname });
  subTitle.innerHTML = highlightedText; // Use innerHTML to render the highlighted text
  return subTitle;
}

function utils_select(selector, context = document) {
  return context.querySelector(selector);
}

function selectAll(selector, context) {
  if (!context) {
    context = document;
  }
  return context.querySelectorAll(selector);
}

function alertBadge(text, color, element) {
  const textContainer = createHtmlElement("div", { class: "alert__badge" });

  const textElement = createHtmlElement("p");
  textElement.innerText = text;
  textElement.style.color = color;

  textContainer.appendChild(textElement);
  textContainer.classList.add("slide-in");

  setTimeout(() => {
    textContainer.classList.add("slide-out");
  }, 3000);

  document.body.appendChild(textContainer);
  return textContainer;
}

// New cookie consent function
function cookieConsent() {
  // Check if user has already made a choice
  if (localStorage.getItem('cookieConsent')) {
    return;
  }

  const cookieContainer = createHtmlElement("div", { 
    class: "cookie-consent",
    id: "cookie-consent-banner"
  });

  // Cookie message
  const messageElement = createHtmlElement("div", { class: "cookie-message" });
  messageElement.innerHTML = `
    <span class="cookie-icon">🍪</span>
    <p>We use cookies to enhance your browsing experience and analyze our traffic. By clicking "Accept", you consent to our use of cookies.</p>
  `;

  // Button container
  const buttonContainer = createHtmlElement("div", { class: "cookie-buttons" });

  // Accept button
  const acceptBtn = createHtmlElement("button", { 
    class: "cookie-btn cookie-accept",
    type: "button"
  });
  acceptBtn.innerText = "Accept";
  acceptBtn.addEventListener("click", () => {
    localStorage.setItem('cookieConsent', 'accepted');
    closeCookieBanner(cookieContainer);
  });

  // Decline button
  const declineBtn = createHtmlElement("button", { 
    class: "cookie-btn cookie-decline",
    type: "button"
  });
  declineBtn.innerText = "Decline";
  declineBtn.addEventListener("click", () => {
    localStorage.setItem('cookieConsent', 'declined');
    closeCookieBanner(cookieContainer);
  });

  // Learn more link
  const learnMoreLink = createHtmlElement("a", { 
    class: "cookie-learn-more",
    href: "#"
  });
  learnMoreLink.innerText = "Learn More";
  learnMoreLink.addEventListener("click", (e) => {
    e.preventDefault();
    alert("Cookie Policy: We use essential cookies for site functionality and analytics cookies to improve user experience.");
  });

  buttonContainer.append(acceptBtn, declineBtn, learnMoreLink);
  cookieContainer.append(messageElement, buttonContainer);

  // Add slide-in animation
  cookieContainer.classList.add("slide-in");

  document.body.appendChild(cookieContainer);
  return cookieContainer;
}

function closeCookieBanner(container) {
  container.classList.remove("slide-in");
  container.classList.add("slide-out");
  
  setTimeout(() => {
    if (container.parentNode) {
      container.parentNode.removeChild(container);
    }
  }, 800);
}
function createElement(tag, attributes = {}, textContent = null) {
  // Create a new element tag name
  const element = document.createElement(tag);

  // Set any attributes
  for (const [key, value] of Object.entries(attributes)) {
    element.setAttribute(key, value);
  }
  // Set the inner text
  if (textContent) {
    element.textContent = textContent;
  }

  return element;
}

//create stack helper function
function createStackCard(icon, text, width) {
  const cardContainer = createHtmlElement("div", {
    class: CLASSES.CARD_CONTAINER,
  });
  const iconContainer = createHtmlElement("figure", {
    class: CLASSES.ICON_CONTAINER,
  });
  const cardIcon = createHtmlElement("img", {
    class: CLASSES.CARD_ICON,
    src: icon || "",
    alt: text,
  });

  // Create the title element
  const cardTitle = document.createElement("figcaption", {
    class: CLASSES.CARD_TITLE,
  });
  cardTitle.innerText = text || "";

  const cardProgressContainer = createHtmlElement("div", {
    class: CLASSES.PROGRESS_CONTAINER,
    ["data-initial-width"]: width,
    role: "progressbar",
    ["aria-valuemax"]: "100",
    ["aria-valuemin"]: "0",
    ["aria-valuenow"]: width,
  });

  const cardProgressbar = createHtmlElement("div", {
    class: CLASSES.PROGRESSBAR,
    role: "presentation",
  });
  cardProgressbar.innerText = `${width}%`;

  cardProgressContainer.appendChild(cardProgressbar);

  iconContainer.append(cardIcon, cardTitle);
  // Append elements to the card
  cardContainer.append(iconContainer, cardProgressContainer);

  const element = cardContainer.querySelector(".card__progressbar");
  return cardContainer;
}

class ProgressBar {
  constructor(container) {
    this.container = container;
    this.progressBar = container.querySelector(".card__progressbar");
    this.initialWidth = parseFloat(container.dataset.initialWidth);
    this.progressBar.style.width = "0%";
  }
  initializeProgressBars(width) {
    this.progressBar.style.width = `${width}%`;
  }
}

//This function animate the progress bar on mouse enter and leave
function initializeProgressBars() {
  const progressContainer = document.querySelectorAll(
    ".card__progress-container"
  );
  progressContainer.forEach((container) => {
    const progressBar = new ProgressBar(container);
    const parent = container.parentNode;

    parent.addEventListener("mouseenter", () => {
      progressBar.initializeProgressBars(progressBar.initialWidth);
    });

    parent.addEventListener("mouseleave", () => {
      progressBar.initializeProgressBars(0);
    });
  });
  return progressContainer;
}

;// ./src/modules/loadHeader.js


//header creation
function header() {
  const header = createHtmlElement("header", {
    class: "header",
    ["data-aos"]: "fade-down",
    role: "banner",
  });

  const brand = createElement(
    "div",
    {
      class: "brand",
      role: "heading",
      "aria-level": "1",
    },
    "<blaqDev />"
  );

  const nav = createHtmlElement("nav", {
    class: "nav__menu",
    role: "navigation",
    "aria-label": "Main navigation",
  });

  //nav buttons - Remove # from href
  const homeButton = createButton("Home", "/", true);
  const aboutButton = createButton("About", "/about");
  const contactButton = createButton("Contact", "/contact");
  const skillButton = createButton("Skills", "/skills");
  const projectButton = createButton("Projects", "/projects");

  const hireMeLink = createButton(
    "Hire Me",
    "/contact",
    false,
    "nav__link hire-me-btn",
    "nav__link"
  );

  nav.append(
    ...[homeButton, aboutButton, skillButton, projectButton, contactButton]
  );
  const mobileNav = mobileMenu();

  // SVG icons for hamburger and close
  const hamburgerIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </svg>`;

  const closeIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>`;

  const burgerMenu = createHtmlElement("button", {
    class: "burger-menu",
    id: "burger-menu",
    "aria-label": "Toggle mobile menu",
    "aria-expanded": "false",
    role: "button",
  });

  // Enhanced burger menu implementation
  burgerMenu.innerHTML = hamburgerIcon;

  // Cache mobile menu reference for better performance
  let cachedMobileMenu = null;

  const getMobileMenu = () => {
    if (!cachedMobileMenu) {
      cachedMobileMenu = document.querySelector(".mobile__menu");
      if (cachedMobileMenu && !cachedMobileMenu.id) {
        cachedMobileMenu.id = "mobile-menu";
      }
    }
    return cachedMobileMenu;
  };

  const updateBurgerMenuState = (isExpanded) => {
    burgerMenu.setAttribute("aria-expanded", isExpanded.toString());
    burgerMenu.innerHTML = isExpanded ? closeIcon : hamburgerIcon;

    const mobileMenu = getMobileMenu();
    if (mobileMenu) {
      mobileMenu.classList.toggle("open", isExpanded);
    }
    document.body.classList.toggle("menu-open", isExpanded);
  };

  burgerMenu.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();

    try {
      const mobileMenu = getMobileMenu();
      if (!mobileMenu) {
        console.warn("Mobile menu not found");
        return;
      }

      const isExpanded = burgerMenu.getAttribute("aria-expanded") === "true";
      updateBurgerMenuState(!isExpanded);

      // Focus management for accessibility
      if (!isExpanded) {
        const firstFocusable = mobileMenu.querySelector(
          'a, button, [tabindex]:not([tabindex="-1"])'
        );
        if (firstFocusable) {
          setTimeout(() => firstFocusable.focus(), 100);
        }
      }
    } catch (error) {
      console.error("Error toggling mobile menu:", error);
    }
  });

  // Add keyboard support
  burgerMenu.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      burgerMenu.click();
    } else if (event.key === "Escape") {
      const isExpanded = burgerMenu.getAttribute("aria-expanded") === "true";
      if (isExpanded) {
        updateBurgerMenuState(false);
        burgerMenu.focus();
      }
    }
  });

  header.append(mobileNav);
  header.append(brand, nav, hireMeLink, burgerMenu);

  // Enhanced click outside handler with error handling
  document.addEventListener("click", (e) => {
    try {
      const mobileMenu = getMobileMenu();
      const burgerMenuBtn = document.getElementById("burger-menu");

      if (!mobileMenu || !burgerMenuBtn || !e.target) {
        return;
      }

      const isMenuOpen = mobileMenu.classList.contains("open");
      const clickedInsideMenu = mobileMenu.contains(e.target);
      const clickedBurgerButton = burgerMenuBtn.contains(e.target);

      if (isMenuOpen && !clickedInsideMenu && !clickedBurgerButton) {
        updateBurgerMenuState(false);
        // Return focus to burger button for accessibility
        burgerMenuBtn.focus();
      }
    } catch (error) {
      console.error("Error handling outside click:", error);
    }
  });

  // Setup observers and keyboard navigation after header is created
  setupKeyboardNavigation();

  return header;
}

function mobileMenu() {
  const nav = createHtmlElement("nav", { class: "mobile__menu nav__menu" });

  //nav buttons - Remove # from href
  const homeButton = createButton("Home", "/", true);
  const aboutButton = createButton("About", "/about");
  const contactButton = createButton("Contact", "/contact");
  const skillButton = createButton("Skills", "/skills");
  const projectButton = createButton("Projects", "/projects");

  nav.append(
    ...[homeButton, aboutButton, skillButton, projectButton, contactButton]
  );
  return nav;
}

// Modified createButton function to use clean URLs without hash
function createButton(
  text,
  path,
  isActive = false,
  className = "btn nav__btn",
  id = ""
) {
  const link = createHtmlElement("a", {
    class: className,
    href: path,
    id: id || null,
    role: "menuitem",
    tabindex: "0",
    "aria-current": isActive ? "page" : "false",
  });
  link.textContent = text;
  if (isActive) {
    link.classList.add("active");
  }

  link.addEventListener("click", (e) => {
    e.preventDefault();

    // Convert path to section name
    const sectionName = path === "/" ? "home" : path.substring(1);

    // Use pushState to update URL without hash
    history.pushState({ section: sectionName }, "", path);

    showSection(sectionName);
    setActiveLink(path);

    // Update mobile menu links
    const allLinks = document.querySelectorAll(".nav__btn, .nav__link");
    allLinks.forEach((link) => {
      if (link.getAttribute("href") === path) {
        link.classList.add("active");
        link.setAttribute("aria-current", "page");
      } else {
        link.classList.remove("active");
        link.setAttribute("aria-current", "false");
      }
    });
  });

  return link;
}

// Add keyboard navigation
function setupKeyboardNavigation() {
  const links = document.querySelectorAll(".nav__btn, .nav__link");
  links.forEach((link) => {
    link.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        link.click();
      }
    });
  });
}

//function to show sections
function showSection(sectionName) {
  const sections = selectAll(".hero");
  sections.forEach((section) => {
    const shouldShow = section.id === sectionName.toLowerCase();
    section.classList.toggle("active-section", shouldShow);
    section.style.display = shouldShow ? "flex" : "none";

    // Close mobile menu when section changes with enhanced error handling
    try {
      const mobileMenu = document.querySelector(".mobile__menu");
      const burgerMenuBtn = document.getElementById("burger-menu");

      if (
        mobileMenu &&
        burgerMenuBtn &&
        mobileMenu.classList.contains("open")
      ) {
        mobileMenu.classList.remove("open");
        document.body.classList.remove("menu-open");
        burgerMenuBtn.setAttribute("aria-expanded", "false");
        // Reset burger icon to hamburger when menu closes
        burgerMenuBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>`;
      }
    } catch (error) {
      console.error("Error closing mobile menu on section change:", error);
    }
  });
}

// Function to set active link based on path
function setActiveLink(path) {
  const allLinks = document.querySelectorAll(".nav__btn, .nav__link");
  allLinks.forEach((link) => {
    if (link.getAttribute("href") === path) {
      link.classList.add("active");
      link.setAttribute("aria-current", "page");
    } else {
      link.classList.remove("active");
      link.setAttribute("aria-current", "false");
    }
  });
}

// Helper function to get section from current path
function getSectionFromPath() {
  const path = window.location.pathname;
  if (path === "/" || path === "") {
    return "home";
  }
  return path.substring(1); // Remove leading slash
}

// Helper function to get path from section
function getPathFromSection(section) {
  return section === "home" ? "/" : `/${section}`;
}

// Initial setup and popstate event handling
window.addEventListener("DOMContentLoaded", () => {
  const currentSection = getSectionFromPath();
  const currentPath = getPathFromSection(currentSection);

  showSection(currentSection);
  setActiveLink(currentPath);
});

window.addEventListener("popstate", (event) => {
  event.preventDefault();
  const currentSection = getSectionFromPath();
  const currentPath = getPathFromSection(currentSection);

  showSection(currentSection);
  setActiveLink(currentPath);
});

/* harmony default export */ const loadHeader = (header);

;// ./src/modules/loadFooter.js

function footer() {
  const footer = createElement("footer", { class: "footer" });
  const paragraph = createElement("p", { class: "paragraph" });

  paragraph.textContent = `Copyright ©️ All rights reserved, made with 🖤 by Jayblacc😊 ${new Date().getFullYear()}`;

  const container = createElement("div", { class: "center" });

  container.appendChild(paragraph);
  footer.appendChild(container);
  return footer;
}

/* harmony default export */ const loadFooter = (footer);

;// ./src/images/user.jpg
/* harmony default export */ const user = (__webpack_require__.p + "images/user.a0d88a7a47a40f0217381c2f40d3b007.jpg");
;// ./src/sections/home.js




function homeSection() {
  const hero = createHtmlElement("section", {
    class: "hero home__section",
    id: "home",
  });

  const heroContents = createHeroContent();

  //Right side content
  const heroImage = createHeroImage();
  hero.append(...[heroContents, heroImage]);

  return hero;
}

//home sections functions
function createHeroImage() {
  const heroImage = createHtmlElement("div", {
    class: "hero__img hero__container",
  });

  // Create outer decorative ring
  const outerRing = createHtmlElement("div", {
    class: "hero__outer-ring",
  });

  // Create middle ring
  const middleRing = createHtmlElement("div", {
    class: "hero__middle-ring",
  });

  // Create main background shape
  const bgShape = createHtmlElement("div", {
    class: "hero__background-shape",
  });

  // Create image container with enhanced styling
  const imageContainer = createHtmlElement("div", {
    class: "image__container animate-profile",
  });

  const imgWrapper = createHtmlElement("div", {
    class: "image__wrapper",
  });

  const imgElement = createImageElement(user, "hero-image");

  // Create overlay for hover effect
  const overlay = createHtmlElement("div", {
    class: "image__overlay",
  });

  // Create floating particles
  const particles = createFloatingParticles();

  // Assemble the structure
  imgWrapper.appendChild(imgElement);
  imageContainer.appendChild(imgWrapper);
  imageContainer.appendChild(overlay);

  // Add all elements to hero image in proper order
  heroImage.appendChild(particles);
  heroImage.appendChild(outerRing);
  heroImage.appendChild(middleRing);
  heroImage.appendChild(bgShape);
  heroImage.appendChild(imageContainer);

  return heroImage;
}

function createImageElement(src, alt) {
  const img = new Image();
  img.src = src;
  img.alt = alt;
  img.loading = "lazy";

  // Add accessibility attributes
  img.setAttribute("role", "img");
  img.setAttribute(
    "aria-label",
    "Johnson - Front End Developer Profile Picture"
  );

  return img;
}

// Add floating particles effect
function createFloatingParticles() {
  const particlesContainer = createHtmlElement("div", {
    class: "floating-particles",
  });

  // Create multiple particles
  for (let i = 0; i < 6; i++) {
    const particle = createHtmlElement("div", {
      class: `particle particle-${i + 1}`,
    });
    particlesContainer.appendChild(particle);
  }

  return particlesContainer;
}

/* harmony default export */ const home = (homeSection);

//hero content
const HERO_TITLES = ["Hello", "I'm Johnson,", "web developer."];
const HERO_SUBTITLE =
  "Front End Developer / JavaScript Expert / Freelancer / Teacher";
function createHeroContent() {
  const heroContents = createHtmlElement("div", { class: "hero__content" });
  const mainHeader = createHtmlElement("h1", { class: "main__title" });

  renderTitle(HERO_TITLES, mainHeader);
  const paragraph = renderSubTitle(HERO_SUBTITLE, "sub__title");
  const heroButton = createHeroButton();

  heroContents.append(mainHeader, paragraph, heroButton);
  return heroContents;
}

function handleHeroButtonClick() {
  showSection("contact");
}

function createHeroButton() {
  const heroButton = createElement(
    "a",
    { class: "btn btn--hero", href: "/contact" },
    "Let's Chat"
  );
  heroButton.addEventListener("click", handleHeroButtonClick);
  return heroButton;
}

;// ./public/resume.pdf
const resume_namespaceObject = __webpack_require__.p + "documents/resume.pdf";
;// ./src/sections/about.js


// Import the PDF file


function createResumeButton() {
  // Use the imported PDF path
  const resumePath = resume_namespaceObject;
  const btn = createElement(
    "a",
    {
      class: CLASSES.BTN_HERO,
      href: resumePath,
      download: "MyResume.pdf",
      target: "_blank",
      rel: "noopener noreferrer",
    },
    TEXTS.BUTTON_TEXT
  );
  return btn;
}
//function to create hero content
function about_createHeroContent() {
  //left side
  const heroContents = createHtmlElement("div", {
    class: CLASSES.HERO_CONTENT,
  });

  const heroContentsContainer = createHtmlElement("div", {
    class: "hero__content-container",
  });

  const mainHeader = createHtmlElement("h1", { class: CLASSES.MAIN_TITLE });
  renderTitle(TEXTS.TITLES, mainHeader);

  const paragraph = renderSubTitle(TEXTS.ABOUT_TEXT, CLASSES.SUB_TITLE);

  const btn = createResumeButton();

  heroContentsContainer.append(mainHeader, paragraph, btn);
  heroContents.append(heroContentsContainer);

  return heroContents;
}

function createStackCards() {
  const cards = createHtmlElement("div", { class: CLASSES.STACK_CARD });
  STACK_DATA.forEach(({ icon, text, width }) => {
    const card = createStackCard(icon, text, width);
    cards.append(card);
  });

  const heroImage = createHtmlElement("div", {
    class: CLASSES.HERO_IMAGE,
  });

  return { cards, heroImage };
}

function aboutSection() {
  const hero = createHtmlElement("section", {
    class: CLASSES.HERO,
    id: "about",
    style: "display:none",
  });

  const heroContents = about_createHeroContent();

  //right side
  const { cards, heroImage } = createStackCards();

  heroImage.append(cards);

  hero.append(heroContents, heroImage);

  return hero;
}

/* harmony default export */ const about = (aboutSection);

;// ./src/images/svgIcons/icons.js
const github =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> <g> <path fill="none" d="M0 0h24v24H0z"/> <path d="M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 0 0 6.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.013-.662.788-.013 1.35.725 1.538 1.025.9 1.512 2.338 1.087 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10z"/> </g> </svg>';

  const linkedIn = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>'

  const skype = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"> <path d="M4.671 0c.88 0 1.733.247 2.468.702a7.423 7.423 0 0 1 6.02 2.118 7.372 7.372 0 0 1 2.167 5.215c0 .344-.024.687-.072 1.026a4.662 4.662 0 0 1 .6 2.281 4.645 4.645 0 0 1-1.37 3.294A4.673 4.673 0 0 1 11.18 16c-.84 0-1.658-.226-2.37-.644a7.423 7.423 0 0 1-6.114-2.107A7.374 7.374 0 0 1 .529 8.035c0-.363.026-.724.08-1.081a4.644 4.644 0 0 1 .76-5.59A4.68 4.68 0 0 1 4.67 0zm.447 7.01c.18.309.43.572.729.769a7.07 7.07 0 0 0 1.257.653c.492.205.873.38 1.145.523.229.112.437.264.615.448.135.142.21.331.21.528a.872.872 0 0 1-.335.723c-.291.196-.64.289-.99.264a2.618 2.618 0 0 1-1.048-.206 11.44 11.44 0 0 1-.532-.253 1.284 1.284 0 0 0-.587-.15.717.717 0 0 0-.501.176.63.63 0 0 0-.195.491.796.796 0 0 0 .148.482 1.2 1.2 0 0 0 .456.354 5.113 5.113 0 0 0 2.212.419 4.554 4.554 0 0 0 1.624-.265 2.296 2.296 0 0 0 1.08-.801c.267-.39.402-.855.386-1.327a2.09 2.09 0 0 0-.279-1.101 2.53 2.53 0 0 0-.772-.792A7.198 7.198 0 0 0 8.486 7.3a1.05 1.05 0 0 0-.145-.058 18.182 18.182 0 0 1-1.013-.447 1.827 1.827 0 0 1-.54-.387.727.727 0 0 1-.2-.508.805.805 0 0 1 .385-.723 1.76 1.76 0 0 1 .968-.247c.26-.003.52.03.772.096.274.079.542.177.802.293.105.049.22.075.336.076a.6.6 0 0 0 .453-.19.69.69 0 0 0 .18-.496.717.717 0 0 0-.17-.476 1.374 1.374 0 0 0-.556-.354 3.69 3.69 0 0 0-.708-.183 5.963 5.963 0 0 0-1.022-.078 4.53 4.53 0 0 0-1.536.258 2.71 2.71 0 0 0-1.174.784 1.91 1.91 0 0 0-.45 1.287c-.01.37.076.736.25 1.063z"/> </svg>'

const mail =
  '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"> <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/> </svg>';

const jsIcon = '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z" /> <path d="M7.5 8h3v8l-2 -1" /> <path d="M16.5 8h-2.5a0.5 .5 0 0 0 -.5 .5v3a0.5 .5 0 0 0 .5 .5h1.423a0.5 .5 0 0 1 .495 .57l-.418 2.93l-2 .5" /> </svg>'

;// ./src/images/hero-bg.jpg
/* harmony default export */ const hero_bg = (__webpack_require__.p + "images/hero-bg.366b791decf596118a955c508e0f93d4.jpg");
;// ./src/assets/images/portfolio.webp
/* harmony default export */ const portfolio = (__webpack_require__.p + "images/portfolio.068b3b618cbfb994abd2714c27b2222f.webp");
;// ./src/assets/images/recipe.webp
/* harmony default export */ const recipe = (__webpack_require__.p + "images/recipe.3c2339dc21aee4e945694e708ca2b843.webp");
;// ./src/assets/images/adv-todo.webp
/* harmony default export */ const adv_todo = (__webpack_require__.p + "images/adv-todo.db3721c1c5f679392acf93034c382520.webp");
;// ./src/assets/images/timer-app.webp
/* harmony default export */ const timer_app = (__webpack_require__.p + "images/timer-app.762761b54f1b008f7e9c14063d287e64.webp");
;// ./src/assets/images/book-library.webp
/* harmony default export */ const book_library = (__webpack_require__.p + "images/book-library.90d5becd99dee1a12abe775e12d1438e.webp");
;// ./src/assets/images/skill-portfolio.webp
/* harmony default export */ const skill_portfolio = (__webpack_require__.p + "images/skill-portfolio.f39e19ee970be74044974af5e1236acd.webp");
;// ./src/utils/variable.js








const items = [
  "JavaScript",
  "TypeScript",
  "HTML5",
  "CSS3",
  "React",
  "Webpack",
  "JQuery",
  "Git",
  "BEM",
  "SASS",
  "Next JS",
  "Node JS",
  "Vue JS",
];
const options = {
  size: "30px",
  color: "#858e99",
};

const aboutText = (/* unused pure expression or super */ null && (`I'm a passionate Frontend with three years of experience turning ideas into reality and still counting.
The thrill of bringing a static design to life with code is what gets me going every morning. I'm a passionate front-end developer who thrives on collaboration and turning your ideas into something truly impactful.
`));

const skillText = `Master of Modern Web Development: Crafting dynamic, visually stunning interfaces with a strong foundation in HTML, CSS, and JavaScript. Proficient in advanced technologies like React and TypeScript, with a knack for efficient styling using SCSS, Bootstrap, and Tailwind. Skilled in seamless version control with Git. Excels in communication, problem-solving, teamwork, and time management, all while infusing projects with a sense of humor.
Most important, I have got passion for learning and teaching, i believe the sky is the limit`;

const projectsData = [
  {
    type: "bg1",
    value: '<i class="fa-solid fa-utensils"></i>',
    label: "Recipe App",
    details:
      "Vanilla JS project with a focus on creating a visually appealing and interactive user interface. Features include recipe search, ingredient filtering, and meal planning capabilities.",
    stacks: ["HTML", "CSS", "JavaScript", "Vuejs", "SCSS"],
    gitLink: "https://github.com/cursorbot/cursorbot",
    demoLink: "https://recipe-app-demo.netlify.app",
    image: recipe,
    stats: {
      year: "2024",
      duration: "3 weeks",
      status: "Completed",
    },
  },
  {
    type: "bg1",
    value: '<i class="fa-solid fa-briefcase"></i>',
    label: "Dev Portfolio",
    details:
      "A comprehensive web application that allows users to track their breathing patterns and monitor their respiratory health with real-time data visualization and progress tracking.",
    stacks: ["HTML", "CSS", "JavaScript", "Webpack"],
    gitLink: "https://github.com/cursorbot/cursorbot",
    demoLink: "https://health-tracker-demo.netlify.app",
    image: portfolio,

    stats: {
      year: "2024",
      duration: "4 weeks",
      status: "Active",
    },
  },
  {
    type: "bg2",
    value: '<i class="fas fa-running"></i>',
    label: "Timer App",
    details:
      "A modern React application built with hooks and context API, featuring responsive design and optimized performance for seamless user experience.",
    stacks: ["React", "CSS", "Webpack", "Context API"],
    gitLink: "https://github.com/cursorbot/cursorbot",
    demoLink: "https://react-app-demo.netlify.app",
    image: timer_app,
    stats: {
      year: "2024",
      duration: "5 weeks",
      status: "Completed",
    },
  },
  {
    type: "bg1",
    value: '<i class="fa-solid fa-book"></i>',
    label: "Book library",
    details:
      "A fullstack web application that allows to create and vue your favorite recipes.",
    stacks: ["HTML5", "CSS3", "JavaScript", "Chart.js"],
    gitLink: "https://github.com/cursorbot/cursorbot",
    image: book_library,
  },
  {
    type: "bg1",
    value: '<i class="fas fa-bed"></i>',
    label: "Portfolio skill",
    details:
      "Demostrate how to use the HTML5 and CSS3 to create a responsive layout.",
    stacks: ["HTML5", "CSS3", "JavaScript", "Webpack"],
    gitLink: "https://github.com/cursorbot/cursorbot",
    image: skill_portfolio,
  },
  {
    type: "bg2",
    value: "<i class='fa-regular fa-square-check'></i>",
    label: "Advance Todo",
    details:
      "crafted like a js framework single page application without using any framework.",
    stacks: ["HTML", "CSS", "JavaScript", "Webpack"],
    gitLink: "https://github.com/cursorbot/cursorbot",
    image: adv_todo,
  },
];

;// ./src/sections/contact.js






function contactSection() {
  const hero = createHtmlElement("section", {
    class: "hero",
    id: "contact",
    style: "display:none",
  });

  const contactContainer = createHtmlElement("div", {
    class: "contact__container",
  });

  // Left side of the section make as a function
  const heroContents = createHtmlElement("div", {
    class: "hero__content",
  });

  const mainHeader = createHtmlElement("h1", { class: "main__title" });
  const titles = ["Have any", "Project in Mind"];
  renderTitle(titles, mainHeader);

  const text = `I bring static designs to life as a creative front-end developer. Let's build something together!`;
  const paragraph = renderSubTitle(text, "sub__title");

  const socialIcons = renderSvgIcon();

  // Right side of the section: make as a function
  const heroImage = createHtmlElement("div", { class: "hero__img" });

  const formContact = contactForm();
  heroImage.append(formContact);

  heroContents.append(mainHeader, paragraph, socialIcons);
  hero.append(heroContents, heroImage);

  formContact
    .querySelector("#contact-form")
    .addEventListener("submit", function (e) {
      e.preventDefault();
      const form = e.target;
      const inputs = form.querySelectorAll(".form__control");
      const submitBtn = form.querySelector(".btn__submit");
      let isValid = true;

      // Validate all fields
      inputs.forEach((input) => {
        if (!validateField(input)) {
          isValid = false;
        }
      });

      if (isValid) {
        // Show loading state
        submitBtn.classList.add("loading");
        submitBtn.disabled = true;

        submitForm(form).finally(() => {
          // Reset button state
          submitBtn.classList.remove("loading");
          submitBtn.disabled = false;
        });
      } else {
        // Shake form on validation error
        form.classList.add("shake");
        setTimeout(() => form.classList.remove("shake"), 600);

        // Focus first invalid field
        const firstError = form.querySelector(
          ".input-wrapper.error input, .input-wrapper.error textarea"
        );
        if (firstError) {
          firstError.focus();
        }
      }
    });

  return hero;
}

//Enhanced form submission with better UX
function submitForm(form) {
  const formData = new FormData(form);
  const button = form.querySelector(".btn__submit");
  const btnText = button.querySelector(".btn-text");
  const btnIcon = button.querySelector(".btn-icon");

  return fetch(form.action, {
    method: form.method,
    body: formData,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      if (response.ok) {
        // Success state
        button.classList.add("success");
        btnText.textContent = "Message Sent!";
        btnIcon.textContent = "✅";

        alertBadge(
          "Message sent successfully! I'll get back to you soon.",
          "green"
        );

        // Reset form with animation
        setTimeout(() => {
          form.classList.add("success-submitted");
          form.reset();

          // Reset floating labels
          const labels = form.querySelectorAll(".floating-label");
          labels.forEach((label) => label.classList.remove("active"));

          // Reset character counter
          const charCount = form.querySelector("#char-count");
          if (charCount) charCount.textContent = "0";
        }, 1000);

        // Reset button after delay
        setTimeout(() => {
          button.classList.remove("success");
          btnText.textContent = "Send Message";
          btnIcon.textContent = "🚀";
          form.classList.remove("success-submitted");
        }, 4000);
      } else {
        // Error state
        button.classList.add("error");
        btnText.textContent = "Try Again";
        btnIcon.textContent = "❌";

        response
          .json()
          .then((data) => {
            if (data.errors) {
              data.errors.forEach((error) => alertBadge(error.message, "red"));
            } else {
              alertBadge("Failed to send message. Please try again.", "red");
            }
          })
          .catch(() => {
            alertBadge("Failed to send message. Please try again.", "red");
          });

        // Reset error state
        setTimeout(() => {
          button.classList.remove("error");
          btnText.textContent = "Send Message";
          btnIcon.textContent = "🚀";
        }, 3000);
      }
    })
    .catch((error) => {
      console.error("Form submission error:", error);

      // Network error state
      button.classList.add("error");
      btnText.textContent = "Connection Error";
      btnIcon.textContent = "🔄";

      alertBadge(
        "Network error. Please check your connection and try again.",
        "red"
      );

      // Reset error state
      setTimeout(() => {
        button.classList.remove("error");
        btnText.textContent = "Send Message";
        btnIcon.textContent = "🚀";
      }, 3000);
    });
}

function renderSvgIcon() {
  const socialIconContainer = createHtmlElement("div", {
    class: "social-icons",
  });

  function createIconLink(svgIcon, link) {
    const iconLink = createHtmlElement("a", {
      class: "icon",
      href: `${link}`,
      target: "_",
    });

    createSvgIcon(svgIcon, options, iconLink);
    return iconLink;
  }

  const gitIcon = createIconLink(github, "https://github.com");
  const linkedInIcon = createIconLink(linkedIn, "https://linkedin.com");
  const mailIcon = createIconLink(mail, "https://live.com");

  socialIconContainer.append(gitIcon, linkedInIcon, mailIcon);

  return socialIconContainer;
}

function contactForm() {
  const formContainer = createHtmlElement("div", {
    class: "form__container enhanced-form",
  });

  // Create form header
  const formHeader = createHtmlElement("div", { class: "form__header" });
  formHeader.innerHTML = `
    <h3 class="form__title">Let's Connect</h3>
    <p class="form__subtitle">Ready to bring your ideas to life? Drop me a message!</p>
  `;

  // Create form element
  const form = createHtmlElement("form", {
    id: "contact-form",
    autocomplete: "off",
    action: "https://formspree.io/f/mknyknkr",
    method: "POST",
    class: "enhanced-contact-form",
  });

  form.innerHTML = `
    <div class="form__row">
      <div class="form__field">
        <div class="input-wrapper">
          <input type="text" class="form__control" id="name" name="name" required>
          <label for="name" class="floating-label">
            <span class="label-icon">👤</span>
            <span class="label-text">Full Name</span>
          </label>
          <div class="input-border"></div>
        </div>
        <div class="field-error" id="name-error"></div>
      </div>

      <div class="form__field">
        <div class="input-wrapper">
          <input type="email" class="form__control" id="email" name="email" required>
          <label for="email" class="floating-label">
            <span class="label-icon">📧</span>
            <span class="label-text">Email Address</span>
          </label>
          <div class="input-border"></div>
        </div>
        <div class="field-error" id="email-error"></div>
      </div>
    </div>

    <div class="form__field">
      <div class="input-wrapper">
        <input type="text" class="form__control" id="subject" name="subject" required>
        <label for="subject" class="floating-label">
          <span class="label-icon">💡</span>
          <span class="label-text">Project Subject</span>
        </label>
        <div class="input-border"></div>
      </div>
      <div class="field-error" id="subject-error"></div>
    </div>

    <div class="form__field">
      <div class="input-wrapper textarea-wrapper">
        <textarea class="form__control" id="message" name="message" rows="2" required></textarea>
        <label for="message" class="floating-label">
          <span class="label-icon">💬</span>
          <span class="label-text">Tell me about your project...</span>
        </label>
        <div class="input-border"></div>
        <div class="character-count">
          <span id="char-count">0</span>/500
        </div>
      </div>
      <div class="field-error" id="message-error"></div>
    </div>

    <div class="form__actions">
      <button class="btn__submit" type="submit">
        <span class="btn-text">Send Message</span>
        <span class="btn-icon">🚀</span>
        <div class="btn-loading">
          <div class="loading-spinner"></div>
        </div>
      </button>
      <div class="form__privacy">
        <small>🔒 Your information is secure and will never be shared.</small>
      </div>
    </div>
  `;

  // Add enhanced interactions
  addFormInteractions(form);

  formContainer.append(formHeader, form);
  return formContainer;
}

function addFormInteractions(form) {
  const inputs = form.querySelectorAll(".form__control");
  const messageInput = form.querySelector("#message");
  const charCount = form.querySelector("#char-count");
  const submitBtn = form.querySelector(".btn__submit");

  // Enhanced input interactions
  inputs.forEach((input) => {
    const wrapper = input.closest(".input-wrapper");
    const label = wrapper.querySelector(".floating-label");
    const border = wrapper.querySelector(".input-border");

    // Focus and blur effects
    input.addEventListener("focus", () => {
      wrapper.classList.add("focused");
      label.classList.add("active");
    });

    input.addEventListener("blur", () => {
      wrapper.classList.remove("focused");
      if (!input.value.trim()) {
        label.classList.remove("active");
      }
    });

    // Real-time validation
    input.addEventListener("input", () => {
      validateField(input);
      if (input.value.trim()) {
        label.classList.add("active");
      }
    });

    // Check if field has value on load
    if (input.value.trim()) {
      label.classList.add("active");
    }
  });

  // Character counter for message
  if (messageInput && charCount) {
    messageInput.addEventListener("input", () => {
      const count = messageInput.value.length;
      charCount.textContent = count;

      if (count > 500) {
        charCount.parentElement.classList.add("over-limit");
        messageInput.value = messageInput.value.substring(0, 500);
        charCount.textContent = 500;
      } else {
        charCount.parentElement.classList.remove("over-limit");
      }
    });
  }

  // Enhanced submit button
  submitBtn.addEventListener("mouseenter", () => {
    submitBtn.classList.add("hovered");
  });

  submitBtn.addEventListener("mouseleave", () => {
    submitBtn.classList.remove("hovered");
  });
}

function validateField(input) {
  const errorElement = document.getElementById(`${input.id}-error`);
  const wrapper = input.closest(".input-wrapper");
  let isValid = true;
  let errorMessage = "";

  // Clear previous errors
  wrapper.classList.remove("error");
  if (errorElement) errorElement.textContent = "";

  // Validation rules
  if (!input.value.trim()) {
    isValid = false;
    errorMessage = `${input.name} is required`;
  } else if (input.type === "email") {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(input.value)) {
      isValid = false;
      errorMessage = "Please enter a valid email address";
    }
  } else if (input.id === "message" && input.value.length < 10) {
    isValid = false;
    errorMessage = "Message should be at least 10 characters long";
  }

  // Show error if invalid
  if (!isValid) {
    wrapper.classList.add("error");
    if (errorElement) errorElement.textContent = errorMessage;
  }

  return isValid;
}

;// ./src/sections/skill.js



function skillSection() {
  const hero = createHtmlElement("section", {
    class: "hero",
    id: "skills",
    style: "display:none",
  });

  const heroContents = createHtmlElement("div", {
    class: "hero__content hero-flex",
  });
  hero.appendChild(heroContents);

  const mainHeader = createHtmlElement("h1", { class: "main__title" });
  const titles = ["My Skills &", "Experience"];
  renderTitle(titles, mainHeader);

  const subTitle = renderSubTitle(skillText, "sub__title");

  // Add skill stats
  const skillStats = createSkillStats();
  heroContents.append(mainHeader, subTitle, skillStats);

  //right side elements
  const heroImage = createHtmlElement("div", { class: "hero__img hero-flex" });
  hero.appendChild(heroImage);

  const parentContainer = createHtmlElement("div", {
    class: "parent__container enhanced-skills-container",
  });

  // Initialize the animation when section becomes visible
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (
        mutation.type === "attributes" &&
        mutation.attributeName === "style"
      ) {
        const target = mutation.target;
        if (target.id === "skills" && target.style.display !== "none") {
          setTimeout(() => {
            animatedSkill(items, parentContainer);
          }, 100);
          observer.disconnect();
        }
      }
    });
  });

  observer.observe(hero, { attributes: true });

  // Fallback for immediate loading if section is already visible
  setTimeout(() => {
    if (hero.style.display !== "none") {
      animatedSkill(items, parentContainer);
    }
  }, 100);

  heroImage.appendChild(parentContainer);
  cookieConsent(); // Replace alertBadge("Show", "blue");
  return hero;
}

function createSkillStats() {
  const statsContainer = createHtmlElement("div", {
    class: "skill-stats-container",
  });

  const stats = [
    { label: "Technologies", value: items.length, icon: "⚡" },
    { label: "Years Experience", value: "3+", icon: "🚀" },
    { label: "Projects Built", value: "7+", icon: "💼" },
  ];

  stats.forEach((stat) => {
    const statCard = createHtmlElement("div", {
      class: "skill-stat-card",
    });

    statCard.innerHTML = `
      <div class="stat-icon">${stat.icon}</div>
      <div class="stat-value">${stat.value}</div>
      <div class="stat-label">${stat.label}</div>
    `;

    statsContainer.appendChild(statCard);
  });

  return statsContainer;
}

//
function initiateSkills() {
  return `
      <div class="skills-header">
        <h3 class="skills-title">Interactive Skills Showcase</h3>
        <p class="skills-subtitle">Hover over skills to explore • Click for details</p>
      </div>
      <canvas class="skillsCanvas" id="skillsCanvas" width="650" height="650"></canvas>
      <div class="tooltip enhanced-tooltip" id="tooltip"></div>
      <div class="details enhanced-details" id="details"></div>
      <div class="theme-selector enhanced-theme-selector">
        <span class="theme-label">Themes:</span>
      </div>
      <div class="controls-panel">
        <button class="control-btn" id="playPauseBtn">⏸️</button>
        
        <div class="speed-control">
          <label>Speed:</label>
          <input type="range" id="speedSlider" min="0.1" max="2" step="0.1" value="1">
        </div>
      </div>
      <div class="skill-counter">
        <span id="skillCount">${items.length}</span> Technologies
      </div>
  `;
}

function animatedSkill(items, parentContainer) {
  parentContainer.innerHTML = initiateSkills();
  // Get the elements from the parent container
  const canvas = parentContainer.querySelector("#skillsCanvas");
  const tooltip = parentContainer.querySelector("#tooltip");
  const details = parentContainer.querySelector("#details");
  const themeSelector = parentContainer.querySelector(".theme-selector");
  const playPauseBtn = parentContainer.querySelector("#playPauseBtn");
  const speedSlider = parentContainer.querySelector("#speedSlider");

  const themes = [
    {
      name: "Vibrant Pink",
      background: "#ff007b",
      gradient: ["#ff007b", "#b30056"],
      accent: "#ff6b9d",
    },
    {
      name: "Fresh Green",
      background: "#00ff7b",
      gradient: ["#00ff7b", "#00b356"],
      accent: "#51cf66",
    },
    {
      name: "Sunset Orange",
      background: "#ff6b35",
      gradient: ["#ff6b35", "#cc4125"],
      accent: "#ff8c42",
    },
    {
      name: "Purple Galaxy",
      background: "#7c3aed",
      gradient: ["#7c3aed", "#5b21b6"],
      accent: "#a855f7",
    },
  ];

  themes.forEach((theme, index) => {
    const button = document.createElement("div");
    button.className = "theme-button";
    button.style.background = theme.background;
    button.title = theme.name;
    button.addEventListener("click", () => setTheme(index));
    themeSelector.appendChild(button);
  });

  function setTheme(index) {
    currentTheme = themes[index];
    // Add theme transition effect
    canvas.style.filter = "brightness(0.8)";
    setTimeout(() => {
      canvas.style.filter = "brightness(1)";
    }, 200);
  }

  let currentTheme = themes[0];
  let isPlaying = true;
  let animationSpeed = 1;

  //animate
  const ctx = canvas.getContext("2d");
  let CONTAINER_RADIUS = Math.min(window.innerWidth, window.innerHeight) / 6;
  let CENTER_X = canvas.width / 2;
  let CENTER_Y = canvas.height / 2;
  let angleOffset = 0;
  let animationFrameId;
  let hoveredSkill = null;
  let skillScales = items.map(() => 1);
  let skillOpacities = items.map(() => 1);

  function resizeCanvas() {
    const rect = canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;

    // Set actual canvas size
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;

    // Scale the context to match device pixel ratio
    ctx.scale(dpr, dpr);

    // Set CSS size
    canvas.style.width = rect.width + "px";
    canvas.style.height = rect.height + "px";

    CENTER_X = rect.width / 2;
    CENTER_Y = rect.height / 2;
    CONTAINER_RADIUS = Math.min(rect.width, rect.height) / 4;

    draw();
  }

  function draw() {
    // Create subtle background gradient
    const bgGradient = ctx.createRadialGradient(
      CENTER_X,
      CENTER_Y,
      0,
      CENTER_X,
      CENTER_Y,
      CONTAINER_RADIUS * 1.5
    );
    bgGradient.addColorStop(0, "rgba(255, 255, 255, 0.02)");
    bgGradient.addColorStop(1, "rgba(0, 0, 0, 0.05)");
    ctx.fillStyle = bgGradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    items.forEach((item, index) => {
      const angle = (index / items.length) * (2 * Math.PI) + angleOffset;
      const x = CENTER_X + CONTAINER_RADIUS * Math.cos(angle);
      const y = CENTER_Y + CONTAINER_RADIUS * Math.sin(angle);

      const scale = skillScales[index];
      const opacity = skillOpacities[index];
      const radius = 50 * scale;

      // Draw outer glow effect
      if (hoveredSkill === index) {
        const glowGradient = ctx.createRadialGradient(
          x,
          y,
          radius,
          x,
          y,
          radius + 20
        );
        glowGradient.addColorStop(0, `${currentTheme.accent}40`);
        glowGradient.addColorStop(1, "transparent");
        ctx.fillStyle = glowGradient;
        ctx.beginPath();
        ctx.arc(x, y, radius + 20, 0, 2 * Math.PI);
        ctx.fill();
      }

      // Draw main gradient circle with enhanced effects
      const gradient = ctx.createRadialGradient(x, y, 20, x, y, radius);
      gradient.addColorStop(0, currentTheme.gradient[0]);
      gradient.addColorStop(0.7, currentTheme.gradient[1]);
      gradient.addColorStop(1, currentTheme.gradient[1] + "CC");

      ctx.globalAlpha = opacity;
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, 2 * Math.PI);
      ctx.fillStyle = gradient;
      ctx.fill();

      // Enhanced stroke with shadow
      ctx.shadowColor = "rgba(0, 0, 0, 0.3)";
      ctx.shadowBlur = 10;
      ctx.shadowOffsetX = 2;
      ctx.shadowOffsetY = 2;
      ctx.strokeStyle =
        hoveredSkill === index
          ? currentTheme.accent
          : "rgba(255, 255, 255, 0.3)";
      ctx.lineWidth = hoveredSkill === index ? 3 : 2;
      ctx.stroke();

      // Reset shadow
      ctx.shadowColor = "transparent";
      ctx.shadowBlur = 0;
      ctx.shadowOffsetX = 0;
      ctx.shadowOffsetY = 0;

      // Enhanced text with better typography
      const fontSize = Math.max(12, Math.min(16, radius / 3));
      ctx.font = `bold ${fontSize}px 'Segoe UI', Arial, sans-serif`;
      ctx.fillStyle = "#ffffff";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      // Add text shadow for better readability
      ctx.shadowColor = "rgba(0, 0, 0, 0.7)";
      ctx.shadowBlur = 4;
      ctx.fillText(item, x, y);

      // Reset shadow
      ctx.shadowColor = "transparent";
      ctx.shadowBlur = 0;
      ctx.globalAlpha = 1;
    });

    // Draw connecting lines between skills (optional decorative effect)
    if (hoveredSkill !== null) {
      drawConnectionLines();
    }
  }

  function drawConnectionLines() {
    const hoveredAngle =
      (hoveredSkill / items.length) * (2 * Math.PI) + angleOffset;
    const hoveredX = CENTER_X + CONTAINER_RADIUS * Math.cos(hoveredAngle);
    const hoveredY = CENTER_Y + CONTAINER_RADIUS * Math.sin(hoveredAngle);

    ctx.strokeStyle = currentTheme.accent + "30";
    ctx.lineWidth = 1;
    ctx.setLineDash([5, 5]);

    items.forEach((_, index) => {
      if (index !== hoveredSkill) {
        const angle = (index / items.length) * (2 * Math.PI) + angleOffset;
        const x = CENTER_X + CONTAINER_RADIUS * Math.cos(angle);
        const y = CENTER_Y + CONTAINER_RADIUS * Math.sin(angle);

        ctx.beginPath();
        ctx.moveTo(hoveredX, hoveredY);
        ctx.lineTo(x, y);
        ctx.stroke();
      }
    });

    ctx.setLineDash([]);
  }

  draw();

  function animate() {
    if (isPlaying) {
      angleOffset = Date.now() * 0.001 * animationSpeed;

      // Smooth scale and opacity transitions
      skillScales.forEach((scale, index) => {
        const targetScale = hoveredSkill === index ? 1.2 : 1;
        skillScales[index] += (targetScale - scale) * 0.1;
      });

      skillOpacities.forEach((opacity, index) => {
        const targetOpacity =
          hoveredSkill === null || hoveredSkill === index ? 1 : 0.6;
        skillOpacities[index] += (targetOpacity - opacity) * 0.1;
      });

      draw();
    }
    animationFrameId = requestAnimationFrame(animate);
  }

  function startAnimation() {
    if (!animationFrameId) {
      animate();
    }
  }

  function stopAnimation() {
    if (animationFrameId) {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = null;
    }
  }

  function togglePlayPause() {
    isPlaying = !isPlaying;
    playPauseBtn.textContent = isPlaying ? "⏸️" : "▶️";
    playPauseBtn.title = isPlaying ? "Pause Animation" : "Play Animation";
  }

  function updateAnimationSpeed(speed) {
    animationSpeed = parseFloat(speed);
  }

  // Control event listeners
  playPauseBtn.addEventListener("click", togglePlayPause);
  speedSlider.addEventListener("input", (e) =>
    updateAnimationSpeed(e.target.value)
  );

  function showTooltip(event, skillIndex) {
    const rect = canvas.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    // Position tooltip with better boundary detection
    const tooltipX =
      mouseX + 15 > canvas.width - 150 ? mouseX - 150 : mouseX + 15;
    const tooltipY = mouseY - 10 < 0 ? mouseY + 20 : mouseY - 10;

    tooltip.style.left = `${tooltipX}px`;
    tooltip.style.top = `${tooltipY}px`;
    tooltip.style.opacity = 1;
    tooltip.style.transform = "scale(1)";
  }

  function hideTooltip() {
    tooltip.style.opacity = 0;
    tooltip.style.transform = "scale(0.8)";
    hoveredSkill = null;
  }

  function updateTooltipContent(item, index) {
    const skillCategories = {
      JavaScript: "Programming Language",
      TypeScript: "Programming Language",
      HTML5: "Markup Language",
      CSS3: "Styling Language",
      React: "Frontend Framework",
      "Vue JS": "Frontend Framework",
      "Next JS": "React Framework",
      "Node JS": "Runtime Environment",
      Webpack: "Build Tool",
      SASS: "CSS Preprocessor",
      JQuery: "JavaScript Library",
      Git: "Version Control",
      BEM: "CSS Methodology",
    };

    const category = skillCategories[item] || "Technology";
    const proficiency = Math.floor(Math.random() * 3) + 3; // 3-5 stars

    tooltip.innerHTML = `
      <div class="tooltip-header">
        <strong>${item}</strong>
        <span class="tooltip-category">${category}</span>
      </div>
      <div class="tooltip-proficiency">
        ${"★".repeat(proficiency)}${"☆".repeat(5 - proficiency)}
      </div>
      <div class="tooltip-tip">Click for more details</div>
    `;
  }

  function showDetails(item, index) {
    const skillDetails = {
      JavaScript:
        "Dynamic programming language for web development with ES6+ features",
      TypeScript:
        "Strongly typed superset of JavaScript for large-scale applications",
      HTML5: "Modern markup language with semantic elements and APIs",
      CSS3: "Advanced styling with animations, flexbox, and grid layouts",
      React: "Component-based library for building interactive user interfaces",
      "Vue JS": "Progressive framework for building modern web applications",
      "Next JS": "Full-stack React framework with SSR and static generation",
      "Node JS": "Server-side JavaScript runtime for backend development",
      Webpack: "Module bundler for optimizing and building web applications",
      SASS: "CSS preprocessor with variables, mixins, and nesting",
      JQuery: "JavaScript library for DOM manipulation and AJAX",
      Git: "Distributed version control system for code management",
      BEM: "CSS methodology for maintainable and scalable stylesheets",
    };

    const detail = skillDetails[item] || `Professional experience with ${item}`;

    details.innerHTML = `
      <div class="details-header">
        <h4>${item}</h4>
        <button class="details-close" onclick="this.parentElement.parentElement.style.opacity='0'">×</button>
      </div>
      <p>${detail}</p>
      <div class="details-actions">
        <button class="details-btn">View Projects</button>
        <button class="details-btn">Learn More</button>
      </div>
    `;
    details.style.opacity = 1;
    details.style.transform = "translateX(-50%) scale(1)";
  }

  function hideDetails() {
    details.style.opacity = 0;
    details.style.transform = "translateX(-50%) scale(0.9)";
  }

  parentContainer.addEventListener("mouseenter", () => {
    if (!animationFrameId) {
      startAnimation();
    }
  });
  parentContainer.addEventListener("mouseleave", () => {
    hideTooltip();
    hideDetails();
  });

  canvas.addEventListener("mousemove", (event) => {
    const rect = canvas.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    let foundSkill = false;

    items.forEach((item, index) => {
      const angle = (index / items.length) * (2 * Math.PI) + angleOffset;
      const x = CENTER_X + CONTAINER_RADIUS * Math.cos(angle);
      const y = CENTER_Y + CONTAINER_RADIUS * Math.sin(angle);
      const radius = 50 * skillScales[index];
      const distance = Math.sqrt((mouseX - x) ** 2 + (mouseY - y) ** 2);

      if (distance < radius) {
        if (hoveredSkill !== index) {
          hoveredSkill = index;
          updateTooltipContent(item, index);
          showTooltip(event, index);
          canvas.style.cursor = "pointer";
        }
        foundSkill = true;
      }
    });

    if (!foundSkill && hoveredSkill !== null) {
      hideTooltip();
      canvas.style.cursor = "default";
    }
  });

  canvas.addEventListener("mouseleave", () => {
    hideTooltip();
    canvas.style.cursor = "default";
  });

  canvas.addEventListener("click", (event) => {
    const rect = canvas.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    items.forEach((item, index) => {
      const angle = (index / items.length) * (2 * Math.PI) + angleOffset;
      const x = CENTER_X + CONTAINER_RADIUS * Math.cos(angle);
      const y = CENTER_Y + CONTAINER_RADIUS * Math.sin(angle);
      const radius = 50 * skillScales[index];
      const distance = Math.sqrt((mouseX - x) ** 2 + (mouseY - y) ** 2);

      if (distance < radius) {
        showDetails(item, index);
        // Add click animation effect
        skillScales[index] = 0.8;
        setTimeout(() => {
          skillScales[index] = 1.2;
        }, 100);
      }
    });
  });

  // Enhanced touch events for mobile devices
  canvas.addEventListener("touchstart", (event) => {
    event.preventDefault();
    const touch = event.touches[0];
    const rect = canvas.getBoundingClientRect();
    const touchX = touch.clientX - rect.left;
    const touchY = touch.clientY - rect.top;

    items.forEach((item, index) => {
      const angle = (index / items.length) * (2 * Math.PI) + angleOffset;
      const x = CENTER_X + CONTAINER_RADIUS * Math.cos(angle);
      const y = CENTER_Y + CONTAINER_RADIUS * Math.sin(angle);
      const radius = 50 * skillScales[index];
      const distance = Math.sqrt((touchX - x) ** 2 + (touchY - y) ** 2);

      if (distance < radius) {
        hoveredSkill = index;
        updateTooltipContent(item, index);
        showTooltip({ clientX: touch.clientX, clientY: touch.clientY }, index);
        showDetails(item, index);

        // Touch feedback
        skillScales[index] = 0.9;
        setTimeout(() => {
          skillScales[index] = 1.1;
        }, 150);
      }
    });
  });

  canvas.addEventListener("touchmove", (event) => {
    event.preventDefault();
    const touch = event.touches[0];
    const rect = canvas.getBoundingClientRect();
    const touchX = touch.clientX - rect.left;
    const touchY = touch.clientY - rect.top;
    let foundSkill = false;

    items.forEach((item, index) => {
      const angle = (index / items.length) * (2 * Math.PI) + angleOffset;
      const x = CENTER_X + CONTAINER_RADIUS * Math.cos(angle);
      const y = CENTER_Y + CONTAINER_RADIUS * Math.sin(angle);
      const radius = 50 * skillScales[index];
      const distance = Math.sqrt((touchX - x) ** 2 + (touchY - y) ** 2);

      if (distance < radius) {
        if (hoveredSkill !== index) {
          hoveredSkill = index;
          updateTooltipContent(item, index);
          showTooltip(
            { clientX: touch.clientX, clientY: touch.clientY },
            index
          );
        }
        foundSkill = true;
      }
    });

    if (!foundSkill) {
      hideTooltip();
    }
  });

  canvas.addEventListener("touchend", (event) => {
    event.preventDefault();
    setTimeout(() => {
      hideTooltip();
    }, 2000); // Keep tooltip visible longer on touch
  });

  // Initialize canvas and start animation immediately
  window.addEventListener("resize", resizeCanvas);

  // Use ResizeObserver for better responsiveness
  if (window.ResizeObserver) {
    const resizeObserver = new ResizeObserver(() => {
      resizeCanvas();
    });
    resizeObserver.observe(parentContainer);
  }

  resizeCanvas();

  // Ensure proper initialization on tablets
  setTimeout(() => {
    resizeCanvas();
  }, 100);

  return canvas;
}

/* harmony default export */ const skill = (skillSection);

;// ./src/sections/projects.js



function projectSection() {
  const hero = createHtmlElement("section", {
    class: "hero project__section",
    id: "projects",
    style: "display:none",
    role: "region",
    "aria-label": "Projects Portfolio",
  });

  const container = createElement("div", {
    class: "container",
    role: "list",
    "aria-label": "List of Projects",
  });

  projectsData.forEach((item, index) => {
    const projectCard = createElement("div", {
      class: `project-card ${item.type || "bg1"}`,
      role: "listitem",
      style: `animation-delay: ${index * 0.15}s`,
      tabindex: "0",
      "aria-label": `${item.label} project`,
    });

    if (item.image) {
      projectCard.style.backgroundImage = `url(${item.image})`;
    }

    const contentWrapper = createElement("div", { class: "content-wrapper" });

    const h2 = createElement("h2", {
      class: "project-title",
      id: `project-title-${index}`,
    });
    h2.innerHTML = item.value;

    const p = createElement(
      "p",
      {
        class: "project-label",
        id: `project-desc-${index}`,
      },
      item.label
    );

    const overlay = createElement("div", {
      class: "overlay",
    });
    contentWrapper.append(h2, p);
    projectCard.append(contentWrapper, overlay);

    projectCard.addEventListener("click", () => {
      const modal = new ProjectModal(item);
      modal.open();
    });

    projectCard.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        const modal = new ProjectModal(item);
        modal.open();
      }
    });

    container.appendChild(projectCard);
  });

  hero.appendChild(container);
  return hero;
}

class ProjectModal {
  constructor(project) {
    this.project = project;
    this.modalBackground = null;
    this.focusedElementBeforeModal = null;
    this.imageLoaded = false;
    this.focusableElements = [];
  }

  createElement(type, attributes = {}, content = null) {
    const element = document.createElement(type);
    Object.entries(attributes).forEach(([key, value]) =>
      element.setAttribute(key, value)
    );
    if (content) element.textContent = content;
    return element;
  }

  createModal() {
    this.focusedElementBeforeModal = document.activeElement;

    this.modalBackground = this.createElement("div", {
      class: "modal-background",
      role: "dialog",
      "aria-modal": "true",
      "aria-labelledby": "modal-title",
      "aria-describedby": "modal-description",
    });

    const modalContent = this.createElement("div", {
      class: "modal-content",
      role: "document",
    });

    const closeButton = this.createCloseButton();
    const imageContainer = this.createImageContainer();
    const modalInfo = this.createModalInfo();

    modalContent.append(closeButton, imageContainer, modalInfo);
    this.modalBackground.appendChild(modalContent);
    document.body.appendChild(this.modalBackground);

    this.setupFocusTrap();
    this.addEventListeners();

    requestAnimationFrame(() => {
      closeButton.focus();
      this.modalBackground.classList.add("open");
    });
  }

  createCloseButton() {
    const closeButton = this.createElement(
      "button",
      {
        class: "modal-close",
        "aria-label": "Close project details",
        type: "button",
      },
      "×"
    );
    closeButton.addEventListener("click", () => this.close());
    return closeButton;
  }

  createImageContainer() {
    const imageContainer = this.createElement("figure", {
      class: "modal__image-container zoomable",
      role: "img",
      "aria-label": `Screenshot of ${this.project.label} project`,
    });

    const loadingSpinner = this.createElement("div", {
      class: "loading-spinner",
      "aria-label": "Loading project image...",
    });
    imageContainer.appendChild(loadingSpinner);

    const modalImage = this.createResponsiveImage(loadingSpinner);
    imageContainer.appendChild(modalImage);

    // Add zoom functionality
    imageContainer.addEventListener("click", () => {
      if (this.imageLoaded) {
        imageContainer.classList.toggle("zoomed");
      }
    });

    return imageContainer;
  }

  createResponsiveImage(loadingSpinner) {
    const modalImage = this.createElement("img", {
      class: "modal__image",
      src: this.project.image || "",
      alt: `Screenshot of ${this.project.label} project`,
    });

    modalImage.onload = () => {
      loadingSpinner.remove();
      this.imageLoaded = true;
    };

    modalImage.onerror = () => {
      loadingSpinner.remove();
      const errorMessage = this.createElement(
        "div",
        { class: "image-error", role: "alert" },
        "Image could not be loaded"
      );
      if (modalImage.parentElement) {
        modalImage.parentElement.appendChild(errorMessage);
        modalImage.remove();
      }
    };

    return modalImage;
  }

  createModalInfo() {
    const modalInfo = this.createElement("div", {
      class: "modal-info",
      role: "region",
      "aria-label": "Project information",
    });

    const modalTitle = this.createElement(
      "h2",
      {
        class: "modal-title",
        id: "modal-title",
      },
      this.project.label || "Untitled Project"
    );

    const modalDescription = this.createElement(
      "p",
      {
        class: "modal__description",
        id: "modal-description",
      },
      this.project.details || "No description available"
    );

    const modalStacks = this.createStacksList();
    const modalStats = this.createProjectStats();
    const actionButtons = this.createActionButtons();

    modalInfo.append(
      modalTitle,
      modalDescription,
      modalStacks,
      modalStats,
      actionButtons
    );
    return modalInfo;
  }

  createStacksList() {
    const modalStacks = this.createElement("div", {
      class: "modal__stacks",
      role: "list",
      "aria-label": "Technologies used in this project",
    });

    (this.project.stacks || []).forEach((stack) => {
      const stackSpan = this.createElement(
        "span",
        {
          class: "stack",
          role: "listitem",
        },
        stack
      );
      modalStacks.appendChild(stackSpan);
    });

    return modalStacks;
  }

  createProjectStats() {
    const stats = this.project.stats || {
      year: new Date().getFullYear(),
      duration: "2-3 weeks",
      status: "Completed",
    };

    const statsContainer = this.createElement("div", {
      class: "modal__stats",
      role: "region",
      "aria-label": "Project statistics",
    });

    Object.entries(stats).forEach(([key, value]) => {
      const stat = this.createElement("div", { class: "modal__stat" });
      const statValue = this.createElement(
        "span",
        { class: "modal__stat-value" },
        value
      );
      const statLabel = this.createElement(
        "span",
        { class: "modal__stat-label" },
        key
      );

      stat.append(statValue, statLabel);
      statsContainer.appendChild(stat);
    });

    return statsContainer;
  }

  createActionButtons() {
    const actionsContainer = this.createElement("div", {
      class: "modal__actions",
      role: "region",
      "aria-label": "Project actions",
    });

    // GitHub Link
    if (this.project.gitLink) {
      const gitLink = this.createElement("a", {
        class: "modal__git-link",
        href: this.project.gitLink,
        target: "_blank",
        rel: "noopener noreferrer",
        "aria-label": `View ${this.project.label} source code on GitHub`,
      });

      const gitIcon = this.createElement("i", {
        class: "fab fa-github",
        "aria-hidden": "true",
      });

      const gitText = this.createElement("span", {}, "View Code");
      gitLink.append(gitIcon, gitText);
      actionsContainer.appendChild(gitLink);
    }

    // Demo Link
    if (this.project.demoLink) {
      const demoLink = this.createElement("a", {
        class: "modal__demo-link",
        href: this.project.demoLink,
        target: "_blank",
        rel: "noopener noreferrer",
        "aria-label": `View ${this.project.label} live demo`,
      });

      const demoIcon = this.createElement("i", {
        class: "fas fa-external-link-alt",
        "aria-hidden": "true",
      });

      const demoText = this.createElement("span", {}, "Live Demo");
      demoLink.append(demoIcon, demoText);
      actionsContainer.appendChild(demoLink);
    }

    return actionsContainer;
  }

  setupFocusTrap() {
    this.focusableElements = Array.from(
      this.modalBackground.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      )
    );

    if (this.focusableElements.length > 0) {
      const firstElement = this.focusableElements[0];
      const lastElement =
        this.focusableElements[this.focusableElements.length - 1];

      this.modalBackground.addEventListener("keydown", (e) => {
        if (e.key === "Tab") {
          if (e.shiftKey && document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          } else if (!e.shiftKey && document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      });
    }
  }

  addEventListeners() {
    this.modalBackground.addEventListener("click", (e) => {
      if (e.target === this.modalBackground) {
        this.close();
      }
    });

    this.modalBackground.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        this.close();
      }
    });
  }

  open() {
    this.createModal();
  }

  close() {
    this.modalBackground.classList.remove("open");
    setTimeout(() => {
      this.modalBackground.remove();
      if (this.focusedElementBeforeModal) {
        this.focusedElementBeforeModal.focus();
      }
    }, 300);
  }
}

;// ./src/modules/loadSection.js







function loadSection() {
  const content = createElement("div", { id: "content", class: "content" });
  const sections = [
    home,
    about,
    skill,
    projectSection,
    contactSection,
  ];
  sections.forEach((section) => {
    content.append(section());
  });

  return content;
}

/* harmony default export */ const modules_loadSection = (loadSection);

// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(72);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(825);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(659);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(56);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(540);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(113);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/style/style.css
var style = __webpack_require__(106);
;// ./src/style/style.css

      
      
      
      
      
      
      
      
      

var style_options = {};

style_options.styleTagTransform = (styleTagTransform_default());
style_options.setAttributes = (setAttributesWithoutAttributes_default());

      style_options.insert = insertBySelector_default().bind(null, "head");
    
style_options.domAPI = (styleDomAPI_default());
style_options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(style/* default */.A, style_options);




       /* harmony default export */ const style_style = (style/* default */.A && style/* default */.A.locals ? style/* default */.A.locals : undefined);

// EXTERNAL MODULE: ./node_modules/aos/dist/aos.js
var aos = __webpack_require__(42);
var aos_default = /*#__PURE__*/__webpack_require__.n(aos);
// EXTERNAL MODULE: ./node_modules/aos/dist/aos.css
var dist_aos = __webpack_require__(126);
;// ./src/index.js








function app() {
  // Initialize AOS with custom settings
  aos_default().init({
    duration: 800,
    once: true,
    offset: 50,
    easing: "ease-out-cubic",
    delay: 0,
    // Remove the 'disable' option to enable animations on mobile devices
  });

  const app = document.getElementById("app");
  let pageHeader = loadHeader(),
    pageSection = modules_loadSection(),
    pageFooter = loadFooter();

  app.append(pageHeader, pageSection, pageFooter);
  initializeProgressBars();

  return app;
}

app();


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			792: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkportfolio"] = self["webpackChunkportfolio"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [96], () => (__webpack_require__(518)))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;