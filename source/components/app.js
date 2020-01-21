import React from "react";
import Header from "./header";
import Rotate from "./rotate";
import Footer from "./footer";
import Poster from "./poster";
import Gallery from "./gallery";
import "../../assets/styles/app.scss";


export default class App extends React.Component{

	constructor( props ){
		super( props );
	}

	render(){
		return(
			<React.Fragment>
					<Header name={this.props.name}></Header>
					<Rotate></Rotate>
					<Gallery></Gallery>
					<Poster></Poster>
					<Footer></Footer>
			</React.Fragment>
		)
	}
}