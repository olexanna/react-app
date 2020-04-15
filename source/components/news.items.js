import React from "react";
import "../../assets/styles/news.scss"

export default class NewsItems  extends React.Component {

	constructor( props ){
		super( props );
	}


	render(){

		return(
			<p className={"news-item-shell"}>
				<span className={"img-news-item"}><img src={ "../../assets/images/poster/" + this.props.icon } alt={ "" } /></span>
				<span className={"text-news-item"}>{ this.props.title }</span>
			</p>
		)
	}
}