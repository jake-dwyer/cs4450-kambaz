import { Link } from 'react-router-dom';
import { ListGroup } from 'react-bootstrap';
import { AiOutlineDashboard } from 'react-icons/ai';
import { IoCalendarOutline } from 'react-icons/io5';
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia"
import { FaInbox, FaRegCircleUser } from 'react-icons/fa6';

export default function KambazNavigation() {
    return (
        <ListGroup id="wd-kambaz-navigation" style={{ width: 120}} className="rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2">
            <ListGroup.Item action className="bg-black text-white border-0 text-center" href="https://www.northeastern.edu" target="_blank">Northeastern</ListGroup.Item>
            <ListGroup.Item className="bg-white text-danger border-0 text-center" as={Link} to="/Kambaz/Account">
            <FaRegCircleUser></FaRegCircleUser> <br />
            Account</ListGroup.Item>
            <ListGroup.Item className="bg-black text-white border-0 text-center" as={Link} to="/Kambaz/Dashboard" id="dashboard-link">
            <AiOutlineDashboard></AiOutlineDashboard> <br />
            Dashboard</ListGroup.Item>
            <ListGroup.Item className="bg-black text-white border-0 text-center" as={Link} to="/Kambaz/Dashboard" id="course-link">
            <LiaBookSolid></LiaBookSolid> <br />
            Courses</ListGroup.Item>
            <ListGroup.Item className="bg-black text-white border-0 text-center" as={Link} to="/Kambaz/Calendar" id="calendar-link">
            <IoCalendarOutline></IoCalendarOutline> <br />
            Calendar</ListGroup.Item>
            <ListGroup.Item className="bg-black text-white border-0 text-center" as={Link} to="/Kambaz/Inbox" id="inbox-link">
            <FaInbox></FaInbox> <br />
            Inbox</ListGroup.Item>
            <ListGroup.Item className="bg-black text-white border-0 text-center" as={Link} to="/Labs" id="labs-link">
            <LiaCogSolid></LiaCogSolid> <br />
            Labs</ListGroup.Item>
        </ListGroup>
    );
}