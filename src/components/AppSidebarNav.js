import React, { useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { supabase } from "src/client";
import userRef from "src/utility/constants";

export const AppSidebarNav = ({ items }) => {
  
  const location = useLocation();
  const navLink = (name, icon) => {
    return (
      <>
        {icon && icon}
        {name && name}
      </>
    );
  };

  const navItem = (item, index) => {
    const { component, name, icon, role, ...rest } = item;
    const [userRole, setUserRole] = React.useState(null);
    const [loading, setLoading] = React.useState(false);
    useEffect(()=>{
     try {
      setLoading(true)
      const getUserData = async () => {
        const {data:{user}} = await supabase.auth.getUser()
        const currentUser = userRef.filter(users=> users.id === user.id)
        setUserRole(currentUser[0].role)
      }
      getUserData()
     } catch (error) {
      
     }finally{
      setLoading(false)
     }
    },[userRole])

    const Component = component;
    
    if (role === userRole && !loading) {
      return (
        <Component
          {...(rest.to &&
            !rest.items && {
              component: NavLink,
            })}
          key={index}
          {...rest}
        >
          {navLink(name, icon)}
        </Component>
      );
    }
  };

  const navGroup = (item, index) => {
    const { component, name, icon, to, ...rest } = item;
    const Component = component;
    return (
      <Component
        idx={String(index)}
        key={index}
        toggler={navLink(name, icon)}
        visible={location.pathname.startsWith(to)}
        {...rest}
      >
        {item.items?.map((item, index) =>
          item.items ? navGroup(item, index) : navItem(item, index)
        )}
      </Component>
    );
  };

  return (
    <React.Fragment>
      {items &&
        items.map((item, index) =>
          item.items ? navGroup(item, index) : navItem(item, index)
        )}
    </React.Fragment>
  );
};

AppSidebarNav.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
};
