/*!
 * angular-schema-form-material
 * @version 1.0.0-alpha.3
 * @date Fri, 13 Oct 2017 09:54:52 GMT
 * @link https://github.com/json-schema-form/angular-schema-form-material
 * @license MIT
 * Copyright (c) 2014-2017 JSON Schema Form
 */
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 28);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

var path = '/material/default.html';
var html = "<md-input-container ng-class=\"['schema-form-' + form.type, form.htmlClass, {'has-error': hasError(), 'has-success': hasSuccess(), 'has-feedback': form.feedback !== false}]\" sf-messages sf-layout sf-material-class=md-input-has-value> <label ng-show=showTitle() for={{::form.key|sfCamelKey}}>{{::form.title}}</label> <input sf-field-model ng-show=::form.key type={{::form.type}} step=any sf-changed=form placeholder={{::form.placeholder}} id={{::form.key|sfCamelKey}} ng-class=::form.fieldHtmlClass sf-type-parser=form.schema ng-disabled=::form.readonly schema-validate=form name={{::form.key|sfCamelKey}} aria-describedby={{::form.key|sfCamelKey}}Status /> <div ng-class=::form.hintClass ng-if=::form.hint.length>{{::form.hint}}</div> </md-input-container>";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

var path = '/material/checkbox.html';
var html = "<div class=\"checkbox schema-form-checkbox {{::form.htmlClass}}\" ng-class=\"{'has-error': hasError(), 'has-success': hasSuccess()}\" sf-messages> <md-checkbox sf-field-model sf-changed=form ng-disabled=form.readonly schema-validate=form sf-material-class=md-checked class={{::form.fieldHtmlClass}} name={{::form.key|sfCamelKey}} aria-label={{::form.title}}> <span>{{::form.title}}</span> </md-checkbox> </div>";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

var path = '/material/submit.html';
var html = "<section class=\"schema-form-submit {{::form.htmlClass}}\" sf-messages> <md-button class=\"md-raised {{ form.style || 'md-primary' }} {{::form.fieldHtmlClass}}\" type={{::form.type}} ng-disabled=form.readonly aria-label={{::form.title}}> <md-tooltip ng-if=::form.tip>{{::form.tip}}</md-tooltip> {{::form.title}} </md-button> </section>";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(22);
__webpack_require__(21);
__webpack_require__(20);


/***/ }),
/* 4 */
/***/ (function(module, exports) {

var path = '/material/actions.html';
var html = "<section layout=row class=\"btn-group schema-form-actions {{form.htmlClass}}\"></section>";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

var path = '/material/array.html';
var html = "<div class=\"schema-form-array {{::form.htmlClass}}\" sf-field-model=sf-new-array sf-new-array> <label class=control-label ng-show=showTitle()>{{ form.title }}</label> <md-list class=list-group sf-field-model ui-sortable=form.sortOptions> <md-list-item layout=row class=list-group-item sf-field-model=ng-repeat ng-repeat=\"item in modelArray track by $index\" schema-form-array-items class={{::form.fieldHtmlClass}}> <md-button flex=none flex-order=2 type=button ng-hide=\"form.readonly || form.remove === null\" ng-click=deleteFromArray($index) ng-disabled=\"form.schema.minItems >= modelArray.length\" class=md-icon-button aria-label=More style=position:relative;z-index:20> <md-icon>close</md-icon> </md-button> </md-list-item> </md-list> <div class=clearfix style=padding:15px ng-model=modelArray schema-validate=form> <div class=help-block ng-show=\"(hasError() && errorMessage(schemaError())) || form.description\" ng-bind-html=\"(hasError() && errorMessage(schemaError())) || form.description\"></div> <md-button ng-hide=\"form.readonly || form.add === null\" ng-click=appendToArray() ng-disabled=\"form.schema.maxItems <= modelArray.length\" type=button class=\"btn md-raised md-primary {{ form.style.add || 'btn-default' }} pull-right\"> <i class=\"glyphicon glyphicon-plus\"></i> {{ form.add || 'Add'}} </md-button> </div> </div>";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

var path = '/material/autocomplete.html';
var html = "<div class=\"form-group {{::form.htmlClass}} schema-form-select\" ng-class=\"{'has-error': hasError(), 'has-success': hasSuccess(), 'has-feedback': form.feedback !== false}\" sf-messages sf-layout> <md-autocomplete flex ng-disabled=form.readonly ng-model=$$value$$ sf-autocomplete sf-field-model=replaceAll schema-validate=form md-selected-item=$$value$$ md-search-text=searchText md-selected-item-change=\"'todo';\" md-items=\"item in evalExpr('this[\\''+form.optionFilter+'\\'](\\''+searchText+'\\')')\" md-item-text=item.name md-floating-label={{::form.title}} md-menu-class=autocomplete-custom-template> <md-item-template> <span md-highlight-text=searchText>{{item.name}}</span> </md-item-template> <md-not-found> No matches found </md-not-found> </md-autocomplete> </div>";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

var path = '/material/checkboxes.html';
var html = "<div sf-array=form sf-field-model class=\"form-group schema-form-checkboxes {{::form.htmlClass}}\" ng-class=\"{'has-error': hasError(), 'has-success': hasSuccess()}\" sf-messages> <label class=control-label ng-show=showTitle()>{{::form.title}}</label> <div class=checkboxes sf-layout> <div class=checkbox ng-repeat=\"val in titleMapValues track by $index\"> <md-checkbox ng-model=titleMapValues[$index] sf-changed=form ng-disabled=\"::form.readonly || form.titleMap[$index].readonly\" ng-class=::form.fieldHtmlClass name={{::form.key|sfCamelKey}} ng-true-value=true ng-false-value=false aria-label={{::form.title}}> {{::form.titleMap[$index].name}} </md-checkbox> </div> </div> </div>";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

var path = '/material/date.html';
var html = "<div class=\"schema-form-date {{::form.htmlClass}}\"> <label ng-show=showTitle() for={{::form.key|sfCamelKey}}>{{::form.title}}</label> <md-datepicker sf-field-model sf-changed=form schema-validate=form sf-type-parser=form.schema id={{::form.key|sfCamelKey}} ng-show=::form.key ng-class=::form.fieldHtmlClass ng-disabled=::form.readonly md-placeholder=\"Enter date\" sf-messages> </md-datepicker> </div>";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

var path = '/material/fieldset.html';
var html = "<fieldset ng-disabled=form.readonly class=\"standard {{form.htmlClass}}\" flex> <legend ng-show=form.title>{{ form.title }}</legend> </fieldset>";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 10 */
/***/ (function(module, exports) {

var path = '/material/help.html';
var html = "<div ng-class=\"['helpvalue', 'schema-form-helpvalue', form.htmlClass]\" ng-bind-html=form.helpvalue sf-layout></div>";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 11 */
/***/ (function(module, exports) {

var path = '/material/radio-buttons.html';
var html = "<div class=\"form-group schema-form-radiobuttons {{::form.htmlClass}}\" ng-class=\"{'has-error': hasError(), 'has-success': hasSuccess()}\" sf-layout sf-messages> <div> <label class=control-label ng-show=showTitle()>{{form.title}}</label> </div> <section layout=row layout-sm=column layout-align=\"center center\"> <md-input-container ng-repeat=\"item in form.titleMap\"> <md-button type=button class=\"group md-raised\" sf-field-model=replaceAll ng-model=$$value$$ sf-changed=form class=\"radio {{::form.fieldHtmlClass}}\" ng-class=\"{'md-primary': ($$value$$ == item.value)}\" ng-disabled=form.readonly ng-model-options=form.ngModelOptions schema-validate=form ng-value=item.value ng-click=\"$$value$$ = item.value\" name=\"{{form.key.join('.')}}\"> <span ng-bind-html=item.name></span> </md-button> </md-input-container> </section> </div>";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 12 */
/***/ (function(module, exports) {

var path = '/material/radios-inline.html';
var html = "<div class=\"form-group schema-form-radios-inline {{::form.htmlClass}}\" ng-class=\"{'has-error': hasError(), 'has-success': hasSuccess()}\" sf-layout sf-messages> <label class=control-label ng-show=showTitle()>{{form.title}}</label> <md-radio-group layout=row sf-field-model=replaceAll ng-model=$$value$$ class={{::form.fieldHtmlClass}} ng-class=\"{ active: item.value === $$value$$ }\" sf-changed=form schema-validate=form ng-disabled=form.readonly id=\"{{form.key.join('.')}}\" name=\"{{form.key.join('.')}}\"> <md-radio-button ng-repeat=\"item in form.titleMap\" ng-value=item.value aria-label=item.name> <span ng-bind-html=item.name></span> </md-radio-button> </md-radio-group> </div>";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 13 */
/***/ (function(module, exports) {

var path = '/material/radios.html';
var html = "<div class=\"form-group schema-form-radios {{::form.htmlClass}}\" ng-class=\"{'has-error': hasError(), 'has-success': hasSuccess()}\"> <label class=control-label ng-show=showTitle() aria-label={{form.title}} layout=row>{{form.title}}</label> <div> <md-radio-group sf-field-model sf-changed=form schema-validate=form ng-disabled=form.readonly id=\"{{form.key.join('.')}}\" name=\"{{form.key.join('.')}}\" sf-layout sf-messages> <md-radio-button ng-repeat=\"item in form.titleMap\" ng-value=item.value class={{::form.fieldHtmlClass}} sf-field-model=ng-class aria-label=item.name ng-class=\"{ active: item.value === $$value$$ }\"> <span ng-bind-html=item.name></span> </md-radio-button> </md-radio-group> </div> </div>";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 14 */
/***/ (function(module, exports) {

var path = '/material/section.html';
var html = "<md-content class=\"schema-form-section {{::form.htmlClass}}\" sf-layout> </md-content>";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 15 */
/***/ (function(module, exports) {

var path = '/material/select.html';
var html = "<md-input-container class=\"form-group {{::form.htmlClass}} schema-form-select\" ng-class=\"{'has-error': hasError(), 'has-success': hasSuccess(), 'has-feedback': form.feedback !== false}\" sf-messages sf-layout> <label ng-show=::showTitle()>{{::form.title}}</label> <md-select sf-field-model sf-changed=form schema-validate=form ng-disabled=form.readonly> <md-optgroup ng-repeat-start=\"(key, opt) in form.titleMap | orderBy:'group' as optGroups\" ng-if=\"opt.group && opt.group != optGroups[key-1].group\" label={{::opt.group}} aria-label={{::opt.group}}> <md-option ng-repeat=\"(key, filtered) in form.titleMap | filter: {group: opt.group} | orderBy:'name' as opts\" ng-value=::filtered.value aria-label={{::filtered.name}}>{{::filtered.name}}</md-option> </md-optgroup> <md-option ng-if=!opt.group ng-value=::opt.value ng-repeat-end>{{::opt.name}}</md-option> </md-select> </md-input-container>";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 16 */
/***/ (function(module, exports) {

var path = '/material/switch.html';
var html = "<md-input-container class=\"schema-form-switch {{::form.htmlClass}}\"> <md-switch sf-field-model sf-changed=form sf-type-parser=form.schema sf-messages schema-validate=form id={{::form.key|sfCamelKey}} aria-label={{form.title}} ng-show=::form.key ng-class=form.fieldHtmlClass ng-disabled=::form.readonly> <span ng-show=showTitle() for={{::form.key|sfCamelKey}}>{{::form.title}}</span> </md-switch> </md-input-container>";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 17 */
/***/ (function(module, exports) {

var path = '/material/tabarray.html';
var html = "<div sf-array=form ng-init=\"selected = { tab: 0 }\" class=\"clearfix schema-form-tabarray schema-form-tabarray-{{form.tabType || 'left'}} {{::form.htmlClass}}\"> <div ng-if=\"!form.tabType || form.tabType !== 'right'\" ng-class=\"{'col-xs-3': !form.tabType || form.tabType === 'left'}\"> <ul class=\"nav nav-tabs\" ng-class=\"{ 'tabs-left': !form.tabType || form.tabType === 'left'}\"> <li ng-repeat=\"item in modelArray track by $index\" ng-click=\"$event.preventDefault() || (selected.tab = $index)\" ng-class=\"{active: selected.tab === $index}\"> <a href=#>{{interp(form.title,{'$index':$index, value: item}) || $index}}</a> </li> <li ng-hide=form.readonly ng-click=\"$event.preventDefault() || (selected.tab = appendToArray().length - 1)\"> <a href=#> <i class=\"glyphicon glyphicon-plus\"></i> {{ form.add || 'Add'}} </a> </li> </ul> </div> <div ng-class=\"{'col-xs-9': !form.tabType || form.tabType === 'left' || form.tabType === 'right'}\"> <div class=\"tab-content {{::form.fieldHtmlClass}}\"> <div class=\"tab-pane clearfix\" ng-repeat=\"item in modelArray track by $index\" ng-show=\"selected.tab === $index\" ng-class=\"{active: selected.tab === $index}\"> <sf-decorator ng-init=\"arrayIndex = $index\" form=copyWithIndex($index)></sf-decorator> <button ng-hide=form.readonly ng-click=\"selected.tab = deleteFromArray($index).length - 1\" type=button class=\"btn {{ form.style.remove || 'btn-default' }} pull-right\"> <i class=\"glyphicon glyphicon-trash\"></i> {{ form.remove || 'Remove'}} </button> </div> </div> </div> <div ng-if=\"form.tabType === 'right'\" class=col-xs-3> <ul class=\"nav nav-tabs tabs-right\"> <li ng-repeat=\"item in modelArray track by $index\" ng-click=\"$event.preventDefault() || (selected.tab = $index)\" ng-class=\"{active: selected.tab === $index}\"> <a href=#>{{interp(form.title,{'$index':$index, value: item}) || $index}}</a> </li> <li ng-hide=form.readonly ng-click=\"$event.preventDefault() || appendToArray()\"> <a href=#> <i class=\"glyphicon glyphicon-plus\"></i> {{ form.add || 'Add'}} </a> </li> </ul> </div> </div>";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 18 */
/***/ (function(module, exports) {

var path = '/material/tabs.html';
var html = "<div sf-field-model class=\"schema-form-tabs {{::form.htmlClass}}\"> <md-tabs md-dynamic-height md-selected=selected md-autoselect ng-init=\"selected = 0\"></md-tabs> </div>";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 19 */
/***/ (function(module, exports) {

var path = '/material/textarea.html';
var html = "<md-input-container class=\"{{::form.htmlClass}} schema-form-textarea\" sf-messages sf-layout> <label ng-show=showTitle() for={{::form.key|sfCamelKey}}>{{::form.title}}</label> <textarea ng-class=::form.fieldHtmlClass id={{::form.key|sfCamelKey}} sf-changed=form ng-disabled=::form.readonly sf-field-model schema-validate=form name={{::form.key|sfCamelKey}}></textarea> </md-input-container>";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 20 */
/***/ (function(module, exports) {

angular.module('schemaForm').directive('sfMaterialClass', sfMaterialClassDirective);

sfMaterialClassDirective.$inject = [
  '$compile', '$timeout'
];

function sfMaterialClassDirective($compile, $timeout) {
    return {
        restrict : 'A',
        scope    : false,
        link     : function(scope, element, attrs, ngModel) {
            function reduceHelper(obj, i) {return obj[i]}

            var modelValue;
            try {
                modelValue = scope.form.key.reduce(reduceHelper, scope.model);
            } catch (e) {
                modelValue = undefined;
            }

            // Element class is not set in DOM if executed immediately.
            // I don't understand exactly why but it's probably related to other directive job.
            $timeout(function() {
                if (modelValue !== null && typeof modelValue !== 'undefined' && modelValue !== false) {
                    element.addClass(attrs.sfMaterialClass);
                }
            }, 0);
        }
    };
}


/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_actions_html__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_actions_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__material_actions_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_array_html__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_array_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__material_array_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_autocomplete_html__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_autocomplete_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__material_autocomplete_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_checkbox_html__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_checkbox_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__material_checkbox_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_submit_html__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_submit_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__material_submit_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_checkboxes_html__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_checkboxes_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__material_checkboxes_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__material_date_html__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__material_date_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__material_date_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__material_default_html__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__material_default_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__material_default_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__material_fieldset_html__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__material_fieldset_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__material_fieldset_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__material_help_html__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__material_help_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__material_help_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__material_radios_html__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__material_radios_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__material_radios_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__material_radios_inline_html__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__material_radios_inline_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__material_radios_inline_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__material_radio_buttons_html__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__material_radio_buttons_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__material_radio_buttons_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__material_section_html__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__material_section_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13__material_section_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__material_select_html__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__material_select_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14__material_select_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__material_switch_html__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__material_switch_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15__material_switch_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__material_tabs_html__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__material_tabs_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16__material_tabs_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__material_tabarray_html__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__material_tabarray_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17__material_tabarray_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__material_textarea_html__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__material_textarea_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18__material_textarea_html__);
// ngtemplate-loader embeds the html on build
























angular
  .module('schemaForm')
  .config(materialDecoratorConfig)
  .directive('sfmExternalOptions', sfmExternalOptionsDirective)
  .filter('sfCamelKey', sfCamelKeyFilter);

materialDecoratorConfig.$inject = [
  'schemaFormProvider', 'schemaFormDecoratorsProvider', 'sfBuilderProvider', 'sfPathProvider', '$injector'
];

function materialDecoratorConfig(
    schemaFormProvider, decoratorsProvider, sfBuilderProvider, sfPathProvider, $injector) {
  var base = 'decorators/material/';

  var simpleTransclusion = sfBuilderProvider.builders.simpleTransclusion;
  var ngModelOptions     = sfBuilderProvider.builders.ngModelOptions;
  var ngModel            = sfBuilderProvider.builders.ngModel;
  var sfField            = sfBuilderProvider.builders.sfField;
  var condition          = sfBuilderProvider.builders.condition;
  var array              = sfBuilderProvider.builders.array;
  var numeric            = sfBuilderProvider.builders.numeric;

  var sfLayout           = sfLayout;
  var sfMessagesNode     = sfMessagesNodeHandler();
  var sfMessages         = sfMessagesBuilder;
  var sfOptions          = sfOptionsBuilder;
  var mdAutocomplete     = mdAutocompleteBuilder;
  var mdSwitch           = mdSwitchBuilder;
  var mdDatepicker       = mdDatepickerBuilder;
  var mdTabs             = mdTabsBuilder;
  var textarea           = textareaBuilder;

  var core = [ sfField, ngModel, ngModelOptions, condition, sfLayout ];
  var defaults = core.concat(sfMessages);
  var arrays = core.concat(array);

  schemaFormProvider.defaults.string.unshift(dateDefault);

  decoratorsProvider.defineDecorator('materialDecorator', {
    actions: { template: __WEBPACK_IMPORTED_MODULE_0__material_actions_html___default.a, builder: [ sfField, simpleTransclusion, condition ] },
    array: { template: __WEBPACK_IMPORTED_MODULE_1__material_array_html___default.a, builder: arrays },
    autocomplete: { template: __WEBPACK_IMPORTED_MODULE_2__material_autocomplete_html___default.a, builder: defaults.concat(mdAutocomplete) },
    boolean: { template: __WEBPACK_IMPORTED_MODULE_3__material_checkbox_html___default.a, builder: defaults },
    button: { template: __WEBPACK_IMPORTED_MODULE_4__material_submit_html___default.a, builder: defaults },
    checkbox: { template: __WEBPACK_IMPORTED_MODULE_3__material_checkbox_html___default.a, builder: defaults },
    checkboxes: { template: __WEBPACK_IMPORTED_MODULE_5__material_checkboxes_html___default.a, builder: arrays },
    date: { template: __WEBPACK_IMPORTED_MODULE_6__material_date_html___default.a, builder: defaults.concat(mdDatepicker) },
    'default': { template: __WEBPACK_IMPORTED_MODULE_7__material_default_html___default.a, builder: defaults },
    fieldset: { template: __WEBPACK_IMPORTED_MODULE_8__material_fieldset_html___default.a, builder: [ sfField, simpleTransclusion, condition ] },
    help: { template: __WEBPACK_IMPORTED_MODULE_9__material_help_html___default.a, builder: defaults },
    number: { template: __WEBPACK_IMPORTED_MODULE_7__material_default_html___default.a, builder: defaults.concat(numeric) },
    password: { template: __WEBPACK_IMPORTED_MODULE_7__material_default_html___default.a, builder: defaults },
    radios: { template: __WEBPACK_IMPORTED_MODULE_10__material_radios_html___default.a, builder: defaults },
    'radios-inline': { template: __WEBPACK_IMPORTED_MODULE_11__material_radios_inline_html___default.a, builder: defaults },
    radiobuttons: { template: __WEBPACK_IMPORTED_MODULE_12__material_radio_buttons_html___default.a, builder: defaults },
    section: { template: __WEBPACK_IMPORTED_MODULE_13__material_section_html___default.a, builder: [ sfField, simpleTransclusion, condition, sfLayout ] },
    select: { template: __WEBPACK_IMPORTED_MODULE_14__material_select_html___default.a, builder: defaults.concat(sfOptions) },
    submit: { template: __WEBPACK_IMPORTED_MODULE_4__material_submit_html___default.a, builder: defaults },
    tabs: { template: __WEBPACK_IMPORTED_MODULE_16__material_tabs_html___default.a, builder: [ sfField, mdTabs, condition ] },
    tabarray: { template: __WEBPACK_IMPORTED_MODULE_17__material_tabarray_html___default.a, builder: arrays },
    textarea: { template: __WEBPACK_IMPORTED_MODULE_18__material_textarea_html___default.a, builder: defaults.concat(textarea) },
    'switch': { template: __WEBPACK_IMPORTED_MODULE_15__material_switch_html___default.a, builder: defaults.concat(mdSwitch) }
  });

  function sfLayout(args) {
    var layoutDiv = args.fieldFrag.querySelector('[sf-layout]');

    if (args.form.grid) {
      Object.getOwnPropertyNames(args.form.grid).forEach(function(property, idx, array) {
        layoutDiv.setAttribute(property, args.form.grid[property]);
      });
    }
  };

  function sfMessagesNodeHandler() {
    var html = '<div ng-if="ngModel.$invalid" ng-messages="ngModel.$error"><div sf-message ng-message></div></div>';
    var div = document.createElement('div');
    div.innerHTML = html;
    return div.firstChild;
  };

  function sfMessagesBuilder(args) {
    var messagesDiv = args.fieldFrag.querySelector('[sf-messages]');
    if (messagesDiv && sfMessagesNode) {
      var child = sfMessagesNode.cloneNode();
      messagesDiv.appendChild(child);
    }
  };

  function textareaBuilder(args) {
    var textareaFrag = args.fieldFrag.querySelector('textarea');
    var maxLength = args.form.maxlength || false;
    if (textareaFrag && maxLength) {
      textareaFrag.setAttribute('md-maxlength', maxLength);
    }
  };

  function mdAutocompleteBuilder(args) {
    var mdAutocompleteFrag = args.fieldFrag.querySelector('md-autocomplete');
    var minLength = args.form.minLength || 1;
    var maxLength = args.form.maxLength || false;
    var title = args.form.title || args.form.placeholder || args.form.key.slice(-1)[0];

    if (mdAutocompleteFrag) {
      if (args.form.onChange) {
        mdAutocompleteFrag.setAttribute('md-selected-item-change', 'args.form.onChange()');
        mdAutocompleteFrag.setAttribute('md-search-text-change', 'args.form.onChange(searchText)');
      }

      // mdAutocompleteFrag.setAttribute('md-items', 'item in $filter(''autocomplete'')(searchText);');
      mdAutocompleteFrag.setAttribute('md-min-length', minLength);
      if (maxLength) {
        mdAutocompleteFrag.setAttribute('md-max-length', maxLength);
      }

      if (title) {
        mdAutocompleteFrag.setAttribute('md-floating-label', title);
      }
    }
  };

  function mdSwitchBuilder(args) {
    var mdSwitchFrag = args.fieldFrag.querySelector('md-switch');
    if (args.form.schema.titleMap) {
      mdSwitchFrag.setAttribute('ng-true-value', args.form.schema.titleMap.true);
      mdSwitchFrag.setAttribute('ng-false-value', args.form.schema.titleMap.false);
    }
  };

  function sfOptionsBuilder(args) {
    var mdSelectFrag = args.fieldFrag.querySelector('md-select');
    var enumTitleMap = [];
    var i;
    var mdSelectFrag;

    args.form.selectOptions = [];
    args.form.getOptions = getOptionsHandler;

    if (args.form.schema && args.form.schema.links && (typeof args.form.schema.links) === 'object') {
      var link;
      var related = /({)([^}]*)(})/gm;
      var source = /{{([^}]*)}}/gm;
      var matched;

      for (i = 0; i < args.form.schema.links.length; i++) {
        link = args.form.schema.links[i];
        if (link.rel === 'options') {
          // TODO enable filter to allow processing results
          // args.form.optionSource = link.href.replace(related, '$1$1 model.$2 | _externalOptionUri $3$3');
          args.form.optionSource = link.href.replace(related, '$1$1 model.$2 $3$3');
        };
      };

      mdSelectFrag.setAttribute('sfm-external-options', args.form.optionSource);
    }
    else {
      args.form.selectOptions = sfOptionsProcessor(args.form);
    }
  };

  function mdDatepickerBuilder(args) {
    var mdDatepickerFrag = args.fieldFrag.querySelector('md-datepicker');
    if (mdDatepickerFrag) {
      if (args.form.onChange) {
        mdDatepickerFrag.setAttribute('ng-change', 'args.form.onChange(searchText)');
      }
      // mdDatepickerFrag.setAttribute('md-items', 'item in $filter(''autocomplete'')(searchText);');
      var minDate = args.form.minimum || false;
      var maxDate = args.form.maximum || false;
      if (minDate) {
        mdDatepickerFrag.setAttribute('md-max-date', minDate);
      }
      if (maxDate) {
        mdDatepickerFrag.setAttribute('md-max-date', maxDate);
      }
    }
  };

  function mdTabsBuilder(args) {
    if (args.form.tabs && args.form.tabs.length > 0) {
      var mdTabsFrag = args.fieldFrag.querySelector('md-tabs');

      args.form.tabs.forEach(function(tab, index) {
        var evalExpr = '(evalExpr(' + args.path + '.tabs[' + index + ']' +
                       '.condition, { model: model, "arrayIndex": $index}))';
        var mdTab = document.createElement('md-tab');
        if(!!tab.condition) {
          mdTab.setAttribute('ng-if', evalExpr);
        };
        mdTab.setAttribute('label', '{{' + args.path + '.tabs[' + index + '].title}}');
        var mdTabBody = document.createElement('md-tab-body');
        var childFrag = args.build(tab.items, args.path + '.tabs[' + index + '].items', args.state);
        mdTabBody.appendChild(childFrag);
        mdTab.appendChild(mdTabBody);
        mdTabsFrag.appendChild(mdTab);
      });
    }
  };

  /**
   * Material Datepicker
   */
  function dateDefault(name, schema, options) {
    if (schema.type === 'string' && (schema.format === 'date' || schema.format === 'date-time')) {
      var f = schemaFormProvider.stdFormObj(name, schema, options);
      f.key  = options.path;
      f.type = 'date';
      options.lookup[sfPathProvider.stringify(options.path)] = f;
      return f;
    }
  }
};

function getOptionsHandler(form, evalExpr) {
  if (form.optionData) {
    return evalExpr(form.optionData);
  };

  if (form.selectOptions) {
    return form.selectOptions;
  }

  return [];
};

function sfOptionsProcessor(data) {
  var enumTitleMap = [];

  if (data.titleMap) {
    return data.titleMap;
  }
  else if (data.enum && data.enum.length) {
    for (i = 0; i < data.enum.length; i++) {
      if (data.enum[i] && data.enum[i].length) {
        enumTitleMap.push({ name: data.enum[i], value: data.enum[i] });
      }
    }
  };

  return enumTitleMap;
};

sfmExternalOptionsDirective.$inject = [ '$http' ];

function sfmExternalOptionsDirective($http) {
  var directive = {
    link: link,
    restrict: 'A'
  };

  return directive;

  function link(scope, element, attrs) {
    attrs.$observe('sfmExternalOptions', function(dataURI) {
      $http.get(dataURI)
        .then(function(response) {
          scope.form.selectOptions = sfOptionsProcessor(response.data);
        });
    });
  }
};

/**
 * sfCamelKey Filter
 */
function sfCamelKeyFilter() {
  return function(formKey) {
    if (!formKey) { return ''; };
    var part, i, key;
    key = formKey.slice();
    for (i = 0; i < key.length; i++) {
      part = key[i].toLowerCase().split('');
      if (i && part.length) { part[0] = part[0].toUpperCase(); };
      key[i] = part.join('');
    }
    return key.join('');
  };
};

/*
  TODO add default filter for autocomplete which allows form.optionFilter or 'autocompleteFilter' to override
  Something along the following lines...
  if ($injector.has('autocompleteFilter')) {
    result = $filter('autocomplete')(input);
  }
  else
  if ($injector.has(args.form.optionFilter + 'Filter')) {
    result = $filter(args.form.optionFilter)(input);
  }
  else {
    if (args.form.optionFilter) {
      mdAutocomplete.setAttribute('md-items',
        'item in evalExpr("this[\""+form.optionFilter+"\"](\""+searchText+"\")")');
    }
  }

  .filter('autocompleteMovieTest', function() {
    function autocompleteMovieTestFilter(array, input){
      var current = input;
      // You could also call multiple filters here using:
      // current = $filter('filterName')(input)
      if(typeof current === 'string') {
        current = current.replace(' ','-').toLowerCase();
      }
      current = (!current) ? '_undefined' : current;
      return current;
    }

    return externalOptionUriFilter;
  })
*/


/***/ }),
/* 22 */
/***/ (function(module, exports) {

/**
 * It might be a bug, but currently input[type=number] does not add
 * a parser, so the model gets populated with a string. It does however stop non numbers so it
 * must have some preproccessing. Anyway, this adds parser before schema-validate hooks into it.
 * FIXME: this is still not a complete solution. Inputting a string in an input[type=number] results
 * in parsers never firing and ngModel value removed. So no validation from schema-validate either.
 */
angular.module('schemaForm').directive('sfTypeParser', function() {
  return {
    restrict: 'A',
    scope: false,
    require: 'ngModel',
    link: function(scope, element, attrs, ngModel) {
      var once = scope.$watch(attrs.sfTypeParser, function(schema) {
        if (!schema) {
          return;
        }

        var isNumber  = schema.type.indexOf('number') !== -1;
        var isInteger = schema.type.indexOf('integer') !== -1;
        var numberRE  = /^[0-9]*$/;
        // Use index of since type can be either an array with two values or a string.
        if (isNumber || isInteger) {
          // The timing here seems to work. i.e. we get in before schema-validate
          ngModel.$parsers.push(function(viewValue) {
            var value;
            if (isNumber) {
              value = parseFloat(viewValue);
            } else if (numberRE.test(viewValue)) {
              // We test the value to check that it's a valid integer, otherwise we can easily
              // get float -> integer parsing behind the scenes.
              value = parseInt(viewValue, 10);
            }
            console.log('parser', numberRE.test(viewValue), viewValue, value)
            if (value === undefined || isNaN(value)) {
              //Let the validation fail. @FIXME: it fails with "required" for some reason.
              return viewValue;
            }
            return value;
          });
        }

        once();
      });
    }
  };
});


/***/ }),
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(3);


/***/ })
/******/ ]);