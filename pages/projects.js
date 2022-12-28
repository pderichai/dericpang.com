import React from "react";

import Layout from "../components/layout";
import { readJsonData } from "../lib/data";

export async function getStaticProps() {
  // Read the projects JSON file.
  const projectsData = await readJsonData("projects.json");

  return { props: { projectsData } };
}

function ProjectsPage({ projectsData }) {
  const projects = JSON.parse(projectsData);

  return (
    <Layout title="Projects">
      <ul className="projects">
        {projects.map((project) => (
          <li key={project.name}>
            {project.demo_link ? (
              <a href={project.demo_link}>{project.name}</a>
            ) : (
              <p>{project.name}</p>
            )}
            <p>{project.description}</p>
            {project.paper_pdf_link && (
              <a href={project.paper_pdf_link}>Paper</a>
            )}
            {project.slides_pdf_link && (
              <a href={project.slides_pdf_link}>Slides</a>
            )}
            {project.code_link && <a href={project.code_link}>Code</a>}
          </li>
        ))}
      </ul>
    </Layout>
  );
}

export default ProjectsPage;
