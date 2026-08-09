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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664D7FRE6B%2F20260809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260809T213330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCtVpwH5sOcX1F8jDg4FEZJV%2Bu0ecEErS37XGR7Pb2fZQIgCbJy2dqnKoD287EAiJPzkbL78%2BuEz2xWUkP%2FQ3i73REqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDXGOeAsOauy1SYs%2FircA6WySzQqyYZrYuYCcYfIDfYf1aVvCkIRnvsPYXcrj9u4CcXvqxCz3Xx7d%2BypTizbIzfsWEMKisK%2FTsVUcWnE2dLMGC4qZBVWTtVKPpgtqn84z%2Fu5kX4ypRSswIaioTDnNUV0Boynn3%2B78bQnUA3d%2BBuNy4oWlU5BM6iT2ZIFmZ3%2B4p3e99dWFF%2Fq6oqf9Tajk6FzeJ5JwnMKNTnWhjQt%2B3vcoTPf0gUvDQhVNXD0qEWOx6ZMn5CJM9uWUq7MeeZ%2FhFUTk%2FIabBMABwz9osETpWr6TdHHdtsmsVlIecYWPUgKFI1%2FS%2BTwZ7mwq9Ql80skU2u0Qk%2Bt3%2BJrCBP7vsNeSK7CuAmOVeyEvT%2FiUcU3Bf%2FwV%2BEB8OUoZxhziGX6GeDpOjyTRvrAofSEqVdGhEyia4bGjQMI7npqxGDJcfICp5MoxR0AvvSkRAY244qVejoYXDXHiJzlJ%2B3jeNkyCz3lo1FfQLGmi7%2B9svDhj6bSxU6tPpU9pGQ3zbIg3bCT%2Ff2Kh9D1jsjuYDx1jUQ37V2HlWZcFnh%2FOyJJWSdhxGAWMzrVMcqcBGJk%2B7KWKSLbdyes%2FzXwFofhxGFA9FA84XZ7%2BVt1Qj4SggyaA%2BAk5PyWW7HL6FRtxmH9gp7AgOvoMO3I49MGOqUBZAXzCPmbho4p661OURAc1WEXyU0j50GatHpLheEo1nkmaBuBl%2Bucj4gjCgoYq72I1mQ0QOwH%2BzidEhqOU6uGCWLuqhl5TtSElFSYMpNZ%2BT92WNkR1QIhryK7LiYNSZU2wl2U9ryjGbtgPBLBRjVmg6glJlRqfzrhXsWgBvxoMY6NoCX7%2FspTkiihLjXvB9Q9uTtX%2BrY9vNeR42G8Tzbs4QiPdv3P&X-Amz-Signature=66facb81732690f0fe642aea6a388c3ec47b0587a714ea7c5289f8efdb930bd4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
