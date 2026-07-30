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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRWGMPWH%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T162743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDYcv2XOB5PsW7uvYaBX%2BsPYb2Cb1jPQNdS00TYtPGFLAiEAnTz9fNc5VSKs7SID30QVtAUr2kYdiubQHNzxE%2Fdah1sqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEoa2n2tot0EFNlGTCrcA%2F4YKcUnWdb3zFGdJvWUrcYKGkvoJ%2BTsKHv6sDMJYkzU2nTNtJzzLlqzNqa4IjujKKhVqcS8a4TOkPx%2B01NIZTN1kpiL%2BxhNizkO5vy1noJghrvQLP8dmZbKkxVQeKVtTlZZ55hIf2StiCBJB%2B7dM4yrc9rbR2HaE3%2BhiqMVdBCgCrCpUyIjWJ9xwJX0ziLJzs5o71ZjAUNHWgpGcOCUZdeJGcinfkmoJSaL2HsrL9okCj%2BwZSe2ZRHgXabht8yFFooladGuz2BvjmhkIep6lB6FgOsEj0PpL46sKc7yHODInuyPW0tTgLgPozRyH5Hj8hlUAQ4jhjA74JJ2NrwWronQq69RuH%2FdrIaBxZTH5U7Ur7aB8byCJCAJAxjIgiTq9sroPK3qAP24k7yCubDTf4lqxG2s8K34GYnZjllPn6QjM7XXDZmgekynywBDov%2FJBoNZI5OGYNiL7Qdb5K8V8WB312doXW7JrqbTrp6UtKhs3ET4JaxyLqD2J4y6%2FhCaT%2FvFAc5192WkcegDLkYqN7XpxebgWFlNP4K0DXG%2Bix8hw6LOCnqCIjml7c%2FXoYHJ%2Bvyh8Zr0HqoCXCYKovtPe3cXbdId7dGpU7Q%2BSnbckCxQ6w%2BGSU05qgHwC516MPrprdMGOqUBZ4oeZ8hfeo0i3wfcwSu7jc0cW8vw%2FMZDvS6pRRWe6YuFL2nsw0T9%2BtqYedcznzkI7JWTRRZ0HobBU9DaB8w6ZUyC%2FumjO1%2BxMkO7UrjOkTxH5eNZmruAsWk29plMQzX31kk0KdaCqmkvK0WmLY6eCxlumfligobEHUgwccbBcp3HFuhOBRkjRprLSU83pUE5Vsd5O7nC9YQxFXdJT3rL1xR13j%2Fi&X-Amz-Signature=4480ef8ce7e4b7394a4b350adc67d26c39720f9e06d4224f4f6f9eb5b5dc7cd9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
