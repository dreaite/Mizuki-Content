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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYS742AJ%2F20260702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260702T045834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQCpVVqkKJqClGO6axG1gObOD8qGvKR8H7upRrx0WtCpggIhAPw9orMXLczQNqEQFZlQjYTfmncsR2%2BVnHgpmZ5dSUXJKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwf13ddRH8e28VqpFwq3AMYWmhEtPUls0c9RNCiLvdsTy5mvIu%2Fmn5jvPz9PmwLO8fF%2Fgie5JHrfoG0pTvrzNl4fhJw74NWHy3RJjIUw4KWnQMa6%2BNFEVWMWsp1t%2B9E4Ejw49QS0g7AC%2FKIG35JBLOt3KFhq3jxkYtjrgpZimpy81Grk5dsFwPbIO6p5BEwtftcAK7RCBlO7jc3DzWh5VQMCusNWBK5m7D0ZRZ%2FH9q8Kxp1NX3b6rpW25L1Rp6n4NxKgd4nfZLCxj1rC8%2Bio2NgRe0XlsjjKXJpH9ui6ht0L25XBvHuzRbWDhWLGwNoBipCBYd9bGHAx0L%2BwoLSg7X1Jxy7uogLizicMfzvbaORv9%2Bk1DWdBBfIuzhcauOAwcKFFCBLezD1KbsrBl8699Zd9vJs7TH9At8FrsWCOZ%2BFgMj0%2FwoEMbFf0MNnSDk03ftghZqrneaiqg1Py355f9ZGU2AYxGXZuzkw95H80e8gx%2Bt6h4CoXGVWx6G2RNv5Z0U4EnGiIgkf6duNSwQ%2Ff3Y6Go%2B%2BdBkjnRMcIO4rCyD7cfS5ds5j3yigclXwR%2Fq9GTYut7EdRLnCwPh4qzeN0dIRfU%2BOGB1gpVaFuYorWBvHfo5WYegOXaajphJPKBdfHCpa%2BxLrv3d9DPYkOjDXxZfSBjqkAeOxcFi8H%2Bmk0GBePLuFshOs0x21%2BSvIV3OzO3sPKVJH9n6Iv6hC6B%2BG%2F%2B0aBUYdNUnhyLu1G5vL1YGRaO8LBzQ4hnyiPpSGYsYpphFZ6IId1BvoPZfQ%2BBVli0WgIJ9Q9cOquXFKL0SrpPZddzQVswfCHwsqGu5S6ZzVEM7cGlNUCfFVX8egTpbgCJeqECon2H4D%2Fi9NQ5t%2B%2B6CzY19Halgy%2BTN0&X-Amz-Signature=fee839353d4a102f58ab09bd138604599089037cbcc4d27edaa8c1d6ff927b42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
