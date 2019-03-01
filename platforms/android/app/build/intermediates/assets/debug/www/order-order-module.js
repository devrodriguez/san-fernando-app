(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["order-order-module"],{

/***/ "./src/app/order/order.module.ts":
/*!***************************************!*\
  !*** ./src/app/order/order.module.ts ***!
  \***************************************/
/*! exports provided: OrderPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderPageModule", function() { return OrderPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _order_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./order.page */ "./src/app/order/order.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _order_page__WEBPACK_IMPORTED_MODULE_5__["OrderPage"]
    }
];
var OrderPageModule = /** @class */ (function () {
    function OrderPageModule() {
    }
    OrderPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_order_page__WEBPACK_IMPORTED_MODULE_5__["OrderPage"]]
        })
    ], OrderPageModule);
    return OrderPageModule;
}());



/***/ }),

/***/ "./src/app/order/order.page.html":
/*!***************************************!*\
  !*** ./src/app/order/order.page.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>Orden</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  \r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/order/order.page.scss":
/*!***************************************!*\
  !*** ./src/app/order/order.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@-webkit-keyframes fadeIn {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n@keyframes fadeIn {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n.picture-animated {\n  -webkit-animation-duration: 3s;\n          animation-duration: 3s; }\n\n.fade-in {\n  -webkit-animation-name: fadeIn;\n          animation-name: fadeIn; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3JkZXIvQzpcXHN3cHJvamVjdHNcXHNhbi1mZXJuYW5kby1hcHAvc3JjXFxhcHBcXG9yZGVyXFxvcmRlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSTtJQUFJLFVBQVUsRUFBQTtFQUNkO0lBQU0sVUFBVSxFQUFBLEVBQUE7O0FBRnBCO0VBQ0k7SUFBSSxVQUFVLEVBQUE7RUFDZDtJQUFNLFVBQVUsRUFBQSxFQUFBOztBQUduQjtFQUNJLDhCQUFzQjtVQUF0QixzQkFBc0IsRUFBQTs7QUFHMUI7RUFDSSw4QkFBc0I7VUFBdEIsc0JBQXNCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9vcmRlci9vcmRlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAa2V5ZnJhbWVzIGZhZGVJbiB7XHJcbiAgICAwJSB7b3BhY2l0eTogMDt9XHJcbiAgICAxMDAlIHtvcGFjaXR5OiAxO31cclxuIH1cclxuXHJcbiAucGljdHVyZS1hbmltYXRlZCB7XHJcbiAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAzcztcclxuIH1cclxuXHJcbiAuZmFkZS1pbiB7XHJcbiAgICAgYW5pbWF0aW9uLW5hbWU6IGZhZGVJbjtcclxuIH0iXX0= */"

/***/ }),

/***/ "./src/app/order/order.page.ts":
/*!*************************************!*\
  !*** ./src/app/order/order.page.ts ***!
  \*************************************/
/*! exports provided: OrderPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderPage", function() { return OrderPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OrderPage = /** @class */ (function () {
    function OrderPage() {
    }
    OrderPage.prototype.ngOnInit = function () { };
    OrderPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-order',
            template: __webpack_require__(/*! ./order.page.html */ "./src/app/order/order.page.html"),
            styles: [__webpack_require__(/*! ./order.page.scss */ "./src/app/order/order.page.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], OrderPage);
    return OrderPage;
}());



/***/ })

}]);
//# sourceMappingURL=order-order-module.js.map