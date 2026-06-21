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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UY5BS5KE%2F20260621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260621T000905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCID4feDtrGinBMPW9U4Fj8X%2F5AT1vSypGFnozeGjHNZnJAiEA3YpdR1XPbFAJAo3RmsRaW9HdIFNMfTrw6ZCAISYhIIMqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHT6IKerHVlY6KzfRircA0K2mpO5JWksbSz3K2%2FK0ZjT9ORiNV6IIjHNvfDH7iYm26BBf2zsM%2B12GkCyHb2uO6kgdL7t9e8Csifd7s6NKcXpdWr4L3xatWNVo%2Ba1V2uJ1GJst7197Jst50rp0pEKLFXjAK5ys1ZzaxQLCxcLYOwXx6q4lH58x0wAFqOeQeUhk2HGA0kaozVnyUFdWsbuz82D%2BB5bjZUdFVr%2BduMOLV8M9wszts4u06SsBnfoOic4qVsAZqgqAKh3APkb8htEAojGj%2FPUbgsBh6e%2B6EYCrOQj1MzJXPgAz5QJB4vZBWlXLM0EL7Yy%2FCHE6jpLysaCMtw%2BU00jyKJJMl00qzB1gmQHfJXtO%2BDihC2JnSBjhB7Ywe9QD%2BiDBXPcW4o2r0xUPXpfpnDQPD6wloRmpk9P2uTsWBfnlQBqkP1N%2BvxyiQ8l1R3ikjO%2BM87qi1og7ycDP6EIkpMwHbIWa1eyf2kTDa1z8yv4zKgh%2B4O2Sh5I%2BC6Z3z15eHQoAhHqGNsfgsAMmHTMDsBI36wDzTfBMYNKnNWH%2FkV5psGQzIcOg8sGD1%2Bt8ianEMieRWI9IgXxlvga1WThoLU4Mh8Q80zb75NE1aWunFjNge7PhoT%2B9XQPRjvs3R4%2FfpAH1uJzQrh2MOiw3NEGOqUBRtkwrRUfpDCItwt2zUdSjpL1LX0gm8%2FHYzig7g5%2BunSM0wxNn4cX8WTzUgb2K91lZHKSs6826KayxOhMOqDkccILlq7H4g7ZTc97ZKFPazHyncA0hvHIFg%2FuOt7iwE5KRIBbb70jL7hSQBpbVE5ArH6WNina%2F8WUKuDVIFEuPsOBh36Qbs5Cvqy0OLrFOHYfQNv2HMU0fHm1siymQPNRkhdMIhXu&X-Amz-Signature=0d8be8ac641a7479886c766ef191cf14adf839755c08a75dba4516bd0bc2f241&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
