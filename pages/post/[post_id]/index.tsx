import React from "react";
import ListPost from "../../../components/ListPost";
import { BUSINESS_TIPS } from "../../../constant";
import BannerPost from "./components/Banner";

function PostDetail() {
  return (
    <div id="website_tips" className="w-full">
      <div className="container mx-auto laptop:w-2/3 laptop:px-20 tablet:px-5 ipad:px-28">
        <BannerPost />
      </div>
    </div>
  );
}

export default PostDetail;
