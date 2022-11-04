import { Button } from '@mui/material';
import { Box } from '@mui/system';
import { DataGrid } from '@mui/x-data-grid';
import { React, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { adminsColumns } from '../../consts/helpers/table-columns';
import { APIRoutes } from '../../consts/routes/api-routes';
import { AppRoutes } from '../../consts/routes/app-routes';
import { AdminsTableWrapper } from '../../consts/styles/statistics-style/tables-style';
import { getUsers } from '../../services/user-service';

const Admins = () => {
    const [admins, setAdmins] = useState([]);

    useEffect(() => {
        getUsers(APIRoutes.Admins).then(admins => {
            setAdmins(admins);
        }).catch(x => console.log(x));
    }, [])

    const rows = admins.length !== 0 ? admins.map(admin => ({
        id: admin.id,
        firstName: admin.firstName,
        lastName: admin.lastName,
        fullName: admin.fullName,
        username: admin.username,
        details: admin.id
    })) : [];

    return (
        <>
            <Box sx={{display: 'flex', justifyContent: 'center', margin: '7.5% auto -2.5%'}}>
                <Link to={AppRoutes.CreateAdmin} style={{ textDecoration: 'none' }}>
                    <Button variant='filled' sx={{ backgroundColor: '#5cb85c', color: '#292b2c', width: '50rem' }}>Create Admin</Button>
                </Link>
            </Box>
            <AdminsTableWrapper>
                <DataGrid sx={{ backgroundColor: '#d0d3d5' }} pageSize={10} rowsPerPageOptions={[10]} rows={rows} columns={adminsColumns} />
            </AdminsTableWrapper>
        </>

    )
}

export default Admins;