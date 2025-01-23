export default function Assignments() {
    return (
        <div id="assignments">
            <input id="search-assignment" placeholder="Search for Assignments" type="text" />
            <button id="add-assignment-group">+ Group</button>
            <button id="add-assignment">+ Assignment</button>
            <h3 id="assignments-title">ASSIGNMENTS 40% of Total <button>+</button>
            </h3>
            <ul id="assignment-list">
                <li className="assignment-list-item">
                    <a className="assignment-link" href="#/Kambaz/Courses/1234/Assignments/123">
                    A1 - ENV + HTML <br />
                    </a>
                    Multiple Modules | <b>Not available until</b> May 6 at 12:00am | <br />
                    <b>Due</b> May 13 at 11:59pm | 100 points 
                </li>
                <li className="assignment-list-item">
                    <a className="assignment-link" href="#/Kambaz/Courses/1234/Assignments/123">
                    A2 - CSS + BOOTSTRAP <br />
                    </a>
                    Multiple Modules | <b>Not available until</b> May 13 at 12:00am | <br />
                    <b>Due</b> May 20 at 11:59pm | 100 points 
                </li>
                <li className="assignment-list-item">
                    <a className="assignment-link" href="#/Kambaz/Courses/1234/Assignments/123">
                    A3 - JAVASCRIPT + REACT <br />
                    </a>
                    Multiple Modules | <b>Not available until</b> May 20 at 12:00am | <br />
                    <b>Due</b> May 27 at 11:59pm | 100 points 
                </li>
            </ul>
        </div>
    );
}