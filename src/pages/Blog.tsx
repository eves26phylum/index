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
				<h1>My Log</h1>
				<p>Noting what I have done</p>
			</>
			:
			<>
				<h1>Blog</h1>
				<p>A collection of thoughts I find interesting.</p>
			</>
		}
		<table className="greyble">
			<thead>
				<th>
					Blog Title
				</th>
				<th>
					Date Created
				</th>
				<th>
					Tags
				</th>
				<th>
					Creators
				</th>
			</thead>
			<tbody>
				{blogs ? blogs.map((blog: Blog, index: number) => {
					return<tr key={index}>
						<td><NavLink to={`/${is_log ? "" : "b"}log/${blog.id}`}>{blog.blog_title}</NavLink></td>
						<td><p>{new Date(blog.creation_date * 1000).toLocaleDateString()}</p></td>
						<td>
							<div>{blog.tags.map((tag: string, index: number) => {
								return <NavLink target="_blank" to={`https://www.urbandictionary.com/define.php?term=${encodeURIComponent(tag)}`} key={index}>{tag}</NavLink>
							})}</div>	
						</td>
						<td>
							{blog.authors.map((tag: string, index: number) => {
								return <p key={index}>{tag}</p>
							})}
						</td>
					</tr> 
				}) : undefined}
		</tbody>
	</table>	
		{ blogs?.length === 0 && <strong>This page is a work in-progress; I haven't written anything yet.</strong> }

	</> 
}
