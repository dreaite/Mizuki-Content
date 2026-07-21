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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JKPHNHB%2F20260721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260721T192525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBDISXhuGJ15xmZR8pb6PXIhlQ9AtCxThgsDoyF4n3jVAiEAh1rAaRU2O9PYDgbMJHvHVYmZCnPTlpNWmFGOf3b8misqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKtgSTqTwX7FqZb%2F3CrcA5AxgFewVvFbTDtVJ%2BL%2F9YL1wGCspoin6iO%2FIijVzZRfXZ6TIIULqO%2FZXAnq8bRvRk66WqwnoJk8kUtHIZunBM7919DtwU39fi0JiKa33GcnNygRmVeNym1VBzaDXPVPNSc%2BhxBlGf%2FYt5%2FjGJY%2Br%2BRmYFzckfzVW%2B53qnJAmA1lJOCkOIvHdpNOk%2Bza7pVE1FyFmj13r%2FyAEgfrLMzmOxmyzxA91l5mN36iDh3vB%2FNMmo0yhOOa8rDILsM0Uf51WOVDXPfnMjyaRq6Mk%2F8epWh9E2xTfw35zcGMRl2HX4UtHKO2ize2FcIfQX2ANcUce4Rw%2FvZY0wJH0fBCGKHX81zk5IuqRqxO8wuKeIToW8MrItxQh1dTi1DIZq4iJsly%2F34wbqUtrep7u6Rk6XmRw5IbqlyxtA2zOHKcyl2P9TsSNLgsiY0R%2FJFnt%2FknCZ%2B3k3BQcj80lm2NgEYWYVxcqq91bi%2BryDNm91%2FRMaSv2Cp7%2FDekLV%2Fji92K2gclYEtyzRyktbB8h8lXF4zYOB7zUWccYlEpFw3uML%2BDfZN1q25pgogdbTdb9dKxl%2BdRyVCK33qUF56Lrfl0YYVrd7SEKopw9Moo8i5x8gIu1%2Bz4ZuMzIx5trFm4Xoku0KvpMLWs%2FtIGOqUBemmG3cXs%2FZhU1cPDhw8MnTdg7V0uKF%2Byl8QIvk6IHIECgPd85Mh0uu0M%2BUleJfwFmjvNNS4UdX1ycKJBZrCzMy2VC9Maq%2BTeDLProJd4Q0wErvO5Jemul4I7RNNPiaxJaZrQzUJkc2rWd0pgccZY%2Bys%2BDDDE8ba82fXjtlh7cpMCS%2BbNgiqPybF5d3eKGm%2Fw7gEcRVlaDoE9smpD0ThO5%2BzUWn6j&X-Amz-Signature=f350505371f205979b488b85ad45ab7df0a17b6002c54fd15eba7b4ae88e82f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
