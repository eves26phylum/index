import { useEffect, useState } from "react";
import { NavLink } from "react-router";
export interface Blog {
	id: string,
	blog_title: string,
	tags: string[],
	creation_date: number,
	authors: string[]
}
export function Blog() {
	const [blogs, setBlogs] = useState<Blog[] | null>(null);
	useEffect(() => {
			async function fetchInitialState() {
					try {
							const response = await fetch('/api/get_blogs');
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
	return <div className="mainContent presentation">
		<div className="default blog end">
			<NavLink to={`/blog_viewer`}>Blog</NavLink>
			<p>A collection of thoughts I find interesting.</p>
			{(() => {console.log(blogs); return <></>;})()}
			{blogs ? blogs.map((blog: Blog, index: number) => {
				return <div key={index}>
					<h1>{blog.blog_title}</h1>
					{blog.tags.map((tag: string, index: number) => {
						return <p key={index}>{tag}</p>
					})}
					<p>{blog.creation_date}</p>
					{blog.authors.map((tag: string, index: number) => {
						return <p key={index}>{tag}</p>
					})}
				</div>
			}) : undefined}
		</div>
	</div>
}
