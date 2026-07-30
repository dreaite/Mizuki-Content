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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEBIBEHN%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T035843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIQCZlFjBJqlubrSpd5%2BYHWqteX3jK2VGgzMaf2RmAEBaqQIfMTQ6B%2FrgM0z3tPv4G3sdZ%2BSFaQnOqEen2ObfUGWqpiqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcm8U2cxRcZc7tGXEKtwDqHcTDzmA0vjgzoAHnq9xB%2F9g1sSbPKdv5mt61GRT%2B%2B1FSeI54m6Lxyv%2FJkuhEkOlDpVrGPcIJDszqLjMyWdaAuG6JZgiwewRDdA5XyvTu0RzsPi5QLxZ03oysvDll8vJyJmTMM0KSUxNxNdsBQJP5Obg517dpyFFvkN0f9624%2BlLXvBiYfsIoB9D2iQAeChXdlOAXcd8Rxk5EuDaLZiGi7feXYcOHDL6dY2gWvy%2BqORA2Yef6pcU5Zx59GFHajpEa7fLto9xk9bPUZJcTSPi7py7f27NhNmxVW9QAAY99cY4%2BwPupMEBP%2Fb63OmAtooWvJcOP0cQ07YrR5FHtK86W6IHI6aytI%2F0bG3boZbe5eB%2BVHJ4Db20fyPlYu3Gt%2FoaqvbOz0IzW87zwsggwx06q1I%2BZIC9AlrNGfR0ugLKSQG0zmbG23hwRiZE1wzI0mdOyVgC3GQNpNSSYFOYSWPhxl8qoAgiwyo2%2Fnxj0NsGbEf1hGWy1LpUWjSSMtiMRifeW1LGih91L95cLbT75lwPjbqzL22uNnLbV0T%2Bzu89uqlR8LCQkDk0tytxUjQ4UK7e3xyPIFgMNJ%2FkZjHj6nZbuzUiAGY8tM5tKaNSIQGnck0znT32xdi9AKnOu2Yw6eGq0wY6pgHoMtgDvX5gKdyaIj2TjHCvBAgv8qki%2FUC4rGlhlUldtlTUwTLMrXpwAFSEPKF7zh4wCkjKfxLD6D3TdtthLtojyqJSXuFMr%2B4b7ZTLk9w97muFRqC78V95HShrt6qrHTJvORpMh2fd81cQGITNWrOD%2FE68o1f%2BbQzqdbzOvHoS0qEcUb8GNuH4amnSgJxggMbLln6sONHblLJcYGdN7ik2m91tkJpB&X-Amz-Signature=d95e1587345bcc0467183961002b8873f9271bd3be09ba2fd32bf7fd359c0aad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
