import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { DashboardNavigationWrapper } from "../../consts/styles/dashboard/dashboard-style";

const DashboardNavigation = props => (
    <DashboardNavigationWrapper>
        {props.dashboardprops.map((propValue, index) => (
            <Link key={index} to={propValue.route} style={{ textDecoration: 'none' }}>
                <Button key={index} variant='outlined' size='large' sx={{ width: '100%', margin: '5px' }}>{propValue.title}</Button>
            </Link>
        ))}
    </DashboardNavigationWrapper>
)

export default DashboardNavigation;