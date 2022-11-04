import { AppRoutes } from "../routes/app-routes";

export const LogOut = () => {
    localStorage.clear();
    window.location.reload();
    window.location.href = AppRoutes.BASE;
};