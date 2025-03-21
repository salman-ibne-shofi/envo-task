import React from "react";
import PortTabs from "./PortTabs";

function Portfolios() {
	return (
		<div className="w-full px-12">
			<div className="flex justify-between w-full items-center pt-20 pb-4 border-b border-[#0A2C8C1A]">
				<span>
					<p className="text-[#0C89FF] font-semibold">
						UI / UX PORTFOLIO
					</p>
					<p className="text-4xl font-bold text-[#001246]">
						Check Our Previous Work
					</p>
				</span>
				<a className="btn bg-[#FF693B] border-none px-12 transition-transform duration-300 hover:scale-110">
					All Portfolio
				</a>
			</div>
			<PortTabs />
		</div>
	);
}

export default Portfolios;
