import React from "react";
import Link from "next/link";
import ListPost from "../../../../components/ListPost";
import { INSPIRATION_TIPS } from "../../../../constant/index";
function InspirationPost() {
  return (
    <section className="px-3 mt-10" id="website_post">
      <div>
        <h1 className="lg:text-7xl font-extrabold uppercase text-indigo-900 sm:text-6xl">
          Inspiration
        </h1>
        <p className="mt-7 text-xl max-w-xl">
          Real companies, real stories. Get fresh ideas from Jimdo users already
          making their mark.
        </p>
        <Link href="/inspiration">
          <a className="text-blue-500	underline">See more</a>
        </Link>
        <ListPost data={INSPIRATION_TIPS} />
      </div>
    </section>
  );
}
export default InspirationPost;
