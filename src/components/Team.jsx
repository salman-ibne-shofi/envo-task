import React from "react";

function Team() {
	return (
		<div>
			<div className="bg-[#ffffff] flex flex-col items-center justify-center">
				<div className="text-center mb-10">
					<h6 className="text-[#0C89FF]">EXPERIENCED TEAM</h6>
					<h1 className="text-[#001246] text-3xl font-bold">
						Our Team Members
					</h1>
				</div>
				<div className="flex gap-1 items-center justify-center">
					<div>
						<img
							src="https://i.ibb.co.com/zTjTTh8h/Whats-App-Image-2025-03-21-at-5-31-29-AM.jpg"
							alt=""
							className="w-56 h-64"
						/>
						<div className="bg-[#0A2C8C] p-2">
							<h1>Sheikh Hasib Akter</h1>
							<p>Managing Director</p>
						</div>
					</div>
					<div>
						<img
							src="https://i.ibb.co.com/QvgRTryr/Whats-App-Image-2025-03-21-at-5-31-29-AM-1.jpg"
							alt=""
							className="w-56 h-64"
						/>
						<div className="bg-[#0A2C8C] p-2">
							<h1>Md. Raihan Hassan</h1>
							<p>Asst. manager HR & Admin</p>
						</div>
					</div>
					<div>
						<img
							src="https://i.ibb.co.com/Txn5mTT6/Whats-App-Image-2025-03-21-at-5-37-15-AM.jpg"
							alt=""
							className="w-56 h-64"
						/>
						<div className="bg-[#0A2C8C] p-2">
							<h1>Md. Minul Islam</h1>
							<p>Marketing Asst. Manager</p>
						</div>
					</div>
				</div>

				<div className="flex gap-2 mt-10">
					<div>
						<img
							src="https://i.ibb.co.com/RGnZN1dr/Icon-1.png"
							alt=""
							className="border-2 border-[#0A2C8C] p-2 rounded-md"
						/>
					</div>
					<div>
						<img
							src="https://i.ibb.co.com/fVzphsY3/Icon.png"
							alt=""
							className="bg-[#FF693B] border-2 border-[#FF693B] p-2 rounded-md"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Team;
