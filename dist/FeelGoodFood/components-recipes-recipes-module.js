(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-recipes-recipes-module"],{

/***/ "+Dha":
/*!*******************************************************************************!*\
  !*** ./src/app/components/recipes/meal-type-card/meal-type-card.component.ts ***!
  \*******************************************************************************/
/*! exports provided: MealTypeCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MealTypeCardComponent", function() { return MealTypeCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_local_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/local-data.service */ "9bf1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_get_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/get-data.service */ "EQNs");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");





function MealTypeCardComponent_p_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("text-align", ctx_r0.center);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.error);
} }
const _c0 = function (a1) { return ["/find-recipe", a1]; };
function MealTypeCardComponent_a_9_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MealTypeCardComponent_a_9_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const recipe_r2 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.localData.searchById(recipe_r2.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const recipe_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, (recipe_r2.id + "-" + recipe_r2.title).split(" ").join("-")));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](recipe_r2.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-image", "url(" + recipe_r2.image + ")");
} }
const _c1 = function () { return ["/recipes"]; };
class MealTypeCardComponent {
    constructor(localData, route, getData) {
        this.localData = localData;
        this.route = route;
        this.getData = getData;
        this.recipes = [];
        this.urlSearchByType = 'https://api.spoonacular.com/recipes/complexSearch?type=';
        this.numberOfRecipes = 6;
        this.urlRandomRecipe = 'https://api.spoonacular.com/recipes/random?';
        this.backgroundImg = '';
        this.error = '';
        this.getMoreRecipes();
    }
    ngOnInit() {
        this.getRecipesByType();
    }
    ngOnChanges() {
        this.getRecipesByType();
    }
    getMoreRecipes() {
        this.route.params.subscribe((params) => {
            let urlSearchByType = this.generateUrl(params.type, this.urlRandomRecipe);
            this.getRecipes(urlSearchByType);
        }, error => {
            console.log(error);
            this.error = error.message;
        });
    }
    getRecipesByType() {
        this.route.params.subscribe((params) => {
            this.changeBackground(params.type);
            let urlSearchByType = this.generateUrl(params.type, this.urlSearchByType);
            this.getRecipes(urlSearchByType);
        }, error => {
            console.log(error);
            this.error = error.message;
        });
    }
    changeBackground(type) {
        this.backgroundImg = this.backgroundImg + type;
    }
    generateUrl(type, url) {
        return url + type + '&number=' + this.numberOfRecipes;
    }
    getRecipes(url) {
        this.getData.getRecipe(url).subscribe(response => {
            this.recipes = response.recipes;
        }, error => {
            console.log(error);
            this.error = error.message;
        });
    }
}
MealTypeCardComponent.ɵfac = function MealTypeCardComponent_Factory(t) { return new (t || MealTypeCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_local_data_service__WEBPACK_IMPORTED_MODULE_1__["LocalDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_get_data_service__WEBPACK_IMPORTED_MODULE_3__["GetDataService"])); };
MealTypeCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MealTypeCardComponent, selectors: [["app-meal-type-card"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 10, vars: 6, consts: [[1, "meal-type-cards"], [1, "container", "meal-type-cards__container"], [1, "meal-type-cards__name"], [1, "btn", "breadcrumbs", "meal-type-cards__btn", 3, "routerLink"], [1, "btn", "reload", 3, "click"], [1, "meal-type-cards__box"], ["class", "error", 3, "textAlign", 4, "ngIf"], ["class", "meal-type-cards__item item", 3, "routerLink", "click", 4, "ngFor", "ngForOf"], [1, "error"], [1, "meal-type-cards__item", "item", 3, "routerLink", "click"], [1, "item__name"], [1, "item__image"]], template: function MealTypeCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "header", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "< Recipes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MealTypeCardComponent_Template_button_click_5_listener() { return ctx.getMoreRecipes(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\t\u21BB reload recipes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "section", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, MealTypeCardComponent_p_8_Template, 2, 3, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, MealTypeCardComponent_a_9_Template, 4, 6, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-image", "url(" + "../../../assets/img/recipes/" + ctx.backgroundImg + ".jpg)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.error);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.recipes);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: [".meal-type-cards[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 90vh;\n  background-color: lemonchiffon;\n  background-position: center;\n  background-size: cover;\n}\n.meal-type-cards__container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n.meal-type-cards__name[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  box-shadow: none;\n  height: 15%;\n}\n.meal-type-cards__box[_ngcontent-%COMP%] {\n  box-shadow: 2px 3px 15px #275831;\n  background-color: #fafafa;\n  width: 100%;\n  height: 85%;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-around;\n  align-content: space-around;\n}\n.meal-type-cards__item[_ngcontent-%COMP%] {\n  background-color: khaki;\n  width: 30%;\n  height: 40%;\n}\n.item[_ngcontent-%COMP%] {\n  box-shadow: 1px 1px 15px #275831;\n  color: #275831;\n  text-transform: uppercase;\n}\n.item__name[_ngcontent-%COMP%] {\n  background-color: #fafafa;\n  width: 100%;\n  height: 25%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n}\n.item__image[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 75%;\n  background-size: cover;\n  background-position: center;\n}\n.breadcrumbs[_ngcontent-%COMP%], .reload[_ngcontent-%COMP%] {\n  height: 3em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcbWVhbC10eXBlLWNhcmQuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHZhcmlhYmxlc1xcdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtBQUFKO0FBQ0k7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQUNSO0FBQ0k7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQUNSO0FBQ0k7RUFDSSxnQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLDZCQUFBO0VBQ0EsMkJBQUE7QUFDUjtBQUNJO0VBQ0ksdUJBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQUNSO0FBR0E7RUFDSSxnQ0FBQTtFQUNBLGNDcENhO0VEcUNiLHlCQUFBO0FBQUo7QUFDSTtFQUNJLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0FBQ1I7QUFDSTtFQUNJLGNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7QUFDUjtBQUdBOztFQUVJLFdBQUE7QUFBSiIsImZpbGUiOiJtZWFsLXR5cGUtY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uL3ZhcmlhYmxlcy92YXJpYWJsZXMuc2Nzcyc7XHJcbi5tZWFsLXR5cGUtY2FyZHMge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDkwdmg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsZW1vbmNoaWZmb247XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgJl9fY29udGFpbmVyIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB9XHJcbiAgICAmX19uYW1lIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgaGVpZ2h0OiAxNSU7XHJcbiAgICB9XHJcbiAgICAmX19ib3gge1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDJweCAzcHggMTVweCAkbWFpbi1kYXJrLWNvbG9yO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiA4NSU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICAgICAgYWxpZ24tY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgfVxyXG4gICAgJl9faXRlbSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjoga2hha2k7XHJcbiAgICAgICAgd2lkdGg6IDMwJTtcclxuICAgICAgICBoZWlnaHQ6IDQwJTtcclxuICAgIH1cclxufVxyXG5cclxuLml0ZW0ge1xyXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAxNXB4ICRtYWluLWRhcmstY29sb3I7XHJcbiAgICBjb2xvcjogJG1haW4tZGFyay1jb2xvcjtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAmX19uYW1lIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMjUlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAmX19pbWFnZSB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiA3NSU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5icmVhZGNydW1icyxcclxuLnJlbG9hZCB7XHJcbiAgICBoZWlnaHQ6IDNlbTtcclxufSIsIiRtYWluLWxpZ2h0LWNvbG9yOiNmYWZhZmE7XHJcbiRtYWluLWRhcmstY29sb3I6IzI3NTgzMTtcclxuJG15LXNlYy1jb2xvcjojMkI0MTYyOyJdfQ== */"] });


/***/ }),

/***/ "Rqzx":
/*!******************************************************!*\
  !*** ./src/app/components/recipes/recipes.module.ts ***!
  \******************************************************/
/*! exports provided: RecipesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipesModule", function() { return RecipesModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _recipes_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./recipes.component */ "Uz4/");
/* harmony import */ var _meal_type_card_meal_type_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./meal-type-card/meal-type-card.component */ "+Dha");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/shared.module */ "PCNd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");







class RecipesModule {
}
RecipesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: RecipesModule });
RecipesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ factory: function RecipesModule_Factory(t) { return new (t || RecipesModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                {
                    path: '', component: _recipes_component__WEBPACK_IMPORTED_MODULE_2__["RecipesComponent"]
                },
                {
                    path: ':type', component: _meal_type_card_meal_type_card_component__WEBPACK_IMPORTED_MODULE_3__["MealTypeCardComponent"]
                }
            ])
        ], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](RecipesModule, { declarations: [_meal_type_card_meal_type_card_component__WEBPACK_IMPORTED_MODULE_3__["MealTypeCardComponent"],
        _recipes_component__WEBPACK_IMPORTED_MODULE_2__["RecipesComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();


/***/ }),

/***/ "Uz4/":
/*!*********************************************************!*\
  !*** ./src/app/components/recipes/recipes.component.ts ***!
  \*********************************************************/
/*! exports provided: RecipesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipesComponent", function() { return RecipesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_local_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/local-data.service */ "9bf1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




const _c0 = function (a1) { return ["/recipes", a1]; };
const _c1 = function (a0) { return { "backgroundImage": a0 }; };
function RecipesComponent_a_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const type_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, type_r1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 3, type_r1.split("-").join(" ")));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c1, "url(../../assets/img/recipes/" + type_r1 + ".jpg)"));
} }
class RecipesComponent {
    constructor(localData) {
        this.localData = localData;
        this.localDataTypes = this.localData.settings.type.map(i => i);
        this.types = this.localDataTypes.splice(0, 6);
    }
    ngOnInit() {
    }
}
RecipesComponent.ɵfac = function RecipesComponent_Factory(t) { return new (t || RecipesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_local_data_service__WEBPACK_IMPORTED_MODULE_1__["LocalDataService"])); };
RecipesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RecipesComponent, selectors: [["app-recipes"]], decls: 4, vars: 1, consts: [[1, "recipes"], [1, "recipes__container", "container"], [1, "card"], ["class", "card__item", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "card__item", 3, "routerLink"], [1, "card__meal-type"], [1, "card__img", 3, "ngStyle"]], template: function RecipesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, RecipesComponent_a_3_Template, 5, 9, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.types);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["UpperCasePipe"]], styles: [".recipes[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 90vh;\n  background-image: url('recipes.jpg');\n  background-position: center;\n  background-size: cover;\n}\n.recipes__container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-content: space-around;\n  flex-wrap: wrap;\n}\n.recipes__card[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n.card[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  align-content: space-around;\n}\n.card__item[_ngcontent-%COMP%] {\n  background-color: #fff;\n  width: 27%;\n  height: 40%;\n  box-shadow: 8px 8px 15px #275831;\n}\n.card__meal-type[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 15%;\n}\n.card__img[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 85%;\n  background-position: center;\n  background-size: cover;\n}\n@media (max-width: 768px) {\n  .recipes__container[_ngcontent-%COMP%] {\n    position: relative;\n    height: -webkit-max-content;\n    height: max-content;\n    display: flex;\n  }\n\n  .card[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n\n  .card__item[_ngcontent-%COMP%] {\n    width: 60%;\n    height: 50vw;\n    margin-top: 1em;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxyZWNpcGVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtFQUNBLDJCQUFBO0VBQ0Esc0JBQUE7QUFBSjtBQUNJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSwyQkFBQTtFQUNBLGVBQUE7QUFDUjtBQUNJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUFDUjtBQUdBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLDhCQUFBO0VBQ0EsMkJBQUE7QUFBSjtBQUNJO0VBQ0ksc0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGdDQUFBO0FBQ1I7QUFDSTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUFDUjtBQUNJO0VBQ0ksY0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtBQUNSO0FBR0E7RUFHUTtJQUNJLGtCQUFBO0lBQ0EsMkJBQUE7SUFBQSxtQkFBQTtJQUNBLGFBQUE7RUFGVjs7RUFLRTtJQUNJLHVCQUFBO0VBRk47O0VBSUU7SUFDSSxVQUFBO0lBQ0EsWUFBQTtJQUNBLGVBQUE7RUFETjtBQUNGIiwiZmlsZSI6InJlY2lwZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vdmFyaWFibGVzL3ZhcmlhYmxlcy5zY3NzXCI7XHJcbi5yZWNpcGVzIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA5MHZoO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWcvcmVjaXBlcy9yZWNpcGVzLmpwZyk7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgJl9fY29udGFpbmVyIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgYWxpZ24tY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIH1cclxuICAgICZfX2NhcmQge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgIH1cclxufVxyXG5cclxuLmNhcmQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24tY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgJl9faXRlbSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICB3aWR0aDogMjclO1xyXG4gICAgICAgIGhlaWdodDogNDAlO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDhweCA4cHggMTVweCAkbWFpbi1kYXJrLWNvbG9yO1xyXG4gICAgfVxyXG4gICAgJl9fbWVhbC10eXBlIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxNSU7XHJcbiAgICB9XHJcbiAgICAmX19pbWcge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogODUlO1xyXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDo3NjhweCkge1xyXG4gICAgLnJlY2lwZXMge1xyXG4gICAgICAgIC8vIGhlaWdodDogbWF4LWNvbnRlbnQ7XHJcbiAgICAgICAgJl9fY29udGFpbmVyIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IG1heC1jb250ZW50O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5jYXJkIHtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC5jYXJkX19pdGVtIHtcclxuICAgICAgICB3aWR0aDogNjAlO1xyXG4gICAgICAgIGhlaWdodDogNTB2dztcclxuICAgICAgICBtYXJnaW4tdG9wOiAxZW07XHJcbiAgICB9XHJcbn0iXX0= */"] });


/***/ })

}]);
//# sourceMappingURL=components-recipes-recipes-module.js.map