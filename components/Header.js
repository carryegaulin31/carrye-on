import React from "react";
import headerStyles from "../styles/Header.module.css";

const Header = () => {
// const x = 7 for conditional styling jsx in style tag use "title" as className in the h1
  return (
    <div>
      <h1 className={headerStyles.title}>
        <span>Blog</span>Technical Writing
      </h1>
      <p className={headerStyles.description}>Keep up to date with all my ramblings personal and technical</p>
      {/* <style jsx>
        {`
          .title {
            color: ${x > 3 ? 'red' : 'blue'};
          }
        `}
      </style> */}
    </div>
  );
};

export default Header;
