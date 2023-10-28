import {Link} from "react-router-dom";

export default function Header(){
    return(
        <header>
            <Link to="/" className="logo">MyBlog</Link>
            <nav>
                <Link to="/register">Register</Link>
                <Link to="/login">Login</Link>
            </nav>
        </header>
    );
}