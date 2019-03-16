/**
 * Copyright 2019 The Pennsylvania State University
 * @license Apache-2.0, see License.md for full text.
 */
import { html, PolymerElement } from "@polymer/polymer/polymer-element.js";
import { HAXCMSTheme } from "@lrnwebcomponents/haxcms-elements/lib/core/HAXCMSThemeWiring.js";
import { BasicTemplate } from "@lrnwebcomponents/haxcms-elements/lib/ui-components/templates/basic-template.js";
import "@lrnwebcomponents/simple-colors/simple-colors.js";
/**
 * `haxcms-basic-theme`
 * `An incredibly basic theme. Great starting point for new site discussions.
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class HAXCMSBasicTheme extends HAXCMSTheme(BasicTemplate(PolymerElement)) {
  // render function
  static get template() {
    let template = super.template;
    return html`
      <style include="simple-colors">
        :host {
          display: block;
          background-color: white;
          --haxcms-basic-theme-accent-color: var(--haxcms-color, yellow);
        }
        .container {
          margin: 24px auto;
          max-width: 1280px;
          width: 90%;
        }
        site-breadcrumb {
          margin-left: 16px;
        }
        /**
         * Hide the slotted content during edit mode. This must be here to work.
         */
        :host([edit-mode]) #slot {
          display: none;
        }
        site-top-menu {
          --site-top-menu-bg: #37474f;
          --site-top-menu-link-color: #ffffff;
          --site-top-menu-indicator-color: #ffffff;
          --site-top-menu-link-active-color: var(
            --haxcms-basic-theme-accent-color
          );
          --site-top-menu-indicator-arrow: 8px;
        }
        site-children-block {
          --site-children-block-button: {
            color: #ffffff;
          }
          --site-children-block-button-active: {
            background-color: #37474f;
            color: var(--haxcms-basic-theme-accent-color);
          }
        }
        .left-col {
          min-height: 250px;
          border: 2px solid black;
          background-color: #37474f;
          color: white;
          padding: 16px;
        }
        site-active-title {
          display: inline-flex;
          --site-active-title-heading: {
            font-family: "Montserrat", "Helvetica", "Tahoma", "Geneva", "Arial",
              sans-serif;
            font-size: 16px;
            line-height: 32px;
            margin-bottom: 8px;
            text-rendering: optimizelegibility;
            font-weight: 600;
            color: white;
          }
        }
        site-title {
          left: 0;
          margin: 0 32px;
          position: absolute;
          overflow: hidden;
          --site-title-link: {
            display: inline-block;
            color: #fafafa;
            text-decoration: none;
          }
          --site-title-heading: {
            font-family: "Montserrat", "Helvetica", "Tahoma", "Geneva", "Arial",
              sans-serif;
            font-size: 26px;
            margin: 0;
            padding: 0;
            text-align: center;
            font-weight: 100;
          }
        }
        .buttons {
          margin-top: 36px;
          display: flex;
        }
        .buttons site-rss-button {
          display: inline-flex;
        }
        .menu-buttons {
          display: flex;
        }
        site-menu-button {
          --site-menu-button-icon: {
            width: 32px;
            height: 32px;
            color: white;
          }
          --site-menu-button-button-hover: {
            color: var(--haxcms-basic-theme-accent-color);
          }
        }
        site-footer {
          padding: 32px 64px;
          background-color: #37474f;
        }
        site-modal {
          --site-modal-icon: {
            color: white;
          }
          --site-modal-tooltip: {
            --paper-tooltip-background: #000000;
            --paper-tooltip-opacity: 1;
            --paper-tooltip-text-color: #ffffff;
            --paper-tooltip-delay-in: 0;
            --paper-tooltip: {
              border-radius: 0;
            }
          }
        }
      </style>
      ${template}
    `;
  }
}
window.customElements.define("haxcms-basic-theme", HAXCMSBasicTheme);
export { HAXCMSBasicTheme };