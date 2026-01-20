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
              <h2 className="section-subheader">I am Nathan Guerrero, a software developer and tinkerer, focused on DevOps and the back-end.</h2>
              <p>Starting from childhood, creating and tinkering with software has been a passion of mine, one that has followed me into college and beyond. Throughout my journey, with my persistence and my attention to detail, I have gained a broad range of experience, including in team hackathons and numerous group projects.</p>
              <p>I am strongly proficient in Python, C/C++, and Java, with experience across the entire stack, from React to SQL. More importantly than any technology, I have the ability to quickly learn new skills and languages, as well as break down any complex problem into concise and idiomatic solutions.</p>
              <p>In my free time, I like to game, compose/produce music, and work on my homelab, the Sapphic Homelab/Home Server, daily. Additionally, I have an intermediate fluency in both Spanish and Japanese.</p>
              <p>Currently based in San Diego, CA, having graduated from the University of California, Irvine in 2025, with a B.S. in Computer Science. <i>At the moment, I am looking for work!</i></p>
              <p>Fun fact: this entire website was <a href="https://github.com/AnarchoBooleanism/home" target="_blank" rel="noopener noreferrer" className="link">written from scratch, with React, Vite, Sass, and Node.js!</a></p>
            </div>
          </div>
        </div>
      </div>
    );
  }

export default About;