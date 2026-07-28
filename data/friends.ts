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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2FOVMGX%2F20260728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260728T201557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICvdH1Nn04e%2BXyoushSH3fHzRmUld%2BpXwldVI1WzN9fSAiEA8Krwax1So%2FJTDAX4%2F1ytxoUSSvu%2BWRaS3K7avVFujkIq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDCFSox2ZbKoA357DhSrcA%2FtmToDtyje8T5Gg1xY8Ge07n5XgBh%2BtSzEB7AqIlv%2Bqhb2Z9Sb%2FxAPLmtukGaPOyzmD89lIe1165Px7lIYSZswBUfLSlAJdKiZ9SCSebN8U7YG8w1puMTLg5rRswCJ1Dp9GO3L8Yvqr9UZ68KacijpLbWaQwFyfa9xPTeTWonvmL4yacLx866LZH2lWJYShaJYhJXWliwWXe9eO242dByzBvN85DehyOGnykGAESmlMqtG4HVSXgFzj1B%2BIq8Xi57MwNm0bbjGq%2Bh0jK2jBwZHYLsiVCsrg%2BmX4c%2F0V3pNvO%2BS3cBBxDw5XJGPEm0GR7%2B7yAJ2XBH0Oxy12evXUh4j2Jvsob9XhnDD047vpXwSBqkw7GjKuoWIVBuIWw52Ej5J4ArnLQEEuRVXDHJ66askU0BTzUHORcFOx24%2Bg5vUd68Xx02LoYIfQ%2FKZBt3%2FsjX1KSZ7oYQI4CKxnEuRwwwsV9pRENbiGkfcbxvNtHeuYLXjFCDW8rT9I8laQ5jg3FB6blMbPt9r%2FJfFHaE73kgTvieC27sDowFRsYoPU3754D2m%2F%2B9Iwwpx0MI4tA1XiX1O8SvzfoqGg2jNJAN%2FMUInnZaO0kt7lLVdktFaIzPBc16N0uoXKpvG7rx1aMJD2o9MGOqUBs%2BcpLMDZGyqmYQCJ%2BoEWBKh3HD92Q0zyi992HJiiYsO32Z6pUSQOOcX4Ch3vTWu%2FJ1C4SOC0v1s29JzYJ%2BEIGrCDT%2F1gzkTQ4I6Q19qeIoZNObQksJLoELMqqK%2FPwn5ZGuZF59UJiZUV7WRV03IVOOWsmXi6Ws58IudW%2BXkkEwt%2BobX%2FGTDSt5wDEX1F8kf5TqEKXkbNqjdAoKOPCzAhEfWuWtR1&X-Amz-Signature=a85cfa7a36f5ceaba3f3e27deced8dad493da6ab39b9bf27147bab91d1caec56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
