import React from "react";
import "../../assets/styles/header.scss"


export default class Header extends React.Component{

	constructor(){
		super();
	}

	render(){
		return<header className={"header text d-flex jc-between"}>
						<div className={"logo-header"}></div>

						<p className={"menu d-flex ai-center"}>
							<span>Home</span>
							<span>About</span>
							<span>Menu</span>
							<span>Stocks</span>
							<span>News</span>
							<span>Gallery</span>
							<span>Contacts</span>
						</p>

						<div className={"name-company"}></div>
					</header>
						/*<p>Немного о нас...
						Мы молодая компания, в которой сотрудники являются фанатами своего дела.

						Почему мы Кафе-лаборатория?
						В нашей лаборатории-кафе разрабатываются самые креативные вкусы, способные удивить даже искушенную публику!

						Посетите Cafe Lab и откройте для себя заново мир кофейного разнообразия!</p>-*/
	}
}