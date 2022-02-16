import React, { createContext, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Sidenav from '../components/Sidenav';

export const SidenavContext = createContext();

const SidenavProvider = ({ children }) => {
	const [isSideNavOpen, setIsSideNavOpen] = useState(false);
	const toggleSideNav = () => {
		setIsSideNavOpen(!isSideNavOpen);
	};

	const location = useLocation();
	useEffect(() => {
		setIsSideNavOpen(false);
	}, [location.key]);

	useEffect(() => {
		document.querySelector('.App').style = {
			overflowY: 'hidden',
			position: 'absolute',
			right: '15rem',
		};
	}, [isSideNavOpen]);

	return (
		<SidenavContext.Provider value={{ toggleSideNav, isSideNavOpen }}>
			{children}
			<Sidenav
				isSideNavOpen={isSideNavOpen}
				toggleSideNav={toggleSideNav}
			/>
		</SidenavContext.Provider>
	);
};

export default SidenavProvider;
