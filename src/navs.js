import React, { useState } from "react";
import CIcon from "@coreui/icons-react";
import { cilBrowser, cilFile, cilGroup, cilSettings, cilUser } from "@coreui/icons";
import { CNavItem } from "@coreui/react";

//! user roles 
/*
  - Amdin
  - Super user
  - General user
 */
const nav = [
  {
    component: CNavItem,
    name: "Dasboard",
    to: "/dashboard",
    role:"admin",
    icon: <CIcon icon={cilBrowser} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: "Dosiye",
    to: "/ibirego",
    role:"admin",
    icon: <CIcon icon={cilFile} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: "Users",
    to: "/users",
    role:"admin",
    icon: <CIcon icon={cilGroup} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: "Settings",
    to: "/setting",
    role:"admin",
    icon: <CIcon icon={cilSettings} customClassName="nav-icon" />,
  },

  // client navs
  {
    component: CNavItem,
    name: "Ahabanza",
    to: "/home",
    role:"user",
    icon: <CIcon icon={cilFile} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: "Dosiye Zanjye",
    to: "/dosiye001",
    role:"user",
    icon: <CIcon icon={cilFile} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: "Settings",
    to: "/usetting",
    role:"user",
    icon: <CIcon icon={cilSettings} customClassName="nav-icon" />,
  },

//  supper Amdin

{
  component: CNavItem,
  name: "Ahabanza",
  to: "/welcome",
  role:"superAdmin",
  icon: <CIcon icon={cilBrowser} customClassName="nav-icon" />,
},
{
  component: CNavItem,
  name: "Users",
  to: "/manage-users",
  role:"superAdmin",
  icon: <CIcon icon={cilGroup} customClassName="nav-icon" />,
},
{
  component: CNavItem,
  name: "Settings",
  to: "/my-setting",
  role:"superAdmin",
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
