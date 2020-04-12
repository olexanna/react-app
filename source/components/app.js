import React from "react";
import Header from "./header";
import Rotate from "./rotate";
import Footer from "./footer";
import Poster from "./poster";
import Gallery from "./gallery";
import Impression from "./impression";
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
				<Poster></Poster>
				<Impression></Impression>
				<Gallery></Gallery>
				<Footer></Footer>
			</React.Fragment>
		)
	}
}