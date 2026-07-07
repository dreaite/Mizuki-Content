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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXQE73OJ%2F20260707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260707T045257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHWh5F7stbtLMp6ITk6KpReh2y6YVQhXPdp1V2wXJ%2FV1AiEAnNm1MgwXUqjZhUWiFVDgCzHQjTYE%2F1ftp2zzMiuh0qcq%2FwMIZBAAGgw2Mzc0MjMxODM4MDUiDNQOHW0H9h6mtTGvJCrcA9vEVBtIcgb20pI6iEd16v9BiWm%2FtX%2BY2Fgml153q9%2BTVY7Qg7ZXn%2B0A51k5xKhJZkF3E1W1fkcczZlr59QNbzhe5iIWY4lyzwE3ginj59X7UpnyqcWRwtwKRlt1yZNwODnBSwEVJ%2B9RI6qOu4B9fjfT7DEGYNaell0H6MtBJBgpvDcU1PjLZ0O96AJaKok1Y32UE27wweQhD77MqDyR7BlPZPf9dSwqwBCkmtzbYxHzKDfhaBG0TRsI6XkPNdZavh5%2F6wL7pGEqy%2F6K0QDI71UbHoBKh%2BXkFKziiTzrJ0xXQQPuuL0xy%2B%2Bu5QGVL1UwEVA1MhbaDnHSgphfhY%2FXi1lPAS%2FdCp1j9%2Frr2%2FYHmv%2Bdoj8Ml1krGMhTNp9jtGEb%2FPzxD1UXBVnwHhEKgQ0BjsD3DFAyZqznVs5cqDLf6Ug7C3JR62d2rflITCLdkDibwY9wSD8dy42u65djdZaFKjljYxtnavp0UUBOIIZCnfcU%2Bb32w8NLoJdkri2PNCP3AgztFt%2BrCPV%2BRn9%2F0AIZ1zah9ERu6ajcK5lpGVVmUw4Na8%2FjwUuTlwQOp8mU7KbD4bisqex5ZqVkz%2Fl3iKnQiRofrqc98pJYsQzFZSjNyPHZYxjWLQWKthSwtsFlMNXgsdIGOqUBgowMwc%2FxnbnrjTf6UsoCv%2BPoRBBmc7ExFwYIeWqO3u9BZXE3rkeIomgfQBF2U%2FbLhd%2Bp7wG04MMa5VBjGF8MUqRvosuH7MqW1ayRgyHqccuIGwB7%2BAMXcOwlLv4%2BtNSLx6tQFhuzuyh6NZzgcrHxWv3CsCn03P49I6GySiEOtlIGkV%2Fii6dgUwolKITdr6Tz5aJjsqSi6I0kk%2FYky6wPKapAMQQL&X-Amz-Signature=1a93447858901bfb0f0319725047d461f6055b75b4823868fa656cbe17d1b682&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
