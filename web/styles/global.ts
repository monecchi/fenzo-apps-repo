// Global styles
import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
/*! normalize.css v8.0.0 | MIT License | github.com/necolas/normalize.css */
/* Document
   ========================================================================== */
/**
 * 1. Correct the line height in all browsers.
 * 2. Prevent adjustments of font size after orientation changes in iOS.
 */
  html {
    text-rendering: optimizeLegibility;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    height: 100%;
    line-height: 1.15;
    /* 1 */
    -webkit-text-size-adjust: 100%;
    /* 2 */
  }
/* Sections
   ========================================================================== */
/**
 * Remove the margin in all browsers.
 */
  body {
    margin: 0;
    font-family: 'soleil', sans-serif;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.7;
    text-align: left;
    color: ${props => props.theme.colors.text};
    background: ${props => props.theme.colors.background};
    height: 100%;
    overflow-x: hidden;
    scroll-behavior: auto;
  }
/**
 * Correct the font size and margin on h1 elements within section and
 * article contexts in Chrome, Firefox, and Safari.
 */
h1 {
  font-size: 2em;
  margin: 0.67em 0; }
/* Grouping content
   ========================================================================== */
/**
 * 1. Add the correct box sizing in Firefox.
 * 2. Show the overflow in Edge and IE.
 */
hr {
  box-sizing: content-box;
  /* 1 */
  height: 0;
  /* 1 */
  overflow: visible;
  /* 2 */ }
/**
 * 1. Correct the inheritance and scaling of font size in all browsers.
 * 2. Correct the odd em font sizing in all browsers.
 */
pre {
  font-family: monospace, monospace;
  /* 1 */
  font-size: 1em;
  /* 2 */ }
/* Text-level semantics
   ========================================================================== */
/**
 * Remove the gray background on active links in IE 10.
 */
a {
  background-color: transparent; }
/**
 * 1. Remove the bottom border in Chrome 57-
 * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.
 */
abbr[title] {
  border-bottom: none;
  /* 1 */
  text-decoration: underline;
  /* 2 */
  -webkit-text-decoration: underline dotted;
          text-decoration: underline dotted;
  /* 2 */ }
/**
 * Add the correct font weight in Chrome, Edge, and Safari.
 */
b,
strong {
  font-weight: bolder; }

/**
 * 1. Correct the inheritance and scaling of font size in all browsers.
 * 2. Correct the odd em font sizing in all browsers.
 */
code,
kbd,
samp {
  font-family: monospace, monospace;
  /* 1 */
  font-size: 1em;
  /* 2 */ }
/**
 * Add the correct font size in all browsers.
 */
small {
  font-size: 80%; }
/**
 * Prevent sub and sup elements from affecting the line height in
 * all browsers.
 */
sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline; }
sub {
  bottom: -0.25em; }
sup {
  top: -0.5em; }
/* Embedded content
   ========================================================================== */
/**
 * Remove the border on images inside links in IE 10.
 */
img {
  border-style: none; }
/* Forms
   ========================================================================== */
/**
 * 1. Change the font styles in all browsers.
 * 2. Remove the margin in Firefox and Safari.
 */
button,
input,
optgroup,
select,
textarea {
  font-family: inherit;
  /* 1 */
  font-size: 100%;
  /* 1 */
  line-height: 1.15;
  /* 1 */
  margin: 0;
  /* 2 */ }
/**
 * Show the overflow in IE.
 * 1. Show the overflow in Edge.
 */
button,
input {
  /* 1 */
  overflow: visible; }
/**
 * Remove the inheritance of text transform in Edge, Firefox, and IE.
 * 1. Remove the inheritance of text transform in Firefox.
 */
button,
select {
  /* 1 */
  text-transform: none; }
/**
 * Correct the inability to style clickable types in iOS and Safari.
 */
button,
[type="button"],
[type="reset"],
[type="submit"] {
  -webkit-appearance: button; }
/**
 * Remove the inner border and padding in Firefox.
 */
button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
  border-style: none;
  padding: 0; }
/**
 * Restore the focus styles unset by the previous rule.
 */
button:-moz-focusring,
[type="button"]:-moz-focusring,
[type="reset"]:-moz-focusring,
[type="submit"]:-moz-focusring {
  outline: 1px dotted ButtonText; }
/**
 * Correct the padding in Firefox.
 */
fieldset {
  padding: 0.35em 0.75em 0.625em; }
/**
 * 1. Correct the text wrapping in Edge and IE.
 * 2. Correct the color inheritance from fieldset elements in IE.
 * 3. Remove the padding so developers are not caught out when they zero out
 *    fieldset elements in all browsers.
 */
legend {
  box-sizing: border-box;
  /* 1 */
  color: inherit;
  /* 2 */
  display: table;
  /* 1 */
  max-width: 100%;
  /* 1 */
  padding: 0;
  /* 3 */
  white-space: normal;
  /* 1 */ }
/**
 * Add the correct vertical alignment in Chrome, Firefox, and Opera.
 */
progress {
  vertical-align: baseline; }
/**
 * Remove the default vertical scrollbar in IE 10+.
 */
textarea {
  overflow: auto; }
/**
 * 1. Add the correct box sizing in IE 10.
 * 2. Remove the padding in IE 10.
 */
[type="checkbox"],
[type="radio"] {
  box-sizing: border-box;
  /* 1 */
  padding: 0;
  /* 2 */ }
/**
 * Correct the cursor style of increment and decrement buttons in Chrome.
 */
[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
  height: auto; }
/**
 * 1. Correct the odd appearance in Chrome and Safari.
 * 2. Correct the outline style in Safari.
 */
[type="search"] {
  -webkit-appearance: textfield;
  /* 1 */
  outline-offset: -2px;
  /* 2 */ }
/**
 * Remove the inner padding in Chrome and Safari on macOS.
 */
[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none; }
/**
 * 1. Correct the inability to style clickable types in iOS and Safari.
 * 2. Change font properties to inherit in Safari.
 */
::-webkit-file-upload-button {
  -webkit-appearance: button;
  /* 1 */
  font: inherit;
  /* 2 */ }
/* Interactive
   ========================================================================== */
/*
 * Add the correct display in Edge, IE 10+, and Firefox.
 */
details {
  display: block; }
/*
 * Add the correct display in all browsers.
 */
summary {
  display: list-item; }
/* Misc
   ========================================================================== */
/**
 * Add the correct display in IE 10+.
 */
template {
  display: none; }
/**
 * Add the correct display in IE 10.
 */
[hidden] {
  display: none; }

  /**
  * Resets
  */
  * {
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
  }

  a {
    color: ${props => props.theme.colors.brand_alt};
    background-color: transparent;
    cursor: default;
    text-decoration: none;
    outline: none;

    &.active, &:active, &::focus, &:hover {
      text-decoration: none;
      outline: none;
    }
  }
  @media only screen and (min-width: 960px) {
    a {
      cursor: pointer;
    }
  }

  ul {
    margin: 0;
    padding: 0;
  }

  ul > li {
    list-style: none;
  }

  ::selection {
    color: #fff;
    background: ${props => props.theme.colors.brand};
  }

  .h1, .h2, .h3, .h4, .h5, .h6, h1, h2, h3, h4, h5, h6 {
    margin-bottom: .5rem;
    font-family: inherit;
    font-weight: 500;
    line-height: 1.3;
    color: ${props => props.theme.colors.headings};
  }

  /* svg */
  .icon-app {
    display: inline-block;
    position: relative;
  }
  .icon-app svg {
    color: ${props => props.theme.colors.text};
  }
  .icon-app svg [stroke=${props => props.theme.colors.brand}] {
    stroke: currentColor;
  }
  .icon-app svg [fill=${props => props.theme.colors.brand}] {
    fill: currentColor;
  }
  .icon-app svg, .icon-app img {
    width: auto;
    height: 100%;
  }

  /**
  * Utilities
  */
 .lh-1 {
    line-height: 1 !important;
  }
  .lh-12 {
    line-height: 1.22 !important;
  }
  .lh-15 {
    line-height: 1.5 !important;
  }
  .lh-16 {
    line-height: 1.6 !important;
  }
  .lh-17 {
    line-height: 1.77 !important;
  }
  .lh-18 {
    line-height: 1.8 !important;
  }
  .font-weight-light {
    font-weight: 300 !important;
  }
  .font-weight-regular {
    font-weight: 400 !important;
  }
  .font-weight-bolder {
    font-weight: 600 !important;
  }
  .font-weight-bold {
    font-weight: bold !important;
  }
  .text-uppercase {
    text-transform: uppercase;
  }
  .text-capitalize {
    text-transform: capitalize;
  }
  .text-lowercase {
    text-transform: lowercase;
  }
  .d-none {
    display: none !important;
  }
  .d-block {
    display: block !important;
  }
  .d-flex {
    display: flex !important;
  }
  .d-inline-flex {
    display: inline-flex !important;
  }
  .justify-content-center {
    justify-content: center !important;
  }
  .justify-content-start {
    justify-content: flex-start !important;
  }
  .justify-content-end {
    justify-content: flex-end !important;
  }
  .justify-content-between {
    justify-content: space-between !important;
  }
  .justify-content-around {
    justify-content: space-around !important;
  }
  .justify-content-evenly {
    justify-content: space-evenly !important;
  }
  .justify-content-stretch {
    justify-content: stretch !important;
  }
  .align-items-center {
    align-items: center !important;
  }
  .align-items-end {
    align-items: flex-end !important;
  }
  .flex-row {
    flex-direction: row;
  }
  .flex-column {
    flex-direction: column;
  }
  .lh-0 {
    line-height: 0;
  }
  .h-auto {
    height: auto;
  }
  .h-100 {
    height: 100%;
  }
  .w-100 {
    width: 100%;
  }
  .hv-100 {
    height: 100vh;
  }
  .wv-100 {
    width: 100vw;
  }
  .p-0 {
    padding: 0 !important;
  }
  .pl-0 {
    padding-left: 0 !important;
  }
  .pl-r {
    padding-right: 0 !important;
  }
  .m-0 {
    margin: 0 !important;
  }
  .mt-0 {
  margin-top: 0 !important;
  }
  .mb-0 {
    margin-bottom: 0 !important;
  }
  .mr-auto {
    margin-right: auto !important;
  }
  .ml-auto {
    margin-left: auto !important;
  }
  .hidden {
    visibility: hidden;
  }
  .o-hidden {
    overflow: hidden;
  }
  .o-hidden-x {
    overflow-x: hidden;
  }
  .o-hidden-y {
    overflow-y: hidden;
  }
  .scroll-smooth {
    scroll-behavior: smooth;
  }
  .scroll-y {
    overflow-y: scroll;
  }
  .scroll-x {
    overflow-x: scroll;
  }
  .scroll-y-auto {
    overflow-y: auto;
  }
  .text-primary {
    color: ${props => props.theme.colors.text_primary} !important;
  }
  .text-center {
    text-align: center !important;
  }
  .text-right {
    text-align: right !important;
  }
  .text-left {
    text-align: left !important;
  }
  .font-weight-900 {
    font-weight: 900;
  }
  .font-weight-600 {
    font-weight: 600;
  }
  .font-weight-300 {
    font-weight: 300;
  }
  .image-cover {
    background: no-repeat 50%/cover;
  }
  .page-heading {
    font-size: 3.5rem;
    font-weight: 600;
    letter-spacing: -.03em;
    line-height: 1.1;
    margin-bottom: 1.5rem;
  }
`;
