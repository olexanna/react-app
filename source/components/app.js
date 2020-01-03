import React from "react";
import Header from "./header";
import Footer from "./footer";
import "../../assets/styles/app.scss";


export default class App extends React.Component{

	constructor(){
		super();
	}

	render(){
		return(
					<div className={"app"}>
						<Header name={this.props.name}></Header>
						<Footer>55</Footer>
					</div>
		)
	}
}