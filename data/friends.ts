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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWPJCUCH%2F20260711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260711T205047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIB7nej5UdA0sZ117bDypjUF9lScoWfBZaktalnw8cNZ7AiEAnA5GwJ9qsfapancz%2FP3BzjIAv8tYWXnL8MN%2BQQCusscqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLFahRWoLNq%2FNGtAFircA6XXLhAzMFxdCTwtMGvBX2phv0n5WdtFS8Ln86Z%2BcgOZzgJoJl%2FeUkNBQKRkJbByZWqLjy%2FV6GBKkQ93pD6CGnD3s%2Fh4i%2FgQ8%2FI1ll0Arrbn5e1VebsiPr%2Fv6x3g8SJvQbweHYVC4hZ7AvGiVRqAfP5WdZj92pL7tZ%2FFCycp1UFhqWxnFi%2F5%2FULfHrdKXUGV9KEItRhIoVFH1iubeQYUm%2Bg7WUmwZZh%2BbVm1%2FabrYmcL1239rAiXs8yZnxlzxUkYsOw7XyzhdKqvLTWYo6OS4i7XcgeGhFpmKwyHyTCUkfOM0c%2F0ZA6to99cAbtF1HOtUXaOOYnn0u1DoffuSfvdYFQnP2YNhE5uR1PO%2FF61oPhHHrnCyOc29T5p9jciMPO2JqBaRHV%2BeRBbUcDxnB9N0w2iSv5EraT4JTHfVsifgt5XswpD6YUG%2FOlDJEiCPI557xv73GeZ0Wab16%2Fa%2B4U1JBIxsKIOH6ZQ1UwxjG2qP3J0LZwoM1ZXTNY9Dqoo2pp4kQCTepdTDMU0hC0hi1UNGZISem9dJBRS8oQznGlVHEJ4wLONqQTT%2FF4ZshhsAC0dXXx4paieF%2BNwaJLYGNF9FlF63oOEN%2Bxzc8SYURhB1pYAb2wdoXiN3jKqgZJtMP3AydIGOqUB304Z%2BC0vVdJPvaZRcqvuzTa9VccTMtPFO0izdsvJLPdgO%2BqKOywn890sZ4l8h4Wmm9f8S48v%2BfvuMTLkiyWA6sMVq0%2BZqN%2FgnD0NWQjWgckE20i0xsCX7tZlKpweV5FxOpS2rINeQ2tQgeO8eZNRimAIdq4fwBPlqBHVy4PdmhWpPJOQvU5OgXgjLizPcNnTgtqCuSsZP7PcX%2BYGXdC%2Bd8MRG1%2Fz&X-Amz-Signature=4f7161f0e3d44f5ff61ee8a7e7cd893e3344efa8d415d938b29168aa2cd92435&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
