import React from "react";
import Image from "next/image";
import Style from "./style.module.scss";
import Link from "next/link";

interface PropData {
  data: any;
}
function ListPost({ data }: PropData) {
  return (
    <div className={`flex flex-wrap ${Style.post_box}`}>
      {data.map((item: any, index: number) => (
        <Link href="/post/[id]" as={`/post/${item.id}`} key={index}>
          <div
            key={index}
            className={`flex flex-wrap mt-10 border-2 border-black laptop:ml-4 laptop:max-w-1/3 2xl:max-w-2/3 2xl:ml-2 tablet:w-full tablet:max-w-full ${Style.post_box__detail}`}
          >
            <div className={Style.box_image}>
              <Image
                src={item.imageUrl}
                width={360}
                height={180}
                alt="Posts"
                className="image__block"
              />
            </div>
            <div className="p-8" style={{ height: "200px" }}>
              <h4 className="text-lg text-gray-500 uppercase ">{item.type}</h4>
              <h2 className="mt-5 text-xl font-bold">{item.title}</h2>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default ListPost;
