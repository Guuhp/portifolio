import { useEffect, useState } from "react";
import "../styles/components/ProjectsContainer.sass";

const ProjectsContainer = () => {
  return (
    <section className="projects-container">
      <h2>Projetos</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Sed risus ultricies
        tristique nulla. Orci eu lobortis elementum nibh tellus molestie nunc
        non blandit. Elementum sagittis vitae et leo duis. Cras fermentum odio
        eu feugiat pretium nibh. Amet consectetur
      </p>
      <a href="https://github.com/Guuhp" className="btn">
        Ver Projetos
      </a>
    </section>
  );
};

export default ProjectsContainer;
