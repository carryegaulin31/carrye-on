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

export const getStaticProps = async (context) => {
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
    
    export const getStaticPaths = async () => {
        const res = await fetch(
            `https://jsonplaceholder.typicode.com/posts`
          );
        
          const articles = await res.json();
          
          const ids = articles.map(article => article.id)
          const paths = ids.map(id => ({params: {id: id.toString()}})) // This will essentially create THIS paths: {params: {id: '1', id: '2'}}
          return {
          paths, 
          fallback: false
          }
    }
    
    
    
    export default article;























// getServerSideProps which will fetch on request...context allows to get the id from the url
// export const getServerSideProps = async (context) => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
//   );

//   const article = await res.json();

//   return {
//     props: {
//       article,
//     },
//   };
// };
// export default article;
