import React from "react";
import useSWR from "swr";
import Head from "next/head";

const fetcher = (url) => fetch(url).then((res) => res.json());

function ProjectsPage() {
  const { data, error, isLoading } = useSWR("/api/projects-data", fetcher);

  // Handle the error state.
  if (error) return <div>Failed to load projects data.</div>;
  // Handle the loading state.
  if (isLoading) return <div>Loading...</div>;

  const projects = JSON.parse(data);

  return (
    <>
      <Head>
        <title>Projects | Deric Pang</title>
      </Head>
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
    </>
  );
}

export default ProjectsPage;
