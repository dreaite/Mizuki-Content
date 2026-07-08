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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPERAPZV%2F20260708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260708T141419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmEnROWS1hOLiEB%2FAOyLXb08smLyglIINGghheQYdHTgIhALKCw2lus3bH2tUdLFFvVdQNFBJQNpBtQYJxy9ntldaUKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxZsaPERBicJyIezhEq3ANS1lTlEhAzsHuJhhtMmfS1oWVtYDXBpYUYriL81bYNQd0gVV4hCBc5Agl7FRM1uXUE1QH81%2F8WgAVnrkHPCejEcxR47QaTjWIEirZeI4cHgRkkuKdb%2FfY14785mtp0vq8C5GFf%2BRZF3P4%2F64PUj3FVDvKiWM07UAI3OnTgzDPQAULTW9j8%2Fe4o2ADnxpSfJHTbWpiIV4zC3ah%2FAkuXN6nrAnreomYEBoeB88fLTdTvH5crc3oFs4JrlAXlb9J8bWenMtYqtDEx8v9oHfQsZ61Oj2w4yFniGQo0gqjRcQ8W9V7vgesl20UJ7aDYej9YOu%2BHOl8HD3ctCgN3cFT%2FFuV5OQepWEUT4NAr8c2ZxShQDFMNNuIYIIzR0GzkWFcf0%2FVCWLWWuQj7NioUdhfAtU7JPUoG5GM8%2Bklh4IYXfPdnZ9z2NjSvAvBStp2ppnSNxdhRApXcxXqcV9CVSSnQxvxTx%2Fp1Zxzbm3%2Fmg%2BXbCr3NiZypk8rq6ONrMrBefVJ87jfPiMzkQVHiDwPkSk40yxrK7CXBqdLQtf8XrMXdgMAGij5BgAU8Tj%2FK3x1MyHUxjE5SngEpeRn2Dfe0FX%2FvntqvZs10kbRbxu1t0hYxS%2BgdF1TA25sBiaXV3VMJnzDKqbnSBjqkAYpywk7S%2Bqt5kSHQBSE8t4szlx43JzEqBqgmjMlg2RnQ0ECBbAY0tYG3DClBG%2F%2FfWs0c%2Fx5EEvs2IpyBPkw2F6gTt%2BauD4%2Bb0h3hVKWZ5FDkDPxpHx7sYBU1zWKbgd1ZA3WTCtS1LcKIEJpiLirLu%2FjLMmyyiFK5on%2FrR0g%2BebiKwWACSOykQiSwYRUGTr6IaNR7ax6zbH%2F33QUJD%2BPwQC1jGbS4&X-Amz-Signature=bc6d59add9ccbfa2b7d8cf011a2725385cd13bed246ba98480bffa118a2134db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
