// List of special examples, inside a white box
export const specialExamplesList = [
    {
        "title": "Sapphic Homelab/Home Server (2024-present)",
        "subtitle": "Active maintainer",
        "description": "A multi-node server setup, made with repurposed parts and developed with DevOps principles at its foundation. Being based on Proxmox, NixOS, Komodo, and Docker Compose, and supported with GitHub Actions, Ansible, and Renovate (among other tools), provisioning, configuration, and orchestration are seamless, and as a result, this homelab manages to run at least 37 services, including Pterodactyl and n8n.",
        "extraText": "Challenges: With many services to support, yet limited hardware capacity and free time, a focus on efficiency, automation, and reproducibility (with GitOps + IaC) is key for sustainability. Wherever possible, applications get containerized (with lean Docker images) for a low footprint, and dedicated builders handle heavy build tasks at all levels. Renovate is set to manage updates, and with multiple layers of CI/CD pipelines and orchestrators, updates are simultaneously stable yet fast-moving, thanks to the level of testing and reproducibility afforded by this GitOps approach.",
        "image": import.meta.env.BASE_URL + "assets/specialexample_pic1.webp",
        "altText": "A photo of my homelab, with multiple switches and computers laid out vertically in a rackmount shelf, connected with numerous colored patch cables, as well as various labels and stickers laid on top of the surfaces facing the camera",
        "links": [
            {"title": "Demonstration", "url": "https://www.youtube.com/watch?v=q_1CwsmaGQE"}
        ],
        "id": 0
    }
];

// List of regular examples, to be listed within the Works area
export const examplesList = [
    {
        "title": "ICS Indexer & Search Engine (2025)",
        "subtitle": "Team member",
        "description": "Developed for a class, COMPSCI 121, as a group of 4, in Python: an all-in-one solution for indexing and searching through a massive set of webpages, handling search requests in <100 ms, even under harsh operational constraints. I was responsible for designing the core databases and algorithms for high efficiency.",
        "extraText": "Challenges: To meet the 100 ms performance requirement, we focused on creating highly efficient, resource-optimized algorithms; we implemented multithreading, partial indexes with custom merging algorithms, and reverse index data structures, to process large volumes of data effectively.",
        "image": import.meta.env.BASE_URL + "assets/example_pic5.png",
        "altText": "A screenshot of the terminal, running a Python program for a search engine, with different search queries and their results, for 'cs majors uci' and 'search engine ai', as well as a browser loaded with one of the pages from the results",
        "links": [
            {"title": "Demonstration", "url": "https://www.youtube.com/watch?v=Z32PKIDwycE"}
        ], 
        "id": 5
    },
    {
        "title": "Python + MySQL Database Manager (2025)",
        "subtitle": "Back-end developer",
        "description": "Created for a class, COMPSCI 122A, as a group of 3, in Python and SQL: a database manager for the fictional \"ZotStreaming\" platform representing the platform's components (e.g. episodes) as interconnected tables. I translated user requests into precise SQL queries and formatted query results as readable outputs; I also configured our development environment (with VS Code Dev Containers) to ensure a consistent workspace.",
        "extraText": "Challenges: Being new to SQL, mastering its syntax and ensuring the correctness of the query logic required significant effort through numerous iterations. Additionally, connecting our Python application to MySQL proved as a major hurdle, requiring deep troubleshooting of the software environment.",
        "image": import.meta.env.BASE_URL + "assets/example_pic4.png",
        "altText": "A vertically-split picture, with the top half showing a terminal with different commands for the Python script being run in a terminal, and the bottom half showing a terminal with the results of the aforementioned commands shown as SQL table data",
        "links": [
            {"title": "Demonstration", "url": "https://www.youtube.com/watch?v=_Gjxf5uKNMY"}
        ],
        "id": 4
    },
    {
        "title": "Tile-Matching Game Environment (2024)",
        "subtitle": "Team member",
        "description": "Written for a project class, IN4MATX 122, as a group of 5, in Python: a framework for building tile-matching games. I implemented the logic behind two games: Dr. Mario and Puzzle Fighter. I drafted documentation and designs in UML format for effective communication.",
        "extraText": "Challenges: As it was my first time with UML, I needed to work with my team to write for their needs. In addition, it was a challenge to determine the best way to represent game objects and rules: I went to functional programming principles to represent data as transformable data structures, with functions for that data as game rules.",
        "image": import.meta.env.BASE_URL + "assets/example_pic3.png",
        "altText": "A screenshot of the tile-matching game environment playing an implementation of Puzzle Fighter, with there being two sides, one for each player. Each side shows differently-colored pairs of tiles being dropped to the bottom. Also shown for each side is a timer and a score.",
        "links": [
            {"title": "Demonstration", "url": "https://www.youtube.com/watch?v=yA7TUdVvCN0"}
        ],
        "id": 3
    },
    {
        "title": "Random GIPHY Bot (2021)",
        "subtitle": "Developer",
        "description": "Written in Python, using Discord.py and the GIPHY API, as a personal project over the span of two weeks: a Discord bot that responds to commands with a random GIF from GIPHY; it also comes with a management console.",
        "extraText": "Challenges: It was my first time using Python to handle APIs, pushing me to learn about making requests and processing data. With the project's IO-heavy nature, I learned how to use asynchrony in Python for optimal CPU time utilization.",
        "image": import.meta.env.BASE_URL + "assets/example_pic2.png",
        "altText": "A screenshot of Discord, where a Discord bot named Giffybot is responding to a command, via Discord message, asking for a GIF with the tag 'hello', with a randomly selected GIF, which depicts a man with a mustache, surrounded by balloons, looking past the camera",
        "links": [
            {"title": "GitHub", "url": "https://github.com/AnarchoBooleanism/random-giphy-bot"},
            {"title": "Demonstration", "url": "https://youtu.be/qzUwiL4S7ro"}
        ],
        "id": 2
    },
    {
        "title": "The Masked Singer but not the Masked Singer (2021)",
        "subtitle": "Front-end developer",
        "description": "Made with React and the last.fm API, as a group of 4, for the hackathon, ZotHacks 2021: a game that presents 10 questions from 5 different genres, where the goal is to guess the album, out of 4, which a specified artist has made.",
        "extraText": "Challenges: It was my first time working with a team on a project, pushing me to learn how to work with others for a particular result. As well, it was my first time with web development, pushing me to learn React and other web technologies from scratch.",
        "image": import.meta.env.BASE_URL + "assets/example_pic1.png",
        "altText": "A screenshot of the trivia game, where the top text reads 'Justin Timberlake', and below it are 4 albums in a row, one of which is a Justin Timberlake album, and the rest of which being random albums of the same genre from other artists",
        "links": [
            {"title": "Try it yourself!", "url": "/masked-singer/"},
            {"title": "Devpost", "url": "https://devpost.com/software/the-masked-singer-but-not-the-masked-singer"}
        ],
        "id": 1
    }
];