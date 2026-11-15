# Ajani Mobile browser demo

A standalone JavaScript and React demonstration of a practitioner working through a round of visits. It contains the existing Today, Visits and More screens, visit progression, checklists, cancellation, preferences and local assistant guidance.

## Setup

Use Node 22.21.0 or a compatible later release.

```bash
npm ci
npm run dev -- --host 127.0.0.1
```

Open http://127.0.0.1:5173/products/ajani-mobile/demo. The root route also opens the demo.

## Checks

```bash
npm run lint
npm run test:run
npm run build
```

The starting component has 563 tests across seven test files. The current round is held in memory and starts again after a refresh.

## Local data and services

The round data is bundled locally. No database, email configuration or provider credentials are needed. The browser assistant uses its existing built-in guidance when its optional same-origin endpoint is unavailable. The deployed endpoint and provider configuration are not included.

## Source and licence

Extracted from the existing browser component in https://github.com/shupyjani/ajani-healthcare at commit b8de853eda34ed8d7a31eb2e01973d174769a412. A standalone route host replaces the company website. The tests for the excluded marketing entry pages are omitted; the remaining seven test files are included.

This standalone repository is licensed under MIT. Copyright remains with Ajani Healthcare Limited. This grant applies to the files released here; it does not change the licences of the original company website, Ajani Workforce or the native iPhone application. Third-party packages retain their respective licences. Product and company names identify the source and do not grant trademark or endorsement rights.
