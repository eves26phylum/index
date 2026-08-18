export function PizzaUsersList({user_list}: {user_list: string[]}) {
	return <strong className='status-text'>
		{
			user_list.map((username: string, index: number) => {
				const username_component = <p className="username" key={index}>{username}</p>;
				switch (user_list.length - 1 === index) {
					case true:
						return <>
							{username_component}
						</>
					case false:
						return <>
							{username_component}
							<p>, </p>
						</>
				}
			})
		}
	</strong>;
}
