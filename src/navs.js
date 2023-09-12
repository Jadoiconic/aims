import React from "react";
import CIcon from "@coreui/icons-react";
import { cilBrowser, cilFile, cilSettings, cilUser } from "@coreui/icons";
import { CNavItem } from "@coreui/react";
import { useSelector } from "react-redux";


// const userRole = useSelector(state=>state)
const nav = [
  {
    component: CNavItem,
    name: "Dasboard",
    to: "/dashboard",
    icon: <CIcon icon={cilBrowser} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: "Dosiye",
    to: "/ibirego",
    icon: <CIcon icon={cilFile} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: "Abunzi",
    to: "/users",
    icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: "Settings",
    to: "/setting",
    icon: <CIcon icon={cilSettings} customClassName="nav-icon" />,
  },
];

// {
//   component: CNavGroup,
//   name: "Compaigns",
//   icon: <CIcon icon={cilApps} customClassName="nav-icon" />,
//   items: [
//     {
//       component: CNavItem,
//       role:"admin",
//       name: "Compaigns Main",
//       to: "/compaigns",
//     },
//     {
//       component: CNavItem,
//       role:"admin",
//       name: "HotKey",
//       to: "hotkey",
//     }
//   ],
// },

export default nav;
