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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5KKLAIJ%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T111653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFMomTv1%2FYh7yYnszpcgzaGjJrveH4q9rtkkr6WC6MEmAiAE0qtCyYcxl2O8GagtJtwR5jpmYlnyne5Kldf8GaRO0iqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4q9wl3w1pP4wbQ26KtwDSSEaUcprAz7KQ7AuD9P5jYb2N5LSQCNX7FylCun4bDZ%2BlPGusgi1sHMQXBzmKLGg5JCjMZFYObLuAlO%2FOjYcEp6bsnLZTz%2BY7B1HqWiO3oZjK9pgGQrJ5khdYoy7SVXORZ63VtXXmfGvPAUHAT8ISW4t9UDdCtiZNQwXxUPJFn9oylfcvvrbFU4JdRAMIcEUvw9LfgbAaaGsCQeokcnbEilviDV%2FUcDklZoCE0%2F2uxD9uw8BCU7WphfB3XPkznmh5bM7VVjhh3ybzn%2BlgqfVqfuQayMYlbE2dffdbkoYejwjMUdCpN0%2FMAPHQi%2Bq3Chx2HVXq9uyqnGVSih2L4ohsrH8CUFYO6Nvz2a%2FBNNP1uAgt0a%2Be5ytRsLcjrtOJ2HyUhBaYGdg2YV5qjXX00RiZAQsrCwWiVjN%2FhhyhVpnUYeqbj%2Fq9dcArjzwuhsCHlAXSdYGgiilFjKcH4Co%2FPHGcXRglhaPBnBYpnF3xFqBIaIAl%2FYX6bxFcakF8OMuHexEdC1pjUrlDUb91EQva9Twaynhs9z4yhKX1BeX6eBNIhSlkpRTfWX%2Bm1h1hHLLv5gQNUQmbRtVoz8VcOQNIRukPnkF8SRmsyhB%2Bb1zlBlj1VAIu12KqYdG%2B%2Bo3p9cw6%2Fi20wY6pgFQCU22L2vhFAeA6%2B9yShopHyB2tGU0g%2BqhjQQt%2FwEiKnpZb6eibHJoQMNDU65C1jga%2FSrgt2KOPv4EpZ8EM8w1Dxcttx2lJb2Vh%2Fr3LjBwfrSuU%2FGs0G9U9AlZEWOdQzVlcRn6oHqQFmOrUtCT5lwlr%2F3X%2FQU9X2CNeyP1FsNDXWLA9wrW%2FtGqxxVNLOouQBwwH%2Fony%2BphSdAYC0YPTkscjllMnnuc&X-Amz-Signature=c4df3fc6a15e566ce38d4357024fb08979bc4389cade78b466496d70a2baf77b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
