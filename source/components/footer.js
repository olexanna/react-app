import React from "react";
import "../../assets/styles/footer.scss"
import MenuItem from "./menu.item";
import SocialItem from "./social.item";


export default class Footer extends React.Component{

	constructor( props ){
		super( props );
	}

	render(){
		let menuItems = [
			"Offers and promotions",
			"Contacts",
			"How to find us",
			"Map of site",
			"Vacancies",
			"Sponsors"
		].map(  (value) =>
			<MenuItem key={ value } name={ value }></MenuItem>
		);

		let socialItems =  [
			{ name: "", icon: "1.png" },
			{ name: "", icon: "2.png" },
			{ name: "", icon: "3.png" },
			{ name: "", icon: "4.png" },
			{ name: "", icon: "5.png" },
			{ name: "", icon: "6.png" },
			{ name: "", icon: "7.png" },
			{ name: "", icon: "8.png" }
		].map(  (value) =>
			<SocialItem key={ value.icon } name={ value.name } icon={ value.icon }></SocialItem>
		);

		return<footer className={"footer"}>
						<p className={"footer-info-shell"}>
							{ menuItems }
						</p>

						<div className={"footer-social-block"}>
							<p className={"footer-social-title"}>We are in social networks</p>

							<p className={"footer-social-shell"}>
								{ socialItems }
							</p>
						</div>
				</footer>
	}
}