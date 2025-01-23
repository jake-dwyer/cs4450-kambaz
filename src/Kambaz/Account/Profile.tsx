import { Link } from 'react-router-dom';

export default function Profile() {
    return (
        <div id="profile-screen">
            <h3>Profile</h3>
            <input id="username" value="alice" placeholder="username" /> <br />
            <input id="password" value="123" placeholder="password" type="password"/> <br />
            <input id="first-name" value="Alice" placeholder="First Name" /> <br />
            <input id="last-name" value="Wonderland" placeholder="Last Name" /> <br />
            <input id="dob" value="2000-01-01" type="date" /> <br />
            <input id="email" value="alice@wonderland" type="email" /> <br />
            <select id="role">
                <option value="USER">User</option>
                <option value="ADMIN">Admin</option>
                <option value="FACULTY">Faculty</option>
                <option value="STUDENT">Student</option>
            </select> <br />
            <Link to="/Kambaz/Account/Signin">Sign out</Link>
        </div>
    );
}