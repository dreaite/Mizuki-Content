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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MIIDETH%2F20260625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260625T132039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNvBvmM0Vy66Iw%2F9zZcQTZwfkAYeEm6iHjBaoW16TCWgIhAKZw9XwuGGiO52HQm39aZNWHtsRcIYs7%2B3TVoDY13G3oKv8DCE0QABoMNjM3NDIzMTgzODA1IgzUsPrLziXYbJ7A%2FNsq3APDAu1eD%2FMiEb2iRIuHaLtLQbTV9BPAA%2BYHD%2FOoKTqdRJ0UES0DR6mEq6lyUskJbjsDazAsGK8azLck8Lqdd7fI%2F3j7c966yie%2F0DfHbanZZ%2BeEAieGmSAqdsTnWcEPhxfzXSaYg0aufWIwGFskZ8g5u6kjqLqld9%2BnPkbF1A6gu6LiuRrQfDNPKNhWC%2FN%2FHqPSiUTIpmZsWjSdY%2BDbUD3KlwJXptOigrri%2FFik6uC%2BhS%2FdIf8xXg%2BO7%2F2xJnH7bK5zvd4wguHNeHO9f%2Bws7EuvaxTkIwPO8c54actm2jR91aLE8wwQYAuadtyYUbLpPajPeD2%2Bv4aAHqisPxxAD0nmlC5W2FvzD0JXFLxGE0LyXDSw7LZnD0%2FpQTgYmqrEUbw158b7oXhrHLxWkIaQsX5wmC6x%2BhYG6nUE0BItanDRWoRoUWRfk33A9ujmndc3M6o7Ee5yV3yezu0sSlsOHDBzmNQJ9ywfSQbxTRCWxnwknvfT0S94kPBc93k%2BZvairIdJqRWwIyz88aAZxrXv3LTTpBll9aZ3bOnP6JEn002hZrePoJpTDipKQwdw7BJLWUnz9kDfv77%2BiIVSQhmgI9Zn9GvKDdwTb9ImwcSv7CDDWjWKIKN8o0ZVVMDU1zD4vPTRBjqkAY20AZW69kXEv23Tn0DfWxONvGGm0fQG4ZdOryrRBSeKnqUVwIGzU5gFmkWu0cB9gEMA9EbjE1YWvkwx5xtyzKO6vUmHfivpehM2Z2raw%2FuqP%2FKHNTMauK0LzZSAtrZW6RwjxPrd3v1YwhKWj1uS9EDPCGeTM2MkA6lAQfhDG45kHx5Uwmi8tPEwyXy6FfB0udRAqgs%2BgTTnmNi64Wb7JlFQIzld&X-Amz-Signature=7216d5507d93c7a8717b75cb3880e35cb8f74637a9782b4dcdd7d94fcdb71091&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
