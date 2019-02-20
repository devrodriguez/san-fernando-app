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

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>order</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"4\">\n        <ion-list-header>\n          <h2 text-center>Detalle de Orden</h2>\n        </ion-list-header>\n        <ion-list>\n          <ion-item *ngFor=\"let product of order;let i = index\" class=\"picture-animated fade-in\">\n            <ion-thumbnail item-start>\n              <img [src]=\"product.picture_url\">\n            </ion-thumbnail>\n            <ion-label padding-start>{{product.name}}</ion-label>\n            <ion-button item-end shape=\"round\" color=\"danger\" (click)=\"deleteOrderProduct(product, i)\">\n              <ion-icon name=\"trash\"></ion-icon>\n            </ion-button>\n          </ion-item>\n        </ion-list>\n        <ion-button color=\"danger\" expand=\"full\" (click)=\"deleteOrder()\" *ngIf=\"totalOrder > 0\">Eliminar Orden</ion-button>\n      </ion-col>\n      <ion-col size=\"8\">\n          <ion-grid>\n              <ion-row *ngFor=\"let row of rows\">\n                <ion-col *ngFor=\"let product of products\" size-sm=\"6\" size-md=\"4\">\n                  <ion-card class=\"picture-animated fade-in\" (click)=\"addProduct(product)\" style=\"position: relative;\">\n                    <ion-badge color=\"secondary\" style=\"position: absolute;top:5px;left:5px;\">${{product.price_per_unit}}</ion-badge>\n                    <ion-img [src]=\"product.picture_url\"></ion-img>\n                    <ion-card-content>\n                      <ion-card-subtitle text-center>\n                          {{product.name}}\n                      </ion-card-subtitle>\n                    </ion-card-content>\n                  </ion-card>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n<ion-footer>\n  <ion-button expand=\"full\" (click)=\"createOrder()\">Crear Orden ${{totalOrder}}</ion-button>\n</ion-footer>\n"

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
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_services_product_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/product/product.service */ "./src/services/product/product.service.ts");
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



var OrderPage = /** @class */ (function () {
    function OrderPage(alertController, toastController, productService) {
        this.alertController = alertController;
        this.toastController = toastController;
        this.productService = productService;
        this.totalOrder = 0;
        this.order = [];
        this.rows = [1, 2];
        this.products = new Array();
        this.getProducs();
    }
    OrderPage.prototype.ngOnInit = function () {
    };
    OrderPage.prototype.getProducs = function () {
        var _this = this;
        this.productService.getProducts().subscribe(function (products) {
            _this.products = products;
        });
        this.productService.getLocalProducts();
    };
    OrderPage.prototype.addProduct = function (product) {
        this.totalOrder += parseFloat(product.price_per_unit);
        this.order.push(product);
    };
    OrderPage.prototype.createOrder = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alertNoTotal, alertCreateOrder;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.totalOrder <= 0)) return [3 /*break*/, 3];
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
                    case 3: return [4 /*yield*/, this.alertController.create({
                            header: 'Orden',
                            subHeader: 'Informacion de su orden',
                            message: "El total de la orden es " + this.totalOrder,
                            buttons: [
                                {
                                    text: 'Aceptar',
                                    cssClass: 'primary',
                                    handler: function () {
                                        _this.confirmOrder();
                                    }
                                },
                                {
                                    cssClass: 'secondary',
                                    text: 'Cancel',
                                    role: 'cancel'
                                }
                            ]
                        })];
                    case 4:
                        alertCreateOrder = _a.sent();
                        return [4 /*yield*/, alertCreateOrder.present()];
                    case 5:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    OrderPage.prototype.deleteOrderProduct = function (product, index) {
        this.totalOrder -= parseFloat(product.price_per_unit);
        this.order.splice(index, 1);
    };
    OrderPage.prototype.deleteOrder = function () {
        this.totalOrder = 0;
        this.order = [];
    };
    OrderPage.prototype.confirmOrder = function () {
        return __awaiter(this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.totalOrder = 0;
                        this.order = [];
                        return [4 /*yield*/, this.toastController.create({
                                message: 'Orden creada correctamente',
                                duration: 3000
                            })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    OrderPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-order',
            template: __webpack_require__(/*! ./order.page.html */ "./src/app/order/order.page.html"),
            styles: [__webpack_require__(/*! ./order.page.scss */ "./src/app/order/order.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ToastController"],
            src_services_product_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]])
    ], OrderPage);
    return OrderPage;
}());



/***/ })

}]);
//# sourceMappingURL=order-order-module.js.map