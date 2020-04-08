import React from "react";
import "../../assets/styles/header.scss"


export default class Header extends React.Component{

	constructor( props ){
		super( props );
	}

	render(){
		return(
				<header className={"header"}>
						<div className={"header-bg"}></div>
						<p className={"title-company"}>Coffee Cafe</p>
						<p className={"menu"}>
							<span>HOME</span>
							<span>ABOUT</span>
							<span>MENU</span>
							<span>NEWS</span>
							<span>GALLERY</span>
							<span>CONTACTS</span>
						</p>
				</header>
						/*<p>Немного о нас...
						Мы молодая компания, в которой сотрудники являются фанатами своего дела.

						Почему мы Кафе-лаборатория?
						В нашей лаборатории-кафе разрабатываются самые креативные вкусы, способные удивить даже искушенную публику!

						Посетите Cafe Lab и откройте для себя заново мир кофейного разнообразия!</p>-

						    border-bottom-right-radius: 53% 98%;
    							border-bottom-left-radius: 51% 98%;
						*/
		)
	}
}