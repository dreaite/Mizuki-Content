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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DYIJ6WI%2F20260812%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260812T234209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQCZZj6x08BB6cv0XrUHG4j28qBbYVchkFeohsPGClQHVgIhALPTS5X1ymiXIVRESe%2Blb%2BpuZisWpyv3OaI9Kwa9LFx9KogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwGlLlTqb7dOJbw9K0q3AMkbrhSjoa6rFoxvahxanCFpnPO0lKttVBG5EFef0GGzaHEDtzvnMuxEIj9ygRAdxZFLlf6G6n65HDwq3NeXL0CrztE%2F1KM674jONWuwlkH%2Bn2ljnAuaGVBxn1QlvjCxLOrpO3%2Fbtt3HNVwsLGT2BuhpDy485UtYLAflJuYQPbLjdRJUvzvG61G0GdfSHyNxUsH27q0jhcbsXMOZzwyvOwO3kz3DAzfz%2FrtazIqhyeHLx%2FE6baVfSd4Sh454RsOllgBmF8dG%2FVH%2BtUB3MTHxqm2qjO8HCdXj12aJbji%2FhdY1ZTr%2F5WUyzXPj6yXSabQTRK5WH%2FgIlmicY1Lurte8Rz9cvYcLehcoGJqUQcxkYFkz%2Bnv8dpIyGrhnWP7NBoMlSdsnmZT8QYuVJqXoGAoKoawRpN7r64lu%2BRAoYzVCT8eV34fQmlWSPbvCXIBqzleoydFDLJ3kKGhr9Xko5BYVEk%2FhbaDejAjivq2%2BmrC%2BFhoba7u1oOAdRq9ztV9Wyce5E63QSPj0TsjDOGsaEacnjz3pate2ndsJTBW78j43WscPTQ%2Fu0FiR9xffbWrJUJScIBvNpe0f%2BhvMwKY0roaOPpsTdLosf65UNtfx17Wrw9bbVcWYG6F9WN%2B4l%2FWNzDNy%2FPTBjqkAaMMsctHcxFZQdsHfPTogDGZi%2F9%2BJugREKx2wodQBiMgJ1TqgRBSiHfVKRnI%2FSri4EYgiGX8IfrLb%2BezuWK%2FsSYVI%2FfdwwN0cBCzOeIup%2FHc31qm17na6SXO7omfTHWbY3oPUboX8CfDxBM9Lm98PNL%2BHZvGWV7Xb7WMwnFaBwqhWMdgwnHHza4wmElJ3sn%2B%2FyFFZadAbSoLjvEbXfBk%2FUCO9f83&X-Amz-Signature=8add94424d7983c490cda602bf689ed446e1553b78aadaf383b8a59bf85a1a99&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
