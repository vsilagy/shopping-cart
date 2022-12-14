import { createContext, useState } from 'react';
import SHOP_DATA from '../shop-data';

const ShopContext = createContext(null);

const defaultCart = () => {
	let cart = {};
	for (let i = 1; i < SHOP_DATA.length + 1; i++) {
		cart[i] = 0;
	}
	return cart;
};
export const ShopContextProvider = (props) => {
	const [items, setItems] = useState(defaultCart());

	const getTotal = () => {
		let total = 0;
		for (let item in items) {
			if (items[item] > 0) {
				let itemInfo = SHOP_DATA.find(
					(data) => data.id === Number(item),
				);
				total += items[item] * itemInfo.price;
			}
		}
		return total;
	};

	const getCounter = () => {
		let total = 0;
		for (let item in items) {
			if (items[item] > 0) {
				let itemInfo = SHOP_DATA.find(
					(data) => data.id === Number(item),
				);
				total += items[item];
			}
		}
		return total;
	};

	const incrementItems = (itemId) => {
		setItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
	};

	const decrementItems = (itemId) => {
		setItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
	};

	const updateCart = (newAmount, itemId) => {
		setItems((prev) => ({ ...prev, [itemId]: newAmount }));
	};
	const contextValue = {
		items,
		incrementItems,
		decrementItems,
		updateCart,
		getTotal,
		getCounter,
	};

	return (
		<ShopContext.Provider value={contextValue}>
			{props.children}
		</ShopContext.Provider>
	);
};

export default ShopContext;
