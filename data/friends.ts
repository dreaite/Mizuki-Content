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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GCGFVEF%2F20260813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260813T131413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIAkNsx4AM25cQpFFXZ0vw%2FV5ecL63f%2FbkfkFTphoDcl2AiEA35AgtZVCImBBsP7i63q%2BR3Bqh0aOBcoUY1QWEnBy%2FGwqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBHLdEDzlHFAlhQO4SrcAzSru6ZBqo5XCjP9WBMo%2FTvJ6rxQMygaNAuV75EbsXL0YnFTZQYoYQViAGgkaGr8TZZdLiabFwGMpugsSAmCzUIp1Apod4CTzgLzFO0ugVAEgqWVsdeG0DOphsTVEKcXiYpff4Pf9in4NCFhjMNsdd7X2K5OpSrHnemMhnWe8Djr%2ByfvkSTk1eajLw1Hoxi4OEG2uPmnXVI3JaNnHUx1NIJ2qcOf%2BZnxgtu8J1M%2F4nDdBZhZvCUvNnGcAx1RPFLhSWnoDfeIAi%2F0lomwTmrRsvtIJBtokqu73hUkbS9T%2BEUClL%2F%2BkJmhnpmaoLYa8XYitdclJVpUaznfmaGUk3XR%2BVswMTqHmI4lf2nu6hVCsgfIwR5nnFj5hcjya3ycIFYxHiZdgwsypb%2FMlvqNP5rAgpANJQCDHOu2xA1w3eFVtX%2F0dWl%2FyQPAyFYdoSkFtALUxD3mqPIG2SOZ95%2FIVpPB7Bspzu1MWNlysTXuUaWcUg8Upvw6ADh5VSUpa2z87%2BNqMETIKxYp7Wexc%2Bmfz7b0MB9ApvhSebA%2BEiTDrbi3uEUGWOycroZf9hv57lJpSykFiMY1RlQX%2F9wZvjEPhaxeS%2FhA5qDJEIPYb1HItehgAhJZI9e%2F1VcpNYNN8BOkMPjz9tMGOqUBaVQkiEhKax%2Bh13iaS8HKDWO3u9zWXoEcJYpRm9jUp7g7NkVLKrevbBTyUGPW9DUfB%2FalSKTne63qUcJ%2FeMPdP4wbGIMa2QE0LX6FDq%2BdzsUHs26700N4KrdJ6nOetcuwq%2BuXJWmZ4rKgqrdN0%2FLiSHp4%2FL88X3W1%2BqCkI53C9dwYLtgikQZFj6%2FWkg1OHnjlUMHR0XVouaJ5hYl7FTeqfR7aFpuh&X-Amz-Signature=3e5d8c955c3f9b66e445ee597f4fc8bf98f1704bf6e0eb2d5478bf2c5e3bfb53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
