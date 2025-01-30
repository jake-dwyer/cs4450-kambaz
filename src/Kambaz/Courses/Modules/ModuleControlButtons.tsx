import GreenCheckmark from "./GreenCheckmark";
import { FaPlus } from 'react-icons/fa6';
import { IoEllipsisVertical } from "react-icons/io5";

export default function ModuleControlButtons() {
    return (
        <div className="float-end">
            <GreenCheckmark />
            <FaPlus className="fs-4" />
            <IoEllipsisVertical className="fs-4" />
        </div>
    );
}