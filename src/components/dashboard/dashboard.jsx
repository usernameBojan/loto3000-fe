import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUsers } from "../../services/user-service";
import DashboardWrapper from "../../components/dashboard/dashboard-wrapper";

const Dashboard = props => {
    const [dashboard, setDashboard] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getUsers(props.user).then(dashboard => {
            setDashboard(dashboard);
        }).catch(x => console.log(x));
    }, [props.user])

    if(dashboard === null) navigate(props.navigate);
    return <DashboardWrapper dashboardValues={props.dashboardvalues} name={dashboard} />
}

export default Dashboard;