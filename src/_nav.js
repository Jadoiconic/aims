import React from "react";
import CIcon from "@coreui/icons-react";
import {
  cilApps,
  cilFilter,
  cilGroup,
  cilList,
  cilMap,
  cilPhone,
  cilSettings,
  cilSpeedometer,
  cilStorage,
  cilUser,
} from "@coreui/icons";
import { CNavGroup, CNavItem } from "@coreui/react";

const _nav = [
  {
    component: CNavItem,
    name: "Dasboard",
    to: "/dashboard",
    icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: "Users",
    to: "/users",
    icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: "Settings",
    to: "/setting",
    icon: <CIcon icon={cilSettings} customClassName="nav-icon" />,
  },
  // {
  //   component: CNavGroup,
  //   name: "Compaigns",
  //   icon: <CIcon icon={cilApps} customClassName="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: "Compaigns Main",
  //       to: "/compaigns",
  //     },
  //     {
  //       component: CNavItem,
  //       name: "HotKey",
  //       to: "hotkey",
  //     }
  //   ],
  // },
  
];

export default _nav;
