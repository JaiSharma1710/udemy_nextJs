"use client";
import Link from "next/link";

import { usePathname } from "next/navigation";

import styles from "../header.module.css";

const Navlink = ({ href, children }) => {
  const path = usePathname();
  return (
    <Link
      href={href}
      className={path.startsWith(href) ? styles.active : undefined}
    >
      {children}
    </Link>
  );
};

export default Navlink;
