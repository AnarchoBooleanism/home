import React, { useState } from "react";
import Example from "./Example";
import examplePic1 from "./assets/example_pic1.png";
import examplePic2 from "./assets/example_pic2.png";
import examplePic3 from "./assets/example_pic3.png";
import './style/Works.css'

const Works = () => {
    const [examples, setExamples] = useState([
      { title: "Tile-Matching Game Environment", subtitle: "Team Member", description: "Written for a project class, IN4MATX 122, in a group of 5, written in Python. It is a framework to build tile-matching games with. I implemented the logic behind two example games, based on Dr. Mario and Puzzle Fighter. I wrote and refined documentation and designs in UML format, for improved communication.", extraText: "Challenges: It was my first time using UML format, and I did have to work with my team to find what worked best with the project. In addition, it was a challenge to figure out how best to represent game objects and rules, so I ultimately decided to learn how to use functional programming principles to represent data as transformable data structures, and represent game rules and principles as functions transforming those structures.", image: examplePic3, links: [{title: "Demonstration", url: "https://www.youtube.com/watch?v=yA7TUdVvCN0"}], id: 3 },
      { title: "Random GIPHY Bot (2021)", subtitle: "Developer", description: "A personal project of mine, written over the span of two weeks. Written in Python, using Discord.py and the GIPHY API, it is a Discord bot that responds to commands with a random GIF from GIPHY. It also includes other related commands, and a back-end console for managing the Discord bot.", extraText: "Challenges: It was my first time using Python with APIs and the Internet, pushing me to learn about making requests and processing data. Since this program was IO-heavy, I learned how to use asynchrony in Python for optimal CPU time utilization.", image: examplePic2, links: [{title: "GitHub", url: "https://github.com/AnarchoBooleanism/random-giphy-bot"}, {title: "Demonstration", url: "https://youtu.be/qzUwiL4S7ro"}], id: 2 },
      { title: "The Masked Singer but not the Masked Singer (2021)", subtitle: "Front-end developer", description: "A submission to the hackathon, ZotHacks 2021, in collaboration with Jake Gerber, Nael Belhaj Haddou, and Kaiyuan Hu. Made with React and the last.fm API, it is a game that presents 10 questions from 5 different genres, where one has to guess which of 4 albums that a certain artist has made.", extraText: "Challenges: It was my first time working with a team on a project, which pushed me to learn how to work with others to achieve a certain result. It was also my first time with web development, which pushed me to learn React and other web technologies from scratch, which came in very useful.", image: examplePic1, links: [{title: "Try it yourself!", url: "https://anarchobooleanism.github.io/masked-singer/"}, {title: "Devpost", url: "https://devpost.com/software/the-masked-singer-but-not-the-masked-singer"}], id: 1 }
    ]);

    return (
      <div className="works-container">
        <div className="view-area works-container__content">
          <h1 className="section-header">Works</h1>
          <h3 className="section-subheader">Here are some projects I have worked on:</h3>
          { examples.map((example) => (
              <Example examples={ example } key={ example.id } />
          )) }
        </div>
      </div>
    );
  }

export default Works;