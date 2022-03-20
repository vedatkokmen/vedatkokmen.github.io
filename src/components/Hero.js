import Link from "next/link";
import {
	FaGithub,
	FaLinkedin,
	FaInstagram,
} from "react-icons/fa";
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

function Hero() {
	return (
		<header className="hero">
			<div className="section-center hero-center">
				<article className="hero-info">
					<div className="underline"></div>
					<h1>i'm vedat</h1>
					<h4>
						freelance translator & web
						developer
					</h4>
					<Link href="mailto:vedatkoekmen@gmail.com">
						<button className="btn hero-btn">
							hire me
						</button>
					</Link>
					{/* <!-- social icons --> */}
					<ul className="social-icons hero-icons">
						<li>
							<Link
								href="https://www.github.com/vedatkokmen"
								passHref
							>
								{/* <FaGithub className="social-icon" /> */}
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
				</article>
				<article className="hero-img">
					<img
						src="/5.jpg"
						className="hero-photo"
						alt="john doe"
					/>
				</article>
			</div>
		</header>
	);
}

export default Hero;
