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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCJAXZGU%2F20260802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260802T111656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIGLQtqR0rP5JTDxIXPLfIRDnACkPMnVJwSV967GD0KzcAiEA1bdlcgxB%2BEzSOrIF3z0IjRVWlBHmkXSV7sUjdp1NWFAqiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKjfApyMpwGTlEoaeyrcAzCn7CLjaLeux1M3wRdBYj62FxrE%2BhVnAYaB%2FB7KQ0ve3Da8wj1dJDHZysZfkfkjrU1AyMLEkpJ5%2FLwEhnkvtPKAP0qK9X%2BLN8qUjwz53bvL%2FrznkCZNBGq6Ajikm0faE8JaeMOc30Hl3BiVBfdaEty7zRFSWluMre3mKe%2BI37sB4tFBNJumNNxBjxRcEFtQaiz1pikqpKTx1D2nuaBr0emsax6ISYvBRB%2Bhfzije%2FwxtXqhzwBT0a3GSqAKRfL55KEMEQxxJRa4MQipdGH%2FPIA4ZO1rPuK9NY8bWfYpWWrADzQU9S0EI0uPiGW%2BtKtDEYRvP%2BM%2FY3Qtbhr5syF0VujccK95W0g2gcqeLW7kCWr5gxgKPMN23KSFzihs9rddRFCDTaOIvaa4MJcUuUlOAcj6KX%2FVsoUX8y3mlptrB1%2FGw8p1OKT1Q0yw6iXDybTIQsl3L1WqR7wDXgijLQlE%2FpBKgv5ht4QhcYcRBDPqDsyEK4DImH5V76MzV1nOrbOrwnOZ1pJoxdWpkQFFyvt%2FwYgRlSfzZnPXyYd6uOBGuNZErLUViT%2B3bIclXpOWz55NY2pFQsx15%2FfMAglTxjbT0QktcPzryC0Yz3hqRDvtOI1Bh4ZMOcSiDO4VD8DiMNnyu9MGOqUBv5xwMZTbxcYRmzUWgFvgsKrpqXFH4l1n3FpyZmSbYVhqIiStIFpaYWQ3LQzmrAr1UQn8mO6GdEJz6Ny%2BqxcrjB7dJs9K5oKr9KRWAwpwaiL5JrrygKjM%2BauOcQ%2BaLx%2BcB1GjC2z0CnWGfT1gTcawixvWGK3%2BRh9F6LtqH8zH7tA11v4sX2MZRZGy85FwOQDc1w4Nnfnq1MvJRgZ7p7Y1cXat9DnE&X-Amz-Signature=c3ac3230306d4bb0487bb6f03eda10344e0abfbec7d715de03ef88137c86385d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
