import React from 'react';
import iconMoon from './icon-moon.svg';
import iconSun from './icon-sun.svg';
import './Header.css';

function Header() {
	return (
		<header className="header">
			<h1>TODO</h1>
			<img className="iconSun" src={iconSun} alt="DarkMode"></img>
			<img className="iconMoon" src={iconMoon} alt="LightMode"></img>
		</header>
	);
}

export { Header };
