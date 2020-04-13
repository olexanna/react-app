import React from "react";
import "../../assets/styles/impression.scss"

export default class Impression  extends React.Component {

	constructor( props ){
		super( props );
	}

	render(){

		return(
			<article className={"impress-primary"}>
				<section className={"impress-wrap d-flex fd-row"}>

					<div className={"impress-block d-flex fd-column fd-row"}>
						<p className={"ava-impress woman"}></p>

						<p className={"comment-impress"}>
							<span className={"text-comment-impress"}>
								"When I first visited the Coffee Cafe, I was pleasantly surprised by the prices of drinks and food.
								Since I am a student, the budget policy of the institution is especially important for me.
								I was also pleasantly surprised by the promotions.Now I often go with my friends after lectures to drink fragrant coffee."
							</span>
							<span className={"label-comment-impress"}>Anna Miller, San-Francisco</span>
						</p>
					</div>

					<div className={"impress-block d-flex fd-column fd-row"}>
						<p className={"ava-impress man"}></p>

						<p className={"comment-impress"}>
								<span className={"text-comment-impress"}>
									"For 3 years, I have been coming to a coffee shop for lunch. I like the quality of drinks and food, as well as affordable prices.
									Several times I went to a coffee shop to celebrate my birthday with friends and was very happy with how quickly we were served.
									I recommend coffee to all cafes, since I have never left this place with a bad mood."
								</span>
							<span className={"label-comment-impress"}>Michael Smith, San-Francisco</span>
						</p>
					</div>
				</section>

				<p className={"link-comments"}>
					<span>Different comments</span>
					<span> &#10137;</span>
				</p>
			</article>
		)
	}
}
