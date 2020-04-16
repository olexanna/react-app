import React from "react";
import NewsItems from "./news.items";
import "../../assets/styles/news.scss"
import "../../assets/styles/social-poster.scss"
import PosterItem from "./poster.item";


export default class News extends React.Component {

	constructor( props ){
		super( props );
	}

	render(){

		let newsItems =  [
			{ title: "New Research Highlights the Benefits of Shade-Grown Coffee in Brazil",
				text:"According to research published earlier this year, Brazil’s Southeastern Mountain coffee growing region could see a drastic loss of its viable coffee growing landscapes by the year 2050...",
				icon: "coffee-plant.jpg"
			},
			{ title:"ICO Forecasts How a Global Recession Might Affect Coffee Demand",
				text: "The economic impact of COVID-19 in the leading coffee-consuming countries all over the world has been jarring and immediate," +
					" with widespread losses in the retail sector following stark changes in consumer behavior...",
				icon: "coffee-sacks.jpg"
			},
			{ title: "SK Coffee to Hold ‘Virtual Tasting’ of One Coffee Processed Three Ways",
				text:"From its new roasting facility in Saint Paul, Minnesota, SK Coffee is engaging coffee drinkers from virtually anywhere with a processing-focused flight called the Tabi Trio." +
					"The flight includes three packages of the same coffee that was grown...",
				icon: "coffee-colombia.jpg"
			},
			{ title: "Research Into Acidity and Antioxidants in Cold Brew vs. Hot Coffee Yields Surprising Results",
				text: "New research into the chemical compositions of hot coffee and cold-brewed coffee, aka cold brew, suggests the two liquid drinks may have similar acidity levels, " +
						"while hot coffee often contains more antioxidants than cold brew....",
				icon: "black-hot-coffee.jpg"
			}
		].map(  (value) =>
			<NewsItems key={ value.icon } title={ value.title }  icon={ value.icon } text={ value.text }></NewsItems>
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


