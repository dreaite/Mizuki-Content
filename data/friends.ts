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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWDER2JE%2F20260722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260722T192250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQC%2FJN7ZeOH%2BhwnEiWd6gLdX2lnhRJJMJ7fc9Lq0K3cp1gIgarDsedCaOsHFJeB7Ch5XyIJa%2BasuqEBYraBP1B8s4GoqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPg5AcTqb1Ttxftn6CrcA1SQf4w4AHX81%2BP2iZaPu4kDM99ascBXoqj5MYqxWtdN5ifj1F1Nvnwz1c8liFWTI3v%2By56WBRdmp7xAP5%2B3%2Fx7lvYHo%2BHNEy6GxEl5Q1HO%2F5JAcDWZlunYsIz5RvpIhnkfRBwNFyMww5Iqf1ACpI5Zl6C33ge8azkKyg%2FspzWviNp%2FhN%2B4OGBDQC0KCcdg9WLaxTe6NVyyu7xEcOQ%2BNKTlybTi7EbgDjAWguuV0VJRTrwbR7xMCVPA%2FTmXsF8x7s0g6Sogx%2FDjh%2FoNxMQ9%2BJVycLlcVWMGl2ktHXu3AsGOgIS7tdrBtW2wN1TonFl1%2BTdP7P%2FLQQQduPdEOfG47VpC9Op5HWXvww7ut6nQPtVQCmtZcHgvTDCKW9rFnGU6kLfMtJzR%2B5kOOXeWn%2FeEGfLimdA4W%2BNn%2Fl7X3yA8NW%2FfZV%2FjzBsFGtGp6i7pSSPtCVHEJi%2BXOuY1UWDVt2XupS10H0Vh0dN1L%2FbgzQ8ZIRA%2FnyV4vlOQWCk37PzyvkoT3w4Pyt53MpWoNZsW0Xq9oz%2FDV%2BelTw9OuwqHL5VIyoOFRE0BM7d8wKBysBs8upcEvjoK6pZbvc0W2UE4WtHxbLEqTjt9eyaUKswyCo9QBBE0QAmK7FZMwAfP9WIfGMMjyg9MGOqUBW12XwzMwCRClkD3Tp8H2ea6ymgqzDI1ZphBPzW4IdDBHOzD1RKEIVXr6W2KriiyUZqxsDyuFuwEV1ZJrUP4bHyRJKknSgmQpVi2bMg9pOPZFY4wA5nCSPfy1B4SNfP6g4aRTcgNP4xp4aXUmNpfOB9IWwBYmQmKqp6hn4PzrYDWSy6QbVTEox99Z%2FBgDknFK7kWR%2F5kAUYCPhPU35wPmbQpfjV0y&X-Amz-Signature=3424598d2f148a2c687a36d8c34f0953985466ef5e41ae4529f2913f19458af7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
