import React from "react";

function Contact() {
	return (
		<div className="let-bg w-full h-full flex gap-10 items-center justify-center text-center p-30">
			<div className="border border-[#E1E4ED26] p-8 rounded-md">
				<div className="flex gap-6">
					<div className="flex flex-col items-start">
						<h1>Name</h1>
						<input
							type="text"
							name="name"
							placeholder="Your Name"
							className="border border-[#E1E4ED26] p-2 rounded-md mt-2"
						/>
					</div>
					<div className="flex flex-col items-start">
						<h1>Email</h1>
						<input
							type="email"
							name="email"
							placeholder="support@envobyte.com"
							className="border border-[#E1E4ED26] p-2 rounded-md mt-2"
						/>
					</div>
				</div>

				<div className="flex gap-6 mt-4">
					<div className="flex flex-col items-start">
						<h1>Phone</h1>
						<input
							type="number"
							name="number"
							placeholder="+1(667)7772477"
							className="border border-[#E1E4ED26] p-2 rounded-md mt-2"
						/>
					</div>
					<div className="flex flex-col items-start">
						<h1>Company</h1>
						<input
							type="text"
							name="Company"
							placeholder="Envobyte"
							className="border border-[#E1E4ED26] p-2 rounded-md mt-2"
						/>
					</div>
				</div>

				<div className="flex flex-col items-start mt-4">
					<h1>Message</h1>
					<input
						type="text"
						name="message"
						placeholder="Type your message here"
						className="border border-[#E1E4ED26] p-2 w-[424px] h-24 rounded-md mt-2"
					/>
					<button className="flex border border-[#E1E4ED26] py-2 px-4 rounded-md gap-1 mt-6 cursor-pointer items-center">
						<p>Send message</p>
						<svg
							width="12"
							height="12"
							viewBox="0 0 12 12"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M5.88452 1.88086L10.1999 6.00007L5.88452 10.1193"
								stroke="white"
								stroke-width="1.28571"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M10.1999 6L1.79996 6"
								stroke="white"
								stroke-width="1.28571"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
					</button>
				</div>
			</div>
			<div className="text-start">
				<h1 className="text-5xl font-bold">
					Let Us Know What <br /> You Think!
				</h1>
				<p className="py-4">
					Got something on your mind? Share it with us! Drop a
					<br />
					message, and we'll respond quickly to assist you
				</p>
				<div>
					<div className="flex gap-2 items-center pb-4">
						<img
							src="https://i.ibb.co.com/20mRN1ZJ/Group-1000005918.png"
							alt=""
						/>
						<div>
							<h6>Business</h6>
							<div className="flex gap-2 items-center">
								<h1>support@envobyte.com</h1>
								<img
									src="https://i.ibb.co.com/6S8pKZx/External-Link.png"
									alt=""
								/>
							</div>
						</div>
					</div>
					<div className="flex gap-2 items-center py-4 border-y border-[#F1F3F726]">
						<img
							src="https://i.ibb.co.com/k6S45Z73/Group-1000005917.png"
							alt=""
						/>
						<div>
							<h6>Whatsapp</h6>
							<div className="flex gap-2 items-center">
								<h1>+1(667)7772477</h1>
								<img
									src="https://i.ibb.co.com/6S8pKZx/External-Link.png"
									alt=""
								/>
							</div>
						</div>
					</div>
					<div className="flex gap-2 items-center pt-4">
						<img
							src="https://i.ibb.co.com/zW5K6Sp2/Group-1000005918.png"
							alt=""
						/>
						<div>
							<h6>Linkedin</h6>
							<div className="flex gap-2 items-center">
								<h1>www.linkedin.com/company/envobyte</h1>
								<img
									src="https://i.ibb.co.com/6S8pKZx/External-Link.png"
									alt=""
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Contact;
