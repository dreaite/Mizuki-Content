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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZKGSJUA%2F20260809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260809T034409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCk6kyg66uWxch9UoEJ0hxmsTej1pKwRkji%2FX3BrOu1yAIhALR%2BiVYVn794Pho0RweULzv9S7gXDpwmse3djjQ4pNh2Kv8DCHcQABoMNjM3NDIzMTgzODA1Igz%2FGSFndQjsRHeyNRQq3AP7Jc1JKhri0iODkSNf%2FY0UP4Rp5LG22rEYA3fXMWA1TESKalHdud%2BHwhhTOaLIWP%2FlJF3p7VjR3UXUi%2FPjXQ4NQCL27pKu6TWGrts8BnuWDbybOQ0JWvj9P0LivwaHvNpnma0Q7thCo9XNXgUjYz%2BBUg9Nxb0fLlHd20N6Jap7loPz61ClwEVaiiP8ADb6f9m7JAvBQHwCIizHDJlIZQKjOsa9wMfuEJ3OBt4n32iH6u06CHD%2Bwwh3EsNDRbkd9dBtSZh%2BNo9IiyIzlpIPLN0lZKh%2FgTTKikut9l2JFhH4yJ9p7esn1b83vbdkcBaeZwoMyVoQ%2FC1KxIHapDDIhT27F9nqET7Pdk1sqm2bviyVLR2jeJLwh9hetgZUjMC7E7K8NdarElaqFxxIjjKfwIIj%2BEBBRu28UPggFCzPQHA25W6sYBzJq3yBNVRATETRiZIGYpmgG4KaDnN8ZqY%2FWixoykb2XGrBPy30S0Bc7a2TPScoe3QWtpf6szIHZG%2B21ZxdX3u6zZeZz7WiX7LKzdR0hdKuUwE3qa3r%2BiAT436gjLsA2%2B13kt%2FYg1IgWbi0NNZ9%2B5wUTkSpTUCPYaOjQeMzEPsNvz0y00OuFcymkKspGjqcI36FC6jyElu%2FnjDs097TBjqkASb0xjo8uBMoObPqJ%2Bi2MsT57WF2772eb8CQHY1nZA25xocyo5EnWtROLqTPLSGir874J5Qa9EBv0eeeH0EZy6rjhlGfsPMidLFfy9aOYDgCMIm97QU8RmI%2BYJpCjofWnl35rrh1vsAioveroyZYHlfFUWwW8Ha6%2B0hdV3cSRkjznJ8Atq68B9OTMC9R9x817p9vB2OmcKydvUEESey1RnTShAVD&X-Amz-Signature=dd497f42a340df18beb426b035792ee8f71206e3c46f45e05086fbe2ddaa9203&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
