exports.ids = [0];
exports.modules = {

/***/ 495:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = __webpack_require__(5);
var router_1 = __webpack_require__(141);
var LazyView = (function () {
    function LazyView() {
    }
    LazyView = __decorate([
        core_1.Component({
            selector: 'lazy-view',
            template: "<h3>i'm lazy</h3>"
        })
    ], LazyView);
    return LazyView;
}());
exports.LazyView = LazyView;
var LazyModule = (function () {
    function LazyModule() {
    }
    LazyModule = __decorate([
        core_1.NgModule({
            declarations: [LazyView],
            imports: [
                router_1.RouterModule.forChild([
                    { path: '', component: LazyView, pathMatch: 'full' }
                ])
            ]
        })
    ], LazyModule);
    return LazyModule;
}());
exports.LazyModule = LazyModule;
//# sourceMappingURL=lazy.module.js.map

/***/ })

};;
//# sourceMappingURL=0.server.js.map