import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const LogInLogOutToggle = props => (
    props.values.map((val, index) => (
        <Link key={index} to={val.route} style={{ textDecoration: 'none', margin: '5px' }}>
            <Button
                sx={{ backgroundColor: '#f0f0f4', color: '#0b0318' }}
                onClick={'onClick' in val ? val.onClick : null}
            >
                {val.title}
            </Button>
        </Link>
    ))
)

export { LogInLogOutToggle };