import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'blog');

export function getSortedPostsData() {
  // Get directory names under /posts.
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    const postName = fileName.replace(/\.mdx$/, '');
    // Read markdown file as string.
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section.
    const frontMatter = JSON.parse(JSON.stringify(matter(fileContents).data));

    // Combine the data with the id.
    return {
      postName,
      ...frontMatter,
    };
  });
  // Sort posts by date
  return JSON.stringify(allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  }));
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);

  // Returns an array that looks like this:
  // [
  //   {
  //     params: {
  //       id: 'ssg-ssr'
  //     }
  //   },
  //   {
  //     params: {
  //       id: 'pre-rendering'
  //     }
  //   }
  // ]
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.mdx$/, ''),
      },
    };
  });
}

export function getPostData(postName) {
  const fullPath = path.join(postsDirectory, `${postName}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section.
  const matterResult = matter(fileContents);
  const frontMatter = JSON.parse(JSON.stringify(matterResult.data));
  const postContent = matterResult.content;

  // Combine the data with the post name.
  return {
    postName,
    ...frontMatter,
    postContent
  };
}
