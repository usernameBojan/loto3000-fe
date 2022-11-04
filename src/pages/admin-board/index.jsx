import { AppRoutes } from "../../consts/routes/app-routes";
import { APIRoutes } from "../../consts/routes/api-routes";
import { AdminDashboardValues } from "../../consts/helpers/dashboard-values";
import Dashboard from "../../components/dashboard/dashboard";

const AdminBoard = () => <Dashboard user={APIRoutes.Admin} navigate={AppRoutes.Register} dashboardvalues={AdminDashboardValues} />

export default AdminBoard;