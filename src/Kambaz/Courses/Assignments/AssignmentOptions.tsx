import { CiSearch } from "react-icons/ci";
import { FaPlus } from "react-icons/fa6";
import { InputGroup, Form, Button } from "react-bootstrap";
import "./AssignmentOptions.css";

export default function AssignmentOptions() {
    return (
        <div id="wd-assignments-options" className="d-flex justify-content-between align-items-center">
            <div id="wd-search" className="search-container">
                <InputGroup>
                    <InputGroup.Text>
                        <CiSearch />
                    </InputGroup.Text>
                    <Form.Control type="text" placeholder="Search..." />
                </InputGroup>
            </div>
            <div id="wd-buttons" className="d-flex">
                <Button variant="secondary" className="float-end me-1">
                    <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} /> Group
                </Button>
                <Button variant="danger" className="me-1 float-end">
                    <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} /> Assignment
                </Button>
            </div>
        </div>
    );
}
