import React from "react";
import styles from "./sidebar.module.css";
import { GoHome } from "react-icons/go";
import { LuUsers2 } from "react-icons/lu";
import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdAttachMoney,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdHelpCenter,
  MdLogout,
} from "react-icons/md";
import MenuLink from "./menuLink/menuLink";
import Image from "next/image";

const menuItems = [
  {
    title: "Pages",
    list: [
      {
        title: "Home",
        path: "/home",
        icon: <GoHome />,
      },
      {
        title: "Users",
        path: "/dashboard/users",
        icon: <LuUsers2 />,
      },
      {
        title: "Communications",
        path: "/dashboard/products",
        icon: <MdShoppingBag />,
      },
      {
        title: "Manage Facilities",
        path: "/dashboard/transactions",
        icon: <MdAttachMoney />,
      },
      {
        title: "Reports",
        path: "/dashboard/transactions",
        icon: <MdAttachMoney />,
      },
      {
        title: "Activity Log",
        path: "/dashboard/transactions",
        icon: <MdAttachMoney />,
      },
      {
        title: "Audit trail",
        path: "/dashboard/transactions",
        icon: <MdAttachMoney />,
      },
    ],
  },
];

const Sidebar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <Image
          className={styles.userImage}
          src="/noavatar.png"
          width="50"
          height="50"
          alt=""
        />
        <div className={styles.userDetail}>
          <span className={styles.username}>jhon doe</span>
          <span className={styles.userTitle}>Administrator</span>
        </div>
      </div>
      <ul className={styles.list}>
        {menuItems.map((cat) => (
          <li key={cat.title}>
            {cat.list.map((item) => (
              <MenuLink item={item} />
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
