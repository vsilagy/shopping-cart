import coffee1 from './assets/coffee-1.png';
import coffee2 from './assets/coffee-2.png';
import coffee3 from './assets/coffee-3.png';
import coffee4 from './assets/coffee-4.png';
import coffee5 from './assets/coffee-5.png';
import coffee6 from './assets/coffee-6.png';
import coffee7 from './assets/coffee-7.png';
import coffee8 from './assets/coffee-8.png';
import coffee9 from './assets/coffee-9.png';
import coffee10 from './assets/coffee-10.png';
import coffee11 from './assets/coffee-11.png';
import coffee12 from './assets/coffee-12.png';
import coffee13 from './assets/coffee-13.png';
import coffee14 from './assets/coffee-14.png';
import coffee15 from './assets/coffee-15.png';
import coffee16 from './assets/coffee-16.png';
import coffee17 from './assets/coffee-17.png';
import coffee18 from './assets/coffee-18.png';

const SHOP_DATA = [
	{
		id: 1,
		company: "PT's",
		name: 'Flatlander',
		text: 'Easy does it. And this coffee proves just that. A bittersweet aroma is balanced by a nutty, sweet finish. Here’s to one less complication.',
		taste: 'Sweet & Smooth',
		image: coffee1,
		price: 25,
	},
	{
		id: 2,
		company: 'Mother Tongue',
		name: 'Nebula Dark Roast',
		text: `Super honey-sweet and full-bodied, this comforting cup's rich chocolaty notes and hint of roast will satisfy any sweet tooth.`,
		taste: 'Comforting & Rich',
		image: coffee2,
		price: 22,
	},
	{
		id: 3,
		company: 'Greater Goods',
		name: 'Kickstart',
		text: 'Dark chocolate and brown sugar sweetness are front and center in this easy-drinking coffee, with a surprising (and delightful) note of rose throughout.',
		taste: 'Sweet & Smooth',
		image: coffee3,
		price: 22,
	},
	{
		id: 4,
		company: 'Panther',
		name: 'Mejor',
		text: 'Fruity and sweet, with a juicy note of cherry bolstered by a deep, nutty sweetness.',
		taste: 'Balanced & Fruity',
		image: coffee4,
		price: 25,
	},
	{
		id: 5,
		company: 'Cuvee',
		name: 'Emporioum Blend',
		text: 'Coffee should bring people together. This blend manages to unite three distinctly delicious single origins to create a truly harmonious coffee. Complex but approachable, no matter how you brew it.',
		taste: 'Sweet & Smooth',
		image: coffee5,
		price: 20,
	},
	{
		id: 6,
		company: 'Common Voice',
		name: 'Canopy',
		text: `A deep black cherry sweetness peeks through this coffee's pronounced dark chocolate and cinnamon notes.`,
		taste: 'Sweet & Smooth',
		image: coffee6,
		price: 19,
	},
	{
		id: 7,
		company: 'Methodical',
		name: 'Late Night',
		text: 'This (caffeinated) cozy cup brings you all the comfort you need in your morning routine: a smooth, rich body and deep chocolaty sweetness envelop notes of roasted walnut and hints of clove.',
		taste: 'Comforting & Rich',
		image: coffee7,
		price: 23,
	},
	{
		id: 8,
		company: 'Peixoto',
		name: 'Familia Peixoto',
		text: 'A lusciously creamy body and cozy sweetness make this coffee a hug in a mug, with just a hint of citrus aromatics to keep things interesting.',
		taste: 'Sweet & Smooth',
		image: coffee8,
		price: 23,
	},
	{
		id: 9,
		company: 'Joe',
		name: 'Amsterdam',
		text: `Rich, sweet, smooth - this comforting cup reminds us of chocolaty fudge with a toffee swirl. Perfect on its own or with a splash of your favorite milk, we're pretty sure you'll love this one.`,
		taste: 'Sweet & Smooth',
		image: coffee9,
		price: 25,
	},
	{
		id: 10,
		company: 'Feast',
		name: 'Milk & Honey Blend',
		text: 'With notes of bittersweet caramel, creamy milk chocolate, and a rich, roasty body - this luxurious blend lives up to its name.',
		taste: 'Comforting & Rich',
		image: coffee10,
		price: 25,
	},
	{
		id: 11,
		company: 'Huckleberry',
		name: 'Bom Senso',
		text: 'With a big, chocolaty body, cozy roasted almond nuttiness and tons of balanced caramel sweetness, this Trade-exclusive cup is just about as comforting as you can get.',
		taste: 'Comforting & Rich',
		image: coffee11,
		price: 25,
	},
	{
		id: 12,
		company: 'Sterling',
		name: 'Washington Blend',
		text: `Caramely sweetness, a rich dark chocolaty body, and just a hint of roastiness make this coffee a perfect daily driver.`,
		taste: 'Comforting & Rich',
		image: coffee12,
		price: 22,
	},
	{
		id: 13,
		company: 'Red Rooster',
		name: 'Funky Chicken',
		text: `Don't be surprised if you flap your arms and your feet start kickin' - this balanced blend brings together an earthy sweetness with a bright plum acidity.`,
		taste: 'Sweet & Smooth',
		image: coffee13,
		price: 21,
	},
	{
		id: 14,
		company: 'Temple',
		name: 'Guatemala Los Santos',
		text: 'Zippy citrus acidity up fronts fades into a rich and creamy chocolaty-nutty sweetness, complemented by a velvety smooth body.',
		taste: 'Sweet & Inviting',
		image: coffee14,
		price: 22,
	},
	{
		id: 15,
		company: 'Oren',
		name: 'City Blend',
		text: 'Sweet balance found in soft citrus acidity and toffee sweetness. So smooth and poetic, we had to write a haiku.',
		taste: 'Comforting & Rich',
		image: coffee15,
		price: 22,
	},
	{
		id: 16,
		company: 'Sightglass',
		name: 'Organic Toketee',
		text: 'You’re fancy, huh? So is this elevated take on the classic drip, blend. It’s carefully curated, seasonally rotating, and of course—cultured.',
		taste: 'Sweet & Smooth',
		image: coffee16,
		price: 25,
	},
	{
		id: 17,
		company: 'Irving Farm',
		name: '71 House Blend',
		text: `This signature House Blend was crafted as the hallmark coffee for Irving's original cafe at 71 Irving Place. Classic, rich, smooth flavors are great with milk.`,
		taste: 'Sweet & Smooth',
		image: coffee17,
		price: 25,
	},
	{
		id: 18,
		company: 'Alma',
		name: 'Enchanted',
		text: `Chocolaty sweetness and a kiss of roast make for a magically cozy cup.`,
		taste: 'Comforting & Rich',
		image: coffee18,
		price: 25,
	},
];

export default SHOP_DATA;
