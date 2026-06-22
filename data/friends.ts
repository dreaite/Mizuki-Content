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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEIPRVAC%2F20260622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260622T220416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIFP7C2YvNcIAJQ0r09dvbLtGQg2KI%2FqsWKuVxfB8PHvaAiEAv5vOxzwRPPuZN7b563xNJRQA448ivdVh36naY6qOWxYq%2FwMIDRAAGgw2Mzc0MjMxODM4MDUiDAiP0X3lPCYAUdnD4ircA57Vv8GBME5WtTBov9Wz7jiSQEjbizjIC2mVKyzwKrR7coqp03%2F3dIXV8sTDAaerSNCy%2BSJAnNAREBQfArPC3qmgvYPKfIAymBZjBG25IeOeI5HgOQiAiPT51ZVeeBTeukkEiI3A8AdAI50rRotGzY41yQwjBA%2BsRQIArWmNWdyyN%2B8dKC9nAD0obvwDpB%2BvEUNqo%2BqKuSdQe%2BnIAF0OUZn08RW5lSFNLWavRkvhqetxSg%2BZBdoxvLD7mh03lT31MVd%2BbYPg1QQQhP%2BD24sv7DcWDrl9DJFO7gpqznftoojad%2BO0c2w30KD%2F87pm0lXKr8%2Fjz1hvxMW0DFn6jO9TLvrdmOpz9H2hNnDUJbP2%2B9HA8oB3%2BkHkKqsQt6T5f9tEb1sZZhwK0wTXlBNfutqO9EMEPl32pTewEcBtlZ8Tu3opHLhYJKLT7tIWOlin3b0VYosO%2Bej9f3cvd6%2BA%2FT7eVpIztfv2pMswPP5fWeYoE7Umm201oEv%2BbSdyQe3P3G%2FzBC43rNPikfSBNamsU%2Fl2wzRXyvoAHgxg1uq9FopBHoaFwxb7VQxrWqpO0vvXGRlPSkaJj92pwoC93hivqxygG4Uo8bTb%2BJ2vLpGev7DzlukqBPOorVxdz2Z4em%2BgMKOZ5tEGOqUBB8DiiXXlNlTyZrekF8wwxm0ZzZPPvhIPlrNder9wGY5cwNbH0p0HjQGvIqgq%2FmP8N%2BHWlP%2Fi6WqrkjbffQhtDqlxxgf1siV0AUsiEa%2FcbwG8I3yvcY7IhGPdf7FY9%2F4gKCUAJMuvHAvZZx3PCNkN3XcxtrZ4s9d%2FulRxQ%2BVHIKvpVYMMFW5kCBG4dBXmKEEUwokLjLGU8deCP3sYM0JPm6NcUJPn&X-Amz-Signature=8deb4330af381dce84a9980813ce21c44c1828cb754b0ea08ce43ca2a34270c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
