import React from "react";

const CardItem = ({ data }) => {
	const { pic, title, smText } = data;

	return (
		<div className="card w-full py-12 shadow-sm bg-[#3158C733]">
			<figure>
				<img className="h-36 w-auto" src={pic} alt={title} />
			</figure>
			<div className="card-body flex flex-col gap-0 items-center">
				<h2 className="text-2xl font-bold">{title}</h2>
				<h3 className="text-xl">{smText}</h3>
				<div className="flex gap-2 mt-4">
					<button className="bg-[#0c89ff] text-white rounded-full px-4 py-1 text-sm font-medium transition-transform hover:scale-110 cursor-pointer">
						Portfolio
					</button>
					<button className="border border-[#0c89ff] text-[#0c89ff] rounded-full px-4 py-1 text-sm font-medium transition-transform hover:scale-110 cursor-pointer">
						Order
					</button>
				</div>
			</div>
		</div>
	);
};

export default CardItem;
