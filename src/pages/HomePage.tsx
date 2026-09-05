import { NavLink, type NavLinkProps } from "react-router";
import { faGithub, faCodeberg } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MailMe } from "./Mail";
import { ClipboardCopyButton } from "../components/ClipboardCopy";
import { DestructiveActions } from "./DestructiveActions";
import { PizzaComponent } from "../components/pizza_party";
import { Broadcasts } from "./Broadcasts";
import { useState } from "react";
export function DarkModeToggle({setCheckedDarkMode, checkedDarkMode}: {setCheckedDarkMode: React.Dispatch<React.SetStateAction<boolean>>, checkedDarkMode: boolean}) {
	return <div className="row tiny-gappy flexy pointy-cursor" onClick={()=>{
						document.body.classList.toggle('dark_mode');
						localStorage.setItem('dark_mode', document.body.classList.contains("dark_mode").toString());
						setCheckedDarkMode(document.body.classList.contains("dark_mode"));
					}}>
						<input type="checkbox" checked={checkedDarkMode} />
						<span>Enable Dark Mode</span>
					</div>
}
export function GitHub() {
	return <NavLink target="_blank" to="https://github.com/eves26phylum">
											<FontAwesomeIcon icon={faGithub}/>
											GitHub
										</NavLink>
}
export function Codeberg() {
	return <NavLink target="_blank" to="https://codeberg.org/eves26phylum">
											<FontAwesomeIcon icon={faCodeberg}/>
											Codeberg
										</NavLink>
}
export function Mailer() {
	return <MailMe ClipboardCopyButton={ClipboardCopyButton}/>
}
export function Rabbit() {
	return <div className="rabbit_that_takes_up_everything_and_is_only_for_filler_and_serves_no_other_purpose" aria-hidden={true}>
							🐇
						</div>
}
export function HomePage() {
		const [checkedDarkMode, setCheckedDarkMode] = useState<boolean>(localStorage.getItem('dark_mode') === 'true');
    return <>
		<h1>eves26phylum</h1>
		<table>
			<tr>
				<td>
					<div>
						<p>A person you might never hear from again.</p>
						<p>Australian 🇦🇺 who does software development as a hobby</p>
					</div>
					<DestructiveActions/>
					<hr/>
				</td>
				<td>
					<Broadcasts/>
					<PizzaComponent/>	
				</td>
			</tr>
		</table>
	</>
}
