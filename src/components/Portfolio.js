import { forwardRef } from "react";
import Link from "next/link";
import Image from "next/image";

const MyButton = forwardRef(({ onClick, href, children }, ref) => {
  return (
    <a href={href} onClick={onClick} ref={ref}>
      {children}
    </a>
  );
});

function Portfolio() {
  return (
    <section className="section portfolio" id="portfolio">
      <div className="section-title">
        <h2>portfolio</h2>
        <div className="underline"></div>
      </div>
      <div className="section-center" style={{ gap: '20px' }} >
        <article className="article" >
          <Link href="https://appsource.microsoft.com/en-us/product/office/wa200003014?tab=overview" passHref>
            <a target="_blank" rel="noopener noreferrer">
              <MyButton>
                <Image
                  width={500}
                  height={500}
                  style={{ objectFit: "contain" }}
                  src="/eum.jpg"
                  className="hero-photo"
                  alt="about img"
                />
              </MyButton>
            <h3>External User Manager</h3>
            </a>
          </Link>
        </article>
      </div>
    </section>
  );
}

export default Portfolio;
