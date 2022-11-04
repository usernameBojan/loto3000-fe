import LotoApi from "./base-service";

export const setAuthToken = token => token ?
    LotoApi.defaults.headers.common.Authorization = `Bearer ${token}`
    : delete LotoApi.defaults.headers.common.Authorization;