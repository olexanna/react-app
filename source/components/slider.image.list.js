import React from "react";
import "../../assets/styles/gallery.scss"



export default class SliderImageList extends React.Component {

	constructor( props ){
		super( props );
		this.list = [
			{ name: "1", source: "1.jpg" },
			{ name: "2", source: "2.jpg" },
			{ name: "3", source: "3.jpg" },
			{ name: "4", source: "4.jpg" },
			{ name: "5", source: "5.jpg" },
			{ name: "6", source: "6.jpg" },
			{ name: "7", source: "7.jpg" },
			{ name: "8", source: "8.jpg" },
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
		this.image.current.style.backgroundImage = "url( ../assets/images/gallery/" + this.list[ key ].source + " )";

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
			<section className={"slider-image-list"}>
				<div key={ "image-display" } className={ "slider-display" }>
					<div key={ "image-prev" } className={ "slider-prev" } onClick={ this.prev.bind( this ) }></div>
					<div key={ "image" } className={ "slider-image" } ref={ this.image }></div>
					<div key={ "image-next" } className={ "slider-next" } onClick={ this.next.bind( this ) }></div>
				</div>
				<div key={ "image-left" } className={ "slider-left" } onClick={ this.left.bind( this ) }></div>
				<div key={ "image-list" } className={ "slider-list" } ref={ this.imageList }>
					{ this.list.map( (value, key) =>
						<div key={ value.source } className={ "slider-item" } onClick={ this.click.bind( this, key ) } style={{ backgroundImage: "url( ../assets/images/gallery/" + value.source + ")" }}></div>
					) }
				</div>
				<div key={ "image-right" } className={ "slider-right" } onClick={ this.right.bind( this ) }></div>
			</section>
		)
	}

};