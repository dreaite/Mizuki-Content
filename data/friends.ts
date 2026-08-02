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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6SF27Z3%2F20260802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260802T090914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCICckQgc4239ixR12bfSM9%2F%2FpRB8x0oRSTCHbNMsHB8VqAiA6aQo%2BkGUTw1LrwFppsRopr0rQfGoNwr581hwJlb8eqiqIBAjZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjfN8BcYBtRWyC7kmKtwDTtMa3A6YN1Xxmt6Jtf%2F7Y5xGtcBrvuWSYzVZZLjiCo89%2BZcc0gMgS0wlqGL9JKQWsY6omNKxsKSQFwaEqWFaTv2TiSjli3qsLV6QM%2B0m%2FS7YTH1LpDUve0hqlHOqwzgwBksohLkaF76%2FmBhstO2HU%2FPkc2HlyifjDSue5akvQ0OqMAf4gXavwHrvypYJ25VHabFNAOb3iEzQ7NQAZFMDvjUhIXXA6sUB%2BzLoJXt6J9Bzo3LgUoxulrdVNoDrkvUNugv3hTdlSd8LIipA39mKkwvYSPEMnVGpT5zPwmeSowFfHxfJ313GFQo18X1w1Y0k1Ehw6bc0SS8WM5sIg4etICfaYdShyButmoq%2F3iRg%2F3M78oqmvMRF2CKnyTDog8QV9TZpIun5%2FXtXLctQeC0obvyuabca3XMqCPbfubSJ990ciJDSD33HghURwUVgCIJhQwfk8mR9E8f2brj1BRqtJiIhcZEua12UTzDF1BHYtdIKGaOPVm2oRi45TJwTbi8YntqeuYlj0%2BVvFn1FY2ZKbf8eLxb2Qdh9aFOTv7QHReDGdGjjBD%2FxkNsME1PBh4qGk9ekP9pz3T9VpaY0nNMibfOQt%2Fd%2BhQ1YEf9ZpcSLVMnTih7R11HuKSnQiZwwofC70wY6pgHhEkeL9CD704ULSV0CpLl4cY5kKN8w48WUJi0Pbg%2FESGOlz%2BBt2lvxwFCatMrrBlkqLWOsiz9e8tkKB5FQAC79Is47S9iWb9DzEgIcj3Ho%2BqTjDscNJOqnjVDoYIk3KWUVLLMBzxqMxZLKWeki%2BM3a3poeOWMDeSfYojJono7J2j6800JolP5dMZ%2FwMTi2jcZDlcND3fhPjGwJzEDcKwgf5tB2jDRh&X-Amz-Signature=f58ae95ebc08ddcae9c4b560cfcaaa88f2b6a26153e5200b0e4b2d8e61f8126d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
