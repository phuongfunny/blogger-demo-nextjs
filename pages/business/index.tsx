import React from "react";
import ListPost from "../../components/ListPost";
import { BUSINESS_TIPS } from "../../constant";

function Business() {
  return (
    <div id="website_tips">
      <div className="container mx-auto px-20">
        <h1 className="lg:text-7xl font-extrabold uppercase text-indigo-900 sm:text-6xl">
          Business
        </h1>
        <p className="mt-7 text-xl max-w-xl">
          The latest updates from Jimdo including new features, community
          campaigns, and company news.
        </p>
        <ListPost data={BUSINESS_TIPS} />
      </div>
    </div>
  );
}

export default Business;
