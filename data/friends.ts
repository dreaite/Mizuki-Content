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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3UT7KBJ%2F20260805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260805T230042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQCYXov%2Fz46n6LKlbUqv59ymAu0IWohSYhd66r1SuAiMxgIgd9vaE9%2FQgyhpkRmqHTigwmf8nyR8Fv248pfaQxwdDfYq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDDqoO0X9JTP46kbSCSrcAzNRyffCMb2gZiATYIbgLYIUK9pzpAlYkeXDAA1WwBnZotejJ39BiG%2FlyOZInF%2Bke2O0e0MuGKU6Mmd%2BxPLOQsg%2BhtGn%2FziQM61evhLS1S4ccgG9ukq9uExzEA%2FTT7lmmVOX3ZWaGs4UqcAUqJQoFS%2FDm9fe6gJFXFnU1E1y2JIMSwoxm9GTZdaQ%2FCi9d8TZ90F5kXvbEU%2BXVVU4YYFmNGEVlOHVvTz5gL5lis5H82i8PAF9JT5z%2BUDXFyRFvo6lYJCeRfToeg7h21j1ZL8PRtITg9HTYzXzWVq7swnVHCjo4VkhNwA%2BdWoEGRuEcgUImgJEvJrCZu8PtR5FGadEKmt2MiiNQtDt1C96xr886yBAp6qDojfx8oCkkpPjLZ%2FQQQDXH0W5QFXb33eCldZnhXmZXnyJ3JUk%2FInxa%2BVfMDW5Mdt%2BFimVyQDnza3iytLYkFW4esYPr7TtpoliZSQ1%2BtzldLjCBqXS16vqzM6%2Fwd7R7DNEuw99Zqo6yl2JU50gB%2FE7%2F9ImPnqa7F3CRUtyZuIurke0Nvv%2FmpYvjRXxVqAXIeDliPA8%2F%2BZGyeYWGSHcAS%2FDWdldG0zmH%2FFFWH8THyT%2B%2FKlKWluQBz%2BfNeqPSwN6TnVNwS%2BcY5%2FPDe6lMNv%2FztMGOqUBpRjWjyuaoG6pBGQUsLEdaEPFILoatyDLppxoBNLFRkNCXO%2F2m8kB5fNttsG%2FOr3Zo6qY%2FEcw2nzUWfwDA0Y9GMdzgUtcBf8JmLzxtKYvyLagKJvnYjJdsx%2F5dQfTDnZHGNtlkvu3rUmzNCA2Bi4fQR%2Bfhij1TWHsTiL9rawQUpCgc%2FbtniG9bfaiHYuEv7Kps%2F3PTHInZKJHg4XWqnRWSCAtr%2B1G&X-Amz-Signature=b55333939b66f72d743862b63f2531bf73f610e2b7e119b4dbae544fd42f5bcc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
