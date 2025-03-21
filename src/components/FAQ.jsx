import React from "react";

function FAQ() {
	return (
		<div>
			<div className="bg-[#ffffff] flex flex-col items-center justify-center py-36">
				<h1 className="text-[#0A2C8C] text-3xl font-bold mb-10">
					Frequently Asked Questions
				</h1>
				<div>
					<div
						tabIndex={0}
						className="collapse collapse-plus border-b"
					>
						<div className="collapse-title font-semibold text-[#6D758F]">
							What Is Included In Your Web Development Service?
						</div>
						<div className="collapse-content text-sm text-[#6D758F]">
							Click the "Sign Up" button in the top right corner
							and follow the registration process.
						</div>
					</div>

					<div
						tabIndex={0}
						className="collapse collapse-plus border-b"
					>
						<div className="collapse-title font-semibold text-[#6D758F]">
							What Technologies Do You Use For Web Development?
						</div>
						<div className="collapse-content text-sm text-[#6D758F]">
							Click the "Sign Up" button in the top right corner
							and follow the registration process.
						</div>
					</div>

					<div
						tabIndex={0}
						className="collapse collapse-plus border-b"
					>
						<div className="collapse-title font-semibold text-[#6D758F]">
							What If Need Ongoing Support After The Website Is
							Launched?
						</div>
						<div className="collapse-content text-sm text-[#6D758F]">
							Click the "Sign Up" button in the top right corner
							and follow the registration process.
						</div>
					</div>

					<div
						tabIndex={0}
						className="collapse collapse-plus border-b"
					>
						<div className="collapse-title font-semibold text-[#6D758F]">
							Can I Customize My Website According To My Business
							Needs
						</div>
						<div className="collapse-content text-sm text-[#6D758F]">
							Click the "Sign Up" button in the top right corner
							and follow the registration process.
						</div>
					</div>

					<div
						tabIndex={0}
						className="collapse collapse-plus text-[#6D758F]"
					>
						<div className="collapse-title font-semibold text-[#6D758F]">
							Do You Offer SEO Services As Part Of Your Web
							Development?
						</div>
						<div className="collapse-content text-sm">
							Click the "Sign Up" button in the top right corner
							and follow the registration process.
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default FAQ;
