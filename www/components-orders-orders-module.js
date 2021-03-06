(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-orders-orders-module"],{

/***/ "./src/app/components/orders/orders.module.ts":
/*!****************************************************!*\
  !*** ./src/app/components/orders/orders.module.ts ***!
  \****************************************************/
/*! exports provided: OrdersPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersPageModule", function() { return OrdersPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _orders_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./orders.page */ "./src/app/components/orders/orders.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _orders_page__WEBPACK_IMPORTED_MODULE_5__["OrdersPage"]
    }
];
var OrdersPageModule = /** @class */ (function () {
    function OrdersPageModule() {
    }
    OrdersPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_orders_page__WEBPACK_IMPORTED_MODULE_5__["OrdersPage"]]
        })
    ], OrdersPageModule);
    return OrdersPageModule;
}());



/***/ }),

/***/ "./src/app/components/orders/orders.page.html":
/*!****************************************************!*\
  !*** ./src/app/components/orders/orders.page.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>Ordenes</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button (click)=\"uploadOrders()\">\r\n        <ion-icon slot=\"icon-only\" name=\"cloud-upload\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-item>\r\n    <ion-label>Fecha</ion-label>\r\n    <ion-datetime display-format=\"DD/MM/YYYY\" cancelText=\"Cancelar\" [(ngModel)]=\"orderDate\" (ionChange)=\"dateChange($event)\"></ion-datetime>\r\n  </ion-item>\r\n  <ion-list>\r\n    <ion-item *ngFor=\"let order of orders\" (click)=\"showDetail(order)\">\r\n      <ion-icon [name]=\"order.payment_method == 'E' ? 'cash' : order.payment_method == 'T' ? 'card' : 'bicycle'\" slot=\"start\"></ion-icon>\r\n      <ion-label>{{order.sale_date}}</ion-label>\r\n      <ion-badge>{{order.carrier}}</ion-badge>\r\n      <p slot=\"end\">{{order.price | currency:'COP':'$':'1.0'}}</p>\r\n    </ion-item>\r\n  </ion-list>\r\n</ion-content>\r\n<ion-footer>\r\n  <h1 class=\"ion-text-center\">{{totalSale | currency:'COP':'$':'1.0'}}</h1>\r\n</ion-footer>\r\n"

/***/ }),

/***/ "./src/app/components/orders/orders.page.scss":
/*!****************************************************!*\
  !*** ./src/app/components/orders/orders.page.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvb3JkZXJzL29yZGVycy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/orders/orders.page.ts":
/*!**************************************************!*\
  !*** ./src/app/components/orders/orders.page.ts ***!
  \**************************************************/
/*! exports provided: OrdersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersPage", function() { return OrdersPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_app_services_order_order_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/order/order.service */ "./src/app/services/order/order.service.ts");
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





var OrdersPage = /** @class */ (function () {
    function OrdersPage(orderService, router, loadingController, toastCtrl) {
        this.orderService = orderService;
        this.router = router;
        this.loadingController = loadingController;
        this.toastCtrl = toastCtrl;
        this.orders = new Array();
        this.orderDate = moment__WEBPACK_IMPORTED_MODULE_3__().toISOString();
        this.totalSale = 0;
    }
    OrdersPage.prototype.ngOnInit = function () {
        var _this = this;
        this.loadingOn()
            .then(function () {
            _this.getOrders(moment__WEBPACK_IMPORTED_MODULE_3__().format('YYYY-MM-DD'));
        });
    };
    OrdersPage.prototype.getOrders = function (date) {
        var _this = this;
        this.orderService.getLocalOrders(date)
            .then(function (orders) {
            _this.orders = orders;
            _this.totalSale = orders.reduce(function (preOrder, curOrder, indice, vector) {
                return preOrder + curOrder.price;
            }, 0);
            _this.loadingOff();
        })
            .catch(function (err) {
            console.error(err);
        });
    };
    OrdersPage.prototype.showDetail = function (order) {
        this.router.navigate(['order', { orderId: order.id }]);
    };
    OrdersPage.prototype.dateChange = function (event) {
        var date = moment__WEBPACK_IMPORTED_MODULE_3__(event.detail.value, 'YYYY-MM-DD').format('YYYY-MM-DD');
        this.getOrders(date);
    };
    OrdersPage.prototype.loadingOn = function () {
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
    OrdersPage.prototype.loadingOff = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loading.dismiss()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    OrdersPage.prototype.uploadOrders = function () {
        return __awaiter(this, void 0, void 0, function () {
            var promises, toast;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        promises = [];
                        return [4 /*yield*/, this.toastCtrl.create({
                                message: 'Ordenes subidas correctamente',
                                duration: 5000
                            })];
                    case 1:
                        toast = _a.sent();
                        this.orders.forEach(function (order) {
                            console.log(order);
                            promises.push(_this.orderService.uploadOrders(order).subscribe());
                        });
                        return [4 /*yield*/, Promise.all(promises)
                                .then(function (result) { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    console.log('Orders uploaded', result);
                                    toast.present();
                                    return [2 /*return*/];
                                });
                            }); })
                                .catch(function (err) {
                                console.error(err);
                            })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    OrdersPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-orders',
            template: __webpack_require__(/*! ./orders.page.html */ "./src/app/components/orders/orders.page.html"),
            styles: [__webpack_require__(/*! ./orders.page.scss */ "./src/app/components/orders/orders.page.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_order_order_service__WEBPACK_IMPORTED_MODULE_4__["OrderService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]])
    ], OrdersPage);
    return OrdersPage;
}());



/***/ })

}]);
//# sourceMappingURL=components-orders-orders-module.js.map