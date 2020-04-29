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

		this.point = false;
	}

	mobileBackdrop(){
		if(window.innerWidth < 900){
			this.mainContainer = document.getElementById("main");
			this.backMobile = document.createElement("div");
			this.backMobile.className = "backdrop-mobile";
			this.mainContainer.appendChild(this.backMobile);
		}
	}

	removeMobileBackdrop(){
		if( window.innerWidth > 900 ){
			this.mainContainer = document.getElementById("main");
			this.backMob =  document.getElementsByClassName("backdrop-mobile")[0];
			this.mainContainer.removeChild(	this.backMob);
			console.log(	this.backMob, 555);
		}
	}

	toggleMobileBackdrop(){
		if( window.innerWidth > 900){
			this.mobileBackdrop();
		}
	}

	swipe(){
		if( this.point ){
			console.log(111);
			this.menuHeader.current.classList.remove("show-menu");
			this.menuHeader.current.classList.add("hide-menu");

			this.itemMenu.current.classList.remove("bar-block-menu-header");
			this.itemMenu.current.classList.add("hide-menu-header-items");
			this.point = false;
		}else{
			console.log(222);
			this.menuHeader.current.classList.remove("hide-menu");
			this.menuHeader.current.classList.add("show-menu");

			this.itemMenu.current.classList.remove("hide-menu-header-items");
			this.itemMenu.current.classList.add("bar-block-menu-header");

			this.point = true;
		}
	}

	zeroingClassesHeaderMobile (){
		if(window.innerWidth > 900 ){
			console.log(2020);
			this.menuHeader.current.classList.remove("hide-menu");
			this.menuHeader.current.classList.remove("show-menu");

			this.itemMenu.current.classList.remove("hide-menu-header-items");
			this.itemMenu.current.classList.remove("bar-block-menu-header");
			this.itemMenu.current.style.display="flex";
		}
	}

	onresize(){
		if( window.innerWidth < 900 ){
			console.log( 333 );
			this.btnMenu.current.style.display="block";
			this.itemMenu.current.classList.add("hide-menu-header-items");
		}else{
			console.log( 444 );
			this.btnMenu.current.style.display="none";
		}
		this.zeroingClassesHeaderMobile();
	};

	componentDidMount(){

		window.addEventListener( "resize", () => this.onresize());
		window.addEventListener("onload",()=>this.toggleMobileBackdrop());
		this.onresize();
		this.toggleMobileBackdrop();
		//this.mobileBackdrop();
		//this.removeMobileBackdrop();

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