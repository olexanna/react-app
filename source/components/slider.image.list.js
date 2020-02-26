import React from "react";
import "../../assets/styles/gallery.scss"



export default class SliderImageList extends React.Component {

	constructor( props ){
		super( props );

		this.list = [];
		this.display = -1;
		this.image1 = React.createRef();
		this.image2 = React.createRef();
		this.imageList = React.createRef();
		this.textTitle =  React.createRef();

		this.interval = null;
		this.rotationInterval = null;

		this.refPrev = React.createRef();
		this.refNext = React.createRef();
		this.carousel =  React.createRef();
		this.refBackgroundText = React.createRef();
	};

	left(){
		this.imageList.current.scrollLeft = this.imageList.current.scrollLeft - 128;
	};
	right(){
		this.imageList.current.scrollLeft = this.imageList.current.scrollLeft + 128;
	};

	animation( key, path1, path2, width, position, left, direction ){

		if( !path1 || !path2 )
			return;

		let speed = 64;

		this.image1.current.style.backgroundImage = "url( " + path1 + " )";
		this.image2.current.style.backgroundImage = "url( " + path2 + " )";

		this.textTitle.current.innerHTML = this.list[ key ].title;
		this.image1.current.style.left = ( (position - left) + "px" );
		this.image2.current.style.left = ( (position + width - left) + "px" );

		clearInterval( this.interval );
		this.interval = setInterval(() => {

			if( left >= width || left <= -width ){
				clearInterval( this.interval );
				return;
			};

			left += speed * direction;

			if( left > width )
				left = width;
			if( left < -width )
				left = -width;

			this.image1.current.style.left = ( (position - left) + "px" );
			this.image2.current.style.left = ( (position + width - left) + "px" );
		}, 1000 / 60 );

	};
	click( key ){

		if( key < 0 || key >= this.list.length )
			return;

		if( key == 0 || this.props.hideui )
			{ this.refPrev.current.style.display = "none"; }
		else
			{ this.refPrev.current.style.display = "block"; }

		if( key == (this.list.length - 1)|| this.props.hideui )
			{ this.refNext.current.style.display = "none"; }
		else
			{ this.refNext.current.style.display = "block"; }

		let left = 0;
		let width = this.image1.current.clientWidth || 1640;
		let direction = key > this.display ? 1 : -1;
		let position = direction > 0 ? 0 : -width;
		let key1 = direction > 0 ? this.display : key;
		let key2 = direction > 0 ? key : this.display;
		this.display = key;

		if( !this.list[ key1 ] ){
			key1 = key2;
			left = width;
		}else if( key1 === key2 )
			left = -width;

		let image1 = new Image();
		let image2 = new Image();
		let path1 = "";
		let path2 = "";

		image1.onload = ( event ) => {
			path1 = event.path[ 0 ].src;
			this.animation( key, path1, path2, width, position, left, direction );
		};
		image1.src = "../assets/images/" + this.list[ key1 ].source;
		image2.onload = ( event ) => {
			path2 = event.path[ 0 ].src;
			this.animation( key, path1, path2, width, position, left, direction );
		};
		image2.src = "../assets/images/" + this.list[ key2 ].source;

	};
	rotation( time ){

		clearInterval( this.rotationInterval );
		this.rotationInterval = setInterval(() => {

			let index = this.display + 1;

			if( index >= this.list.length )
				index = 0;

			this.click( index );

		}, time );

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

		if( this.props.rotation > 0 )
			this.rotation( this.props.rotation );

		if( this.props.hideui ){
			this.refNext.current.style.display = "none";
			this.refPrev.current.style.display = "none";
			this.imageList.current.style.display = "none";
		};

		if( this.props.hideCarousel ){
			this.carousel.current.style.display = "none";
		};

		if( this.props.textcenter ){
			this.refBackgroundText.current.style.display="none";
		};

	};


	render(){

		this.list = this.props.list || [];

		return(
			<section className={"slider-image-list d-flex fd-column"}>

				<div key={ "image-display" } className={ "slider-display" }>
					<p key={ "image-prev" }  className={ "slider-prev" }  onClick={ this.prev.bind( this ) }  ref={ this.refPrev }  >
						<span  key={ "arrow-prev" } className={"arrow-left"}>&lt;</span>
					</p>

					<div key={ "image1" } className={ "slider-image image1" } ref={ this.image1 }></div>
					<div key={ "image2" } className={ "slider-image image2" } ref={ this.image2 }></div>
					<p className={"backdrop-title-image"} ref={ this.refBackgroundText }>
						<span key={"title-image"} ref={ this.textTitle } className={"title-image"}></span>
					</p>

					<p key={ "image-next" }  className={ "slider-next" } onClick={ this.next.bind( this ) } ref ={ this.refNext }>
						<span className={"arrow-right"}>	&gt;</span>
					</p>
				</div>

				<div className={"carousel d-flex"} ref={ this.carousel}>
					<div className={"btn-arrow-left"} onClick={ this.left.bind( this ) }>
						<p key={ "image-left" } className={ "slider-left" } ></p>
					</div>

					<p key={ "image-list" } className={ "slider-list" } ref={ this.imageList }>
						{ this.list.map( (value, key) =>
							<span key={ value.preview } className={ "slider-item" } onClick={ this.click.bind( this, key ) } style={{ backgroundImage: "url(../assets/images/" + value.preview + ")" }}></span>
						) }
					</p>

					<div  className={"btn-arrow-right"} onClick={ this.right.bind( this ) }>
						<p key={ "image-right" } className={ "slider-right" } ></p>
					</div>
				</div>

			</section>
		)
	}

};
