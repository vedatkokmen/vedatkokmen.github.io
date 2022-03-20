import Link from "next/link";
import { FaCode, FaSketch } from "react-icons/fa";
import { MdTranslate } from "react-icons/md";

function Services() {
	return (
		// <!-- services -->
		<section
			className="section bg-grey"
			id="services"
		>
			{/* <!-- section title --> */}
			<div className="section-title">
				<h2>services</h2>
				<div className="underline"></div>
			</div>
			{/* <!--end of section title --> */}
			<div className="services-center section-center">
				{/* <!-- single service --> */}
				<article className="service">
					<FaCode className="service-icon" />
					<h4>web development</h4>
					<div className="underline"></div>
					<p>
						As an experienced
						Translator, I am looking
						for a Web Developer
						role/experience. I have
						been regularly coding for
						over 2 years and finally,
						I feel ready to start my
						developer career. My goal
						is to gain experience,
						work in teams and/or
						individually, learn new
						skills, master existing
						ones.
					</p>
				</article>
				{/* <!-- end of single service -->
        <!-- single service --> */}
				{/* <article className="service">
					<FaSketch className="service-icon" />
					<h4>web design</h4>
					<div className="underline"></div>
					<p>
						Lorem ipsum dolor sit amet
						consectetur adipisicing
						elit. Voluptates corrupti
						animi saepe quasi
						excepturi cupiditate
						voluptate dolor sed
						obcaecati vero.
					</p>
				</article> */}
				{/* <!-- end of single service -->
        <!-- single service --> */}
				<article className="service">
					<MdTranslate className="service-icon" />
					<h4>translation/review</h4>
					<div className="underline"></div>
					<p>
						Translation, review,
						post-editing and QA of UI
						and UA strings, operator
						manuals, workshop service
						manuals, user manuals,
						etc. for leading
						international clients
						within automotive and tech
						from EN-TR.
					</p>
				</article>
				{/* <!-- end of single service --> */}
			</div>
		</section>
		// <!-- end of services -->
	);
}

export default Services;
