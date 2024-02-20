'use client'
import Link from "next/link";
import Image from "next/image";

import { Background } from "../HeaderBackground";

import Logo from "@/assets/logo.png";

import styles from "./header.module.css";
import { usePathname } from "next/navigation";

const Header = () => {
  const path = usePathname();

  console.log(path)

  return (
    <>
      <Background />
      <header className={styles.header}>
        <Link className={styles.logo} href="/">
          <Image src={Logo} alt="logo" priority />
          Nextlevel Food
        </Link>
        <nav className={styles.nav}>
          <ul>
            <li>
              <Link
                href="/meals"
                className={path.startsWith("/meals") ? styles.active : undefined}
              >
                Browse Menu
              </Link>
            </li>
            <li>
              <Link
                href="/community"
                className={path.startsWith("/community") ? styles.active : undefined}
              >
                Foodies Community
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
