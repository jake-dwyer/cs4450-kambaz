import { FaPlus } from 'react-icons/fa6';
import GreenCheckmark from './GreenCheckmark';
import { MdDoNotDisturbAlt } from "react-icons/md";
import { Button, Dropdown } from 'react-bootstrap';

export default function ModulesControls() {
    return (
        <div id="wd-modules-controls" className="text-nowrap">
            <Button variant="danger" size="lg" className="me-1 float-end">
                <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                Module
            </Button>
            <Dropdown className="float-end me-2">
                <Dropdown.Toggle variant="secondary" size="lg">
                    <GreenCheckmark />
                    Publish All
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item>
                        <GreenCheckmark />
                        Publish All
                    </Dropdown.Item>
                    <Dropdown.Item>
                        <GreenCheckmark />
                        Publish all modules and items
                    </Dropdown.Item>
                    <Dropdown.Item>
                        <MdDoNotDisturbAlt className='me-2'/>
                        Unpublish all modules and items
                    </Dropdown.Item>
                    <Dropdown.Item>
                        <MdDoNotDisturbAlt className='me-2' />
                        Unpublish modules only
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <Button id="wd-view-progress" variant="secondary" size="lg" className="float-end me-1">View Progress</Button>
            <Button id="wd-collapse-all" variant="secondary" size="lg" className="float-end me-1">Collapse All</Button>
        </div>
    );
}