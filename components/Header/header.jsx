import Link from "next/link";
import Image from "next/image";

import { Background } from "../HeaderBackground";
import Navlink from "./navlink/Navlink";

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
              <Navlink href="/meals">Browse Menu</Navlink>
            </li>
            <li>
              <Navlink href="/community">Foodies Community</Navlink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
