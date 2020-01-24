import React from "react";
import "../../assets/styles/gallery.scss"



export default class SliderImageList extends React.Component {

	constructor( props ){
		super( props );
		this.list = [
			{ name: "1", source: "Affogato-Pistachio-Con-Espresso-Schiuma.jpg" },
			{ name: "2", source: "BIANCO-LEGGERO-ALTERNATIVE-SOY-MILK.jpg" },
			{ name: "3", source: "Chestnut-Oat-Flat-White.jpg" },
			{ name: "5", source: "Chestnut-Soy-Cappuccino.jpg" },
			{ name: "6", source: "Cinnabombon.jpg" },
			{ name: "4", source: "Cloudberry-Affogato.jpg" },
			{ name: "7", source: "Cortado.jpg" },
			{ name: "8", source: "Dolce-and-Soy.jpg" },
			{ name: "8", source: "Double-Cappuccino.jpg" },
			{ name: "8", source: "Flat-White-Over-Ice.jpg" },
			{ name: "8", source: "Ginger-Bread-Viennois.jpg" },
			{ name: "8", source: "Golden-Shores.jpg" },
			{ name: "8", source: "Intense-Cappuccino.jpg" },
			{ name: "8", source: "Long-Black-Over-Ice.jpg" },
			{ name: "8", source: "nespresso-recipes-Agave-Oat-Cappuccino.jpg" },
			{ name: "8", source: "Reverso-Intenso.jpg" },
			{ name: "8", source: "Salted-Caramel-Mocha.jpg" },
			{ name: "8", source: "Sweet-Popcorn-Cappuccino.jpg" },
			{ name: "8", source: "Variations-paris-praline-creamy-indulgence.jpg" }
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

		this.display = key;
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
					<button key={ "image-prev" } className={ "slider-prev" } onClick={ this.prev.bind( this ) }></button>
					<p key={ "image" } className={ "slider-image" } ref={ this.image }></p>
					<button key={ "image-next" } className={ "slider-next" } onClick={ this.next.bind( this ) }></button>
				</div>

				<div className={"carousel d-flex"}>
					<button key={ "image-left" } className={ "slider-left" } onClick={ this.left.bind( this ) }></button>
					<p key={ "image-list" } className={ "slider-list" } ref={ this.imageList }>
						{ this.list.map( (value, key) =>
							<span key={ value.source } className={ "slider-item" } onClick={ this.click.bind( this, key ) } style={{ backgroundImage: "url(../assets/images/gallery/display-coffe/bigImgCoffe/" + value.source + ")" }}></span>
						) }
					</p>
					<button key={ "image-right" } className={ "slider-right" } onClick={ this.right.bind( this ) }></button>
				</div>
			</section>
		)
	}

};