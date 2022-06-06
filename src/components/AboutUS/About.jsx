import React, { useEffect, useState } from "react"
import pic1 from "../images/pic1.jpg"
import pic2 from "../images/pic2.jpg"
import pic3 from "../images/pic3.jpg"
import './About.css';


function About(){
  return (
      <div id="About">
        <div className="row p">
          <div className="col-md-4 col-lg-4 col-sm-12">
            <div className="d-flex justify-content-center aboutmain">
              <div className="card-body">
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="column">

            <div className="max-auto card " style={{height: "30em"}}>
              <div className="card-img">
                <a href="https://github.com/Kirtan6004">
                  <img src={pic3} id="image3" className="img-fluid" alt="Profilepicture" style={{height: "60em"}} />
                </a>
              </div>
              <div className="card-body">
              </div>
              <div className="card-footer">
              </div>

            </div>
          </div>
          <div className="column">
            <div className="max-auto card" style={{height: "30em"}}>
              <div className="card-img">
                <a href="https://github.com/pragatipdx">
                  <img src={pic2} id="image2" className="img-fluid" alt="Profilepicture" style={{height: "60em"}}/>
                </a>
              </div>
              <div className="card-body">
              </div>
              <div className="card-footer">
              </div>
            </div>
          </div>
          <div classname="column">
            <div className="max-auto card" style={{height: "15em"}}>
              <div className="card-img">
                <a href="https://github.com/parasharparth">
                  <img src={pic1} id="image1" className="img-fluid" alt="Profilepicture" style={{height: "60em" , width:""}} />
                </a>
              </div>
              <div className="card-body">
              </div>
              <div className="card-footer">
              </div>
            </div>
          </div>
          <div className="sources">
            Credits:
            <a href="https://github.com/Kirtan6004">    Kirtan Patel      </a> ,{" "}
            <a href="https://github.com/pragatipdx">    Pragati Rathore</a>    and
            <a href="https://github.com/parasharparth">    Parth Parashar      </a>
          </div>
        </div>


      </div>
  );

}


export default About;
