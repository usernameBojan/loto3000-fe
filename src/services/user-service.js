import LotoApi from "./base-service";
import authHeader from "./auth-header";
import { APIRoutes } from "../consts/routes/api-routes";

export const getUsers = async route => {
    try {
        const result = await LotoApi.get(route, { Headers: authHeader() });
        return result.data
    } catch (err) {
        return null;
    }
}

export const getPlayerByAdmin = async id => {
    try {
        const result = await LotoApi.get(`${APIRoutes.PlayerByAdmin}${id}`, { Headers: authHeader() });
        return result.data
    } catch (err) {
        return null;
    }
}

export const getAdmin = async id => {
    try {
        const result = await LotoApi.get(`${APIRoutes.Admin}${id}`, { Headers: authHeader() });
        return result.data
    } catch (err) {
        return null;
    }
}

export const createAdmin = async inputs => {
    try {
        return await LotoApi.post(APIRoutes.CreateAdmin,
            JSON.stringify(inputs),
            {
                headers: authHeader(),
                headers: { 'Content-Type': 'application/json' }
            }
        )
    } catch (err) {
        return null;
    }
}

export const accountRecovery = async inputs => {
    try {
        return await LotoApi.post(APIRoutes.ChangePasswordByCode,
            JSON.stringify(inputs),
            { headers: { 'Content-Type': 'application/json' } }
        );
    } catch (err) {
        return null;
    }
}

export const changePassword = async inputs => {
    try {
        return await LotoApi.post(APIRoutes.ChangePassword,
            JSON.stringify(inputs),
            { headers: {'Content-Type': 'application/json'} }
        );
    } catch (err) {
        return null;
    }
}

export const requestCode = async input => {
    try {
        return await LotoApi.post(APIRoutes.GetForgotPasswordCode,
            JSON.stringify({ input }),
            { headers: { 'Content-Type': 'application/json' } }
        );
    } catch (err) {
        return null;
    }
}

export const getPlayerTicketsStatistics = async () => {
    try {
        const result = await LotoApi.get(APIRoutes.PlayerTicketsStatistics, { Headers: authHeader() }); 
        return result.data;
    } catch (err) {
        return null;
    }
}

export const getPlayerTransactionsStatistics = async () => {
    try {
        const result = await LotoApi.get(APIRoutes.PlayerTransactionsStatistics, { Headers: authHeader() }); 
        return result.data;
    } catch (err) {
        return null;
    }
}

export const deleteUser = async (route, id) => {
    try {
        return await LotoApi.delete(`${route}${id}`, { Headers: authHeader() });
    } catch (err) {
        return null;
    }
}