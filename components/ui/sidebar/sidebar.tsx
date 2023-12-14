import React from "react";
import styles from "./sidebar.module.css";
import { GoHome } from "react-icons/go";
import { LuUsers2 } from "react-icons/lu";
import { TbReportSearch } from "react-icons/tb";
import { TiMessages } from "react-icons/ti";
import { RxActivityLog } from "react-icons/rx";
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
import Home from "@/app/assests/svgs/Home";
import Reports from "@/app/assests/svgs/Reports";
import Audit from "@/app/assests/svgs/Audit";
import Active from "@/app/assests/svgs/Activity";
import Facility from "@/app/assests/svgs/Facility";
import Message from "@/app/assests/svgs/Message";
import User from "@/app/assests/svgs/User";

const menuItems = [
  {
    title: "Pages",
    list: [
      {
        title: "Home",
        path: "/home",
        icon: <Home />,
      },
      {
        title: "Users",
        path: "/dashboard/users",
        icon: <User />,
      },
      {
        title: "Communications",
        path: "/dashboard/products",
        icon: <Message />,
      },
      {
        title: "Manage Facilities",
        path: "/dashboard/transactions",
        icon: <Facility />,
      },
      {
        title: "Reports",
        path: "/dashboard/transactions",
        icon: <Reports />,
      },
      {
        title: "Activity Log",
        path: "/dashboard/transactions",
        icon: <Active />,
      },
      {
        title: "Audit trail",
        path: "/dashboard/transactions",
        icon: <Audit />,
      },
    ],
  },
];

const Sidebar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <div
          style={{
            height: 36,
            width: 36,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "50%",
            backgroundColor: "rgba(255, 255, 255, 0.15)",
          }}
        >
          <Facility />
        </div>
        <p
          style={{
            fontFamily: "Montserrat, sans-serif",
            fontSize: "14px",
            fontWeight: "bold",
            color: "white",
            lineHeight: "17px",
          }}
        >
          Admin Panel
        </p>
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
