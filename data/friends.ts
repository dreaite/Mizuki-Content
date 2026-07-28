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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJNPYF2N%2F20260728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260728T054713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkkMkyXtTnP9MJdbZRady5qY6HBWXoMqlUGEQvAMO5BQIgSCa5EbBE32Zzo7yIhFT4l3QE3D3UHqB8je7I05D3NU4q%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDG6xYS4xJPDW2TbkiircA6RK%2BvOF%2BoO5mHm7r%2Fce5pYVvObSekBdEltcdYSM2qrs0MmkvA%2Fo2ssegLz6uziZoHvQ3S5zLj0s%2FarmtUZiUghKtAaWGqFLBaeBm6dP0uXI7N7nSnWjdLOvWlKJTVE%2FBrMAyjArk5KYka7Yt25ZFZsygOlfmXoNHL5un79SOdaofz1f8p27wjw4WjjQG%2B7HSkQyiUKL7K%2FjbQnTzzGIaHx5OAFn%2FBmstTlRLSge%2B8VjeidG0aLCDgOmeqiusB8r4I6MV3Pe1suSf9bJQM511frOnRBex4ReApGhW5MwX%2B2ZMupHkMomwt27O5uP9%2FPUlKK8lem65nH7q5r9ZCBwtu7G00CFvIDhVMI55BPI%2FId6UhSp2Lo%2BrYjaLxt7FtLODNOpmdo%2BiaA8FrN9vKRc5cf2A8r3JFiIVgxl5q9rr%2Bmrg6mvWDeD6aosQ%2FVhplmU4Lw1umgqI3jqMThAXM9Msr7w3ixG6rEMnT79uujyZ4Ho4eC78eO0zb0yu%2BYBKTcd82yWWXVmjr%2BjePYMQ9aP%2FhlGPxN2BqQEhAbWF2IQTk6q5wa%2B82l89qWrRaXoufy3f6ICzoyIV2W6qZsiSUwtltc4oF%2Fi1upYWorb7b9OLeoH6fQ2z2KEQ8Akjm6JMLDZoNMGOqUBPWxXovUMxMlfCFu8C%2FfTo0Qab0Tve77Sjs0u1ARpZddhMRo4Fm7lM6LfLRdcv3s4Si84wRk9Uwu2b7fzTdNTSf5wqaxCQpVg%2FHHjYumQ4v9YNpogjj%2Bq1SBaYKcugaDahrRJP8IMAI9wrAmUp76KgYFbvrfpi7vDUjwrjX%2Fw0c5JbrOGHiI8ApADA0Tp%2F8u%2BMGOPn2fUAWDMFXu%2B%2FhsFnZpcX8FK&X-Amz-Signature=fa6e5d4e44acc718b74498ab293b75100cb1bbaf305712d5227cdd3317835954&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
