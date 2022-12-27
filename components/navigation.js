import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

// The page navigation component. For any new pages on the website, add a new
// entry in `MENU_LINKS`.
function Navigation() {
  const MENU_LINKS = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Publications",
      link: "/publications",
    },
    {
      name: "Projects",
      link: "/projects",
    },
    {
      name: "Blog",
      link: "/blog",
    },
  ];

  const router = useRouter();

  return (
    <nav>
      <ul>
        {MENU_LINKS.map((link) => (
          <li key={link.name}>
            <Link
              href={link.link}
              className={router.pathname == link.link ? "active" : ""}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
