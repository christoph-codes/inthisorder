import React, { useContext } from "react";
import {NavLink} from 'react-router-dom';
import {ChildAuthContext} from './ChildAuth';

export default function PrivateChildNavLink(props) {
  const { isChildLoggedIn } = useContext(ChildAuthContext);

  return (
    !!isChildLoggedIn && (
      <li>
        <NavLink {...props} >{props.children}</NavLink>
      </li>
    )
  );
}
