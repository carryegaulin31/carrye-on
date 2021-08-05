/* eslint-disable react/jsx-key */
import Head from "next/head";
import ArticleList from "../components/ArticleList";

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

export const getStaticProps = async () => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=6`
  );
  const articles = await res.json();

  return {
    props: {
      articles,
    },
  };
};
