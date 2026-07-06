import { NavLink } from "react-router";
import { calculateUntilUltraDeadline, getEnd, secondsToYears } from "../utilities/age";
import Tooltip from "../components/Tooltip";

export function HomePage() {
    return <div className="mainContent presentation">
        <div className="blog end">
            <div className="default middle row">
                <h1>eves26phylum</h1>
                <div className="default row">
                    <NavLink target="_blank" to="/github">GitHub</NavLink>
                    <NavLink to="/destructive_actions">Settings</NavLink>
                    <NavLink target="_blank" to="https://discord.gg/5x7aUsNp2V">Discord</NavLink>
                </div>
            </div>
            <div className="default">
                <p>I am a {Math.floor(secondsToYears(Math.max(calculateUntilUltraDeadline(Math.floor(Date.now() / 1000)), 0) * getEnd()))} years old male who enjoys using MacBooks
                </p>
                <NavLink to="/what_i_do">Looking for my software developer information?</NavLink>
            </div>
            <div className="default">
                <strong>⚠️ VERY IMPORTANT ANNOUNCEMENT ⚠️</strong>
                <p>(satire)</p>
                {Array(500).fill(<NavLink to="/futon_gpt">FutonGPT Public Release Announcement: A New Area of Efficiency</NavLink>)}
            </div>
        </div>
    </div>
}