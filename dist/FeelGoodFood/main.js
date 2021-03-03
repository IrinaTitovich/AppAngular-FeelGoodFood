(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Irina-Titovich-Tasks\FeelGoodFood\FeelGoodFood\src\main.ts */"zUnb");


/***/ }),

/***/ "1U8w":
/*!***********************************************************!*\
  !*** ./src/app/components/settings/settings.component.ts ***!
  \***********************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_local_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/local-data.service */ "9bf1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



function SettingsComponent_section_0_label_13_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SettingsComponent_section_0_label_13_Template_label_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r8.makeActiveRadio($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cuisine_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, cuisine_r7), "");
} }
function SettingsComponent_section_0_label_18_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SettingsComponent_section_0_label_18_Template_label_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r11.makeActiveRadio($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const diet_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, diet_r10.split("-").join(" ")));
} }
function SettingsComponent_section_0_label_23_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SettingsComponent_section_0_label_23_Template_label_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r14.makeActiveCheckbox($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const intolerance_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, intolerance_r13), " ");
} }
function SettingsComponent_section_0_label_28_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SettingsComponent_section_0_label_28_Template_label_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r18.makeActiveRadio($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 27, 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const type_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 1, type_r16.split("-").join(" ")), "");
} }
function SettingsComponent_section_0_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SettingsComponent_section_0_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.showSettings = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "<");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Filter your search");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function SettingsComponent_section_0_Template_input_keyup_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r22.valueToService($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h6", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Cuisine");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, SettingsComponent_section_0_label_13_Template, 4, 3, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h6", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Diet");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, SettingsComponent_section_0_label_18_Template, 4, 3, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h6", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Intolerance");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, SettingsComponent_section_0_label_23_Template, 4, 3, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h6", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, SettingsComponent_section_0_label_28_Template, 5, 3, "label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SettingsComponent_section_0_Template_button_click_30_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r23.localData.getRecipesBySettingsChecked(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Search");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.localData.settings.cuisine);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.localData.settings.diet);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.localData.settings.intolerance);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.localData.settings.type);
} }
function SettingsComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SettingsComponent_ng_template_1_Template_span_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r24.showSettings = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Settings");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class SettingsComponent {
    constructor(localData) {
        this.localData = localData;
        this.showSettings = true;
    }
    ngOnInit() {
    }
    skip(event) {
        let type = event.target.parentNode.firstChild.textContent.toLowerCase();
        console.log(type);
        if (type === 'intolerance') {
            this.localData.settingsChecked.intolerance = new Set;
        }
        else {
            this.localData.settingsChecked[type] = [];
        }
        console.log(this.localData.settingsChecked);
    }
    makeActiveRadio(event) {
        let radioBtns = Array.from(event.target.parentNode.children);
        let label = event.target;
        let input = event.target.children[0];
        if (input.checked === true) {
            input.checked = false;
            label.style.backgroundColor = 'lavender';
            let key = event.target.parentNode.parentNode.firstChild.textContent.toLowerCase();
            this.localData.settingsChecked[key] = [];
        }
        else {
            radioBtns.forEach(i => {
                let input = i.children[0];
                input.checked = false;
                i.style.backgroundColor = 'lavender';
            });
            input.checked = !input.checked;
            label.style.backgroundColor = 'lightcoral';
            let filterName = event.target.htmlFor;
            let checkedParameter = this.transformParameter(label);
            this.addRadioBtnParameter(filterName, checkedParameter);
        }
    }
    valueToService(event) {
        this.localData.settingsChecked.autocomplete = event.target.value;
    }
    transformParameter(label) {
        return label.textContent.trim().toLowerCase().split(' ').join('-');
    }
    addRadioBtnParameter(key, value) {
        this.localData.settingsChecked[key][0] = value;
    }
    makeActiveCheckbox(event) {
        let label = event.target;
        let input = event.target.children[0];
        input.checked = !input.checked;
        let filterName = event.target.htmlFor;
        let checkedParameter = this.transformParameter(label);
        if (input.checked) {
            label.style.backgroundColor = 'lightcoral';
            this.localData.settingsChecked[filterName].add(checkedParameter);
        }
        else {
            label.style.backgroundColor = 'lavender';
            this.localData.settingsChecked[filterName].delete(checkedParameter);
        }
        console.log(this.localData.settingsChecked);
    }
}
SettingsComponent.ɵfac = function SettingsComponent_Factory(t) { return new (t || SettingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_local_data_service__WEBPACK_IMPORTED_MODULE_1__["LocalDataService"])); };
SettingsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SettingsComponent, selectors: [["app-settings"]], decls: 3, vars: 2, consts: [["class", "settings", 4, "ngIf", "ngIfElse"], ["settingsHidden", ""], [1, "settings"], [1, "settings__header"], ["type", "button", 1, "btn", "settings__btn_arrow", 3, "click"], [1, "settings__title"], [1, "settings__filter"], [1, "settings__search"], ["name", "search", "placeholder", "something tasty...", 1, "settings__input", 3, "keyup"], [1, "settings__filter-name"], [1, "settings__cuisine", "inline-filter"], ["class", "inline-filter__items", "for", "cuisine", 3, "click", 4, "ngFor", "ngForOf"], [1, "settings__diet", "inline-filter"], ["class", "inline-filter__items", "for", "diet", 3, "click", 4, "ngFor", "ngForOf"], [1, "settings__intolerance", "inline-filter"], ["class", "inline-filter__items", "for", "intolerance", 3, "click", 4, "ngFor", "ngForOf"], [1, "settings__type", "inline-filter"], ["class", "inline-filter__items", "for", "type", 3, "click", 4, "ngFor", "ngForOf"], [1, "settings__btns"], [1, "btn", "settings__btn", 3, "click"], ["for", "cuisine", 1, "inline-filter__items", 3, "click"], ["type", "radio", "name", "cuisine", 1, "radio-btn"], ["for", "diet", 1, "inline-filter__items", 3, "click"], ["type", "radio", "name", "diet", 1, "radio-btn"], ["for", "intolerance", 1, "inline-filter__items", 3, "click"], ["type", "checkbox", "name", "intolerance", "id", "", 1, "checkbox-btn"], ["for", "type", 1, "inline-filter__items", 3, "click"], ["type", "radio", "name", "type", 1, "radio-btn"], ["inputType", ""], [1, "settings__hidden"], [1, "settings__hidden-title", 3, "click"]], template: function SettingsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SettingsComponent_section_0_Template, 32, 4, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SettingsComponent_ng_template_1_Template, 3, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showSettings === true)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["UpperCasePipe"]], styles: [".settings[_ngcontent-%COMP%] {\n  color: #275831;\n  width: 100%;\n  min-height: 90vh;\n  background-color: lavender;\n  box-shadow: 1px 1px 5px #275831;\n}\n.settings__search[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.settings__input[_ngcontent-%COMP%] {\n  width: 100%;\n  border: none;\n  box-shadow: 1px 1px 5px #275831;\n  background-color: lavender;\n  padding: 0.5em 1em;\n  height: 30px;\n  text-transform: uppercase;\n  font-size: 1em;\n  color: #275831;\n}\n.settings__input[_ngcontent-%COMP%]:focus {\n  background-color: #fafafa;\n}\n.settings__header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n  flex-direction: row-reverse;\n}\n.settings__filter[_ngcontent-%COMP%] {\n  margin: 0.2rem;\n  padding: 0.8em;\n  background-color: #fafafa;\n}\n.settings__title[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  padding: 0.2em;\n  text-align: center;\n}\n.settings__filter-name[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 1.1rem;\n}\n.settings__btns[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n}\n.settings__btn[_ngcontent-%COMP%] {\n  padding: 0.5em 0.8em;\n  border-radius: 1px;\n}\n.settings__btn_skip[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 0.2em;\n  box-shadow: none;\n  padding: 0.1em 0.3em;\n  opacity: 0.5;\n  font-size: 0.9em;\n  border-radius: 1px;\n  border: 1px solid #c9c9c9;\n}\n.settings__btn_arrow[_ngcontent-%COMP%] {\n  margin: 0.1em 0.1em;\n  padding: 0.2em 0.5em;\n}\n.settings__hidden[_ngcontent-%COMP%] {\n  left: 0;\n  width: 30px;\n  height: 90vh;\n  display: flex;\n  justify-content: flex-end;\n  position: absolute;\n  background-color: lavender;\n  box-shadow: 1px 1px 5px #275831;\n  cursor: pointer;\n}\n.settings__hidden-title[_ngcontent-%COMP%] {\n  writing-mode: vertical-rl;\n  color: #275831;\n  font-size: 1.5em;\n  padding-top: 1em;\n}\n.inline-filter[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  align-content: center;\n}\n.inline-filter__items[_ngcontent-%COMP%] {\n  font-size: 1em;\n  margin: 0.2em 0.2em;\n  padding: 0.1rem 0.3rem;\n  border: 1px solid lavender;\n  box-shadow: 1px 1px 1px lavender;\n  background-color: lavender;\n  cursor: pointer;\n}\n.active[_ngcontent-%COMP%] {\n  background-color: lightcoral;\n}\n.inline-filter__items[_ngcontent-%COMP%]    > .checkbox-btn[_ngcontent-%COMP%]:checked {\n  background-color: lightcoral;\n}\n.radio-btn[_ngcontent-%COMP%], .checkbox-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  left: -1000px;\n  top: -1000px;\n  opacity: 0;\n  width: 0;\n  height: 0;\n  z-index: -1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzZXR0aW5ncy5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHZhcmlhYmxlc1xcdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxjQ0RhO0VERWIsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7RUFDQSwrQkFBQTtBQUFKO0FBQ0k7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUFDUjtBQUNJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSwrQkFBQTtFQUNBLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsY0NuQlM7QURvQmpCO0FBQ0k7RUFDSSx5QkFBQTtBQUNSO0FBQ0k7RUFDSSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSwyQkFBQTtBQUNSO0FBQ0k7RUFDSSxjQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0FBQ1I7QUFDSTtFQUNJLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBQ1I7QUFDSTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7QUFDUjtBQUNJO0VBQ0ksYUFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7QUFDUjtBQUNJO0VBQ0ksb0JBQUE7RUFDQSxrQkFBQTtBQUNSO0FBQ0k7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQUNSO0FBQ0k7RUFDSSxtQkFBQTtFQUNBLG9CQUFBO0FBQ1I7QUFDSTtFQUNJLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSwrQkFBQTtFQUNBLGVBQUE7QUFDUjtBQUNJO0VBQ0kseUJBQUE7RUFDQSxjQy9FUztFRGdGVCxnQkFBQTtFQUNBLGdCQUFBO0FBQ1I7QUFHQTtFQUNJLGFBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQUFKO0FBQ0k7RUFDSSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLDBCQUFBO0VBQ0EsZ0NBQUE7RUFDQSwwQkFBQTtFQUNBLGVBQUE7QUFDUjtBQUdBO0VBQ0ksNEJBQUE7QUFBSjtBQUdBO0VBQ0ksNEJBQUE7QUFBSjtBQUdBOztFQUVJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FBQUoiLCJmaWxlIjoic2V0dGluZ3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vdmFyaWFibGVzL3ZhcmlhYmxlcy5zY3NzXCI7XHJcbi5zZXR0aW5ncyB7XHJcbiAgICBjb2xvcjogJG1haW4tZGFyay1jb2xvcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWluLWhlaWdodDogOTB2aDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGxhdmVuZGVyO1xyXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCA1cHggJG1haW4tZGFyay1jb2xvcjtcclxuICAgICZfX3NlYXJjaCB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgJl9faW5wdXQge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICBib3gtc2hhZG93OiAxcHggMXB4IDVweCAkbWFpbi1kYXJrLWNvbG9yO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGxhdmVuZGVyO1xyXG4gICAgICAgIHBhZGRpbmc6IDAuNWVtIDFlbTtcclxuICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICBmb250LXNpemU6IDEuMGVtO1xyXG4gICAgICAgIGNvbG9yOiAkbWFpbi1kYXJrLWNvbG9yO1xyXG4gICAgfVxyXG4gICAgJl9faW5wdXQ6Zm9jdXMge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XHJcbiAgICB9XHJcbiAgICAmX19oZWFkZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xyXG4gICAgfVxyXG4gICAgJl9fZmlsdGVyIHtcclxuICAgICAgICBtYXJnaW46IDAuMnJlbTtcclxuICAgICAgICBwYWRkaW5nOiAwLjhlbTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xyXG4gICAgfVxyXG4gICAgJl9fdGl0bGUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG4gICAgICAgIHBhZGRpbmc6IDAuMmVtO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgICZfX2ZpbHRlci1uYW1lIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgICB9XHJcbiAgICAmX19idG5zIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAmX19idG4ge1xyXG4gICAgICAgIHBhZGRpbmc6IC41ZW0gLjhlbTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxcHg7XHJcbiAgICB9XHJcbiAgICAmX19idG5fc2tpcCB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMC4yZW07XHJcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgICBwYWRkaW5nOiAwLjFlbSAwLjNlbTtcclxuICAgICAgICBvcGFjaXR5OiAwLjU7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjllbTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxcHg7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2M5YzljOTtcclxuICAgIH1cclxuICAgICZfX2J0bl9hcnJvdyB7XHJcbiAgICAgICAgbWFyZ2luOiAuMWVtIC4xZW07XHJcbiAgICAgICAgcGFkZGluZzogLjJlbSAuNWVtO1xyXG4gICAgfVxyXG4gICAgJl9faGlkZGVuIHtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgICAgIGhlaWdodDogOTB2aDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGxhdmVuZGVyO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDFweCAxcHggNXB4ICRtYWluLWRhcmstY29sb3I7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG4gICAgJl9faGlkZGVuLXRpdGxlIHtcclxuICAgICAgICB3cml0aW5nLW1vZGU6IHZlcnRpY2FsLXJsO1xyXG4gICAgICAgIGNvbG9yOiAkbWFpbi1kYXJrLWNvbG9yO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDFlbTtcclxuICAgIH1cclxufVxyXG5cclxuLmlubGluZS1maWx0ZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAmX19pdGVtcyB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxZW07XHJcbiAgICAgICAgbWFyZ2luOiAwLjJlbSAwLjJlbTtcclxuICAgICAgICBwYWRkaW5nOiAwLjFyZW0gMC4zcmVtO1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGxhdmVuZGVyO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDFweCAxcHggMXB4IGxhdmVuZGVyO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGxhdmVuZGVyO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxufVxyXG5cclxuLmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGNvcmFsO1xyXG59XHJcblxyXG4uaW5saW5lLWZpbHRlcl9faXRlbXM+LmNoZWNrYm94LWJ0bjpjaGVja2VkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Y29yYWw7XHJcbn1cclxuXHJcbi5yYWRpby1idG4sXHJcbi5jaGVja2JveC1idG4ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogLTEwMDBweDtcclxuICAgIHRvcDogLTEwMDBweDtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB3aWR0aDogMDtcclxuICAgIGhlaWdodDogMDtcclxuICAgIHotaW5kZXg6IC0xO1xyXG59XHJcblxyXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOjEyMDBweCkge1xyXG4gICAgLnNldHRpbmdzIHt9XHJcbn0iLCIkbWFpbi1saWdodC1jb2xvcjojZmFmYWZhO1xyXG4kbWFpbi1kYXJrLWNvbG9yOiMyNzU4MzE7XHJcbiRteS1zZWMtY29sb3I6IzJCNDE2MjsiXX0= */"] });


/***/ }),

/***/ "9bf1":
/*!************************************************!*\
  !*** ./src/app/services/local-data.service.ts ***!
  \************************************************/
/*! exports provided: LocalDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalDataService", function() { return LocalDataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _get_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get-data.service */ "EQNs");


class LocalDataService {
    constructor(getData) {
        this.getData = getData;
        this.shoppingList = {
            ingredients: new Set,
            deletedIngredients: new Set,
            url: 'https://api.spoonacular.com/mealplanner/',
        };
        this.userGet = {
            username: '',
            hash: ''
        };
        this.users = {
            users: [
                { username: 'api-72265-2642840a-a2d7-4ecb-9ea9-19f28f30f870',
                    hash: 'cca187b0b1ff53e91759ea0b37d89ef9ad737b9d',
                    email: '1@3',
                    password: '333333' },
                { email: "2@2.com",
                    hash: "27442897caec22d566ef7cfba8666e03ae9936a5",
                    password: "222222",
                    username: "api-72265-509838a8-1c3d-40fe-90f5-9d5c19931b7b" },
                { username: 'api-72265-648ca44f-c84d-4bd6-a6ec-289a79d1d7f9',
                    hash: '1d2ad9bd958926be469a9d9849e10c8e2ecb9bb1',
                    email: '1@1',
                    password: '111111' }
            ],
            email: '',
            username: '',
            hash: '',
            password: '',
            userGet: this.userGet,
            urlConnectUser: 'https://api.spoonacular.com/users/connect',
            isUserConnected: false,
        };
        this.numberOfRecipes = 6;
        this.fullRecipes = {
            recipes: [],
            url: 'https://api.spoonacular.com/recipes/',
        };
        this.complexSearch = {
            recipes: [],
            completed: false,
            url: 'https://api.spoonacular.com/recipes/complexSearch?',
        };
        this.randomRecipes = {
            recipes: [],
            completed: false,
            url: 'https://api.spoonacular.com/recipes/random?',
        };
        this.settings = {
            type: [
                'appetizer',
                'salad',
                'main-course',
                'side-dish',
                'dessert',
                'beverage', 'sauce', 'bread', 'breakfast', 'soup'
            ],
            cuisine: ['spanish', 'mexican', 'chinese', 'european', 'french', 'italian', 'mediterranean', 'thai'],
            diet: ['gluten-free', 'vegetarian', 'lacto-vegetarian', 'vegan'],
            intolerance: ['dairy', 'egg', 'gluten', 'grain', 'peanut', 'seafood', 'seasame', 'soy', 'wheat']
        };
        this.settingsChecked = {
            type: [],
            cuisine: [],
            diet: [],
            intolerance: new Set
        };
        this.error = {
            fullRecipe: ''
        };
    }
    saveShoppingList() {
        if (this.users.isUserConnected) {
            console.log(this.users.isUserConnected);
            this.shoppingList.deletedIngredients.forEach((deletedItem) => {
                this.shoppingList.ingredients.forEach((ingredientsItem) => {
                    if (deletedItem === ingredientsItem) {
                        this.shoppingList.ingredients.delete(ingredientsItem);
                    }
                    else {
                        this.users.connectedUser.shoppingList.add(ingredientsItem);
                    }
                });
            });
            this.users.connectedUser.shoppingList = new Set;
            console.log(this.shoppingList);
            this.shoppingList.ingredients.forEach((ingredientsItem) => {
                this.users.connectedUser.shoppingList.add(ingredientsItem);
            });
            console.log(this.users);
        }
    }
    logOff() {
        this.users.isUserConnected = false;
        delete this.users.connectedUser;
        console.log(this.users);
        this.shoppingList.ingredients.clear();
        this.shoppingList.deletedIngredients.clear();
    }
    generateShoppingList(username, hash) {
        console.log(username);
        let url = this.shoppingList.url + username + '/' + 'shopping-list' + '/' + '2021-02-25' + '/' + '2021-10-25' + '?hash=' + hash + '?apiKey=' + 'a3c00363bf63449db8ecd2115fdcbf15';
        console.log(url);
        this.getData.generateShoppingList(url).subscribe((response) => {
            console.log(response);
        });
    }
    isPassword(inputPassword, index) {
        let usersPassword = this.users.users[index].password;
        console.log(usersPassword);
        console.log(inputPassword);
        if (usersPassword === inputPassword) {
            return true;
        }
        else {
            return false;
        }
    }
    getUserIndex(email) {
        let index;
        for (let i = 0; i < this.users.users.length; i++) {
            if (this.users.users[i].email === email) {
                return i;
            }
        }
        return -1;
    }
    searchRecipeByInput(event) {
        console.log(event.target.parentNode.firstChild.value);
        let response = event.target.parentNode.firstChild.value;
        let url;
        console.log(this.complexSearch);
        if (response) {
            this.settingsChecked.autocomplete = response,
                url = `https://api.spoonacular.com/recipes/autocomplete?number=${this.numberOfRecipes}&query=${response}`;
            this.getData.getRecipe(url).subscribe((response) => {
                this.complexSearch.recipes = response;
                this.complexSearch.recipes.map((i) => {
                    i.image = 'https://spoonacular.com/recipeImages/' + i.id + '-' + '312x231.' + i.imageType;
                    console.log(this.complexSearch);
                });
            });
        }
    }
    deleteIngredient(event) {
        let crossedElement = event.target.parentNode.parentNode.firstChild.lastChild;
        this.shoppingList.ingredients.delete(crossedElement.textContent);
        this.shoppingList.deletedIngredients.add(crossedElement.textContent);
        console.log(this.shoppingList);
    }
    addIngredientToDeleted(event) {
        let crossedElement = event.target.parentNode.parentNode.firstChild.lastChild;
        console.log(crossedElement);
        crossedElement.style.textDecoration = 'line-through';
        this.shoppingList.deletedIngredients.add(crossedElement.textContent);
        console.log(this.shoppingList);
    }
    addToTheShoppingList(ingredients) {
        ingredients.forEach(i => {
            this.shoppingList.ingredients.add(i);
        });
        console.log(this.shoppingList);
    }
    searchRecipeByTitle(title) {
        let id;
        this.complexSearch.recipes.forEach(i => {
            if (i.title === title) {
                id = i.id;
            }
        });
        return id;
    }
    updateUsers() {
        let newUser = {
            email: '',
            username: '',
            hash: '',
            password: '',
        };
        console.log(newUser);
        newUser.email = this.users.email;
        newUser.hash = this.users.hash;
        newUser.password = this.users.password;
        newUser.username = this.users.username;
        this.users.users.push(newUser);
        this.clearUser();
        console.log(this.users);
    }
    clearUser() {
        this.users.email = this.users.hash = this.users.password = this.users.username = '';
    }
    searchById(id) {
        delete this.fullRecipes.currentRecipe;
        let fullRecipe;
        let indexOfRecipeInArray = this.searchByIdInLocalData(id);
        console.log(indexOfRecipeInArray);
        if (indexOfRecipeInArray) {
            fullRecipe = this.fullRecipes[indexOfRecipeInArray];
        }
        else {
            fullRecipe = this.getFullRecipeById(id);
        }
        this.fullRecipes.currentRecipe = fullRecipe;
        return fullRecipe;
    }
    searchByIdInLocalData(id) {
        let indexOfRecipeInArray;
        this.fullRecipes.recipes.forEach((item, index) => {
            if (item.id === id) {
                indexOfRecipeInArray = index;
            }
        });
        return indexOfRecipeInArray;
    }
    getFullRecipeById(id) {
        let fullRecipe;
        let url = this.fullRecipes.url;
        url = url + id + '/information';
        this.getData.getRecipe(url).subscribe(response => {
            this.fullRecipes.recipes.push(response);
            fullRecipe = response;
        }, error => {
            this.error.fullRecipe = error.message;
        });
        return fullRecipe;
    }
}
LocalDataService.ɵfac = function LocalDataService_Factory(t) { return new (t || LocalDataService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_get_data_service__WEBPACK_IMPORTED_MODULE_1__["GetDataService"])); };
LocalDataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LocalDataService, factory: LocalDataService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "BuFo":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_local_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/local-data.service */ "9bf1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _small_card_random_small_card_random_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../small-card-random/small-card-random.component */ "HFlu");




const _c0 = function () { return ["/recipes"]; };
class HomeComponent {
    constructor(localData) {
        this.localData = localData;
    }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_local_data_service__WEBPACK_IMPORTED_MODULE_1__["LocalDataService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 6, vars: 2, consts: [[1, "home"], [1, "container", "home__container"], [1, "btn", "home__btn", 3, "routerLink"], [1, "home__card"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Let's find a recipe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-small-card-random");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _small_card_random_small_card_random_component__WEBPACK_IMPORTED_MODULE_3__["SmallCardRandomComponent"]], styles: [".home[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 90vh;\n  background-image: url('Background.jpg');\n  background-position: center;\n  background-size: cover;\n}\n.home__container[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n.home__card[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 1rem;\n  right: 1rem;\n  background-color: white;\n}\n.home__btn[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n}\n@media (max-width: 768px) {\n  .home__card[_ngcontent-%COMP%] {\n    top: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHVDQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtBQUFKO0FBQ0k7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBQ1I7QUFDSTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFHQSx1QkFBQTtBQURSO0FBR0k7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsZ0NBQUE7QUFEUjtBQUtBO0VBQ0k7SUFDSSxNQUFBO0VBRk47QUFDRiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uL3ZhcmlhYmxlcy92YXJpYWJsZXMuc2Nzc1wiO1xyXG4uaG9tZSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogOTB2aDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi9hc3NldHMvaW1nL0JhY2tncm91bmQuanBnKTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAmX19jb250YWluZXIge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB9XHJcbiAgICAmX19jYXJkIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAxcmVtO1xyXG4gICAgICAgIHJpZ2h0OiAxcmVtO1xyXG4gICAgICAgIC8vIHdpZHRoOiA1MHB4O1xyXG4gICAgICAgIC8vIGhlaWdodDogNTBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxuICAgICZfX2J0biB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6NzY4cHgpIHtcclxuICAgIC5ob21lX19jYXJkIHtcclxuICAgICAgICB0b3A6IDBcclxuICAgIH1cclxufSJdfQ== */"] });


/***/ }),

/***/ "EQNs":
/*!**********************************************!*\
  !*** ./src/app/services/get-data.service.ts ***!
  \**********************************************/
/*! exports provided: GetDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetDataService", function() { return GetDataService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



class GetDataService {
    constructor(http) {
        this.http = http;
        this.api = [
            'faab79fee7b44f0d94a5f592d35b5378',
            'c52d9ad4b23e41fb94855f50023d0907',
            '60815e9bf5834ea5af934c93af3836c7',
            '50f605507c174c8aa4e2bcd7f7172dcb',
            'a3c00363bf63449db8ecd2115fdcbf15'
        ];
    }
    getRecipe(resp) {
        return this.http.get(resp, { params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]().set('apiKey', 'c52d9ad4b23e41fb94855f50023d0907') });
    }
    connectUser(url, req) {
        return this.http.post(url, req, { params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]().set('apiKey', 'c52d9ad4b23e41fb94855f50023d0907') });
    }
    generateShoppingList(url) {
        return this.http.post(url, { params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]().set('apiKey', 'a3c00363bf63449db8ecd2115fdcbf15') });
    }
}
GetDataService.ɵfac = function GetDataService_Factory(t) { return new (t || GetDataService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
GetDataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: GetDataService, factory: GetDataService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "HFlu":
/*!*****************************************************************************!*\
  !*** ./src/app/components/small-card-random/small-card-random.component.ts ***!
  \*****************************************************************************/
/*! exports provided: SmallCardRandomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SmallCardRandomComponent", function() { return SmallCardRandomComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _services_get_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/get-data.service */ "EQNs");
/* harmony import */ var _services_local_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/local-data.service */ "9bf1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");






const _c0 = function (a1) { return ["/find-recipe", a1]; };
function SmallCardRandomComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SmallCardRandomComponent_div_0_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const recipe_r4 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r5.localData.searchById(recipe_r4.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SmallCardRandomComponent_div_0_div_1_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r7.localData.getRandomRecipe(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Refresh");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const recipe_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, (recipe_r4.id + "-" + recipe_r4.title).split(" ").join("-")));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](recipe_r4.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", recipe_r4.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function SmallCardRandomComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SmallCardRandomComponent_div_0_div_1_Template, 8, 5, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.localData.randomRecipes.recipes);
} }
function SmallCardRandomComponent_ng_template_1_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r8.error);
} }
function SmallCardRandomComponent_ng_template_1_img_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 13);
} }
function SmallCardRandomComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SmallCardRandomComponent_ng_template_1_div_4_Template, 2, 1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SmallCardRandomComponent_ng_template_1_img_5_Template, 1, 0, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SmallCardRandomComponent_ng_template_1_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.localData.getRandomRecipe(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Refresh");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.error);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.error);
} }
class SmallCardRandomComponent {
    constructor(http, getData, localData) {
        this.http = http;
        this.getData = getData;
        this.localData = localData;
    }
    ngOnInit() {
        this.getRandomRecipe();
    }
    getRandomRecipe() {
        this.localData.randomRecipes.completed = true;
        this.getData.getRecipe(this.localData.randomRecipes.url).subscribe(response => {
            this.localData.randomRecipes.recipes = response.recipes;
            this.localData.randomRecipes.completed = false;
        }, error => {
            console.log(error);
            this.error = error.message;
        });
    }
}
SmallCardRandomComponent.ɵfac = function SmallCardRandomComponent_Factory(t) { return new (t || SmallCardRandomComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_get_data_service__WEBPACK_IMPORTED_MODULE_2__["GetDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_local_data_service__WEBPACK_IMPORTED_MODULE_3__["LocalDataService"])); };
SmallCardRandomComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SmallCardRandomComponent, selectors: [["app-small-card-random"]], decls: 3, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["loadingBlock", ""], ["class", "small-card", 3, "routerLink", "click", 4, "ngFor", "ngForOf"], [1, "small-card", 3, "routerLink", "click"], [1, "small-card__header"], [1, "small-card__title"], [1, "small-card__image-container"], ["alt", "", 1, "small-card__image", 3, "src"], [1, "small-card__button", 3, "click"], [1, "small-card"], ["class", "error", 4, "ngIf"], ["class", " small-card__block ", 4, "ngIf"], [1, "error"], [1, "small-card__block"]], template: function SmallCardRandomComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SmallCardRandomComponent_div_0_Template, 2, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SmallCardRandomComponent_ng_template_1_Template, 8, 2, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.localData.randomRecipes.completed)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"]], styles: [".small-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 300px;\n  height: 200px;\n  max-width: 300px;\n  box-shadow: 1px 1px 5px #000;\n}\n.small-card__image[_ngcontent-%COMP%] {\n  filter: brightness(120%);\n  filter: saturate(110%);\n  filter: contrast(1.1);\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n}\n.small-card__header[_ngcontent-%COMP%] {\n  min-height: 2em;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 1.5em;\n  color: #fff;\n  background-color: #275831;\n}\n.small-card__button[_ngcontent-%COMP%] {\n  border: none;\n  min-height: 2em;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 1em;\n  color: #fff;\n  background-color: #275831;\n  transition: 0.2s;\n}\n.small-card__button[_ngcontent-%COMP%]:hover {\n  background-color: #fafafa;\n  color: #275831;\n  cursor: pointer;\n}\n.small-card__title[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.small-card__block[_ngcontent-%COMP%] {\n  background-color: grey;\n  min-width: 100%;\n  min-height: 200px;\n}\n.small-card__image-container[_ngcontent-%COMP%] {\n  display: flex;\n  position: relative;\n}\n.small-card__mini-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzbWFsbC1jYXJkLXJhbmRvbS5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHZhcmlhYmxlc1xcdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7QUFBSjtBQUNJO0VBQ0ksd0JBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQUNSO0FBQ0k7RUFDSSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkN2QlM7QUR3QmpCO0FBQ0k7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSx5QkNqQ1M7RURrQ1QsZ0JBQUE7QUFDUjtBQUNJO0VBQ0kseUJBQUE7RUFDQSxjQ3RDUztFRHVDVCxlQUFBO0FBQ1I7QUFDSTtFQUNJLGtCQUFBO0FBQ1I7QUFDSTtFQUNJLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBQ1I7QUFDSTtFQUNJLGFBQUE7RUFDQSxrQkFBQTtBQUNSO0FBQ0k7RUFDSSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0FBQ1IiLCJmaWxlIjoic21hbGwtY2FyZC1yYW5kb20uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vdmFyaWFibGVzL3ZhcmlhYmxlcy5zY3NzXCI7XHJcbi5zbWFsbC1jYXJkIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIG1heC13aWR0aDogMzAwcHg7XHJcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDVweCAjMDAwO1xyXG4gICAgJl9faW1hZ2Uge1xyXG4gICAgICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxMjAlKTtcclxuICAgICAgICBmaWx0ZXI6IHNhdHVyYXRlKDExMCUpO1xyXG4gICAgICAgIGZpbHRlcjogY29udHJhc3QoMS4xKTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICB9XHJcbiAgICAmX19oZWFkZXIge1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDJlbTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWFpbi1kYXJrLWNvbG9yO1xyXG4gICAgfVxyXG4gICAgJl9fYnV0dG9uIHtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgbWluLWhlaWdodDogMmVtO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBmb250LXNpemU6IDEuMGVtO1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRtYWluLWRhcmstY29sb3I7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogMC4ycztcclxuICAgIH1cclxuICAgICZfX2J1dHRvbjpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcclxuICAgICAgICBjb2xvcjogJG1haW4tZGFyay1jb2xvcjtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbiAgICAmX190aXRsZSB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgJl9fYmxvY2sge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XHJcbiAgICAgICAgbWluLXdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDIwMHB4O1xyXG4gICAgfVxyXG4gICAgJl9faW1hZ2UtY29udGFpbmVyIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIH1cclxuICAgICZfX21pbmktYnRuIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICBib3R0b206IDA7XHJcbiAgICB9XHJcbn0iLCIkbWFpbi1saWdodC1jb2xvcjojZmFmYWZhO1xyXG4kbWFpbi1kYXJrLWNvbG9yOiMyNzU4MzE7XHJcbiRteS1zZWMtY29sb3I6IzJCNDE2MjsiXX0= */"] });


/***/ }),

/***/ "HYgX":
/*!***************************************************************************!*\
  !*** ./src/app/components/favorite-recipes/favorite-recipes.component.ts ***!
  \***************************************************************************/
/*! exports provided: FavoriteRecipesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoriteRecipesComponent", function() { return FavoriteRecipesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_local_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/local-data.service */ "9bf1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _mini_card_mini_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../mini-card/mini-card.component */ "xKlC");





const _c0 = function () { return ["/recipes"]; };
function FavoriteRecipesComponent_div_1_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " There is no favorite recipes. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Let`s find some ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
} }
function FavoriteRecipesComponent_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FavoriteRecipesComponent_div_1_div_1_div_1_Template, 5, 2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.localData.users.connectedUser.favoriteRecipes.size === 0);
} }
const _c1 = function (a1) { return ["/find-recipe", a1]; };
function FavoriteRecipesComponent_div_1_div_2_app_mini_card_1_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-mini-card", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FavoriteRecipesComponent_div_1_div_2_app_mini_card_1_Template_app_mini_card_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const recipe_r7 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r8.localData.searchById(recipe_r7.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const recipe_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", recipe_r7.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("image", recipe_r7.image);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c1, (recipe_r7.id + "- " + recipe_r7.title).split(" ").join("- ")));
} }
function FavoriteRecipesComponent_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FavoriteRecipesComponent_div_1_div_2_app_mini_card_1_Template, 1, 5, "app-mini-card", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.localData.users.connectedUser.favoriteRecipes);
} }
function FavoriteRecipesComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FavoriteRecipesComponent_div_1_div_1_Template, 2, 1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FavoriteRecipesComponent_div_1_div_2_Template, 2, 1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.localData.users.connectedUser.hasOwnProperty("favoriteRecipes"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.localData.users.connectedUser.favoriteRecipes.size > 0);
} }
const _c2 = function () { return ["/contacts"]; };
function FavoriteRecipesComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Please, ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Log in");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c2));
} }
class FavoriteRecipesComponent {
    constructor(localData) {
        this.localData = localData;
    }
    ngOnInit() {
    }
}
FavoriteRecipesComponent.ɵfac = function FavoriteRecipesComponent_Factory(t) { return new (t || FavoriteRecipesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_local_data_service__WEBPACK_IMPORTED_MODULE_1__["LocalDataService"])); };
FavoriteRecipesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FavoriteRecipesComponent, selectors: [["app-favorite-recipes"]], decls: 4, vars: 2, consts: [[1, "favorite-recipes"], ["class", " container favorite-recipes__space", 4, "ngIf", "ngIfElse"], ["logIn", ""], [1, "container", "favorite-recipes__space"], ["class", "favorite-recipes__no-recipes", 4, "ngIf"], ["class", "favorite-recipes__container", 4, "ngIf"], [1, "favorite-recipes__no-recipes"], [4, "ngIf"], [1, "btn", "favorite-recipes__btn", 3, "routerLink"], [1, "favorite-recipes__container"], ["class", "favorite-recipes__recipe ", 3, "title", "image", "routerLink", "click", 4, "ngFor", "ngForOf"], [1, "favorite-recipes__recipe", 3, "title", "image", "routerLink", "click"], [1, "favorite-recipes__log-in"]], template: function FavoriteRecipesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FavoriteRecipesComponent_div_1_Template, 3, 2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FavoriteRecipesComponent_ng_template_2_Template, 5, 2, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.localData.users.isUserConnected)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _mini_card_mini_card_component__WEBPACK_IMPORTED_MODULE_4__["MiniCardComponent"]], styles: [".favorite-recipes[_ngcontent-%COMP%] {\n  height: 90vh;\n  background-image: url('favorite-recipes.jpg');\n  background-position: center;\n  background-size: cover;\n}\n.favorite-recipes__no-recipes[_ngcontent-%COMP%] {\n  padding-right: 11em;\n}\n.favorite-recipes__space[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  justify-content: space-around;\n}\n.favorite-recipes__container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  background-color: rgba(250, 250, 250, 0.7);\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-around;\n}\n.favorite-recipes__recipe[_ngcontent-%COMP%] {\n  width: 27%;\n  margin: 1em 0;\n}\n.favorite-recipes__btn[_ngcontent-%COMP%] {\n  font-family: inherit;\n  padding: 0.3rem 1rem;\n  border-radius: 1px;\n  border: none;\n  outline: none;\n  text-transform: uppercase;\n  transition: 0.2s;\n}\n.favorite-recipes__log-in[_ngcontent-%COMP%] {\n  width: 85vw;\n  height: 90vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxmYXZvcml0ZS1yZWNpcGVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksWUFBQTtFQUNBLDZDQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtBQUFKO0FBQ0k7RUFDSSxtQkFBQTtBQUNSO0FBQ0k7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSw2QkFBQTtBQUNSO0FBQ0k7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDBDQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSw2QkFBQTtBQUNSO0FBQ0k7RUFDSSxVQUFBO0VBQ0EsYUFBQTtBQUNSO0FBQ0k7RUFDSSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7QUFDUjtBQUNJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUNSIiwiZmlsZSI6ImZhdm9yaXRlLXJlY2lwZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vdmFyaWFibGVzL3ZhcmlhYmxlcy5zY3NzXCI7XHJcbi5mYXZvcml0ZS1yZWNpcGVzIHtcclxuICAgIGhlaWdodDogOTB2aDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi9hc3NldHMvaW1nL2Zhdm9yaXRlLXJlY2lwZXMuanBnKTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAmX19uby1yZWNpcGVzIHtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMWVtO1xyXG4gICAgfVxyXG4gICAgJl9fc3BhY2Uge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgfVxyXG4gICAgJl9fY29udGFpbmVyIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkY29sb3I6ICNmYWZhZmEsICRhbHBoYTogMC43KTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIH1cclxuICAgICZfX3JlY2lwZSB7XHJcbiAgICAgICAgd2lkdGg6IDI3JTtcclxuICAgICAgICBtYXJnaW46IDFlbSAwO1xyXG4gICAgfVxyXG4gICAgJl9fYnRuIHtcclxuICAgICAgICBmb250LWZhbWlseTogaW5oZXJpdDtcclxuICAgICAgICBwYWRkaW5nOiAwLjNyZW0gMXJlbTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxcHg7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICB0cmFuc2l0aW9uOiAuMnM7XHJcbiAgICB9XHJcbiAgICAmX19sb2ctaW4ge1xyXG4gICAgICAgIHdpZHRoOiA4NXZ3O1xyXG4gICAgICAgIGhlaWdodDogOTB2aDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB9XHJcbn0iXX0= */"] });


/***/ }),

/***/ "KFVj":
/*!*********************************************************************!*\
  !*** ./src/app/components/shopping-list/shopping-list.component.ts ***!
  \*********************************************************************/
/*! exports provided: ShoppingListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingListComponent", function() { return ShoppingListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_local_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/local-data.service */ "9bf1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




function ShoppingListComponent_section_0_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShoppingListComponent_section_0_div_7_Template_button_click_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r8.localData.addIngredientToDeleted($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\t\u2714");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShoppingListComponent_section_0_div_7_Template_button_click_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r10.localData.deleteIngredient($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u2718");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ingredient_r6 = ctx.$implicit;
    const i_r7 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", i_r7 + 1, ". ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ingredient_r6);
} }
const _c0 = function () { return ["/contacts"]; };
function ShoppingListComponent_section_0_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "small", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Please, log in");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "log in");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
} }
function ShoppingListComponent_section_0_button_9_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShoppingListComponent_section_0_button_9_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r11.localData.saveShoppingList(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Save shopping list");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ShoppingListComponent_section_0_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShoppingListComponent_section_0_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.showShoppingList = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, ">");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Shopping list ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ShoppingListComponent_section_0_div_7_Template, 11, 2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ShoppingListComponent_section_0_div_8_Template, 5, 2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ShoppingListComponent_section_0_button_9_Template, 2, 0, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.localData.shoppingList.ingredients);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.localData.users.isUserConnected);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.localData.users.isUserConnected);
} }
function ShoppingListComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShoppingListComponent_ng_template_1_Template_span_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.showShoppingList = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Shopping-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ShoppingListComponent {
    constructor(localData) {
        this.localData = localData;
        this.showShoppingList = true;
    }
    ngOnInit() {
    }
}
ShoppingListComponent.ɵfac = function ShoppingListComponent_Factory(t) { return new (t || ShoppingListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_local_data_service__WEBPACK_IMPORTED_MODULE_1__["LocalDataService"])); };
ShoppingListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ShoppingListComponent, selectors: [["app-shopping-list"]], decls: 3, vars: 2, consts: [["class", "shopping-list", 4, "ngIf", "ngIfElse"], ["shoppingListHidden", ""], [1, "shopping-list"], [1, "shopping-list__header"], ["type", "button", 1, "btn", "shopping-list__btn_arrow", 3, "click"], [1, "shopping-list__title"], ["class", "shopping-list__box", 4, "ngFor", "ngForOf"], ["class", "shopping-list__no-user", 4, "ngIf"], ["class", "btn shopping-list__btn_save", 3, "click", 4, "ngIf"], [1, "shopping-list__box"], [1, "shopping-list__item"], [1, "shopping-list__small-btn", "shopping-list__small-btn_cross", 3, "click"], [1, "shopping-list__small-btn", 3, "click"], [1, "shopping-list__no-user"], [1, "shopping-list__message"], [1, "btn", "shopping-list__btn_log-in", 3, "routerLink"], [1, "btn", "shopping-list__btn_save", 3, "click"], [1, "shopping-list__hidden"], [1, "shopping-list__hidden-title", 3, "click"]], template: function ShoppingListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ShoppingListComponent_section_0_Template, 10, 3, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ShoppingListComponent_ng_template_1_Template, 3, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showShoppingList === true)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]], styles: [".shopping-list[_ngcontent-%COMP%] {\n  color: #275831;\n  width: 100%;\n  min-height: 50vh;\n  background-color: lavender;\n  box-shadow: 1px 1px 5px #275831;\n}\n.shopping-list__header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n  flex-direction: row-reverse;\n  margin-bottom: 1em;\n}\n.shopping-list__filter[_ngcontent-%COMP%] {\n  margin: 0.2rem;\n  padding: 0.8em;\n  background-color: #fafafa;\n}\n.shopping-list__title[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  padding: 0.2em;\n  text-align: center;\n}\n.shopping-list__filter-name[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 1.1rem;\n}\n.shopping-list__small-btn[_ngcontent-%COMP%] {\n  padding: 0 0.1em;\n  font-size: 1em;\n  border: none;\n  background-color: lavender;\n}\n.shopping-list__small-btn[_ngcontent-%COMP%]:hover, .shopping-list__small-btn[_ngcontent-%COMP%]:focus {\n  color: #a34040;\n  outline: none;\n  transform: scale(1.2);\n}\n.shopping-list__small-btn_cross[_ngcontent-%COMP%]:hover, .shopping-list__small-btn_cross[_ngcontent-%COMP%]:focus {\n  color: #387e38;\n}\n.shopping-list__btn_save[_ngcontent-%COMP%] {\n  margin-top: 1em;\n  padding: 0.3em 0.4em;\n  font-size: 1em;\n  border-radius: 1px;\n}\n.shopping-list__btn_arrow[_ngcontent-%COMP%] {\n  margin: 0.1em 0.1em;\n  padding: 0.2em 0.5em;\n}\n.shopping-list__hidden[_ngcontent-%COMP%] {\n  right: 0;\n  width: 30px;\n  height: 90vh;\n  display: flex;\n  justify-content: flex-end;\n  position: absolute;\n  background-color: lavender;\n  box-shadow: 1px 1px 5px #275831;\n  cursor: pointer;\n}\n.shopping-list__hidden-title[_ngcontent-%COMP%] {\n  writing-mode: vertical-rl;\n  color: #275831;\n  font-size: 1.5em;\n  padding-top: 1em;\n}\n.shopping-list__box[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n.shopping-list__no-user[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.shopping-list__btn_log-in[_ngcontent-%COMP%] {\n  padding: 0.1em 0.2em;\n  font-size: 1em;\n  border-radius: 0px;\n}\n.shopping-list__message[_ngcontent-%COMP%] {\n  color: #b92727;\n}\n.inline-filter[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  align-content: center;\n}\n.inline-filter__items[_ngcontent-%COMP%] {\n  margin: 0.2em 0.2em;\n  padding: 0.3rem;\n  border: 1px solid lavender;\n  box-shadow: 1px 1px 1px lavender;\n  background-color: lavender;\n  cursor: pointer;\n}\n.active[_ngcontent-%COMP%] {\n  background-color: lightcoral;\n}\n.inline-filter__items[_ngcontent-%COMP%]    > .checkbox-btn[_ngcontent-%COMP%]:checked {\n  background-color: lightcoral;\n}\n.radio-btn[_ngcontent-%COMP%], .checkbox-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  left: -1000px;\n  top: -1000px;\n  opacity: 0;\n  width: 0;\n  height: 0;\n  z-index: -1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzaG9wcGluZy1saXN0LmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcdmFyaWFibGVzXFx2YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGNDRGE7RURFYixXQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtFQUNBLCtCQUFBO0FBQUo7QUFDSTtFQUNJLGFBQUE7RUFDQSw2QkFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7QUFDUjtBQUNJO0VBQ0ksY0FBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtBQUNSO0FBQ0k7RUFDSSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQUNSO0FBQ0k7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0FBQ1I7QUFDSTtFQUNJLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtBQUNSO0FBQ0k7RUFFSSxjQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0FBQVI7QUFFSTtFQUVJLGNBQUE7QUFEUjtBQUdJO0VBQ0ksZUFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBRFI7QUFHSTtFQUNJLG1CQUFBO0VBQ0Esb0JBQUE7QUFEUjtBQUdJO0VBQ0ksUUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtFQUNBLCtCQUFBO0VBQ0EsZUFBQTtBQURSO0FBR0k7RUFDSSx5QkFBQTtFQUNBLGNDakVTO0VEa0VULGdCQUFBO0VBQ0EsZ0JBQUE7QUFEUjtBQUdJO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0FBRFI7QUFHSTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtBQURSO0FBR0k7RUFDSSxvQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQURSO0FBR0k7RUFDSSxjQUFBO0FBRFI7QUFLQTtFQUNJLGFBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQUZKO0FBR0k7RUFDSSxtQkFBQTtFQUNBLGVBQUE7RUFDQSwwQkFBQTtFQUNBLGdDQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0FBRFI7QUFLQTtFQUNJLDRCQUFBO0FBRko7QUFLQTtFQUNJLDRCQUFBO0FBRko7QUFLQTs7RUFFSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBQUZKIiwiZmlsZSI6InNob3BwaW5nLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vdmFyaWFibGVzL3ZhcmlhYmxlcy5zY3NzXCI7XHJcbi5zaG9wcGluZy1saXN0IHtcclxuICAgIGNvbG9yOiAkbWFpbi1kYXJrLWNvbG9yO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtaW4taGVpZ2h0OiA1MHZoO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGF2ZW5kZXI7XHJcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDVweCAkbWFpbi1kYXJrLWNvbG9yO1xyXG4gICAgJl9faGVhZGVyIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxZW07XHJcbiAgICB9XHJcbiAgICAmX19maWx0ZXIge1xyXG4gICAgICAgIG1hcmdpbjogMC4ycmVtO1xyXG4gICAgICAgIHBhZGRpbmc6IDAuOGVtO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XHJcbiAgICB9XHJcbiAgICAmX190aXRsZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjNyZW07XHJcbiAgICAgICAgcGFkZGluZzogMC4yZW07XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgJl9fZmlsdGVyLW5hbWUge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgIH1cclxuICAgICZfX3NtYWxsLWJ0biB7XHJcbiAgICAgICAgcGFkZGluZzogMCAwLjFlbTtcclxuICAgICAgICBmb250LXNpemU6IDEuMGVtO1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsYXZlbmRlcjtcclxuICAgIH1cclxuICAgICZfX3NtYWxsLWJ0bjpob3ZlcixcclxuICAgICZfX3NtYWxsLWJ0bjpmb2N1cyB7XHJcbiAgICAgICAgY29sb3I6IHJnYigxNjMsIDY0LCA2NCk7XHJcbiAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XHJcbiAgICB9XHJcbiAgICAmX19zbWFsbC1idG5fY3Jvc3M6aG92ZXIsXHJcbiAgICAmX19zbWFsbC1idG5fY3Jvc3M6Zm9jdXMge1xyXG4gICAgICAgIGNvbG9yOiByZ2IoNTYsIDEyNiwgNTYpO1xyXG4gICAgfVxyXG4gICAgJl9fYnRuX3NhdmUge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDFlbTtcclxuICAgICAgICBwYWRkaW5nOiAuM2VtIC40ZW07XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjBlbTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxcHg7XHJcbiAgICB9XHJcbiAgICAmX19idG5fYXJyb3cge1xyXG4gICAgICAgIG1hcmdpbjogLjFlbSAuMWVtO1xyXG4gICAgICAgIHBhZGRpbmc6IC4yZW0gLjVlbTtcclxuICAgIH1cclxuICAgICZfX2hpZGRlbiB7XHJcbiAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA5MHZoO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbGF2ZW5kZXI7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMXB4IDFweCA1cHggJG1haW4tZGFyay1jb2xvcjtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbiAgICAmX19oaWRkZW4tdGl0bGUge1xyXG4gICAgICAgIHdyaXRpbmctbW9kZTogdmVydGljYWwtcmw7XHJcbiAgICAgICAgY29sb3I6ICRtYWluLWRhcmstY29sb3I7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMWVtO1xyXG4gICAgfVxyXG4gICAgJl9fYm94IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIH1cclxuICAgICZfX25vLXVzZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIH1cclxuICAgICZfX2J0bl9sb2ctaW4ge1xyXG4gICAgICAgIHBhZGRpbmc6IDAuMWVtIDAuMmVtO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDBweDtcclxuICAgIH1cclxuICAgICZfX21lc3NhZ2Uge1xyXG4gICAgICAgIGNvbG9yOiByZ2IoMTg1LCAzOSwgMzkpO1xyXG4gICAgfVxyXG59XHJcblxyXG4uaW5saW5lLWZpbHRlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICZfX2l0ZW1zIHtcclxuICAgICAgICBtYXJnaW46IDAuMmVtIDAuMmVtO1xyXG4gICAgICAgIHBhZGRpbmc6IDAuM3JlbTtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBsYXZlbmRlcjtcclxuICAgICAgICBib3gtc2hhZG93OiAxcHggMXB4IDFweCBsYXZlbmRlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsYXZlbmRlcjtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5hY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRjb3JhbDtcclxufVxyXG5cclxuLmlubGluZS1maWx0ZXJfX2l0ZW1zPi5jaGVja2JveC1idG46Y2hlY2tlZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGNvcmFsO1xyXG59XHJcblxyXG4ucmFkaW8tYnRuLFxyXG4uY2hlY2tib3gtYnRuIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IC0xMDAwcHg7XHJcbiAgICB0b3A6IC0xMDAwcHg7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgICBoZWlnaHQ6IDA7XHJcbiAgICB6LWluZGV4OiAtMTtcclxufVxyXG5cclxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDoxMjAwcHgpIHtcclxuICAgIC5zZXR0aW5ncyB7fVxyXG59IiwiJG1haW4tbGlnaHQtY29sb3I6I2ZhZmFmYTtcclxuJG1haW4tZGFyay1jb2xvcjojMjc1ODMxO1xyXG4kbXktc2VjLWNvbG9yOiMyQjQxNjI7Il19 */"] });


/***/ }),

/***/ "PCNd":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class SharedModule {
}
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]], _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SharedModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]], exports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]] }); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


const _c0 = function () { return { exact: true }; };
const _c1 = function () { return ["/"]; };
const _c2 = function () { return ["/recipes"]; };
const _c3 = function () { return ["/find-recipe"]; };
const _c4 = function () { return ["/favorite-recipes"]; };
const _c5 = function () { return ["/contacts"]; };
class AppComponent {
    constructor() {
        this.title = 'FeelGoodFood';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 21, vars: 12, consts: [[1, "navbar"], [1, "container", "navbar__container"], ["href", "/"], ["src", "../assets/img/fgf.png", "alt", "", 1, "navbar__logo"], [1, "navbar__links"], ["routerLinkActive", "active", 1, "navbar__link", 3, "routerLinkActiveOptions"], [1, "link", 3, "routerLink"], ["routerLinkActive", "active", 1, "navbar__link"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Recipes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Find Recipe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Favorite Recipes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Log in");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c5));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: [".navbar[_ngcontent-%COMP%] {\n  background-color: #fafafa;\n  border-bottom: 4px solid #275831;\n  color: #275831;\n  text-shadow: none;\n  min-height: 3em;\n  height: 10vh;\n}\n.navbar__container[_ngcontent-%COMP%] {\n  height: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.navbar__links[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  display: flex;\n  justify-content: space-between;\n}\n.navbar__link[_ngcontent-%COMP%] {\n  margin-left: 1em;\n  transition: 0.5s;\n}\n.navbar__link[_ngcontent-%COMP%]:hover, .navbar__link[_ngcontent-%COMP%]:focus {\n  text-decoration: underline;\n}\n.navbar__logo[_ngcontent-%COMP%] {\n  height: 3em;\n}\n.active[_ngcontent-%COMP%] {\n  font-weight: bold;\n  text-decoration: underline;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFx2YXJpYWJsZXNcXHZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0kseUJBQUE7RUFDQSxnQ0FBQTtFQUNBLGNDSGE7RURJYixpQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBQUo7QUFDSTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQUNSO0FBQ0k7RUFFSSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7QUFBUjtBQUVJO0VBRUksZ0JBQUE7RUFDQSxnQkFBQTtBQURSO0FBR0k7RUFFSSwwQkFBQTtBQUZSO0FBSUk7RUFDSSxXQUFBO0FBRlI7QUFNQTtFQUNJLGlCQUFBO0VBQ0EsMEJBQUE7QUFISiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi92YXJpYWJsZXMvdmFyaWFibGVzLnNjc3NcIjtcclxuLm5hdmJhciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRjb2xvcjogI2ZhZmFmYSwgJGFscGhhOiAxKTtcclxuICAgIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCAkbWFpbi1kYXJrLWNvbG9yO1xyXG4gICAgY29sb3I6ICRtYWluLWRhcmstY29sb3I7XHJcbiAgICB0ZXh0LXNoYWRvdzogbm9uZTtcclxuICAgIG1pbi1oZWlnaHQ6IDNlbTtcclxuICAgIGhlaWdodDogMTB2aDtcclxuICAgICZfX2NvbnRhaW5lciB7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAmX19saW5rcyB7XHJcbiAgICAgICAgLy8gcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIH1cclxuICAgICZfX2xpbmsge1xyXG4gICAgICAgIC8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMWVtO1xyXG4gICAgICAgIHRyYW5zaXRpb246IDAuNXM7XHJcbiAgICB9XHJcbiAgICAmX19saW5rOmhvdmVyLFxyXG4gICAgJl9fbGluazpmb2N1cyB7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICB9XHJcbiAgICAmX19sb2dvIHtcclxuICAgICAgICBoZWlnaHQ6IDNlbTtcclxuICAgIH1cclxufVxyXG5cclxuLmFjdGl2ZSB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgLy8gY29sb3I6ICM0MTg2NjA7XHJcbiAgICAvLyB0ZXh0LXNoYWRvdzogMXB4IDFweCAxcHggI2ZhZmFmYTtcclxufSIsIiRtYWluLWxpZ2h0LWNvbG9yOiNmYWZhZmE7XHJcbiRtYWluLWRhcmstY29sb3I6IzI3NTgzMTtcclxuJG15LXNlYy1jb2xvcjojMkI0MTYyOyJdfQ== */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/home/home.component */ "BuFo");
/* harmony import */ var _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/settings/settings.component */ "1U8w");
/* harmony import */ var _components_favorite_recipes_favorite_recipes_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/favorite-recipes/favorite-recipes.component */ "HYgX");
/* harmony import */ var _components_find_recipe_find_recipe_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/find-recipe/find-recipe.component */ "zQYR");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/shared.module */ "PCNd");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _components_small_card_random_small_card_random_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/small-card-random/small-card-random.component */ "HFlu");
/* harmony import */ var _components_mini_card_mini_card_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/mini-card/mini-card.component */ "xKlC");
/* harmony import */ var _components_maxi_card_maxi_card_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/maxi-card/maxi-card.component */ "wF/I");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _components_shopping_list_shopping_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/shopping-list/shopping-list.component */ "KFVj");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ "ofXK");



















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["BrowserModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_12__["FontAwesomeModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _components_small_card_random_small_card_random_component__WEBPACK_IMPORTED_MODULE_9__["SmallCardRandomComponent"],
        _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
        _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_4__["SettingsComponent"],
        _components_favorite_recipes_favorite_recipes_component__WEBPACK_IMPORTED_MODULE_5__["FavoriteRecipesComponent"],
        _components_find_recipe_find_recipe_component__WEBPACK_IMPORTED_MODULE_6__["FindRecipeComponent"],
        _components_mini_card_mini_card_component__WEBPACK_IMPORTED_MODULE_10__["MiniCardComponent"],
        _components_maxi_card_maxi_card_component__WEBPACK_IMPORTED_MODULE_11__["MaxiCardComponent"],
        _components_shopping_list_shopping_list_component__WEBPACK_IMPORTED_MODULE_13__["ShoppingListComponent"]], imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["BrowserModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_12__["FontAwesomeModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"]] }); })();
_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsetComponentScope"](_components_maxi_card_maxi_card_component__WEBPACK_IMPORTED_MODULE_11__["MaxiCardComponent"], [_angular_common__WEBPACK_IMPORTED_MODULE_16__["NgIf"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_12__["FaIconComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["NgForOf"], _components_shopping_list_shopping_list_component__WEBPACK_IMPORTED_MODULE_13__["ShoppingListComponent"]], [_angular_common__WEBPACK_IMPORTED_MODULE_16__["UpperCasePipe"]]);


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_favorite_recipes_favorite_recipes_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/favorite-recipes/favorite-recipes.component */ "HYgX");
/* harmony import */ var _components_find_recipe_find_recipe_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/find-recipe/find-recipe.component */ "zQYR");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/home/home.component */ "BuFo");
/* harmony import */ var _components_maxi_card_maxi_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/maxi-card/maxi-card.component */ "wF/I");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");







const routes = [
    { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'recipes', loadChildren: () => __webpack_require__.e(/*! import() | components-recipes-recipes-module */ "components-recipes-recipes-module").then(__webpack_require__.bind(null, /*! ./components/recipes/recipes.module */ "Rqzx")).then(m => m.RecipesModule) },
    { path: 'favorite-recipes', component: _components_favorite_recipes_favorite_recipes_component__WEBPACK_IMPORTED_MODULE_1__["FavoriteRecipesComponent"] },
    { path: 'find-recipe', component: _components_find_recipe_find_recipe_component__WEBPACK_IMPORTED_MODULE_2__["FindRecipeComponent"] },
    { path: 'find-recipe/:id', component: _components_maxi_card_maxi_card_component__WEBPACK_IMPORTED_MODULE_4__["MaxiCardComponent"] },
    { path: 'contacts', loadChildren: () => __webpack_require__.e(/*! import() | components-contacts-contacts-module */ "components-contacts-contacts-module").then(__webpack_require__.bind(null, /*! ./components/contacts/contacts.module */ "Xqtc")).then(m => m.ContactsModule) },
    { path: 'admin', loadChildren: () => __webpack_require__.e(/*! import() | components-admin-admin-module */ "components-admin-admin-module").then(__webpack_require__.bind(null, /*! ./components/admin/admin.module */ "5OiB")).then(m => m.AdminModule) }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes, {
                preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_0__["PreloadAllModules"]
            })], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "wF/I":
/*!*************************************************************!*\
  !*** ./src/app/components/maxi-card/maxi-card.component.ts ***!
  \*************************************************************/
/*! exports provided: MaxiCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaxiCardComponent", function() { return MaxiCardComponent; });
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_local_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/local-data.service */ "9bf1");
/* harmony import */ var src_app_services_get_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/get-data.service */ "EQNs");






function MaxiCardComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r3.localData.error.fullRecipe, " ");
} }
function MaxiCardComponent_div_0_div_2_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MaxiCardComponent_div_0_div_2_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r8.addRecipeToFavorite(ctx_r8.recipe); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\u2764");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("color", ctx_r5.favoriteRecipe ? "lightcoral" : "#fafafa");
} }
function MaxiCardComponent_div_0_div_2_h3_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h3", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, ctx_r6.recipe.title), " ");
} }
function MaxiCardComponent_div_0_div_2_ol_16_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ol");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "label", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MaxiCardComponent_div_0_div_2_ol_16_Template_label_click_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const ingredient_r10 = ctx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r12.checkIngredient($event, ingredient_r10.name); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ingredient_r10 = ctx.$implicit;
    const i_r11 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("id", ingredient_r10.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", i_r11 + 1, ". ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("for", ingredient_r10.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ingredient_r10.original, "");
} }
function MaxiCardComponent_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, MaxiCardComponent_div_0_div_2_button_2_Template, 2, 2, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "section", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "header", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, MaxiCardComponent_div_0_div_2_h3_5_Template, 3, 3, "h3", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "fa-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "fa-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "form", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "h3", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, " Ingredients: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, MaxiCardComponent_div_0_div_2_ol_16_Template, 6, 4, "ol", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MaxiCardComponent_div_0_div_2_Template_button_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r14.localData.addToTheShoppingList(ctx_r14.ingredients); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Add to the shopping List");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "h3", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Instructions:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("background-image", "url(" + ctx_r4.recipe.image + ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.localData.users.isUserConnected);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r4.error);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx_r4.faClock);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r4.recipe.readyInMinutes, " MIN ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx_r4.faConciergeBell);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r4.recipe.servings, " SERVES ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r4.recipe.extendedIngredients);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", ctx_r4.recipe.instructions, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
} }
function MaxiCardComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MaxiCardComponent_div_0_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r16.click(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MaxiCardComponent_div_0_div_1_Template, 2, 1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, MaxiCardComponent_div_0_div_2_Template, 23, 10, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "app-shopping-list", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.localData.error.fullRecipe);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r0.localData.error.fullRecipe);
} }
function MaxiCardComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Loading ...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class MaxiCardComponent {
    constructor(route, localData, getData) {
        this.route = route;
        this.localData = localData;
        this.getData = getData;
        this.favoriteRecipe = false;
        this.loading = false;
        this.faClock = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faClock"];
        this.faConciergeBell = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faConciergeBell"];
        this.title = 'Loading...';
        this.ingredients = new Set;
        this.route.params.subscribe((params) => {
            this.id = Number(params.id.split('-')[0]);
            this.localData.searchById(this.id);
        }, error => {
            this.localData.error.fullRecipe = error.message;
        });
        setTimeout(() => {
            console.log(this.localData.fullRecipes);
            let recipe;
            this.loading = true;
            this.localData.fullRecipes.recipes.forEach(i => {
                if (i.id == this.id) {
                    this.recipe = i;
                }
            });
            if (this.localData.users.isUserConnected) {
                this.localData.users.connectedUser.favoriteRecipes.forEach((item) => {
                    if (item.id === this.id) {
                        this.favoriteRecipe = true;
                    }
                    else {
                        this.favoriteRecipe = false;
                    }
                });
            }
        }, 800);
    }
    addRecipeToFavorite(recipe) {
        console.log(this.localData.users.connectedUser);
        if (!this.favoriteRecipe) {
            this.favoriteRecipe = true;
            this.localData.users.connectedUser.favoriteRecipes.add(recipe);
        }
        else {
            this.favoriteRecipe = false;
            this.localData.users.connectedUser.favoriteRecipes.delete(recipe);
        }
    }
    checkIngredient(event, name) {
        let input = event.target.parentNode.firstChild;
        let label = event.target;
        if (!input.checked) {
            label.style.backgroundColor = 'lightcoral';
            this.ingredients.add(name);
        }
        else {
            label.style.backgroundColor = 'lavender';
            this.ingredients.delete(name);
        }
    }
    ngOnInit() {
    }
}
MaxiCardComponent.ɵfac = function MaxiCardComponent_Factory(t) { return new (t || MaxiCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_local_data_service__WEBPACK_IMPORTED_MODULE_3__["LocalDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_get_data_service__WEBPACK_IMPORTED_MODULE_4__["GetDataService"])); };
MaxiCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MaxiCardComponent, selectors: [["app-maxi-card"]], decls: 3, vars: 2, consts: [["class", "maxi-card-container", 3, "click", 4, "ngIf", "ngIfElse"], ["class", "maxi-card-container"], ["loadingBlock", ""], [1, "maxi-card-container", 3, "click"], ["class", "error", 4, "ngIf"], ["class", "maxi-card container", 4, "ngIf"], [1, "shopping-list"], [1, "error"], [1, "maxi-card", "container"], [1, "maxi-card__image", "maxi-card__box"], ["class", "maxi-card__btn_favorite-recipe", 3, "color", "click", 4, "ngIf"], [1, "maxi-card__content"], [1, "maxi-card__headind", "maxi-card__box"], ["class", "maxi-card__title", 4, "ngIf"], [1, "maxi-card__short-inf", "maxi-card__box"], [1, "maxi-card__icon", 3, "icon"], [1, "maxi-card__ingredients", "maxi-card__box"], [1, "maxi-card__ingredients-heading"], [4, "ngFor", "ngForOf"], ["type", "submit", 1, "maxi-card__button", "btn", 3, "click"], [1, "maxi-card__full-inf", "maxi-card__box"], [3, "innerHTML"], [1, "maxi-card__btn_favorite-recipe", 3, "click"], [1, "maxi-card__title"], ["type", "checkbox", 1, "maxi-card__checkbox", 3, "id"], [1, "maxi-card__ingredient", 3, "for", "click"]], template: function MaxiCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, MaxiCardComponent_div_0_Template, 4, 2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MaxiCardComponent_ng_template_1_Template, 4, 0, "ng-template", 1, 2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loading === true)("ngIfElse", _r1);
    } }, styles: [".maxi-card[_ngcontent-%COMP%] {\n  width: 100%;\n  background-color: lavender;\n  padding: 1em;\n  color: #275831;\n}\n.maxi-card__box[_ngcontent-%COMP%] {\n  margin: 0.5rem;\n  padding: 1em;\n  background-color: #fafafa;\n}\n.maxi-card__image[_ngcontent-%COMP%] {\n  width: 250px;\n  height: 250px;\n  margin: auto;\n  background-color: #ffe7b9;\n  background-position: center;\n  background-size: cover;\n  position: relative;\n}\n.maxi-card__icon[_ngcontent-%COMP%] {\n  margin-left: 2em;\n  color: #cca55d;\n}\n.maxi-card__nutrition-value[_ngcontent-%COMP%] {\n  display: flex;\n}\n.maxi-card__item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column-reverse;\n  background-color: #fff;\n}\n.maxi-card__ingredients-heading[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n}\n.maxi-card__button[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 1em;\n  top: 1em;\n  border-radius: 0px;\n  font-size: 1em;\n  padding: 0.3em 0.5em;\n}\n.maxi-card__checkbox[_ngcontent-%COMP%] {\n  opacity: 0;\n  left: -9999;\n  width: 0;\n  height: 0;\n}\n.maxi-card__ingredients[_ngcontent-%COMP%] {\n  position: relative;\n}\n.maxi-card__ingredient[_ngcontent-%COMP%] {\n  line-height: 1.8em;\n  padding: 0.1em 0.2em;\n  background-color: lavender;\n  margin: 0.1em;\n  cursor: pointer;\n}\n.maxi-card__ingredients-heading[_ngcontent-%COMP%] {\n  margin: 1em;\n  text-align: left;\n}\n.maxi-card__short-inf[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n}\n.maxi-card__full-inf[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.maxi-card__btn_favorite-recipe[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  font-size: 2em;\n  background: transparent;\n  color: #fafafa;\n  border: none;\n  box-shadow: none;\n  text-shadow: 1px 1px 10px black;\n  outline: none;\n  transition: 0.2s;\n}\n.maxi-card__btn_favorite-recipe[_ngcontent-%COMP%]:hover, .maxi-card__btn_favorite-recipe[_ngcontent-%COMP%]:focus {\n  transform: scale(1.2);\n}\n.maxi-card-container[_ngcontent-%COMP%] {\n  position: relative;\n}\n.shopping-list[_ngcontent-%COMP%] {\n  position: fixed;\n  right: 0;\n  top: 10vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxtYXhpLWNhcmQuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFx2YXJpYWJsZXNcXHZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksV0FBQTtFQUNBLDBCQUFBO0VBQ0EsWUFBQTtFQUNBLGNDSmE7QURJakI7QUFDSTtFQUNJLGNBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7QUFDUjtBQUNJO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUFDUjtBQUVJO0VBQ0ksZ0JBQUE7RUFDQSxjQUFBO0FBQVI7QUFFSTtFQUNJLGFBQUE7QUFBUjtBQUVJO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0Esc0JBQUE7QUFBUjtBQUlJO0VBQ0ksaUJBQUE7QUFGUjtBQUlJO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0FBRlI7QUFJSTtFQUNJLFVBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7QUFGUjtBQUlJO0VBQ0ksa0JBQUE7QUFGUjtBQUlJO0VBQ0ksa0JBQUE7RUFDQSxvQkFBQTtFQUVBLDBCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7QUFIUjtBQUtJO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0FBSFI7QUFLSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBQUhSO0FBS0k7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7QUFIUjtBQUtJO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSwrQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQUhSO0FBS0k7RUFFSSxxQkFBQTtBQUpSO0FBUUE7RUFDSSxrQkFBQTtBQUxKO0FBUUE7RUFDSSxlQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7QUFMSiIsImZpbGUiOiJtYXhpLWNhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vdmFyaWFibGVzL3ZhcmlhYmxlcy5zY3NzXCI7XHJcbi5tYXhpLWNhcmQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsYXZlbmRlcjtcclxuICAgIHBhZGRpbmc6IDFlbTtcclxuICAgIGNvbG9yOiAkbWFpbi1kYXJrLWNvbG9yO1xyXG4gICAgJl9fYm94IHtcclxuICAgICAgICBtYXJnaW46IDAuNXJlbTtcclxuICAgICAgICBwYWRkaW5nOiAxZW07XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcclxuICAgIH1cclxuICAgICZfX2ltYWdlIHtcclxuICAgICAgICB3aWR0aDogMjUwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyNTBweDtcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZTdiOTtcclxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB9XHJcbiAgICAmX190aXRsZSB7fVxyXG4gICAgJl9faWNvbiB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDJlbTtcclxuICAgICAgICBjb2xvcjogI2NjYTU1ZDtcclxuICAgIH1cclxuICAgICZfX251dHJpdGlvbi12YWx1ZSB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgIH1cclxuICAgICZfX2l0ZW0ge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICB9XHJcbiAgICAmX19pdGVtLXRpdGxlIHt9XHJcbiAgICAmX19pdGVtLXZhbHVlIHt9XHJcbiAgICAmX19pbmdyZWRpZW50cy1oZWFkaW5nIHtcclxuICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgIH1cclxuICAgICZfX2J1dHRvbiB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHJpZ2h0OiAxZW07XHJcbiAgICAgICAgdG9wOiAxZW07XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgICAgIHBhZGRpbmc6IDAuM2VtIDAuNWVtO1xyXG4gICAgfVxyXG4gICAgJl9fY2hlY2tib3gge1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgbGVmdDogLTk5OTk7XHJcbiAgICAgICAgd2lkdGg6IDA7XHJcbiAgICAgICAgaGVpZ2h0OiAwO1xyXG4gICAgfVxyXG4gICAgJl9faW5ncmVkaWVudHMge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIH1cclxuICAgICZfX2luZ3JlZGllbnQge1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjhlbTtcclxuICAgICAgICBwYWRkaW5nOiAwLjFlbSAwLjJlbTtcclxuICAgICAgICAvLyBib3JkZXI6IDFweCBzb2xpZCAkbWFpbi1kYXJrLWNvbG9yO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGxhdmVuZGVyO1xyXG4gICAgICAgIG1hcmdpbjogMC4xZW07XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG4gICAgJl9faW5ncmVkaWVudHMtaGVhZGluZyB7XHJcbiAgICAgICAgbWFyZ2luOiAxZW07XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIH1cclxuICAgICZfX3Nob3J0LWluZiB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgfVxyXG4gICAgJl9fZnVsbC1pbmYge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIH1cclxuICAgICZfX2J0bl9mYXZvcml0ZS1yZWNpcGUge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAyZW07XHJcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgY29sb3I6ICNmYWZhZmE7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgdGV4dC1zaGFkb3c6IDFweCAxcHggMTBweCBibGFjaztcclxuICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgIHRyYW5zaXRpb246IC4ycztcclxuICAgIH1cclxuICAgICZfX2J0bl9mYXZvcml0ZS1yZWNpcGU6aG92ZXIsXHJcbiAgICAmX19idG5fZmF2b3JpdGUtcmVjaXBlOmZvY3VzIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5tYXhpLWNhcmQtY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLnNob3BwaW5nLWxpc3Qge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB0b3A6IDEwdmg7XHJcbn0iLCIkbWFpbi1saWdodC1jb2xvcjojZmFmYWZhO1xyXG4kbWFpbi1kYXJrLWNvbG9yOiMyNzU4MzE7XHJcbiRteS1zZWMtY29sb3I6IzJCNDE2MjsiXX0= */"] });


/***/ }),

/***/ "xKlC":
/*!*************************************************************!*\
  !*** ./src/app/components/mini-card/mini-card.component.ts ***!
  \*************************************************************/
/*! exports provided: MiniCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MiniCardComponent", function() { return MiniCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class MiniCardComponent {
    constructor() {
        this.title = 'Loading...';
        this.image = '';
    }
    ngOnInit() {
    }
}
MiniCardComponent.ɵfac = function MiniCardComponent_Factory(t) { return new (t || MiniCardComponent)(); };
MiniCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MiniCardComponent, selectors: [["app-mini-card"]], inputs: { title: "title", image: "image" }, decls: 5, vars: 3, consts: [[1, "mini-card"], [1, "mini-card__box"], [1, "mini-card__title"], [1, "mini-card__image"]], template: function MiniCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-image", "url(" + ctx.image + ")");
    } }, styles: [".mini-card[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 250px;\n  text-transform: uppercase;\n  color: #275831;\n  box-shadow: 1px 1px 5px #275831;\n}\n.mini-card__box[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.mini-card__title[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  min-height: 15%;\n  text-align: center;\n}\n.mini-card__image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 85%;\n  background-size: cover;\n  background-position: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxtaW5pLWNhcmQuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFx2YXJpYWJsZXNcXHZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLGNDSmE7RURLYiwrQkFBQTtBQUFKO0FBQ0k7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBQ1I7QUFDSTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQUNSO0FBQ0k7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7QUFDUiIsImZpbGUiOiJtaW5pLWNhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi92YXJpYWJsZXMvdmFyaWFibGVzLnNjc3MnO1xyXG4ubWluaS1jYXJkIHtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIGhlaWdodDogMjUwcHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgY29sb3I6ICRtYWluLWRhcmstY29sb3I7XHJcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDVweCAkbWFpbi1kYXJrLWNvbG9yO1xyXG4gICAgJl9fYm94IHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAmX190aXRsZSB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDE1JTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAmX19pbWFnZSB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiA4NSU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICB9XHJcbn0iLCIkbWFpbi1saWdodC1jb2xvcjojZmFmYWZhO1xyXG4kbWFpbi1kYXJrLWNvbG9yOiMyNzU4MzE7XHJcbiRteS1zZWMtY29sb3I6IzJCNDE2MjsiXX0= */"] });


/***/ }),

/***/ "zQYR":
/*!*****************************************************************!*\
  !*** ./src/app/components/find-recipe/find-recipe.component.ts ***!
  \*****************************************************************/
/*! exports provided: FindRecipeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FindRecipeComponent", function() { return FindRecipeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _maxi_card_maxi_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../maxi-card/maxi-card.component */ "wF/I");
/* harmony import */ var _mini_card_mini_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../mini-card/mini-card.component */ "xKlC");
/* harmony import */ var _services_local_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/local-data.service */ "9bf1");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../settings/settings.component */ "1U8w");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");










const _c0 = function (a1) { return ["/find-recipe", a1]; };
function FindRecipeComponent_app_mini_card_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-mini-card", 5);
} if (rf & 2) {
    const recipe_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("title", recipe_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("image", recipe_r1.image);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](3, _c0, (recipe_r1.id + "-" + recipe_r1.title).split(" ").join("-")));
} }
let FindRecipeComponent = class FindRecipeComponent {
    constructor(localData) {
        this.localData = localData;
        this.error = '';
        this.recipes = [];
    }
    ngOnInit() {
        this.getRecipesBySettingsChecked();
    }
    showMaxiCard(event) {
        let title = event.target.parentNode.children[0].textContent;
        let id = this.localData.searchRecipeByTitle(title);
        this.localData.searchById(id);
        setTimeout(() => {
            let index = this.localData.searchByIdInLocalData(id);
            this.maxiCardRecipe = this.localData.fullRecipes.recipes[index];
            console.log(this.maxiCardRecipe);
        }, 300);
    }
    getRecipesBySettingsChecked() {
        this.localData.numberOfRecipes = 6;
        let settingsChecked = this.localData.settingsChecked;
        let url = this.localData.complexSearch.url;
        url = url + 'type=' + settingsChecked.type.join(',') +
            '&' + 'cuisine=' + settingsChecked.cuisine.join(',') +
            '&' + 'diet=' + settingsChecked.diet.join(',') +
            '&' + 'intolerances=' + Array.from(settingsChecked.intolerance).join(',') +
            '&' + 'number=' + this.localData.numberOfRecipes;
        if (this.localData.settingsChecked.autocomplete) {
            url = url + '&' + 'query=' + this.localData.settingsChecked.autocomplete;
        }
        this.localData.getData.getRecipe(url).subscribe(response => {
            this.localData.numberOfRecipes = response.results.length;
            this.localData.complexSearch.recipes = response.results;
        }, error => {
            console.log(error);
            this.error = error.message;
        });
    }
};
FindRecipeComponent.ɵfac = function FindRecipeComponent_Factory(t) { return new (t || FindRecipeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_local_data_service__WEBPACK_IMPORTED_MODULE_4__["LocalDataService"])); };
FindRecipeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: FindRecipeComponent, selectors: [["app-find-recipe"]], outputs: { maxiCardRecipe: "maxiCardRecipe" }, decls: 7, vars: 2, consts: [[1, "findRecipe"], [1, "findRecipe__settings"], [1, "container", "findRecipe__container"], [1, "error"], ["class", "findRecipe__cards", 3, "title", "image", "routerLink", 4, "ngFor", "ngForOf"], [1, "findRecipe__cards", 3, "title", "image", "routerLink"]], template: function FindRecipeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "app-settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, FindRecipeComponent_app_mini_card_6_Template, 1, 5, "app-mini-card", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.error, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.localData.complexSearch.recipes);
    } }, directives: [_settings_settings_component__WEBPACK_IMPORTED_MODULE_5__["SettingsComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _mini_card_mini_card_component__WEBPACK_IMPORTED_MODULE_3__["MiniCardComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLink"]], styles: [".findRecipe[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  width: 100vw;\n  height: 90vh;\n  background-image: url('find-recipe.jpg');\n  background-size: cover;\n}\n.findRecipe__settings[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  width: 25%;\n  display: flex;\n  flex-direction: column;\n}\n.findRecipe__btn[_ngcontent-%COMP%] {\n  padding: 0.5em 0.8em;\n}\n.findRecipe__container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-around;\n  align-content: space-around;\n  background-color: rgba(250, 250, 250, 0.9);\n}\n@media (max-width: 768px) {\n  .findRecipe[_ngcontent-%COMP%] {\n    height: -webkit-max-content;\n    height: max-content;\n  }\n  .findRecipe__container[_ngcontent-%COMP%] {\n    width: 100%;\n    flex-direction: column;\n    align-items: center;\n  }\n  .findRecipe__settings[_ngcontent-%COMP%] {\n    width: 60%;\n  }\n  .findRecipe__cards[_ngcontent-%COMP%] {\n    margin: auto;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxmaW5kLXJlY2lwZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGFBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSx3Q0FBQTtFQUNBLHNCQUFBO0FBQUo7QUFDSTtFQUNJLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUFDUjtBQUNJO0VBQ0ksb0JBQUE7QUFDUjtBQUNJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLDZCQUFBO0VBQ0EsMkJBQUE7RUFDQSwwQ0FBQTtBQUNSO0FBR0E7RUFDSTtJQUNJLDJCQUFBO0lBQUEsbUJBQUE7RUFBTjtFQUNNO0lBQ0ksV0FBQTtJQUNBLHNCQUFBO0lBQ0EsbUJBQUE7RUFDVjtFQUNNO0lBQ0ksVUFBQTtFQUNWO0VBQ007SUFDSSxZQUFBO0VBQ1Y7QUFDRiIsImZpbGUiOiJmaW5kLXJlY2lwZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEBpbXBvcnQgXCIuLi8uLi92YXJpYWJsZXMvdmFyaWFibGVzLnNjc3NcIjtcclxuLmZpbmRSZWNpcGUge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIGhlaWdodDogOTB2aDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi9hc3NldHMvaW1nL2ZpbmQtcmVjaXBlLmpwZyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgJl9fc2V0dGluZ3Mge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHdpZHRoOiAyNSU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgfVxyXG4gICAgJl9fYnRuIHtcclxuICAgICAgICBwYWRkaW5nOiAuNWVtIC44ZW07XHJcbiAgICB9XHJcbiAgICAmX19jb250YWluZXIge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgICAgICBhbGlnbi1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkY29sb3I6ICNmYWZhZmEsICRhbHBoYTogMC45KTtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6NzY4cHgpIHtcclxuICAgIC5maW5kUmVjaXBlIHtcclxuICAgICAgICBoZWlnaHQ6IG1heC1jb250ZW50O1xyXG4gICAgICAgICZfX2NvbnRhaW5lciB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmX19zZXR0aW5ncyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA2MCU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICZfX2NhcmRzIHtcclxuICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */"] });
FindRecipeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_mini_card_mini_card_component__WEBPACK_IMPORTED_MODULE_3__["MiniCardComponent"]),
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_maxi_card_maxi_card_component__WEBPACK_IMPORTED_MODULE_2__["MaxiCardComponent"])
], FindRecipeComponent);



/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map