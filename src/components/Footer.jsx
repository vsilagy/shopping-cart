import { RiGithubFill } from 'react-icons/ri';

const Footer = () => {
	return (
		<footer className="w-full">
			<div className="max-w-screen-lg mx-auto flex justify-center items-center p-4 gap-2">
				<p>Made by vsilagy</p>
				<a
					href="https://github.com/vsilagy"
					target={'_blank'}
					rel={'noreferrer'}>
					<RiGithubFill className="text-2xl hover:scale-125  hover:text-neonGreen duration-500" />
				</a>
			</div>
		</footer>
	);
};

export default Footer;
