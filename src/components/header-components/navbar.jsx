import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppBar, Button, Toolbar } from "@mui/material";
import { AppRoutes } from "../../consts/routes/app-routes";
import { LogInLogOutToggle } from "./log-in-toggle";
import { Box } from "@mui/system";
import { darkThemeIconStyle, lightThemeIconStyle, toggleStyle } from "../../consts/styles/theme/toggle-style";
import { navbarValues } from "../../consts/helpers/navbar-values";
import CasinoIcon from '@mui/icons-material/Casino';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import './../../consts/styles/theme/theme-toggle.css';

const Header = () => {
	const navigate = useNavigate();
	const token = JSON.parse(localStorage.getItem('token'));
	const [theme, setTheme] = useState('light');
	const [isLightTheme, setIsLightTheme] = useState(true);
	const [isDarkTheme, setIsDarkTheme] = useState(false);

	const toggleTheme = () => {
		theme === 'light' ? setTheme('dark') : setTheme('light');

		setIsLightTheme(current => !current);
		setIsDarkTheme(current => !current);
	}

	useEffect(() => {
		document.body.className = theme;
	}, [theme]);

	return (
		<>
			<AppBar>
				<Toolbar sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
					<CasinoIcon sx={{ transform: "scale(3)", cursor: 'pointer' }} onClick={() => navigate(AppRoutes.BASE)} />
					<Box>
						{navbarValues.shared.map((val, index) => (
							<Link key={index} to={val.route} style={{ textDecoration: 'none', margin: '5px' }}>
								<Button sx={{ backgroundColor: '#f0f0f4', color: '#0b0318' }}>{val.title}</Button>
							</Link>
						))}
						{token ? <LogInLogOutToggle values={navbarValues.loggedIn} /> : <LogInLogOutToggle values={navbarValues.loggedOut} />}
					</Box>
					<Box onClick={toggleTheme} sx={{ backgroundColor: isLightTheme ? '#e9ecf3' : '#292b2c', ...toggleStyle }}>
						<LightModeOutlinedIcon sx={{ display: isLightTheme ? 'block' : 'none', ...lightThemeIconStyle }} />
						<DarkModeOutlinedIcon sx={{ display: isDarkTheme ? 'block' : 'none', ...darkThemeIconStyle }} />
					</Box>
				</Toolbar>
			</AppBar>
		</>
	);
}

export default Header;