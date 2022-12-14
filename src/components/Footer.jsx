import { RiGithubFill } from 'react-icons/ri';

const Footer = () => {
	return (
		<footer className="relative max-w-screen-lg mx-auto mt-auto">
			<div className="flex justify-center items-center p-8 gap-2">
				<p>Made by vsilagy</p>
				<a
					href="https://github.com/vsilagy"
					target={'_blank'}
					rel={'noreferrer'}>
					<RiGithubFill className="text-2xl hover:scale-125  hover:text-red-500 duration-500" />
				</a>
			</div>
		</footer>
	);
};

export default Footer;
