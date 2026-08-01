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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAMUUP3I%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T230033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIF61DChDI7Y%2BjnvLLTKLgqYLc2HuqEtw%2B7s7XJJhks%2F9AiBEpqjLrt2z8vXeDnku20x9%2BP%2BeON8A%2BT%2BwFzvZLfDn8SqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMseajLF9G37U47lXVKtwDx%2B5b5OgfVmru0fcBuwV54OlUvgp2B4F9GFYIo%2BtvWDPidqlszuHQ7lV5QxA8f2B0z2M%2BcKlQQnsjavXKtUSl5BLk0bi%2FMbQYc18IhxN%2B31Ws5tpjAoIN%2FOdC8NJVpj9rrLE4ptNbtKEig9RZdDpa2mfoom8XDi%2BT1l%2BAGHjimROFxKYmOBVQTkrksEnBFOqWzkhf6xeyPytXL5YcpEg7A6nmttP8TL34J0wLULZJGWX62BCXolPoIeC7JfIcwS5xPXB1C0wQj4qb1aAZ6domoYW8Ks9Zzxwc7T12juIHrkaybSP8QYorZvlpUred%2BkPvom3FRUnyPwIBHnTmShLanpGDhf%2FpOni18Q41okrYHqAc%2BcZ2Qlf6Q4OOOtavWr3YT%2Bobohd4K7h6WH2ORtdHvBhkMGFzoYCj9Zs2tETJ9Yxwi0GJXma7JgFiAaIbdqLFzvV%2BBor56f0dxcb3FVKmXb0BncM3v6zQPwhwPa9FWAG95rAe01avF2RCXvjNBKRJI3EpJ1ViuoUGydwlUjxApl1zhlaCuhQr9UCsR77QWelTjrhUIdIQmnroqSYCg8vtgOFiH5i6BM1zBzxkGYbhrz6%2BHUZ6V%2FFk%2BnPoGFdqgIh0zyImjRl7SFq6bbAw5dC50wY6pgGcY%2FkfGEZ3%2FmhTK1YmR7awSBiTuPeaEsLTqvfUWds1ipHko0R0dsEDVA42mWk%2F0xdfC1veH2TPtcDJwzWz9tLeKJ6YFZtUv7GX0i8D%2FjWcDJ0otyFD95%2BwxUKxj%2FM9XHVo%2Fv5tsdI8Scl1lu8B89MJwPXWghhzNT7q%2FrJOAmCtExh7I4lvjAV5w0QkrsNDMKQ9%2F9Vi%2FvsdyNjleNuf4Jo2omuBJNy4&X-Amz-Signature=e03be667340b4b1862c8a821cf14ea8c5851c658e3861b2dd4171ef0894b2696&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
