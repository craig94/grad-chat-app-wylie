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
var user_service_1 = require("../../services/user.service");
var router_1 = require('@angular/router');
var chat_service_1 = require('../../services/chat.service');
var UserChats = (function () {
    function UserChats(service, route, chatService) {
        this.service = service;
        this.route = route;
        this.chatService = chatService;
    }
    UserChats.prototype.ngOnInit = function () {
        this.getChats();
        this.chatsLoaded = true;
    };
    UserChats.prototype.getChats = function () {
        var _this = this;
        this.service.getChats(this.user._id).then(function (result) {
            _this.chatService.chats = result;
        });
    };
    UserChats.prototype.selectChat = function (chat) {
        this.selectedChat = chat;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', user_1.User)
    ], UserChats.prototype, "user", void 0);
    UserChats = __decorate([
        core_1.Component({
            selector: "user-chats",
            templateUrl: "templates/user-chats.html",
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService, router_1.ActivatedRoute, chat_service_1.ChatService])
    ], UserChats);
    return UserChats;
}());
exports.UserChats = UserChats;
//# sourceMappingURL=userChats.component.js.map