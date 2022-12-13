import barista from '../assets/barista.mp4';
import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<div className="h-screen max-w-screen-lg mx-auto">
			<div className="relative max-w-sceen-lg h-96 flex flex-col items-center justify-center">
				<h1 className="z-20 text-white font-bold text-4xl p-4 ">
					Your mornings are better with Trade.
				</h1>
				<button className="text-xl font-bold z-20 mt-8 px-8 py-2 bg-red-500/90">
					<Link to="/shop">Buy Coffee</Link>
				</button>
				<video
					src={barista}
					type="video/mp4"
					autoPlay
					muted
					loop
					webkit-playsinline="true"
					playsInline
					className="absolute top-0 left-0 p-4 z-10 object-cover w-full h-full "
				/>
			</div>
			<div className="relative p-4 mt-8">
				<h2 className="text-xl font-bold py-4">
					A gift for every coffee lover.
				</h2>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Architecto vero delectus exercitationem dolorem nostrum,
					porro natus sint tenetur nulla magnam obcaecati autem sed
					nesciunt, error debitis labore, aliquam itaque vitae! Odio
					qui distinctio autem expedita cum similique eveniet nihil
					veritatis hic! Ea reiciendis praesentium, perferendis rem
					quae esse odit est voluptas illum deleniti aut impedit
					nostrum sed, libero ipsa quibusdam. Eos magnam minus quas.
					Esse voluptatem eaque natus maiores nobis distinctio facere.
					Nulla atque magnam magni sint nisi dolor vero. Id inventore,
					fuga veritatis illo animi nulla similique totam dolor?
					Officia expedita odit cum id recusandae
				</p>
			</div>
		</div>
	);
};

export default Home;
