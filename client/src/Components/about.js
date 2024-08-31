import React from "react";
import "./about.css";

const About = () => {
  return (
    <section className="aboutsection">
      <div className="aboutcontainer-div">
        <h1>WHO ARE WE ?</h1>
        <p>
          We are Business Guru single ownership company established in 2024 with
          25 years of Industrial, commercial and residential design/consultancy
          experience in the field, we decided to alter direction. Now, we share
          our passion by helping others.
        </p>
        <h2>OUR VISION :</h2>
        <blockquote>
          <p>
            "To give real service, you must add something which cannot be bought
            or measured by MONEY"
          </p>
          <b>- Sir M.Vishveshwarayya.</b>
        </blockquote>
        <h2>OUR MISSION:</h2>
        <p>
          To build business growth for companies, entrepreneurs, owners, and
          freelancers all over India and abroad as well. We are committed to excelling in business
          consulting services to our clients. We work to promote the revenue of
          companies by at least fivefold.
        </p>
        <p>Our ramp up process is designed to empower your team.</p>
        <p>
          Business mentors are key—that's why when it comes to client selection,
          we're choosy. We want to give each of you the right time and guidance
          you deserve.
        </p>
        <div className="motto-div">
          <p>
            OUR MOTTO: <br />
            <span>HELP EACH OTHER ! GROW TOGETHER !</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
