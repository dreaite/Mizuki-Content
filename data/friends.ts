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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666T7I5D5V%2F20260620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260620T115657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJIMEYCIQCdx85r8ygnz07Dq0nfBEzXqBYk0UQqzMsprrlq4krnbgIhAIn3uXxSZve4oNg0ohtjpJmRQxG7uoPJZ7Db0DpALQ9tKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyo%2F1DcKM6ZoPQhrloq3AP6R85Ilo5yiXk9MEjslLY9P5MRe1ojnM9SB1TkTphhJQHXdtX4pF3nb%2Fbdj8oppVLkvdBJEg6zXHt5MhRG%2B0bFtWlQ84eemSB8XhR6NKqcpSDzFqMeMurgQs2lVfL3Po5Am4cDgVj1DSe1wa0jldF%2FVJ7rrQjAvP8YJCAV54%2F1kEHwMOtGCzVarSTrha8ERKNb1D1Tvv%2B4cLjCKQ6TLfRVbdhvhD5UeBNzYYtIxlsNQbuyuELJGcpNjMqL%2BS30oeDrlJbAf6tqXS9PaSugIXGFHvZLDFYD73Xa4KelYQlAvnin7uvMEfCd0MtTtPhAulnZemh1IqG1DAa2%2Bi0a%2BE4y82ytvB566hiXFthvA9crXBYhStLL%2F5H8fdvOiWCeUJajt1BHJBCXlO%2FR2SxYXeC%2FkdKciQ03Rzl6XEaVs%2Bwvo390McR%2BDA%2FCAvAlG7I%2FMVb6cjbWJVpdTJ2ESNmeu3MYMdPRWhe4wLsJJo1f0IHsr5WHb8aqQVglm5sNcQR3goDtv90%2FzLhSEvnxj2ulCNPx22KMbtMV%2FFnILShlitndxvb3ywbM3Izw%2Fh6DBMoFSSS1GOOEWYBhJ7bfUwvN8tcmkbQKgeGq%2BfzQ9Lsvjm45%2Fm39OY49%2BtwLcIjDADD66dnRBjqkAYEEQ5c1QqFtTdKgEulUQSpv3R6YTsY9ycJB%2Bm4oZL0U5kF81JY%2F3eedwT2rGX%2BbIrQUbF0%2FjCnzWRDBI3Gs2SPTSrYH2TwbgW8K9uyuznNfIix3ywmqXZjy4wgsdGU7UasTiQEpdSqvlq0k2q4BUW06i%2FLuKNclhvlJwfX%2F1FfeIjbBK3PnnFCA9hVdcKNfzxJiFr91HGFjFJVBpNd6BROVUftZ&X-Amz-Signature=2aef0826f2a8e07c10a5b91f10fef978339058f58a2f04aa90063fdc5f82159f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
