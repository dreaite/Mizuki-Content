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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAODXLC5%2F20260711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260711T170713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQD3YLRlK5%2FEdOkwgaONnP5ZTi517xuVkxFBxTDfZgMqZQIhALfegCtHqZiPznEHKuOoiiXbGhORHeHVARy8K5qmxoHYKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwIzhmj4%2FIwmaQf49Uq3AOduXY7KaC%2B668A%2B37rXbnVdd97CRiTJz0F0%2FwLBw%2FGl4c5MLfUaJbBH2j5CdtihhBMLtJUs6oNYShwsAH03neDstK4TE8peFGbTHdK2ChiS1yQWkzDk1W57HUdVpT2y506JO0zEoUuSsqvnaU10l%2FVWnG6eUHUgPFKHmfvfwegkuhKwjwXXPuiClNZviN9sOoVOYxzwbackEx%2B2Yk6MZl5LWBi%2FX1Jv0bfa5TKnbT02SL2xssL6P46hGxtN4qVSgRlMrT6%2BbbhutwCrVcJlnhb%2BwtbiidlebGtPfG7l22IBICD9WpdkpP3xM%2FsqDwpQ%2BFEgw9KPvKXa5uqxmew1wN2ZEQAYeIgm15gfZTIs%2BVhKTAfnhx5q4dKungKpy1uPR9AZEfRpLOiDYxZ0LDKcRJVBeNJM1tdwXJ0nZ8olaGD9WnBg%2F%2BJj6NlIaSAX%2BaPwglcCa1QEE%2FxytL8ISeiRtimceYxXOvzFpx9ftyJBF4dvPtmMJb6K15OlMWJi3bJDisP4QT0EdCuLqXjsJZr6F7CpYcQKj8ELSOH1l5Eb8ngtp4%2FAmXoctUfJjTSvfDOYAqjTJNvoqRx1cOIBAv1kxSayLB1M5kYS3tCiWOXIi3yRlQC867SSxPuNFi9WjDkwsnSBjqkATLTe9JI6a1NGx8AVUOl72s4BaCrqsoxJspZJ7RtSYK3PPTrz3s1dfFOogxvYrzEfJWYQ67Is2LEA8abOpzVgMD9izK9kAYOFNDFls%2By%2BEwvZgPansC5tWzKq9kw5nxFvIgN86QYZg9DFOE8kNaNBYwGlzAysKXV%2FPoOfIxbSMv2GeKI%2BxxEINNPfIej7nU00SpgCv0iGwxCP%2BMzKKN%2B9atIZE5z&X-Amz-Signature=71854267c4be9b23cb49d6f5ffc9bb8397475bd6e6708d4705d2776853489ab0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
