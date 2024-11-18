import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <h1>Logo for demo</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="list">List</Link>
                    </li>
                    <li>
                        <Link to="about">About</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;