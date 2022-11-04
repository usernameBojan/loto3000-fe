import axios from "axios";
import { APIRoutes } from "../consts/routes/api-routes";

const LotoApi = axios.create({ 
    baseURL: APIRoutes.BASE,
    withCredentials: true
});

export default LotoApi