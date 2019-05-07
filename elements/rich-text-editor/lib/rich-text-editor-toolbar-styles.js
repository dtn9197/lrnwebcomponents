/**
 * Copyright 2018 The Pennsylvania State University
 * @license Apache-2.0, see License.md for full text.
 *
 * `rich-text-editor-toolbar-styles`
 * `a shared set of styles for rich-text-editor toolbar items`
 *
 * @microcopy - language worth noting:
 *  -
 *
 * @pseudoElement
 * @polymer
 * @demo demo/index.html
 */
import { html, PolymerElement } from "@polymer/polymer/polymer-element.js";
const styleElement = document.createElement("dom-module");

const css = html`
  <style>
    :host([hidden]) {
      display: none;
    }
    :host([sticky]) {
      position: sticky;
      top: 0;
    }
    :host #toolbar {
      display: flex;
      opacity: 1;
      margin: 0;
      align-items: stretch;
      flex-wrap: wrap;
      justify-content: flex-start;
      background-color: var(--rich-text-editor-bg);
      border: var(--rich-text-editor-border);
      font-size: 12px;
      transition: all 0.5s;
      @apply --rich-text-editor-toolbar;
    }
    :host #toolbar[aria-hidden] {
      visibility: hidden;
      opacity: 0;
      height: 0;
    }
    :host #toolbar .group {
      display: flex;
      flex-wrap: nowrap;
      justify-content: space-evenly;
      align-items: stretch;
      padding: 0 3px;
      @apply --rich-text-editor-toolbar-group;
    }
    :host #toolbar .group:not(:last-of-type) {
      margin-right: 3px;
      border-right: var(--rich-text-editor-border);
      @apply --rich-text-editor-toolbar-divider;
    }
    :host #toolbar .button {
      display: flex;
      flex: 0 0 auto;
      align-items: stretch;
      margin: 3px;
    }
    :host #toolbar #morebutton {
      flex: 1 0 auto;
      justify-content: flex-end;
    }
    /* hide the more button if all the buttons are displayed */
    :host([responsive-size="xs"]) #morebutton[collapse-max="xs"],
    :host([responsive-size="sm"]) #morebutton[collapse-max*="s"],
    :host([responsive-size="md"]) #morebutton:not([collapse-max*="l"]),
    :host([responsive-size="lg"]) #morebutton:not([collapse-max="xl"]),
    :host([responsive-size="xl"]) #morebutton,
    /* hide the buttons if they should be collaped until */
    :host([responsive-size="xs"]) #toolbar[collapsed] *[collapsed-until*="m"],
    :host([responsive-size="xs"]) #toolbar[collapsed] *[collapsed-until*="l"],
    :host([responsive-size="sm"]) #toolbar[collapsed] *[collapsed-until="md"],
    :host([responsive-size="sm"]) #toolbar[collapsed] *[collapsed-until*="l"],
    :host([responsive-size="md"]) #toolbar[collapsed] *[collapsed-until*="l"],
    :host([responsive-size="lg"]) #toolbar[collapsed] *[collapsed-until="xl"] {
      display: none;
    }
    :host(rich-text-editor-picker),
    :host(rich-text-editor-emoji-picker),
    :host(rich-text-editor-symbol-picker) {
      --simple-picker-icon-transform: rotate(0deg);
      --simple-picker-expanded-icon-transform: rotate(0deg);
      --simple-picker-option: {
        width: 24px;
        max-width: 24px;
      }
    }
    :host #collapse {
      --a11y-collapse-margin: 0 3px;
      --a11y-collapse-horizontal-padding: 10px;
      --a11y-collapse-vertical-padding: 5px;
      --a11y-collapse-border: var(--rich-text-editor-bg);
      --a11y-collapse: {
        position: relative;
      }
      --a11y-collapse-icon-rotated: {
        transform: rotate(0deg);
      }
      --a11y-collapse-content: {
        position: absolute;
        top: 26px;
        background: white;
        z-index: 9999;
      }
      --a11y-collapse-content-expanded: {
        border: 1px solid var(--rich-text-editor-button-color);
        box-shadow: 0px 0px 1px #888;
      }
    }
    :host paper-tooltip {
      z-index: 99999;
    }
    :host #prompt:not([hidden]) {
      display: flex;
      align-items: center;
      justify-content: space-between;
      z-index: 9999;
    }
    :host #prompt paper-input {
      width: 200px;
      padding: 0;
    }
    :host .confirm-or-cancel {
      min-width: 40px;
    }
    :host #button,
    :host .rtebutton {
      text-transform: unset;
      padding: 0;
      transition: all 0.5s;
      min-width: 24px;
      height: 24px;
      color: var(--rich-text-editor-button-color);
      border-color: var(--rich-text-editor-button-border);
      --simple-picker-color: var(--rich-text-editor-button-color);
      --simple-picker-background-color: var(--rich-text-editor-bg);
      --simple-picker-sample-border-color: var(--rich-text-editor-bg);
      --simple-picker-border-color: var(--rich-text-editor-button-color);
      --simple-picker-icon-tranform: rotate(0deg);
      --simple-picker-expanded-icon-tranform: rotate(-90deg);
      --simple-picker-option-null: {
        display: none;
      }
      --simple-picker-collapse: {
        top: 26px;
      }
      --simple-picker-sample-null-label: {
        display: none;
      }
      @apply --rich-text-editor-button;
    }
    :host([disabled]) #button,
    :host([disabled]) .rtebutton {
      cursor: not-allowed;
      color: var(--rich-text-editor-button-disabled-color);
      background-color: var(--rich-text-editor-button-disabled-bg);
      @apply --rich-text-editor-button-disabled;
    }
    :host #button[toggled],
    :host .rtebutton[toggled] {
      color: var(--rich-text-editor-button-toggled-color);
      background-color: var(--rich-text-editor-button-toggled-bg);
      @apply --rich-text-editor-button-toggled;
    }
    :host #button:focus,
    :host #button:hover,
    :host .rtebutton:focus,
    :host .rtebutton:hover {
      color: var(--rich-text-editor-button-hover-color);
      background-color: var(--rich-text-editor-button-hover-bg);
    }
    :host #button #icon:not([icon]),
    :host .rtebutton #icon:not([icon]) {
      display: none;
    }
    :host .offscreen {
      position: absolute;
      left: -999999px;
      top: 0;
      height: 0;
      width: 0;
      overflow: hidden;
    }
  </style>
`;
styleElement.appendChild(css);

styleElement.register("rich-text-editor-toolbar-styles");