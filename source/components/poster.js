import React from "react";
import "../../assets/styles/social-poster.scss"
import PosterItem from "./poster.item";



export default class Poster extends React.Component {

	constructor( props ){
		super( props );
	}

	render(){
		let posterItem =  [
			{ name: "Coffee", icon: "coffee-cup-6.png" },
			{ name: "Reviews", icon: "food-3.png" },
			{ name: "Faqs", icon: "faq-black-1.png" },
			{ name: "Faqs", icon: "faq-black-1.png" }
		].map(  (value) =>
			<PosterItem key={ value.icon } name={ value.name } icon={ value.icon }></PosterItem>
		);

		return(
			<section className={"social-poster"}>
				<div className={"poster-block d-flex jc-between"}>
					{posterItem}
				</div>
			</section>
		)
	}

}
