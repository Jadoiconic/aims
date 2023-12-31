import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { CContainer, CHeader, CHeaderNav, CHeaderToggler } from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { cilMenu } from "@coreui/icons";

import { AppHeaderDropdown } from "./header/index";

const AppHeader = () => {
  const dispatch = useDispatch();
  const sidebarShow = useSelector((state) => state.sidebarShow);

  return (
    <CHeader position="sticky" className="mb-4 bg-dark" style={{backgroundColor:'#000'}}>
      <CContainer fluid>
        <CHeaderToggler
          className="ps-1 text-white"
          onClick={() => dispatch({ type: "set", sidebarShow: !sidebarShow })}
        >
          <CIcon icon={cilMenu} size="lg"className="text-white"/>
        </CHeaderToggler>
        <CHeaderNav className="d-none d-md-flex me-auto"></CHeaderNav>
        <CHeaderNav className="text-white">Jado</CHeaderNav>
        <CHeaderNav className="ms-3">
          <AppHeaderDropdown />
        </CHeaderNav>
      </CContainer>
    </CHeader>
  );
};

export default AppHeader;
