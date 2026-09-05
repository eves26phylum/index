function Broadcast(
	{children, date}:
	{children: React.ReactNode, date: number}
) {
	return<tr>
		<td style={{"textWrap": "nowrap"}}>{new Date(date * 1000).toDateString()}</td>
		<td>{children}</td>
	</tr> 
}
export function Broadcasts() {
	return <>
		<h2 className="titles">What I'm Saying</h2>
		<table className="greyble">
			<thead>
				<th>
					Date
				</th>
				<th>
					Broadcast
				</th>
			</thead>
			<tbody>
				<Broadcast date={
					1787833605
				}>I have been merged with AI. I am reporting this from the future. Please, do not touch the Kyber, because that is the wrong way. NO, don't touch the Kyber yet. No, no. You're decrypting it the wrong way. It's in plain text now, wait the robots are coming run.</Broadcast>
				<Broadcast date={
					1787820347
				}>Hello World</Broadcast>
			</tbody>
		</table>
	</>
}
