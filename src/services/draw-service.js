import { APIRoutes } from "../consts/routes/api-routes";
import LotoApi from "./base-service";

export const getWinnersBoard = async time => {
    try {
        const result = await LotoApi.get(APIRoutes.WinnersBoard, 
            { params: {drawTime: time} },
            { headers: { 'Content-Type': 'application/json' } });
        return result.data
    } catch (error) {
        return null;
    }
}

export const getDrawDates = async () => {
    try {
        const result = await LotoApi.get(APIRoutes.DrawDates, { headers: { 'Content-Type': 'application/json' } });
        return result.data;
    } catch (err) {
        return null;
    }
}

export const getActiveDraw = async () => {
    try {
        const result = await LotoApi.get(APIRoutes.ActiveDraw, { headers: { 'Content-Type': 'application/json' } });
        return result.data
    } catch (error) {
        return null;
    }
}

export const initiateDemoDraw = async () => {
    try {
        return await LotoApi.post(APIRoutes.DemoDraw, { headers: { 'Content-Type': 'application/json' } });
    } catch (error) {
        return null;
    }
}