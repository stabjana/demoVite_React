import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import Button from "./Button";

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(true); // to false again! 

    const toggleLogIn = () => {
        setIsLoggedIn((prevState) => !prevState);
    };

    return (
        <div>
            <h1>Logo for demo</h1>
            <Button text={isLoggedIn ? "Log out" : "Log in"} click={toggleLogIn} />
            <nav>
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="list">List</NavLink>
                    </li>
                    <li>
                        <NavLink to="about">About</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;