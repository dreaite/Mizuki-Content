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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X73WB2YV%2F20260727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260727T211202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF0A5Chnrht3l4lnTMF53EUVC3SPbrLwiyq2hZi94DgWAiEAw5aP%2F%2FpA%2FyU30AkXxCD2Sp%2Beoc4XtccyGLDz3fpp4zkq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDJxArpWQThPqyotqqSrcA%2FlfKUBDA2cAoNO8JsDvz%2BBGfhLzYTeSGtDdsVLXLT5UE%2FNcGHQhvvehM8b4xttXpZMERBBJEoy6FM%2BuGZRkh%2F2CfnMWrd7fZQSREpkaG6fAAfRADXZxRuTi%2FGFYNQdYkCh66Y55PoJy6qem3G2%2F%2B4kW5wLefzJ0LkUxsHgvaAxyzV71AQ1%2FLdKUS1Gp9DGYYJgYr4oxE3Alx4BUrPt8U6jNZJcBU%2FqxXY7%2FsbKhIamGVG0%2BEENX8kzwmI7txyhXhUE4uz266GTJXtwg0RVEiF%2FbFaSJMpGPKFpM1z01BfG%2F3eoSBZ8eIIFt3XZg67NE5J4ZwTnhF8uSc5NPPhYzffiykDzlaui%2BdkWDF1ExDKsMMD0TFemq4bEDaGHBi2E9R5KzAnucIUJdWfjOmoRbHCR%2BZiyLwStoZpPV5Uii%2ByCHLOehjMd1PR9O8i8UDy%2B07RKSjD2pdOvMDI5lXwoE5KwZb9kWEcoQwS9qecQYFhuPnsVu8ttRCVDTnWMJmKILeyehCAHx8q8BfUMTO9YNRB1%2FFle5gVIz4IdEp5LW%2B%2FxTDaHp6MxkdzUmD8ccJmKx69dETAUGGf%2FKytAaYtfO70BuMDznAaKD56n5vGeTVWm5bwmkPQBQTw4WxatJMJjrntMGOqUBBF6chZm4%2BvxvQzHJHvWdkQFD8vofdDfcPxJWN710oLs2NgjL%2FJpayeJLJs98pw4dyTyrbKqn9M66zj0D%2BJ4Kd7BjVsr1tjrHyBGUNeiYlXbE2IHFT8vjtDvOUY0nqoTK6LnG7nsVH6303Ax1G5SnpLM2aS7DMURklCgKujiu1BW15DZBTYH7w600XMwgnWS4gSvAy41cza8F3daxkUCcmhWtwkAB&X-Amz-Signature=3dcb889caafa703ee9e2bcc180719e41d3a823d77e4c689b875ea3a563652b00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
