import React from 'react';
import {
    NavLink
} from "react-router-dom";

export default function HeaderNavContent() {
    return (
        <div className="HeaderNavContent">

            <div>
                <nav>
                    <ul>
                        <li>
                            <NavLink exact to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about">About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact">Contact</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>

        </div>
    );
}
