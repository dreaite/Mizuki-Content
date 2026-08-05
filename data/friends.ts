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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XC2X2XLQ%2F20260805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260805T041056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJGMEQCICXyLAgp0uiHoxt3zeUo%2FuPxVLbSP9nzdYfTyQJ%2F%2B8fjAiATr6kxhq6LSQqemKH6CgD1JhKG5isoT1DcNj7cHO2amCr%2FAwgdEAAaDDYzNzQyMzE4MzgwNSIMMN%2BIFKpunfZS9S5mKtwDzYd7EQpe10VOAcMpmCcfEBmb7Zj5f6kY6ldVRysY5StzZIVE%2B04Waa68UecyBKCp6fGJqsg4yG%2Famhsz8rjp7NCZV3FT7wg6y%2FoGJ6VyAyPL%2BqC169jBTRN8EjpAh7VkfHuDHUVumUTG%2FPr1%2BBYyRwh15%2FyrrbpZ3BTRDSjPdxgfCUp1oIIkJEijOKv0h3Wb2olxKFG8OY7j0%2BLVK0CJE42eCZ3nAm0xhL3pkQWDXKzqEy7tHk5ZZubULr7cn8sj7Q1pvFQIBIu6Bfb3c0ItNlE6RQ7BffXBDY%2FYyF4VPcyjUoyjCWgsV4fzuVd53f9gdfxZ0x8moyqiR0Ug3RBPPd7t6GIw654VHEd7iOQn%2FgJsrpXwCJNHoxoahTuO5B9HZ75JwU0eVbn39u0q0C%2Bgv9Cln3J8BM94C5lM%2FFqaSmLRXCOxbAQa4EOHmOzjiYdHdxOC6pSy3cbJQ8jk7eCb%2BMV2kKu73MqYOYqljrL21o4pd59%2Flv8buLAJ4SQmJ9e%2F9Q0MPUyi9CEirhCaCDI3eNjpDDw%2FvNUiaOe368%2B6NIJcDx0BM4ecBtgopdn5ycSLD2WjmJUWcSYRA6CTg0zafjN5OUxbsz8qH0XZHA3JVEjcpBV8jG3482inT2wwlu3K0wY6pgFiAHGYrUmzngUn4R7brOcBuRBOfTYGTIyiFsdoyBbn7WdDVxI%2BMdXwOGkpCbTABP4KI0qt0V0GDaldAEOO2mFSZI2%2FYGJ9d%2BPkM0mz4rqzi51ODZ5LEsqlt1h0v8Prvr6BoEvV0EFqmb9PvY12BJA5UstGAf1dmEg%2BxTZ2UaN4evX80uTVzkWfMsvVFBcYjbSMrjGgJEiVGoUghOryn9Go30oqLiKO&X-Amz-Signature=13b07fae4391f4d3dd3a2e96e5c2d09a3fe9b14594d75d46bbb504605c439045&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
