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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEXHXXLU%2F20260815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260815T112102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIEk7i8i5%2FojA9JYqLkU09G88hGxuP4TtRhDbLDaglHXQAiEAzbqVKCtu8godxSaQ8GrrZg6w%2B2WA3wX%2F6%2B%2FLW2fr46wq%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDIHJc8aFJ4Ox41CNbircAzwgSV0kzuX7HG%2Fjy2%2FOGhLswLBAfTM2P9zAUaqLvBOgDjypTbLUMmlZVi3QpRZkG8lem3gV4xdDFUl4BGTbp9T2MPfBkM3ak%2BPfrJSzTylSWuRTLT59aoPnP%2FVWlUtGKI9sHBSq4FK9yHmwaRFT747Yy4I8e%2FyXsLOu9pJSz5NBs%2BDJQMG6h95%2BDWlzKMFF3mGwQabGVsGErALXiGpgWmvIVDfNtEVKfy37FBwITjddzd332Wx6jM6m4m%2FkLpZLqF8p1TVl7rc9qy1RROG8eA7H3nukaeApSIeVZquak%2F9uDeCmNwtWVlqW3viNyY9MJrA3wo1OJcwo4bIVz8kDpDD91jqm4M9d3QuJ3Ke0oEh0VRJFoanq28DgskDnDwecBqDXxEbn2M%2BuWsuooXb0vXOPt8dBMJESqhBKWJu9P2A9I%2FvRCnZCOyhsBBJImur7BWi4duk8E%2FPSU0d7ptRf5HaZB8qEpIxSmNXi1hoSUb1gS6u6zOuDyceNdw5Mr3lxrlxCBMpq%2BgaprRWP6GQC7wrNga0ikC2AmkOULNYw1poc1zphxH%2B1zWIAVW3jGXVhXDhuG%2BK3L6h2txB%2BoCBSl3bEBCX99mu9xBRW2uaFJuRInyJ2NAiGkpjVGuk0MLzrgNQGOqUBEdRHXSQwDDKf0m0A8ujAXcCvp5OfBBgD1AaozP9Sh2G6t3%2FuEMWZu9VKL4cuvoA89mn2hcRg3tlA7qkPxFOaVPvHdwaq%2Fgs8PYE%2Fd8J4i1Z22J%2FQQ4WbdcGktphX2wi%2B40xhDa6k1LjvHY6FxeWipduNxNFyxmJkXrfxnF0zUrQhwQgA8ns%2BXwB8JMHOwtr5uLGU6HRi1zwz7VEGrCtew0c5eG6u&X-Amz-Signature=9900fac22d102ae8ec8e83656653aa423df86102d3d70c34fbcb7411e4b92eee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
