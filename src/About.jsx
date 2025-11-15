import React from 'react';
import './style/About.scss';

const About = () => {
    return (
      <div className="about-container">
        <div className="view-area about-container__content">
          <div className="flex-container flex-container--about">
            <div className="image-box-container--about">
              <div className="image-box">
                <img src={ import.meta.env.BASE_URL + "/assets/face_pic1.jpg" } alt="A selfie of mine"></img>
              </div>
            </div>
            <div>
              <h1 className="section-header">About Me (Hello!)</h1>
              <h2 className="section-subheader">I am Nathan Guerrero, a software developer and tinkerer, with a B.S. in Computer Science.</h2>
              <p>Ever since childhood, creating and tinkering with software has been a passion of mine, a passion that has followed me into college and beyond. Throughout my journey, with my persistence and my attention to detail, I have gained a broad range of experience, from my time in a team hackathon to my times across numerous group projects.</p>
              <p>I am highly proficient in Python, C/C++, and Java, and have experience across the entire stack, from the front-end (React), to databases (SQL), to the systems-level. In addition, I like to compose/produce music and game in my free time. I also have an intermediate fluency in Spanish and Japanese.</p>
              <p>Currently based in San Diego, CA, having graduated from the University of California, Irvine in 2025.</p>
              <p>Fun fact: this entire website was <a href="https://github.com/AnarchoBooleanism/home" target="_blank" rel="noopener noreferrer">written from scratch, with React, Vite, Sass, and Node.js!</a></p>
            </div>
          </div>
        </div>
      </div>
    );
  }

export default About;