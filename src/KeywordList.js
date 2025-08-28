import React, { useState } from "react";
import Keyword from "./Keyword";
import './style/KeywordList.css';

const KeywordList = () => {
    const [keywords, setKeywords] = useState([
        "Python", "C", "Java", "C++", "JavaScript", "React", "Node.js", "Bash", "Scripting",
        "Git", "Linux", "Debian", "Ubuntu", "Proxmox", "Docker", "Containerization", "Virtual Machines", "QEMU",
        "DevOps", "Networking", "Web Deployment", "Databases", "SQL",
        "Search Engines", "Indexing", "Systems Development", "System Administration", "Automation", "Cybersecurity",
        "x86 Assembly", "Compilers", "APIs", "Multiprocessing", "Distributed Systems", "Software Design",
        "Object-Oriented Programming", "Functional Programming", "Full Stack Development", "Big Data",
        "Remote Development", "SSH"
    ]);

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

export default KeywordList;