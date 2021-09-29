import React from "react";
import Image from "next/image";
import Style from "./style.module.scss";

interface PropData {
  data: any;
}
function ListPost({ data }: PropData) {
  return (
    <div className="flex flex-wrap" style={{ margin: "20px -17px 0px -16px" }}>
      {data.map((item: any, index: number) => (
        <div
          key={index}
          className="flex flex-wrap	 border-2 border-black mt-10 max-w-1/3 ml-4 mr-2 2xl:max-w-2/3 2xl:ml-2"
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
            <h2 className="text-xl	font-bold mt-5">{item.title}</h2>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ListPost;
