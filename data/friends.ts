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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3HBBREQ%2F20260718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260718T215240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLY23wbEbt06GBqWw6yEnMKUYVPqUuybOQL1XWbhQtZAIhALdwFRO5NzsFYjDtb8JBlc9jDsXP7%2BvYRMWdKMgjRbgCKv8DCH4QABoMNjM3NDIzMTgzODA1IgwJJpEub%2FOlw%2FmhdmEq3APGl5Pkoiq9Loq%2Fi4PQD2CrjUNf31h%2FZpeOAzb1Xs69Qc%2FzFqmSSId5m5h%2BMRQv88jDGc7%2BQ5zqNyMBUrxTnNzWQSeQo3LBRzPh3b2L7gOedpAR3s%2B2af%2FAmC%2FhZxnglKh2An%2B0NqKUIBbI0H9i%2FbITycCC6CEBWBrDci2J1PgcwQUXCZLQ3CW1Kb9cM4b2%2BTKG%2BeFCCwkqkCLUt6nVRlRz5xobHPVNXGxU1YKov4IMwH%2BZqL5RPGZxtY0aEwVAiuMHF%2BPr5TfJTDGbCRw8UC5HAhchSsyVPML5qCn%2FdxR%2FXtxS6%2FlG0sY2TO9G6muKMSNWembdjRB4lWwhZ1XesEkJhwo0ofmTVncDl6gVk2orPyleXy8et8eS3d7ZSeq8d0wZfU0Xllz1nLc7Bukfxov6UB%2F9BNO7QFw4KgZCERCcfDefqO2rjIWAjSENJBsJ13EOynkUNBsXFhPledsbs%2FVesw03tJo9sUjJZmFZuM4I1rJEMtugMdFxwhY295t6J%2Fd947c620I%2FosJPi8%2BiXVZjkiN%2BAOiNWynwLRziI7mxC6NIxkwbUOE9uC8D5kid3Js2M%2Bfb1ZX9v5mSlSTdERwJculBXt6sz6VersXNJwsPHFiWhNA2xIup6Zvw6TD%2FxO%2FSBjqkAe04N111iLMTUjtNAYPx%2FvJAfGqcuEm4HMJzJihM8GgZvUunS78Co1R%2FJU%2FWMrGmK010ku6uDPyswQiMNK1QFd7kNKYM%2FdlqJO40AVxSlKvu4mzpmeuA66tVGfXJWQPixufZxpE%2FOQPUjoDS00rkTIKZCIiFvANDZfDXOquDaJn%2FMpoe8ZmukTD538eBsll8p5UH5G93TW12FLb6w5HwKFlO43zA&X-Amz-Signature=6527b4bce0c1467f168d2ed1977e31f52175e9aca68d2401109c3e30a2c963d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
