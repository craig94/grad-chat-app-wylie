import { Routes, RouterModule } from '@angular/router';

import { userDashboard }      from '../components/userDashboard.component';

const appRoutes: Routes = [
    {
        path: "",
        pathMatch: "full",
        redirectTo: "users"
    },
    {
        path: "users",
        component: userDashboard
    }
];

export const routing = RouterModule.forRoot(appRoutes);
