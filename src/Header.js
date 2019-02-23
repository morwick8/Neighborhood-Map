import React, {Component} from 'react';
import logo from './logo.jpg'
import hamburger from './hamburger.png'

class Header extends React.Component {

render() {
	return(

	<div className="header-content">
		<nav className="navbar-hamburger">
			<img src={hamburger} alt="Filter Menu" height="45" width="45" />
		</nav>
		<img src={logo} alt="Sowers of Seeds Logo" height="60" width="55"/>
		<div className="navbar-title">
			<h1>Sowers of Seeds Growers</h1>
		</div>
	</div>
	)
}
}

export default Header