import "../styles/components/TechnologiesContainer.sass";
import { SiSpring } from "react-icons/si";

import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiJava,
  DiMysql,
  DiReact,
} from "react-icons/di";

const technologies = [
  { id: "Spring-Boot", name: "Spring-Boot", icon: <SiSpring /> },
  { id: "java", name: "java", icon: <DiJava /> },
  { id: "js", name: "JavaScript", icon: <DiJsBadge /> },
  { id: "react", name: "React", icon: <DiReact /> },
  { id: "html", name: "HTML5", icon: <DiHtml5 /> },
  { id: "css", name: "CSS3", icon: <DiCss3 /> },

  { id: "mysql", name: "MySQL", icon: <DiMysql /> },
];
const TechnologiesContainer = () => {
  return (
    <section className="technologies-container">
      <h2>Tecnologias</h2>
      <div className="technologies-grid">
        {technologies.map((tech) => (
          <div className="technology-card" id={tech.id} key={tech.id}>
            {tech.icon}
            <div className="tecnology-info">
              <h3>{tech.name}</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed
                risus ultricies tristique nulla. Orci eu lobortis elementum nibh{" "}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnologiesContainer;
