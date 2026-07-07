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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LWRHPJN%2F20260707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260707T000903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICK4B0Q1aQ9LL6v2URHDwlG79OfEaksUuyC8wEta8QmqAiEAu3wdLrbRxBKmrTE%2FoEoyV83FU2Wtwwe9ja4eGZVIFTQq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDAg%2FxxCzFQh8br0LyCrcA83kNje3mYHmYdZakmYUheJhNc5sYhNuAUaqhhoIGW0VvJQfYWP%2BtSQnt%2BBwEzM4uoW1bjqHt75wfxdVuqo2yrI8GtP1aFzjxNTxvGHwP1iX7MHEFjRERZxk0hk7m8ppu%2Bk99lfrH%2BlsCMDFXlsk4BcaRRBuccFgVPGCaDlFsQZ4eGBjVpPXNU3mI%2FG6wGfD8KYBsl0hez0OR8I0BJlslmiLpAZKV0KtTacUD22RX3NawF5IXser2EDzBnv%2Bi%2FDjP85Y7ID%2BeHo89sYgGj1VJROjeer2EuGgX46XCoGyrVcjqV0nd7GY9O1DfDfggzh1jN6pXEFBSG%2BV4XvKzjfv%2FX%2BlD0a9fLQMRbLG7DXSLzQH%2FSKnbyAAtbwBajWHSicR6J%2B3OY0fc%2BfjL6G9cFTJdJm5X1MXJUNwKPVmYrZEbPIvq8YdsHCFE89hOnFNq6rdP8A32etzFzmuRJMwxinoM2k1crDivItOY0ONYUjd%2BUKKiAIEJ792sqc4m00t%2BwHxG7UBgQnR3TPaJXDp5G1M2B7gJvQ5kTTOo5Owtx9vKgmRzQbaRFAunWBdtnQ0LDVWpZ5OFaaTb2jZb7sa0KvBm2h649BR4KQypZ%2FigQ6XND1KD%2Bup60%2F1I5id49eFMIOysNIGOqUBtq5ziVVUVxk8x8PgPv%2B4GIdJ%2F2GPhvJKt9RwTu6OCI3tQCj6KbIOrEJ2bN6WypJPVdc3ZnzEuyl24m480DOIDI%2F5iRBId1wHLmx8bEXY3201uUcBp1CszcT00vMUJfegdYrvNhFnCK4yxheKHAGsXblp6z6DX5OhTrXk%2B1kr8iYF4ZlRVwT9QUh7aMLtPm%2FE6irEGSXHYVHOmanMoPYKACYXaru8&X-Amz-Signature=6cc9a32aa5bc844ef8e3066b19bba7bfab0aad555f396b41393cba1106c0348e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
