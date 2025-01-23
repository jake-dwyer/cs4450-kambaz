import { Link } from 'react-router-dom';

export default function Dashboard() {
    return (
        <div id="dashboard">
            <h1 id="dashboard-title">Dashboard</h1> <hr />
            <h2 id="dashboard-published">Published Courses (12)</h2> <hr />
            <div id="dashboard-courses">
                <div id="dashboard-course">
                    <img src="/images/reactjs.jpg" alt="react" width={200} />
                    <div>
                        <Link className="dashboard-course-link" to="/Kambaz/Courses/1234/Home"> CS1234 React JS</Link>
                        <Link to="/Kambaz/Courses/1234/Home"><p className="dashboard-course-title">Full Stack Software Developer</p></Link>
                        <Link to="/Kambaz/Courses/1234/Home"><button>Go</button></Link>
                    </div>
                </div>
                <div id="dashboard-course">
                    <img src="/images/reactjs.jpg" alt="react" width={200} />
                    <div>
                        <Link className="dashboard-course-link" to="/Kambaz/Courses/1234/Home"> CS1234 React JS</Link>
                        <Link to="/Kambaz/Courses/1234/Home"><p className="dashboard-course-title">Full Stack Software Developer</p></Link>
                        <Link to="/Kambaz/Courses/1234/Home"><button>Go</button></Link>
                    </div>
                </div>
                <div id="dashboard-course">
                    <img src="/images/reactjs.jpg" alt="react" width={200} />
                    <div>
                        <Link className="dashboard-course-link" to="/Kambaz/Courses/1234/Home"> CS1234 React JS</Link>
                        <Link to="/Kambaz/Courses/1234/Home"><p className="dashboard-course-title">Full Stack Software Developer</p></Link>
                        <Link to="/Kambaz/Courses/1234/Home"><button>Go</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}