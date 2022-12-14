import { useContext } from 'react';
import SHOP_DATA from '../shop-data';
import ShopContext from '../context/shop-context';

const Shop = () => {
	const { item, addToCart } = useContext(ShopContext);

	return (
		<div className="max-w-screen-lg mx-auto">
			<div>
				<h2 className="p-4 font-bold text-4xl">All Coffee</h2>
			</div>
			<div className="w-full py-4 flex flex-wrap justify-center gap-x-6 gap-4 md:gap-8">
				{SHOP_DATA.map((data) => {
					return (
						<div
							key={data.id}
							className="bg-red-200 w-80 h-[31rem] rounded flex flex-col items-center">
							<img src={data.image} className="w-80" />
							<div className="px-4 gap-2">
								<p className="font-bold text-2xl text-gray-500">
									{data.taste}
								</p>
								<p className="font-bold">{data.company}</p>
								<p className="text-2xl font-bold">{data.name}</p>
								<p className="text-gray-500 font-bold">
									${data.price}
								</p>
								<button
									onClick={() => addToCart(data.id)}
									className="mt-2 w-40 py-2 bg-red-500 rounded text-center font-semibold  hover:text-white hover:opacity-80">
									Add to Cart{' '}
									{item[data.id] > 0 && (
										<span className="font-bold">
											({item[data.id]})
										</span>
									)}
								</button>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Shop;
