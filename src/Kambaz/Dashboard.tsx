import { Link } from 'react-router-dom';
import { Row, Col, Card, Button } from 'react-bootstrap';

export default function Dashboard() {
    return (
        <div id="dashboard">
            <h1 id="dashboard-title">Dashboard</h1> <hr />
            <h2 id="dashboard-published">Published Courses (12)</h2> <hr />
            <div id="dashboard-courses">
                <div id="wd-dashboard-course">
                    <Row xs={1} md={5} className="g-4">
                        <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                            <Card><Link className="wd-dashboard-course-link text-decoration-none text-dark" to="/Kambaz/Courses/1234/Home">
                                <Card.Img variant="top" width="100%" src="../assets/reactjs.jpg" height={160}></Card.Img>
                                <Card.Body>
                                    <Card.Title className="wd-dashboard-course-title">CS1234 React JS</Card.Title>
                                    <Card.Text className="wd-dashboard-course-description">
                                        Full Stack software developer</Card.Text>
                                    <Button variant="Primary">Go</Button>
                                </Card.Body>
                            </Link>
                            </Card>
                        </Col>
                        <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                            <Card><Link className="wd-dashboard-course-link text-decoration-none text-dark" to="/Kambaz/Courses/1234/Home">
                                <Card.Img variant="top" width="100%" src="../assets/reactjs.jpg" height={160}></Card.Img>
                                <Card.Body>
                                    <Card.Title className="wd-dashboard-course-title">CS1234 React JS</Card.Title>
                                    <Card.Text className="wd-dashboard-course-description">
                                        Full Stack software developer</Card.Text>
                                    <Button variant="Primary">Go</Button>
                                </Card.Body>
                            </Link>
                            </Card>
                        </Col>
                        <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                            <Card><Link className="wd-dashboard-course-link text-decoration-none text-dark" to="/Kambaz/Courses/1234/Home">
                                <Card.Img variant="top" width="100%" src="../assets/reactjs.jpg" height={160}></Card.Img>
                                <Card.Body>
                                    <Card.Title className="wd-dashboard-course-title">CS1234 React JS</Card.Title>
                                    <Card.Text className="wd-dashboard-course-description">
                                        Full Stack software developer</Card.Text>
                                    <Button variant="Primary">Go</Button>
                                </Card.Body>
                            </Link>
                            </Card>
                        </Col>
                        <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                            <Card><Link className="wd-dashboard-course-link text-decoration-none text-dark" to="/Kambaz/Courses/1234/Home">
                                <Card.Img variant="top" width="100%" src="../assets/reactjs.jpg" height={160}></Card.Img>
                                <Card.Body>
                                    <Card.Title className="wd-dashboard-course-title">CS1234 React JS</Card.Title>
                                    <Card.Text className="wd-dashboard-course-description">
                                        Full Stack software developer</Card.Text>
                                    <Button variant="Primary">Go</Button>
                                </Card.Body>
                            </Link>
                            </Card>
                        </Col>
                        <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                            <Card><Link className="wd-dashboard-course-link text-decoration-none text-dark" to="/Kambaz/Courses/1234/Home">
                                <Card.Img variant="top" width="100%" src="../assets/reactjs.jpg" height={160}></Card.Img>
                                <Card.Body>
                                    <Card.Title className="wd-dashboard-course-title">CS1234 React JS</Card.Title>
                                    <Card.Text className="wd-dashboard-course-description">
                                        Full Stack software developer</Card.Text>
                                    <Button variant="Primary">Go</Button>
                                </Card.Body>
                            </Link>
                            </Card>
                        </Col>
                        <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                            <Card><Link className="wd-dashboard-course-link text-decoration-none text-dark" to="/Kambaz/Courses/1234/Home">
                                <Card.Img variant="top" width="100%" src="../assets/reactjs.jpg" height={160}></Card.Img>
                                <Card.Body>
                                    <Card.Title className="wd-dashboard-course-title">CS1234 React JS</Card.Title>
                                    <Card.Text className="wd-dashboard-course-description">
                                        Full Stack software developer</Card.Text>
                                    <Button variant="Primary">Go</Button>
                                </Card.Body>
                            </Link>
                            </Card>
                        </Col>
                        <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                            <Card><Link className="wd-dashboard-course-link text-decoration-none text-dark" to="/Kambaz/Courses/1234/Home">
                                <Card.Img variant="top" width="100%" src="../assets/reactjs.jpg" height={160}></Card.Img>
                                <Card.Body>
                                    <Card.Title className="wd-dashboard-course-title">CS1234 React JS</Card.Title>
                                    <Card.Text className="wd-dashboard-course-description">
                                        Full Stack software developer</Card.Text>
                                    <Button variant="Primary">Go</Button>
                                </Card.Body>
                            </Link>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    );
}