import React from "react";
import NewsItems from "./news.items";
import "../../assets/styles/news.scss"
import "../../assets/styles/social-poster.scss"


export default class News extends React.Component {

	constructor( props ){
		super( props );
	}

	render(){

		let newsItems =  [
			{ title: "Coffee", icon: "coffee-cup-6.png" },
			{ title: "DISHES", icon: "food-3.png" },
			{ title: "PEOPLE", icon: "human-1.png" },
		].map(  (value) =>
			<NewsItems key={ value.icon } name={ value.name } title={ value.title }></NewsItems>
		);

		return(
			<article className={"news-item-wrap"}>

				<div className={"block-social-title"}>
					<p className={"large-social-title"}>NEWS</p>
					<p className={"small-social-title"}>All fresh news from world of coffee is here</p>
				</div>

				<section className={"news-items-unit"}>
					<div className={"news-items-block d-flex jc-between"}>
						{newsItems}
					</div>
				</section>
			</article>
		)
	}

}
