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
var user_1 = require("../../objects/user");
var router_1 = require("@angular/router");
var user_service_1 = require("../../services/user.service");
var SelectedUser = (function () {
    function SelectedUser(router, service) {
        this.router = router;
        this.service = service;
    }
    SelectedUser.prototype.chat = function () {
        var link = ["/users", this.user._id];
        this.router.navigate(link);
    };
    SelectedUser.prototype.createChat = function () {
        this.service.createChat(this.user, this.selectedUser).then(function (result) { return result; }).catch(function (error) { return error; });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', user_1.User)
    ], SelectedUser.prototype, "user", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', user_1.User)
    ], SelectedUser.prototype, "selectedUser", void 0);
    SelectedUser = __decorate([
        core_1.Component({
            selector: "user-detail",
            templateUrl: "templates/user-detail.html",
        }), 
        __metadata('design:paramtypes', [router_1.Router, user_service_1.UserService])
    ], SelectedUser);
    return SelectedUser;
}());
exports.SelectedUser = SelectedUser;
//# sourceMappingURL=selectedUser.component.js.map