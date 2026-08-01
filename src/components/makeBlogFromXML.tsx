import { validateXML } from "../utilities/validateXML";
import { parseXML } from "../utilities/xmlParser";

export function MakeBlogFromXML({blog_xml_text}: {blog_xml_text: string}) {
	if (validateXML(blog_xml_text) !== true) {
		return <p>Failed to load blog—syntax error while validating XML</p>
	}
	function parseSomething(something: object) {
		return Object.keys(something).map((index: string): string | React.ReactNode => {
				const value = (something as any)[index];
				if (typeof value === "string") {
					switch (index) {
						case "#text":
							return value;
						case "text":
							return <p>{value}</p>
						case "title":
							return <h1>{value}</h1>
						default:
							return <div className="non-semantic-tag">{value}</div>
					}
				}
				if (typeof value === "object") {
					return parseSomething(value as object);
				}
				return <p>[Warning: Could not parse.]{String(value)}</p>
			})
	}
	const xml_parsed = parseXML(blog_xml_text);
	return <>
		{
			parseSomething(xml_parsed)
		}
	</>
}
