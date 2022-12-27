import { getAllPostIds, getPostData } from '../../lib/posts';
import path from 'path';
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import Image from 'next/image'
import rehypeImgSize from 'rehype-img-size';
import Head from 'next/head';
import Date from '../../components/date';

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { postContent, ...postData } = getPostData(params.id);
  const mdxSource = await serialize(postContent, {
    mdxOptions: {
      rehypePlugins: [[rehypeImgSize, { dir: 'public' }]],
    },
  });
  return { props: { mdxSource, ...postData } };
}

const MyH1 = (props) => (
  <h3 className="post" {...props}>
    {props.children}
  </h3>
);
const MyH2 = (props) => (
  <h4 className="post" {...props}>
    {props.children}
  </h4>
);
const MyP = (props) => (
  <p className="post" {...props}>
    {props.children}
  </p>
);
const MyCode = (props) => (
  <code className="post" {...props}>
    {props.children}
  </code>
);
const MyPre = (props) => (
  <pre className="post" {...props}>
    {props.children}
  </pre>
);
const MyOl = (props) => (
  <ol className="post" {...props}>
    {props.children}
  </ol>
);
const MyUl = (props) => (
  <ul className="post" {...props}>
    {props.children}
  </ul>
);
const MyImg = (props) => (
  <Image className='post' alt='' {...props}>
    {props.children}
  </Image>
);

const components = {
  h1: MyH1,
  h2: MyH2,
  p: MyP,
  code: MyCode,
  pre: MyPre,
  ol: MyOl,
  ul: MyUl,
  img: MyImg,
};

export default function Post({ mdxSource, ...postData }) {
  return (
    <>
    <Head>
      <title>{postData.title} | Deric Pang</title>
    </Head>
    <h2 className='post-title'>{postData.title}</h2>
      <p className='post-date'><Date dateString={postData.date} /></p>
    {postData.lastUpdated && (
      <p className='last-updated-date'>
        Last updated on <Date dateString={postData.lastUpdated} />
      </p>
    )}
    {postData.featuredImage && (
      <div className='post-featured-image'>
        <Image
          src={featuredImage}
          alt={postData.featuredImageAltText}
          className='post-featured-image-img'
          priority
        />
      </div>
    )}
    <MDXRemote {...mdxSource} components={components} />
    </>
  );
}
