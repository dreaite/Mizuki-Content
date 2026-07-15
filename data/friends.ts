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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GEQKBIS%2F20260715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260715T235923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIA2R05NDWEf2AIT%2FuN0AW6o80iRyzO1QxwaFn5m2zM3oAiEAtH47Y3N6kO9X%2F12cmUav%2F5YbrAKX%2FV2ElWIPW6bMtQ0q%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDJBQjLYAeUGip%2FqbuCrcAxRRZbdVE8i%2FhE3ErBLt%2FxYzN87nezprI9djn34jzJC8f0vHaYZy6D2cB66Z0enrUonl1Jd3iDiW4OrQrYSt4AyGzriF7Dh4riEoaNKx3evWeX87WoTHAjPpRGRpjpcyltHyQzSXubHu%2FpgAalPUFmVjKU7kyLg2xFFaYaMUr5qhlV85BuK9yb1IFq3yQHE5Yf0bZrayBgJrpDfT%2BJpO8iEKYeJ2aTq7nnsuwX1bR0KiX9UKtkhnGiky9BMLL3Lvl6ayQKeCZgmLdDMAII6gTTV%2FXZ5k8kW4DPEZP71dhal3vOA3fUxdRjx8zn6p617GeySejo%2BZisXqAtxgVq5FsMqCimURbgYt6mwgTTq3tcUdlCS7JYuUc1yH49xpJ79z5BQ930z5VkusjfeqffLdF1mlkA5qiQrmGTlM%2F%2BYOWkgI6Rum3f8fLDDyJCljVtM%2FF5ZirBWPlAHvwhj4MyKmEd0IImJYXA8CE%2BMjjZCB%2B4xwEEimAJ%2FW9UGB6qRH5btrOPpW4abzve40D5oWnYYVVsvQSCb2dvoBXUr8XGsVK9dc3yo0FvLkMN4YBnRa%2BSRA%2B5ITFwUgFhplW6JfMZmcOc0ehjxs44IWYaTH%2Folm0f8Awn9vD8l7K3%2FbAvZjMJCH4NIGOqUBPvtEr3hgpqqDZUrZmgv%2BAg9Fc2AmsMh3pBe5H7FvU4rE6RTJaxoYoQCZasAWiSw4H1kbVI7nnDziQbxlNXDbK%2FVyI8XJOTRBak2LmZ9fZoArT%2F%2Bc7LuqsYnBQQe1Wmayd9gxT8Yto%2BMgjtBbHO%2FU0rfd2%2FnaCEjucVDm5AOPO8f9oyWVXOr2g3VGzNFxefQPDAea7f7CBn758InzlRsDBOYvDMd8&X-Amz-Signature=c6258b558cdc3dc385063966059012638fc73d34a14651779cb6bc346b1b2c11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
