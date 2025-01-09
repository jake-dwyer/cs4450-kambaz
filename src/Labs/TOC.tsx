import { Link } from 'react-router-dom';

export default function TOC() {
    return (
        <div id="wd-toc">
            <h2>Table of Contents</h2>
            <ul>
                <li><Link to="Lab1">Lab 1</Link></li>
                <li><Link to="Lab2">Lab 2</Link></li>
                <li><Link to="Lab3">Lab 3</Link></li>
                <li><Link to="/Kambaz">Kambaz</Link></li>
            </ul>
        </div>
    );
}