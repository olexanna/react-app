import React from "react";
import SliderImageList from "./slider.image.list";
import "../../assets/styles/gallery.scss"


let GalleryList = [
	{ title: "Making Pistachio Ice Cream with Vertu Diavoletto coffee",
		source: "/gallery/display-coffe/bigImgCoffe/Affogato-Pistachio-Con-Espresso-Schiuma.jpg",
		preview: "/gallery/preview-coffe/prewieImgCoffe/Affogato-Pistachio-Con-Espresso-Schiuma-m.jpg"
	},
	{ title: "Layers of loveliness make up this comforting latte macchiato. The coffee sinks deeply through the textured soy milk until it finally reaches the sweet hit of caramel at the bottom of the glass.",
		source: "/gallery/display-coffe/bigImgCoffe/BIANCO-LEGGERO-ALTERNATIVE-SOY-MILK.jpg",
		preview: "/gallery/preview-coffe/prewieImgCoffe/BIANCO-LEGGERO-ALTERNATIVE-SOY-MILK-m.jpg"
	},
	{ title: "We’ve taken the popular Flat White and jazzed it up to something more memorable. The incredible combination of chestnut cream and oat milk brings a whole new dimension to this favourite coffee.",
		source: "/gallery/display-coffe/bigImgCoffe/Chestnut-Oat-Flat-White.jpg",
		preview: "/gallery/preview-coffe/prewieImgCoffe/Chestnut-Oat-Flat-White-m.jpg"
	},
	{ title: "This is surely one to take your time over. The sweet chestnut cream, the smoothly textured soy milk and the intense Corto on top cry out for a comfy sofa and a good book. " +
			"The ultimate in taste decadence… and you deserve it.",
		source: "/gallery/display-coffe/bigImgCoffe/Chestnut-Soy-Cappuccino.jpg",
		preview: "/gallery/preview-coffe/prewieImgCoffe/Chestnut-Soy-Cappuccino-m.jpg"
	},
	{ title: "Lovers of fancy sweet sensations listen up because this cappuccino is for you. " +
			"With a base of condensed milk, it is finished with a cinnamon flourish – the memory of which will dance in your mouth long after you’ve finished this vibrant cup.",
		source: "/gallery/display-coffe/bigImgCoffe/Cinnabombon.jpg",
		preview: "/gallery/preview-coffe/prewieImgCoffe/Cinnabombon-m.jpg"
	},
	{ title: "When preparing Cloudberry Affogato  is used a type of coffee  Variations Nordic Cloudberry Flavoured with additional fat cream, " +
			"vanilla ice cream, extract cloudberry, and serve with a few dried cranberries or fresh blueberries on top. ",
		source: "/gallery/display-coffe/bigImgCoffe/Cloudberry-Affogato.jpg",
		preview: "/gallery/preview-coffe/prewieImgCoffe/Cloudberry-Affogato-m.jpg"
	},
	{ title: "Small yet deliciously mighty, we use equal parts milk and coffee to dilute the espresso just enough and take the edge off any acidity. " +
			"This mini treasure’s milk is simply steamed rather than texturized or frothed. The perfect little package.",
		source: "/gallery/display-coffe/bigImgCoffe/Cortado.jpg",
		preview: "/gallery/preview-coffe/prewieImgCoffe/Cortado-m.jpg"
	},
	{ title: "Feeling alternative? Why not create a beautifully layered soy milk drink with sweet Hazelnut syrup hiding within. As your taste buds work their way through the frothed milk, a surprising nutty finish awaits.",
		source: "/gallery/display-coffe/bigImgCoffe/Dolce-and-Soy.jpg",
		preview: "/gallery/preview-coffe/prewieImgCoffe/Dolce-and-Soy-m.jpg"
	},
	{ title: "Twice the cup, twice the taste. A classic cappuccino but just more of the deliciousness." +
			"If you’re always disheartened that your coffee is gone too soon then this double shot of coffee from our 80ml Bianco Leggero capsule is just the remedy.",
		source: "/gallery/display-coffe/bigImgCoffe/Double-Cappuccino.jpg",
		preview: "/gallery/preview-coffe/prewieImgCoffe/Double-Cappuccino-m.jpg"
	},
	{ title: "Stay cool with the new Flat White Over Ice recipe inspired by Australia, the perfect partner this summer season.",
		source: "/gallery/display-coffe/bigImgCoffe/Flat-White-Over-Ice.jpg",
		preview: "/gallery/preview-coffe/prewieImgCoffe/Flat-White-Over-Ice-m.jpg"
	},
	{ title: "Oh, doesn’t it look glorious? Sweetened with honey and topped with gingerbread pieces, the striking layers of the coffee and luxuriously whipped cream are reason enough to just stare at it alone.",
		source: "/gallery/display-coffe/bigImgCoffe/Ginger-Bread-Viennois.jpg",
		preview: "/gallery/preview-coffe/prewieImgCoffe/Ginger-Bread-Viennois-m.jpg"
	},
	{ title: "When cooking, Golden Shores, uses a type of Arpeggio coffee with the addition of caramel syrup, ice cubes, almond milk, and a little orange zest.",
		source: "/gallery/display-coffe/bigImgCoffe/Golden-Shores.jpg",
		preview: "/gallery/preview-coffe/prewieImgCoffe/Golden-Shores-m.jpg"
	},
	{ title: "We’ve taken the most celebrated recipe and given it a boost with our Scuro capsule. Decadently creamy yet intensely satisfying, the strength of the coffee muddles beautifully with the thick layer of frothed milk.",
		source: "/gallery/display-coffe/bigImgCoffe/Intense-Cappuccino.jpg",
		preview: "/gallery/preview-coffe/prewieImgCoffe/Intense-Cappuccino-m.jpg"
	},
	{ title: "When cooking, Long Black Over Ice соffe, uses a type of Arpeggio coffee with the addition of coconut syrup, ice cubes, and San Pellegrino Sparkling water",
		source: "/gallery/display-coffe/bigImgCoffe/Long-Black-Over-Ice.jpg",
		preview: "/gallery/preview-coffe/prewieImgCoffe/Long-Black-Over-Ice-m.jpg"
	},
	{ title: "There’s nothing hum-drum about this creation – if you’re after an alternative milk and an altogether different sweetness then give this little cup a try." +
			"With Oat milk and Agave syrup taking centre stage, you’ll open a whole new way of taking your coffee.",
		source: "/gallery/display-coffe/bigImgCoffe/nespresso-recipes-Agave-Oat-Cappuccino.jpg",
		preview: "/gallery/preview-coffe/prewieImgCoffe/nespresso-recipes-Agave-Oat-Cappuccino-m.jpg"
	},
	{ title: "Sometimes simplicity rules. The distinctive and generous crema of a Coffee combines with milk and the rich roasted notes to create a tasty treat.",
		source: "/gallery/display-coffe/bigImgCoffe/Reverso-Intenso.jpg",
		preview: "/gallery/preview-coffe/prewieImgCoffe/Reverso-Intenso-m.jpg"
	},
	{ title: "This almost feels like we should be keeping it a secret it’s so good. An intense yet creamy latte but with a delicious salted caramel chocolate hit lurking deep within.",
		source: "/gallery/display-coffe/bigImgCoffe/Salted-Caramel-Mocha.jpg",
		preview: "/gallery/preview-coffe/prewieImgCoffe/Salted-Caramel-Mocha-m.jpg"
	},
	{ title: "Turn your coffee moment into a celebrity as you turn the wow factor up to ten with this little delight. Maple syrup, condensed milk and a popcorn finale all help to transform this cappuccino into a showstopper",
		source: "/gallery/display-coffe/bigImgCoffe/Sweet-Popcorn-Cappuccino.jpg",
		preview: "/gallery/preview-coffe/prewieImgCoffe/Sweet-Popcorn-Cappuccino-m.jpg"
	},
	{ title: "It’s Paris-Brest in a cup. Together with the Variations Paris Praliné espresso, the hazelnut, chocolate, cream and dark chocolate all come together to remind you of the famous praline choux pastry dessert.",
		source: "/gallery/display-coffe/bigImgCoffe/Variations-paris-praline-creamy-indulgence.jpg",
		preview: "/gallery/preview-coffe/prewieImgCoffe/Variations-paris-praline-creamy-indulgence-m.jpg"
	}
];
let BannerList = [
	{ title: "gsdfgdfg",
		source: "/rotate/background-1.jpg",
		preview: "/rotate/background-1.jpg",
	},
	{ title: "adasda",
		source: "/rotate/background-2.jpg",
		preview: "/rotate/background-2.jpg",
	},
	{ title: "adasda",
		source: "/rotate/background-3.jpg",
		preview: "/rotate/background-3.jpg",
	},
	{ title: "adasda",
		source: "/rotate/background-4.jpg",
		preview: "/rotate/background-4.jpg",
	}
];

export default class Gallery extends React.Component {

	constructor( props ){
		super( props );
	}

	render(){
		return(
			<article className={"gallery"}>
				<SliderImageList rotation={ 2000 } hideui={ true } textcenter={ true } list={ BannerList }></SliderImageList>
				<SliderImageList list={ GalleryList }></SliderImageList>
			</article>
		)
	}

}
