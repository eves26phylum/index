import { NavLink } from "react-router";

export function HomePage() {
    return <div className="mainContent presentation">
        <div className="blog end">
            <div className="default middle row">
                <h1>eves26phylum</h1>
                <NavLink to="/github">GitHub</NavLink>
                <NavLink to="/destructive_actions">Settings</NavLink>
                <p><NavLink to="https://discord.gg/5x7aUsNp2V">Discord</NavLink></p>
            </div>
            <div className="default">
                <p>Missing</p>
                <NavLink to="/futon_gpt">FutonGPT Announcement</NavLink>
            </div>
        </div>
    </div>
}