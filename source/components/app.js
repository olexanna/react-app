import React from "react";
import Header from "./header";
import Rotate from "./rotate";
import Footer from "./footer";
import Poster from "./poster";
import Gallery from "./gallery";
import "../../assets/styles/app.scss";


export default class App extends React.Component{

	constructor(){
		super();
	}

	render(){
		return(
			<React.Fragment>
					<Header name={this.props.name}></Header>
					<Rotate></Rotate>
					<Poster></Poster>
					<Gallery></Gallery>
					<Footer></Footer>
			</React.Fragment>
		)
	}
}