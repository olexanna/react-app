import React from "react";
//import "../../assets/styles/app.scss";

export default class FooterMenuItem extends React.Component{

	constructor( props ){
		super( props );
	}

	render(){
		return(
			<span className={ "footer-menu-item" }>{ this.props.name }</span>
		)
	}
}