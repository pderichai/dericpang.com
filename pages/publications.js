import React from "react";

import Layout from "../components/layout";
import { readJsonData } from "../lib/data";

export async function getStaticProps() {
  // Read the publications JSON file.
  const publicationsData = await readJsonData("publications.json");

  return { props: { publicationsData } };
}

function PublicationsPage({ publicationsData }) {
  const publications = JSON.parse(publicationsData);

  return (
    <Layout title="Publications">
      <ul className="publications">
        {publications.map((publication) => (
          <li key={publication.title}>
            <a href={publication.pdf_link}>{publication.title}</a>
            <p>{publication.author}</p>
            <p>{publication.venue}</p>
            {publication.code_link && <a href={publication.code_link}>Code</a>}
            {publication.demo_link && <a href={publication.demo_link}>Demo</a>}
          </li>
        ))}
      </ul>
    </Layout>
  );
}

export default PublicationsPage;
