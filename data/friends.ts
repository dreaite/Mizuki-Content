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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643RQWX77%2F20260807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260807T233435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJFn3JYAIdjliIQgkykHRPYZxnMmyYnDjCo1Cxkwn43AIgR%2FcgypQXTSEsif5zCx9wewa1Dx4JnDgy6zj5Le9UMDkq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDHjnkzEcTwM2sWYClSrcA4euHBt6nNVJpQKpTzeuL9RK7MFnbHYZb5048dJxRGhSKzQ1F7judGC1Zn1Dbc3fKBGD5O30bnGVDERYuHXQWRuFuCDcwcYvE4ED83vRicpf9iWJSRbOKLRxbcWv1M5WLroTAg%2BrW5od1DWsGdradxLELJ7Gu%2BzuxdMl1zf4UM7sY8O1c9EckgSUuc%2Fhsbmz1bnDYUTd7D33uVMTbdqD9OB6OhPp0jfKH2LeTEtDuTrioygVM8juYKioC2Wk28nnrQigwSELeRoPoRCpQoiLkXM9I7%2FOZoGMHRxqQ6S8KzmzE7FXRWFHxRHJsbcEgtkIqgc3ocWIak4ThRB6h9M3q9rlYykrJP3R%2Ftw1Hkyj6dVZXYvzxR2WQD%2B2W6mViiKi0lhdDBl2eFZyywou2OdNB%2BjHbePAYfrXuXCeVWmJIjWcK6dB8cK0UTKFLp14yCQChfBdjtg2Izh3JhwC4eSENkRUvBYVMixv%2BUNk6ecALz6SRuZdu1Jh8eLqRbifPKp%2BJ0kFxty1%2FvYg0zuXviAMGeSPSsy7lO8V60ico0MoJA4jYcRntvCetOBRavZ9x6O7BDCnY3IkXunWCBm5sugPmwnlfyAuynSO5flzoc7%2BxDdEWS7Baor4P3J428jfML2y2dMGOqUBOAW1054TdU0ZzMY1a2e5FmzpnkA0I2wybduWAzSrQFQKq%2BateVdJ3kXl8As5JHxGvUNBrV3qovgqOk2zzoFrgNm2Q3WlVep8VDAx406MhLQCY2DH4qDT3PKSI%2B07Af%2BDLlXWioup1%2B7qnOVUuab65x%2BdSyUdqrJM%2FBaUbk%2FZ65nOAw2fpy94rbGzpi4nVvk1H3uWjQqBKS0MmsDYcZJCGt6sW8SL&X-Amz-Signature=e775cf100ed4afcfbe761046f981f3a8d24ac349250b961a65bfb7620e0d1b22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
