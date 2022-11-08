import LotoApi from "./base-service";
import authHeader from "./auth-header";
import { APIRoutes } from "../consts/routes/api-routes";

export  const getTransactions = async route => {
    try {
        const result = await LotoApi.get(route, {Headers: authHeader()});
        return result.data
    } catch (error) {
        return null;
    }
}

export const getTransaction = async id => {
    try {
        const result = await LotoApi.get(`${APIRoutes.PlayerTransactions}${id}`, {Headers: authHeader()});
        return result.data
    } catch (error) {
        return null;
    }
}

export const getTransactionsStatistics = async () => {
    try {
        const result = await LotoApi.get(APIRoutes.TransactionsStatistics, {Headers: authHeader()});
        return result.data;
    } catch (err) {
        return null;
    }
}