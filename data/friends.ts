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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZTEWYSO%2F20260630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260630T093959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB91PwmBVzsqbZj2HETE85gQBkAS62jLo8ODY1dupgtQAiEAzxiTCIqJa9p%2F6ymylv6JxYcS7GQ9yt2FWZm2YRyk06wqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMJvBFL%2F%2Ba6w9tyZrSrcA0TMSTjMWODhUlFAn94%2Fc98YKjzxLX4JrYF6xnH%2Fqz9fbZdjY%2BQH3Y6GedFSnHHLAfo4YVUPIPMvCSqRjN7CGZDjvTgPtBqsggpGM0ilOw3C2dDYD7ZYZiLQNk49W%2F22lWDe5RxoDcr5M%2B0BXgHJ2ymR3%2FE%2FixXjXOv7OsnUgYe2OwvEwkCsD0igDcaoK9QRsKPNKJbViljKCsaxpGVgSvN7bv6ab%2BaqA8IqefQeE7%2BQNYun1uV%2BtfnJFr83mmQp%2FBIxCP7%2BGhhIcHk1yLmfS7HTgo8EBaSfESt4XnMrDOLLYUM%2FN4c3lCjlDX5igy6xhoENh%2FTPnsHXny9yNbuZnfFy1OKIIxUo62cyA5wqxg5N8RY7gwCiAKwwtzVqI2CFvkvAVGOHb3HuCa2%2Bke%2FxEvgevoSZ%2FPAOKzd1KRRiLLLqx0ogaDxWNay%2BlE6NPjNRd0Q1f7x%2FawfwF6BU9ITFmwjeQCNuIYzqHgUkqObhiWUdjpwEPCqyg8sQAbOpw2iuk2w%2FEbqvtF953BOAp95VuYRQ6ug60lXAfy7tL7C43Y8EV1saVzrHiSWHYm1o8KFdNEB%2BuzmgCwELooOI%2B5Ej2dMcw9YDsOAxoxwy8iy6t%2FLNGOP%2BFW9fY5LZWHxbMJOUjtIGOqUB5fQ8Zwt0nWYNQeY75Y0LVBgR7sAHITu%2FyIElR2rHIZb%2Bz49ZI4A4N2gHot2FeNoe6qjJnpNwmKNUBrkepqsLrdAM0UjC5bz7zkQM%2B79S%2BIvcO8UjjxFJKSkRUXvZJgNu4ufJTSgswK%2B4a3tHrQN2%2FZwZn1zesmlE6fPWIvHXSqrAKEfp5na%2B311UrzoS%2FP7EnBtNsiaC3%2FL3lY6tdxq6pV%2BokIOW&X-Amz-Signature=2f0b407f101f15d4f5a1538a07dab13ea00251ed6988c9682d0ccbf2fdbb3180&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
