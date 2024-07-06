import React from 'react';
import './style/Example.css';

const Example = (props) => {
    const example = props.examples;

    // Code to determine whether something is flipped
    if (example.id % 2 === 0) {
        var containerType = "flex-container flex-container--flipped";
    }
    else {
        var containerType = "flex-container";
    }

    return (
      <div className="example-container">
        <div className={containerType}>
            <div>
                <h1>{ example.title }</h1>
                <h2>{ example.subtitle }</h2>
                <p>{ example.description }</p>
                <p>{ example.extraText }</p>
                <div className="button-wrapper">
                { example.links.map((link) => (
                    <a href={ link.url } className="link-button">{ link.title }</a>
                )) }
                </div>
            </div>
            <div>
                <a href={ example.links[0].url }>
                    <div>
                        <div className="image-box">
                            <img src={ example.image } alt="Project example"></img>
                        </div>
                    </div>
                </a>
            </div>
        </div>
      </div>
    );
  }

export default Example;