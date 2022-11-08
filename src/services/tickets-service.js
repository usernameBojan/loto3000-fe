import LotoApi from "./base-service";
import authHeader from "./auth-header";
import { APIRoutes } from "../consts/routes/api-routes";

export const getTickets = async route => {
    try {
        const result = await LotoApi.get(route, {Headers: authHeader()});
        return result.data
    } catch (error) {
        return null;
    }
}

export const getPlayerTicket = async id => {
    try {
        const result = await LotoApi.get(`${APIRoutes.PlayerTicket}${id}`, {Headers: authHeader()});
        return result.data
    } catch (error) {
        console.log(error);
        return null;
    }
}

export const getNonregisteredPlayerTicket = async id => {
    try {
        const result = await LotoApi.get(`${APIRoutes.NonregisteredPlayersTickets}${id}`, {Headers: authHeader()});
        return result.data
    } catch (error) {
        return null;
    }
}

export const getTicketsStatistics = async () => {
    try {
        const result = await LotoApi.get(APIRoutes.TicketsStatistics, {Headers: authHeader()});
        return result.data;
    } catch (err) {
        return null;
    }
}