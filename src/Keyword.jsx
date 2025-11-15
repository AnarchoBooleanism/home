import React from 'react';
import './style/Keyword.scss';

const Keyword = (props) => {
    if (props.ariaHidden) {
        return (
            <div class="keyword" aria-hidden="true">{ props.text }</div>
        );
    } else {
        return (
            <div class="keyword">{ props.text }</div>
        );
    }
}

export default Keyword;