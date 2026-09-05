import { NavLink, type NavLinkProps } from "react-router";
export function Header({children}: {children?: React.ReactNode}) {
	return <div className="header-w">
		{children}
	</div>
}
export function ItemList({children, header_name}: {children: React.ReactNode, header_name: string}) {
	return <div className="headbox">
		<Header>{header_name}</Header>
		{children}
	</div>
}
export function ListLink(props: React.ComponentProps<"a">) {
	return <li>
		<a {...props}/>
	</li>
}
