import { useContext } from 'react';
import ShopContext from '../context/shop-context';
import SHOP_DATA from '../shop-data';

const Cart = () => {
	const { item, addToCart, removeFromCart, updateCart } =
		useContext(ShopContext);
	return (
		<section className="relative w-full">
			<div className="max-w-screen-lg mx-auto p-4">
				<h1 className="font-2xl font-bold">Your Cart Items</h1>
				<div>
					{SHOP_DATA.map((data) => {
						if (item[data.id] !== 0) {
							return (
								<div className="w-96 md:w-[36rem] flex items-center gap-5 py-4 border-b border-gray-300">
									<div className="bg-red-200 rounded">
										<img src={data.image} className="w-24 md:w-64" />
									</div>
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
										<div className="flex items-center justify-start gap-2 text-sm text-gray-500 md:text-base md:gap-3">
											<p>Quantity:</p>
											<button
												onClick={() => removeFromCart(data.id)}
												className="w-5 h-5 bg-red-200 rounded-full text-sm">
												-
											</button>
											<input
												readOnly
												value={item[data.id]}
												onChange={(e) =>
													updateCart(Number(e.target.value), data.id)
												}
												className="w-4 font-semibold text-center"
											/>
											<button
												onClick={() => addToCart(data.id)}
												className="w-5 h-5 bg-red-200 rounded-full text-sm">
												+
											</button>
										</div>
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
