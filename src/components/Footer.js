import {
	FaGithub,
	FaLinkedin,
	FaInstagram,
	FaEnvelope,
} from "react-icons/fa";
import Link from "next/link";

import React from "react";

const MyButton = React.forwardRef(
	({ onClick, href, children }, ref) => {
		return (
			<a
				href={href}
				onClick={onClick}
				ref={ref}
			>
				{children}
			</a>
		);
	}
);

function Footer() {
	return (
		<footer className="footer" id="contact">
			<ul className="social-icons">
				<li>
					<Link
						href="mailto:vedatkoekmen@gmail.com"
						passHref
					>
						<MyButton>
							<FaEnvelope className="social-icon" />
						</MyButton>
					</Link>
				</li>
				<li>
					<Link
						href="https://www.github.com/vedatkokmen"
						passHref
					>
						<MyButton>
							<FaGithub className="social-icon" />
						</MyButton>
					</Link>
				</li>
				<li>
					<Link
						href="https://www.linkedin.com/in/vedatkokmen"
						passHref
					>
						<MyButton>
							<FaLinkedin className="social-icon" />
						</MyButton>
					</Link>
				</li>
				<li>
					<Link
						href="https://www.instagram.com/vedatkokmen"
						passHref
					>
						<MyButton>
							<FaInstagram className="social-icon" />
						</MyButton>
					</Link>
				</li>
			</ul>

			<p>
				&copy;
				<span id="date">
					{new Date().getFullYear()} -{" "}
				</span>
				<span>
					Vedat kokmen. all rights
					reserved
				</span>
			</p>
		</footer>
	);
}

export default Footer;
