import { useParams } from "react-router";
import { useEffect, useState } from "react";
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
							console.log(data);
							setBlogContent(data?.blog_content || "<error>not found</error>");
					} catch (error) {
						window.alert(error); //temp
					}
			}
			fetchInitialState();
	}, []);
	return <div className="mainContent presentation">
		<div className="default blog end">

		</div>
	</div>
}
