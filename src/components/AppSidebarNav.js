import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { supabase } from "src/client";

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
    // const [userRole, setUserRole] = React.useState(null);

    // React.useEffect(() => {
    //   const fetchUserRole = async () => {
    //     const currentUser = supabase.auth.user();
    //     console.log('Current User:', currentUser); // Debug: Check if currentUser is defined
    
    //     // if (currentUser) {
    //     //   const role = await getUserRole(currentUser.id);
    //     //   console.log('Fetched Role:', role); // Debug: Check the fetched user role
    //     //   setUserRole(role);
    //     // } else {
    //     //   console.log('User is not authenticated.'); // Debug: Check if the user is not authenticated
    //     // }
    //   };
    
    //   fetchUserRole();
    // }, []); // Empty dependency array ensures this effect runs once after the initial render
    
    const Component = component;
    // console.log(userRole)
    if (role === 'admin') {
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
