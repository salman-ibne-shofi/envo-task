import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Banner from "./Banner";
import GetAnswers from "./GetAnswers";
import HowWeWork from "./HowWeWork";
import ClientsRev from "./ClientsRev";
import Team from "./Team";
import FAQ from "./FAQ";
import Contact from "./Contact";
import Services from "./Services";

const Home = () => {
	return (
		<>
			{/* Hero */}
			<Banner />

			{/* Services */}
			<Services />

			{/* Get your answers section */}
			<GetAnswers />

			{/* How we work section */}
			<HowWeWork />

			{/* Clients Review */}
			<ClientsRev />

			{/* Team members section */}
			<Team />

			{/* FAQ section */}
			<FAQ />

			{/* Let us know section */}
			<Contact />
		</>
	);
};

export default Home;
