import React from "react";
import Example from "./Example";
import KeywordScroller from './KeywordScroller';
import keywordList from "./keyword_list";
import { specialExamplesList, examplesList } from "./works_examples";
import './style/Works.css'

const Works = () => {
    return (
      <div className="works-container">
        <KeywordScroller keywordList={ keywordList } />
        <div className="works-container__content">
          <div className="view-area">
            <h1 className="section-header">Works</h1>
            <h3 className="section-subheader">Here are some projects I have worked on:</h3>
            <div className="special-works-container">
              { specialExamplesList.map((specialExample) => (
                <Example examples={ specialExample } key={ specialExample.id } />
            )) }
            </div>
            { examplesList.map((example) => (
                <Example examples={ example } key={ example.id } />
            )) }
          </div>
        </div>
      </div>
    );
  }

export default Works;