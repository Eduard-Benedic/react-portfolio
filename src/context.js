import React, { Component } from "react";
import img1 from "./img/img1.jpg";
import img2 from "./img/img2.jpeg";
import img3 from "./img/img3.jpg";
import img4 from "./img/img4.jpg";
import img5 from "./img/img5.jpg";
import img6 from "./img/img6.jpg";
import img7 from "./img/img7.jpg";

const Context = React.createContext();

export class Provider extends Component {
  constructor() {
    super();

    this.state = {
      cards: [
        {
          title: "Technologies",
          technologies: [
            ["CSS", "Sass", "HTML", "JavaScript"],
            ["CSS", "Sass", "HTML", "JavaScript"],
            ["Bootstrap", "jQuery", "HTML", "CSS"]
          ],
          linksProject: [
            "https://eduard-benedic.github.io/travel-during-autumn/",
            "https://eduard-benedic.github.io/chromebook/",
            "https://eduard-benedic.github.io/bootstrap-I/"
          ],
          linksGithub: [
            "https://github.com/Eduard-Benedic/travel-during-autumn",
            "https://github.com/Eduard-Benedic/chromebook",
            "https://github.com/Eduard-Benedic/bootstrap-I"
          ],
          images: [img1, img2, img3]
        },
        {
          title: "Technologies",
          technologies: [
            ["JavaScript - ES6", "HTML", "CSS"],
            ["JavaScript", "Sass", "JavaScript"],
            ["JavaScript", "Sass", "JavaScript"]
          ],
          linksProject: [
            "https://eduard-benedic.github.io/book-list/",
            "https://eduard-benedic.github.io/loan-calculator/",
            "https://eduard-benedic.github.io/github-finder/"
          ],
          linksGithub: [
            "https://github.com/Eduard-Benedic/book-list",
            "https://github.com/Eduard-Benedic/loan-calculator",
            "https://github.com/Eduard-Benedic/github-finder"
          ],
          images: [img4, img5, img6]
        },
        {
          title: "Technologies",
          technologies: [["React", "ES6", "Sass", "JavaScript"]],
          linksProject: ["https://eduard-benedic.github.io/react-portfolio/"],
          linksGithub: ["https://github.com/Eduard-Benedic/react-portfolio"],
          images: [img7]
        }
      ],
      featureBox: [
        {
          title: "Interactive",
          text: "I design dynamic and interactive webpages.",
          icon: "fas fa-space-shuttle"
        },
        {
          title: "Responsive ",
          text: "My websites are carefully crafted for every device",
          icon: "fas fa-mobile"
        },
        {
          title: "Fast",
          text: "Speed is a top priority",
          icon: "fas fa-bolt"
        },
        {
          title: "Modern",
          text: "I use the latest technologies and tools. ",
          icon: "fas fa-pen-fancy"
        }
      ],
      skills: [
        { percentage: 100, tool: "HTML" },
        { percentage: 90, tool: "CSS" },
        { percentage: 100, tool: "SASS" },
        { percentage: 90, tool: "BOOTSTRAP" },
        { percentage: 80, tool: "JAVASCRIPT" },
        { percentage: 75, tool: "REACT" }
      ]
    };
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
