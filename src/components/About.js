import Link from "next/link";

function About() {
	return (
		<section
			className="section about"
			id="about"
		>
			<div className="section-center about-center">
				{/* <!-- about img --> */}
				<article>
					<img
						src="/blush.svg"
						className="hero-photo"
						alt="about img"
					/>
				</article>
				{/* <!-- about info --> */}
				<article className="about-info">
					{/* <!-- section title --> */}
					<div className="section-title about-title">
						<h2>about</h2>
						<div className="underline"></div>
					</div>
					{/* <!--end of section title --> */}
					<p>
						Hi, my name is Vedat and I
						am an English - Turkish
						Translator/Reviewer with 8
						years of work experience
						ensuring seamless style,
						context, and overall
						meaning in the target
						language for all
						translated materials while
						applying proper language
						parameters such as
						grammar, syntax,
						semantics, and appropriate
						terminology. Besides my
						language skills, I offer
						excellent computer
						proficiency, time
						management and attention
						to detail.
					</p>
					<p>
						I am also highly motivated
						self-taught developer
						seeking to launch a career
						building web applications
						and services.
					</p>
				</article>
			</div>
		</section>
	);
}

export default About;
