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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UD5GHJDR%2F20260714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260714T023817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIQC%2Fr6uyant%2FSK1b9cs7OtbHFzq6%2B8HhvBRUj%2BGcuwAVlwIgIEZaG%2F6h7Wy4GieLoR76Fd%2BQtrxICL%2FxHILgjLXXagEq%2FwMICxAAGgw2Mzc0MjMxODM4MDUiDMj00Yg%2BNaeHcRg9GSrcA3hQz4g%2BGP69aqVk0yZ%2BFqQ1%2FTHkvKiWyYbq1gxD7HGmAkzbYuCsY99455osdfERBQMT2hd1HivzT832QVsAOupR5hL7BzbqH8vwCfNMx1j6Q%2B3bTNJ8dj4KYuXW7la0otXJdvrVvwx%2F7GPkJlmU1uEvFDKIbs%2BBc8lbWVQr5FijitERGWDXYDuimHWXuxu32RN7w5nLsW%2BS3cKByvADGN%2FBTYT2x1SYl3a%2BwF0xaF7D2KN424RGWAQg5CRuv2oilPZgY6GQih12dIoPNhGqdAi%2BwDuowp63lcLcj%2FLYlXSNgI63ebdq4fEKBovHxKl2vTBKi%2FKUCaXR%2BDmjWmt8e55KZj%2Byj4NAZENRELusj48wsS2ygO%2BLmPml8n2ubSRfc4rVMsRou8BiEYMsgwFHBScUtmwPp9vi8vPBbiP3Cc58omIQIH6%2BnIxBIlEBIt2jZLjfiUKjitT8oT4I09Iv4bF2z0lb%2F6gAizhzxWw88DzmS8FFHXGgiXMEQJceRiDyS143I9D21lcEMmPh1SEdXSe5TUQliYgyXeRoBJkhtWYkdP4EDX5fA6Oj7Wmj0KyG8wmPiVKZXf8qB3U945u8AHE3IeRV8pLHOeo%2FKIMpPWBaH6tBMRMY1mBcgoDEMJKp1tIGOqUBK2J7M4F2ax%2FnRBhda0N8Oc6wBM33Iyjkbjs6lMOq6Q62JboEOCzCRgA669DqWBALnddPcu9PdfUSL9ISd%2FibG6wgwF11kY4%2BU3611FyuJXKF%2FF2uu%2FINCU5J9AMgUru9t227s%2BBkaIJ5ArwVo%2Bp2XSQ06aqdX0q%2F%2BMDuXoftq1vgzV8m8tqZPgguaEj8Chd3WdYsqI1oOQ97REZ7faPSz8xb48M2&X-Amz-Signature=0514c60be22dc65ea1249753e2ba9c5066643e047d8fdcbdd629295aee100812&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
