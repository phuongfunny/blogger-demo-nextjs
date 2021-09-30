import React from "react";
import ListPost from "../../components/ListPost";
import { WEBSITE_TIPS } from "../../constant";

function Website() {
  return (
    <div id="website_tips" className="w-full">
      <div className="mx-auto laptop:container laptop:px-20 tablet:px-5 ipad:px-10">
        <h1 className="font-extrabold text-indigo-900 uppercase lg:text-7xl sm:text-6xl">
          Website Tips
        </h1>
        <p className="max-w-xl text-xl mt-7">
          The latest updates from Jimdo including new features, community
          campaigns, and company news.
        </p>
        <ListPost data={WEBSITE_TIPS} />
        <div className="flex justify-center ">
          <button className="p-2 mt-10 font-semibold text-white bg-blue-600 w-52">
            Load More
          </button>
        </div>
      </div>
    </div>
  );
}

export default Website;
