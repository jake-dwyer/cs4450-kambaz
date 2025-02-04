import { Link } from 'react-router-dom';
import { Form } from 'react-bootstrap';

export default function Profile() {
    return (
        <div id="profile-screen">
            <h3>Profile</h3>
            <Form.Control id="wd-username" value="alice" placeholder="Username"
                className="mb-2" />
            <Form.Control id="wd-password" value="123" placeholder="Enter Password"
                className="mb-2" />
            <Form.Control id="wd-first-name" value="Alice" placeholder="First Name"
                className="mb-2" />
            <Form.Control id="wd-last-name" value="Wonderland" placeholder="Last Name"
                className="mb-2" />
            <Form.Control id="wd-dob" placeholder="mm/dd/yyyy" type="date"
                className="mb-2" />
            <Form.Control id="wd-email" value="alice@wonderland.com" placeholder="Email" type="email"
                className="mb-2" />
            <select id="role" className="form-select mb-2">
                <option value="USER">User</option>
                <option value="ADMIN">Admin</option>
                <option value="FACULTY">Faculty</option>
                <option value="STUDENT">Student</option>
            </select>
            <Link id="wd-signout-btn" to="/Kambaz/Account/Signin"
                className="btn btn-danger w-100 mb-2">
                Sign out </Link>
        </div>
    );
}