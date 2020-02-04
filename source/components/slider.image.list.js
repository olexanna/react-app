import React from "react";
import "../../assets/styles/gallery.scss"



export default class SliderImageList extends React.Component {

	constructor( props ){
		super( props );

		this.list = [
			{ title: "Making Pistachio Ice Cream with Vertu Diavoletto coffee",
			   source: "Affogato-Pistachio-Con-Espresso-Schiuma.jpg",
			   preview:"Affogato-Pistachio-Con-Espresso-Schiuma-m.jpg"

			},
			{ title: "Layers of loveliness make up this comforting latte macchiato. The coffee sinks deeply through the textured soy milk until it finally reaches the sweet hit of caramel at the bottom of the glass.",
			   source: "BIANCO-LEGGERO-ALTERNATIVE-SOY-MILK.jpg",
			   preview:"BIANCO-LEGGERO-ALTERNATIVE-SOY-MILK-m.jpg"
			},
			{ title: "We’ve taken the popular Flat White and jazzed it up to something more memorable. The incredible combination of chestnut cream and oat milk brings a whole new dimension to this favourite coffee.",
			   source: "Chestnut-Oat-Flat-White.jpg",
			   preview:"Chestnut-Oat-Flat-White-m.jpg"
			},
			{ title: "This is surely one to take your time over. The sweet chestnut cream, the smoothly textured soy milk and the intense Corto on top cry out for a comfy sofa and a good book. " +
						"The ultimate in taste decadence… and you deserve it.",
			  source: "Chestnut-Soy-Cappuccino.jpg",
			  preview:"Chestnut-Soy-Cappuccino-m.jpg"
			},
			{ title: "Lovers of fancy sweet sensations listen up because this cappuccino is for you. " +
					   "With a base of condensed milk, it is finished with a cinnamon flourish – the memory of which will dance in your mouth long after you’ve finished this vibrant cup.",
			  source: "Cinnabombon.jpg",
			  preview:"Cinnabombon-m.jpg"
			},
			{ title: "When preparing Cloudberry Affogato  is used a type of coffee  Variations Nordic Cloudberry Flavoured with additional fat cream, " +
					   "vanilla ice cream, extract cloudberry, and serve with a few dried cranberries or fresh blueberries on top. ",
			  source: "Cloudberry-Affogato.jpg",
			  preview:"Cloudberry-Affogato-m.jpg"
			},
			{ title: "Small yet deliciously mighty, we use equal parts milk and coffee to dilute the espresso just enough and take the edge off any acidity. " +
					   "This mini treasure’s milk is simply steamed rather than texturized or frothed. The perfect little package.",
			  source: "Cortado.jpg",
			  preview:"Cortado-m.jpg"
			},
			{ title: "Feeling alternative? Why not create a beautifully layered soy milk drink with sweet Hazelnut syrup hiding within. As your taste buds work their way through the frothed milk, a surprising nutty finish awaits.",
			  source: "Dolce-and-Soy.jpg",
			  preview:"Dolce-and-Soy-m.jpg"
			},
			{ title: "Twice the cup, twice the taste. A classic cappuccino but just more of the deliciousness." +
					   "If you’re always disheartened that your coffee is gone too soon then this double shot of coffee from our 80ml Bianco Leggero capsule is just the remedy.",
			  source: "Double-Cappuccino.jpg",
			  preview:"Double-Cappuccino-m.jpg"
			},
			{ title: "Stay cool with the new Flat White Over Ice recipe inspired by Australia, the perfect partner this summer season.",
			  source: "Flat-White-Over-Ice.jpg",
			  preview:"Flat-White-Over-Ice-m.jpg"
			},
			{ title: "Oh, doesn’t it look glorious? Sweetened with honey and topped with gingerbread pieces, the striking layers of the coffee and luxuriously whipped cream are reason enough to just stare at it alone.",
			   source: "Ginger-Bread-Viennois.jpg",
			   preview:"Ginger-Bread-Viennois-m.jpg"
			},
			{ title: "When cooking, Golden Shores, uses a type of Arpeggio coffee with the addition of caramel syrup, ice cubes, almond milk, and a little orange zest.",
			   source: "Golden-Shores.jpg",
			   preview:"Golden-Shores-m.jpg"
			},
			{ title: "We’ve taken the most celebrated recipe and given it a boost with our Scuro capsule. Decadently creamy yet intensely satisfying, the strength of the coffee muddles beautifully with the thick layer of frothed milk.",
			   source: "Intense-Cappuccino.jpg",
			   preview:"Intense-Cappuccino-m.jpg"
			},
			{ title: "When cooking, Long Black Over Ice соffe, uses a type of Arpeggio coffee with the addition of coconut syrup, ice cubes, and San Pellegrino Sparkling water",
			   source: "Long-Black-Over-Ice.jpg",
			   preview:"Long-Black-Over-Ice-m.jpg"
			},
			{ title: "There’s nothing hum-drum about this creation – if you’re after an alternative milk and an altogether different sweetness then give this little cup a try." +
					   "With Oat milk and Agave syrup taking centre stage, you’ll open a whole new way of taking your coffee.",
			   source: "nespresso-recipes-Agave-Oat-Cappuccino.jpg",
			   preview:"nespresso-recipes-Agave-Oat-Cappuccino-m.jpg"
			},
			{ title: "Sometimes simplicity rules. The distinctive and generous crema of a Coffee combines with milk and the rich roasted notes to create a tasty treat.",
			   source: "Reverso-Intenso.jpg",
			   preview:"Reverso-Intenso-m.jpg"
			},
			{ title: "This almost feels like we should be keeping it a secret it’s so good. An intense yet creamy latte but with a delicious salted caramel chocolate hit lurking deep within.",
			   source: "Salted-Caramel-Mocha.jpg",
			   preview:"Salted-Caramel-Mocha-m.jpg"
			},
			{ title: "Turn your coffee moment into a celebrity as you turn the wow factor up to ten with this little delight. Maple syrup, condensed milk and a popcorn finale all help to transform this cappuccino into a showstopper",
			   source: "Sweet-Popcorn-Cappuccino.jpg",
			   preview:"Sweet-Popcorn-Cappuccino-m.jpg"
			},
			{ title: "It’s Paris-Brest in a cup. Together with the Variations Paris Praliné espresso, the hazelnut, chocolate, cream and dark chocolate all come together to remind you of the famous praline choux pastry dessert.",
			   source: "Variations-paris-praline-creamy-indulgence.jpg",
			   preview:"Variations-paris-praline-creamy-indulgence-m.jpg"
			}
		];
		this.display = 0;
		this.image = React.createRef();
		this.image2 = React.createRef();
		this.imageList = React.createRef();
		this.textTitle =  React.createRef();

		this.refPrev = React.createRef();
		this.refNext = React.createRef();
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

		this.textTitle.current.innerHTML = this.list[ key ].title;

		//this.image.current.style.width = (this.image * 1640)+ "px" ;
		this.image.current.style.left =  ( this.display * 1640 * -1 )  + "px";

		if( key == 0 )
			{ this.refPrev.current.style.display = "none"; }
		else
			{ this.refPrev.current.style.display = "block"; }

		if( key == (this.list.length - 1) )
			{ this.refNext.current.style.display = "none"; }
		else
			{ this.refNext.current.style.display = "block"; }

		console.log( this.list[ key ].title, key );
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
					<p  key={ "image-prev" }  className={ "slider-prev" }  onClick={ this.prev.bind( this ) }  ref={ this.refPrev }  >
						<span  key={ "arrow-prev" } className={"arrow-left"}>&lt;</span>
					</p>

					<div key={ "image" } className={ "slider-image" } ref={ this.image }></div>
					<div key={ "image2" } className={ "slider-image" } ref={ this.image2 }></div>
					<p className={"backdrop-title-image"}>
						<span key={"title-image"} ref={ this.textTitle } className={"title-image"}></span>
					</p>

					<p  key={ "image-next" }  className={ "slider-next" } onClick={ this.next.bind( this ) } ref ={ this.refNext }>
						<span className={"arrow-right"}>	&gt;</span>
					</p>
				</div>

				<div className={"carousel d-flex"}>
					<button key={ "image-left" } className={ "slider-left" } onClick={ this.left.bind( this ) }></button>

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
