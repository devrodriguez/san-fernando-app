(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-create-order-create-order-module"],{

/***/ "./node_modules/@ionic-native/native-storage/ngx/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/@ionic-native/native-storage/ngx/index.js ***!
  \****************************************************************/
/*! exports provided: NativeStorage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NativeStorage", function() { return NativeStorage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/core */ "./node_modules/@ionic-native/core/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var NativeStorage = /** @class */ (function (_super) {
    __extends(NativeStorage, _super);
    function NativeStorage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NativeStorage.prototype.setItem = function (reference, value) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "setItem", {}, arguments); };
    NativeStorage.prototype.getItem = function (reference) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "getItem", {}, arguments); };
    NativeStorage.prototype.keys = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "keys", {}, arguments); };
    NativeStorage.prototype.remove = function (reference) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "remove", {}, arguments); };
    NativeStorage.prototype.clear = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "clear", {}, arguments); };
    NativeStorage.pluginName = "NativeStorage";
    NativeStorage.plugin = "cordova-plugin-nativestorage";
    NativeStorage.pluginRef = "NativeStorage";
    NativeStorage.repo = "https://github.com/TheCocoaProject/cordova-plugin-nativestorage";
    NativeStorage.platforms = ["Android", "Browser", "iOS", "macOS", "Windows"];
    NativeStorage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], NativeStorage);
    return NativeStorage;
}(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["IonicNativePlugin"]));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL25hdGl2ZS1zdG9yYWdlL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDOztJQW9DckMsaUNBQWlCOzs7O0lBUWxELCtCQUFPLGFBQUMsU0FBaUIsRUFBRSxLQUFVO0lBVXJDLCtCQUFPLGFBQUMsU0FBaUI7SUFTekIsNEJBQUk7SUFVSiw4QkFBTSxhQUFDLFNBQWlCO0lBU3hCLDZCQUFLOzs7Ozs7SUE5Q00sYUFBYTtRQUR6QixVQUFVLEVBQUU7T0FDQSxhQUFhO3dCQXJDMUI7RUFxQ21DLGlCQUFpQjtTQUF2QyxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5cblxuLyoqXG4gKiBAbmFtZSBOYXRpdmUgU3RvcmFnZVxuICogQGRlc2NyaXB0aW9uIE5hdGl2ZSBzdG9yYWdlIG9mIHZhcmlhYmxlcyBpbiBBbmRyb2lkIGFuZCBpT1NcbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IE5hdGl2ZVN0b3JhZ2UgfSBmcm9tICdAaW9uaWMtbmF0aXZlL25hdGl2ZS1zdG9yYWdlL25neCc7XG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBuYXRpdmVTdG9yYWdlOiBOYXRpdmVTdG9yYWdlKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKiB0aGlzLm5hdGl2ZVN0b3JhZ2Uuc2V0SXRlbSgnbXlpdGVtJywge3Byb3BlcnR5OiAndmFsdWUnLCBhbm90aGVyUHJvcGVydHk6ICdhbm90aGVyVmFsdWUnfSlcbiAqICAgLnRoZW4oXG4gKiAgICAgKCkgPT4gY29uc29sZS5sb2coJ1N0b3JlZCBpdGVtIScpLFxuICogICAgIGVycm9yID0+IGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHN0b3JpbmcgaXRlbScsIGVycm9yKVxuICogICApO1xuICpcbiAqIHRoaXMubmF0aXZlU3RvcmFnZS5nZXRJdGVtKCdteWl0ZW0nKVxuICogICAudGhlbihcbiAqICAgICBkYXRhID0+IGNvbnNvbGUubG9nKGRhdGEpLFxuICogICAgIGVycm9yID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpXG4gKiAgICk7XG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdOYXRpdmVTdG9yYWdlJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tbmF0aXZlc3RvcmFnZScsXG4gIHBsdWdpblJlZjogJ05hdGl2ZVN0b3JhZ2UnLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL1RoZUNvY29hUHJvamVjdC9jb3Jkb3ZhLXBsdWdpbi1uYXRpdmVzdG9yYWdlJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnQnJvd3NlcicsICdpT1MnLCAnbWFjT1MnLCAnV2luZG93cyddXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE5hdGl2ZVN0b3JhZ2UgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBTdG9yZXMgYSB2YWx1ZVxuICAgKiBAcGFyYW0gcmVmZXJlbmNlIHtzdHJpbmd9XG4gICAqIEBwYXJhbSB2YWx1ZVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzZXRJdGVtKHJlZmVyZW5jZTogc3RyaW5nLCB2YWx1ZTogYW55KTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogR2V0cyBhIHN0b3JlZCBpdGVtXG4gICAqIEBwYXJhbSByZWZlcmVuY2Uge3N0cmluZ31cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0SXRlbShyZWZlcmVuY2U6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHJpZXZpbmcgYWxsIGtleXNcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAga2V5cygpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmVzIGEgc2luZ2xlIHN0b3JlZCBpdGVtXG4gICAqIEBwYXJhbSByZWZlcmVuY2Uge3N0cmluZ31cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgcmVtb3ZlKHJlZmVyZW5jZTogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlcyBhbGwgc3RvcmVkIHZhbHVlcy5cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgY2xlYXIoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxufVxuIl19

/***/ }),

/***/ "./src/app/components/create-order/create-order.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/create-order/create-order.module.ts ***!
  \****************************************************************/
/*! exports provided: CreateOrderPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateOrderPageModule", function() { return CreateOrderPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/native-storage/ngx */ "./node_modules/@ionic-native/native-storage/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _create_order_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./create-order.page */ "./src/app/components/create-order/create-order.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        component: _create_order_page__WEBPACK_IMPORTED_MODULE_6__["CreateOrderPage"]
    }
];
var CreateOrderPageModule = /** @class */ (function () {
    function CreateOrderPageModule() {
    }
    CreateOrderPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            providers: [
                _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_4__["NativeStorage"]
            ],
            declarations: [_create_order_page__WEBPACK_IMPORTED_MODULE_6__["CreateOrderPage"]]
        })
    ], CreateOrderPageModule);
    return CreateOrderPageModule;
}());



/***/ }),

/***/ "./src/app/components/create-order/create-order.page.html":
/*!****************************************************************!*\
  !*** ./src/app/components/create-order/create-order.page.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      Crear Orden\r\n    </ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button (click)=\"getRemoteData()\">\r\n        <ion-icon slot=\"icon-only\" name=\"refresh\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-grid>\r\n    <ion-row>\r\n      <!-- Order Detail -->\r\n      <ion-col size=\"4\">\r\n        <ion-item text-center *ngIf=\"order.dishes.length > 0 || order.products > 0\">\r\n          <ion-label>Orden</ion-label>\r\n        </ion-item>\r\n        <ion-list>\r\n          <ion-item *ngFor=\"let dish of order.dishes;let i = index\" class=\"picture-animated fade-in\">\r\n            <ion-thumbnail item-start>\r\n              <img [src]=\"dish.data_img\">\r\n            </ion-thumbnail>\r\n            <ion-label padding-start>{{dish.name}}</ion-label>\r\n            <ion-button item-end shape=\"round\" color=\"danger\" (click)=\"deletePartialDishOrder(dish, i)\">\r\n              <ion-icon name=\"trash\"></ion-icon>\r\n            </ion-button>\r\n          </ion-item>\r\n          <ion-item *ngFor=\"let product of order.products;let i = index\" class=\"picture-animated fade-in\">\r\n            <ion-thumbnail item-start>\r\n              <img [src]=\"product.data_img\">\r\n            </ion-thumbnail>\r\n            <ion-label padding-start>{{product.name}}</ion-label>\r\n            <ion-button item-end shape=\"round\" color=\"danger\" (click)=\"deletePartialProductOrder(product, i)\">\r\n              <ion-icon name=\"trash\"></ion-icon>\r\n            </ion-button>\r\n          </ion-item>\r\n        </ion-list>\r\n        <ion-button color=\"danger\" expand=\"full\" (click)=\"deletePartialOrder()\" *ngIf=\"order.price_order > 0\">Eliminar Orden</ion-button>\r\n      </ion-col>\r\n      <!-- Dishes & Products -->\r\n      <ion-col size=\"8\">\r\n          <div scrollY=\"true\">\r\n            <ion-grid>\r\n                <ion-row>\r\n                  <ion-col *ngFor=\"let dish of dishes\" size=\"12\" size-sm=\"6\" size-md=\"4\">\r\n                    <ion-card class=\"picture-animated fade-in\" (click)=\"addPartialDishOrder(dish)\">\r\n                      <ion-badge color=\"success\" style=\"position: absolute;top:5px;left:5px;\">{{dish.price | currency:'COP':'$':'1.0'}}</ion-badge>\r\n                      <ion-img [src]=\"dish.data_img\"></ion-img>\r\n                      <ion-card-content>\r\n                        <ion-card-subtitle>\r\n                          {{dish.name}}\r\n                        </ion-card-subtitle>\r\n                      </ion-card-content>\r\n                    </ion-card>\r\n                  </ion-col>\r\n                  <ion-col *ngFor=\"let product of products\" size=\"12\" size-sm=\"6\" size-md=\"4\">\r\n                    <ion-card class=\"picture-animated fade-in\" (click)=\"addPartialProductOrder(product)\" style=\"position: relative;\">\r\n                      <ion-badge color=\"success\" style=\"position: absolute;top:5px;left:5px;\">{{product.price | currency:'COP':'$':'1.0'}}</ion-badge>\r\n                      <ion-img [src]=\"product.data_img\"></ion-img>\r\n                      <ion-card-content>\r\n                        <ion-card-subtitle text-center>\r\n                            {{product.name}}\r\n                        </ion-card-subtitle>\r\n                      </ion-card-content>\r\n                    </ion-card>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </ion-grid>\r\n          </div>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n<ion-footer>\r\n  <ion-button color=\"secondary\" expand=\"full\" (click)=\"createOrder()\">Crear Orden {{order.price_order | currency:'COP':'$':'1.0'}}</ion-button>\r\n</ion-footer>\r\n"

/***/ }),

/***/ "./src/app/components/create-order/create-order.page.scss":
/*!****************************************************************!*\
  !*** ./src/app/components/create-order/create-order.page.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fixed[scrollx=true], div[scrolly=true] {\n  position: relative;\n  overflow: hidden; }\n  .fixed[scrollx=true] ::-webkit-scrollbar, div[scrolly=true] ::-webkit-scrollbar {\n    display: none; }\n  .fixed[scrollx=true] {\n  overflow-x: auto; }\n  .fixed[scrolly=true] {\n  overflow-y: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jcmVhdGUtb3JkZXIvQzpcXHN3cHJvamVjdHNcXHNhbi1mZXJuYW5kby1hcHAvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGNyZWF0ZS1vcmRlclxcY3JlYXRlLW9yZGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFrQjtFQUNsQixnQkFBZ0IsRUFBQTtFQUZwQjtJQUtRLGFBQWEsRUFBQTtFQUlyQjtFQUNJLGdCQUFnQixFQUFBO0VBR3BCO0VBQ0ksZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NyZWF0ZS1vcmRlci9jcmVhdGUtb3JkZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZpeGVkW3Njcm9sbHg9dHJ1ZV0sIGRpdltzY3JvbGx5PXRydWVdIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG4gICAgOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxufVxyXG5cclxuLmZpeGVkW3Njcm9sbHg9dHJ1ZV0ge1xyXG4gICAgb3ZlcmZsb3cteDogYXV0bztcclxufVxyXG5cclxuLmZpeGVkW3Njcm9sbHk9dHJ1ZV0ge1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/create-order/create-order.page.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/create-order/create-order.page.ts ***!
  \**************************************************************/
/*! exports provided: CreateOrderPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateOrderPage", function() { return CreateOrderPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/native-storage/ngx */ "./node_modules/@ionic-native/native-storage/ngx/index.js");
/* harmony import */ var src_app_services_order_order_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/order/order.service */ "./src/app/services/order/order.service.ts");
/* harmony import */ var src_app_services_product_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/product/product.service */ "./src/app/services/product/product.service.ts");
/* harmony import */ var src_app_services_dishes_dishes_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/dishes/dishes.service */ "./src/app/services/dishes/dishes.service.ts");
/* harmony import */ var src_app_models_order_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/models/order.model */ "./src/app/models/order.model.ts");
/* harmony import */ var src_app_models_product_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/models/product.model */ "./src/app/models/product.model.ts");
/* harmony import */ var src_app_models_dish_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/models/dish.model */ "./src/app/models/dish.model.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var src_app_services_media_image_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/media/image.service */ "./src/app/services/media/image.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};












var CreateOrderPage = /** @class */ (function () {
    function CreateOrderPage(alertController, toastController, loadingController, nativeStorage, orderService, productService, dishesService, imageService, actionSheetController) {
        this.alertController = alertController;
        this.toastController = toastController;
        this.loadingController = loadingController;
        this.nativeStorage = nativeStorage;
        this.orderService = orderService;
        this.productService = productService;
        this.dishesService = dishesService;
        this.imageService = imageService;
        this.actionSheetController = actionSheetController;
        this.order = new src_app_models_order_model__WEBPACK_IMPORTED_MODULE_6__["Order"]();
        this.dataLocal = false;
        this.products = [];
        this.dishes = [];
    }
    CreateOrderPage.prototype.ngOnInit = function () {
        var _this = this;
        this.loadingOn()
            .then(function () {
            Promise.all([
                _this.getLocalProducts(),
                _this.getLocalDishes()
            ])
                .then(function (data) {
                console.log(data);
            })
                .catch(function (err) {
                console.error('Error on load data');
            })
                .finally(function () {
                _this.loadingOff();
            });
        });
    };
    CreateOrderPage.prototype.getRemoteData = function () {
        var _this = this;
        this.loadingOn()
            .then(function () { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Promise.all([
                            this.getRemoteDishes(),
                            this.getRemoteProducts()
                        ])
                            .then(function () {
                            _this.loadingOff();
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); })
            .finally(function () {
            _this.loadingOff();
        });
    };
    CreateOrderPage.prototype.getRemoteDishes = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.dishesService.getDishes().subscribe(function (dishes) { return __awaiter(_this, void 0, void 0, function () {
                            var _this = this;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this.dishesService.deleteDishes()
                                            .then(function () { return __awaiter(_this, void 0, void 0, function () {
                                            var promises;
                                            var _this = this;
                                            return __generator(this, function (_a) {
                                                switch (_a.label) {
                                                    case 0:
                                                        promises = [];
                                                        dishes.forEach(function (dish) { return __awaiter(_this, void 0, void 0, function () {
                                                            return __generator(this, function (_a) {
                                                                promises.push(this.dishesService.addDish(new src_app_models_dish_model__WEBPACK_IMPORTED_MODULE_8__["DishModel"](dish.id, dish.name, dish.price, dish.img_url)));
                                                                // Add local storage image
                                                                this.nativeStorage.setItem(dish.code, dish.data_img)
                                                                    .then(function () {
                                                                    console.log('Dish stored' + dish.code);
                                                                })
                                                                    .catch(function (err) {
                                                                    console.log(err);
                                                                });
                                                                return [2 /*return*/];
                                                            });
                                                        }); });
                                                        return [4 /*yield*/, Promise.all(promises)
                                                                .then(function (data) { return __awaiter(_this, void 0, void 0, function () {
                                                                return __generator(this, function (_a) {
                                                                    switch (_a.label) {
                                                                        case 0: return [4 /*yield*/, this.getLocalDishes()];
                                                                        case 1:
                                                                            _a.sent();
                                                                            return [2 /*return*/];
                                                                    }
                                                                });
                                                            }); })];
                                                    case 1:
                                                        _a.sent();
                                                        return [2 /*return*/];
                                                }
                                            });
                                        }); })];
                                    case 1:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); }, function (error) {
                            console.error(error);
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CreateOrderPage.prototype.getRemoteProducts = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    // Get products from API source    
                    return [4 /*yield*/, this.productService.getProducts().subscribe(function (products) { return __awaiter(_this, void 0, void 0, function () {
                            var _this = this;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this.productService.deleteProducts()
                                            .then(function () { return __awaiter(_this, void 0, void 0, function () {
                                            var promises;
                                            var _this = this;
                                            return __generator(this, function (_a) {
                                                switch (_a.label) {
                                                    case 0:
                                                        promises = [];
                                                        products.forEach(function (product) {
                                                            promises.push(_this.productService.addProduct(new src_app_models_product_model__WEBPACK_IMPORTED_MODULE_7__["Product"](product.id, product.name, product.code, product.description, product.price, product.img_url)));
                                                            // Add local storage image
                                                            _this.nativeStorage.setItem(product.code, product.data_img)
                                                                .then(function () {
                                                                console.log('Product stored' + product.code);
                                                            })
                                                                .catch(function (err) {
                                                                console.log(err);
                                                            });
                                                        });
                                                        return [4 /*yield*/, Promise.all(promises)
                                                                .then(function (data) { return __awaiter(_this, void 0, void 0, function () {
                                                                return __generator(this, function (_a) {
                                                                    switch (_a.label) {
                                                                        case 0: return [4 /*yield*/, this.getLocalProducts()];
                                                                        case 1:
                                                                            _a.sent();
                                                                            return [2 /*return*/];
                                                                    }
                                                                });
                                                            }); })];
                                                    case 1:
                                                        _a.sent();
                                                        return [2 /*return*/];
                                                }
                                            });
                                        }); })
                                            .catch(function (err) {
                                            console.log(err);
                                        })];
                                    case 1:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); }, function (error) {
                            _this.loadingOff();
                        })];
                    case 1:
                        // Get products from API source    
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CreateOrderPage.prototype.getLocalProducts = function () {
        return __awaiter(this, void 0, void 0, function () {
            var promises;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        promises = [];
                        // Get products from local source
                        return [4 /*yield*/, this.productService.getLocalProducts()
                                .then(function (products) { return __awaiter(_this, void 0, void 0, function () {
                                var _this = this;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, this.products.forEach(function (product) {
                                                promises.push(_this.nativeStorage.getItem(product.code));
                                            })];
                                        case 1:
                                            _a.sent();
                                            return [4 /*yield*/, Promise.all(promises)
                                                    .then(function (data) {
                                                    _this.products = products;
                                                    for (var i = 0; i <= _this.products.length; i++) {
                                                        _this.products[i].data_img = 'data:image/png;base64,' + data[i];
                                                    }
                                                })
                                                    .catch(function (err) {
                                                    console.error(err);
                                                })];
                                        case 2:
                                            _a.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            }); })
                                .catch(function (err) {
                                console.error(err);
                            })];
                    case 1:
                        // Get products from local source
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CreateOrderPage.prototype.getLocalDishes = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.dishesService.getLocalDishes()
                            .then(function (dishes) { return __awaiter(_this, void 0, void 0, function () {
                            var _this = this;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this.dishes.forEach(function (dish) { return __awaiter(_this, void 0, void 0, function () {
                                            var _this = this;
                                            return __generator(this, function (_a) {
                                                switch (_a.label) {
                                                    case 0: return [4 /*yield*/, this.nativeStorage.getItem(dish.code)
                                                            .then(function (item) { return __awaiter(_this, void 0, void 0, function () {
                                                            return __generator(this, function (_a) {
                                                                dish.data_img = "data:imagepng;base64," + item;
                                                                return [2 /*return*/];
                                                            });
                                                        }); })];
                                                    case 1:
                                                        _a.sent();
                                                        return [2 /*return*/];
                                                }
                                            });
                                        }); })];
                                    case 1:
                                        _a.sent();
                                        this.dishes = dishes;
                                        return [2 /*return*/];
                                }
                            });
                        }); })
                            .catch(function (err) {
                            console.error(err);
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CreateOrderPage.prototype.addPartialProductOrder = function (product) {
        this.order.price_order += product.price;
        this.order.products.push(product);
    };
    CreateOrderPage.prototype.addPartialDishOrder = function (dish) {
        this.order.price_order += dish.price;
        this.order.dishes.push(dish);
    };
    CreateOrderPage.prototype.createOrder = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alertNoTotal;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.order.price_order <= 0)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.alertController.create({
                                header: 'Orden',
                                message: 'Seleccione por lo menos un producto',
                                buttons: ['Aceptar']
                            })];
                    case 1:
                        alertNoTotal = _a.sent();
                        return [4 /*yield*/, alertNoTotal.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                    case 3:
                        /*
                        const alertCreateOrder = await this.alertController.create({
                          header: 'Orden',
                          subHeader: 'Informacion de su orden',
                          message: `El total de la orden es ${this.currencyPipe.transform(this.order.price_order, 'COP', '$', '1.0')}`,
                          buttons: [
                            {
                              text: 'Aceptar',
                              cssClass: 'primary',
                              handler: () => {
                                this.confirmOrder();
                              }
                            },
                            {
                              cssClass: 'secondary',
                              text: 'Cancel',
                              role: 'cancel'
                            }
                          ]
                        });
                    
                        await alertCreateOrder.present();
                        */
                        this.presentActionSheet();
                        return [2 /*return*/];
                }
            });
        });
    };
    CreateOrderPage.prototype.alertDeliver = function () {
        return __awaiter(this, void 0, void 0, function () {
            var deliver;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Domiciliario',
                            message: 'Seleccione la empresa de domicilios',
                            buttons: [
                                {
                                    text: 'Crear',
                                    handler: function () {
                                        _this.confirmOrder();
                                    }
                                }
                            ],
                            inputs: [
                                {
                                    name: 'Rappi',
                                    type: 'radio'
                                }
                            ]
                        })];
                    case 1:
                        deliver = _a.sent();
                        deliver.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    CreateOrderPage.prototype.deletePartialProductOrder = function (product, index) {
        this.order.price_order -= product.price;
        this.order.products.splice(index, 1);
    };
    CreateOrderPage.prototype.deletePartialDishOrder = function (dish, index) {
        this.order.price_order -= dish.price;
        this.order.dishes.splice(index, 1);
    };
    CreateOrderPage.prototype.deletePartialOrder = function () {
        this.order = new src_app_models_order_model__WEBPACK_IMPORTED_MODULE_6__["Order"]();
    };
    CreateOrderPage.prototype.confirmOrder = function () {
        return __awaiter(this, void 0, void 0, function () {
            var toast;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.order.sale_date = moment__WEBPACK_IMPORTED_MODULE_10__().format('YYYY-MM-DD hh:mm:ss');
                        return [4 /*yield*/, this.toastController.create({
                                message: 'Orden creada correctamente',
                                duration: 5000
                            })];
                    case 1:
                        toast = _a.sent();
                        this.orderService.addLocalOrder(this.order)
                            .then(function (data) {
                            _this.order = new src_app_models_order_model__WEBPACK_IMPORTED_MODULE_6__["Order"]();
                            toast.present();
                        })
                            .catch(function (err) {
                            console.log(err);
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    CreateOrderPage.prototype.loadingOn = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.loadingController.create({
                                message: 'Cargando'
                            })];
                    case 1:
                        _a.loading = _b.sent();
                        return [4 /*yield*/, this.loading.present()];
                    case 2: return [2 /*return*/, _b.sent()];
                }
            });
        });
    };
    CreateOrderPage.prototype.loadingOff = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loading.dismiss()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    CreateOrderPage.prototype.presentActionSheet = function () {
        return __awaiter(this, void 0, void 0, function () {
            var actionSheet;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetController.create({
                            header: 'Metodo Pago',
                            buttons: [
                                {
                                    text: 'Efectivo',
                                    icon: 'cash',
                                    handler: function () {
                                        _this.order.payment_method = 'E';
                                        _this.confirmOrder();
                                    }
                                },
                                {
                                    text: 'Tarjeta',
                                    icon: 'card',
                                    handler: function () {
                                        _this.order.payment_method = 'T';
                                        _this.confirmOrder();
                                    }
                                },
                                {
                                    text: 'Domicilio',
                                    icon: 'bicycle',
                                    handler: function () {
                                        _this.order.payment_method = 'D';
                                        _this.alertDeliver();
                                    }
                                },
                                {
                                    text: 'Cancelar',
                                    icon: 'close',
                                    role: 'cancel'
                                }
                            ]
                        })];
                    case 1:
                        actionSheet = _a.sent();
                        return [4 /*yield*/, actionSheet.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CreateOrderPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-order',
            template: __webpack_require__(/*! ./create-order.page.html */ "./src/app/components/create-order/create-order.page.html"),
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["CurrencyPipe"]],
            styles: [__webpack_require__(/*! ./create-order.page.scss */ "./src/app/components/create-order/create-order.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["LoadingController"],
            _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_2__["NativeStorage"],
            src_app_services_order_order_service__WEBPACK_IMPORTED_MODULE_3__["OrderService"],
            src_app_services_product_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"],
            src_app_services_dishes_dishes_service__WEBPACK_IMPORTED_MODULE_5__["DishesService"],
            src_app_services_media_image_service__WEBPACK_IMPORTED_MODULE_11__["ImageService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ActionSheetController"]])
    ], CreateOrderPage);
    return CreateOrderPage;
}());



/***/ }),

/***/ "./src/app/services/media/image.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/media/image.service.ts ***!
  \*************************************************/
/*! exports provided: ImageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageService", function() { return ImageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var src_app_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/util */ "./src/app/util.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ImageService = /** @class */ (function () {
    function ImageService() {
        this.util = new src_app_util__WEBPACK_IMPORTED_MODULE_2__["Util"]();
    }
    ImageService.prototype.getBase64ImageFromURL = function (resName) {
        var _this = this;
        return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].create(function (observer) {
            var img = new Image();
            img.crossOrigin = 'Anonymous';
            img.src = _this.util.storageUrl + "/" + resName;
            console.log(_this.util.storageUrl + "/" + resName);
            if (!img.complete) {
                img.onload = function () {
                    observer.next(_this.base64Image(img));
                    observer.complete();
                };
                img.onerror = function (error) {
                    observer.error(error);
                };
            }
            else {
                observer.next(_this.base64Image(img));
                observer.complete();
            }
        });
    };
    ImageService.prototype.base64Image = function (img) {
        var canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
        var context = canvas.getContext('2d');
        context.drawImage(img, 0, 0);
        var dataURL = canvas.toDataURL('image/png');
        return dataURL;
    };
    ImageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ImageService);
    return ImageService;
}());



/***/ })

}]);
//# sourceMappingURL=components-create-order-create-order-module.js.map