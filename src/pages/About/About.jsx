/* eslint-disable react/no-unescaped-entities */

import { useEffect, useState } from "react"
import Testimonial from "./Testimonial";
import Service from "./Service";

const servicesData = [
  {
    icon: "/images/icon-dev.svg",
    "title": "Front end development",
    "description": "Crafting intuitive interfaces, enhancing experiences."
  },
  {
    icon: "/images/icon-dev.svg",
    "title": "MERN development",
    "description": "Skilled in MERN stack for efficient web apps."
  },

];


const About = () => {
  const [testimonials, setTestimonials] = useState([]);
  useEffect(() => {
    fetch('testimonials.json').then(res => res.json()).then(data => {
      console.log(data)
      setTestimonials(data)
    });
  }, [])
  return (
    <article className="about  active" data-page="about">

      <header>
        <h2 className="h2 article-title">About me</h2>
      </header>

      <section className="about-text">
        <p>
          Hey there! I'm a skilled front-end developer from Chattogram, specializing in React.js and with a solid understanding of Next.js. Proficient in the MERN stack, encompassing Express.js, Node.js, and MongoDB, I ensure robust back-end functionality. I also integrate Firebase for dynamic web applications.
          <br />
          <br />
          As an authentication specialist, I prioritize security by implementing JWT to safeguard user access. With a holistic understanding of both front-end and back-end technologies, I design cohesive online solutions tailored to your needs.
          <br />
          <br />
          Seeking a dedicated developer committed to excellence? Let's collaborate! Together, we'll elevate your online presence and create something extraordinary!
        </p>
      </section>


      {/* <!--
      - service
    --> */}

      <section className="service">

        <h3 className="h3 service-title">What i'm doing</h3>

        <ul className="service-list">

          {servicesData.map((service, index) => (
            <Service
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}

        </ul>

      </section>

    </article>
  )
}

export default About