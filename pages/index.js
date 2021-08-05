/* eslint-disable react/jsx-key */
import Head from "next/head";
import ArticleList from "../components/ArticleList";
import { server } from '../config' 

export default function Home({ articles }) {
  // console.log(articles)
  return (
    <div>
      <Head>
        <title>Carrye On</title>
        <meta name="keywords" content="blog, technical writing" />
      </Head>
      <ArticleList articles={articles}/>
    </div>
  );
}

export const getStaticProps = async (context) => {
  const res = await fetch(`${server}/api/articles`);

  const articles = await res.json();

  return {
    props: {
      articles,
    },
  };
};
