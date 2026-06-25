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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3VT4OHI%2F20260625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260625T214500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCq4tzMoOgQc1SoCeTsh9flzAKUePZVy6NHkglMN3szvwIhAID730Hi8smZ2FozDVcTiefVp8ZpF9ujpKvrGaHgNXH6Kv8DCFUQABoMNjM3NDIzMTgzODA1IgySPaKhDLLk%2FqTi0nAq3APOnkj9CsGHyCgArofK5sOieJoR%2BLLXV112Ou4CMXbvDjyeM%2FmLmIn0394S4vnlsWNMNBfpkvcPv4Xqxsbrf%2B1FztV%2BvvLxP5OzK4K9%2FAIrX4%2FDuhICu2sqNz7y%2FxyGazwDAUTZIc6d%2B1hADu6MiEMxSrO6B%2BMNHbvAtCTZ%2FB%2B%2F88TMXpWcNJnVm7BCTChbpwByxNPwY6mMdxo1Zg4E2KcR0V%2BbpNs%2Bq60d5DPrLMxEbNv7r2Yvy42hmvhzhAyIMtVVElnZNW%2Bm24zKvDfK8rmeSyVSx%2Bbq7GMP9I3A4N2G%2FcIcMn5Tq4npERhgFH2BPcUrM8XAjbYmXufsNfgjpSIb5GUp5Ns3b9NIQ1Kj0tuwH6KwE%2BOvU%2FE%2Fog9mZ2J3y1gyBXjVmbC%2BkZE59xPMMYiHsWqGAsKvMKWCemdC%2FtIwvOYY0dCzLcVDYrQ5T6AsKAgjBslmW7kOPsJvSgQxwJBiQcJbw9w5AHyqyb4th7bQhaUbPysP13ieLgmNo1pTFGHInDL538skQxM3bSl2WlNf%2ByqyIkV62LFbxx6aGxdsFzMlUVslusdNmq1JtUT8EiAuaPWfY2sd44zPMHcDi1n2ainz6mZK331IxfnKTR7lzSGTWiZxCGlcQAtFTDDEkfbRBjqkAY9UgDs7hD7I0X9MEocz%2BOZpj6eNWD9hr6WG9UTLAVPHKymFjmBXI0XJiKIYKYJLfDr2Uy4ieChkmjwZk%2BkYGCXIUdtdgrIF1VhLL8va0W158WW1zRKvEuNgNZD1GXiOvARal5tVqRal%2Bfbk1mHFPbvQ5dCYaL0BolRF627oxJhKLXBLUC8LylaYY1RN%2ByAftnfLhcmTjiBFA67cB2HWrXRDyOX0&X-Amz-Signature=682a22082cf53495f33c0ca8cd433ffe7fe8d215627d8b4a78d7534b04183dab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
