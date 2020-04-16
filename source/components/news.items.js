import React from "react";
import "../../assets/styles/news.scss"

export default class NewsItems  extends React.Component {

	constructor( props ){
		super( props );
	}


	render(){

		return(
			<p className={"news-items-shell"}>
				<span className={"title-news-items"}>{ this.props.title }</span>
				<span className={"img-news-items"}><img src={ "../../assets/images/news/" + this.props.icon } alt={ "" } /></span>
				<span className={"text-news-items"}>{ this.props.text }</span>
			</p>
		)

	}
}