import React from "react";
//import "../../assets/styles/app.scss";

export default class SocialItem extends React.Component{

	constructor(){
		super();
	}

	render(){
		return(
			<span className={ "social-item" }>{ this.props.name }<img src={ "../../assets/images/social/" + this.props.icon } alt={ "" } /></span>
		)
	}
}