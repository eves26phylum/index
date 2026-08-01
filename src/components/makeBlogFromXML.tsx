import { validateXML } from "../utilities/validateXML";
const dom_parser = new DOMParser();
export function MakeBlogFromXML({blog_xml_text}: {blog_xml_text: string}) {
	try {
		validateXML(blog_xml_text) !== true
	}
	catch(e) {
		window.alert(e);
		return <p>Failed to load blog—syntax error while validating XML</p>
	}
	function parseElement(element: Node) {
		if (element.nodeName === "#text") {
			return element.nodeValue;
		}
		const parsedInsides = parseSomething(element.childNodes);
		// todo: parse .attributes
		switch (element.nodeName) {
			case "blog":
				return <>{parsedInsides}</>
			case "text":
				return <p>{parsedInsides}</p>
			case "title":
				return <h1>{parsedInsides}</h1>
			case "bold":
				return <strong>{parsedInsides}</strong>
			default:
				return <div>
					<h1>Error! Unsupported tag: {element.nodeName}, defaulting to nothing—but the content stays, so nothing is lost</h1>
					{parsedInsides}
				</div>
		}
	}
	function parseSomething(something: NodeList): (string | React.JSX.Element | null)[] {
		return Object.keys(something).map((value: string, index: number) => {
			return parseElement(something[index]);	
		})
	}
	const xml_parsed = dom_parser.parseFromString(blog_xml_text, "text/xml").childNodes;
	return <>
		{
			parseSomething(xml_parsed)
		}
	</>
}
