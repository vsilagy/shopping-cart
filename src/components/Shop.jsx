import { useContext } from 'react';
import SHOP_DATA from '../shop-data';
import ShopContext from '../context/shop-context';

const Shop = () => {
	const { items, incrementItems } = useContext(ShopContext);

	return (
		<section className="relative w-full max-w-screen-lg mx-auto">
			<div>
				<h2 className="p-4 font-bold text-4xl">All Coffees</h2>
			</div>
			<div className="w-full py-4 flex flex-wrap justify-center gap-x-6 gap-4 md:gap-8">
				{SHOP_DATA.map((data) => {
					return (
						<div
							key={data.id}
							className="bg-red-200 w-72 h-96 md:w-80 md:h-[32rem] rounded flex flex-col items-center">
							<img src={data.image} className="w-52 md:w-80" />
							<div className="px-4 gap-2">
								<p className="font-bold text-xl md:text-2xl">
									{data.name}
								</p>
								<p className="font-bold text-xs md:text-sm">
									{data.company}
								</p>
								<p className="font-semibold text-gray-500 md:text-xl">
									{data.taste}
								</p>
								<p className="text-gray-500 font-bold">
									${data.price}
								</p>
								<button
									onClick={() => incrementItems(data.id)}
									className="mt-2 px-5 py-2 bg-red-500 rounded text-center font-semibold  hover:text-white hover:opacity-80">
									Add to Cart{' '}
								</button>
							</div>
						</div>
					);
				})}
			</div>
		</section>
	);
};

export default Shop;
