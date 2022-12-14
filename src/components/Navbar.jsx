import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineShopping } from 'react-icons/ai';

const Navbar = () => {
	return (
		<nav className="relative w-full max-w-screen-lg mx-auto">
			<div className=" p-4 flex items-center justify-between ">
				<h1 className="text-3xl font-bold">Trade</h1>
				<div className="flex items-center gap-4 text-xl font-semibold">
					<Link to="/">Home</Link>
					<Link to="/shop">Shop</Link>
					<Link to="/cart">
						<AiOutlineShopping size={30} />
					</Link>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
