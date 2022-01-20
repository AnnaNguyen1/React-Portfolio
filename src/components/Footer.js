import React from "react";
import "../App.css";
import githubImg from "./assets/images/github.png";
import emailImg from "./assets/images/email.png";
import linkedinImg from "./assets/images/linkedin.png";
import whatsappImg from "./assets/images/whatsapp.png";

export default function Footer() {
  return (
    <footer className="footer">
      <section className="row contact-icons">
        <ul className="d-flex flex-wrap justify-content-center mt-md-3 col-12 z-index-1">
          <li>
            <a
              href="https://github.com/AnnaNguyen1/"
              className="mx-4"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={githubImg}
                width="30px"
                height="30px"
                className="z-index-1"
                alt="github"
              />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/anna-bnguyen/"
              className="mx-4"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={linkedinImg}
                width="30px"
                height="30px"
                className="z-index-1"
                alt="linkedin"
              />
            </a>
          </li>
          <li>
            <a
              href="mailto::n.annabich@gmail.com"
              className="mx-4"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={emailImg}
                width="30px"
                height="30px"
                className="z-index-1"
                alt="email"
              />
            </a>
          </li>
          <li>
            <a
              href="https://wa.me/61407591120"
              className="mx-4"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={whatsappImg}
                width="30px"
                height="30px"
                className="z-index-1"
                alt="whatsapp"
              />
            </a>
          </li>
        </ul>
      </section>
      <p className="poppins text-center">Built by Anna Nguyen.</p>
    </footer>
  );
}
