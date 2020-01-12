import React from "react";
import "../../assets/styles/social-poster.scss"

export default class PosterItem extends React.Component{

	constructor(){
		super();
	}

	render(){
		return(
			<p className={"poster-shell d-flex fd-column ai-center"}>
				<span className={ "poster-item" }><img src={ "../../assets/images/poster/" + this.props.icon } alt={ "" } /></span>
				<span className={"poster-title"}>{ this.props.name }</span>
			</p>
			//<span className={ "poster-item" }>{ this.props.name }<img src={ "../../assets/images/poster/" + this.props.icon } alt={ "" } /></span>
		)
	}
}

