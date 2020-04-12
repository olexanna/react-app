import React from "react";
import "../../assets/styles/impression.scss"

export default class Impression  extends React.Component {

	constructor( props ){
		super( props );
	}

	render(){

		return(
			<section className={"impress-wrap"}>
					<div className={"impress-block d-flex fd-column fd-row"}>
						<p className={"ava-impress"}></p>

						<p className={"comment-impress"}>
							<span className={"text-comment-impress"}>
								"When I first visited the Coffee Cafe, I was pleasantly surprised by the prices of drinks and food.
								Since I am a student, the budget policy of the institution is especially important for me.
								I was also pleasantly surprised by the promotions.Now I often go with my friends after lectures to drink fragrant coffee."
							</span>
							<span className={"label-comment-impress"}>Anna Miller, San-Francisco</span>
						</p>
					</div>
			</section>
		)
	}


}
