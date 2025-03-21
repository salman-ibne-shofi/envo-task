import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Service from "./components/Service";
import Combo from "./components/Combo";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Blogs from "./components/Blogs";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
	return (
		<>
			<div>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/service" element={<Service />} />
					<Route path="/combo" element={<Combo />} />
					<Route path="/portfolio" element={<Portfolio />} />
					<Route path="/about" element={<About />} />
					<Route path="/blogs" element={<Blogs />} />
				</Routes>
				<Footer />
			</div>
		</>
	);
}

export default App;
