import React from "react";
import "../App.css";
import profileImg from "../assets/images/mypic.jpg";

export default function About() {
  return (
    <div class="row align-items-center z-index-1" id="head-container">
      <div id="profile-img" class="col-12 col-lg-6">
        <img
          class="profile-photo d-block"
          src={profileImg}
          alt="Profile of Anna"
        />
      </div>
      <div id="profile-desc" class="col-12 col-lg-6">
        <align class="short-intro d-flex flex-wrap poppins" />
        <section class="row">
          <div class="col-1 col-sm-2"></div>
          <div class="container-title-after fatface col-11 col-sm-8 z-index-1">
            <h2>About Me.</h2>
          </div>
          <div class="col-1 col-sm-2"></div>
        </section>
        <p class="intro-line col-12 l-space-neg">
          <small>
            <b>
              Thank you for visting my page! My name is Anna, and I enjoy
              solving problems that consists of code! <br />
              <br />
              My interest in web development started when I joined BGL as a
              software support consultant, back in 2015. I had a little taste of
              coding during my years as a tester and business analyst and
              decided to dive into the coding world.
              <br />
              I have had a fruitful career so far. I started as a Nail
              Technician while studying Bachelor of Accountancy at RMIT and
              became a Chartered Accountant (CA) in 2019. I am currently
              employed at BGL as a Product Manager, managing Corporate
              Compliance Desktop Software.
              <br />
              Please reach out to me if you feel like a chat!
            </b>
          </small>
        </p>
      </div>
    </div>
  );
}
