// ----------------------------------------------------------------------------
// WebIn -- Floating Overlay for Instant Access to Web Applications
// ----------------------------------------------------------------------------
// Author   : Rishabh
// License  : MIT License -- free to use, modify, and distribute.
//            See LICENSE file in the project root for full license text.
// ----------------------------------------------------------------------------
//
// config.js -- Default Configuration and App Database
// ===========================================================
// Central configuration file containing default settings for WebIn:
//   - Fallback icon SVG for apps whose favicons fail to load.
//   - Default tab categories (clean start with no pre-loaded apps).
//   - Clean default tab content with 0 apps.
// ----------------------------------------------------------------------------

const WEBIN_CONFIG = {
  FALLBACK_ICON_SVG:
    "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iIzU0NmU3YSI+PHBhdGggZD0iTTEyIDJDNi40OCAyIDIgNi40OCAyIDEyczQuNDggMTAgMTAgMTAgMTAtNC40OCAxMC0xMFMxNy41MiAyIDEyIDJ6bTggMTBjMCAxLjEtLjIgMi4xMi0uNTcgMy4wN0wxNC4yNSAxMS45bDIuODIgMi44Mi4wNy4wN2MyLjE4LTIuNC43OC02LjA0LTEuNzQtNy41NVM5LjI5IDQuNDYgNi44OSA2LjY0bC4wOC4wNyAyLjgyIDIuODFMMi45MyAxNC40M0E4LjkzMiA4LjkzMiAwIDAgMSAyIDEyYzAtNC40MiAzLjU4LTggOC04czggMy41OCA4IDh6Ii8+PC9zdmc+",

  DEFAULT_TABS: [
    "General",
  ],

  DEFAULT_TAB_CONTENT: {
    "General": [],
  },
};
