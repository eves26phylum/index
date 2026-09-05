import { useEffect, useState } from "react";
import { NavLink } from "react-router";
export interface Blog {
	id: string,
	blog_title: string,
	tags: string[],
	creation_date: number,
	authors: string[]
}
export function Blog({is_log}: {is_log?: boolean}) {
	const [blogs, setBlogs] = useState<Blog[] | null>(null);
	useEffect(() => {
			async function fetchInitialState() {
					try {
							const response = await fetch(`/api/get_${is_log ? "logs" : "blogs"}`);
							if (!response.ok) {
									throw new Error("[critical system error] response is not okay?");
							}
							const data: Blog[] = await response.json();
							console.log(data);
							setBlogs(data);
					} catch (error) {
						window.alert(error); //temp
					}
			}
			fetchInitialState();
	}, []);
	useEffect(() => {
		if (is_log) {
			document.head.append(`<meta name='robots' content='noindex,follow' />`);
		}
	}, [])
	return <>
		{ is_log ?
			<>
				<h4 className="titles">My Log</h4>
				<p>Here, I will post whatever goes on my day—whenever I feel like it.</p>
			</>
			:
			<>
				<h4 className="titles">Blog</h4>
				<p>A collection of thoughts I find interesting.</p>
			</>
		}
		<br/>
				{blogs ? blogs.map((blog: Blog, index: number) => {
					return<tr key={index}>
						<NavLink to={`/${is_log ? "" : "b"}log/${blog.id}`}>{blog.blog_title}</NavLink>
						<br/><small>{new Date(blog.creation_date * 1000).toLocaleDateString()}</small>	

				<small>
					<div>Tags: {blog.tags.map((tag: string, index: number) => {
						return <NavLink target="_blank" to={`https://www.urbandictionary.com/define.php?term=${encodeURIComponent(tag)}`} key={index}>{tag}</NavLink>
					})}</div>	
				</small>

				
				<small>
					{blog.authors.map((tag: string, index: number) => {
						return <p key={index}>{tag}</p>
					})}
				</small>
					</tr> 
				}) : undefined}
		{ blogs?.length === 0 && <strong>This page is a work in-progress; I haven't written anything yet.</strong> }

	</> 
}
