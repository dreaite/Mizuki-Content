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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CR3VK6K%2F20260707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260707T171631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDHe6ZsY6XeT9CQHq47%2BZbEyPYyVuqt9Y35Xf1pIAPIOAiAaiS0ztLsVlcVTEIZt%2BEAHxHXmVu0soZWB881NbY945yr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMRM%2FUFcZeFdVUDS6jKtwDfYI6UdKeoC%2BQjMRdkn2OSnNeYFYEC8WOqzwVY7rL9pVsmAQ%2FbZev%2B0%2FzqoSCnqpWhB44anTrNly58wa8qCDja7PWCq%2F5uVkBdqglQsVRbHsG33lwA%2B6kw49mqtwMntw5e0xQdoCbewbG29yhB%2BJyymycavoXqoS0eTNpIgYRme9HzmZXSkn9ehHizseTTfDeTk7oZPW69ArYS7FzBp%2FtaPps4HWCGsFY2hFc9aLdTad%2BZgVg04fPgoV6vHftWoCnvNwxp9kCi4dRjpagJH60fhOYx2w6Yqa3337YevXrCfRFe%2FsG5C3AmTfx%2FeWmve3xEr0FxM%2B3HAkPQ8Qnsh8bKkLul%2FapqcuAx8uiWs8CUmjr6pFKNOQoM9pj1DYdYuoije09s7wFzdDEnaHJ29dsc7gbgkZucOSAfCbfbPydaT5A%2BDkYONYOiEUhsZVDk4oJn%2BVgj4J4J7eSXBKq3RJXRd9gpVk%2FFlKqlDoz8KKXf9dow4GmhXoPI9dytHPGIHCh%2FEEFAKp%2BClOjpIywAbEKLvm9jUWdOXxJC8CwwOvz4huKE2kIOsLFJ3vPhlS2sq18jd2I6dZ8raZweSjnZUUZudz3jkkXB3y4fDAbmQsSyM2BnA98oZALuFCFEK8wj9q00gY6pgF9zp8o5Dy5IYXEaBrQD%2BLlcYVibKuORoCJZv6QsbUrxKmMmrHv2gU4%2FC2Htc2%2FNm0wPPIEtnHajsy1fLtb1JKpd5OVro1d8OCy2xhshR8QjkcxCcqVE7LpdldxZMkBWcvpbRPUWxKnWRkAWTN4m4xg%2BU0%2BUQGQBuLJqVIfGau00N3A099Rfr9hiEX4oqX00e0D8TIg%2FzbroP6ZKAMwrCR8oWaxqIdC&X-Amz-Signature=903f39976c1075d9a07cb5c9ffee8574dc572452675e9aba304d4c760f2004e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
