// List of special examples, inside a white box
export const specialExamplesList = [
    {
        "title": "Sapphic Homelab/Home Server (2024-present)",
        "subtitle": "Personal project",
        "description": "I'm an avid homelab enthusiast. What started as a simple Home Assistant instance on an old laptop quickly grew into a new hobby and a passion for hosting various services and experimenting with different technologies. Nowadays, with the many additions of used hardware, this homelab/home server is closer to a \"mini-datacenter\", performing a variety of tasks, from hosting experiments, to file storage and remote development.",
        "extraText": "Through this journey, and many dozens of hours of debugging and problem solving, I've gained hands-on experience in optimizing network configurations with OpenWrt and special hardware, leveraging Proxmox and Linux for virtual machines, containers, and clustered environments, creating CI/CD and IaC pipelines for ease of deployment, and expediting iteration with automation scripts. This has given me extensive experience in deployment and web administration, all while creating a highly functional and evolving home IT infrastructure from diverse hardware.",
        "image": import.meta.env.BASE_URL + "assets/specialexample_pic1.jpg",
        "links": [
            {"title": "Demonstration", "url": "https://www.youtube.com/watch?v=hI5Pl6_dHzY"}
        ],
        "id": 0
    }
];

// List of regular examples, to be listed within the Works area
export const examplesList = [
    {
        "title": "ICS Indexer & Search Engine (2025)",
        "subtitle": "Team member",
        "description": "Developed for a project class, COMPSCI 121, in a group of 4, written in Python. It is an all-in-one solution for indexing and searching through a massive set of webpages, being able to handle search requests within 100 ms under harsh operational constraints. I was responsible for designing the object-oriented structure of the program and developing the core databases and algorithms.",
        "extraText": "Challenges: To meet the 100 ms performance requirement, my team and I focused on creating highly efficient, resource-optimized algorithms. We implemented multithreading, partial indexes with custom merging algorithms, and various reverse index data structures to handle and process large volumes of data effectively.",
        "image": import.meta.env.BASE_URL + "assets/example_pic5.png",
        "links": [
            {"title": "Demonstration", "url": "https://www.youtube.com/watch?v=Z32PKIDwycE"}
        ], 
        "id": 5
    },
    {
        "title": "Python + MySQL Database Manager (2025)",
        "subtitle": "Back-end developer",
        "description": "Created for a class, COMPSCI 122A, in a group of 3, written in Python and SQL. This project is a database manager for the fictional \"ZotStreaming\" platform, representing the platform's various components—like users, shows, and episodes—as interconnected tables. My primary role involved translating user requests and data additions into precise SQL queries and formatting the query results into clear, readable outputs. I also took the lead in setting up our development environment, utilizing VS Code Dev Containers and Docker to ensure a consistent and portable workspace.",
        "extraText": "Challenges: As I was relatively new to SQL, mastering its syntax and ensuring the logic of my queries was correct required significant effort and numerous iterations. Additionally, connecting our Python application to a MySQL database proved to be a hurdle, requiring time for troubleshooting the development environment.",
        "image": import.meta.env.BASE_URL + "assets/example_pic4.png",
        "links": [
            {"title": "Demonstration", "url": "https://www.youtube.com/watch?v=_Gjxf5uKNMY"}
        ],
        "id": 4
    },
    {
        "title": "Tile-Matching Game Environment (2024)",
        "subtitle": "Team member",
        "description": "Written for a project class, IN4MATX 122, in a group of 5, written in Python. It is a framework to build tile-matching games with. I implemented the logic behind two example games, based on Dr. Mario and Puzzle Fighter. I wrote and refined documentation and designs in UML format, for improved communication.",
        "extraText": "Challenges: It was my first time using UML format, and I did have to work with my team to find what worked best with the project. In addition, it was a challenge to figure out how best to represent game objects and rules, so I ultimately decided to learn how to use functional programming principles to represent data as transformable data structures, and represent game rules and principles as functions transforming those structures.",
        "image": import.meta.env.BASE_URL + "assets/example_pic3.png",
        "links": [
            {"title": "Demonstration", "url": "https://www.youtube.com/watch?v=yA7TUdVvCN0"}
        ],
        "id": 3
    },
    {
        "title": "Random GIPHY Bot (2021)",
        "subtitle": "Developer",
        "description": "A personal project of mine, written over the span of two weeks. Written in Python, using Discord.py and the GIPHY API, it is a Discord bot that responds to commands with a random GIF from GIPHY. It also includes other related commands, and a back-end console for managing the Discord bot.",
        "extraText": "Challenges: It was my first time using Python with APIs and the Internet, pushing me to learn about making requests and processing data. Since this program was IO-heavy, I learned how to use asynchrony in Python for optimal CPU time utilization.",
        "image": import.meta.env.BASE_URL + "assets/example_pic2.png",
        "links": [
            {"title": "GitHub", "url": "https://github.com/AnarchoBooleanism/random-giphy-bot"},
            {"title": "Demonstration", "url": "https://youtu.be/qzUwiL4S7ro"}
        ],
        "id": 2
    },
    {
        "title": "The Masked Singer but not the Masked Singer (2021)",
        "subtitle": "Front-end developer",
        "description": "A submission to the hackathon, ZotHacks 2021, in collaboration with Jake Gerber, Nael Belhaj Haddou, and Kaiyuan Hu. Made with React and the last.fm API, it is a game that presents 10 questions from 5 different genres, where one has to guess which of 4 albums that a certain artist has made.",
        "extraText": "Challenges: It was my first time working with a team on a project, which pushed me to learn how to work with others to achieve a certain result. It was also my first time with web development, which pushed me to learn React and other web technologies from scratch, which came in very useful.",
        "image": import.meta.env.BASE_URL + "assets/example_pic1.png",
        "links": [
            {"title": "Try it yourself!", "url": "/masked-singer/"},
            {"title": "Devpost", "url": "https://devpost.com/software/the-masked-singer-but-not-the-masked-singer"}
        ],
        "id": 1
    }
];