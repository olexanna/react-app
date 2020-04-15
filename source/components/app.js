import React from "react";
import Header from "./header";
import Rotate from "./rotate";
import Footer from "./footer";
import Poster from "./poster";
import Gallery from "./gallery";
import Impression from "./impression";
import News from "./news";
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
				<Gallery></Gallery>
				<Impression></Impression>
				<News></News>
				<Footer></Footer>
			</React.Fragment>
		)
	}
}