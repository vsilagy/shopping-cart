import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineShopping } from 'react-icons/ai';
import ShopContext from '../context/shop-context';

const Navbar = () => {
	const { getCounter } = useContext(ShopContext);
	let counter = getCounter();

	return (
		<nav className="relative w-full max-w-screen-lg mx-auto">
			<div className="p-4 flex items-center justify-between ">
				<h1 className="text-2xl font-bold md:text-3xl">Trade</h1>
				<div className="flex items-center gap-4 font-semibold md:text-xl">
					<Link to="/" className="hover:text-red-500">
						Home
					</Link>
					<Link to="/shop" className="hover:text-red-500">
						Shop
					</Link>
					<Link to="/cart" className="flex gap-[0.15rem]">
						<AiOutlineShopping
							size={24}
							className="hover:text-red-500"
						/>
						{counter > 0 ? (
							<span className="flex items-center justify-center text-[0.5rem] -ml-1 h-3 w-3 rounded-full text-center bg-red-500">
								{counter}
							</span>
						) : (
							<span className="w-3 h-3 -ml-1"> </span>
						)}
					</Link>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
