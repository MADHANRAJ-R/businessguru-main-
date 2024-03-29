import React from "react";
import "./about.css";

const About = () => {
  return (
    <section className="aboutsection">
      <div className="aboutcontainer-div">
        <h1>WHO ARE WE ?</h1>
        <p>
          We are Business Guru, Govt registered and ISO 9001-2015 certified
          single ownership company established in 2016 with 25 years of
          Industrial, commercial and residential design/consultancy experience
          in the field, we decided to alter direction. Now, we share our passion
          by helping others.
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
          To build a independent professional structural design
          engineers/consultants in all over India and abroad as well. We train
          people with our practical design methodology which is being currently
          practiced in engineering consultancy. We are committed to excel the
          quality and economic structural design services to our clients as
          well.
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
