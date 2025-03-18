const Home = () => {
	return (
		<div className="bg-[#03135b] flex flex-col justify-center items-center text-white text-center pt-16">
			<p className="text-6xl font-bold mb-2">DIGITAL SERVICES</p>
			<p className="text-2xl font-semibold">
				BUILDING YOUR EMPIRE DIGITALLY
			</p>
			<div className="flex gap-4 pt-8">
				<a
					href="#"
					className="btn bg-[#FF693B] border-none px-12 transition-transform duration-300 hover:scale-110"
				>
					SEE PRICING
				</a>
				<a
					href="#"
					className="btn bg-transparent border-white px-12 transition-transform duration-300 hover:scale-110"
				>
					BOOK AN APPOINMENT
				</a>
			</div>
			<img
				src="https://i.ibb.co.com/1Yzkh2QM/Group-1000006048.png"
				alt=""
				className="py-16 h-46"
			/>
			<img
				src="https://i.ibb.co.com/TBQ3HKkQ/image-1.png"
				alt=""
				className="h-110 w-180"
			/>
		</div>
	);
};

export default Home;
