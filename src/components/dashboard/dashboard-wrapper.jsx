import { Alert, Typography } from "@mui/material"
import { DashboardContainer, DashboardInnerWrapper } from "../../consts/styles/dashboard/dashboard-style"
import DashboardNavigation from "./dashboard-navigation"

const DashboardWrapper = props => (
    <DashboardContainer>
        <DashboardInnerWrapper>
            <Alert variant="filled" severity="info" sx={{ width: '75%', margin: '12.5px auto' }}>
                <Typography><strong>{props.name}</strong></Typography>
            </Alert>
            <DashboardNavigation dashboardprops={props.dashboardValues} />
        </DashboardInnerWrapper>
    </DashboardContainer>
)

export default DashboardWrapper;