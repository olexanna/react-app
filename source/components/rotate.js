import React from "react";
import "../../assets/styles/rotate.scss"



export default class Rotate extends React.Component {

	constructor(){
		super();
	}

	render(){
		return <section className={"rotate d-flex jc-end"}>
						<div className={"slogan-block d-flex fd-column"}>
							<p className={"slogan-block-blur"}></p>

							<p className={"slogan-shell"}>
								<span className={"slogan-text"}>"Coffee - is a taste that unites souls"</span>
								<span className={"slogan-subtext"}>Try the exotic taste of citrus and lychee</span>
							</p>
						</div>
					</section>

	}

}

