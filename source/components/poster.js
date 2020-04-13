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
			{ name: "DISHES", icon: "food-3.png" },
			{ name: "PEOPLE", icon: "human-1.png" },
			{ name: "Faqs", icon: "faqs-2.png" },
			{ name: "Events", icon: "party.png" },
			{ name: "Coffee location", icon: "location-1.png" }
		].map(  (value) =>
			<PosterItem key={ value.icon } name={ value.name } icon={ value.icon }></PosterItem>
		);

		return(
			<article className={"wrap-social-poster"}>
				<div className={"block-social-title"}>
					<p className={"large-social-title"}>SOCIAL POSTER</p>
					<p className={"small-social-title"}>Social part and services of the Coffee Cafe</p>
				</div>

				<section className={"social-poster"}>
					<div className={"poster-block d-flex jc-between"}>
						{posterItem}
					</div>
				</section>
			</article>
		)
	}

}
