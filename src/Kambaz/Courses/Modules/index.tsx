export default function Modules() {
    return (
        <div>
            <div id="modules-button-group">
                <button>Collapse All</button>
                <button>View Progress</button>
                <select id="select-publishing">
                    <option value="NONE">Publish None</option>
                    <option selected value="ALL">Publish All</option>
                </select>
                <button>+ Module</button>
            </div>
            <ul id="modules">
                <li className="module">
                    <div className="title">Week 1, Lecture 1 - Course Introduction, Syllabus, Agenda</div>
                    <ul className="lessons">
                        <li className="lesson">
                            <span className="title">LEARNING OBJECTIVES</span>
                            <ul className="content">
                                <li className="content-item">Introduciton to the course</li>
                                <li className="content-item">Learn what is Web Development</li>
                            </ul>
                            <span className="title">READING</span>
                            <ul className="content">
                                <li className="content-item">Full Stack Developer - Chapter 1 - Introduction</li>
                                <li className="content-item">Full Stack Developer - Chapter 2 - Creating User</li>
                            </ul>
                            <span className="title">SLIDES</span>
                            <ul className="content">
                                <li className="content-item">Introduction to Web Development</li>
                                <li className="content-item">Creating an HTTP Server with Node.js</li>
                                <li className="content-item">Creating a React Application</li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li className="module">
                    <div className="title">Week 1, Lecture 2 - Formatting User Interfaces with HTML</div>
                    <ul className="lessons">
                        <li className="lesson">
                            <span className="title">LEARNING OBJECTIVES</span>
                            <ul className="content">
                                <li className="content-item">Learn how to create user interfaces with HTML</li>
                                <li className="content-item">Deploy the assignment to Netflify</li>
                            </ul>
                            <span className="title">SLIDES</span>
                            <ul className="content">
                                <li className="content-item">Introduction to HTML and the DOM</li>
                                <li className="content-item">Formatting Web content with Headings and</li>
                                <li className="content-item">Formatting content with Lists and Tables</li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    );
}