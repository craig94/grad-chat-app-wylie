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
var user_service_1 = require("../../services/user.service");
var router_1 = require("@angular/router");
var ChatComponent = (function () {
    function ChatComponent(service, route) {
        this.service = service;
        this.route = route;
    }
    ChatComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getUser();
        this.route.params.forEach(function (params) {
            _this.chatID = params["chatID"];
        });
        this.getChatDetails(this.chatID);
    };
    ChatComponent.prototype.getUser = function () {
        var _this = this;
        this.service.getUser().then(function (result) { return _this.user = result; });
    };
    ChatComponent.prototype.getChatDetails = function (id) {
        var _this = this;
        this.service.getChatDetails(id).then(function (result) { return _this.convo = result; });
    };
    ChatComponent = __decorate([
        core_1.Component({
            selector: "user-chat",
            templateUrl: "templates/user-chat.html",
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService, router_1.ActivatedRoute])
    ], ChatComponent);
    return ChatComponent;
}());
exports.ChatComponent = ChatComponent;
//# sourceMappingURL=chat.component.js.map