import TabsContainer from "./TabsContainer";

import React from "react";

function Services() {
	return (
		<div>
			<div className=" bg-[#03135b] pt-32 pb-4 px-12 bg-[url('https://i.ibb.co.com/JFS3X9Wd/Vector.png')] bg-cover bg-no-repeat overflow-clip">
				<div className="flex justify-between items-center border-b border-[#E5E7EB33]">
					<span>
						<p className="text-[#FF693B]">DIGITAL SERVICES</p>
						<p className="text-2xl font-bold mb-4">
							Check Our Available Services
						</p>
					</span>
					<a className="btn bg-[#FF693B] border-none px-12 transition-transform duration-300 hover:scale-110">
						All Services
					</a>
				</div>

				<TabsContainer />
			</div>
		</div>
	);
}

export default Services;
