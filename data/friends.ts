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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJBWOGFL%2F20260618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260618T163540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDP%2FfkF%2BMYru2lfdCuINOG2x0rLOLAqz2d1QT1BKfj%2BUAiBp8nAejtrwAT4NvhCUodr%2BqiGLlG07sAIilbLeI4y5ASqIBAip%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSeok6Kv3p7iFR2zuKtwDaX7DCZEMUo0uwjTxjyCERXSUOxGxlSDtg%2FneykZzRVgPhNw6tx1V1hWBbihEWrq%2BX2o6ytfA8sENOnxaba1kCliUqc4LcXABq9OxlHUbgQyT7%2BsuRoo50L6PZAdjMViiSy3juiCl3rL5gxZbOzeSyEUgIdw5C4CP755LEG1NCpr8bpJKVeXsBG73gsWobQi0M7NP1bQl%2BrkF7h73NnuIidvC%2FMVtI43AACs1lk4VpJ96J6ulHb120PoY4f0p%2BF17LJodEjkNPXGrrbDRY0ZHBxgWOrnMj%2Fk%2B%2B5ceQJBP9DJo%2BAmsV7x%2FoLHzeJkd319GfnHN19fbWiKKgJ%2BPRMH8qQq8SKrSEfEFf0boVA0L2OcjCNSjO1BJ3tT5VyWmv4ndIE9u7ws%2B%2F4TtubBC8Glr5uIgFUwq1Mjdt9IBeI7ZmPwRb03WBe%2BdLp2FTGNjFa1UxLoWY3t2KJM%2FemXafRdmFqRamtnP8F2nt4LKuJCIKvqm2vgL28gQqEH2U%2BLAH07KpQuz2DqUMgNBd6cA07nLRwBMX710vI5mhhrB7skU6%2Fk0V25DkhDPsd8kYVvpMVhfJn4BySmZQCSh0nSScIy8JMkcAu8%2Be%2B41OzXPavrZezzDlyDYzkTzelPbaXQw7LLQ0QY6pgFkWH2p1wd3I8%2FVRAJr329T6yQMU7LF17KL2m%2FkdSIqkv0VHExE%2FZA%2BnD4e%2FDD6z7StdMLHdMCSVK1kBN3ciynMBHFqNMZgQ2a5TeNjbV6YS%2FvjkXAq%2Fo52MP7zgC2NemvabIQGZKsZf%2FMrEODXyTl8Sethpp7zTp4BBzjNhX0YsGoVBKUOQRNWQTcePTnyXbB8VvhVMmiw%2FV4rBV0ex%2Fj09LH45glm&X-Amz-Signature=0ddacb8fd0e5c2e636fefee598467f3a98b3c81a130c472a50daaaa47d9dda54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
