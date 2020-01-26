import React from "react";
import "../../assets/styles/gallery.scss"



export default class SliderImageList extends React.Component {

	constructor( props ){
		super( props );
		this.list = [
			{ name: "1", source: "Affogato-Pistachio-Con-Espresso-Schiuma.jpg", preview:"Affogato-Pistachio-Con-Espresso-Schiuma-m.jpg"},
			{ name: "2", source: "BIANCO-LEGGERO-ALTERNATIVE-SOY-MILK.jpg", preview:"BIANCO-LEGGERO-ALTERNATIVE-SOY-MILK-m.jpg" },
			{ name: "3", source: "Chestnut-Oat-Flat-White.jpg", preview:"Chestnut-Oat-Flat-White-m.jpg" },
			{ name: "5", source: "Chestnut-Soy-Cappuccino.jpg", preview:"Chestnut-Soy-Cappuccino-m.jpg" },
			{ name: "6", source: "Cinnabombon.jpg", preview:"Cinnabombon-m.jpg" },
			{ name: "4", source: "Cloudberry-Affogato.jpg", preview:"Cloudberry-Affogato-m.jpg" },
			{ name: "7", source: "Cortado.jpg", preview:"Cortado-m.jpg" },
			{ name: "8", source: "Dolce-and-Soy.jpg", preview:"Dolce-and-Soy-m.jpg" },
			{ name: "8", source: "Double-Cappuccino.jpg", preview:"Double-Cappuccino-m.jpg" },
			{ name: "8", source: "Flat-White-Over-Ice.jpg", preview:"Flat-White-Over-Ice-m.jpg" },
			{ name: "8", source: "Ginger-Bread-Viennois.jpg", preview:"Ginger-Bread-Viennois-m.jpg" },
			{ name: "8", source: "Golden-Shores.jpg", preview:"Golden-Shores-m.jpg" },
			{ name: "8", source: "Intense-Cappuccino.jpg", preview:"Intense-Cappuccino-m.jpg" },
			{ name: "8", source: "Long-Black-Over-Ice.jpg", preview:"Long-Black-Over-Ice-m.jpg" },
			{ name: "8", source: "nespresso-recipes-Agave-Oat-Cappuccino.jpg", preview:"nespresso-recipes-Agave-Oat-Cappuccino-m.jpg" },
			{ name: "8", source: "Reverso-Intenso.jpg", preview:"Reverso-Intenso-m.jpg" },
			{ name: "8", source: "Salted-Caramel-Mocha.jpg", preview:"Salted-Caramel-Mocha-m.jpg" },
			{ name: "8", source: "Sweet-Popcorn-Cappuccino.jpg", preview:"Sweet-Popcorn-Cappuccino-m.jpg" },
			{ name: "8", source: "Variations-paris-praline-creamy-indulgence.jpg", preview:"Variations-paris-praline-creamy-indulgence-m.jpg" }
		];
		this.display = -1;
		this.image = React.createRef();
		this.imageList = React.createRef();
	};

	left(){
		this.imageList.current.scrollLeft = this.imageList.current.scrollLeft - 128;
	};
	right(){
		this.imageList.current.scrollLeft = this.imageList.current.scrollLeft + 128;
	};

	click( key ){

		if( key < 0 || key >= this.list.length )
			return;

		this.display = key.source;
		console.log( this.list[ key ].source );
		this.image.current.style.backgroundImage = "url( ../assets/images/gallery/display-coffe/bigImgCoffe/" + this.list[ key ].source + " )";
	};

	prev(){
		this.click( this.display - 1 );
	};
	next(){
		this.click( this.display + 1 );
	};

	componentDidMount(){

		if( !this.imageList.current.firstElementChild )
			return;

		this.imageList.current.firstElementChild.click();

	};

	render(){
		return(
			<section className={"slider-image-list d-flex fd-column"}>
				<div key={ "image-display" } className={ "slider-display" }>
					<button /*key={ "image-prev" }*/ className={ "slider-prev" } onClick={ this.prev.bind( this ) }></button>
					<p /*key={ "image" }*/ className={ "slider-image" } ref={ this.image }></p>
					<button /*key={ "image-next" }*/ className={ "slider-next" } onClick={ this.next.bind( this ) }></button>
				</div>

				<div className={"carousel d-flex"}>
					<button /*key={ "image-left" }*/ className={ "slider-left" } onClick={ this.left.bind( this ) }></button>
					<p key={ "image-list" } className={ "slider-list" } ref={ this.imageList }>
						{ this.list.map( (value, key) =>
							<span key={ value.preview }  className={ "slider-item" } onClick={ this.click.bind( this, key ) } style={{ backgroundImage: "url(../assets/images/gallery/preview-coffe/prewieImgCoffe/" + value.preview + ")" }}></span>
						) }
					</p>
					<button key={ "image-right" } className={ "slider-right" } onClick={ this.right.bind( this ) }></button>
				</div>
			</section>
		)
	}

};