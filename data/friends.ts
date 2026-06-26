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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJ5R6PTK%2F20260626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260626T161927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDepZlvN9NQ9Px8RAZ7NpKqH21qCg9rv239X5f6cEqDJAiA1iYpk9fiZZNMqEpRCC0y%2Fl%2BVVjHPajeq%2BLSD0fK7i2yr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMcWtagN3X1WilNW%2FFKtwDVdz%2BoGdXcU5kpa%2B0fJxhfGAv6PceebJKEjSHU4r9EXtXri9H0qmR%2FhXYiLo96uCIjk1zPeuNKVkqjTotLuVqoaxKsc2kYnslXL7gr%2FmtGgMte1MYZV4NnulEqj7osM92oaE6T1gV%2FVBb92SaPgmuamLXlmNzbPG%2BSj22oR26cYYis12MXNvl5fvyAIp%2BqfOyBhhLzli68WyAxRrBvH8eqoO1GttSW3x7%2F10CuLttyDjOUoJiKdG4fTVvX3vu21GYaYT%2BRCoz8KmQBs2SVjNR57nFr8FBPLB9lAQgxi6S5o%2FoaAahlFgZRrWp%2FzAkseRbF8NJdE6kEuyUZtS9dDX1YKOh7%2F4o2VL8llj0BBabJYqOyGAuRiiPt6HCYJwK0hxxZ%2Fyylf%2B%2F8yTNNBfEc3wip0jZux1IxDnBlBo1JYX0tnirgw46ScCSvLqcu3i0Nt6DwgOVRlFKYwNil4Bs62L3vyM5CFj68%2BlRgh2k%2FZ%2FmV4cZRcMdnuPv%2BefRosM8ZKWBsbgH16XUG2ufigUE%2FzGORchJWrZGCVXnDLelgoD%2FEjlw6%2B2n9TeWclhgtjfua0Trm5AmusQtCzh0iNEfh61WA0acTE7WJrWAGGBY%2Fc35xnen5tmj3P4wa9wXdYww%2FK%2F60QY6pgG0xnRyG8dOxqgTIq1oVc5KCWQAj025HLxm00hMHw4vpQy7y6q6%2BlYyuWJjcKSasHgVY002SVjXfJOGGFjNbsruFgMnLVkbWZHh%2B4hs8g7qVunujw%2Bhc6Anaca84QgAnqdUcXZ7pYBUzaPLD%2BF7VkwMIHkhOZHS6oKx2dJJ1iT%2BVgeS9rvlxYoV9V65YPFLXx3fv8CliPBerMKaw6cmMEqG%2FqXtUiiE&X-Amz-Signature=449f590910d583bed24911a988f39cd74adc5cb01a8435bd16e2762722848a4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
