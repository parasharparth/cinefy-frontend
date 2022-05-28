import React, { useEffect, useState } from "react"
import pic1 from "../images/pic1.jpg"
import pic2 from "../images/pic2.jpg"
import pic3 from "../images/pic3.jpg"

//  export default function About() {
//     return (
//         <div className="about-body" role="contentinfo">
//             <div className="aboutCard about1">
//                 <img src={pic2} alt="Pragati" className="aboutImg"  />
//                 <div className="aboutContainer">
//                     <h4 className="about-name">
//                         <b>Pragati Rathore</b>
//                     </h4>
//                     <p className="about-task">

//                     </p>
//                     <a
//                         href="https://github.com/pragatipdx"
//                         className="about-gitrepo-link"
//                     >
//                         GitHub{" "}
//                         <span className="gitExternalLinkIcon">
//               <i className="fas fa-external-link-alt gitExternalLink"></i>
//             </span>
//                     </a>
//                 </div>
//             </div>
//             <div className="aboutCard about2">
//                 <img src={pic1} alt="Parth" className="aboutImg"  />
//                 <div className="aboutContainer">
//                     <h4 className="about-name">
//                         <b>Parth Parashar</b>
//                     </h4>
//                     <p className="about-task">

//                     </p>
//                     <a
//                         href="https://github.com/parasharparth"
//                         className="about-gitrepo-link"
//                     >
//                         GitHub{" "}
//                         <span className="gitExternalLinkIcon">
//               <i className="fas fa-external-link-alt gitExternalLink"></i>
//             </span>
//                     </a>
//                 </div>
//             </div>
//                 <div className="aboutCard about3">
//                 <img src={pic3} alt="Kirtan" className="aboutImg" />
//                 <div className="aboutContainer">
//                     <h4 className="about-name">
//                         <b>Kirtan Patel</b>
//                     </h4>
//                     <p className="about-task">

//                     </p>
//                     <a
//                         href="https://github.com/Kirtan6004"
//                         className="about-gitrepo-link"
//                     >
//                         GitHub
//                         <span className="gitExternalLinkIcon">
//               <i className="fas fa-external-link-alt gitExternalLink"></i>
//             </span>
//                     </a>
//                 </div>
//             </div>
//         </div>
//     );

// }

function About(){
return (
    <div className="About">
        <div className="row p">
          <div className="col-md-4 col-lg-4 col-sm-12">
            <div className="d-flex justify-content-center aboutmain">
              <div className="card-body">
                <p>
                  <b class = 'about-background'>CONTRIBUTORS</b>                  
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 col-lg-4 col-sm-12">
            <div className="max-auto card " style={{height: "30em"}}>
              <div className="card-img">
                <img src={pic3} id="image3" className="img-fluid" alt="Profilepicture" style={{height: "15em"}} />
              </div>
              <div className="card-body">
                <h3>Kirtan Patel</h3>
                  <p>Computer Science Graduate student PSU</p>
                  </div>
              <div className="card-footer">
                <a href="https://github.com/Kirtan6004" className="card-link">GITHUB</a>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-lg-4 col-sm-12">
            <div className="max-auto card" style={{height: "30em"}}>
              <div className="card-img">
                <img src={pic2} id="image2" className="img-fluid" alt="Profilepicture" style={{height: "15em"}} />
              </div>
              <div className="card-body">
                <h3>Pragati Rathore</h3>
                  <p>Computer Science Graduate student PSU</p>
              </div>
              <div className="card-footer">
                <a href="https://github.com/pragatipdx" className="card-link">GITHUB</a>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-lg-4 col-sm-12">
            <div className="max-auto card" style={{height: "30em"}}>
              <div className="card-img">
                <img src={pic1} id="image1" className="img-fluid" alt="Profilepicture" style={{height: "15em"}} />
              </div>
              <div className="card-body">
                <h3>Parth Parashar</h3>
                  <p>Computer Science Graduate student from PSU</p>
              </div>
              <div className="card-footer">
                <a href="https://github.com/parasharparth" className="card-link">GITHUB</a>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default About;
