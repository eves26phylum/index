import { NavLink } from "react-router";

export function HomePage() {
    return <div className="mainContent presentation">
        <div className="blog end">
            <div className="default middle row">
                <h1>eves26phylum</h1>
                <NavLink to="/github">GitHub</NavLink>
                <NavLink to="/destructive_actions">Settings</NavLink>
            </div>
            <div className="default">
                <p>Missing</p>
            </div>
        </div>
    </div>
}