import React from "react";
import "../../assets/styles/rotate.scss"



export default class Rotate extends React.Component {

	constructor( props ){
		super( props );

		this.rotate = [
			{
				source:"back-1.jpg",
				title:"Hello"
			},
			{
				source:"back-2.jpg",
				title:"world"
			},
			{
				source:"background-1.jpg",
				title:"people"
			},
			{
				source:"background-2.jpg",
				title:"human"
			},
			{
				source:"background-3.jpg",
				title:"Marvelous"
			},
			{
				source:"background-4.jpg",
				title:"Excellent"
			}
		];

		this.rotateList1 = React.createRef();
		this.rotateList2 = React.createRef();
	}

	loader(){
		alert("fuck you");
	}

	componentDidMount(){
	};

	render(){
		return(

			<section className={"rotate d-flex jc-end"}>

				<div className={"rotate-gallery"} onLoad={ this.loader }>
					<p key={ "rotate1" } className={ "rotate-slider rotate1" } ref={ this.rotateList1}></p>
					<p  key={ "rotate2" } className={ "rotate-slider rotate2" } ref={ this.rotateList2 }></p>
			    </div>

				<div className={"slogan-block d-flex fd-column"}>
					<p className={"slogan-block-blur"}></p>

					<p className={"slogan-shell"}>
						<span className={"slogan-text"}>"Coffee - is a taste that unites souls"</span>
						<span className={"slogan-subtext"}>Try the exotic taste of citrus and lychee</span>
					</p>
				</div>
			</section>
		)
	}

}

