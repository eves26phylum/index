import { NavLink } from "react-router"
import { faGithub, faCodeberg } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
export function MyCode() {
	return <div className="mainContent presentation">
		<div className="default blog end">
			<h1>View the Source Code of the Projects I Made</h1>
			<p>On...</p>
			<NavLink target="_blank" to="https://github.com/eves26phylum">
				<FontAwesomeIcon icon={faGithub}/>
				GitHub
			</NavLink>
			<NavLink target="_blank" to="https://codeberg.org/eves26phylum">
				<FontAwesomeIcon icon={faCodeberg}/>
				Codeberg
			</NavLink>
		</div>
	</div>
}
