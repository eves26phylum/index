import { NavLink } from "react-router";
import diskSpaceLeft from "../assets/images/diskSpaceLeft.png";
export function DestructiveActions() {
    return <div className="mainContent presentation">
        <div className="default blog">
            <h1>OS Information</h1>
            <p>Version 1 [up to date since 06/06/2026]</p>
            <img src={diskSpaceLeft} className="behaveImage" alt="Disk Space Left on Macintosh—not much is left"/>
            <p>my actual disk space storage</p>
            <h2>Report Bugs in Eves26Phylum OS</h2>
            <NavLink to="/email">Contact eves26phylum sole trader</NavLink>
            <h2>Destructive Actions</h2>
            <button>Destroy OS</button>
            <button>Goodbye</button>
        </div>
    </div>;
}