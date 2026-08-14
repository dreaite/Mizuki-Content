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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZJ3MYPJ%2F20260814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260814T100344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJGMEQCIHjuprHmkS%2BcDZS9N8Sn3Y9wyeQTwDMRGMxnag20dLbeAiAy92%2Bw1TVUqfqT3pGSQK5DrgfQoN4mEodZEuvkZbU3WiqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrL3b4uWt1BySxITUKtwDp3RjjmbCqh%2BrgzZCapHnEmDqIOL42Bv8bujGH4HIJs7XgQ6kZ8xWGFBtGy3F3hSLQ3q7Hhkx3Em5P6Aeoi7yNoVG4Bk0fRYQU3bsk3qNJ1WFuVsdRjmyEv0pFCJJ%2FjQlgHDfX5n3fAlIgcQ2vRyNMw8regD7LXTaQdhGdpJ5F%2FKbfv%2F4JGonqTiRSH5oJVuGEL8XHatkWZIOg6I3sDgz1yO54CELbKYuPcZ7B8dR7tlDbcU4BSogiUQkhEBSvO05niXB8FB63%2BsFpAgOIud6KWlaOUenjF9tIVD3Dbix%2FbWkPr7rfqbR8bihdb3OlxM4CnyaaH7xOGxzTbgN12npOOVbETQZDo4aB2nDKPlhfNN0Sm45yJuV4nTudKvwsqDFchul0mdAMuV16dCcRSLQ%2FGnvZoR5ZjIhqFlhkU9C9l0PvxgbQgqeIc4B5FG8dG%2FIGEJtS%2BGVhNUjScXZIeqYA3RqOr5Q1ikz1BlKJj2S0b7tthe0BfLEOXx4wJg8halqpCoXSeK%2F2GhPzylNMy%2BqrCwo9tGQIyLBpK4dSs%2F6iW1qd7R0%2FmnQbH4hvs9iUTyD6KU4s3lKrnz4BD71R8TqKjlCUyFyTcpqHiq33BxKydi7Fk3wS0lVnc40Wpowgp370wY6pgFrogrWVdg9Uch025WfFRkur946E8WLbdQplngVn%2BspXgVCWqQZ2EmFkBQzEtUx8ub1NRVSj1LbcxfK5zo8kcyn%2F0G3ViPBV1H2EyBLBmz8Xd1oEK8xTgeNpUpmSpARoIVD3M5V9blFEdYrIGcX4l0BIBr4LMO5yF0P6d5rU6WQmITXYMg5F7XOrljt8a7ippAPS8PCZK0C30pnQd2OCnqAJ9lR%2FyxD&X-Amz-Signature=fcd1acc5076467d623827c145bfd147d7c65d737219ad5fb108b5b5de20f519f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
