import { NavLink } from "react-router";
import { calculateUntilUltraDeadline, getEnd, secondsToYears } from "../utilities/age";
export function HomePage() {
		const age = Math.floor(secondsToYears(Math.max(calculateUntilUltraDeadline(Math.floor(Date.now() / 1000)), 0) * getEnd()));
    return <div className="mainContent presentation">
        <div className="blog end">
            <div className="default middle row">
                <h1>eves26phylum</h1>
                <div className="default row">
										{/* <p>external links</p> */}
                    <NavLink target="_blank" to="https://github.com/eves26phylum">GitHub</NavLink>
                    <NavLink target="_blank" to="https://discord.gg/5x7aUsNp2V">Discord</NavLink>
								    <NavLink to="/email">E-Mail</NavLink>
                </div>
            </div>
            <div className="default">
                <p>{age} years old male based in Australia who is still learning and is currently changing their toolstack to words you have probably never heard of!</p>
            </div>
            <div className="default">
								<NavLink to="/blog">Read my blogs</NavLink>
                <NavLink to="/what_i_do">Me as a software developer</NavLink>
								<hr/>
								<NavLink to="/destructive_actions">Settings for this website</NavLink>
								<NavLink to="/pizza_party">Virtual pizza party for 71 people (claim yours!)</NavLink>
                <NavLink to="/futon_gpt">FutonGPT Public Release Announcement: A New Era of Efficiency</NavLink>
            </div>
        </div>
    </div>
}
