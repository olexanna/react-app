import React from "react";
import SliderImageList from "./slider.image.list";
import "../../assets/styles/gallery.scss"


export default class Gallery extends React.Component {

	constructor( props ){
		super( props );
	}

	render(){
		return <section className={"gallery"}>
			<SliderImageList></SliderImageList>
		</section>
	}

}
