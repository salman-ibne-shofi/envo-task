import React from "react";

function HowWeWork() {
	return (
		<div>
			<div className="hww-bg w-full h-full flex flex-col items-center text-center p-30">
				<h6>HOW WE WORK</h6>
				<h1 className="text-3xl font-semibold my-4">
					Our Process for Delivering <br /> Results
				</h1>
				<p>
					Lorem Ipsum is simply dummy text of the printing and
					typesetting industry. Lorem Ipsum has been the industry's
					standard dummy text ever since the 1500s, when an unknown
					printer took a galley of type and scrambled it to make a
					type specimen book.
				</p>
				<img
					src="https://i.ibb.co.com/SXprqdVM/Container.png"
					alt=""
					className="w-252 h-80 my-10"
				/>
				<a className="btn bg-[#FF693B] border-none px-12 transition-transform duration-300 hover:scale-110">
					Contact Now
				</a>
			</div>
		</div>
	);
}

export default HowWeWork;
