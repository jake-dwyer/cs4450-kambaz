import "./index.css";
import BackgroundColors from "./BackgroundColors";
import Borders from "./Borders";
import Corners from "./Corners";
import ForegroundColors from "./ForegroundColors";
import GridLayout from "./GridLayout";
import Margins from "./Margins";
import Padding from "./Padding";
import Positions from "./Positions";
import Zindex from "./Zindex";
import Flex from "./Flex";
import BootstrapGrids from "./BootstrapGrids";
import BootstrapLists from "./BootstrapLists";
import BootstrapNavigation from "./BootstrapNavigation";
import BootstrapTables from "./BootstrapTables";
import ScreenSizeLabel from "./ScreenSizeLabel";
import BootstrapForms from "./BootstrapForms";

export default function Lab2() {
    return (
        <div className="container" id="wd-lab2">
            <h2>Lab 2 - Cascading Style Sheets</h2>
            <h3>Styling with the STYLE attribute</h3>
            <p>
                Style attribute allows configuring look and feel right on the element. Although it's very convenient, it is considered bad practice and you should avoid using the style attribute.
            </p>
            <div>
                <BackgroundColors />
            </div>
            <div>
                <Borders />
            </div>
            <div>
                <Corners />
            </div>
            <div>
                <ForegroundColors />
            </div>
            <div>
                <GridLayout />
            </div>
            <div>
                <Margins />
            </div>
            <div>
                <Padding />
            </div>
            <div>
                <Positions />
            </div>
            <div>
                <Zindex />
            </div>
            <div>
                <Flex />
            </div>
            <div>
                <BootstrapGrids />
            </div>
            <div>
                <BootstrapLists />
            </div>
            <div>
                <BootstrapNavigation />
            </div>
            <div>
                <BootstrapTables />
            </div>
            <div>
                <ScreenSizeLabel />
            </div>
            <div>
                <BootstrapForms />
            </div>
        </div>
    );
}