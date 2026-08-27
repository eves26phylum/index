import { NavLink } from "react-router";
export function HomePage() {
    return <div className="mainContent presentation">
        <div className="blog end">
            <div className="default middle row">
                <h1>eves26phylum</h1>
                <div className="default row">
										{/* <p>external links</p> */}
                    <NavLink to="/git">My Code</NavLink>
								    <NavLink to="/email">E-Mail</NavLink>
                </div>
            </div>
            <div className="default">
								<NavLink to="/blog">Read my blogs</NavLink>
								<hr/>
								<NavLink to="/destructive_actions">Settings for this website</NavLink>
								<NavLink to="/pizza_party">Virtual pizza party for 71 people (claim yours!)</NavLink>
                <NavLink to="/futon_gpt">FutonGPT Public Release Announcement: A New Era of Efficiency</NavLink>
            </div>
        </div>
    </div>
}
