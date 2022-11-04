import { AppRoutes } from "../routes/app-routes";

const sharedChangePasswordValues = {
    title: 'Password Changed',
    description: 'You have successfully changed your password.'
}

const sharedTicketCreatedValues = {
    title: 'Ticket Created',
    description: 'Ticket successfully created.'
}

const sharedNavigationValues = [
    {
        route: AppRoutes.BASE,
        title: 'Go back to Homepage'
    },
    {
        route: AppRoutes.Player,
        title: 'Go back to your Dashboard'
    }
]

export const RequestCodeSuccessValues = {
    title: 'Password Recovery code sent',
    description: 'Password recovery code has been sent to your email.',
    navigation: [
        {
            route: AppRoutes.ChangePasswordByCode,
            title: 'Click here to proceed with your account recovery'
        }
    ]
}

export const ChangePasswordByCodeSuccessValues = {
    ...sharedChangePasswordValues,
    navigation: [
        {
            route: AppRoutes.Login,
            title: 'Proceed to Login'
        }
    ]
}

export const ChangePasswordSuccessValues = {
    ...sharedChangePasswordValues,
    navigation: [...sharedNavigationValues]
}

export const AdminCreatedSuccessValues = {
    title: 'Admin Created',
    description: 'Admin successfully created.',
    navigation: [
        {
            route: AppRoutes.Player,
            title: 'Go back to Dashboard'
        }
    ]
}

export const TicketCreatedSuccessValues = {
    ...sharedTicketCreatedValues,
    navigation: [
        ...sharedNavigationValues,
        {
            route: AppRoutes.CreateTicket,
            title: 'Create another ticket'
        }
    ]
}

export const NonregisteredTicketCreatedSuccessValues = {
    ...sharedTicketCreatedValues,
    navigation: [
        {
            route: AppRoutes.BASE,
            title: 'Go back to Homepage'
        },
        {
            route: AppRoutes.CreateTicketNonnregistered,
            title: 'Create another ticket'
        }
    ]
}

export const DepositSuccessValues = {
    title: 'Deposit successfull',
    description: 'Transaction successfull. Your credits have been updated.',
    navigation: [
        ...sharedNavigationValues,
        {
            route: AppRoutes.BuyCredits,
            title: 'Deposit again'
        }
    ]
}

export const AdminDeletedSuccessValues = {
    title: 'Admin deleted',
    description: 'Admin has been successfully deleted',
    navigation: [...sharedNavigationValues]
}

export const PlayerSuspendedSuccessValues = {
    title: 'Player suspended',
    description: 'Player has been successfully suspended',
    navigation: [...sharedNavigationValues]
}