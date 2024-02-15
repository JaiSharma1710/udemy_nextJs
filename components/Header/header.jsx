import Link from "next/link";
import Image from "next/image";

import { Background } from "../HeaderBackground";

import Logo from "@/assets/logo.png";

import styles from "./header.module.css";

const Header = () => {
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
              <Link href="">Browse Menu</Link>
            </li>
            <li>
              <Link href="#">Foodies Community</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
