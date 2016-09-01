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
require('rxjs/add/operator/toPromise');
var Rx_1 = require("rxjs/Rx");
var io = require("socket.io-client");
var MessagingService = (function () {
    function MessagingService() {
        this.url = "http://localhost:8080";
    }
    MessagingService.prototype.sendMsg = function (msg, chatID) {
        this.socket.emit("message", { text: msg, chatID: chatID });
    };
    MessagingService.prototype.getMsgs = function (chatID) {
        var _this = this;
        var observable = new Rx_1.Observable(function (observer) {
            _this.socket = io(_this.url + "/chat");
            _this.joinChat(chatID);
            _this.socket.on("message", function (data) {
                observer.next(data);
            });
            return function () {
                _this.socket.disconnect();
            };
        });
        return observable;
    };
    MessagingService.prototype.joinChat = function (chatID) {
        this.socket.emit("join", chatID);
    };
    MessagingService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], MessagingService);
    return MessagingService;
}());
exports.MessagingService = MessagingService;
//# sourceMappingURL=messaging.service.js.map