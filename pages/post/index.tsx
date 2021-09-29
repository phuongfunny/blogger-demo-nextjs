import React from "react";
import Banner from "./components/Banner";
import BusinessPost from "./components/Business";
import InspirationPost from "./components/InspirationPost";
import NewsPost from "./components/NewsPost";
import PostList from "./components/PostList";
import WebsitePost from "./components/WebsitePost";

function Post() {
  return (
    <>
      <div id="recent_post">
        <div className="container mx-auto px-20">
          <Banner />
          <PostList />
          <WebsitePost />
          <InspirationPost />
          <BusinessPost />
          <NewsPost />
        </div>
      </div>
    </>
  );
}

export default Post;
