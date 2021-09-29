import React from "react";

function Banner() {
  return (
    <section className="px-3 mt-4">
      <div className="">
        <h1 className="lg:text-7xl font-extrabold uppercase text-indigo-900 sm:text-6xl">
          The Jimdo blog
          <br /> <span className="text-blue-900">for small businesses</span>
        </h1>
        <p className="mt-7 text-xl max-w-xl">
          Get advice about self-employment, starting a business, website tips,
          web design, online stores, SEO, marketing, and more.
        </p>
      </div>
    </section>
  );
}
export default Banner;
