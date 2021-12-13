import React from "react";

export default function Footer() {
  return (
    <footer className="footer mt-auto py-3 bg-dark">
      <div className="container d-flex flex-column">
        <span className="text-white-50">Air Mate © 2021</span>
        <span className="text-white-50">
          Designed & Developed by
          <strong>
            <a
              href="https://www.linkedin.com/in/mjunaidaslam/"
              className="text-decoration-none text-white-50"
            >
              {" "}
              Junaid Aslam
            </a>
          </strong>
        </span>
      </div>
    </footer>
  );
}
