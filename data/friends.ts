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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTD47QZ2%2F20260713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260713T102820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIHrRUNjz5anqOAQauvSwlaWTG7kVPCqBvDOMydHQn9dLAiAp9b6wDiRGLVnbjvQAzQvSOCCBLHfAyD0g6PNMx%2B4XMyqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBmjKyJ9gDCs5Gs4aKtwDwDyzfZsbkJwMP7VY3md9eIQtzpbUTRgPM4MJPPrrYWdQoS%2Fpd%2Fntmh7DiKcVSd7PUomF8uLP2J5k8l6Lj6lSjTECLpi%2FNVSw3mBrJZ2QNRD%2FqnIQGHjVWYrTvbAUWKYHwKUNBqeuH4JTKkAUdICdw6AB4BVhgK%2BbFRWJqqbij11BC6Ys9bV3t0zOnTZ0aimqIfJzdWigxVBW3BQuIxbri4e8PcI%2BAztFYu8Lrs5Xlu%2Fj22M%2BQ1kbLVVCKbhhX4ccw4GwdspE0lp9Sw%2FGjQaJ9r7%2BhSs3uUL%2FuSS2YOKSS5V%2FojbghNN6fU%2BftQb6nJHEWs16jW1aN2w4n3%2Bt%2BJchRaOA3Rw8h7XUykxgHyryB9TLRTIIMTaEIKJYHLpI7SmnND98D5d5wR%2FbqilFy2OAMAgzMYuYR25KDZ5ES%2BIjD1uAd%2B9MeVJLpR2NEdCXW%2FHDoW%2FYnlX5FPk9jW5eocCg6DBDvSfr3eH47dOJyT9kIvVm6m5ArnXaQtsMxcwd4BhYPb6dUEU5cEgZyfE0vrr65HfM81ScdMFYM2lVGdp14TikAT7KxoNv8WHMBRqLONl5IMjbAX5Tyzrh2dut3fiMalGO57huTcfLIsTsRlSIjmnHICGo1IXDnyk3meUwuM7S0gY6pgHxXKyprzRsfTAgyH25u0lJr7MIj2yYVIxoBB3YAknU5fDU7iOo7%2FCjhsCYQpf7q38z2grAuEOXbUkLNVcZBwlL4Ytjss03TWwFIXAofDvQXUJkyiUipJbAdLoCf%2FC0%2BVGtJwN26KQR6Wll6GTTQdH4svG2B%2BbSfknF3VnSdAUv5I7iXOonSyw6she7e03U7uo8j6LYmGwzGPv5qTIV%2Fs1UGbV9KxTS&X-Amz-Signature=1b17f836a712e04405b08fff11ddbf674ff80057449b2ad3d772b2bb5a6f455b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
