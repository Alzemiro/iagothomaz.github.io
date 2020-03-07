(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["skills-skills-module"],{

/***/ "./src/app/skills/skills-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/skills/skills-routing.module.ts ***!
  \*************************************************/
/*! exports provided: SkillsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillsRoutingModule", function() { return SkillsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _skills_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./skills.component */ "./src/app/skills/skills.component.ts");





const routes = [{ path: '', component: _skills_component__WEBPACK_IMPORTED_MODULE_2__["SkillsComponent"] }];
class SkillsRoutingModule {
}
SkillsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SkillsRoutingModule });
SkillsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SkillsRoutingModule_Factory(t) { return new (t || SkillsRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SkillsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SkillsRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/skills/skills.component.ts":
/*!********************************************!*\
  !*** ./src/app/skills/skills.component.ts ***!
  \********************************************/
/*! exports provided: SkillsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillsComponent", function() { return SkillsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class SkillsComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
SkillsComponent.ɵfac = function SkillsComponent_Factory(t) { return new (t || SkillsComponent)(); };
SkillsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SkillsComponent, selectors: [["app-skills"]], decls: 2, vars: 0, template: function SkillsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "skills works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NraWxscy9za2lsbHMuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SkillsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-skills',
                templateUrl: './skills.component.html',
                styleUrls: ['./skills.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/skills/skills.module.ts":
/*!*****************************************!*\
  !*** ./src/app/skills/skills.module.ts ***!
  \*****************************************/
/*! exports provided: SkillsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillsModule", function() { return SkillsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _skills_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./skills-routing.module */ "./src/app/skills/skills-routing.module.ts");
/* harmony import */ var _skills_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./skills.component */ "./src/app/skills/skills.component.ts");





class SkillsModule {
}
SkillsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SkillsModule });
SkillsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SkillsModule_Factory(t) { return new (t || SkillsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _skills_routing_module__WEBPACK_IMPORTED_MODULE_2__["SkillsRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SkillsModule, { declarations: [_skills_component__WEBPACK_IMPORTED_MODULE_3__["SkillsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _skills_routing_module__WEBPACK_IMPORTED_MODULE_2__["SkillsRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SkillsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_skills_component__WEBPACK_IMPORTED_MODULE_3__["SkillsComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _skills_routing_module__WEBPACK_IMPORTED_MODULE_2__["SkillsRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=skills-skills-module-es2015.js.map