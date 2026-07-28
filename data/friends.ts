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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5HXB3GC%2F20260728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260728T023937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAIl03DHlgkkJms3uAv3hWQvZOJSLjYn47O26V4YJwKcAiAKtHFZiSK1BIxVL4YLpM%2BUh4DDPWnsJxOKw2BJ7KKUDCr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIM19RPWajhXQLbBprrKtwDrYIq4JadztIM0sm3K9QzfAlMPXd4GshZBpXfRD1xFKgEt7p6TxiRzN1rit2k6GS5nXD6JvGceg7TON0BZn7aKn5vAB60p7nVUyXbAuMHdM9Hr6zpVXJJe%2BbkpgmfRuj5%2FpIX1kT7yPDwOFkshxUUUXLA6sUkqcGJdRGQm6FcFfYaByjsJscTQ2QF9taMMQAFrlOkxoss9xdPEOtKun%2Bm4nihiMwQ1HKCAGl1jsV8q1uDEYu3fs4oQtsk17Mbms%2FgWTZuyd%2FCk2hTBaVyD0zK2Ezp03WMDtanHHdkSLAVDdWBVylvxEi7qrnL2G2f%2FP82enZz3RUvvl9QhTC%2FtLANhASU1R0ae2Njo7S2msndEvtNHAkfMcLCi7TieCX58ZBNbiT63nhdPGwGGcyYbn3vUSxXTZ1qgIJM%2BM%2F%2Fu5QbUFoapQIwtU9JSOJDilaDtV38UH70tOp0CR2bpUM7FhIr4qBNkkj5qyNy2H6koM15ML%2FTnoJlWHGJf88KU9loFiR%2B0dGHpidx9kf7WbwyUZVqUWP1NmzH0FVvmRrAsine5l2K%2B2BN21iJGwdXQNmVtzGk7APvJX%2FXby%2FCOTaAZpQT7B1PXzODlO3Xl02VMz7kmy9TjAqnzmNgOwmUPvsw68af0wY6pgFr%2FHQ1suDJQOojLBRXdBmCTOiboK0l2tyDIDHs%2F7WKZ%2Fyi5UiLE75dpGYfTY5m%2BIZg1vJgzmnjGUUo%2FkO0LUxwk10Ac3hul3vuFaYycOje2h5Ql9QHUbaQg4zNgMKR7DtXcO9qz0gGg2cIeuN3BqwJb%2BhClvH%2BX3e0jQ45bHd1wctQK6Rk2cLb6SfS5cY5CqDLxdQqi98V6K%2FGtIImxBdQnskq2CX6&X-Amz-Signature=edf39e129782e2d89ec7e3da122d7ed5615ca63f4ba7a2f61478c76efe97b379&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
