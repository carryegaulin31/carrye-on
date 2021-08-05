import Head from "next/head";

export default function Home({ articles }) {
console.log(articles)
  return (
    <div>
      <Head>
        <title>Carrye On</title>
        <meta name="keywords" content="blog, technical writing" />
      </Head>
      <h1>Welcome to my Blog</h1>
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
