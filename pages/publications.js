import React from "react";
import useSWR from "swr";
import Head from "next/head";

const fetcher = (url) => fetch(url).then((res) => res.json());

function PublicationsPage() {
  const { data, error, isLoading } = useSWR("/api/publications-data", fetcher);

  // Handle the error state.
  if (error) return <div>Failed to load publications data.</div>;
  // Handle the loading state.
  if (isLoading) return <div>Loading...</div>;

  const publications = JSON.parse(data);

  return (
    <>
      <Head>
        <title>Publications | Deric Pang</title>
      </Head>
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
    </>
  );
}

export default PublicationsPage;
