import { useContext } from 'react';
import { Link } from 'react-router-dom';
import ShopContext from '../context/shop-context';
import SHOP_DATA from '../shop-data';

const Cart = () => {
	const {
		items,
		incrementItems,
		decrementItems,
		updateCart,
		getTotal,
	} = useContext(ShopContext);
	const total = getTotal();

	return (
		<section className="relative w-full max-w-screen-lg mx-auto">
			<div className="p-4 pt-0">
				<h1 className="text-2xl font-bold">Your Cart</h1>
				<div>
					{SHOP_DATA.map((data) => {
						if (items[data.id] !== 0) {
							return (
								<div
									key={data.id}
									className="w-80 md:w-[36rem] flex items-center gap-5 py-4 border-b border-gray-300">
									<div className="bg-red-200 rounded">
										<img src={data.image} className="w-32 md:w-64" />
									</div>
									<div className="flex flex-col w-full gap-4 md:gap-12">
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
										<div className="flex items-center justify-start gap-2 text-xs text-gray-500 md:text-sm md:gap-3">
											<p>Quantity:</p>
											<button
												onClick={() => decrementItems(data.id)}
												className="w-5 h-5 bg-red-200 rounded-full text-sm">
												-
											</button>
											<input
												readOnly
												value={items[data.id]}
												onChange={(e) =>
													updateCart(Number(e.target.value), data.id)
												}
												className="w-4 font-semibold text-center text-sm"
											/>
											<button
												onClick={() => incrementItems(data.id)}
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
				{total > 0 ? (
					<div className="w-80 md:w-[36rem] py-4 flex items-center justify-between">
						<h2 className="text-xl">
							Total: <span className="font-bold ml-4">$ {total}</span>
						</h2>
						<button className="px-8 py-2 font-semibold rounded bg-red-500 hover:text-white hover:opacity-80">
							Checkout
						</button>
					</div>
				) : (
					<div className="py-[20%] text-center font-semibold">
						<h2 className="text-xl  text-gray-500">
							Your Cart is Empty
						</h2>
						<Link to="/shop" className="underline text-red-500">
							Try our coffee
						</Link>
					</div>
				)}
			</div>
		</section>
	);
};

export default Cart;
