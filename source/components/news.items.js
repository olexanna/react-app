import React from "react";
import "../../assets/styles/news.scss"

export default class NewsItems  extends React.Component {

	constructor( props ){
		super( props );
	}



	render(){
		return(
			<p className={"news-item-shell"}>
				<span className={"img-news-item"}></span>
				<span className={"text-news-item"}>></span>
			</p>
		)
	}
}