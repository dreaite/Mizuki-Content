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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4G3FEMU%2F20260711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260711T225112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQCSs4p5qa8vso1uHIeAC198HKZIXSM5ywp40RHSr7aYrgIgWoRC9l8MnlXjzUhnUMTiyiyIft70MXPL5PUaydcZp4sqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPH5M5lMdIuMVCLPVircA2h6eEE41yX%2BK3gJRGCHW2VJkQFJuWjUuFfWYGwODEnAaVKTzBUrfuYl275oPW2TzQgDIw6qZYDDxNaBSvvXh0Pbg6GeYeqVjpTNz6T%2BxvPl8SFpsBLLPTNcKQ8NuYyUQTX%2FrOg9hObIcdMVhfT367vPAK6tdKuP%2Fpa9OhdXomgcU1k1SauAx8fLm7z5G5ZP9ZgOojhMQbcqEXQSrFx%2Btr2HgyMNQBkfgdl%2BdoMlgNsQ7Qmqkltgoc3s8Boveb%2BoGIv0lgkA88Jh7s0f7XVDo4wLsaqhrBdnW9Gl9wqWvp75CvuUaw121sOkDk4xLKRqZ6YcT57SVldieF32AmSLnewNiwNPNIVkK4CvUFQEZ5X8fjuiST%2B8eSC4Mpq%2B5Z9M89KA3oT6HJUkZBXaElOMDOrEFcuvt2VjZNjB6irooaDQyhpeNyuBt2fP5%2BK3DdOHKjnw46SWAOGTRqLSkI7Vmvo0FUIRmhGCK143wwwqbzyOeTynrSj6Zj95jL25Yop0f9MYihumAJiMROL9X%2BtW5GavdoIOeN%2BQQxRMBPor0PJHdu6M61Z1GX4Q9splbKHCO6NTGSyZDz6AyvOaoGVAg3M5SIsRrWYQr%2FpH%2FWjjgUoCQDJmg%2FW5Z83Yi3pXMJ7lytIGOqUBszs0qQtrDmVVbZCNyqlATzqqRJvXf%2FHg63Xjlmlrlcal%2F1exszy25rdnPO5pRHqApQLLxeBdmOvwKZ0rY9LmRE7idg2ouYVGOasEf2u57P6B8RaI3TcHNQ1yr7jmpAjRa7EBvFGNZGH7Nj8HjD9hFLDmvB26tYOn2M7lC8jajseO4KFb%2FK%2BZsz9HMtGAbeLoHuD1qJtJ8aY3NsxFQuB9VlJi5eda&X-Amz-Signature=4f85aa14afb9a880b001cfe4705b3adeb582deb6eb6d0e0efbd7c68ff34c6979&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
