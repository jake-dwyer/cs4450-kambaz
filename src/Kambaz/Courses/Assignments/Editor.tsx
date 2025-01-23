export default function Editor() {
    return (
        <div id="assignments-editor">
            <label htmlFor="name"><h3>Assignment Name</h3></label>
            <input id="name" value="A1 - ENV + HTML" type="text" /><br /><br />
            <textarea id="description">The assignment is available online Submit a link to the landing page of your Web application running on Netflify. The landing page should include the following: Your full name and section links to each of the lab assignments Link to the Kanbas application links to all relevant source code repositories The Kanbas application should include a link to navigate back to the landing page.
            </textarea> <br />
            <table>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="points">Points</label>
                    </td>
                    <td>
                        <input id="points" value={100} />
                    </td>
                </tr> <br />
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="group">Assignment Group</label>
                    </td>
                    <td>
                        <select id="select-group">
                            <option value="NONE">None</option>
                            <option selected value="ASSIGNMENTS">ASSIGNMENTS</option>
                        </select>
                    </td>
                </tr> <br />
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="display-grade">Display Grade as</label>
                    </td>
                    <td>
                        <select id="select-group">
                            <option value="FRACTION">FRACTION</option>
                            <option selected value="PERCENTAGE">PERCENTAGE</option>
                        </select>
                    </td>
                </tr> <br />
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="submission-type">Submission Type</label>
                    </td>
                    <td>
                        <select id="submission-type">
                            <option value="PAPER">PAPER</option>
                            <option selected value="ONLINE">ONLINE</option>
                        </select>
                    </td>
                </tr> <br />
                <tr>
                    <td></td>
                    <td align="left" valign="top">
                        <label>
                            Online Entry Options:
                        </label> <br />
                        <input type="checkbox" name="check-text-entry" id="wd-checkbox-text-entry" />
                        <label htmlFor="wd-checkbox-text-entry">Text Entry</label> <br />

                        <input type="checkbox" name="check-website-url" id="wd-checkbox-website-url" />
                        <label htmlFor="wd-checkbox-website-url">Website URL</label> <br />

                        <input type="checkbox" name="check-media-recordings" id="wd-checkbox-media-recordings" />
                        <label htmlFor="wd-checkbox-media-recordings">Media Recordings</label> <br />

                        <input type="checkbox" name="check-student-annotation" id="wd-checkbox-student-annotation" />
                        <label htmlFor="wd-checkbox-student-annotation">Student Annotation</label> <br />

                        <input type="checkbox" name="check-file-uploads" id="wd-checkbox-file-uploads" />
                        <label htmlFor="wd-checkbox-file-uploads">File Uploads</label> <br />
                    </td>
                </tr> <br />
                <tr>
                    <td></td>
                    <td>
                        <label htmlFor="wd-assign-to">Assign Assign to</label><br />
                        <input id="wd-assign-to" value="Everyone" />
                    </td>
                </tr> <br />
                <tr>
                    <td></td>
                    <td>
                        <label htmlFor="wd-due">Due</label><br />
                        <input id="wd-due" value="2024-05-13" type="date" />
                    </td>
                </tr> <br />
                <tr>
                    <td></td>
                    <td>
                        <label htmlFor="wd-available-from">Available from</label><br />
                        <input id="wd-available-from" value="2024-05-06" type="date" />
                    </td>
                    <td>
                        <label htmlFor="wd-available-until">Until</label><br />
                        <input id="wd-available-until" value="2024-05-20" type="date" />
                    </td>
                </tr> <br />
            </table>
            <hr />
            <table style={{ width: "100%" }}>
                <tr>
                    <td></td>
                    <td align="right">
                        <button id="wd-cancel">Cancel</button>
                        <button id="wd-save">Save</button>
                    </td>
                </tr>
            </table>
        </div>
    );
}