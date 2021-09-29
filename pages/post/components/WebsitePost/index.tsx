import React from "react";
import ListPost from "../../../../components/ListPost";
import { WEBSITE_TIPS } from "../../../../constant/index";
import Link from "next/link";

function WebsitePost() {
  return (
    <section className="px-3 mt-10" id="website_post">
      <div>
        <h1 className="lg:text-7xl font-extrabold uppercase text-indigo-900 sm:text-6xl">
          WEBSITE TIPS
        </h1>
        <p className="mt-7 text-xl max-w-xl">
          From design tips to content ideas to SEO—everything you need to know
          about your online presence.
        </p>
        <Link href="/website">
          <a className="text-blue-500	underline">See more</a>
        </Link>
        <ListPost data={WEBSITE_TIPS} />
      </div>
    </section>
  );
}

export default WebsitePost;
