import React from "react";
import "../../assets/styles/header.css"


export default class Header extends React.Component{

	constructor(){
		super();
	}

	render(){
		return <div className={"header text"}>Hello { this.props.name }word!</div>
	}
}