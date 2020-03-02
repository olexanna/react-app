import React from "react";
import "../../assets/styles/gallery.scss"
import SliderImageList from "./slider.image.list";

let BannerList = [
	{ title: "gsdfgdfg",
		source: "/rotate/act-cup-coffe.jpg",
		preview: "/rotate/act-cup-coffe.jpg"
	},
	{  title: "adasda",
		source: "/rotate/act-coffe-cake.jpg",
		preview: "/rotate/act-coffe-cake.jpg"
	},
	{ title: "adasda",
		source: "/rotate/action-card.jpg",
		preview: "/rotate/action-card.jpg"
	}
];


export default class Rotate extends React.Component {

	constructor( props ){
		super( props );
	}

	componentDidMount(){
	};

	render(){
		return(
			<article className={"gallery"}>
				<SliderImageList rotation={ 5000 } hideui={ true } textcenter={ true } list={ BannerList } hideCarousel={true}></SliderImageList>
			</article>
		)
	}

}

