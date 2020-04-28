import React from "react";
import "../../assets/styles/header.scss"
import FooterMenuItem from "./footer.menu.item";
import SocialItem from "./social.item";


export default class Header extends React.Component{

	constructor( props ){
		super( props );

		this.btnMenu = React.createRef();
		this.menuHeader = React.createRef();
		this.itemMenu =  React.createRef();

		this.hideHeader = false;
		this.point = false;
	}

	swipe(){

		if( this.point ){
			console.log(111);
			this.menuHeader.current.classList.remove("show-menu");
			this.menuHeader.current.classList.add("hide-menu");
			this.itemMenu.current.style.display="none";
			this.point = false;
		}else{
			console.log(222);
			this.menuHeader.current.classList.remove("hide-menu");
			this.menuHeader.current.classList.add("show-menu");
			this.itemMenu.current.style.display="flex";
			this.itemMenu.current.classList.add("fd-column");

			this.point = true;
		}

	}

	hidePointHeader(){
		if(window.innerWidth < 900 ){
			console.log(777);
			this.itemMenu.current.style.display="none";
		}else{
			console.log(2020);
			this.itemMenu.current.style.display="flex";
		}

	}

	onresize(){

		if( window.innerWidth < 900 ){
			this.btnMenu.current.style.display="block";
			console.log( 333 );
		}else{
			console.log( 444 );
			this.btnMenu.current.style.display="none";
		}

		if( window.innerWidth > 900  ){
			this.menuHeader.current.classList.remove("hide-menu");
			this.menuHeader.current.classList.remove("show-menu");
		}

		if( window.innerWidth < 900){
			this.hidePointHeader();
			this.itemMenu.current.classList.remove("fd-column");
		}

		if( window.innerWidth > 900){
			this.hidePointHeader();
		}
	};



	componentDidMount(){

		window.addEventListener( "resize", () => this.onresize());
		this.onresize();
		this.hidePointHeader();
		this.btnMenu.current.addEventListener( "click", () => {

			if( window.innerWidth < 900 ){
				this.swipe();
			}
		});
	}


	render(){

		let menuHeaderItems= [
			{ name:"HOME" },
			{ name:"ABOUT" },
			{ name:"MENU"},
			{ name:"NEWS"},
			{ name:"GALLERY"},
			{ name:"CONTACTS"}
		];

	 	 let	MenuItems = function(props){

			 const menu = props.pointsHeader.map((menuHeaderItems) =>
					 <span className={"menu-header-items"}>
						{menuHeaderItems.name}
					 </span>
			 );

	 	 	return(
				<React.Fragment>
						{menu}
				</React.Fragment>
			)

		};

		return(
				<header className={"header"}>
					<div className={"header-bg"}></div>

					<div className={"btn-menu-header"} key={"btn-menu"} ref={ this.btnMenu }></div>

					<p className={"title-company"}>Coffee Cafe</p>

					<div className={"menu-header"}  key={"menu-header"} ref={ this.menuHeader }>
						<p ref={this.itemMenu} className={"block-menu-header"}>
							<MenuItems pointsHeader={menuHeaderItems} key={"menu-items"}  stateChange={true}   ></MenuItems>
						</p>
					</div>
				</header>
		)
	}
}