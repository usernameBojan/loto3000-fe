import { AppRoutes } from "../../consts/routes/app-routes";
import { APIRoutes } from "../../consts/routes/api-routes";
import { PlayerDashboardValues } from "../../consts/helpers/dashboard-values";
import Dashboard from "../../components/dashboard/dashboard";

const PlayerBoard = () => <Dashboard user={APIRoutes.Player} navigate={AppRoutes.Admin} dashboardvalues={PlayerDashboardValues} />

export default PlayerBoard;