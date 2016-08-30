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
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var chat_service_1 = require('./chat.service');
var UserService = (function () {
    function UserService(http, chatService) {
        this.http = http;
        this.chatService = chatService;
        this.url = "/api/user";
        this.uriUrl = "/api/oauth/uri";
    }
    UserService.prototype.getUser = function () {
        return this.http.get(this.url)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    UserService.prototype.getUsers = function () {
        return this.http.get(this.url + "s")
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    UserService.prototype.getUri = function () {
        return this.http.get(this.uriUrl)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    UserService.prototype.getOtherUser = function (id) {
        var userUrl = this.url + "/" + id;
        return this.http.get(userUrl)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    UserService.prototype.getChats = function (userID) {
        var chatsUrl = "/api/getchats/" + userID;
        return this.http.get(chatsUrl)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    UserService.prototype.createChat = function (user, selectedUser) {
        var chatsUrl = "/api/newchat";
        var body = JSON.stringify({ "user": user, "selectedUser": selectedUser });
        var headers = new http_1.Headers({ "Content-Type": "application/json" });
        return this.http.post(chatsUrl, body, { headers: headers })
            .toPromise()
            .then(function (response) { return response; })
            .catch(this.handleError);
    };
    UserService.prototype.handleError = function (error) {
        return Promise.reject(error.message || error);
    };
    UserService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, chat_service_1.ChatService])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map