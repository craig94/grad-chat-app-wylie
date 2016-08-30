"use strict";
var router_1 = require('@angular/router');
var userDashboard_component_1 = require('../components/userDashboard/userDashboard.component');
var chat_component_1 = require('../components/chat/chat.component');
var appRoutes = [
    {
        path: "",
        pathMatch: "full",
        redirectTo: "users"
    },
    {
        path: "users",
        component: userDashboard_component_1.userDashboard
    },
    {
        path: 'chat/:chatID',
        component: chat_component_1.ChatComponent
    },
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map