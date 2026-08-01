import { XMLParser } from "fast-xml-parser"

const thisXMLParser = new XMLParser();
export function parseXML(toParse: string) {
	return thisXMLParser.parse(toParse);
}
