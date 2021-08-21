import React from 'react'
import PropTypes from 'prop-types'
import './Header.css'
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton'; // making the button clickable
import ForumIcon from '@material-ui/icons/Forum'; // Forum icon
import logo from './Tinder_logo.png' // Tinder Icon

const Header = ()=>{
	return (
		<div className='header'>
			{/*<h2>Im the header</h2>*/}

			{/* Making it a Button */}
			<IconButton>
				{/*increase size*/} 
				<PersonIcon fontSize="large" className="header_icon" /> 
			</IconButton>

			<img
				className="header_logo"
				src={logo}
				alt=""
			/>

			<IconButton>
				<ForumIcon fontSize="large" className="header_icon" />
			</IconButton>
		</div>
	)
}

export default Header