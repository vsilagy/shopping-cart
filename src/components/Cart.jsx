import { useContext } from 'react';
import ShopContext from '../context/shop-context';
import SHOP_DATA from '../shop-data';

const Cart = () => {
	const { item, addToCart, removeFromCart } = useContext(ShopContext);
	return (
		<div className="max-w-screen-lg h-full mx-auto p-4">
			<div>
				<h1 className="font-2xl font-bold">Your Cart Items</h1>
			</div>
			<div>
				{SHOP_DATA.map((data) => {
					if (item[data.id] !== 0) {
						return (
							<div className="flex items-center justify-start">
								<img src={data.image} className="w-24 md:w-40" />
								<div className="w-48 md:w-64 h-full flex flex-col gap-8">
									<div>
										<p className="flex justify-between items-center text-base md:text-xl">
											{data.name}{' '}
											<span className="font-semibold">
												$ {data.price}
											</span>
										</p>
										<p className="text-sm text-gray-500">
											{data.company}
										</p>
									</div>
									<p className="text-gray-500 ">
										Qt: {item[data.id]}
									</p>
								</div>
							</div>
						);
					}
				})}
			</div>
		</div>
	);
};

export default Cart;
