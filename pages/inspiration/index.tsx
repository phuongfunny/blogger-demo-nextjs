import React from "react";
import ListPost from "../../components/ListPost";
import { INSPIRATION_TIPS } from "../../constant";

function Inspiration() {
  return (
    <div id="website_tips">
      <div className="container mx-auto px-20">
        <h1 className="lg:text-7xl font-extrabold uppercase text-indigo-900 sm:text-6xl">
          Inspiration
        </h1>
        <p className="mt-7 text-xl max-w-xl">
          The latest updates from Jimdo including new features, community
          campaigns, and company news.
        </p>
        <ListPost data={INSPIRATION_TIPS} />
        <div className="flex justify-center	">
          <button className="mt-10 bg-blue-600 text-white font-semibold p-2 w-52">
            Load More
          </button>
        </div>
      </div>
    </div>
  );
}

export default Inspiration;
