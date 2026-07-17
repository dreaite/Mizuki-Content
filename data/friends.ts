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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIGSZNX5%2F20260717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260717T171352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDNVNpwfv%2Bu8kQjrJZWZWB1RXbEFN1KDoT7NIYYE%2FZqHAiEAkPLgfWknDIJdVCCMj6lNBWj%2FkFGAwPVnfUjkX7VIKdMq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDNHuivoorqcUqFpEEircA5y%2BgHTAWI2uUJ2T4zDyJWPZfaKLQan3WIq700f3rrqAqqznhFMNuX7uPwLUmcxFE%2FKPqJOKvHQ6C%2FVDlykVrQxKVsAC2YdqU00aApQbm7LrmoAf5JIuDodOHkGUNXsjGciOi1M5WIlEYQdZfHvaWaIfQ0KENiJFSlf71w5NWUhTrIh2BggjQhkKUd%2BCgkeiJ5uYou3SdUCYcmqE2VUiEPVvau0YXRmMK6pmA9KqryjpOscNB7NkS4R9xl2%2B3VQcpvJt7%2BoHjs33f%2Bsw27Vjit36V%2BXUdgSfWefwpeH8jTI5ve6Nkr34XAdttSXMhRtKtBE1fW5aPg60xYHiz4EKR6SMDAERQECniKz%2Bw4uQlxkbB5mWSf5F40VnfSpy28WZlk4vueR%2BzYVL0ckOCjSko3X2QU6phQqUww%2FqMJ%2FNhCyyYkgu9yYsR6qdhzHiEk2QIbzwypE2hAT4At22Q3l8E1Cu1bH9f%2FKAK4WXf38JKc71KIf7w6fsqe8lc%2FuUAVcM%2BP5ZsMsDltW%2F1%2BUMMmtSVZRAYjs1qKQxWA7x9Vq6TNo4%2BnN1atW2Rn1EI7pT8DwBUkvMgX%2FGn4BCJ4HFe3g7PtjMYvaIFDs6kOuKOcha93JszP3MiuHwwoKbXyk0MPKU6dIGOqUBHWcR5KOCOPlwEsSqfqQnuABACJbb7XJ7KXxRdrhzo5ncyWO%2FBH3dHXI%2Bn2dsMWanvpABZrK5V3HDgT0m0v%2FAtJcO9taaa2Ik%2FDwSNByCJZRRH5TBhXoCVYrJLIapvxcXET2b%2Bxe%2FfhcNoBE5MADPE6CWIyRnK9c4bmn0584e8aPt5z6DcNEQDUDCrk21jEMHeH9whkSzhsXWgfchodmdn6akRm6Y&X-Amz-Signature=6ce34194f1cfbe12c8a0ecbe2d4f2d7843f1624d0ff3ec85fcbbdeef8c7fccfb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
