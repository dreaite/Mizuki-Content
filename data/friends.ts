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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4KIFJWY%2F20260810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260810T185855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBBi0vTH%2BPoECVxQpqKPdAgkIttBlgKh9NEKmwzpd%2BZoAiEA66j3v2MUU4Kt7lHLcT5dmCHIs2JqVXTKg%2FzylYJxXbkqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLz4KXK9Dp7j3MwkYyrcA%2Ba7Tnme6QBM%2BZnJOe52AZH2PUBb4jKM%2B7Vylm44bNbH41bIi0rdt2uV3hAQByyUht6G2U1t1UR%2Bbm%2F4TU5cNt7oVjoRdTWV412sOHkebVen42twMqqaZw%2ByDnrWH8JikwDMcwUD0B4mW75afOpWSiEjG%2F4lmaGIgx35Rp6nETJdABvTy9ofaMmcyyly1%2BMQbHmT5%2B4PT%2F89yk%2FZd2GFAarjxOXL4h6cb%2Fz9sUUIuxEf%2BRPheaZGJsoX2zR5tb0Xeq9KLwmUVZTUAiD5RlEK7Hd4Q5y7HZZupFcP4JqEC%2Bl43WpwS8dfjZxlU3kLLucgdpxVC%2BGuy1yIbEaIpc85H99HkW2nlcSp7AkvOdGTO7elHLkijY4y0my4mGzRzTsgUZDnGZxUZZVMzfQWb1YhkEqX5e8%2FnVwdPmAhq0fcm3Xy5xp%2F0cpTH6WH9BkLH05C4StA7IhUEp6zldOR0uWSeQByQRGTifOFGXocDfmX9ITmAPUl707vAqcLTAWre0nlx5WjbXrFFrqoB8JDzEjdT40TQekD0bWLhgQm7UtYXwCGQGHJpNNnsrSbCfdgew5gDL7DMRjJRm7661k1BEF4p32gsAl2SvOkS1fS4KvQ7KwDPLX44tTNw1ObXYDJMLi46NMGOqUBYTtH6jWrwT1jzf2bnu9riNFrCjyzWRjbKHEraecT3IO7o3MMPbfVicpZAjgNSLkb8bZzD2PuYT2xN1QE7A0qOeesllLjbWyYkVD6%2BeqKf4hNZCRlwQUBqg7QXJfaOdZ5sufgf4zLqFhS8W9g%2FuJ6%2F79tywsVnMNtNZNo%2FPmXqPQH96Q%2Bu9m4fVhtqy3qMKsUEX7n9J3n7Di52Atlz5LFlKXFVifT&X-Amz-Signature=9500b23ae3f651b2cd78ce575042dd5bfb34f677a1c6598e484df357c290b840&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
