import React from "react";
import Header from "./header";
import Rotate from "./rotate";
import Footer from "./footer";
import Poster from "./poster";
import Gallery from "./gallery";
import Impression from "./impression";
import "../../assets/styles/app.scss";
import "../../assets/styles/media.scss";


export default class App extends React.Component{

	constructor( props ){
		super( props );
	}

	render(){
		return(
			<React.Fragment>
				<Header ></Header>
				<Rotate></Rotate>
				<Poster></Poster>
				<Gallery></Gallery>
				<Impression></Impression>
				<Footer></Footer>
			</React.Fragment>
		)
	}
}