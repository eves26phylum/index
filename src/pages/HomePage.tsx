import { NavLink } from "react-router";
import { faGithub, faCodeberg } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MailMe } from "./Mail";
import { ClipboardCopyButton } from "../components/ClipboardCopy";
import { DestructiveActions } from "./DestructiveActions";
export function HomePage() {
    return <div className="mainContent presentation">
        <div className="blog end">
            <div className="default middle row">
                <h1>eves26phylum</h1>
                <div className="default row">
										<MailMe ClipboardCopyButton={ClipboardCopyButton}/>
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
            <div className="default">
								<DestructiveActions/>
								<NavLink to="/blog">Read my blogs</NavLink>
								<hr/>
								<NavLink to="/destructive_actions">Settings for this website</NavLink>
								<NavLink to="/pizza_party">Virtual pizza party for 71 people (claim yours!)</NavLink>
                <NavLink to="/futon_gpt">FutonGPT Public Release Announcement: A New Era of Efficiency</NavLink>
            </div>
        </div>
    </div>
}
