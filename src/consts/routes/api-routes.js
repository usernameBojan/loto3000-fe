export const APIRoutes = {
    BASE: 'https://localhost:7287',
    Login: 'api/v1/home/login',
    Register: 'api/v1/home/register',
    Verify: 'api/v1/home/register/verify',
    Player: 'api/v1/player/',
    GetPlayer: 'api/v1/player/get-player',
    Admin: 'api/v1/admin/',
    Players: 'api/v1/player/players',
    Admins: 'api/v1/admin/admins',
    PlayerByAdmin: 'api/v1/admin/player/',
    DeletePlayer: 'api/v1/player/delete-player/',
    DeleteAdmin: 'api/v1/admin/delete-admin/',
    CreateAdmin: 'api/v1/admin/create-admin',
    AllTransactions: 'api/v1/admin/show-transactions/',
    RegisteredPlayersTransactions: 'api/v1/admin/registered-transactions/',
    NonregisteredPlayersTransactions: 'api/v1/admin/nonregistered-transactions/',
    AllTickets: 'api/v1/admin/show-tickets/',
    ActiveTickets: 'api/v1/admin/active-tickets/',
    PastTickets: 'api/v1/admin/past-tickets/',
    RegisteredPlayersTickets: 'api/v1/admin/registered-tickets/',
    NonregisteredPlayersTickets: 'api/v1/admin/nonregistered-tickets/',
    PlayerTickets: 'api/v1/player/tickets/',
    PlayerTicket: 'api/v1/player/ticket/',
    PlayerActiveTickets: 'api/v1/player/active-tickets/',
    PlayerPastTickets: 'api/v1/player/past-tickets/',
    PlayerTransactions: 'api/v1/player/transactions/',
    WinnersBoard: 'api/v1/home/winners-board/',
    ActiveDraw: 'api/v1/draw/active-draw/',
    BuyCredits: 'api/v1/player/deposit/',
    CreateTicket: 'api/v1/player/create-ticket',
    CreateTicketNonregistered: 'api/v1/home/create-ticket-nonregistered',
    ChangePassword: 'api/v1/player/change-password',
    GetForgotPasswordCode: 'api/v1/home/forgot-password',
    ChangePasswordByCode: 'api/v1/home/change-password-with-email-code',
    DemoDraw: 'api/v1/draw/demo-draw'
}