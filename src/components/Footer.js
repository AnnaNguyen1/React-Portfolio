import React from "react";
import "../App.css";
import githubImg from "./assets/images/github.png";
import emailImg from "./assets/images/email.png";
import linkedinImg from "./assets/images/linkedin.png";
import whatsappImg from "./assets/images/whatsapp.png";

export default function Footer() {
  return (
    <footer className="footer">
      <section class="row contact-icons">
        <ul class="d-flex flex-wrap justify-content-center mt-md-3 col-12 z-index-1">
          <li>
            <a
              href="https://github.com/AnnaNguyen1/"
              class="mx-4"
              target="_blank"
            >
              <img
                src={githubImg}
                width="30px"
                height="30px"
                class="z-index-1"
                alt="github"
              />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/anna-bnguyen/"
              class="mx-4"
              target="_blank"
            >
              <img
                src={linkedinImg}
                width="30px"
                height="30px"
                class="z-index-1"
                alt="linkedin"
              />
            </a>
          </li>
          <li>
            <a href="mailto::n.annabich@gmail.com" class="mx-4" target="_blank">
              <img
                src={emailImg}
                width="30px"
                height="30px"
                class="z-index-1"
                alt="email"
              />
            </a>
          </li>
          <li>
            <a href="https://wa.me/61407591120" class="mx-4" target="_blank">
              <img
                src={whatsappImg}
                width="30px"
                height="30px"
                class="z-index-1"
                alt="whatsapp"
              />
            </a>
          </li>
        </ul>
      </section>
      <p class="poppins text-center">Built by Anna Nguyen.</p>
    </footer>
  );
}
