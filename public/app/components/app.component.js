"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var user_service_1 = require("../services/user.service");
var AppComponent = (function () {
    function AppComponent(service) {
        this.service = service;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.loggedIn = false;
        this.getUser();
    };
    AppComponent.prototype.getUri = function () {
        var _this = this;
        this.service.getUri().then(function (result) {
            _this.loginUri = result.uri;
        });
    };
    AppComponent.prototype.getUser = function () {
        var _this = this;
        this.service.getUser().then(function (result) {
            _this.loggedIn = true;
            _this.user = result;
            _this.getUsers();
        }).catch(function () { return _this.getUri(); });
    };
    AppComponent.prototype.getUsers = function () {
        var _this = this;
        this.service.getUsers().then(function (result) { return _this.users = result; });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            templateUrl: "templates/my-app.html",
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map