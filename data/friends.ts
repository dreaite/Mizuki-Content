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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THRKWU3V%2F20260724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260724T000156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIB0VEg0moLsm1%2FfQXio%2FKdoCMpJ3t2hE85nfP7pk3nktAiEA07w8SyZcq6QXrHcAhoimWqjoBoJ3gVB3fO1hFrAALzoqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMndmN5xfM2nRB1v%2BircA6Dbe8n14eB4rN2lw2ua%2FxuRHrTWabVnLg%2Fu9vGBbZkyFM0gdfuw0KUxLy8wxiGmCbrcigZZXLqQPPevvTstkzn1zueyNJy%2BY8VlCZdyK7Zw%2FZrfQYC4wr3UemWBDy0q6Q%2Fe70z70t%2FvC1F7GMxiTyeuJlyWSLmKkScLmYP8B3THwzTLhbpCBiJ9ExxgD0KX%2FMgl4kCdUg%2B6cS3gChfufVC%2FNFrAyZQSVm1OQoWevwdnLv6DzwGuymq%2FSoVgCC2nnKrO5sQ%2FJfe6xYVbcUNz%2BfZf6tuZPjaCOQ50Ly4CJHmS6wyVaIrvdU%2Bi0mQ4VTyx1Z574ZhKFut9OmuA3VIIPbWlTIuPI%2BiROSk2TrZ9oBEzznDZiMFqkdQQY6dFEkdOAJMbGKgB2AxkKm0P9wUkcWSTZpZOQ0LglI8YsmM02luaRQCNF7GNn4jJuXYoyfnALP%2FL5xz4CeCuxId7bb33E4gJI1%2Bit%2BaWpOSASlOY%2F1%2B1%2BWP6vap4BSErUfr3snZyR7ZSnlEaN%2BePkGJtzePlrCxtDNBSH7YbeH%2B1mfZ6KAUSHchd9W56VOmzNkmTr69UWbdkJs1KT3ybCNzFR7GIdWx%2BuDvcXZJebtpvtbOtQGRYFHX6EE2%2Bl2YyVJJMMMa5itMGOqUBNQg%2FpPVUooMXvj1hfUd1wFX0ZUq%2B6xLBoBqmw7oxHRrk7gWmz4ZRgiLcJ6LKGNOUiJQLZ5k6vPGlJo0gNY%2B%2B9u9Fa1maw448se8XDeh7BYLxpAUM1kqYJq9I0ZLulkkFG4Ov%2FBSKHxecJ2DzIgKiPG2VuuBfePVKXomylWV7UChfHt31%2BffeA%2BpJEVotOAXm7saWQpLHd%2Bd%2B8%2BdJjr7f9ldFq7%2BO&X-Amz-Signature=134731a6feb7bb3c7669c3f34478e8263b834b168585d25308bfa70df0749154&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
