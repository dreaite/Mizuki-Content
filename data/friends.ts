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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGZZU7JE%2F20260812%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260812T020342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEYBZSn%2B9TBBaZJbvlisNLzhYGjxXH90WlYOfd861seaAiEA2fZumsE1CyaFhP21l3s1GpHknJyntnxGBWUFegYQCzMqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLNKNJ8zvJIjNAhpVSrcA8NnuepYkQbH4yCLtDhmtUUTho0NH%2BTX7W3ZT6KpItUXoMEu0HG%2FOTCOXgAn1PAwW%2FWMmLtyXXYuXoXHkg1idDrVvaCnZH%2FJagvVv588lFGHydid8AJZ%2BPpg8A3p7n3xcCS%2F5oYch3s4kXwXEziWMe8RkX5VrzhTQ74cZRlm0Gd5EzIqDP8JCONVa%2FmerAk9crBCO7hdGutdxUxg54r80TohrWsCv1wITXA6AED6DezZo517YPf5L5mvfx7bFH2dw3Qwe543OLb%2B%2B4G%2BuW%2F36Cb8MStY8SQKNEE9Sh4uWjRjkUkU5WwVFMTYaM1uiQTwbj0pZRusluQp2258g6QF4qZZLDGqmj9KJOCjTkwPlR3faYVNYr4vVd74Y5npNP0H%2Fg4qTufrkttsKUPIN%2FjKrhFzUlR%2B8ZhBgrOqEgExpr8iRUbZyAdrijNk1eK51fHVRvu76Endvj6LE6KuczMyM9n2Bqvbqf%2FPLFl6G1X3QycFUcdhKsbgCr%2FVsFOjvESi6Wt6y9S1k0%2BxWOEXxZHC0QFEB%2FbqnlpBS%2BM%2FORm53HIDpqVEZhs9tb8zGFzNH3WFeqf6YqO0wV9evl9tD%2FsXdqTWVU%2BaaWcAgMuyzms%2FO4tokYrKu9aTt2GBzTjwMKXp7tMGOqUBXCxLDsy1XfgF8c4HmGLdBmCOBboEWZyKViNOSRlbkJ6%2FxtrhA1e9ZEapC6fQtqotIyI3WoSEneD0e0qbHzVWIP156TedyS7oqxi0FMLUi041YjS2zsMHZ5rcuTLqK9TP5txv0eEAtXZt3FfheOgZ9tCrZhlz7Q2PepAu61%2BN0EPPhvbj%2FMzVgr0wwBorBN8cV7f%2BC7G8DU2YePobFcTKViAX2hp1&X-Amz-Signature=68e5ba6389df73146dc227a22c78c5793c921d8f3c842bba14a57eba3e2eae80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
