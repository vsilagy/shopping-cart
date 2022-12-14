import React, { createContext, useState } from 'react';
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
	const [item, setItem] = useState(defaultCart());

	const addToCart = (itemId) => {
		setItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
	};

	const removeFromCart = (itemId) => {
		setItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
	};

	const contextValue = { item, addToCart, removeFromCart };

	return (
		<ShopContext.Provider value={contextValue}>
			{props.children}
		</ShopContext.Provider>
	);
};

export default ShopContext;
