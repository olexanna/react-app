import React from "react";
import "../../assets/styles/header.scss"
import FooterMenuItem from "./footer.menu.item";
import SocialItem from "./social.item";


export default class Header extends React.Component{

	constructor( props ){
		super( props );

		this.btnMenu = React.createRef();
		this.menuHeader = React.createRef();
		this.point = false;
	}

	swipe(){

		if( this.point ){
			console.log(111);
			this.menuHeader.current.style.width = "auto";
			this.point = false;
		}else{
			console.log(222);
			this.menuHeader.current.style.width ="320px";
			this.point = true;
		}

	}


	onresize(){

		if( window.innerWidth < 900 ){
			this.btnMenu.current.style.display="block";
			console.log( 333 );
		}else{
			console.log( 444 );
			this.btnMenu.current.style.display="none";
			//this.btnMenu.current.removeEventListener( "click",  this.swipe.bind(this) );
		}

	};

	componentDidMount(){

		window.addEventListener( "resize", () => this.onresize() );

		this.onresize();

		this.btnMenu.current.addEventListener( "click", () => {

			if( window.innerWidth < 900 )
				this.swipe();

		});


	}
	componentWillUnmount(){
		//window.removeEventListener( "resize", this.onresize );
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

			 const menu = props.menuHeader.map((menuHeaderItems) =>
					 <span className={"menu-header-items"} key={menuHeaderItems.name} >
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
					<p className={"menu-header"}  key={"menu-header"} ref={ this.menuHeader }>
						<MenuItems menuHeader={menuHeaderItems} key={"menu-items"}></MenuItems>
					</p>
				</header>
		)
	}
}