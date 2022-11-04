import { AppRoutes } from "./app-routes";
import Homepage from "../../pages/home";
import Register from "../../pages/register/register";
import Login from "../../pages/login/login";
import AdminBoard from "../../pages/admin-board";
import PlayerBoard from "../../pages/players-board";
import Admins from "../../components/admin-components/admins";
import Players from "../../components/admin-components/players";
import GetAdmin from "../../components/admin-components/get-admin";
import GetPlayerByAdmin from "../../components/admin-components/get-player";
import Verify from "../../components/home-components/verify";
import ProfileDetails from "../../components/player-components/profile-details";
import PlayerTickets from "../../components/player-components/player-tickets";
import SingleTicket from "../../components/player-components/tickets/single-ticket";
import PlayerTransactions from "../../components/player-components/player-transactions";
import SingleTransaction from "../../components/player-components/transactions/single-transaction";
import TicketsByAdmin from "../../components/admin-components/tickets";
import TransactionsByAdmin from "../../components/admin-components/transactions";
import BuyCredits from "../../components/player-components/buy-credits";
import CreateTicket from "../../components/player-components/tickets/create-ticket";
import WinnersBoard from "../../components/home-components/winners-board";
import ChangePassword from "../../components/player-components/change-password";
import AccountRecovery from "../../components/home-components/account-recovery";
import RequestForgotPasswordCode from "../../components/home-components/request-forgot-password-code";
import CreateTicketRegisteredPlayer from "../../components/player-components/create-ticket-registered";
import SuspendPlayer from "../../components/admin-components/suspend-player";
import DeleteAdmin from "../../components/admin-components/delete-admin";
import CreateAdmin from "../../components/admin-components/create-admin";
import CreateTicketNonregisteredPlayer from "../../components/player-components/create-ticket-nonregistered";

const CustomRoutes = [
    {
        path: '/', 
        element: <Homepage/> 
    },
    {
        path: AppRoutes.Register, 
        element: <Register/> 
    },
    {
        path: AppRoutes.Login, 
        element: <Login/> 
    },
    {
        path: AppRoutes.Admin, 
        element: <AdminBoard/> 
    },
    {
        path: AppRoutes.Player, 
        element: <PlayerBoard/> 
    },
    {
        path: AppRoutes.Admins, 
        element: <Admins/> 
    },
    {
        path: AppRoutes.Players, 
        element: <Players/> 
    },
    {
        path: `${AppRoutes.DeletePlayer}:id`,
        element: <SuspendPlayer/>
    },
    {
        path: `${AppRoutes.DeleteAdmin}:id`,
        element: <DeleteAdmin/>
    },
    {
        path: AppRoutes.CreateAdmin,
        element: <CreateAdmin/>
    },
    {
        path: AppRoutes.ChangePassword, 
        element: <ChangePassword /> 
    },
    {
        path: AppRoutes.ChangePasswordByCode, 
        element: <AccountRecovery /> 
    },
    {
        path: AppRoutes.GetForgotPasswordCode, 
        element: <RequestForgotPasswordCode /> 
    },
    {
        path: `${AppRoutes.Admins}/:id`, 
        element: <GetAdmin/> 
    },
    {
        path: `${AppRoutes.Players}/:id`, 
        element: <GetPlayerByAdmin/> 
    },
    {
        path: AppRoutes.ProfileDetails, 
        element: <ProfileDetails />},
    {
        path: AppRoutes.PlayerTickets, 
        element: <PlayerTickets/> 
    },
    {
        path: `${AppRoutes.PlayerTickets}:id`, 
        element: <SingleTicket/> 
    },
    {
        path: AppRoutes.PlayerTransactions, 
        element: <PlayerTransactions/> 
    },
    {
        path: `${AppRoutes.PlayerTransactions}:id`, 
        element: <SingleTransaction/> 
    },
    {
        path: AppRoutes.Tickets, 
        element: <TicketsByAdmin/> 
    },
    {
        path: AppRoutes.Transactions, 
        element: <TransactionsByAdmin/> 
    },
    {
        path: AppRoutes.BuyCredits, 
        element: <BuyCredits/> 
    },
    {
        path: AppRoutes.CreateTicket, 
        element: <CreateTicketRegisteredPlayer/> 
    },
    {
        path: AppRoutes.CreateTicketNonnregistered,
        element: <CreateTicketNonregisteredPlayer/>
    },
    {
        path: AppRoutes.WinnersBoard, 
        element: <WinnersBoard/>
    }
]

export default CustomRoutes;