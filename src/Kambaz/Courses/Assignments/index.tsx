import Options from "./AssignmentOptions";
import { BsGripVertical } from "react-icons/bs";
import { RxTriangleDown } from "react-icons/rx";
import { LuNewspaper } from "react-icons/lu";
import AssignmentControlButtons from "./AssignmentControlButtons";
import LessonControlButtons from "../../LessonControlButtons";
import { ListGroup } from "react-bootstrap";

export default function Assignments() {
    return (
        <div id="assignments">
            <Options /> <br />
            <ListGroup className="rounded-0">
                <ListGroup.Item className="wd-module
                    p-0 mb-5 fs-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-secondary">
                        <BsGripVertical className="me-2 fs-3" />
                        <RxTriangleDown className="me-1" />
                        ASSIGNMENTS
                        <AssignmentControlButtons />
                    </div>
                    <ListGroup className="wd-lessons rounded-0">
                        <ListGroup.Item className="wd-assignment p-3 ps-1">
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="d-flex align-items-center flex-start">
                                    <BsGripVertical className="me-2 fs-3" />
                                    <LuNewspaper style={{ stroke: "green" }} className="me-4" />
                                </div>
                                <div className="text-start me-auto">
                                    <h5 className="mb-1">
                                        <a className="text-dark text-decoration-none" href="#/Kambaz/Courses/1234/Assignments/123">
                                            <b>A1 - ENV + HTML</b>
                                        </a>
                                    </h5>
                                    <small className="text-danger">Multiple Modules </small>
                                    <small className="text-muted"> | <b>Not available until</b> May 6 at 12:00am | </small> <br />
                                    <small className="text-muted"><b>Due</b> May 13 at 11:59pm | 100 pts</small>
                                </div>
                                <div className="d-flex align-items-center flex-end">
                                    <LessonControlButtons />
                                </div>
                            </div>
                        </ListGroup.Item>

                        <ListGroup.Item className="wd-assignment p-3 ps-1">
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="d-flex align-items-center flex-start">
                                    <BsGripVertical className="me-2 fs-3" />
                                    <LuNewspaper style={{ stroke: "green" }} className="me-4" />
                                </div>
                                <div className="text-start me-auto">
                                    <h5 className="mb-1">
                                        <a className="text-dark text-decoration-none" href="#/Kambaz/Courses/1234/Assignments/123">
                                            <b>A2 - CSS + BOOTSTRAP</b>
                                        </a>
                                    </h5>
                                    <small className="text-danger">Multiple Modules </small>
                                    <small className="text-muted"> | <b>Not available until</b> May 13 at 12:00am | </small><br />
                                    <small className="text-muted"><b>Due</b> May 20 at 11:59pm | 100 pts</small>
                                </div>
                                <div className="d-flex align-items-center flex-end">
                                    <LessonControlButtons />
                                </div>
                            </div>
                        </ListGroup.Item>

                        <ListGroup.Item className="wd-assignment p-3 ps-1">
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="d-flex align-items-center flex-start">
                                    <BsGripVertical className="me-2 fs-3" />
                                    <LuNewspaper style={{ stroke: "green" }} className="me-4" />
                                </div>
                                <div className="text-start me-auto">
                                    <h5 className="mb-1">
                                        <a className="text-dark text-decoration-none" href="#/Kambaz/Courses/1234/Assignments/123">
                                            <b>A3 - JAVASCRIPT + REACT</b>
                                        </a>
                                    </h5>
                                    <small className="text-danger">Multiple Modules </small>
                                    <small className="text-muted"> | <b>Not available until</b> May 20 at 12:00am | </small><br />
                                    <small className="text-muted"><b>Due</b> May 27 at 11:59pm | 100 pts</small>
                                </div>
                                <div className="d-flex align-items-center flex-end">
                                    <LessonControlButtons />
                                </div>
                            </div>
                        </ListGroup.Item>
                    </ListGroup>
                </ListGroup.Item>
            </ListGroup>
        </div>
    );
}