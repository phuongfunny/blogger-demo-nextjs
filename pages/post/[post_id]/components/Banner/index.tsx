import { faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faMailBulk, faPrint } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { default as dayjs } from "dayjs";
import Image from "next/dist/client/image";
import React, { useEffect, useState } from "react";
import { DETAIL_POST } from "../../../../../constant";
import Style from "./style.module.scss";

function BannerPost() {
  const [isFixed, setIsFixed] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const positionContent = document.querySelector(
        "#content_post"
      ) as HTMLElement;
      if (window.scrollY > positionContent?.offsetTop) {
        return setIsFixed(true);
      } else {
        return setIsFixed(false);
      }
    });
  });

  return (
    <section className="mt-10 ">
      {DETAIL_POST?.map((item, index) => (
        <div className="" key={index}>
          <h1 className="font-medium text-indigo-900 laptop:text-5xl sm:text-4xl max-w-3/4">
            {item.title}
          </h1>
          <div className="mt-5">
            <ul className="flex font-medium text-gray-500 ">
              <li className="mr-5 uppercase tablet:text-sm laptop:text-base ">
                {item.type}
              </li>
              <li className="mr-5 uppercase tablet:text-sm laptop:text-base">
                {dayjs(item.date).format("MMMM DD, YYYY")}
              </li>
              <li className="uppercase tablet:text-sm laptop:text-base">
                {item.time} min read
              </li>
            </ul>
          </div>
          <div className="mt-5">
            <Image
              src={item.imageUrl}
              width={714}
              height={402}
              alt={item.title}
            />
          </div>
          <div className="relative mt-5" id="content_post">
            <p>{item.content}</p>
            <p>{item.content}</p>
            <p>{item.content}</p>
            <p>{item.content}</p>
            <p>{item.content}</p>
            <p>{item.content}</p>
            <div
              className={`absolute top-0 pr-5 tablet:hidden ipad:block ${Style.icon_link}`}
            >
              <ul className={isFixed ? "fixed top-10" : ""}>
                <li
                  onClick={() =>
                    window.location.replace("https://www.facebook.com/")
                  }
                >
                  <FontAwesomeIcon
                    icon={faFacebook}
                    size="2x"
                    className="text-gray-500 hover:text-blue-600 "
                  />
                </li>
                <li
                  className="mt-5"
                  onClick={() =>
                    window.location.replace("https://www.twitter.com")
                  }
                >
                  <FontAwesomeIcon
                    icon={faTwitter}
                    size="2x"
                    className="text-gray-500 hover:text-blue-600"
                  />
                </li>
                <li
                  className="mt-5"
                  onClick={() =>
                    window.location.replace("https://www.gmail.com")
                  }
                >
                  <FontAwesomeIcon
                    icon={faMailBulk}
                    size="2x"
                    className="text-gray-500 hover:text-blue-600"
                  />
                </li>
                <li className="mt-5" onClick={() => window.print()}>
                  <FontAwesomeIcon
                    icon={faPrint}
                    size="2x"
                    className="text-gray-500 hover:text-blue-600 "
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default BannerPost;
