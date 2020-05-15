import React from "react";
import "../../assets/styles/gallery.scss";
import { Config } from "../config";


export default class SliderImageList extends React.Component {

	constructor( props ){
		super( props );

		this.list = [];
		this.display = -1;
		this.sliderDisplay = React.createRef();
		this.image1 = React.createRef();
		this.image2 = React.createRef();
		this.imageList = React.createRef();

		this.interval = null;
		this.rotationInterval = null;

		this.textBlock ={
			textTitle: React.createRef(),
			refBackgroundText: React.createRef(),
			blockPromotion:React.createRef(),
			titleRotate: React.createRef(),
			descriptionRotate: React.createRef()
		};

		this.refPrev = React.createRef();
		this.refNext = React.createRef();
		this.carousel =  React.createRef();
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

		this.textBlock.textTitle.current.innerHTML = this.list[ key ].title;
		this.textBlock.titleRotate.current.innerHTML = this.list[ key ].titleRotate;
		this.textBlock.descriptionRotate.current.innerHTML = this.list[ key ].descriptionRotate;

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

		let image1Source = "../assets/images/" + this.list[ key1 ].source;
		image1.onload = ( event ) => {
			path1 = image1Source;
			this.animation( key, path1, path2, width, position, left, direction );
		};
		image1.src = image1Source;

		let image2Source = "../assets/images/" + this.list[ key2 ].source;
		image2.onload = ( event ) => {
			path2 = image2Source;
			this.animation( key, path1, path2, width, position, left, direction );
		};
		image2.src = image2Source;

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

	resizeMobileRotate(){

		if( window.innerWidth < Config.sliderSize &&  this.props.mobileHeight) {
			this.sliderDisplay.current.classList.remove( "slider-height" );
			this.sliderDisplay.current.classList.add( "mobile-slider-height" );
		}else{
			this.sliderDisplay.current.classList.remove( "mobile-slider-height" );
			this.sliderDisplay.current.classList.add( "slider-height" );
		}
	};

	addSliderPosition(){

		if( window.innerWidth <  Config.sliderSize ){

			if(this.props.imagePosition){
				this.image1.current.classList.add( "mobile-position-gallery" );
				this.image2.current.classList.add( "mobile-position-gallery" );
			}
		}
	}

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
		}

		if( this.props.hideCarousel ){
			this.carousel.current.style.display = "none";
		}

		if( this.props.textcenter ){
			this.textBlock.textTitle.current.style.display = "none";
		}

		if( this.props.rotateHeight ){
			this.sliderDisplay.current.classList.add( "slider-height" );
			this.textBlock.refBackgroundText.current.classList.add( "ground-promotion" );
		}

		if( this.props.hideBlockPromotion ){
			this.textBlock.blockPromotion.current.style.display = "none";
		};

		window.addEventListener( "resize", () => {
			this.resizeMobileRotate();
			this.addSliderPosition();
		});
		this.resizeMobileRotate();
		//window.removeEventListener( "resize", () => this.resizeMobileRotate() );
	}

	render(){

		this.list = this.props.list || [];

		return(
			<section className={"slider-image-list d-flex fd-column"}>

				<div key={ "image-display" } className={ "slider-display" } ref={ this.sliderDisplay }>
					<p key={ "image-prev" }  className={ "slider-prev" }  onClick={ this.prev.bind( this ) }  ref={ this.refPrev }  >
						<span  key={ "arrow-prev" } className={"arrow-left"}>&lt;</span>
					</p>

					<div key={ "image1" } className={ "slider-image image1" } ref={ this.image1 }></div>
					<div key={ "image2" } className={ "slider-image image2" } ref={ this.image2 }></div>

					<div className={"backdrop-title-image"} ref={ this.textBlock.refBackgroundText }>
						<p key={"title-image"} ref={ this.textBlock.textTitle } className={"title-image"}></p>

						<div  className={"block-promotions"} ref={ this.textBlock.blockPromotion }>
							<span ref={ this.textBlock.titleRotate } className={"title-promotions"}></span>
							<span   ref={ this.textBlock.descriptionRotate} className={"description-promotions"}></span>

							<p className={"btn-deploy-info"}>
								<span className={"text-deploy-info"}>MORE INFO</span>
							</p>
						</div>
					</div>

					<p key={ "image-next" }  className={ "slider-next" } onClick={ this.next.bind( this ) } ref ={ this.refNext }>
						<span className={"arrow-right"}>	&gt;</span>
					</p>
				</div>

				<div className={"carousel d-flex"} ref={ this.carousel}>
					<div className={"btn-arrow-left"} onClick={ this.left.bind( this ) }>
						<p key={ "image-left" } className={ "slider-left" }>&#10094;</p>
					</div>

					<p key={ "image-list" } className={ "slider-list" } ref={ this.imageList }>
						{ this.list.map( (value, key) =>
							<span key={ value.source } className={ "slider-item" } onClick={ this.click.bind( this, key ) } style={{ backgroundImage: "url(../assets/images/" + value.preview + ")" }}></span>
						) }
					</p>

					<div  className={"btn-arrow-right"} onClick={ this.right.bind( this ) }>
						<p key={ "image-right" } className={ "slider-right" } >&#10095;</p>
					</div>
				</div>

			</section>
		)
	}

};
