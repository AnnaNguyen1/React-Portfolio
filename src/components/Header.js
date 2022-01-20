import React from "react";
import "../App.css";

export default function Header() {
  return (
    <header className="header">
      <div id="profile-desc" className="col-12 col-lg-6 ">
        <style className="short-intro d-flex flex-wrap poppins center" />
        <p className="intro-line col-12 l-space-neg poppins">
          <small>
            <b>
              Hi <span className="hand">🖐</span>, my name is
            </b>
          </small>
        </p>
        <p className="intro-line name col-12 fatface">Anna Nguyen</p>
        <p className="intro-line col-12 poppins">
          <b>
            <small>Full Stack Developer</small>
          </b>
        </p>
      </div>
    </header>
  );
}
