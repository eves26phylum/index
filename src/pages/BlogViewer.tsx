import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { MakeBlogFromXML } from "../components/makeBlogFromXML";
export function BlogViewer() {
	const params = useParams();
	const blogName = params["*"];
	const [blogContent, setBlogContent] = useState<string | null>(null);
	useEffect(() => {
			async function fetchInitialState() {
					try {
							const response = await fetch(`/api/get_blog_content?blogId=${blogName}`);
							if (!response.ok) {
									throw new Error("[critical system error] response is not okay?");
							}
							const data: {
								blog_content: string
							} = await response.json();
							setBlogContent(data?.blog_content || "<error>not found</error>");
					} catch (error) {
						setBlogContent("<text>No blog exists here :(</text>");
					}
			}
			fetchInitialState();
	}, []);
	return <div className="mainContent presentation">
		<div className="default blog end">
			<MakeBlogFromXML blog_xml_text={blogContent || "<text>This blog is loading...</text>"}/>
			{/* {blogContent} */}
		</div>
	</div>
}
