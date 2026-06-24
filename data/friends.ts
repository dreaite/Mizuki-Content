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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z47C34VN%2F20260624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260624T143502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQCO7kMe8Z%2BKaZbNDgWfI8a%2FnwNck11MHXssAvgI2%2B%2B9WAIgH1aPsB4XAf%2BzTPBSKXhIz%2Bn3QBLnN1oXr8Gakx0eTf4q%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDCE5sGbR5B09mXHKLCrcAwOUqYSS0rnMqEiHcRl9lvFYVyCRvXPQFN3Lm6DuAcj0dOW88LG8cctUUCWXuFJxXQJX%2FtJT12qv%2BrO%2FS50t9JC0b%2B4dNzptS2ZfQxnZZP6h9M5Y4UujZWVeXGRBFQp6S10V1Q8QNI%2FTiZKsEgXqs81mnwKfhEdVVPfXJTkPh5ea%2BQgXpb1ZAdu4ppKw48sTqIeXTXSTzaQEaNy7DafYcATVOCavZJkWnHm5yGdzXPDALUUm7V%2FBbAMhuQUlYJStUgULg9gHl8DD7LEMeA8VRRw5PSi2UlQxERNeToBHkUl5dGTkZoaqHwzrQUvN5LSpuqDqGfbLeUh7ruU9zOuWCKdPaTZ9oSZiAEs9O0rcl98raCsKcjnEOxC91zoFAEFPlLGHimhmGnbsjmZdObn3UW7qVTjCSIK2GwLmSDxMVwJR9tVV0UbC17k9l%2F7dRK5hWi3eyFSgHFbSoj4%2B%2FZ6RFJfPIIs5UFIAtK%2FEtjDeas%2Ff5Oqn0F0Ngms97VAs584kXXVsHU9dW%2Bm1P%2BSDyFFdP0%2BoU0HR4BRAbB9YTEHAP1kcKVXk4IBQH3gcPMzWCeQohK5ETZG0wfhAXhN2HEA4rXcyprb%2Fbtyfqt3tfHhD5wsvt5KZkQ%2BeLaxzzdcUML3O79EGOqUBwRQdcyRpRV2kWcfCAFNZ9kkd1lfrgtxPmkQNj27t4PZO219WzYBGQn4I5VWE5ShCzaJ17w1RU3eLyMEFgs6q0LFyvoHRZBSUH6Qy0V80LRSWPLEHLphCAxr9mk66cbCrjfPtlaMTkHVxvfHoe2VWn2zTME2D66j4s4P2MvC8hcB7tqo7sURDnRMiIcjy30AfvhyXNlIfO1WTohdEOIVgMbk9voNE&X-Amz-Signature=c4725983f7299925a8338735ef30c676be08aee054bbd00d8bdce7ded088c916&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
