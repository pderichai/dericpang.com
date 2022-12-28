import path from "path";
import Image from "next/image";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeImgSize from "rehype-img-size";
import rehypeKatex from "rehype-katex";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";

import Layout from "../../components/layout";
import Date from "../../components/date";
import { getAllPostIds, getPostData } from "../../lib/posts";

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
      remarkPlugins: [remarkGfm, remarkMath],
      rehypePlugins: [[rehypeImgSize, { dir: "public" }], rehypeKatex],
      development: false,
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
const MyA = (props) => (
  <a className="post" {...props}>
    {props.children}
  </a>
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
  <Image className="post" alt="" {...props}>
    {props.children}
  </Image>
);

const components = {
  h1: MyH1,
  h2: MyH2,
  p: MyP,
  a: MyA,
  code: MyCode,
  pre: MyPre,
  ol: MyOl,
  ul: MyUl,
  img: MyImg,
};

export default function Post({ mdxSource, ...postData }) {
  return (
    <Layout title={postData.title} description={postData.description}>
      <h2 className="post-title">{postData.title}</h2>
      <p className="post-date">
        <Date dateString={postData.date} />
      </p>
      {postData.lastUpdated && (
        <p className="last-updated-date">
          Last updated on <Date dateString={postData.lastUpdated} />
        </p>
      )}
      {postData.featuredImage && (
        <div className="post-featured-image">
          <Image
            src={featuredImage}
            alt={postData.featuredImageAltText}
            className="post-featured-image-img"
            priority
          />
        </div>
      )}
      <MDXRemote {...mdxSource} components={components} />
    </Layout>
  );
}
