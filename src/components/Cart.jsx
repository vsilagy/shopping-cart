import { useContext } from 'react';
import ShopContext from '../context/shop-context';
import SHOP_DATA from '../shop-data';

const Cart = () => {
	const { item, addToCart, removeFromCart } = useContext(ShopContext);
	return (
		<section className="relative w-full">
			<div className="max-w-screen-lg mx-auto p-4">
				<h1 className="font-2xl font-bold">Your Cart Items</h1>
				<div>
					{SHOP_DATA.map((data) => {
						if (item[data.id] !== 0) {
							return (
								<div className="w-96 md:w-[30rem] flex items-center py-4 border-b border-gray-300">
									<img src={data.image} className="w-24 md:w-48" />
									<div className="w-full flex flex-col gap-4 md:gap-12  ">
										<div>
											<p className="flex justify-between items-center md:text-xl">
												{data.name}{' '}
												<span className="font-semibold">
													$ {data.price}
												</span>
											</p>
											<p className="text-sm text-gray-500 md:text-base">
												{data.company}
											</p>
										</div>
										<p className="text-sm text-gray-500 md:text-base">
											Qt: {item[data.id]}
										</p>
									</div>
								</div>
							);
						}
					})}
				</div>
			</div>
		</section>
	);
};

export default Cart;
