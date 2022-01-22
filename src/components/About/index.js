import React from 'react'
import coverImage from "../../assets/cover/cover-image.jpg";

function About() {
  return (
    <section className="my-5" >
      <h1 id="about" className="container-lg mt-2 box-padding">Full Stack Developer</h1>
      <div className="split" >
      <img src={coverImage} className="my-2" style={{ width: "50vh" }} alt="cover" />
      <p>
          I provide expertise and practical experience regarding HTML and CSS projects. I have a passion for making my clients' visions become reality.
          I offer valuable insight as you create your first project, I can help you improve your existing one, or I can create a maintainable solution quickly
          My expertise is in HTML, CSS3, SCSS, Javascript, Jquery, and AJAX.
       </p>
       </div>
       <li className="list-group-item fw-bold mb-4">Resume: <a href="https://ivonnor1975.github.io/assets/files/resume.pdf" target="_blank" rel="noreferrer">Click here to
           download it</a>
      </li>

  </section>
  )
}
export default About;
