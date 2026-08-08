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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SV5ZKZVW%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T163510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG4drfeDYzIi%2BU0KalgFaCqSaVQiPnms41XEO87942c9AiAEAkeSHd%2B35rgHEQ77mm%2FOlcEtCkQtOFA9wQ%2BSWJFlqyr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIM7vsW4L6%2FnkEh8CweKtwDP2yA7r94X8d1T4bZ0fzAsyW1NMTUAkL5R1WjnVJcwpxmp5aDBYRv%2B7L3%2FPBQGWD5iCPvv4WUfaJDhRY5cxd9hLn1uKIx1VD47oiAzPHh7ZIwzXqgkppgR%2F%2BUhKzvaieCRSpxqMOhTvEVwIuP9xbDUSzIgzaqeNXYTWAwqpBZkI2PFNKwLWjXcgfK98WlKtT4lfKBfgDzbojjeGsM1sF3Q0HcT%2FXzSsxwk6v56oAG%2Fl855rL9UgVeF1Nhwki5w6TqEO8sZQ%2BebE4t%2FeURgiMAwRhFmV6gf6IJCWKpAc3AmygaRCSLN%2B0e%2FNMirUrsxLDN%2B71D%2B2Z3XJw7K%2FZmnx%2FvBe6W47eCYpRCZqE2OV5rpui9v11ErEGw%2FDoctWBOCwkUaL0ZPDOPwU5YvFUzQDeWI0EPjNuPzZ%2FygHHd8Lg93kqyfFs%2B%2FBnrFR1OK%2FG%2F3lXJk6tnR0vOAcEdTqgcwFe2TQXO4rwtDQYGae6qRdKkPQ6GfZMlDekENrZXzUBu2nCbmpXbLOf%2FSQbk64hw1kabV4aKNfLpPhMP2ecLUcUa1nDxkCFFETE%2Blja3yM6o%2FP0CxoBQbjMcVlfHvHri0atR%2FSR2z6oezk54fdcHqHc7Uu43vefB6pVB2BVNECkw9J7d0wY6pgGHd6IbYGzzap41wkYM7c8k5ATWCIdk%2FH142shPFyOTgS6YYp8m6jmF7s0jS5YU95MisjsjmOD%2BstHqDdu5JmZWZ7IC1axR%2FuzvpLh2OnNcWI1JnW8gqNPqvdoKOIterYF0T4ysfrQOjOH69ffZ6drOmPStC6kERxrHpMn8Qh%2BmYUQwVFGKxLeyqbGrDnQHnBSdF3ilPQhkb50%2BAHTeEDNxJub4N%2B4F&X-Amz-Signature=5d9dc95ecb0efb2e50c59dff93feacbc6cd29e03b0feed63d730cf4063d7e3b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
