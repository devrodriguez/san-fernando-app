(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["create-order-create-order-module"],{

/***/ "./src/app/create-order/create-order.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/create-order/create-order.module.ts ***!
  \*****************************************************/
/*! exports provided: CreateOrderPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateOrderPageModule", function() { return CreateOrderPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _create_order_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./create-order.page */ "./src/app/create-order/create-order.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _create_order_page__WEBPACK_IMPORTED_MODULE_5__["CreateOrderPage"]
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
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_create_order_page__WEBPACK_IMPORTED_MODULE_5__["CreateOrderPage"]]
        })
    ], CreateOrderPageModule);
    return CreateOrderPageModule;
}());



/***/ }),

/***/ "./src/app/create-order/create-order.page.html":
/*!*****************************************************!*\
  !*** ./src/app/create-order/create-order.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Crear Orden</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"4\">\n        <ion-list-header>\n          <h4 text-center>Detalle de Orden</h4>\n        </ion-list-header>\n        <ion-list>\n          <ion-item *ngFor=\"let product of order.products;let i = index\" class=\"picture-animated fade-in\">\n            <ion-thumbnail item-start>\n              <img [src]=\"product.image_url\">\n            </ion-thumbnail>\n            <ion-label padding-start>{{product.name}}</ion-label>\n            <ion-button item-end shape=\"round\" color=\"danger\" (click)=\"deleteOrderProduct(product, i)\">\n              <ion-icon name=\"trash\"></ion-icon>\n            </ion-button>\n          </ion-item>\n        </ion-list>\n        <ion-button color=\"danger\" expand=\"full\" (click)=\"deleteOrder()\" *ngIf=\"order.price_order > 0\">Eliminar Orden</ion-button>\n      </ion-col>\n      <ion-col size=\"8\">\n          <ion-grid>\n              <ion-row>\n                <ion-col *ngFor=\"let product of products\" size-sm=\"6\" size-md=\"4\">\n                  <ion-card class=\"picture-animated fade-in\" (click)=\"addOrderProduct(product)\" style=\"position: relative;\">\n                    <ion-badge color=\"secondary\" style=\"position: absolute;top:5px;left:5px;\">${{product.price_per_unit}}</ion-badge>\n                    <ion-img [src]=\"product.image_url\"></ion-img>\n                    <ion-card-content>\n                      <ion-card-subtitle text-center>\n                          {{product.name}}\n                      </ion-card-subtitle>\n                    </ion-card-content>\n                  </ion-card>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n<ion-footer>\n  <!--<ion-button color=\"secondary\" expand=\"full\" (click)=\"getProducts()\">Get Products</ion-button>-->\n  <ion-button color=\"secondary\" expand=\"full\" (click)=\"createOrder()\">Crear Orden ${{order.price_order}}</ion-button>\n</ion-footer>\n"

/***/ }),

/***/ "./src/app/create-order/create-order.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/create-order/create-order.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NyZWF0ZS1vcmRlci9jcmVhdGUtb3JkZXIucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/create-order/create-order.page.ts":
/*!***************************************************!*\
  !*** ./src/app/create-order/create-order.page.ts ***!
  \***************************************************/
/*! exports provided: CreateOrderPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateOrderPage", function() { return CreateOrderPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_services_product_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/product/product.service */ "./src/services/product/product.service.ts");
/* harmony import */ var src_services_order_order_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/services/order/order.service */ "./src/services/order/order.service.ts");
/* harmony import */ var src_models_order_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/models/order.model */ "./src/models/order.model.ts");
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
    function CreateOrderPage(alertController, toastController, loadingController, orderService, productService) {
        var _this = this;
        this.alertController = alertController;
        this.toastController = toastController;
        this.loadingController = loadingController;
        this.orderService = orderService;
        this.productService = productService;
        this.order = new src_models_order_model__WEBPACK_IMPORTED_MODULE_4__["Order"]();
        this.rows = [1, 2];
        this.dataLocal = false;
        this.products = new Array();
        setTimeout(function () {
            _this.getProducts();
        }, 1000);
    }
    CreateOrderPage.prototype.ngOnInit = function () {
    };
    CreateOrderPage.prototype.getProducts = function () {
        var _this = this;
        console.log('Get products');
        // Get products from API source
        /*this.productService.getProducts().subscribe((products: Array<Product>) => {
          
          products.forEach(product => {
            this.productService.addProduct(new Product(
              Number(product.id),
              product.name,
              product.code,
              product.description,
              Number(product.price_per_unit),
              product.image_url
            ));
          });
    
        },
        (error)=> {
          this.dataLocal = true;
        });*/
        // Get products from local source
        this.productService.getLocalProducts()
            .then(function (products) {
            console.log('Local products loaded');
            _this.products = products;
        });
    };
    CreateOrderPage.prototype.addOrderProduct = function (product) {
        console.log(product);
        console.log(this.order);
        this.order.price_order += product.price_per_unit;
        this.order.products.push(product);
    };
    CreateOrderPage.prototype.createOrder = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alertNoTotal, alertCreateOrder;
            var _this = this;
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
                    case 3: return [4 /*yield*/, this.alertController.create({
                            header: 'Orden',
                            subHeader: 'Informacion de su orden',
                            message: "El total de la orden es " + this.order.price_order,
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
    CreateOrderPage.prototype.deleteOrderProduct = function (product, index) {
        this.order.price_order -= product.price_per_unit;
        this.order.products.splice(index, 1);
    };
    CreateOrderPage.prototype.deleteOrder = function () {
        this.order = new src_models_order_model__WEBPACK_IMPORTED_MODULE_4__["Order"]();
    };
    CreateOrderPage.prototype.confirmOrder = function () {
        return __awaiter(this, void 0, void 0, function () {
            var toast;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.order.sale_date = new Date();
                        return [4 /*yield*/, this.toastController.create({
                                message: 'Orden creada correctamente',
                                duration: 3000
                            })];
                    case 1:
                        toast = _a.sent();
                        this.orderService.addLocalOrder(this.order)
                            .then(function (data) {
                            console.log(data);
                            _this.order = new src_models_order_model__WEBPACK_IMPORTED_MODULE_4__["Order"]();
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
    CreateOrderPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-order',
            template: __webpack_require__(/*! ./create-order.page.html */ "./src/app/create-order/create-order.page.html"),
            styles: [__webpack_require__(/*! ./create-order.page.scss */ "./src/app/create-order/create-order.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["LoadingController"],
            src_services_order_order_service__WEBPACK_IMPORTED_MODULE_3__["OrderService"],
            src_services_product_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]])
    ], CreateOrderPage);
    return CreateOrderPage;
}());



/***/ })

}]);
//# sourceMappingURL=create-order-create-order-module.js.map