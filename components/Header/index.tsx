import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/dist/client/router";

function Header() {
  const router = useRouter();
  const { pathname } = router;
  const menuList = [
    { title: "Recent Posts", link: "/post" },
    { title: "Website Tips", link: "/website" },
    { title: "Business Tips", link: "/business" },
    { title: "Inspiration", link: "/inspiration" },
    { title: "News", link: "/news" },
  ];

  return (
    <>
      <header className="py-5">
        <div className="container mx-auto px-20">
          <div className="flex justify-between items-center h-10">
            <div className="">
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
            <div className="w-3">
              <FontAwesomeIcon icon={faSearch} size="lg" />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
