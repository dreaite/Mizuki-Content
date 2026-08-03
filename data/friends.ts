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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SE642FHG%2F20260803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260803T170858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIQCAyPrrZ%2FtIH9Aif369irIEzvGEsLqWdBkxQOa%2FYk3LtQIgXqelmVovLmcpxINlBHx1eqjHIlw2XE1YpgAzG4JVNXMqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGd6aqJTIzEvRTOgOSrcA4xhlSyrKKFr%2FZrIlAi3W0%2B7NegseXtijfFq7IVrrl%2BFxCYG2hjOjZXFGfi26%2FwhSKFea7Ci%2Bs6R1wqgmMaVP7CVucgxLCyR%2BxHUPmX4XdQHI9%2Bv1%2FvBpnBqJWiVRQ63pY1pMAUGxh04qspUQVLMXHLrpOp5YWGEoxzbVcTMirT9pdvlUkls2V4S7Dt3sMmp94WYsbU%2B7mHIjbHMZACvKegeyKU%2FKoDWo1cV70MS5b%2BKkX39SSXlGQC5JWr8Sel5PpeSMu6LfYMh4j7WIriGpOxIXzCvaU%2Bc8a436oTEwjsSNRFBWjXqWANYO%2FeK3iVzEMi3gTZSr0sd4YJwjuMIv5NdHmanbTrPE%2F1KHYZlMZ2tsjKQ2XSgZGaoNxrL26fTncan7Ducg8OAQc8a1qKfXVWDqyjV57c0t1J%2FLUA6hBNqciH4Lc%2Bir45BjeB5bdTKcLfdVe3B2Iz9Kl3JihSLqbJoV7HezllQJfZ8tsPP8EgrErkMid2INsLNkHuaWVoXw6zDfJIUOBFQAFhxfe5jZ9fOMRl4aor1ibufgoGH6jtDbh4MLbv6%2B6OFxF3eawtXfIn3qi2ccuH9qwJHtEyxKEU7aGQbS5q81ACuwSeeQR7Try4%2BngS4QO8tS%2FlyMN78wtMGOqUBnj%2BjNCYcO3%2FZr8whrIE2nGNXTqTvgM5m8ZcboNBUb6gO20NpDVsDNIhRaBzFa%2BxulK1dR%2FiKWzOUHIRubmXmN4bo4vagNDib9aX40aPs4jimoB8z6FYRtH8N6EiXatrb07kvheYRKu6nWoz3jOAA6XCYRo6ZKhsG39435lfuKd71WerMAMJBWkJ2YIFyNkKQLZYo4ZeaT96XEtKRwgcx51wbYAe%2B&X-Amz-Signature=f22e76067ccbc78e93fd7f2096ef1123388a688a50fab9969974bc41ada1be8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
