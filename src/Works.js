import { useState } from "react";
import Example from "./Example";
import examplePic1 from "./assets/example_pic1.png";

const Works = () => {
    const [examples, setExamples] = useState([
        { title: "The Masked Singer but not the Masked Singer (2021)", subtitle: "Front-end developer", description: "A submission to the hackathon, ZotHacks 2021, in collaboration with Jake Gerber, Nael Belhaj Haddou, and Kaiyuan Hu. Made with React and the last.fm API, it is a game that presents 10 questions from 5 different genres, where one has to guess which of 4 albums that a certain artist has made.", extraText: "Challenges: It was my first time working with a team on a project, which pushed me to learn how to work with others to achieve a certain result. It was also my first time with web development, which pushed me to learn React and other web technologies from scratch, which came in very useful.", image: examplePic1, links: [{title: "Try it yourself", url: "https://anarchobooleanism.github.io/masked-singer/"}, {title: "Devpost", url: "https://devpost.com/software/the-masked-singer-but-not-the-masked-singer"}], id: 1 }
    ]);

    return (
      <div className="Works">
        <h1>Works</h1>
        <h2>Here are some projects I have worked on:</h2>
        { examples.map((example) => (
            <Example examples={ example } key={ example.id } />
        )) }
      </div>
    );
  }

export default Works;