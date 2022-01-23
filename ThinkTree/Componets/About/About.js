import React from "react";
import { LoremIpsum } from "react-lorem-ipsum";
import Stats from "../Stats/Stats";
import "./About.scss";
const About = () => {
  return (
    <>
      <body>
        <div className="About">
          <div className="About_sub">
            <h3 className="aboutTitle">ABOUT US</h3>
            <div className="first">
              <h1>DREAMS TAKE FLIGHT HERE</h1>
              <h3>
                Lorem ipsum odor amet, consectetuer adipiscing elit. Placerat
                mollis convallis montes aliquet parturient magna consequat.
                Taciti morbi nulla at dictum sed. Convallis mauris inceptos
                aptent class vel senectus ad lobortis. Ante ullamcorper sagittis
                sed augue venenatis congue elemen
                <br />
                Taciti morbi nulla at dictum sed. Convallis mauris inceptos
                aptent class vel senectus ad lobortis. Ante ullamcorper sagittis
                sed augue venenatis congue elemen
                <p></p>
                <p></p>
              </h3>
            </div>
            <div className="second">
              <h1>MAXIMISE YOUR VIEWS </h1>
              <h3>
                Lorem ipsum odor amet, consectetuer adipiscing elit. Placerat
                mollis convallis montes aliquet parturient magna consequat.
                Taciti morbi nulla at dictum sed. Convallis mauris inceptos
                aptent class vel senectus ad lobortis. Ante ullamcorper sagittis
                sed augue venenatis congue elemen
              </h3>
            </div>
            <div className="third">
              <h1>NO SHARED WALLS</h1>
              <h3>
                Lorem ipsum odor amet, consectetuer adipiscing elit. Placerat
                mollis convallis montes aliquet parturient magna consequat.
                Taciti morbi nulla at dictum sed. Convallis mauris inceptos
                aptent class vel senectus ad lobortis. Ante ullamcorper sagittis
                sed augue venenatis congue elemen
              </h3>
            </div>
          </div>
          <div className="images">
            <div className="one"></div>
            <div className="two"></div>
            <div className="three"></div>
          </div>
        </div>
      </body>

      <Stats />
    </>
  );
};

export default About;
