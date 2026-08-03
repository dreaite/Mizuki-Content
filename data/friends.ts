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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NQVC7RK%2F20260803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260803T193902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIHd9Nym1lpYGfXK0IPyqM06vhCygnjA3h6PARSDKfeeQAiEAj%2BEFpWUUiEUJbRv0BoXse98bZNWpxdLuIzD1DbR6itIqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIp1t4dWkT5i2tF9%2FyrcA14HOC%2BN4ndKRVzEZY%2FDEdI8dxxRf0BbwGzoRRyN3Lu99mMXSqHSlJP5dS2dQufLexxTUfWTkmXYLRD%2BjNtbqWy%2FW1lp5crWdXV6cKkw8x5smf80gARq5BSqc4JMF6Aoaks4Od%2FSYXkqBRbfTYLMdz1mh7VKzfhCV1S7%2FMl%2BVTLqsyegWcy1TfmVjJh1SNTbBii0FpIWmfVZd3%2Ff2n75cz3Emx4t%2FQfeJbW381NUFtrfR7A4eodZnD6lPNJ5PyOH2HfE2WHwnuhqp2NdAPAjuH22cShWbDTgmFU%2F2TdnM78DTZ6E8XgR5tRLAl%2BzU%2FFQIPH0UURGWRzSWne4mQU1eCWwyRdR8rmejKkbQ%2FZ4nc0HtfvRmXsTdEIshGzKB6XxLdEBMlV5dv5QtFDkSn5gtcRw8pE09KInGPI9nZwnod6RCrl7POHG6Po7gckeHbPYFijoeb9kROkz5SUzx15WKoVIJMWh2fs2mlRe0JpXhl5Tfrp3%2B6TTdfKTCprJGzYI0wSUWYVfDhg9qQx1NUkOGhL%2FB1nZxWyLiMxo8txWKpc%2F2e5Z7RQp4NZD4E4EhVeKlk9hzMn2%2Fu7HiDWmGO6U5bs7TgRDljqgt7dI72bscRYvvrEfbieIeYAVP8YmMPjGw9MGOqUB0t48pSiOdPIA56pW93QuX2Z%2BC1sY3iAKIKY6vK4yq%2B8O2GmUjZBROLWjH7MDf5tJ%2Bnfg1%2B9yPPaVP%2BrmlG3AFdbsgRMzXfb0cDN6qKV6yCUmJk1L%2BFapzJzqRK2iIV%2Bal1P9gdQF5FsO6X9eQtpuMLx8DZrZNRi6y0aOxGc7aaJ8GrgpaV6mlm6npFL3kpRsFahH2bNSSQ6CjLLEexA%2FrQVq3xGc&X-Amz-Signature=886ef6d8b936768715c1a30570ff15e11bbb3ac2c2d5766e38328dd109e59337&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
