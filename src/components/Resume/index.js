import React from "react";

function Resume() {
  return (
    <section class="container">
      <h2 className="top-title">Resume</h2>
      <hr></hr>

      <div>
        <div class="mt-5">
          <h2 className="top-title">Naser Suleiman</h2>
          <ul>
            <li>
                          Aspiring Frontend and UI developer looking to work on challenging JavaScript based applications.
            </li>
          </ul>

         <a
                      href="https://github.com/naser421/React-Portfolio-Challenge/files/10975130/Naser_Resume.pdf"
            class="link"
          >
            Download My Resume 
          </a>
        </div>
      </div>

      <div class="justify-content-center mt-5">
        <div>
          <h2 className="top-title">Proficiencies</h2>
          <ul>
            <li>
                          As a full stack developer trained in the Full Stack Development Coding Bootcamp, I have mastered the following technologies:
                          HTML, CSS, JavaScript, Node.js, Express.js, MySQL, Sequelize, MongoDB, Mongoose and React
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Resume;