import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function Nested() {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="inbox">Inbox</NavLink>
        </li>
        <li>
          <NavLink to="outbox">Outbox</NavLink>
        </li>
      </ul>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
