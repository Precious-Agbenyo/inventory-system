import { Link } from "react-router-dom";
import { useHistory } from "react-router";

const Navbar = () => {
    const history = useHistory();

    return (
        <nav className="navbar">
            <h1>ROCSTONE LTD'</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">New Item</Link>
                <Link to="/search">Search</Link>
            </div>
            <button onClick={() => history.goBack(1)}>Back</button>
        </nav>
    );
}

export default Navbar;