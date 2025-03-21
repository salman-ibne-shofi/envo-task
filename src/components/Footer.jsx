const Footer = () => {
	// Function to copy text to clipboard
	const copyToClipboard = (text) => {
		navigator.clipboard
			.writeText(text)
			.then(() => {
				alert(`Copied: ${text}`); // Optional: Show an alert when copied
			})
			.catch((err) => {
				console.error("Failed to copy text: ", err);
			});
	};

	return (
		<>
			<footer className="footer sm:footer-horizontal bg-[#001655] pt-28 py-10 px-40 border-y border-[#E5E7EB33]">
				<aside>
					<img
						src="https://i.ibb.co.com/27Yqk6J7/Frame-404-2x.png"
						alt=""
						className="w-28 mb-4"
					/>
					<p>
						We are an IT Company. We Help <br /> businesses to bring
						ideas to life <br /> easily and affordably.
					</p>
				</aside>
				<nav>
					<h6 className="text-xl font-semibold mb-4">Company</h6>
					<a className="cursor-pointer transition-transform duration-300 hover:scale-110">
						About us
					</a>
					<a className="cursor-pointer transition-transform duration-300 hover:scale-110">
						Privacy policy
					</a>
					<a className="cursor-pointer transition-transform duration-300 hover:scale-110">
						Refund policy
					</a>
				</nav>
				<nav>
					<h6 className="text-xl font-semibold mb-4">Learn More</h6>
					<a className="cursor-pointer transition-transform duration-300 hover:scale-110">
						Combo Offer
					</a>
					<a className="cursor-pointer transition-transform duration-300 hover:scale-110">
						Service Industries
					</a>
					<a className="cursor-pointer transition-transform duration-300 hover:scale-110">
						Envobyte Apps
					</a>
				</nav>
				<nav>
					<h6 className="text-xl font-semibold mb-4">Support</h6>
					<a className="cursor-pointer transition-transform duration-300 hover:scale-110">
						Contact Us
					</a>
					<a className="cursor-pointer transition-transform duration-300 hover:scale-110">
						FAQ
					</a>
					<a className="cursor-pointer transition-transform duration-300 hover:scale-110">
						Terms & Conditions
					</a>
				</nav>
				<nav>
					<h6 className="text-xl font-semibold mb-4">Get In Touch</h6>
					<div className="flex gap-2">
						<img
							src="https://i.ibb.co.com/wh8hKzfx/image.png"
							alt=""
						/>
						<a
							onClick={() =>
								copyToClipboard("support@envobyte.com")
							}
							className="cursor-pointer hover:cursor-copy"
						>
							support@envobyte.com
						</a>
					</div>
					<div className="flex gap-2">
						<img
							src="https://i.ibb.co.com/7xLsVdqg/Vector-2.png"
							alt=""
						/>
						<a
							onClick={() =>
								copyToClipboard("support@envobyte.com")
							}
							className="cursor-pointer hover:cursor-copy"
						>
							+1(667)7772477
						</a>
					</div>
					<div className="flex gap-6 mt-6">
						<a href="https://www.facebook.com/envobyte">
							<img
								src="https://i.ibb.co.com/WWwVWH7m/Vector.png"
								alt=""
								className="cursor-pointer transition-transform duration-300 hover:scale-120"
							/>
						</a>
						<a href="https://www.linkedin.com/company/envobyte/posts/?feedView=all">
							<img
								src="https://i.ibb.co.com/tpNmtyBq/Group.png"
								alt=""
								className="cursor-pointer transition-transform duration-300 hover:scale-120"
							/>
						</a>
						<a href="https://www.instagram.com/envobyte/">
							<img
								src="https://i.ibb.co.com/sJkf6VFj/Group-1.png"
								alt=""
								className="cursor-pointer transition-transform duration-300 hover:scale-120"
							/>
						</a>
						<a href="https://x.com/i/flow/login?redirect_after_login=%2Fenvobyte">
							<img
								src="https://i.ibb.co.com/ymHzBpjC/Vector-1.png"
								alt=""
								className="cursor-pointer transition-transform duration-300 hover:scale-120"
							/>
						</a>
						<a href="https://www.pinterest.com/envobyte/">
							<img
								src="https://i.ibb.co.com/1YfMQZhX/Link-image.png"
								alt=""
								className="cursor-pointer transition-transform duration-300 hover:scale-120"
							/>
						</a>
					</div>
				</nav>
			</footer>

			{/* Copyright Section */}
			<div className="bg-[#001655] text-white text-center py-4">
				<p className="text-sm font-semibold">
					&copy;{new Date().getFullYear()} - Envobyte, All rights
					reserved.
				</p>
			</div>
		</>
	);
};

export default Footer;
