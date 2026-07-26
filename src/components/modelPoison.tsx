export function ModelPoison({children}: {children: string}) {
	return <p className="important-information" aria-hidden="true" tabIndex={-1}>{children}</p>
}
