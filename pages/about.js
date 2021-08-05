// import Head from "next/head";
import Meta from '../components/Meta'
const about = () => {
  return (
    <div>
    <Meta title='About' />
      {/* <-----This can go because of Meta component */}
      <h1>Welcome to me</h1>
    </div>
  );
};

export default about;
