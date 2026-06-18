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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKG3DMW7%2F20260618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260618T125533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCld6DitZEbGFWCASuNO967UjapOVR4slGaS4h0W9WVmwIgLV22hMi8vM56kZUa01S9SKeXSp%2BLb8slz%2B7F4gQWausqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPA6rloPoVCLI1whXircAyrg62AyFLJReqiy5uFzBNhLNEN9cQQOeeUaB2UnoutGI54gz%2B4tRo7kxmpbDrZdgdz7rxjhp9avve13T9yFI7h0Ww2vLgfNLWmnUuIRdNPtZ2pRfXLlhWvELXTn82e2R5M0ZlpyUH0R0NB42sGBNi893ykZO6JI%2BWE59ApTJlGqP%2BaGusT4YGXOhRlFg5rRUZvA0wfRG3%2BJ5%2FtB0O5PDnrM7NcpbTF09%2Fq2PxZc%2BvR5EqcWEYu0LAFnQ7pB2RButwYIay8hSTiNcZxPNNllLrXvI6hbPHmZUwz97YFQgRciKT1VyUes0ipd53mnFrIRrFEsY4xJ2so0J6WSbIsU1qAPkNTiqvUoRKM8t6TIY5Zbf%2Bu4quKimzmWIRVgtrSp9JQ8Cy%2BTUaH9r63u5t49oJ1hi4wPyWkizheh5agVTcSjE8SU1uKD9w1crzIXttVoYB4IqW5U4H7JLlRUGmIR1oHuWtlF7TQrmgfi5haNmrZh5%2FycljmbuqAthRUgEvpoMzXY784vOltRpIfyTxczogxFePdmdGgQHhxfiTG1wfhC0sDbxujuCIzPxcgHYGM8PgXK9MyNigrYME7GBrK0lSfHXEAkvL7POZ0Uh7lU569czMv2NdKkleNl2CY7MK3Fz9EGOqUB%2FCdlPTllTtmYNGpGrWefGkcByumPFPfnYO0OShdoFuRRpl2IQsqkpUqRicLRkJ0PA2uvWIJWX3nn2AHI4oDKT%2FGU0F91df5%2BD%2BXLEtuOe5lfjLpTC63QnGAnWY1KVeUlK%2FC6pkRJAStPAzvZrMIFPKdijFgBLJRja%2FFHPxPzT1N2Gen1LOvHh2Hh2IrQI%2Fx28E5g5G0L6Va9Q4dbuolLYHyIKJfG&X-Amz-Signature=40e077881b58e6546811a6126a6d66d7fe8939a409030fde5e95c8b4dac48584&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
