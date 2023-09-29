import React from "react";
import { CFooter } from "@coreui/react";

const AppFooter = () => {
  return (
    <CFooter>
      <div>
        <span className="ms-1">
          &copy;Copyright Jado. All Rights Reserved -{" "}
          {new Date().getFullYear()}
        </span>
      </div>
      <div className="ms-auto">
        <span className="me-1">Powered by</span>
        <a href="https://fidalix.com" target="_blank" rel="noopener noreferrer">
          CodeWithJado
        </a>
      </div>
    </CFooter>
  );
};

export default React.memo(AppFooter);
