import { AppRoutes } from "../routes/app-routes"
import { LogOut } from "../../consts/helpers/log-out";

export const navbarValues = {
    shared: [
        {
            route: AppRoutes.WinnersBoard,
            title: 'WINNERS',
        }
    ],
    loggedIn: [
        {
            route: AppRoutes.CreateTicket,
            title: 'CREATE TICKET',
        },
        {
            route: AppRoutes.Player,
            title: 'DASHBOARD',
        },
        
        {
            route: AppRoutes.BASE,
            title: 'LOG OUT',
            onClick: LogOut
        }
    ],
    loggedOut: [
        {
            route: AppRoutes.CreateTicket,
            title: 'CREATE TICKET',
        },
        {
            route: AppRoutes.Register,
            title: 'REGISTER',
        },
        {
            route: AppRoutes.Login,
            title: 'LOG IN',
        }
    ]
}