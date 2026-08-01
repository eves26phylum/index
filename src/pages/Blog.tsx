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
			<h1>Blog</h1>
			<p>collection of thoughts I find interesting.</p>
			{(() => {console.log(blogs); return <></>;})()}
			{blogs ? blogs.map((blog: Blog, index: number) => {
				return <div key={index}>
					<NavLink to={`/blog_viewer/${blog.id}`}>{blog.blog_title}</NavLink>
					<div className="inline-tags">{blog.tags.map((tag: string, index: number) => {
						return <NavLink to={`https://www.urbandictionary.com/define.php?term=${encodeURIComponent(tag)}`} key={index}>{tag}</NavLink>
					})}</div>
					<p>{blog.creation_date}</p>
					{blog.authors.map((tag: string, index: number) => {
						return <p key={index}>{tag}</p>
					})}
				</div>
			}) : undefined}
		</div>
	</div>
}
