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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REB4HFUP%2F20260807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260807T071739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0vmiiAS02uONvQrNrXl2lNYDjpVpJquPcy6f8gaHWBgIgJc5ZgD2pqXtWdjBqAJu%2B1J610SY4ZF42JaPLGLWnFCEq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDMRK5jHC8EYUsvpysSrcA2bd5NL%2B1loAlyTQ7kKE%2B5McC%2BhKeYTCyLe2SYgn%2Bg4PI8Dz0jXG3lJmzkKDFWfrvPpkg9Mewb7cw6DI%2FTEy2oX5IEKrU%2BYFkx5c9F5pemj2SdQ0P002C5IAZpDx%2Fuae2kCvHCpd393faAuvnPfVcsJrJw9iHmthjmngjkffeKxd4XSKiAkh%2FutLtb7UtP5dNGcbz9h2rdjqP8I5g6xAm3Oe62HHEaJ8lmDwpjli8SRrO8sfes4Rr74sQyGn1f5tpuZE4KaENH5jkH5%2Ffrm5yaQM1hhinbN%2FS%2F%2Br3koMassfWQMmq8APrr8O%2BArxazEotapqmWHZZLCXcSRWOYNlRr0kTS7kroO8BbZsIgG6Py0rbpIM0NZQ%2FWMVa54zDxA17JD7tQz9Ba%2FgyLQxszaK%2FCQryRkEOSLjtKRzMHJC3aNDOMPgoxCjKwACVW53qHjS3a37mVbFMtQ8GF6rzvDxZmZHwBcO%2FAbSI1rXHBuIEAXOCQ23iLrYSomjoEiI2WKfpyjkPtixqHWkaWxITLAmPP3RBmCho9uJPFFThVzdgTwVeyGXuyljyk0%2BhOJbyBV1ivswMp1irBZT9hI71R13YILZGnihyL9wLdodAh9oEHl3q%2FOmVCCe0BtvbmPhMI3O1dMGOqUBlYTic598brXKJ37%2Fw5Ts0A0Y%2BpgHxImI7aprPZBJHzK1Td4XryEGhGQkhFUlUKMQVll8MVuO8QyXbUvsKdoZzJMyOANOtRWHR9S1GVYHnGDAsJ0AHDgU4ieJXzXmIG%2BIdlKKSZNJ%2FJRwFsKfsr29Y3aozPb6wadIc90cmM2MuBFmaOPyWELg5z9wmLJP5O9NHiv9KskTgFVZ49JeqRPkycNQnA1P&X-Amz-Signature=bee777ff9a2bcaf1a4816dc6cf329ea62537949a3e55e41ecb7d4ee24941099f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
