import React from "react";
import Link from "next/link";
import ListPost from "../../../../components/ListPost";
import { NEWS_TIPS } from "../../../../constant/index";
function NewsPost() {
  return (
    <section className="px-3 mt-10" id="website_post">
      <div>
        <h1 className="lg:text-7xl font-extrabold uppercase text-indigo-900 sm:text-6xl">
          News
        </h1>
        <p className="mt-7 text-xl max-w-xl">
          The latest updates from Jimdo including new features, community
          campaigns, and company news.
        </p>
        <Link href="/news">
          <a className="text-blue-500	underline">See more</a>
        </Link>
        <ListPost data={NEWS_TIPS} />
      </div>
    </section>
  );
}
export default NewsPost;
