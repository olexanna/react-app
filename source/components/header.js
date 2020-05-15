import React from "react";
import "../../assets/styles/header.scss"
import FooterMenuItem from "./footer.menu.item";
import SocialItem from "./social.item";
import { Config } from "../config";

export default class Header extends React.Component{

	constructor( props ){
		super( props );

		this.header = React.createRef();
		this.btnMenu = React.createRef();
		this.menuHeader = React.createRef();
		this.itemMenu =  React.createRef();
		this.backgroundMobile = React.createRef();
		this.btnScrollUp = React.createRef();

		this.point = false;
	}

	mobileBackdrop(){

		if( this.backMobile )
			return;

		this.backMobile = document.createElement("div");
		this.backMobile.className = "backdrop-mobile";
		this.mainContainer.appendChild(this.backMobile);

	}

	removeMobileBackdrop(){

		if( !this.backMobile )
			return;

		this.backMobile.remove();
		this.backMobile = null;

	}

	hideItemsMobile (){
		if( !this.itemMenu )
			return;

		this.itemMenu.current.classList.add("hide-menu-header-items");
	};


	removeHideItemsMobile (){
		if( !this.itemMenu )
			return;

		this.itemMenu.current.classList.remove("hide-menu-header-items");
	};


	titleMobileMenu(){
		console.log(this.captionMobile);

		if( this.captionMobile )
			  return;

		this.captionMobile = document.createElement("div");
		this.captionMobile.className = "title-mobile";

		this.nameCompany = document.createElement("p");
		this.nameCompany.className = "logo-company";
		this.captionMobile.appendChild( this.nameCompany );

		this.mainContainer.appendChild( this.captionMobile );
	};

	removeTitleMobileMenu(){
		console.log(87978978);

		if( !this.captionMobile )
			return;

		this.captionMobile.remove();
		this.captionMobile = null;
	};


	swipe(){

		if( this.point ){
			this.removeHideItemsMobile();
			this.menuHeader.current.classList.add("hide-menu");
			this.menuHeader.current.classList.remove("show-menu");

			this.itemMenu.current.classList.remove("bar-block-menu-header");

			this.itemMenu.current.classList.remove("show-menu-item");
			this.itemMenu.current.classList.add("hide-menu-item");

			this.backgroundMobile.current.style.display = "none";
			this.removeTitleMobileMenu();

			this.point = false;
		}else{
			this.removeHideItemsMobile();

			this.menuHeader.current.classList.remove("hide-menu");
			this.menuHeader.current.classList.add("show-menu");

			this.itemMenu.current.classList.remove("hide-menu-item");
			this.itemMenu.current.classList.add("show-menu-item");

			this.itemMenu.current.classList.add("bar-block-menu-header");

			this.backgroundMobile.current.style.display = "block";
			this.titleMobileMenu();

			this.point = true;
		};

	}

	removeClassesHeaderMobile (){

		if( window.innerWidth > Config.headerSize ){

			this.menuHeader.current.classList.remove("hide-menu");
			this.menuHeader.current.classList.remove("show-menu");

			this.itemMenu.current.classList.remove("bar-block-menu-header");
			this.itemMenu.current.classList.remove("show-menu-item");
			this.itemMenu.current.classList.remove("hide-menu-item");

			this.backgroundMobile.current.style.display = "none";
			this.itemMenu.current.style.display="flex";
			this.point = false;
		}
	}

	onresize(){

		if( window.innerWidth < Config.headerSize ){

			this.btnMenu.current.style.display="block";
			this.hideItemsMobile();
		}else{
			this.btnMenu.current.style.display="none";
			this.removeHideItemsMobile();
			this.removeTitleMobileMenu();
			this.removeClassesHeaderMobile();
		}
	};

	showHeightScroll(){

		let  scrollHeight = window.scrollY;
		let displayHeightScroll = document.getElementsByClassName( "display-height" )[0];
	    displayHeightScroll.innerHTML = scrollHeight;
	}

	showBtnScrollUp(){

		if(window.scrollY >1090){
			this.btnScrollUp.current.style.display = "block";
		}else{
			this.btnScrollUp.current.style.display = "none";
		}
	}

	buttonScrollUp(){
		let  scrollHeight = window.scrollY;

		if( scrollHeight >1090 || document.body.scrollTop > 1090 || document.documentElement.scrollTop > 1090 ){
			document.documentElement.scrollTop = 0;
			document.body.scrollTop = 0;
		}
	}

	headerUp(){
		if( window.scrollY >1100 ){
			this.header.current.style.position = "absolute";
			//this.btnMenu.current.style.position = "absolute";
		} else {
			this.header.current.style.position = "fixed";
		//	this.btnMenu.current.style.position = "fixed";
		}
	}

	componentDidMount(){

		this.mainContainer = document.getElementsByClassName("menu-header")[0];

		window.addEventListener( "resize", () => this.onresize());

		this.onresize();

		this.btnMenu.current.addEventListener( "click", () => {
			if( window.innerWidth < Config.headerSize ){
				this.swipe();
			}
		});

		window.addEventListener( "scroll", ()=>{
			this.showHeightScroll();
			this.showBtnScrollUp();
			this.headerUp();
		});

		this.btnScrollUp.current.addEventListener( "click", () =>this.buttonScrollUp() );

	};


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
				<span className={"menu-header-items"} key={ menuHeaderItems.name }>
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
			<header className={"header"} ref = { this.header }>
				<div className={"header-bg"}></div>

				<div className={"btn-menu-header"} key={"btn-menu"} ref={ this.btnMenu }></div>
				<div className={ "mobile-backdrop" } ref={ this.backgroundMobile}></div>

				<p className={"title-company"}>Coffee Cafe</p>

				<div className={"menu-header"}  key={"menu-header"} ref={ this.menuHeader }>
					<p ref={this.itemMenu} className={"block-menu-header"}>
						<MenuItems pointsHeader={menuHeaderItems}></MenuItems>
					</p>
				</div>
				<p className={"display-height"}></p>
				<p className={"btn-up"}  ref={ this.btnScrollUp}>
					<span className={"arrow-btn-up"}>&#10148;</span>
				</p>
			</header>
		)
	}
}