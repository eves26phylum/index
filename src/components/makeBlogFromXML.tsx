import { NavLink } from "react-router";
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
		const attributes = element instanceof Element ? element.attributes : undefined;
		switch (element.nodeName) {
			case "blog":
				return <>{parsedInsides}</>
			case "text":
				return <p>{parsedInsides}</p>
			case "title":
				return <h1>{parsedInsides}</h1>
			case "bold":
				return <strong>{parsedInsides}</strong>
			case "image":
				if (!attributes) return <p>[Image] failed to use attributes</p>;
				return <img className="behaveImage" src={attributes.getNamedItem("src")?.value || "/failed_to_load.png"} alt={attributes.getNamedItem("alt")?.value || "This is an image"}/>
			case "quote":
				return <blockquote>{parsedInsides}</blockquote>
			case "em":
				return <em>{parsedInsides}</em>
			case "i":
				return <i>{parsedInsides}</i>
			case "link":
				if (!attributes) return <p>[Link] failed to use attributes</p>;
				return <NavLink to={attributes.getNamedItem("to")?.value || "this_is_a_404_page"}>{parsedInsides}</NavLink>
			default:
				return <div style={{marginLeft: "4px", border: "1px red solid"}}>
					{/* <h1>Unsupported tag: {element.nodeName}, defaulting to nothing—but the content stays, so nothing is lost</h1> */}
					<p style={{backgroundColor: "white"}} className="mini-text"><span style={{textTransform: "none", color: "red", backgroundColor: "black"}}>{element.nodeName}</span> (unsupported tag error)</p>
					<code style={{flexDirection: "column"}}>{parsedInsides}</code>
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
