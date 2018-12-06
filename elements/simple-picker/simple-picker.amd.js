define(["exports","./node_modules/@polymer/polymer/polymer-element.js","./node_modules/@polymer/iron-icon/iron-icon.js","./node_modules/@polymer/iron-icons/iron-icons.js","./lib/simple-picker-option.js"],function(_exports,_polymerElement,_ironIcon,_ironIcons,_simplePickerOption){"use strict";Object.defineProperty(_exports,"__esModule",{value:!0});_exports.SimplePicker=void 0;function _templateObject_f92414f0f9ad11e8854fa7859cbfbdf2(){var data=babelHelpers.taggedTemplateLiteral(["\n<style>:host {\n  display: inline-block;\n  position: relative;\n  @apply --simple-picker;\n}\n:host, \n:host #sample, \n:host .rows {\n  margin: 0;\n  padding: 0;\n}\n\n:host([disabled]) {\n  cursor: not-allowed;\n}\n\n:host([hidden]) {\n  display: none;\n}\n:host #sample {\n  display: inline-flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 2px;\n  border-radius: 2px;\n  background-color: var(--simple-picker-background-color,#ddd);\n  border: 1px solid var(--simple-picker-border-color,black);\n}\n\n:host #icon {\n  transform: rotate(-90deg);\n  transition: transform 0.25s;\n}\n\n:host([expanded]) #icon {\n  transform: rotate(0deg);\n  transition: transform 0.25s;\n}\n\n:host #collapse {\n  display: none;\n  position: absolute;\n  top: calc(var(--simple-picker-swatch-size, 20px)+12px);\n  background-color: var(--simple-picker-background-color,#ddd);\n}\n\n:host([expanded]:not([disabled])) #collapse {\n  display: block;\n} \n\n:host .rows {\n  display: table;\n  border-collapse: collapse;\n  position: absolute;\n  z-index: 1000;\n  outline: 1px solid var(--simple-picker-border-color,black);\n}\n\n:host .row {\n  display: table-row;\n  align-items: stretch;\n}\n\n:host simple-picker-option {\n  z-index: 1;\n  display: table-cell;\n  overflow: hidden;\n  max-height: unset;\n  height: var(--simple-picker-option-size, 24px);\n  min-width: var(--simple-picker-option-size, 24px);\n  line-height: var(--simple-picker-option-size, 24px);\n  color: var(--simple-picker-option-color, black);\n  background-color: var(--simple-picker-option-background-color, white);\n  outline: var(--simple-picker-option-outline, none);\n  transition: max-height 2s;\n}\n\n:host simple-picker-option[selected] {\n  z-index: 50;\n  color: var(--simple-picker-selected-option-color, white);\n  background-color: var(--simple-picker-selected-option-background-color, black);\n  outline: var(--simple-picker-selected-option-outline, none);\n}\n\n:host simple-picker-option[active] {\n  z-index: 100;\n  cursor: pointer;\n  color: var(--simple-picker-active-option-color, white);\n  background-color: var(--simple-picker-active-option-background-color, #0088ff);\n  outline: var(--simple-picker-active-option-outline, none);\n}\n\n:host #sample simple-picker-option {\n  background-color: var(--simple-picker-sample-background-color, transparent);\n  border: none;\n}\n\n:host(:not([expanded])) #collapse simple-picker-option {\n  max-height: 0;\n  transition: max-height 1.5s;\n}\n\n@media screen and (max-width: 600px) {\n  :host {\n    position: static;\n  }\n  :host #collapse {\n    top: 0;\n    margin-top: 0;\n    position: relative;\n  } \n  :host .rows {\n    position: sticky;\n  }  \n}\n</style>\n<div id=\"listbox\"\n  aria-activedescendant$=\"[[__activeDesc]]\" \n  aria-labelledby$=\"[[ariaLabelledby]]\" \n  disabled$=\"[[disabled]]\"\n  label$=\"[[label]]\" \n  role=\"listbox\" \n  tabindex=\"0\">\n  <div id=\"sample\">\n    <simple-picker-option \n      aria-hidden=\"true\" \n      hide-option-labels$=\"[[hideOptionLabels]]\"\n      icon$=\"[[__selectedOption.icon]]\"\n      style$=\"[[__selectedOption.style]]\" \n      title$=\"[[__selectedOption.alt]]\">\n    </simple-picker-option>\n    <span id=\"icon\"><iron-icon aria-hidden=\"true\" icon=\"arrow-drop-down\"></iron-icon></span>\n  </div>\n  <div id=\"collapse\">\n    <div class=\"rows\">\n      <template is=\"dom-repeat\" items=\"[[options]]\" as=\"row\" index-as=\"rownum\">\n        <div class=\"row\">\n          <template is=\"dom-repeat\" items=[[row]] as=\"option\" index-as=\"colnum\">\n            <simple-picker-option \n              active$=\"[[_isMatch(__activeDesc,rownum,colnum)]]\"\n              aria-selected$=\"[[option.selected]]\" \n              hide-option-labels$=\"[[hideOptionLabels]]\"\n              icon$=\"[[option.icon]]\"\n              id$=\"[[_getOptionId(rownum,colnum)]]\"\n              role=\"option\"\n              selected$=\"[[_isMatch(__selectedDesc,rownum,colnum)]]\"\n              on-option-focus=\"_handleOptionFocus\"\n              on-set-selected-option=\"_handleSetSelectedOption\"\n              style$=\"[[option.style]]\" \n              tabindex=\"-1\"\n              title$=\"[[option.alt]]\"\n              value$=\"[[option]]\">\n            </simple-picker-option>\n          </template>\n        </div>\n      </template>\n    </div>\n  </div>\n</div>"]);_templateObject_f92414f0f9ad11e8854fa7859cbfbdf2=function _templateObject_f92414f0f9ad11e8854fa7859cbfbdf2(){return data};return data}var SimplePicker=function(_PolymerElement){babelHelpers.inherits(SimplePicker,_PolymerElement);function SimplePicker(){babelHelpers.classCallCheck(this,SimplePicker);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(SimplePicker).apply(this,arguments))}babelHelpers.createClass(SimplePicker,[{key:"_getValue",value:function _getValue(options){for(var option=null,i=0,row;i<this.options.length;i++){row=this.options[i];for(var j=0;j<row.length;j++){if(!0===row[j].selected)option=row[j]}}this.$.texture.style.display=null!==option?"none":"block";return null!==option?option.value:null}},{key:"_getOptionId",value:function _getOptionId(rownum,colnum){return"option-"+rownum+"-"+colnum}},{key:"_getValue",value:function _getValue(__selectedDesc){return this._getOption(__selectedDesc).value}},{key:"_getOption",value:function _getOption(optionId){var coords=this.__selectedDesc.split("-");return this.options[coords[1]][coords[2]]}},{key:"_isMatch",value:function _isMatch(match,rownum,colnum){return match===this._getOptionId(rownum,colnum)}},{key:"_handleListboxClick",value:function _handleListboxClick(e){this._toggleListbox(!this.expanded)}},{key:"_handleListboxKeydown",value:function _handleListboxKeydown(e){var coords=this.__activeDesc.split("-"),rownum=parseInt(coords[1]),colnum=parseInt(coords[2]);if(32===e.keyCode){e.preventDefault();this._toggleListbox(!this.expanded)}else if(this.expanded&&[9,35,36,38,40].includes(e.keyCode)){e.preventDefault();if(35===e.keyCode){var lastrow=this.options.length-1,lastcol=this.options[lastrow].length-1;this._goToOption(lastrow,lastcol)}else if(36===e.keyCode){this._goToOption(0,0)}else if(38===e.keyCode){if(0<colnum){this._goToOption(rownum,colnum-1)}else if(0<rownum){this._goToOption(rownum-1,this.options[rownum-1].length-1)}}else if(40===e.keyCode){if(colnum<this.options[rownum].length-1){this._goToOption(rownum,colnum+1)}else if(rownum<this.options.length-1){this._goToOption(rownum+1,[0])}}}}},{key:"_handleOptionFocus",value:function _handleOptionFocus(e){this._setActiveOption(e.detail.id)}},{key:"_goToOption",value:function _goToOption(rownum,colnum){var targetId=this._getOptionId(rownum,colnum),target=this.shadowRoot.querySelector("#"+targetId),active=this.shadowRoot.querySelector("#"+this.__activeDesc);if(null!==target){target.tabindex=0;target.focus();active.tabindex=-1}}},{key:"_setActiveOption",value:function _setActiveOption(optionId){this.__activeDesc=optionId}},{key:"_setSelectedOption",value:function _setSelectedOption(optionId){this.__selectedDesc=optionId}},{key:"_toggleListbox",value:function _toggleListbox(expanded){this.expanded=expanded;if(expanded){var active=this.shadowRoot.querySelector("#"+this.__activeDesc);if(null!==active)active.focus()}else{this._setSelectedOption(this.__activeDesc)}}},{key:"ready",value:function ready(){babelHelpers.get(babelHelpers.getPrototypeOf(SimplePicker.prototype),"ready",this).call(this);for(var root=this,i=0;i<this.options.length;i++){for(var j=0,option;j<this.options[i].length;j++){option=this.options[i][j];if(option.selected){this.__activeDesc=this._getOptionId(i,j);this.__selectedDesc=this._getOptionId(i,j)}}}console.log(this.__activeDesc);this.$.listbox.addEventListener("click",function(e){root._handleListboxClick(e)});this.$.listbox.addEventListener("keydown",function(e){root._handleListboxKeydown(e)})}},{key:"connectedCallback",value:function connectedCallback(){babelHelpers.get(babelHelpers.getPrototypeOf(SimplePicker.prototype),"connectedCallback",this).call(this)}}],[{key:"template",get:function get(){return(0,_polymerElement.html)(_templateObject_f92414f0f9ad11e8854fa7859cbfbdf2())}},{key:"properties",get:function get(){return{ariaLabelledby:{name:"ariaLabelledby",type:"String",value:null,reflectToAttribute:!1,observer:!1},disabled:{name:"disabled",type:"Boolean",value:!1,reflectToAttribute:!1,observer:!1},expanded:{name:"expanded",type:"Boolean",value:!1,reflectToAttribute:!0,observer:!1},label:{name:"label",type:"String",value:null,reflectToAttribute:!1,observer:!1},options:{name:"options",type:"Array",value:[],reflectToAttribute:!1,observer:!1},hideOptionLabels:{name:"hideOptionLabels",type:"Boolean",value:!1,reflectToAttribute:!1,observer:!1},value:{name:"value",type:"String",value:"_getValue(__selectedDesc)",reflectToAttribute:!1,"read-only":!0,observer:!1},__activeDesc:{name:"__activeDesc",type:"String",value:"option-0-0",reflectToAttribute:!1,observer:!1},__selectedDesc:{name:"__selectedDesc",type:"String",value:"option-0-0",reflectToAttribute:!1,observer:!1},__selectedOption:{name:"__selectedOption",type:"Object",computed:"_getOption(__selectedDesc)",reflectToAttribute:!1,observer:!1}}}},{key:"tag",get:function get(){return"simple-picker"}}]);return SimplePicker}(_polymerElement.PolymerElement);_exports.SimplePicker=SimplePicker;window.customElements.define(SimplePicker.tag,SimplePicker)});