import { FaBars } from "react-icons/fa";
import Link from "next/link";
import { useState } from "react";

function Header() {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<nav className="nav" id="nav">
			<div className="nav-center">
				{/* <!-- nav header --> */}
				<div className="nav-header">
					<span className="logo">
						V
					</span>
					<button
						className="nav-btn"
						id="nav-btn"
						onClick={() => {
							setIsOpen(!isOpen);
						}}
					>
						<FaBars />
					</button>
				</div>
				{/* <!-- nav-links --> */}
				<ul
					className="nav-links"
					style={{}}
				>
					<li>
						<Link href="/">home</Link>
					</li>
					<li>
						<Link href="#about">
							about
						</Link>
					</li>
					<li>
						<Link href="#services">
							services
						</Link>
					</li>
					{/* <li>
						<Link href="#blog">
							blog
						</Link>
					</li> */}
					<li>
						<Link href="#skills">
							skills
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
}

export default Header;
