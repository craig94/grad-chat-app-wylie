import { Routes, RouterModule } from '@angular/router';
import { userDashboard }      from '../components/userDashboard/userDashboard.component';
import { ChatComponent }      from '../components/chat/chat.component';

const appRoutes: Routes = [
    {
        path: "",
        pathMatch: "full",
        redirectTo: "users"
    },
    {
        path: "users",
        component: userDashboard
    },
    {
        path: 'chat/:chatID',
        component: ChatComponent
    },
];

export const routing = RouterModule.forRoot(appRoutes);
