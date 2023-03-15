import React from "react";

function Resume() {
  return (
    <section class="container">
      <hr></hr>

      <div>
        <div class="mt-5">
          <ul>
            <li>
                I am an aspiring Frontend and UI developer looking to work on challenging JavaScript based applications.
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
          <h3 className="top-title">My Skills</h3>
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