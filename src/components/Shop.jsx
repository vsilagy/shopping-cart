import { useEffect, useState } from 'react';
import SHOP_DATA from '../shop-data';

const Shop = () => {
	return (
		<div className="max-w-screen-lg mx-auto">
			<div>
				<h2 className="p-4 font-bold text-4xl">All Coffee</h2>
			</div>
			<div className="w-full py-4 flex flex-wrap justify-center gap-4 md:gap-8">
				{SHOP_DATA.map((data) => {
					return (
						<div
							key={data.id}
							className="bg-red-200 w-72 h-[30rem] rounded flex flex-col items-center">
							<img src={data.image} className="w-80" />
							<div className="px-4 gap-2">
								<p className="font-bold text-2xl text-gray-500">
									{data.taste}
								</p>
								<p className="font-bold">{data.company}</p>
								<p className="text-2xl font-bold">{data.name}</p>
								{/* <p className="text-sm italic text-gray-500">
									{data.text}
								</p> */}
								<p className="text-gray-500 font-bold">
									${data.price}
								</p>
								<button className="bg-red-500 px-4 py-2 rounded text-center mt-2">
									Add to Cart
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
