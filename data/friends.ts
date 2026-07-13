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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RTPQB5L%2F20260713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260713T032724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIE3gR0F7lvNZHKOlN7JJg5xwZ0VtCRGFxE0eonissrXjAiB8Cb4%2B%2Bjmd4rmiQvU2rFEwB1IcFIrRE4JOks5aljksNSqIBAj0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsCDoROs2jkfSo06mKtwD0B2cnE6A9bSwap605Rv4V7M268yAA1J623TNca%2FbMLEZ5qGGY5lDmZaobwbR7r9MYfBpRAxSpc4JV4009MIz22VTC33tllocM54fS1JMyj5L5KGGQBn5Qt1rGKofiusXeti46SyWmUmmPHCVzNKbtmTo4RTghvWPKmn%2BegKjBWMQ6fuRbCgI9LpGMRcktv0HibszI8nR3ZE4vDxIJ3jMJ07pLaZJU1zG8YPVfp2H8vd8K%2BBRyeL5azEjxFf32aGv0jmHbeyg8IAMKrw%2BZ3nsHryt5SdFyN03dMir29nBZAAet9ePz419H%2FKZaLjKui9eSOTMeMpZ6PDwdoicAAFtOFkaPDFdcUpWKc3%2FTaTggL6amZepELMowl%2B4BusgVBcXXhvrW85kXmoHTpVAMaoF%2Frxpmg7f2MCOn%2FOn07OvLaWsE1GaAD70Z5w7eJRCMXjsT5aX3ugxmKSm1C9UjOWQc0Z3%2BuQCD1YaL4vidlCb3%2FYQZ4pUi3xd%2F57Lg%2FH44iy%2Fh3SfIPBklNc%2B8dIlOzidRKf0JvM8bxSIYKcU4vBk3XCJNM3YKVoO0QmyZI5oY3TIv69EIk8NyIQGUuY7HNG6kMB5LsJqncGNTtBE3tShAo8e2IopUA2x2RoCSQswxZnR0gY6pgGr0bHPcI8NKLV75REoml6VVGZkENyNMY7EusuKpICR5P5zvlMMddKMV1XaiAAqEtQLRpWZ4lR3t8VvYcgRAu9tNmE%2FV3xMe%2FrY7TS%2FC9StZ1dLyOguXIUAD2cRUMB6lmMsvS4eY%2BoA79OXctXIbRqVjhgCkJMde60fIrOdVvbsW7aBhOHRKQ2recU7fDZlCnFH22RnLmI4%2BhuQ6Amd59GmXV65QqQt&X-Amz-Signature=2629e27bfdc2d68bcfc99528cb397e714cea64d0d2d8b0ef71637d9f2a8e8bb5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
