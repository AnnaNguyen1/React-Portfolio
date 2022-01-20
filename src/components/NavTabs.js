import React from "react";
import "../App.css";

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white poppins nav-margin">
      <div className="container-fluid" id="nav-container">
        <p className="navbar-brand fs-2 fatface">A.</p>
        <button
          className="navbar-toggler collapsed"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a
              className={
                currentPage === "About" ? "nav-link active" : "nav-link"
              }
              href="#About"
              onClick={() => handlePageChange("About")}
            >
              <b>ABOUT ME</b>
            </a>
            <a
              className={
                currentPage === "Projects" ? "nav-link active" : "nav-link"
              }
              href="#Projects"
              onClick={() => handlePageChange("Projects")}
            >
              <b>PROJECTS</b>
            </a>
            <a
              className={
                currentPage === "Contact" ? "nav-link active" : "nav-link"
              }
              href="#Contact"
              onClick={() => handlePageChange("Contact")}
            >
              <b>CONTACT</b>
            </a>
            <a
              className={
                currentPage === "Resume" ? "nav-link active" : "nav-link"
              }
              href="#Resume"
              onClick={() => handlePageChange("Resume")}
            >
              <b>RESUME</b>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavTabs;
