import React from "react";
import "../../App.css";
import project1 from "../assets/images/TrackingJournal-1.bmp";
import project2 from "../assets/images/Project-2.jpg";
import codeQuiz from "../assets/images/CodeQuiz.gif";
import weatherDashboard from "../assets/images/WeatherDashboard.bmp";
import noteTaker from "../assets/images/NoteTaker.jpg";
import techBlog from "../assets/images/TechBlog.jpg";
import github from "../assets/images/white-github.png";
import app from "../assets/images/white-open.png";

export default function Portfolio() {
  const projectData = [
    {
      title: "Tracking Journal",
      tech: "HTML5, CSS, Javascript, Google Maps API, jQuery",
      image: project1,
      github: "https://github.com/AnnaNguyen1/Track-Journal",
      app: "https://annanguyen1.github.io/Track-Journal/homepage.html",
    },
    {
      title: "MedicationMe",
      tech: "HTML5, CSS, JS, Express.js, Node.js, MySQL",
      image: project2,
      github: "https://github.com/ahooper00/MedicationMe",
      app: "https://medication-me.herokuapp.com/",
    },
    {
      title: "Code Quiz",
      tech: "HTML, CSS, Javascript",
      image: codeQuiz,
      github: "https://github.com/AnnaNguyen1/Code-Quiz",
      app: "https://annanguyen1.github.io/Code-Quiz/",
    },
    {
      title: "Weather Dashboard",
      tech: "HTML5, CSS, Javascript, Google Maps API, jQuery",
      image: weatherDashboard,
      github: "https://github.com/AnnaNguyen1/Track-Journal",
      app: "https://annanguyen1.github.io/Track-Journal/homepage.html",
    },
    {
      title: "Note Taker",
      tech: "Node.js, NPM, Express.js, uuid v4",
      image: noteTaker,
      github: "https://github.com/AnnaNguyen1/Note-Taker",
      app: "https://note-taker-annanguyen.herokuapp.com/",
    },
    {
      title: "Tech Blog",
      tech: "Node.js, Handlebars.js, Sequilize and MySql",
      image: techBlog,
      github: "https://github.com/AnnaNguyen1/Tech-Blog",
      app: "https://tech-blog-an.herokuapp.com/",
    },
  ];

  return (
    <div id="head-container">
      <section className="row">
        <div className="col-1 col-sm-2"></div>
        <div className="container-title-after-2 fatface col-11 col-sm-8 z-index-1">
          <h2 className="z-index-1">Projects.</h2>
        </div>
        <div className="col-2 mb-5"></div>
      </section>

      <div className="row justify-content-center">
        {projectData.map((project) => (
          <section
            className="work-margin col-lg-4 mt-md-3 z-index-1 project-card"
            key={project.title}
          >
            <img
              className="work-img mt-3"
              src={project.image}
              alt={project.title}
              height="400px"
              width="100%"
            />
            <div className="content-display">
              <div className="content-text">
                <h5 class="poppins">
                  <b>{project.title}</b>
                </h5>
                <p class="poppins tech-text">
                  <small>{project.tech}</small>
                </p>
                <ul class="d-flex flex-wrap justify-content-start">
                  <li>
                    <a
                      href={project.github}
                      class="mx-2 github"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src={github}
                        alt="github link"
                        width="25px"
                        height="25px"
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href={project.app}
                      class="mx-2 application"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src={app}
                        alt="app link"
                        width="20px"
                        height="20px"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
