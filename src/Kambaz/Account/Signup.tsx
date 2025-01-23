import { Link } from "react-router-dom";

export default function Signup() {
    return (
        <div id="signup-screen">
            <h3>Sign up</h3>
            <input placeholder="username" id="username" type="text" /> <br />
            <input placeholder="password" id="password" type="password" /> <br />
            <input placeholder="verify password" id="verify-password" type="password" /> <br />
            <Link to="/Kambaz/Account/Profile" id="signup-btn">Sign up</Link>
            <Link to="/Kambaz/Account/Signin" id="signin-link">Sign in</Link>
        </div>
    );
}