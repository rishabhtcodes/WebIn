// ----------------------------------------------------------------------------
// WebIn -- Floating Overlay for Instant Access to Web Applications
// ----------------------------------------------------------------------------
// Author   : Rishabh
// License  : MIT License -- free to use, modify, and distribute.
//            See LICENSE file in the project root for full license text.
// ----------------------------------------------------------------------------
//
// styles.js -- Core Stylesheet (Part 1 of 3)
// ===========================================================
// Contains the primary CSS rules for the WebIn overlay UI, injected into
// the Shadow DOM to avoid conflicts with host page styles. Includes:
//   - Base reset and system monospace font settings.
//   - Wrapper, header (purple-to-energetic-pink gradient), and close button styling.
//   - Navigation tabs with horizontal scrolling.
//   - Search bar and action button styles.
//   - Card image, modal input, and animation keyframes.
// ----------------------------------------------------------------------------

const WEBIN_STYLES = `
/* Offline local font family */

* {
  box-sizing: border-box !important;
  margin: 0 !important;
  padding: 0 !important;
  font-family: 'Consolas', 'Courier New', monospace !important;
  -webkit-font-smoothing: antialiased !important;
  -moz-osx-font-smoothing: grayscale !important;
}

.wrapper {
  width: 90vw;
  max-width: 900px;
  height: 70vh;
  min-height: 520px;
  background: #fdf4ff !important;
  color: #2e1065 !important;
  border-radius: 0 !important;
  box-shadow: 4px 4px 0px #000 !important;
  display: flex !important;
  flex-direction: column !important;
  overflow: hidden !important;
  border: 2px solid #000 !important;
  will-change: transform !important;
  transform: translateZ(0) !important;
}

.header {
  background: linear-gradient(135deg, #7c3aed 0%, #ec4899 100%) !important;
  padding: 12px 16px !important;
  display: flex !important;
  justify-content: space-between !important;
  align-items: center !important;
  cursor: grab !important;
  user-select: none !important;
  border-bottom: 2px solid #000 !important;
}

.header-logo {
  width: 22px !important;
  height: 22px !important;
  filter: brightness(0) invert(1) !important;
}

.header-title {
  font-weight: 600 !important;
  font-size: 14px !important;
  color: #fff !important;
  text-transform: uppercase !important;
  letter-spacing: 1.5px !important;
}

.close {
  background: transparent !important;
  border: 1px solid #fff !important;
  font-size: 18px !important;
  cursor: pointer !important;
  color: #fff !important;
  width: 26px !important;
  height: 26px !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  border-radius: 0 !important;
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1) !important;
  line-height: 1 !important;
}

.close svg {
  width: 14px !important;
  height: 14px !important;
  fill: #fff !important;
}

.close:hover {
  background: #fff !important;
}

.close:hover svg {
  fill: #ec4899 !important;
}

.nav {
  display: flex !important;
  padding: 10px !important;
  background: #fae8ff !important;
  align-items: center !important;
  border-bottom: 2px solid #000 !important;
}

.nav-tabs {
  display: flex !important;
  gap: 6px !important;
  flex-grow: 1 !important;
  overflow-x: auto !important;
  flex-wrap: nowrap !important;
  padding-bottom: 8px !important;
  margin-bottom: -8px !important;
  scroll-behavior: smooth !important;
}

.nav-tabs::-webkit-scrollbar {
  height: 4px !important;
}

.nav-tabs::-webkit-scrollbar-track {
  background: #f3e8ff !important;
}

.nav-tabs::-webkit-scrollbar-thumb {
  background: linear-gradient(90deg, #8b5cf6, #ec4899) !important;
}

.nav button {
  line-height: 1.4 !important;
  padding: 6px 12px !important;
  font-size: 11px !important;
  font-weight: 600 !important;
  border: 1px solid #000 !important;
  border-radius: 0 !important;
  cursor: pointer !important;
  background: #fff !important;
  color: #6b21a8 !important;
  box-shadow: 2px 2px 0px #d8b4fe !important;
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1) !important;
  flex-shrink: 0 !important;
  text-transform: uppercase !important;
}

.nav button:hover {
  background: #fdf2f8 !important;
  color: #db2777 !important;
  border-color: #ec4899 !important;
}

.nav button.active {
  background: linear-gradient(135deg, #7c3aed, #ec4899) !important;
  color: #fff !important;
  border-color: #000 !important;
  box-shadow: 2px 2px 0px #000 !important;
}

.nav.delete-mode .nav-tabs button {
  background: #fce7f3 !important;
  color: #be185d !important;
  border-color: #be185d !important;
  cursor: crosshair !important;
}

.search-container {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 12px !important;
  background: #fae8ff !important;
  border-bottom: 2px solid #000 !important;
}

.search-input {
  flex-grow: 1;
  width: 100% !important;
  padding: 8px 12px !important;
  border-radius: 0 !important;
  border: 1px solid #000 !important;
  font-size: 13px !important;
  outline: none !important;
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1) !important;
  background-color: #fff !important;
  color: #2e1065 !important;
  font-family: 'Consolas', 'Courier New', monospace !important;
}

.search-input::placeholder {
  color: #a855f7 !important;
  opacity: 0.8 !important;
}

.search-input:focus {
  border-color: #ec4899 !important;
  box-shadow: 2px 2px 0px #7c3aed !important;
}

.action-btn {
  background: #fff !important;
  border: 1px solid #000 !important;
  padding: 6px !important;
  width: 34px !important;
  height: 34px !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  border-radius: 0 !important;
  flex-shrink: 0;
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 2px 2px 0px #d8b4fe !important;
}

.card img {
  width: 44px !important;
  height: 44px !important;
  margin-bottom: 8px !important;
  object-fit: contain !important;
  border: 1px solid #000 !important;
  padding: 4px !important;
  background: #fff !important;
}

.modal-input, .modal-select {
  width: 100% !important;
  padding: 10px 12px !important;
  border: 1px solid #000 !important;
  border-radius: 0 !important;
  font-size: 13px !important;
  background: #fff !important;
  color: #2e1065 !important;
  font-family: 'Consolas', 'Courier New', monospace !important;
}

.modal-input:focus, .modal-select:focus {
  outline: none !important;
  border-color: #ec4899 !important;
  box-shadow: 2px 2px 0px #7c3aed !important;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(12px) translateZ(0);
  }
  100% {
    opacity: 1;
    transform: translateY(0) translateZ(0);
  }
}

@keyframes modal-scale-in {
  0% {
    opacity: 0;
    transform: scale(0.92) translateZ(0);
  }
  100% {
    opacity: 1;
    transform: scale(1) translateZ(0);
  }
}
`;
