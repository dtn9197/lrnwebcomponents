define([
  "exports",
  "./node_modules/@polymer/polymer/polymer-element.js",
  "./node_modules/@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js"
], function(_exports, _polymerElement, _HAXWiring) {
  "use strict";
  Object.defineProperty(_exports, "__esModule", { value: !0 });
  _exports.PerSpecTive = void 0;
  function _templateObject_dbbf1680d70211e89da4999c63094187() {
    var data = babelHelpers.taggedTemplateLiteral([
      "\n<style>:host {\n  display: block;\n}\n\n:host([hidden]) {\n  display: none;\n}\n</style>\n<slot></slot>"
    ]);
    _templateObject_dbbf1680d70211e89da4999c63094187 = function() {
      return data;
    };
    return data;
  }
  var PerSpecTive = (function(_PolymerElement) {
    babelHelpers.inherits(PerSpecTive, _PolymerElement);
    function PerSpecTive() {
      babelHelpers.classCallCheck(this, PerSpecTive);
      return babelHelpers.possibleConstructorReturn(
        this,
        (PerSpecTive.__proto__ || Object.getPrototypeOf(PerSpecTive)).apply(
          this,
          arguments
        )
      );
    }
    babelHelpers.createClass(
      PerSpecTive,
      [
        {
          key: "connectedCallback",
          value: function connectedCallback() {
            babelHelpers
              .get(
                PerSpecTive.prototype.__proto__ ||
                  Object.getPrototypeOf(PerSpecTive.prototype),
                "connectedCallback",
                this
              )
              .call(this);
            this.HAXWiring = new _HAXWiring.HAXWiring();
            this.HAXWiring.setHaxProperties(
              PerSpecTive.haxProperties,
              PerSpecTive.tag,
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
              _templateObject_dbbf1680d70211e89da4999c63094187()
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
                title: "Per spec-tive",
                description: "Automated conversion of per-spec-tive/",
                icon: "icons:android",
                color: "green",
                groups: ["Spec"],
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
            return "per-spec-tive";
          }
        }
      ]
    );
    return PerSpecTive;
  })(_polymerElement.PolymerElement);
  _exports.PerSpecTive = PerSpecTive;
  window.customElements.define(PerSpecTive.tag, PerSpecTive);
});