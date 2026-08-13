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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDVMHGKF%2F20260813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260813T145839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIFSbQ36IGECC5YKaGMtfV7JFKCOmmzMgP1Ga%2FuifbyaaAiAq2O1NaL%2Bctkiglang%2FZL5q3rZxHszt8sh6vKLXISTeiqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdxLvUU2AGTo%2Bd7R%2BKtwDJxj2CV12H5KxsJQaGbTU%2BZ1OY4B3v5NRyCayNJtwLVc849VCFYktRAzUqaOEdw1KgZjxFYQ88it%2FHz7yfYY%2FXSUyT1xSgCmYSidw57%2FVLbOb0EArI4GowaRWKKMQ4e43vGr%2BMttOMQmL2WKlopsQvN7WX9Umxg7wKHn18EX1oySfgusY3xvlpOp%2BdtG1aOzdqE6gc4ss4e63xozUb8XXj%2B8%2F8oOjReZBjKY1B997LBLvHsiR7jrLYj7qG7kNh%2FncJsNoYk5FCzKBVA3%2F0cOBwM4x6tUDHTaGIJsL3SbMgATG%2BMzebGJh5N3QTsGK7yiVFkwFu5GPBjjQFNvhwVW012AzLxoBgHcwOIB4QVpA14m4MttYcm1LvmHDG44C3eGE8Uae0NobWq9cBRIJ%2BjzEGHNLpxPpVF%2FMoF2e8JCbWkX8n4Bjk7H1YbWa3XmS2fSPuOSMSy9495QHZmBXkowskSdbEeJ4xdLc3Th9jasfVauoMy1HB7MQxShFKR1N8CDK1DvvIFfosmpX6npVM%2F8mS1dxxOjGR%2BU1Rwfkw4xVtVMhh4w7oiEKRzrpqL2rLHwUvnDDD7XpqT2dSDfuYVqqTgz4T%2BWB0RdBQJJeWkWVL%2FczCbsk3%2Fqd3YkkXFcwwpv30wY6pgEHSuFhtqX7Bo4p3ow3VzvYMhc2WdS3aXvVgF75aDOaciVRmenkmJC8LgCNOBu3VAZAHLTTjbql3pdKrVybLoHwBmSZK84GDW9eAOF2pQ%2BtbzIBRopJeSTNFDlHrSkQfpPNn6fGpJyUMGBRgJLV%2FbOHdHcDFSOQQtNyrNSKw%2FqNnpwwhekQw%2B6JM2L8LoAi%2B03%2FYkrQ4DZnvsliiiIElRLCsfVoSnFX&X-Amz-Signature=e1cbc460f0e6ede67929fb7541d5c70b273fd484fb0d73ad2e6b2e7a6bfae61a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
