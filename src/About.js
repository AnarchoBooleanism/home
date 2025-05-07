import React from 'react';
import facePic from './assets/face_pic1.jpg';
import './style/About.css';

const About = () => {
    return (
      <div className="about-container">
        <div className="view-area about-container__content">
          <div className="flex-container flex-container--about">
            <div className="image-box-container--about">
              <div className="image-box">
                <img src={ facePic } alt="A selfie of mine"></img>
              </div>
            </div>
            <div>
              <h1 className="section-header">About Me (Hello!)</h1>
              <h2 className="section-subheader">I am Nathan Guerrero, a Computer Science student at the University of California, Irvine (class of 2025).</h2>
              <p>Ever since childhood, creating and tinkering with software has been a passion of mine, a passion that has followed me into college. I am persistent and highly attentive to detail. As a fourth-year, I have gained a broad range of experience, from my time in a team hackathon to my times across numerous group projects.</p>
              <p>I am highly proficient in Python (and C/C++), have much experience in systems development, and have some experience in web development, including in React. In addition to programming, I also like to compose/produce music and game in my free time and know a bit of Japanese and Spanish.</p>
              <p>Currently based in Irvine, CA, where I study.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

export default About;