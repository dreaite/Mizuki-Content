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
		title: "老船长PZ_Jack",
		imgurl: "https://blog.panzer-jack.cn/avatar.png",
		desc: "A Pragmatistic Dreamer.",
		siteurl: "https://blog.panzer-jack.cn",
		tags: [],
	},
	{
		id: 2,
		title: "XnneHang",
		imgurl: "https://xnnehang.top/avatar.jpg",
		desc: "写代码是因为爱。",
		siteurl: "https://xnnehang.top",
		tags: [],
	},
	{
		id: 3,
		title: "且听书吟",
		imgurl: "https://r2.dreaife.tokyo/notion/covers/37b5465cca1780e5b733f2e08041648a/logo.svg",
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
