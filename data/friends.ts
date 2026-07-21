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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUHYXHDH%2F20260721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260721T135438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAkV5CYAKqOig90Cm%2FpG3VAuzZ4JKFGUIrmC9eaQWMCZAiEAuVMuTdtIuDZnxFKuCZBuR06stY3LuwvkoLvZi8OZ478qiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKVElJa2QjOlsqvytircAwf0%2BuS4mTw9DpvDa6LUKqA00g%2BL6hls9c3%2FSAl7UuHv9RE9bbPxg44zvVLbctzpCNKG%2BrAuFlx%2BKWo9hx90Jh1beXSNrOkUqsMzBSXw1ijNa3bFtFFhZxwMzB58o9ojWAh5tuJzrAnpmtL6bV3FpS9VkfVvyTSxZJ6CUlsFz3gWtzI%2Bvv7JgMKIpn1lbI9q%2B2J2nLMBMN9L7%2BxlodCHA%2FOoUZmSf9%2BkZ3dSpBfp8M3%2F61W1SiExt22dKaJy%2BLOzEafabxXIpLU59BT5ybCZ6MO7vlrg3W75%2FBhHa8IvnGi%2F4kKXt4M9%2F81hRet5zpLssTHGb8LXPnDZt6XdyG%2Fmiloci6OGuo2ANp3o28Q%2Fp7ZsQ%2BzXY99hdzdUVCAF%2Bk7J1H6oFfn7W7O6oRGX2oQQs2a3Q4ImAlbs%2BoqVnLaAf76KUSC7tgZBuxgS4dj%2FbmG3HnqLKSSu%2Fbfr1CQ%2Brf8pikDfdhYstU14KHx4cy1YHt%2BPpOLcKk7Ht0dgDw2Y%2Fcue%2BZO9FyW2jiVIAsqy33lErc2BHJ1MVPiXtPBrqTdQUbKEDUlEGqtwGq9G7PQ1p91hgzvpSySJ7MohYiyOK39CWxxVpcFbVTdUWjAPWGt1FVXNfMd8FFn9d6gqfdFNMKnG%2FdIGOqUBSBnVi6XYoP9VrF%2B7ECTg6hpoPtHpHrVX5R3fdFy3HtRNjVwd9n7QEVum%2FXAF6ZYPLI64X4OKGjIIUVvlT9QNi9xUeG6jSlTo11%2Bk4rL4w9n%2BqQcSWN9hm9lvufx63iofmUMfQU5cerwon3G7ItfHGZ67bV8iper9QQDYoOXfZoTxWM07j6sD2YmG4oQxej9RBOVHoVTE3yFVO35ARmDQ%2BSYR6W65&X-Amz-Signature=7af26093e2d3863f0bda1c48346c235b96c44e98948c1161d5e6a7e55818ac20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
