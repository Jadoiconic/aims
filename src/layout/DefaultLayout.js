import React from "react";
import {
  AppSidebar,
  AppFooter,
  AppHeader,
} from "../components/index";

const DefaultLayout = ({children}) => {
  return (
    <div>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <AppHeader />
        <div className="body flex-grow-1 px-3">
          {children}
        </div>
        <AppFooter />
      </div>
    </div>
  );
};

export default DefaultLayout;
