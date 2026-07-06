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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OTMJPKB%2F20260706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260706T200019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFC%2Fwiqo99n0XDvx8WlcGnbh07pDZ%2BpCiRaWzIDtuE9DAiEAvXHUowbkFglJyBgZTSvM31wymaSe60EegCj%2BTrrStb0q%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDE4P9pU0vN4GCTY91yrcAzflWJjOczmH7k4AnCUvRDAXpB2XajKQdTrLGTwBoWGoeuVHYkb73JW%2BOVRQZURK91UZ2ZCYfsSJ5YnSxZ57nnL7%2BvbHUp7cRtR4NyYIp0j6loMP%2FJu3aGFPp1TnYViSUhjpVi5KYMKIUTOvNVDqh%2Bj%2FhmUuCOnAk5tW4fxL%2FXA9qbphavrNkSqWQXnC9bfQASb3sTpcMSKZ6DITWYyqlDrKChnZ9ZghRthjz0%2BiO%2FJpgQRPjnC8XQnW46o3kuDvjqhmnoTvthNj7e%2B%2B0aAa%2FvHy2SP7WNb%2B7VPCc3lZQxygrwo81bjGiniRUHEIkOOfyuMriFrw%2Ba%2BUkt9TuO6TS%2B50BsJNkKVgsB87jA1XCYnBzcI0EuYConCgZCeC0hnw%2BQ%2F8345X37gvgJ3q%2F%2Fw2MaO3mOHoeT5cSyHHC284PVoBzjoygXvCcHxJnZro%2BoftNtOiS%2B%2BJ4FRjmvv7tBcXpCMSkJEifxHUfpeJcd8pHgRW43DWTW4BX8W93%2F8Md9%2BmMmrgLGl5GQ1Y4DgUWU6qemAsc4YwbYvza1mqpbvMEEtMS1vsz8NakdPBhbDphoF2tG4wZHDnZ0MhgTIRLOIp%2BvvB0uNu4VpXYIURSSA1TTfNDrYFSBunRL8mdefXMKL1r9IGOqUBlf28%2FEQ5qGqkOpq4ASFkf7FQvWUw85zU8Uue9lQbbnMVD1vHPOzAGlLLFy%2FoGELhfZwYE0aKl8Q4R2pF2MItm5TkCexeRoACZUCZWP37%2Fs9UuyCu1vRp6Zqxb9ozKk3Y3R1C1mZGcGx6ov1n%2F45r3eGuA%2BwnVKaCA814yEDH5ya2jBTNM0IPvD80Ztn%2Fm0Tv%2FPCR41myqcU8%2B1NyxWEuSMBcovaK&X-Amz-Signature=925a32bac27026437ca271fda55084cc327a41b41c8d8479d0618d82ba0b7618&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
