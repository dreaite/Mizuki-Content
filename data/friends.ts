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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6UIOFTW%2F20260807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260807T130652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF5Le2r%2FCLkOBoQUmjWUIjyh6R4qcCWfnO66yto%2FOH%2BPAiAz0gLCTC5q40V03c3l6LDkLUgrOUbUj9Nve0SvNg0XRSr%2FAwhUEAAaDDYzNzQyMzE4MzgwNSIMNJQJ62dVkv0bZdIzKtwDwqHgi9k3ymzbqMwdgZZylpFpBxqMdLJHsTwXJEW%2FlAyNa0oTHDeFC1bQwordQFdiwFlCyuT%2FKN4wZTonoPv9GVoDKWSd60mi%2BPQLit0BgITChZ8E8ZDLqGSjcBRQqivIo8WM5Ae2YDMNqyp%2Bip7qmSPdhFvdCVoPU%2F8b5LRc1fD2v7dMX0UJrt48ZKYNh%2BGFx2YM2LgLCCXh09LSFzLWQlq2%2BZFCMgBz%2F6TTJlCYiD8a23s9g7sglz6H6cqlSj%2Bh3BzcIoQHk50vsqXhq71aKgB%2FdtPcFvjBkniw9OjK8oaFTsgwskS1twCQDCHUv%2Fd%2FmmeX9xjmp5PqIUtYF8aXG7KoJMzdnHRxm%2BCxsANmwKLmzC6IauI0ZbBedffvuR%2Fl8IeK%2FfWGMn%2FzfSG9kpEgtyhsLUJJmv6OTgUDcyaO599esu00mOnMr7bEked9qrsJO13%2Fh6g1%2FCR5LTr1obzQGYGCRtSspTd2Luwklwf5S%2FLdD4mTQUn5rLBy1pG6d2R2XqVmTwpHkzOigAzwZnH7hdH3Semo%2FlAR%2Fzsl2X25uIT7TgvoApuAPdwsbO8yp%2BdSCqPD1BYfbWz%2BETKLQ4rER58aQ4UxqYtP0NYEQKrzrirqjXrjQwXFF9nOF2gwkf7W0wY6pgGTORxL5j2MkmbI1HkIwJZOOLWKfIuW7ZM8QhWlFhsAe56NLNW0mym7OVhoq1BKH619CJS3o0vBsxbMQsyD5%2BIvQ%2F4rqcTKOoKyxcNDPrOwScRxMVdmuD5yh5vGnfyLQNVApx%2BS94YzebJCj9%2FnLYiih%2F7%2Bod1reesfrlSpOsIiG1dnY21CEbWX56BkQ%2B7ngIYW8UJI9b03vsedMRihhgTP7vPXwaEE&X-Amz-Signature=3cc48c7270d38bc5c8f40186dd3eed5eee6d6183560b212bcd220ad5fc7da252&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
