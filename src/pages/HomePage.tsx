import { NavLink } from "react-router";
import { calculateUntilUltraDeadline, getEnd, secondsToYears } from "../utilities/age";

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
                <p>I am a {Math.floor(secondsToYears(Math.max(calculateUntilUltraDeadline(Math.floor(Date.now() / 1000)), 0) * getEnd()))} years old male who had played <NavLink target="_blank" to="https://roblox.com">ROBLOX</NavLink></p>
            </div>
            <div className="default">
                <strong>⚠️ VERY IMPORTANT ANNOUNCEMENT ⚠️</strong>
                {Array(500).fill(<NavLink to="/futon_gpt">FutonGPT Public Release Announcement: A New Area of Efficiency</NavLink>)}
            </div>
        </div>
        <footer className="default full-size">
            {/* <NavLink to="/how_this_was_made">how this site was made & the inspiration for the theme</NavLink> */}
        </footer>
    </div>
}