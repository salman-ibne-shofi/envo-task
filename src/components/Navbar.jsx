const Navbar = () => {
	return (
		<div className="navbar bg-[#03135b]">
			<div className="navbar-start">
				<div className="dropdown">
					<div
						tabIndex={0}
						role="button"
						className="btn btn-ghost lg:hidden"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							{" "}
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h8m-8 6h16"
							/>{" "}
						</svg>
					</div>
					<ul
						tabIndex={0}
						className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
					>
						<li>
							<a>Home</a>
						</li>
						<li>
							<a>Servive</a>
						</li>
						<li>
							<a>Combo Sales</a>
						</li>
						<li>
							<a>Portfolio</a>
						</li>
						<li>
							<a>About Us</a>
						</li>
						<li>
							<a>Blogs</a>
						</li>
					</ul>
				</div>
				<img
					src="https://i.ibb.co.com/27Yqk6J7/Frame-404-2x.png"
					alt=""
					className="w-46"
				/>
			</div>
			<div className="navbar-center hidden lg:flex">
				<ul className="menu menu-horizontal px-1">
					<li>
						<a>Home</a>
					</li>
					<li>
						<a>Servive</a>
					</li>
					<li>
						<a>Combo Sales</a>
					</li>
					<li>
						<a>Portfolio</a>
					</li>
					<li>
						<a>About Us</a>
					</li>
					<li>
						<a>Blogs</a>
					</li>
				</ul>
			</div>
			<div className="navbar-end">
				<a className="btn bg-[#FF693B] border-none px-12 transition-transform duration-300 hover:scale-110">
					See Pricing
				</a>
			</div>
		</div>
	);
};

export default Navbar;
