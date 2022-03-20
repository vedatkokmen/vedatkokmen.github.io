import Link from "next/link";
import {
	FaGithub,
	FaLinkedin,
	FaInstagram,
} from "react-icons/fa";
import { forwardRef } from "react";
import Image from "next/image";

const MyButton = forwardRef(
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
					<h1>i am vedat</h1>
					<h4>
						freelance translator & web
						developer
					</h4>
					<Link
						href="mailto:vedatkoekmen@gmail.com"
						passHref
					>
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
					<Image
						src="/5.jpg"
						className="hero-photo"
						alt="vedat kokmen"
						height="450"
						width="300"
					/>
				</article>
			</div>
		</header>
	);
}

export default Hero;
