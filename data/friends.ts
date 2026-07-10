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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HWOWCCU%2F20260710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260710T220500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA5aFC3k7IHI%2F7%2Btrw9rTufjNbn0jPcDq7gniW9MtA4QAiEA9lGwpsuwUNiUGqFKxm%2FO0%2BJfp7eVR42RAc%2BZveR8zaYqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNZN%2FKJkIUbcYAnu0CrcA0JB1QYF%2BBwKr9F0pYzEIEJFNlv5a%2FBYbWqsK5Eii905ME2XIuxv%2Bc1zxxfF5sqa3%2FNhIQyDFbMeY1HIBnd8fEhiwmyYwQqAna%2FMKE959M8UaHFP3yCzRPVCm1Gqx3kKqtJEax5CKifqYLAUehLbyz%2FgQPNFisUQjF4eJ%2FY9PqXShu19LFwS24JzH5erVImhuZXVQXoLJUeXx%2BvYt%2BIeydieceGPkBT84MjKcsl%2F10NQgetS133fknjbERL8b3caas%2Bwz1951y8%2F%2BBcdhmjKAYnp5AsBsRTlhTjsBnMGvJ5XSFwFHiB3dAg%2BN4338vzGhL4rxWuzqk5Jeh7t2ph3PifAWbDcVwGghaGbnUt33C0QhThxAOMso4aXijMUFmNnq2jv%2B2ug7etVAOdT0PJdacIvCmEUzKYL%2F%2BicepPT8kRfz0gmjnzyQgFl4Ht0MJ5qffXDk8sZYgn2wv%2FCAa0IMdxLvXxCjosFBwfCT1m6nCxGfePCrS1dRJv1MCPkQjjrgp2AaabmL5qhHy%2BhXivJRmuPSY0EWknIzsrvKdV4SqDzeRfmlNceC0VaH%2BIydBPcJDWVHRIN0nIsCxYovTPV6IlRni5vEZhAnvpTuwiw4BQkqPZKP01RzOls2pZoMIDTxdIGOqUBlbhMCwBu2oqxjVQqi6WSA7e2ScsS2lROlfIuw2O6uqEQfylso7MmCTYWwouj8yLZNBXEOSAB%2FWXz0wnqYwRQBS%2Be18zWzjol%2BVLK%2FSZZy0ITYS%2FZB9dgueDefP9946tx%2BKyUbweHYq9qsfROJFCNay0axue3Q0NvtWyavK4N9R1tLQKJJFrOCZVCSrk%2BLEZ5d9qJbvUM2eyf9Dg7LanOvJB6BUKV&X-Amz-Signature=ad9b802fd8995ec697361aa3b4c017987014dd81c31f3dd2e7d4a55b7b9732c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
