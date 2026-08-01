import { SyntaxValidator } from 'fast-xml-validator';
export function validateXML(xml: string) {
	return SyntaxValidator.validate(xml);
}
