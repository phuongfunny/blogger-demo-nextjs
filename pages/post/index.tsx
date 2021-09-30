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
      <div id="recent_post" className="w-full">
        <div className="container mx-auto desktop:px-20 tablet:px-1 ipad:px-10">
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
