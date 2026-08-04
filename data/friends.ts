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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R652MNRD%2F20260804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260804T054751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIBa42vKdZ3gNKYg%2BjdShQcF0S5ollLQOk1ySPAJhR%2B1VAiBd%2FRueVVDTIMcFP4FcWnKQ3hUWm504gRgnX4ZKwZOMFyr%2FAwgCEAAaDDYzNzQyMzE4MzgwNSIM7JXSKvdZDwAv4L0oKtwDHKrMDMAwuzZH%2B8oDNfnwbFplCnZhoPmlbDAk6xJdv3lF%2FXv9%2F7zgZc5IlQmPODbKtAOSYu%2FRtMqDsqGQhxpBvd84t0DTCRaiWIe1vvbixnxMKZZWJHB7WDTV9yA%2B29d8l7u3eGMLbYbsOgwGzQHcBaAjzFNsFdqEc2j3ee8EB1AzVQesq9Or1IUjpZK8X4%2BzIHYxVLAxmEOWJsYi4642%2FECbucboZ2%2BmBMVmDJnt%2B3RjZKf5IhALZnQbWU0NEhDqjcL0QXmeKQN7fllW7pKH1oEDd0NfGgfymnfqbnkXfxQfNeK%2F6HwBvgU0MJk3R7SNdrqr44GmjgvnwiVg%2B1TFmr1faZr6aA6gMB8cEs9Db1X%2Frgix6wDA0o8M1QcXY0KJYeWcPezDK%2BNRw2GE5Qe2va2A76EYkg3J9rXzge7KzWfiqdBCrcpDseB%2FjacxX1E2WaMP2zXtF4cihu8Wk1V1YceTWubg8AGv2AHfcNuaNode2Tu%2FmpBtQ3tccdH2xuWutI09V%2BuX15DkDYl8tiYznZyC%2FW7OWtywA0Dumsey2QLZyn57wgXa0oup6934OOW9fP27hETBbseVLFbPg1w32PpE9lY6CnV5fFnCDzcEp6HLGFBiEgYQwhOq7QcwmOPE0wY6pgEYw%2BXEZoE3Qod0kDkbWgcz2cr9440J5Z9wUvumR0LyqvKpHrVWn5GiRARDZFQZtprsVrmAcRp7O0BfmUQJ4bF5eFT8A90RMSRc7URRH6Rlzetruk4GlbrY74zLr%2Fg5%2BktFkr53um%2Fn2X4D2eJPsYpZURZVRS7rdypamYj5JcU2goW%2BR%2FsAl7u%2FlofKKRBwuGtABWYnlwudkefFkvoNqtKWci0wNYNK&X-Amz-Signature=e1d098e2b80c2c4106972b53b14459d907102f7475c91a6bc9e090be5a878aa4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
