import { NavLink } from "react-router"

export function Dog() {
    return <div className="mainContent presentation">
        <div className="default blog end centered">
            <h1>nginx</h1>
						<p>You do not have access to this website. The website is blocked for users in this region.</p>
        </div>
    </div>
}
export function Cat() {
    return <div className="mainContent presentation">
        <div className="default blog end centered">
            <h1>You forgot the dropdown field.</h1>
            <p>Fill it in to prove you're not a bot.</p>
            <NavLink to="/email">Retry</NavLink>
        </div>
    </div>
}
