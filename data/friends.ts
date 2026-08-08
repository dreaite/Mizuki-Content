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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJVTNCR4%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T153106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDXeQZBC7p1I%2FimC01%2FnkgpYINg0uuLJosDsLI3GBLfmwIgex3uXopP6cu8wAKfZmPqAT9nqHJRXx9oZrnHsr7gnS4q%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDBUKiXXAKS%2F89mI4ASrcA1%2FfWhHvL96RAhzZhp29LH9bJwaBcIYLcupSndzXTW8OGC4Z0X3KHDWgbeF7WCi72vs86k7DJUPTlkrYNg8beTEr23Fu36%2BvPiYoTL2O9vbNjeIMR31%2BvwvU0KJVERoZhRsPSBS%2F9xpQVQftQF7U2xwB7ZMf7dhnE9yRsnJGGkKYykmn%2FKRAnr653RwrVHBfThVib9fdRCMyUEA%2FTltSIWfnPTf%2FBQhAtzJsTpfTupwHQFQWhP2XwwOeg68LGxrFpbC%2BFDQhDAXaknuDxcGEYnDWwbEZbsOgo1s19E1x1ddPlXjnRzDnYqrXn4dKzqy3V3zEy4VCjnUcrNL4giipk9plB0r2qhjRjTKHSQExrUlLt7Fn4fNINanwu9RW5d5O57lHDsHtSvyqgIXUI%2BnX6UseFqN8eSn3u80tKT7Kz9xWUB6opi5qP8M9PRq1lrCAalcoWmA1O6WnorckuSrYYrRFsnJ8HyXm2UZfiAc0UEkFd4BH%2FQrJDnSWy8cHs%2FY1nWGtJbdQmk9M4HKNCqiwqTKlrCJsocexUiJkVg2awr2fixx9IVgEV8sokpcWWgOviTrMvC83NNj57AIXrDSPhrHn59xxfMSMuZTULh6eC9awQ%2FOtrSk1nIvo%2BaRxMILx3NMGOqUBVEIjz14099OnWmL2kMqqR%2FazU6kZxsuhMq0IYnU1lbWe3B5uP1Nn62zaL%2BJgdZEl2KTMezJ4szdsQjGDrqd2zZ1NxAbJ%2BLYFpxtvwU3evXcxGtgUfLaS2KoiMy9OT4HJ2PS%2Fw%2BE3LBeqwynbeiIaGcklUu6vBtMB%2FVqDdGpJq8usfhNY3FjHvH136F9OINy6cptHsuLLdP7yylKhV3HMY7pw%2BcaM&X-Amz-Signature=bc7e785f55fe2e8587659c18672d83c77bb6b24f044b4dea438ba9ecb4911485&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
