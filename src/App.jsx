import {
	BrowserRouter as Router,
	Routes,
	Route,
} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Shop from './components/Shop';
import Cart from './components/Cart';
import Footer from './components/Footer';

function App() {
	return (
		<div className="w-screen h-screen overflow-x-hidden">
			<Router>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/shop" element={<Shop />} />
					<Route path="/cart" element={<Cart />} />
				</Routes>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
