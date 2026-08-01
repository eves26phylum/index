import { validateXML } from "../utilities/validateXML";
const dom_parser = new DOMParser();
export function MakeBlogFromXML({blog_xml_text}: {blog_xml_text: string}) {
	if (validateXML(blog_xml_text) !== true) {
		return <p>Failed to load blog—syntax error while validating XML</p>
	}
	function parseElement(element: Element) {
		console.log(element.tagName);
		const parsedInsides = parseSomething(element.children);
		switch (element.tagName) {
			case "blog":
				return <>{parsedInsides}</>
			case "text":
				return <p>{parsedInsides}</p>
			default:
				return <div>
					<h1>Error! Unsupported tag: {element.tagName}, defaulting to nothing—but the content stays, so nothing is lost</h1>
					{parsedInsides}
				</div>
		}
	}
	function parseSomething(something: HTMLCollection): React.JSX.Element[] {
		return Object.keys(something).map((value: string, index: number) => {
			return parseElement(something[index]);	
		})
	}
	console.log(blog_xml_text);
	const xml_parsed = dom_parser.parseFromString(blog_xml_text, "text/xml").children;
	return <>
		{
			parseSomething(xml_parsed)
		}
	</>
}
