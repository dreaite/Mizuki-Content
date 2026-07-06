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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBYKIOVQ%2F20260706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260706T142719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHCw4fvyuUsvnO172VmmHt6xY88KPVR8pF0lBLPWfT%2FrAiAiWrhgt86TV3Wf0AIHGh5HhFBdHUKqiNs%2Byt04FyhZ1Sr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMNFVe3PSrf4yqZW%2FlKtwDnSXm9FGkKQXBz6GeDcUpUTqgJYgB716FD6Gc3DeUIOyFAq5tGNbE6bgL6vBxGZe7DZ8%2BSS7kGAOdT%2BGHPsD1HXqqd538kYQk9h6DpT68oJF3jqq2mtuubQYEcloNzEypnLtR6QJz72OgS3jUv3pzoC%2FXwocxYkHL6xGr1lz91mju0M9BxmgoR%2B%2BaPNdoJZKN91IcpOu51QQqZOjKKnvvASFKdoH%2F%2B%2BHNgm9MzF5gH69CnZE6exUYesRg7TI2%2F7mnIb697PBwbBf6XeSa1ZjMMbP%2FOXDgh8eWVvumlRy2WURSDUXrPWJU9dVMrYDlescOBVK7kwIan6n66QQ6PzqiVi99QbQ6meaEDO38IgVqggTJWFHnMtgWBruGevzLlx2mcc2%2F4LIIh3b8XjbUXUreP9wIIlmjbhSCTIxyWXkRQ9XGfGVP1rFysseKabUoi25tEf6koqkDZ1YieFFP%2BtvLp4GkaINebKEVIMTZoER72womr%2Ff8NDi6f2bJerABfTV1YhVBH%2BEpxTaQImRvyV3kuWvor%2BILZ%2BKuO15P0PJM0pkTr823JmkIKtpJmMaphu6lj9SAl77GrNSOmqgN88JRvgAg4B4x5CQVsVv29W72taFDC8%2Bw6uJ13bZqMFwwu%2F%2Bt0gY6pgGHa%2F2YfSrTzrcU3oCLGEqudKAfdA9sLmVNbEdCVsjjiI7vSL4beDM3AMsXjRdWvco%2BzY%2FV4%2BvBleQZDhJKqz5Kiz3Z706JYSW8EjEEFMvQxJunTQX3C7XJbb9%2BTpyVvn%2BGfX1zJ%2FJ%2FmBMFN1%2F%2FX4ZAHBgUTcZc0MSnQS47Gctk7sFk72c%2BAHDyuIS6uaMyy3WI3bTBOFeSLJzVzwlA0IPWzsiZk%2Bli&X-Amz-Signature=75fd0239cfeb8743b2ad35a9f1cbc77ad7668c1dd3675a8ab9ec4d6d91fa284c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
