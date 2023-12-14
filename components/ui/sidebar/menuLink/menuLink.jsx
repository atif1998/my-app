"use client";

import Link from "next/link";
import styles from "./menuLink.module.css";
import { usePathname } from "next/navigation";

const MenuLink = ({ item }) => {
  console.log(item);
  const pathname = usePathname();

  return (
    <Link
      href={item.path}
      className={`${styles.container} ${
        pathname === item.path && styles.active
      }`}
    >
      {item.icon}
      <p
        style={{
          fontFamily: "'Montserrat', sans-serif",
          fontSize: "12px",
          fontWeight: 500,
          color: "white",
          lineHeight: "30px",
        }}
      >
        {item.title}
      </p>
    </Link>
  );
};

export default MenuLink;
