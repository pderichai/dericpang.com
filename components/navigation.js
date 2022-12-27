import Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/router';

function Navigation() {

  const MENU_LINKS = 
    [
      {
        name: 'Home',
        link: '/',
      },
      {
        name: 'Publications',
        link: '/publications',
      },
      {
        name: 'Projects',
        link: '/projects',
      },
      {
        name: 'Blog',
        link: '/blog',
      },
    ];

  const router = useRouter();

  return (
    <nav>
      <ul>
        {MENU_LINKS.map((link) => (
          <li key={link.name}>
            <Link href={link.link} className={router.pathname == link.link ? "active" : ""}>
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
