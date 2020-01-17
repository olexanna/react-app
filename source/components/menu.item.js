import React from "react";
//import "../../assets/styles/app.scss";

export default class MenuItem extends React.Component{

	constructor( props ){
		super( props );
	}

	render(){
		return(
			<span className={ "menu-item" }>{ this.props.name }</span>
		)
	}
}