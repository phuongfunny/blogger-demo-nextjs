import React from "react";
import ListPost from "../../components/ListPost";
import { INSPIRATION_TIPS } from "../../constant";

function Inspiration() {
  return (
    <div id="website_tips" className="w-full">
      <div className="container mx-auto desktop:px-20 tablet:px-5 ipad:px-10">
        <h1 className="font-extrabold text-indigo-900 uppercase lg:text-7xl sm:text-6xl">
          Inspiration
        </h1>
        <p className="max-w-xl text-xl mt-7">
          The latest updates from Jimdo including new features, community
          campaigns, and company news.
        </p>
        <ListPost data={INSPIRATION_TIPS} />
        <div className="flex justify-center ">
          <button className="p-2 mt-10 font-semibold text-white bg-blue-600 w-52">
            Load More
          </button>
        </div>
      </div>
    </div>
  );
}

export default Inspiration;
