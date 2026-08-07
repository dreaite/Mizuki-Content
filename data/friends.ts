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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5GVKNB3%2F20260807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260807T213940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCyyBRizN2Xzlkvo2Q1r9fUJDiJ57bsRoKD22Sb2ytgcgIhAK5jINbVEuibthgx1vhQTfBViytdlOH1O8C%2Bmzy%2BFyMtKv8DCF0QABoMNjM3NDIzMTgzODA1Igy%2F%2FMuYEA3uynm6dUQq3ANkJhJ%2F%2For6T4G4bqkEqYGp%2F0qLBi0f3ryaso83hNiw2IwxexbY3UFPOe7EAKZxpmFMhb%2BmChJObUq%2FY%2FHR2QrSI08M%2BG0eC4B38oqMLdntuPN1DobT%2FFFYgQcFaeN8M4r5Bc%2BuA8aZAvYwKzyF8t1kSh18SVipq8bZdLN9880uWoWnX5MxNNqUZZ6nvgcKdxLdKndlykRzrtvVDb8vcpye605o3Ur2IGaYkkCgaQkuNYElDIfL5jIdhZ%2FoaWQZkrcw5xDyvJELfvGHhn4QCEglya8TBKSzsNV4Zjf7N%2Fm5HG9Vkg6TKZm6MoXLfAEFCTg4ey1D3Er2QyQngDLMs1NTlfrmIiQKfSyRl%2BMO0DqAjYYl4KWtczN1Wp5dJdPieoKFgwmAvKECmKzm1wkWIGmDpnqL04yMdm4yAbVIT%2FsDeBX%2B8djErWXxsvqz3wgSykmssGXVsfd3oliR%2B6qQOnyouZ%2BbCyKdJGdxsFHBD3jh3qHicyqKk9UN0wjrMEhkd98qPlSNXqfLTUXzcK8DnVhuOoMiYeXnVHufQiA31qgBlDVfz80VMsx%2Bl2MehoniwUU1UylX3LcLd1yBgCGtsPRza1TGmBoSZYqFYACz7cRZlZOyqk%2Bck8kwrKRvSjDj%2FNjTBjqkAZQ7OWfeUGq59h4LMB01V%2FzA7Fr6N31PUu88JokhOLV3FbvfUV6SiU%2F5p0R%2FjRSL4kIOxeDiV4JltBGc4BuA6uHtSVAnjirgATVUmSry7BQWBAR3%2FVH3GT26Sii0sx9wrfWPc0Qmvfb3OiEHgwHzl0xBmACHIniquddHnyETg9OcF69jJuQutaX5J5kEDoTDYTxx1Cvh2K1VHwdYMwP3Q7vwsSG8&X-Amz-Signature=f1c0a57aeaca267c0b7a7f36665d90bf86b3fafc94004308a3014ba92edbb31a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
