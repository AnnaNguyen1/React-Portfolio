import React from "react";
import "../App.css";

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-white poppins nav-margin">
      <div class="container-fluid" id="nav-container">
        <p class="navbar-brand fs-2 fatface">A.</p>
        <button
          class="navbar-toggler collapsed"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
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
