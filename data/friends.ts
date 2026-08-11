// 友情链接数据配置
// 用于管理友情链接页面的数据

export interface FriendItem {
	id: number;
	title: string;
	imgurl: string;
	desc: string;
	siteurl: string;
	tags: string[];
}

// 友情链接数据
export const friendsData: FriendItem[] = [
	{
		id: 1,
		title: "且听书吟",
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7NFL3AW%2F20260811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260811T100537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCs0kOC3g%2FeN3QiB%2BGvg7ncoonaNEd67Ki6K6VEfe9p%2FwIgYLmNMP2HNJbFsoYVwJdogV8yskOYJxi8J5S6jUVZb1QqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBBJH7jz2Wc2vUfM%2BircAzNPC7LBrfCkFAi4kgvAW8BViS8JAuy2YsHMHNd%2FFi9%2F28W7iT%2FQ9Dm%2Bxf08%2BxXnmszLiA3%2FSlIajHP9CbNUstPGeeCe%2Bi7r2%2BqQVvWl6s6laDFOv4oVR%2BoI0dVOAbAfF7SW52U%2FDbTgYrrNRaTckAPD262HmuAKsQUlBFbB0XfoQoopVsJKmDNKMUIqXt6EQyZeJFj%2FysEnPfydXU8GVUMjM%2B7pCiNGExW7lc5vYAxmbg0MnJ2CCeu5IZBwxmtV%2BlJ0aKEqYn7U4ASWV3LQPt%2FaP2P%2BHOs%2FnbZuzNw%2BiILj9q85ydlNxZQnr%2FSh0SXcK11snADGlfH5wKV4FGeLfDr3H8zQKs8ZkKlO4s61v5TMYuhIq%2F%2Fxc81dSGbu9114AjZsrY32HKgu193R0Ygz9RyNiXuAwxTIcB5a%2BLWEOVx%2BO%2F9nyM4RrworoqPe6fyUDrrpAa8jyF9tul3BlSV9h%2BhjcAH00ydArb%2FykrK1TL%2Fr%2BwbtsXfeCB%2FAQFaCf2%2Bb0l4uOBH8KG785QW3b4nwo6vnbFhBknPDDYjr3F2N5duMkXtFEf5c%2BGYzFGQj%2BLhsWjEwwTneQjA5gFDVeEfSInfdrx1ujTmKOEq0wPZImi%2BsJQxtQkbkT5oC4ckqMJnN69MGOqUByw2ydD8BXlTwv%2BGQ7EsNSfkLQZQgLTkfAP6Co%2Bzto%2BpJQspOI257OyiOJUn4DhUw4%2BYSbQhknsY6wKecsgepUDHHJ8Zec5lYlv9qJf%2FkP%2FOcQNTHVSJ80MilW%2BUcVQ6vH8n66PUlEazIxi7jKWlz953Q4DS92OLfzNyTAjppGcjTcgjBRVISHKGBgBfO5tU1qdlrUehxCvPUOMDHwsFG1RiHd4eP&X-Amz-Signature=98529b2183b0bfbb11f8def92907cac388a8b379743be677d93fe435b967b6b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
		desc: "诗与梦想的远方",
		siteurl: "https://yufan.me",
		tags: [],
	},
];

// 获取所有友情链接数据
export function getFriendsList(): FriendItem[] {
	return friendsData;
}

// 获取随机排序的友情链接数据
export function getShuffledFriendsList(): FriendItem[] {
	const shuffled = [...friendsData];
	for (let i = shuffled.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
	}
	return shuffled;
}
