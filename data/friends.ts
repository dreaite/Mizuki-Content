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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SCTNLQ3%2F20260809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260809T094042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC8bpe24vRGQP8ebNETJB0jhoQsyrwYpiRcWiYrhQ2wfQIgbQlqIJbfd0MGzk8yLG4GBQLvUot8UVH1G984GZYs0HIqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH%2BXEISf%2F2X3o6jKcSrcA6TXQsdseJ1UizXfU9uqDjghMuF6mPoAg2qqNkH0%2FG5bPa%2FqO32jMKpMLxrW%2FW%2FugAMRHr19mFKTPvz44iJL71mUdcUc%2FCcn00ETeVpEellwZccmqfPuphYL3g5riCluMZkkGSXkGfE9uUzoFbyycFo%2BPvvgOgOnhinK2kIZRdpHbusU0ywJwwxF0KFKf3THI8lmsfruNd3TSxc%2FO%2Bxlr0q%2BD%2FIeN5C0OIPff%2FkjC1RPJC54MKT%2FSD8wGZjXGVw9kOXlpxUxiCcMp9y9xw%2FV0FCJtcrJ9ouAUHXIq8sUp58C%2Box5gIToFs4%2FhZFF%2FbJ2aAvW7%2BTI5B5M3tjIniTFYKD47LNfTz4kSdHOYcubdrSl9AB%2Bhr%2B4QFsBADn0qEssJ2sVyT98UQh3LF3rGFLTlhLeAQwftE9lEuRNhhn6G1teFMubiSM%2FUs%2BGu2WkNKe38g0%2FfJNKURR5rsQAM15hM3K1KPe5LX0wJV7%2Bj6tl51esQZgJ1yeH95uYGTjF8FCyvtEL9dCWJQdm0mHC6qMeCt1Z3dDAreDUjsxhp1c1zTHo4GWWewQ2ByCNp%2FOYYTVL9kTib8sfYF6aC2vFPpi9pSU%2Boxfcvqh%2F9Hr%2BHALsxbJsY6S7txeC%2B9ZBBZJpMNjy4NMGOqUBe%2BMMKqxQynF6feIO5I4hPjl%2BkC8QLC2zXzkDyfqT3JUUmI0JUpRsPWJ3vs7msYthpB6qGAvzpr7qzyzP6%2BhYTMK%2B0paN7JzMhn%2BEDUqQoiJSBKdvKkoCDpmVOYGZKMNwioiX6uK5xc2Z0yqzawD7zCbYuGMox9qvjpWVZQB%2BQa9w2jhaDxVVqZ2YCE3LyrhIDmcNaCR9PJF4LiAwgsRSC8XOIckO&X-Amz-Signature=c1195418c40496af0f8f55a1acf2bc5261fd5e35e4ea30bf8287797954d7086e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
