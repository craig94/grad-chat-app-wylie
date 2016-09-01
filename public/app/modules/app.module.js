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
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("../components/app.component");
var selectedUser_component_1 = require("../components/userDashboard/selectedUser.component");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var user_service_1 = require("../services/user.service");
var chat_service_1 = require("../services/chat.service");
var app_routing_1 = require("../router/app.routing");
var userDashboard_component_1 = require("../components/userDashboard/userDashboard.component");
var chat_component_1 = require("../components/chat/chat.component");
var userChats_component_1 = require("../components/userChats/userChats.component");
var messaging_service_1 = require("../services/messaging.service");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            bootstrap: [app_component_1.AppComponent],
            declarations: [app_component_1.AppComponent, selectedUser_component_1.SelectedUser, userDashboard_component_1.userDashboard, chat_component_1.ChatComponent, userChats_component_1.UserChats],
            providers: [user_service_1.UserService, chat_service_1.ChatService, messaging_service_1.MessagingService],
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule, http_1.JsonpModule, app_routing_1.routing],
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map