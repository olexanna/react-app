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
			{ name: "", icon: "inst-2-1.png" },
			{ name: "", icon: "face-2-1.png" },
			{ name: "", icon: "tele-4-2-1-1.png" },
			{ name: "", icon: "tw-7-1-1.png" },
			{ name: "", icon: "w-3-1-1.png" },
			{ name: "", icon: "vk1-1.png" }
		].map(  (value) =>
			<SocialItem key={ value.icon } name={ value.name } icon={ value.icon }></SocialItem>
		);

		return(
			<footer className={"footer"}>
				<div className={"footer-bg"}> </div>

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
		)
	}
}