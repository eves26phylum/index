import { NavLink } from "react-router"

export function Dog() {
    return <div className="mainContent presentation">
        <div className="default blog end centered">
            <h1>Ok</h1>
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