import { useEffect, useState } from "react";
interface Blog {
	id: number,
	blog_title: string,
	tags: string[],
	creation_date: number,
	authors: string[]
}
export function Blog() {
	const [blogs, setBlogs] = useState({});
	useEffect(() => {
			async function fetchInitialState() {
					try {
							const response = await fetch('/api/get_blogs');
							if (!response.ok) {
									throw new Error("[critical system error] response is not okay?");
							}
							const data: {
								blog_content: Blog[]
							} = await response.json();
							setBlogs(data.blog_content);
					} catch (error) {
						window.alert(error); //temp
					}
			}
			fetchInitialState();
	}, []);
	return <div className="mainContent presentation">
		<div className="default blog end">
			<h1>Blog</h1>
			<p>A collection of thoughts I find interesting.</p>
		</div>
	</div>
}
