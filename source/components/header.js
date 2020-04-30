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
		this.backgroundMobile = React.createRef();

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
		 this.captionMobile =document.createElement("div");

		this.captionMobile.className = "title-mobile";

		this.mainContainer.appendChild(this.captionMobile);
	};

	removeTitleMobileMenu(){
		console.log(87978978);

		if( !this.captionMobile )
			return;
		this.captionMobile.remove();
		this.captionMobile = null;
		//if( !this.captionMobile )
		//	return;
	};


	swipe(){
		if( this.point ){
			this.removeHideItemsMobile();

			this.menuHeader.current.classList.remove("show-menu");
			this.menuHeader.current.classList.add("hide-menu");

			this.itemMenu.current.classList.remove("bar-block-menu-header");

			this.itemMenu.current.classList.remove("show-menu-item");
			this.itemMenu.current.classList.add("hide-menu-item");

			this.backgroundMobile.current.style.display = "none";
			this.point = false;
		}else{
			this.menuHeader.current.classList.remove("hide-menu");
			this.menuHeader.current.classList.add("show-menu");

			this.itemMenu.current.classList.remove("hide-menu-item");
			this.itemMenu.current.classList.add("show-menu-item");

			this.itemMenu.current.classList.add("bar-block-menu-header");

			this.backgroundMobile.current.style.display = "block";
			this.point = true;
		};

	}

	removeClassesHeaderMobile (){

		if( window.innerWidth > 900 ){
			this.menuHeader.current.classList.remove("hide-menu");
			this.menuHeader.current.classList.remove("show-menu");

			this.itemMenu.current.classList.remove("bar-block-menu-header");
			this.itemMenu.current.classList.remove("show-menu-item");
			this.itemMenu.current.classList.remove("hide-menu-item");

			this.backgroundMobile.current.style.display = "none";
			this.itemMenu.current.style.display="flex";
		}
	}

	onresize(){
		console.log("resize");

		if( window.innerWidth < 900 ){
			this.btnMenu.current.style.display="block";
			this.hideItemsMobile();
			this.titleMobileMenu();
		}else{
			this.btnMenu.current.style.display="none";
			this.removeHideItemsMobile();
			this.removeTitleMobileMenu();
		}
		this.removeClassesHeaderMobile();
	};

	componentDidMount(){

		this.mainContainer = document.getElementsByClassName("menu-header")[0];
		console.log(this.mainContainer);

		window.addEventListener( "resize", () => this.onresize());

		this.onresize();

		this.btnMenu.current.addEventListener( "click", () => {
			if( window.innerWidth < 900 ){
				this.swipe();
			}
		});

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
			<header className={"header"}>
				<div className={"header-bg"}></div>

				<div className={"btn-menu-header"} key={"btn-menu"} ref={ this.btnMenu }></div>
				<div className={ "mobile-backdrop" } ref={ this.backgroundMobile}></div>

				<p className={"title-company"}>Coffee Cafe</p>

				<div className={"menu-header"}  key={"menu-header"} ref={ this.menuHeader }>
					<p ref={this.itemMenu} className={"block-menu-header"}>
						<MenuItems pointsHeader={menuHeaderItems}></MenuItems>
					</p>
				</div>
			</header>
		)
	}
}