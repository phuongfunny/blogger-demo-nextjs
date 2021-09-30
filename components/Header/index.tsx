import React, { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/dist/client/router";

function Header() {
  const router = useRouter();
  const { pathname } = router;
  const [isShow, setIsShow] = useState(false);
  const menuList = [
    { title: "Recent Posts", link: "/post" },
    { title: "Website Tips", link: "/website" },
    { title: "Business Tips", link: "/business" },
    { title: "Inspiration", link: "/inspiration" },
    { title: "News", link: "/news" },
  ];
  const handleNavMb = () => {
    setIsShow(!isShow);
  };
  return (
    <>
      <header className="py-5">
        <div className="container mx-auto laptop:px-20 tablet:px-5 ipad:px-10">
          <div className="flex items-center justify-between h-10">
            <div className="-m-3 tablet:hidden laptop:block">
              <ul className="flex mx-0">
                {menuList?.map((item, index) => (
                  <li className="mr-7" key={index}>
                    <Link href={item.link}>
                      <a
                        className="p-3 font-semibold hover:text-blue-600"
                        style={
                          pathname === item.link
                            ? { color: "#2563eb" }
                            : { color: "black" }
                        }
                      >
                        {item.title}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div
              className="w-full tablet:block ipad:block laptop:hidden"
              onClick={handleNavMb}
            >
              {isShow ? (
                <FontAwesomeIcon icon={faTimes} size="lg" fixedWidth />
              ) : (
                <FontAwesomeIcon icon={faBars} size="lg" fixedWidth />
              )}
            </div>
            <div className="w-3">
              <FontAwesomeIcon icon={faSearch} size="lg" />
            </div>
          </div>
          {isShow && (
            <div className="">
              <ul className="flex flex-col mx-0">
                {menuList?.map((item, index) => (
                  <li className="mt-5" key={index}>
                    <Link href={item.link}>
                      <a
                        className="p-3 font-semibold hover:text-blue-600"
                        onClick={handleNavMb}
                        style={
                          pathname === item.link
                            ? { color: "#2563eb" }
                            : { color: "black" }
                        }
                      >
                        {item.title}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </header>
    </>
  );
}

export default Header;
