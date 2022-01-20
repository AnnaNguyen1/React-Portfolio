import React from "react";

export default function Resume() {
  return (
    <div id="head-container">
      <div className="row">
        <div className="col-sm-2"></div>
        <div className="container-title-after-2 fatface col-11 col-sm-8 z-index-1">
          <h2>Resume.</h2>
        </div>
        <div className="col-sm-2"></div>
      </div>
      <section className="row">
        <div className="col-md-1"></div>
        <div className="about-me-text poppins z-index-1 mt-3 center-text">
          <p>
            <small>
              <b>
                {" "}
                Download my resume&nbsp;
                <a
                  href="https://annanguyen1.github.io/Portfolio/Assets/files/AnnaNguyenCV2021.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  here
                </a>
                .
                <br />
                <br />
                Technical skills:
                <br />
                Front End Proficiencies: HTML, CSS, JS, JQuery, React, Bootstrap
                <br />
                Back End Proficiencies: RESTful API, Node.js, Express.js, MySQL,
                MongoDB, GraphQL, PWA
                <br />
                <br />
              </b>
            </small>
          </p>
        </div>
        <div className="col-md-1"></div>
      </section>
    </div>
  );
}
