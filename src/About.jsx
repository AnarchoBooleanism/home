import React from 'react';
import './style/About.scss';

const About = () => {
    return (
      <div className="about-container">
        <div className="view-area about-container__content">
          <div className="flex-container flex-container--about">
            <div className="image-box-container--about">
              <div className="image-box">
                <img src={ import.meta.env.BASE_URL + "/assets/face_pic1.webp" } alt="A selfie of mine"></img>
              </div>
            </div>
            <div>
              <h1 className="section-header">About Me (Hello!)</h1>
              <h2 className="section-subheader">My name is Nathan Guerrero. I am a tinkerer and software developer, focused on DevOps and the back-end.</h2>
              <p>Since childhood, creating and tinkering with software has been a passion of mine, following me even beyond college. This journey, through various group projects and hackathons, has given me deep experience across the entire stack. For example, I have grown deeply familiar with both Python and C/C++.</p>
              <p>Beyond any one technology, I quickly learn new skills and languages, and, with my persistence and my attention to detail, break down complex problems into concise, idiomatic solutions.</p>
              <p>In my free time, I like to play video games, watch anime, compose/produce music, and work on my homelab, the Sapphic Homelab/Home Server, daily. I also have an intermediate fluency in Spanish and Japanese.</p>
              <p>Currently based in San Diego, CA, having graduated from the University of California, Irvine in 2025, with a B.S. in Computer Science. <i>Right now, I am looking for work!</i></p>
              <p>Fun fact: this entire website was <a href="https://github.com/AnarchoBooleanism/home" target="_blank" rel="noopener noreferrer" className="link">written from scratch, with React, Vite, Sass, and Node.js!</a></p>
            </div>
          </div>
        </div>
      </div>
    );
  }

export default About;