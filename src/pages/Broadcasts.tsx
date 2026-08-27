function Broadcast(
	{children, date}:
	{children: React.ReactNode, date: number}
) {
	return <div className="default broadcast row space-between">
		{children}
		<p>{new Date(date * 1000).toDateString()}</p>
	</div>
}
export function Broadcasts() {
	return <>
		<strong>What I'm saying</strong>
		<Broadcast date={1787831046}>Well, uh... does my website look nice? I re-manufactured it.</Broadcast>
		<Broadcast date={1787821039}>Hi hello hi hello</Broadcast>
		<Broadcast date={1787820956}>Does this even work</Broadcast>
		<Broadcast date={
			1787820347
		}>Hello World</Broadcast>
	</>
}
