import React, { useContext } from 'react';
import {AppContext} from "./AppContext";

const Header = () => {
    const { username } = useContext(AppContext);

    return (
        <nav className="navbar navbar-inverse navbar-fixed-top">
            <div className="container">
                <div className="navbar-header">
                    <a className="navbar-brand" href="#">React-hooks-demo</a>
                </div>
                <div className="nav navbar-nav navbar-right">
                    <a className="navbar-brand" href="#">{ username }</a>
                </div>
            </div>
        </nav>
    )
};

export default Header;