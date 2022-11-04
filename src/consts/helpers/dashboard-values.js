import { AppRoutes } from "../routes/app-routes";

export const PlayerDashboardValues = [
    {
        title: 'My profile details',
        route: AppRoutes.ProfileDetails
    },
    {
        title: 'My Tickets',
        route: AppRoutes.PlayerTickets
    },
    {
        title: 'My Transactions',
        route: AppRoutes.PlayerTransactions
    },
    {
        title: 'Create Ticket',
        route: AppRoutes.CreateTicket
    },
    {
        title: 'Deposit',
        route: AppRoutes.BuyCredits
    }
]

export const AdminDashboardValues = [
    {
        title: 'Manage Admins',
        route: AppRoutes.Admins
    },
    {
        title: 'Manage Players',
        route: AppRoutes.Players
    },
    {
        title: 'Transactions',
        route: AppRoutes.Transactions
    },
    {
        title: 'Tickets',
        route: AppRoutes.Tickets
    }
]