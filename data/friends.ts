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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QTTZ2JB%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T144433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIFquQANj%2BTThOeb1p3ArPZytky4VQgzmlFPTuVodPanyAiEAiJzhu4Z2vsCb%2FP1hadAAK8SvzU61FY7BdasSHMrpgLoq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDMDBg3V%2FO25jxV5gHyrcA7W9IRGQSyswGQ%2FVYRy1qu8Beb66%2F6UY2qJWZH%2BItNQpSagnWoChO3DVmRFx1gSF1V0mCe%2BsgTb0QimbMsTFiDItjKiYJtTu111xDGhyDuQp6CW%2BfQzD36k4qst%2FZ9Wd3Sit5oICEYH3tPKcCy5dxrAEDTADALCnScVWUa60MXyTZyWPgz5sYeCQ9uE9z1uX%2Fq3l1Jrsh2bWOTpExvgKuVrFBxcUkQjzleTZL1rGZbSROmQNlbI3ZePIm1CQaJ3SB%2BAkmcItAn3htqA2y4KCN7gqdxKawkbhdxZrU5NReLfVjQ6cK23oQLUgR2a5ybDw3ABrwujdA%2FTvY9HqlQjBUMPneanKgtKVCJWSD81x6QfY8xr5lhW78D7ezrFTgsDOeu5MMIAlFX69iZOEMZtAKPEBD3lSJQoOKKlQzgwwR%2BT3hIvju6SvSb2lHfrFWcxOUTN4mpsfXWC%2Fdgl%2B28AZhaxvBgEaApe0tHeiJ6vQY7bOCtBDVPMtXmdmg7ZxxhBM5ve4XLhrYDOgjGfJHlCqeBaLl0ViA4aEKi%2BW0yvq4scogNXH0wYHWi2LZkzonLdsa%2BiEoYhqM2HDT0i17e9RrAFS7lQHb2nNT7HjHIdpce9JRMVrIOQ%2F%2BttffxCkMI6fqdIGOqUBk59mRkClbr%2FtlnIvSe6H9wKIzoEJx5%2FiZWgwjxtmZEj%2BDSZ1lVzbm0vQPW6bHrbfpXJMMUZsmWuwSY0uxyViOwJadiVnVY0k0YKu%2BqdG3BpWOPnCmcfd1btbt%2BVKk2a%2FSswhl42%2BQtbdeBxE5s4Q6fmDOOLzs1gWXYehq53Sxyq1tuAeXk1ZRHkqhvjvGIFMSTjQLojpqVOk84q6rwd%2FmsqcDnrO&X-Amz-Signature=c1eb6b4be542f0f977bc52422151916e00d09fb981b956e0c3d877306d4fa403&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
