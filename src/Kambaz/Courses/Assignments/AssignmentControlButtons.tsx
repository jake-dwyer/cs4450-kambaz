import { FaPlus } from 'react-icons/fa6';
import { IoEllipsisVertical } from "react-icons/io5";

export default function AssignemtnControlButtons() {
    return (
        <div className="float-end">
            <div id="wd-total" className="d-inline-block rounded-pill border border-dark px-2 me-2">
                40% of Total
            </div>
            <FaPlus className="fs-4" />
            <IoEllipsisVertical className="fs-4" />
        </div>
    );
}