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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FNXPSKH%2F20260613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260613T220517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCICeAKdT%2BSU%2F5VzZB2M6TQsCdMQkarsm0w%2BxmGp%2BQbnBsAiEAxknW8PfQlIvAHq3jdryjyzQdTW1zHEP%2FLyhDfgltTWAq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDBcyIkVLuFwlBbqjlircA69wjSyDRkYcYm0pvXrgwvlbOMo%2BmA93XQnimmqQB33wzlzetl5BzKJ2hopIejlzy6enCrK36Nw3y8FizjRAUN42ki60oVLY6N%2FsFinqX666xUiHxhIXRRvIAh%2FrgKVLfjGmnOklZlsVDeYpsKeENVL%2F6QURD2itx0Vz1E4iHqM9423opomZnLyJSWRmPNmKVzPfpMQ2%2BHCbO1eFrrEXYtgmRdZIKAZhyhpA%2F1%2BvWnKv3e6ET%2F%2FIxzWc2HZTQ8LQZVyTCFhmbHwnBs7PgdldcOequ%2Fgvkz59n02aSWSQLN6kvnJoy0Iy61ti0ZKS3oFg0pbdzxwH3QQCueWVE6ezqzrdin5U%2BnSbq%2FzayMYcHqWtAMcqaEIA%2BkEVZYSgy9S%2BftxTKu1lDQBm9OhXsO230md%2B8OQO4TX99u%2BYUoTHa%2BjCjDiZisg6KJItT4snU5HDWzWV6v4%2F9ChW3PkB%2FRMYZA19u9JHtZw5yxVvP%2FiJMolrtJtLUx9H3dRX7Gljr0tDiToH3sUZBoplJ696F758NbIF%2Flly0JA%2Bhj2JyG93EAGsMnMeXHRy6RmxSEnwhb9G5DNEbg%2Fy4ruNJoc5yPnEq3BEZw2IBsn5QdWFHN%2Bu82EiFnmFg%2FSqOqpzvJASMM7wttEGOqUB52byQviGV3fB1yaQY%2BbkmPd5%2FAHN0vAGM5NY6%2FIUUghLh2e7zbsczxZWs69phC%2FWoCrORbzrGkwQvhK8e8cSo9p68Pn4mmqytSWSILaWjwtI0ht%2Fhlxf2yr8KsHSCRVFfOJ7EO2lsvjurfoNDuUDUF7uL21wAXe8Usk7KWZ04n6o8KEIU0CUaDQSjlzc5UmAlltVTf1KeVvrTP%2BIbOV7%2BiXhd2if&X-Amz-Signature=10c6b15b30bfbc5c08d3a9735ae43eb4bff37731b09602d885c02c0a22b3e8b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
