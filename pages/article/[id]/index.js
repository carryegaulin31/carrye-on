/* eslint-disable react-hooks/rules-of-hooks */
import { server } from "../../../config";
import Link from "next/link";
import { useRouter } from "next/router";
import Meta from '../../../components/Meta'

const article = ({ article }) => {
  // const router = useRouter()
  // const {id} = router.query and it shows you which article number it is also would need This is an article {id} in the div
  return <>
  <Meta title={article.title} description={article.id} />
  <h1>{article.title}</h1>
  <p>{article.body}</p>
  <br />
  <Link href='/'>Go Back</Link>
  </>;
};

export const getStaticProps = async (context) => {
      const res = await fetch(
        `${server}/api/articles/${context.params.id}`
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
            `${server}/api/articles`
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



// NOW WE TRY WITH MINI API THAT IS WHY THIS IS COMMENTED OUT BEFORE THIS WAS A PUBLIC API




















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
