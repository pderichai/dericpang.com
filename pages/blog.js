import React from "react";
import Link from "next/link";

import Layout from "../components/layout";
import Date from "../components/date";
import { getSortedPostsData } from "../lib/posts";

export async function getStaticProps() {
  const allPostsDataString = getSortedPostsData();
  return {
    props: {
      allPostsDataString,
    },
  };
}

function Blog({ allPostsDataString }) {
  function parseDateString(dateString) {
    const date = new Date(dateString);
    return date.toDateString();
  }

  const allPostsData = JSON.parse(allPostsDataString);

  return (
    <Layout title="Blog">
      <ul className="publications">
        {allPostsData.map((postData) => (
          <li key={postData.title}>
            <Link href={"/blog/" + postData.postName}>{postData.title}</Link>
            <p>
              <Date dateString={postData.date} />
            </p>
          </li>
        ))}
      </ul>
    </Layout>
  );
}

export default Blog;
