import React from "react";

function Footer() {
  return (
    <div>
      {" "}
      <footer className="bg-dark text-white text-center py-3">
        <div className="container">
          <p>
            &copy; employee management system (EMS) is a software solution
            designed to streamline and automate various tasks related to
            managing employees within an organization
          </p>
          <p>
            Follow us on
            <a href="https://twitter.com" className="text-white ml-2">
              Twitter
            </a>
            ,
            <a href="https://facebook.com" className="text-white ml-2">
              Facebook
            </a>
            ,
            <a href="https://instagram.com" className="text-white ml-2">
              Instagram
            </a>
            .
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
