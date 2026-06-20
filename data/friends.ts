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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CSRANS7%2F20260620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260620T201624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIDMZlM1QyCe9E2qeat2TdIu6j%2FKmYTTsHKU9MbFB35G2AiEAqzfSzxrTiXcky%2FyXaNa6WjJWzMdVOhTpv0nO%2F3aSHHoqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLiDNHlvziWxz9LvDSrcA9vUQDDQ1W2SVr0hHKlJfzoSHfUy9cUTU5qDxiv4jjRC78CkVLXz9%2BvvpTFn0OJSghMUUjirVpJAFCRSTp8cMpwg8zHv0Re6U6k16hor9QJdQdkBlygaUZKDBTAZiIhYbncaYyDvaKGdqPOiwnk1sYrVwhW%2FJ1M4UUWpBzrkrs4npQEwa5QRrsGzxmU49MAZSREqV%2Fw1aYKbZmcNu2ft%2Bu4HIxm%2FXb3ijKqWVmOzvVDFhpPcO3y2az5U8Jm56xEzmzl6o4rw6VykXlCjFYA2BzmLfo86i2uAC%2F2ElSPKcnW3f1Nw2u5A0Mil4dSv0AOX1628AVC0tT8JbOXQiigZRhlDXABKJqL7KnN1YVvYztDgSFwcaK2tsu5irsYgaVeQsGgl%2FH8Bpxnhvfa13F37Xgy3q652w%2BFCoHWxSUOBM9QaEu87kLD0pH54BY7H0lAyfCojqheDbwjMp6pVAmPRWwJI0OouDZBaxWzEHJ9Daxw8LJ9Z1vRiGFR6uXhkzLt5hzWa5UH8FRXiHjncHgOuT72KcwLpLJfeljrJmKQgyfUj1YWLbqSweFonIJHkPZUkjlxgHFcagSl3vG093M1Zi5f%2FKPZ4J8E8G7jy1ZdQxZX0w%2BeLo%2Fs3%2Fattt2NPMIHg29EGOqUBY%2BHrFItZCH%2BI5MHZMRkxehzq6vwyrkc67pfmGQ6CjCZyEzOTIgLvYJQK807VoZy1UrkrRpXMqnzO2i5pMIk%2B8rKKLSI3q75QLWvfLUPMZi0CeS6Ut9GsJ0B95dL0JD3XjZhmRgv4lI2d0YSZMMV0N3O6tCPf4bjKSk4UzSzm4KpDEQZwdzWaaeVMNqKV6LZYuZytNqQ4tmhHzNPdoPrx9w0GM6mB&X-Amz-Signature=4d5af4c7369cca73dd0059894c4ae086d31091e5f0f504e7099f81ecf1596105&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
