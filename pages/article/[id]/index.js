/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from "next/router";
import Link from "next/link";

const article = ({ article }) => {
  // const router = useRouter()
  // const {id} = router.query and it shows you which article number it is also would need This is an article {id} in the div
  return <>
  <h1>{article.title}</h1>
  <p>{article.body}</p>
  <br />
  <Link href='/'>Go Back</Link>
  </>;
};

// getServerSideProps which will fetch on request...context allows to get the id from the url
export const getServerSideProps = async (context) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
  );

  const article = await res.json();

  return {
    props: {
      article,
    },
  };
};
export default article;
