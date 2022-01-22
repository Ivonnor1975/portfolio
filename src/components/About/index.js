import React from 'react'
import coverImage from "../../assets/cover/cover-image.jpg";


function About() {
  return (
    <section className="my-5 hero" >
      <h2 id="about">Full Stack Developer</h2>
      <div className=" d-flex flex-column hero-cta" >
      <img src={coverImage} className="my-2" style={{ width: "auto"}} alt="cover" />
      <p>
          I provide expertise and practical experience regarding HTML and CSS projects. I have a passion for making my clients' visions become reality.
          I offer valuable insight as you create your first project, I can help you improve your existing one, or I can create a maintainable solution quickly
      </p>
      <p>
          My expertise is in HTML, CSS3, SCSS, Javascript, Jquery, AJAX, Node.js, Express, Sql, MongoDB and React.
       </p>
       <li className="fw-bold mb-4">Resume: <a href="https://Ivonnor1975.github.io/assets/files/resume.pdf" target="_blank" rel="noreferrer">Click here to
           download it</a>
       </li>
       </div>

  </section>
  )
}
export default About;
