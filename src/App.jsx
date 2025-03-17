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
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="*" element={<Service />} />
				<Route path="*" element={<Combo />} />
				<Route path="*" element={<Portfolio />} />
				<Route path="*" element={<About />} />
				<Route path="*" element={<Blogs />} />
			</Routes>
			<Footer />
		</>
	);
}

export default App;
