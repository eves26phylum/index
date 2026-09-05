import { NavLink, type NavLinkProps } from "react-router";
import { faGithub, faCodeberg } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MailMe } from "./Mail";
import { ClipboardCopyButton } from "../components/ClipboardCopy";
import { DestructiveActions } from "./DestructiveActions";
import { PizzaComponent } from "../components/pizza_party";
import { Broadcasts } from "./Broadcasts";
import { useState } from "react";
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
    return <>
		<h1>eves26phylum</h1>
		<br/>
		<br/>
		<table style={{"width": "100%", 'tableLayout': 'fixed'}}>
			<tbody>
				<td>
					<p>A person you might never hear from again.</p>
					<p>Australian 🇦🇺 who does software development as a hobby</p>
				</td>
				<td style={{"float": "right"}}>
					<DestructiveActions/>
				</td>
			</tbody>
		</table>
		<br/>
		<h2 className="titles">Fun stuff!</h2>
		<br/>
		<table>
			<tr>
				<td>
					<br/>
					<Broadcasts/></td>
				<td><PizzaComponent/></td>	
			</tr>
		</table>
	</>
}
