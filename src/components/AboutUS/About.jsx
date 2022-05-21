import React, { useEffect, useState } from "react"
import pic1 from "../images/pic1.jpg"
import pic2 from "../images/pic2.jpg"
import pic3 from "../images/pic3.jpg"

export default function About() {
    return (
        <div className="about-body" role="contentinfo">
            <div className="aboutCard about1">
                <img src={pic2} alt="Pragati" className="aboutImg"  />
                <div className="aboutContainer">
                    <h4 className="about-name">
                        <b>Pragati Rathore</b>
                    </h4>
                    <p className="about-task">

                    </p>
                    <a
                        href="https://github.com/pragatipdx"
                        className="about-gitrepo-link"
                    >
                        GitHub{" "}
                        <span className="gitExternalLinkIcon">
              <i className="fas fa-external-link-alt gitExternalLink"></i>
            </span>
                    </a>
                </div>
            </div>
            <div className="aboutCard about2">
                <img src={pic1} alt="Parth" className="aboutImg"  />
                <div className="aboutContainer">
                    <h4 className="about-name">
                        <b>Parth Parashar</b>
                    </h4>
                    <p className="about-task">

                    </p>
                    <a
                        href="https://github.com/parasharparth"
                        className="about-gitrepo-link"
                    >
                        GitHub{" "}
                        <span className="gitExternalLinkIcon">
              <i className="fas fa-external-link-alt gitExternalLink"></i>
            </span>
                    </a>
                </div>
            </div>
                <div className="aboutCard about3">
                <img src={pic3} alt="Kirtan" className="aboutImg" />
                <div className="aboutContainer">
                    <h4 className="about-name">
                        <b>Kirtan Patel</b>
                    </h4>
                    <p className="about-task">

                    </p>
                    <a
                        href="https://github.com/Kirtan6004"
                        className="about-gitrepo-link"
                    >
                        GitHub
                        <span className="gitExternalLinkIcon">
              <i className="fas fa-external-link-alt gitExternalLink"></i>
            </span>
                    </a>
                </div>
            </div>
        </div>
    );
}