import React from 'react';
import Link from 'next/link';
import { getSortedPostsData } from '../lib/posts';
import Head from 'next/head';
import Date from '../components/date';

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
    <>
      <Head>
        <title>Blog | Deric Pang</title>
      </Head>
    <ul className='publications'>
      {allPostsData.map(postData => (
        <li key={postData.title}>
          <Link href={'/blog/' + postData.postName}>{postData.title}</Link>
          <p><Date dateString={postData.date} /></p>
        </li>
      ))}
    </ul>
    </>
  );
}

export default Blog;
