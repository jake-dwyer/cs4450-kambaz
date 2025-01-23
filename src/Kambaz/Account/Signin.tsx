import { Link } from "react-router-dom";

export default function Signin() {
    return (
        <div id="wd-signin-screen">
            <h3>Sign in</h3>
            <input placeholder="username" id="wd-username" type="text" /> <br />
            <input placeholder="password" id="wd-password" type="password" /> <br />
            <Link to="/Kambaz/Account/Dashboard" id="/wd-signin-btn">Sign in </Link> 
            <Link to="/Kambaz/Account/Signup" id="wd-signup-link">Sign up</Link>
        </div>
    );
} 