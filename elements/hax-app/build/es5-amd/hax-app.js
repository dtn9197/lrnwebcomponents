define([
  "exports",
  "./node_modules/@polymer/polymer/polymer-element.js",
  "./node_modules/@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js"
], function(_exports, _polymerElement, _HAXWiring) {
  "use strict";
  Object.defineProperty(_exports, "__esModule", { value: !0 });
  _exports.HaxApp = void 0;
  function _templateObject_46de77c0d6f011e8ad14cb66646f15e8() {
    var data = babelHelpers.taggedTemplateLiteral([
      "\n<style>:host {\n  display: block;\n}\n\n:host([hidden]) {\n  display: none;\n}\n</style>\n<slot></slot>"
    ]);
    _templateObject_46de77c0d6f011e8ad14cb66646f15e8 = function() {
      return data;
    };
    return data;
  }
  var HaxApp = (function(_PolymerElement) {
    babelHelpers.inherits(HaxApp, _PolymerElement);
    function HaxApp() {
      babelHelpers.classCallCheck(this, HaxApp);
      return babelHelpers.possibleConstructorReturn(
        this,
        (HaxApp.__proto__ || Object.getPrototypeOf(HaxApp)).apply(
          this,
          arguments
        )
      );
    }
    babelHelpers.createClass(
      HaxApp,
      [
        {
          key: "connectedCallback",
          value: function connectedCallback() {
            babelHelpers
              .get(
                HaxApp.prototype.__proto__ ||
                  Object.getPrototypeOf(HaxApp.prototype),
                "connectedCallback",
                this
              )
              .call(this);
            this.HAXWiring = new _HAXWiring.HAXWiring();
            this.HAXWiring.setHaxProperties(
              HaxApp.haxProperties,
              HaxApp.tag,
              this
            );
          }
        }
      ],
      [
        {
          key: "template",
          get: function get() {
            return (0, _polymerElement.html)(
              _templateObject_46de77c0d6f011e8ad14cb66646f15e8()
            );
          }
        },
        {
          key: "haxProperties",
          get: function get() {
            return {
              canScale: !0,
              canPosition: !0,
              canEditSource: !1,
              gizmo: {
                title: "Hax app",
                description: "Automated conversion of hax-app/",
                icon: "icons:android",
                color: "green",
                groups: ["App"],
                handles: [{ type: "todo:read-the-docs-for-usage" }],
                meta: {
                  author: "btopro",
                  owner: "The Pennsylvania State University"
                }
              },
              settings: { quick: [], configure: [], advanced: [] }
            };
          }
        },
        {
          key: "properties",
          get: function get() {
            return {};
          }
        },
        {
          key: "tag",
          get: function get() {
            return "hax-app";
          }
        }
      ]
    );
    return HaxApp;
  })(_polymerElement.PolymerElement);
  _exports.HaxApp = HaxApp;
  window.customElements.define(HaxApp.tag, HaxApp);
});