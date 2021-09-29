import React from "react";
import { POST_LIST } from "../../../../constant/index";
import Image from "next/image";
import Style from "./style.module.scss";
import ListPost from "../../../../components/ListPost";

function PostList() {
  return (
    <section className="px-3 mt-10">
      <div className="">
        {POST_LIST.map(
          (item, index) =>
            index === 0 && (
              <div key={index} className="flex border-2 border-black">
                <div className={Style.box_image}>
                  <Image
                    src={item.imageUrl}
                    width={800}
                    height={500}
                    alt="Posts"
                    className="image__block"
                  />
                </div>
                <div className="p-10">
                  <h4 className="text-xl text-gray-500 uppercase ">
                    {item.type}
                  </h4>
                  <h2 className="text-2xl	font-bold mt-5">{item.title}</h2>
                </div>
              </div>
            )
        )}
        <ListPost data={POST_LIST} />
      </div>
    </section>
  );
}

export default PostList;
