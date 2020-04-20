import React from "react";
import "../../assets/styles/header.scss"


export default class Header extends React.Component{

	constructor( props ){
		super( props );

		this.btnMenu = React.createRef();
	}

	render(){
		return(
				<header className={"header"}>
					<div className={"header-bg"}></div>

					<div className={"btn-menu-header"}></div>

					<p className={"title-company"}>Coffee Cafe</p>
					<p className={"menu"}>
						<span>HOME</span>
						<span>ABOUT</span>
						<span>MENU</span>
						<span>NEWS</span>
						<span>GALLERY</span>
						<span>CONTACTS</span>
					</p>
				</header>
		)
	}
}