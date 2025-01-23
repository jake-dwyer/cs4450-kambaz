import { Link } from 'react-router-dom';

export default function KambazNavigation() {
    return (
        <div id="Kambaz-navigation">
            <a href="https://www.northeastern.edu/" id="neu-link" target="_blank"> Northeastern</a> <br />
            <Link to="/Kambaz/Account" id="account-link">Account</Link> <br />
            <Link to="/Kambaz/Dashboard" id="dashboard-link">Dashboard</Link> <br />
            <Link to="/Kambaz/Dashboard" id="course-link">Courses</Link> <br />
            <Link to="/Kambaz/Calendar" id="calendar-link">Calendar</Link> <br />
            <Link to="/Kambaz/Inbox" id="inbox-link">Inbox</Link> <br />
            <Link to="/Labs" id="labs-link">Labs</Link> <br />
        </div>
    );
}