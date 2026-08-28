import { NavLink } from "react-router"
export function GoHome() {
	return <NavLink to="/" className={({isActive}) => {
		return isActive ? "hidden" : "gohome-link";
	}}>{"< Go Home"}</NavLink>
}
