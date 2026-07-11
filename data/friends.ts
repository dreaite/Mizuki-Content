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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWXW6NMX%2F20260711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260711T115400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIBUEMn1eFc%2Fj38O8yWBwR%2Fuqd7auT2Dger5NGEyIXRwgAiEAjVA3jKNWkgzZFmoN6%2BzFjw7Gm93TsVRASCmC%2Bt8zLKMqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFrWzTQIATZlvteiayrcA7M%2BoRffxtHSrTDMui6PGqFyKh94G7ULhkOUxei0oyf7S0LqwHUVuvsSB4vT3altl0BlunqKB5g7SWQ%2FE5VLFpoN3ktwCZs4H8UEE4AipJe9gR%2BqR1Ma4AUCsNIUqpN%2FQCz%2BfjhQJe20y5aCOTLkob2GTHnJK4yXtv%2Bo6NL9cRYflwjjgv38U9B0yunr1rb4XzbPSqQAq9m8cRYTWktRCWNL6X56r9BzBGgwqBLBgv3MKhlRHMXtbg27ZoV5CCO8B1SVQeN7ITT4RojwcX34Q%2B1u2awPJM%2FVPDcW9n4hsJ6s5VEC%2FFOOz9tK%2Bkh0hilBBGUc4T1L%2BOIYLwTFCUl2jCLBGd33ih3IAZPnu4YDxgr%2BvR0JMTjkt9X5K5HgEU%2FKnblOiWPKaDNJe%2Bhet83%2BNDKgE4gfIQuzAwj8shCZH5W1SldFtqL9%2BRFiTEHgfHvnDShhgqgZc2cbzwnCuOpX2VdXbOzFFcGui7UbwOK2m6gmfmtGcLHI2RorMB2xjt0xrZeptnhXZDSiI2vcAM0XNei3yLBpk%2FV%2FZnRTYaUKoPteFn9BUMwG%2BUKLPDzdAN1K3Hj8WjGFnijOqphnNLWFC9qltdLzeyQrcy4JjDP815qg%2Ft6s45YPYmPrFFcpMIuiyNIGOqUBDqAZbdPe3aWm2m9PS7GQa5%2B9iPCebeqoNImlVf41qMD6ppkYMsaQlCLzXPzE%2FAQTNBlblaiEkpxhgnLNTciMkyGxljJ222%2Bs%2Fb0poiTmKkW2l3LHvlrgY9g6wja6AgyiW6TgvgCUvTDqtv%2BYwTFk%2FRVRK4goLjBiKPkUGD2dWExpPvFK3bDVHz8srGJZs1ANPn4FNiB%2BpiX4BKC50OwqyFvkdF%2BA&X-Amz-Signature=2e97a5fd2542ea830d7aa063459d1a62746fb42b23480d9453b39a43b5404a2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
