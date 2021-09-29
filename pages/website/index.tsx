import React from "react";
import ListPost from "../../components/ListPost";
import { WEBSITE_TIPS } from "../../constant";

function Website() {
  return (
    <div id="website_tips">
      <div className="container mx-auto px-20">
        <h1 className="lg:text-7xl font-extrabold uppercase text-indigo-900 sm:text-6xl">
          Website Tips
        </h1>
        <p className="mt-7 text-xl max-w-xl">
          The latest updates from Jimdo including new features, community
          campaigns, and company news.
        </p>
        <ListPost data={WEBSITE_TIPS} />
      </div>
    </div>
  );
}

export default Website;
