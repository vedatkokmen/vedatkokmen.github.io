import React from "react";

function Skills() {
	return (
		// <!-- skills -->
		<section
			className="section skills"
			id="skills"
		>
			{/* <!-- section title --> */}
			<div className="section-title">
				<h2>skills</h2>
				<div className="underline"></div>
			</div>
			{/* <!--end of section title --> */}
			<div className="section-center skills-center">
				<article>
					<h3>front end</h3>
					{/* <!-- single skill --> */}
					<div className="skill">
						<p>HTML/CSS</p>
						<div className="skill-container">
							<div className="skill-value value-90"></div>
							<p className="skill-text">
								90%
							</p>
						</div>
					</div>
					{/* <!--end of  single skill -->
          <!-- single skill --> */}
					<div className="skill">
						<p>Javascript</p>
						<div className="skill-container">
							<div className="skill-value value-70"></div>
							<p className="skill-text skill-text-70">
								70%
							</p>
						</div>
					</div>
					{/* <!--end of  single skill -->
          <!-- single skill --> */}
					<div className="skill">
						<p>React</p>
						<div className="skill-container">
							<div className="skill-value value-80"></div>
							<p className="skill-text skill-text-80">
								80%
							</p>
						</div>
					</div>
					{/* <!--end of  single skill --> */}
				</article>
				<article>
					<h3>back end</h3>
					{/* <!-- single skill --> */}
					<div className="skill">
						<p>Node.js</p>
						<div className="skill-container">
							<div className="skill-value value-70"></div>
							<p className="skill-text">
								70%
							</p>
						</div>
					</div>
					{/* <!--end of  single skill -->
          <!-- single skill --> */}
					<div className="skill">
						<p>databases</p>
						<div className="skill-container">
							<div className="skill-value value-80"></div>
							<p className="skill-text skill-text-80">
								80%
							</p>
						</div>
					</div>
					{/* <!--end of  single skill -->
          <!-- single skill --> */}
					<div className="skill">
						<p>Git</p>
						<div className="skill-container">
							<div className="skill-value value-80"></div>
							<p className="skill-text skill-text-80">
								80%
							</p>
						</div>
					</div>
					{/* <!--end of  single skill --> */}
				</article>
			</div>
		</section>
	);
}

export default Skills;
