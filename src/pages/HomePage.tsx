import { NavLink } from "react-router";
import { faGithub, faCodeberg } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MailMe } from "./Mail";
import { ClipboardCopyButton } from "../components/ClipboardCopy";
import { DestructiveActions } from "./DestructiveActions";
import { GetPizza } from "./DeliverPizza";
import { Broadcasts } from "./Broadcasts";
import { useState } from "react";
export function HomePage() {
		const [checkedDarkMode, setCheckedDarkMode] = useState<boolean>(localStorage.getItem('dark_mode') === 'true');
    return <div className="mainContent presentation">
        <div className="blog end">
            <div className="default middle row space-between">
                <h1>eves26phylum</h1>
                <div className="boogie row">
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
								<div>
									<p>A person you might never hear from again.</p>
									<p>Australian 🇦🇺 who does software development as a hobby</p>
								</div>
								<DestructiveActions/>
								<hr/>
								<div className="double-column gapper">
									<div className="mini-column">
										<div className="row tiny-gappy flexy pointy-cursor" onClick={()=>{
							document.body.classList.toggle('dark_mode');
              localStorage.setItem('dark_mode', document.body.classList.contains("dark_mode").toString());
							setCheckedDarkMode(document.body.classList.contains("dark_mode"));
						}}>
											<input type="checkbox" checked={checkedDarkMode} />
											<span>Enable Dark Mode</span>
										</div>
										<NavLink to="/blog">Read my blogs</NavLink>
										<NavLink to="/futon_gpt">FutonGPT Public Release Announcement: A New Era of Efficiency</NavLink>
										<Broadcasts/>
									</div>
									<div className="mini-column">
										<GetPizza/>	
									</div>
								</div>
            </div>
						<div className="rabbit_that_takes_up_everything_and_is_only_for_filler_and_serves_no_other_purpose" aria-hidden={true}>
							🐇
						</div>
        </div>
    </div>
}
