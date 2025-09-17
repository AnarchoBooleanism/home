import React from "react";
import Keyword from "./Keyword";
import './style/KeywordList.css';

const KeywordScroller = (props) => {
    const keywords = props.keywordList;

    return (
        <div class="keywords-container fadeout-horizontal">
            <div class="keyword-track">
                { keywords.map((keyword) => (
                    <Keyword text={ keyword } ariaHidden={ false } />
                )) }
                { keywords.map((keyword) => ( // Duplicate here so scrolling goes infinitely AND seemlessly
                    <Keyword text={ keyword } ariaHidden={ true } />
                )) }
            </div>
        </div>
    );
}

export default KeywordScroller;