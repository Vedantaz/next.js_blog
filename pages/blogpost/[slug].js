import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import styles from '../../styles/BlogPost.module.css'
import * as fs from 'fs';

// Step 1: Find the file corresponding to the slug
// Step 2: Populate them inside the page

const slug = (props) => {

  const [blog, setBlog] = useState(props.myBlog);
  function createMarkup(c) {
    return { __html: c };
  }

  return <div className={styles.container}>
    <main className={styles.main}>
      <h1>{blog && blog.title}</h1>
      <hr />
      {blog && <div dangerouslySetInnerHTML={createMarkup(blog.content)}></div>}

    </main>
  </div>;
};

export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug: 'how-to' } },
      { params: { slug: 'how-to-learn-JavaScript' } },
      { params: { slug: 'how-to-learn-Reactjs' } },
      { params: { slug: 'how-to-learn-Next_js' } },
    ],
    fallback: true // false or blocking
  };
}

export async function getStaticProps(context) {
  const { slug } = context.params;
  let myBlog = await fs.promises.readFile(`blogdata/${slug}.json`, 'utf-8');

  return {
    props: { myBlog: JSON.parse(myBlog) }, // will be passed to the page component as props
  }
}

export default slug;
