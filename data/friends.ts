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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WIDKKOH%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T145709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGyi%2BgipjmkExGXR75wl3qldC15NF%2Fu7jfd3szEYZocyAiEA0JSrWi68GKu%2BrGogDGNKpO0DsaF2%2F8dBSn97TbeIdIYqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJx%2FHWcPwZ6ec%2BlSvircA9Iz6NhrgsfENiUZ3r7xjit6gsdKTh83LZx%2B9MbglEOr8bZzhpcgKic18pz3CvCKZloiDMvN7CGBnYEpZtMjE0ojO9C3PNb0f0mSb3q3mul5QkODjB3%2FbnaQ6ifvpbQgb%2B5FM1dH8%2BpVNQYAMGvLsBwQHCnEPmQWTV0E29Gs%2BTo%2FUZgyXeXE7Wo69boSjBNyUDkk%2BGGQrKx%2BFkMd%2BWsSX1aobZwz2zxAoMVCQfG0eb1aZXCmYSjehMCUJfy417crV%2Fn0PHLJWJNDIpLSggqoFFSR1P5DLFTdg0GccVE0rrJzaSJObELq3IKUYi8BMiTIDxh7iTiFNww6St2xTW42YtpmvLGEB%2BhB%2B3467BkCvDK3xRQoZodUYnFoZ2viMrR4nySZciVHSwwcYRP2l0DAIdpfuR4Bhoq%2BEXm%2BTBO6QkR6l5bf3hZNXCrNI6SD%2Fgos7tNi2ga%2FCbtbzWmuyRd3VWjcJYj6f0XI%2FW5D%2FwsFDzXWp4UvtaGQ2r1DxaVg00RrBO8kFeLMSvP%2BzZih7xnTeRCvam344Cr4OsINCR4FGKxzzZLgF9c5ibKk9LVvA9sfRsaT%2FWdvxLowHYqWKOCIkKSbA8dnwLq5%2FirJF3a1dr1TgT5H4Et3J3or0MrdMIWi89IGOqUBfoOf5g8R%2BAk569GYTZ5Sgheb4ox5wJb2U4h6Djqb7vmJeJnY0E5HB%2B4myIw7RGna1xz7K73uWh2%2BuymoVHh0kvxT8ksSfwRRIr3XasU7qMAniaCWovseKfxoxWUJI1CyEXuao0HxswXa7eL3wvI9SWGScq1Wqk6mi%2BNBEP%2Fr6E%2F1lAcTpjGod6s4MHmKGO78u9ACvziAqtiWI9Ncdl62dfw2jWId&X-Amz-Signature=a5123d5b9ca1efcbfa33e27b422c15e536d5beb1758e98f457f000c03af46f06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
