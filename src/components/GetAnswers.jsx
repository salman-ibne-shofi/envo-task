import React from "react";
import { questions } from "../assets/questions.js";
import Portfolios from "./Portfolios.jsx";

function GetAnswers() {
	return (
		<div className="bg-white">
			<div className="flex flex-col items-center pt-12 relative overflow-hidden">
				<div className="z-99 flex flex-col items-center justify-center w-full">
					<h6 className="text-[#0C89FF] font-semibold">
						MORE DETAILS
					</h6>
					<h1 className="text-[#0A2C8C] text-6xl font-bold">
						Get Your Answers
					</h1>
					<div className="flex z-0 my-12">
						{questions.map(
							(
								{ title, image, subTitle, description, filled },
								index
							) => {
								return (
									<div
										className={`flex flex-col items-center border border-[#E8E5E5] p-10 ${
											filled ? "bg-[#0A2C8C]" : "bg-white"
										}`}
										key={index}
									>
										<img
											src={image}
											alt={title}
											className="w-48 h-48 mt-12"
										/>
										<div>
											<h1
												className={`text-2xl font-semibold pt-10 ${
													filled
														? "text-white"
														: "text-[#001246]"
												}`}
											>
												{title}
											</h1>
											<h6
												className={`py-2 ${
													filled
														? "text-[#65B5FF]"
														: "text-[#002AA3]"
												}`}
											>
												{subTitle}
											</h6>
											<p
												className={`max-w-56 ${
													filled
														? "text-white"
														: "text-[#424242]"
												}`}
											>
												{description}
											</p>
										</div>
									</div>
								);
							}
						)}
					</div>
					<div className="w-full flex justify-center items-center py-8">
						<a className="btn bg-[#FF693B] border-none px-12 transition-transform duration-300 hover:scale-110">
							See Pricing
						</a>
					</div>

					{/* Check our previous UI/UX section */}
					<Portfolios />
				</div>
				<div className="absolute bottom-0">
					<img
						src="https://i.ibb.co.com/CptrCsCm/Group-1000006040.png"
						alt=""
					/>
				</div>
			</div>
		</div>
	);
}

export default GetAnswers;
