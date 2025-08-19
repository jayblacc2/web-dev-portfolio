# Git Branch Management Guide

## Recommended Structure

```
new-feature/
└── feature-branch
hotfix/
└── hotfix-branch
release/
└── release-branch
```

## Enhanced Protection Setup

1. Install Git hooks:

```bash
#!/bin/sh
# .githooks/pre-push
BRANCH=$(git rev-parse --abbrev-ref HEAD)
if [ "$BRANCH" = "main" ]; then
  echo "Direct pushes to main are prohibited"
  exit 1
fi
```

2. CI/CD Integration (Add to .github/workflows/main-protection.yml):

```yaml
name: Main Branch Protection
on:
  push:
    branches: [main]
jobs:
  verify:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Verify approvals
        run: |
          if [ "$GITHUB_EVENT_NAME" = "push" ]; then
            echo "Direct pushes to main blocked"
            exit 1
          fi
```

## Branch Naming Policy

| Type    | Pattern             | Example            |
| ------- | ------------------- | ------------------ |
| Feature | feature/[ticket-id] | feature/APP-123    |
| Hotfix  | hotfix/[version]    | hotfix/1.2.1       |
| Release | release/[semver]    | release/1.3.0      |
| Docs    | docs/[topic]        | docs/api-reference |

## Disaster Recovery

```bash
# Restore main from last known good commit
git checkout -b recovery-main $(git log --grep="Production Release" -1 --pretty=%H)
git branch -M main
git push -f origin main
```
