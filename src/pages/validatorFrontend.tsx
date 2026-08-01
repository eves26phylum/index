import { useState, type ChangeEventHandler } from "react";
import { validateXML } from "../utilities/validateXML";
import { parseXML } from "../utilities/xmlParser";
export function ValidatorFrontend() {
	const [xml_text, set_xml_text] = useState<string>("");
	const [status, set_status] = useState<string>("");
	return <div className="mainContent presentation">
		<div className="default end blog">
			<p>validate xml here</p>
			<textarea onChange={(event) => {
				set_xml_text(event.target.value);
			}}></textarea>
			{ status.length === 0 ? <></> : <p>{status}</p> }
			<button onClick={() => {
				const validation_result = validateXML(xml_text);
				if (validation_result === true) {
					const parsed = parseXML(xml_text);
					return set_status(JSON.stringify(parsed));
				}
				set_status(JSON.stringify(validation_result));
			}}>Click me to FUCKING validate your XML</button>
		</div>
	</div>
}
