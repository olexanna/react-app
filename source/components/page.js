import React from "react";
import Header from "./header";
import "../../assets/styles/page.css"


export default class Page extends React.Component{

	constructor(){
		super();
	}

	render(){
		return <Header name={this.props.name}/>
	}
}