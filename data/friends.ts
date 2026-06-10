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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TS6BBCK%2F20260610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260610T180151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQDRAyq45tsBuR5zDK93i8icDG4WBokThCpTT2fRF%2F9KLAIgWI0TgoM1bvr0c8kAovE02jjvnjJSl2uEsEC5grCf8QwqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJg2pDt9k38MyWYiQSrcA0McpR3tdVqmb8RhG9ItPTIXV58fvCBFFYPzUSwRRtx1fm7JcQuuA8PffiXSeNT3dQ0H%2BdOYMaRjReuYsMzV0mas2ZLaMXqWzKh7Lw9kmB4G9%2F4yqxAy1lD9vnNVs8RMG202L0DHEA3L3ew3bygmzpiEfJoxt2ZWNPzMKh%2BIJBUGJH0%2BnvNi%2BUiwmvPrqZYeP5nHkA084hEcAdOLPzwkSWdpjvs0vu3XwTe82HP%2Fd5%2FqpHtMgNsjOkgeZe8w3WeC%2FHuI5IEi5chCdcnlimulxYDvpUvkBZNAB9lyCeXLUMdeTPaKsch3zajGB4dbAdTI%2BAcURTomkZ1ELcYM9wkYcoDwHSlSt2arlzOD1jSRt7wcnYOlpSKrrzs4aIkrlg7LxcvGjJXKjK4PusC57hcY9gzM0UdOE%2Byt90uevGy7fxzvRE%2Bmo198Mi0vPbFQyTSdzcCDApizJrJfu0foxFdTKgLeJslRuG07mu62VQjECYbGafDAO6I7YspXdT5eKK64h2BQ2N4cT11Um5mjt22wyZNjXw%2F28e4F0TYo4Z97Mgq98ui1bY3K5VDg9mGLyi8z%2FNLiyj3G0htJpdV3CWFc%2BT8rx4%2FNGfaN8N18NtlMQ%2BHBOSRC%2F%2B4vjr7pmgstMITBptEGOqUBwLdQUiX1XD97gGGAdwrCQmLsJcWM1Exffm%2FGnDuQL%2BFxoieeOPbOvJZ5SkDKy5QYwd6P3y%2BeKT0rsbbRfJXwgscBAFlppagK3bAvSgDI8rCirZJ1UsTedjq90zbBk4RTP7jtusYf9cv39uf8xamFtMyCoHSChlhLM4leSuWwtKigv%2FExhmWEZflUVMiPq%2F44iw3mmLIj1IxqWH3j2kGfuTm3nDH7&X-Amz-Signature=915bfd6702cc034d9a3e574e9ac2e5cd3b130c214c260328a8d40a20cd137126&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
