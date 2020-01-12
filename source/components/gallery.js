import React from "react";
import "../../assets/styles/gallery.scss"


export default class Gallery extends React.Component {

	constructor(){
		super();
	}

	 output( ){
		alert("fuck");
	};

	render(){
		return <section className={"gallery"} onClick={this.output}></section>
	}

}
