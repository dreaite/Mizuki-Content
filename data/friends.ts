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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQ3YC6EB%2F20260615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260615T131620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHIGZRCBgBmuKemxvZE2AnQ5L2IKCIP5AyqUUrvX9elFAiEAtqim5Dui4M66G%2FyO%2Fr8ONuY01RD5G18thOIpJIqcDc0q%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDIQ3jsNemZtU8JSPfCrcAwPpF56kzD9rPO9lvbXdLkqxtKFTp97YW%2B5XUYZQ1uKhBa3cAKhEp29qFhwDBwwB1RVENDWI46m%2Bzq28cJ3kv6mG823wDDKZtUuOZhgPt5pvlLgaJTIjQAinnY%2BUSkEiiUYxx7NxD9HlpdTDBzDbWqenWs0VhKvw%2BYLp2UkAlx7NE8Iz%2FLP%2FxGAX%2BL6zdKodWB2353EC0zeT6gXkimczYcAQ6jDqZeF99raLJVxH3%2Bcz%2Bz8o9LCH5HY4s18YbXSEJ5IVfm17uU1vyYJOhZyfr7AzFtrXj8ojA2lL7aCH9ii9tOHdSkTyysZFfl8mXFXQ0LGDNgjkAoIFJJHcdfNjFPbhgRcQMp3vb7oylvarzABjLeS9OZmIPE%2B%2BnQLIrzK5fielhLk5%2BDI2JkWRnrQPNtXQ5q6cVU0n9nvidCPlWrjaBYnqFvilRc9Kim4%2FEwxkTKlAhiGAXp%2FExHYbqCU8z0QFs5ycOacSLhXwq24jWa630egL0RaalRVIEvFvtPqCkX3%2F8k3nDJm%2FrsrOutsRcmhRUHvqiOCE713KMH8aEcWXTfXVpdP7exzir%2B7h3gRqXWwHcgsOS%2B4Wcb0AEFmgMUPw2ZC%2FIFXhJdEbiE3UXhEFtq9Hsk02zPgCB%2BGHMPjbv9EGOqUB4J6Fjad1fMUX5%2BWsQqyBSP0MidtHLLIlSn2Sz6lugaUmZdk52VEsz0mWSIE7NzU6k%2BETEX8V%2BwFZABDkPuqsZYELDvKFM2gyEahTQDVwP2Dlhjh%2BoCjrNa9ncpA5QcE6rbV2gVkvJmd6%2FHKHKg1o1SeGCgzpj48LkfpU4dxU5zZcVk%2BwoPRUHfdma9SHBEavKNaJqLdMkXkLA%2F%2BFSJggKvcK%2BSuv&X-Amz-Signature=3804994a8ede74aecd890d441e4913e967d6589977102c3720c67cf9d3782bd9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
