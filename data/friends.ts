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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWFNQ6PX%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T215431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCm%2FJsFn6s6Veqi1RiE9e%2Fxl4B3aBKRpx9q59poy8DtcwIgKYdT6ZwO1%2BC9J1e61ECiyu79I5CSxIdYG2HQiIafCXMqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPsnz18CG9%2FYABgQVSrcA3ovNgx3LQ%2FVYSnYhpRZnAHgCFP1Z%2BlyqiAxF5w3yn6N%2By8cTbARHbpE1fO8ml5QMpATPfWsG2gNtL%2BzWVcg6xfu6YoWrvRgJOuOyMhXa%2FgbrnF8Hfo4K2afuZJAyhTsZSnU3hXAxZ7iLz4zm3yZO699VbkEgSFKpPAy9gxabZs9v8rUkBR7WBCg4ctePl%2FpcnkSSV%2BD8GSe0Jox1FUPu2LXcj40slbBVKDZQpIQqinJaf95zwS4D4yNMsWgC0mOukQMuSp7qRfZPMLAbdOOd0bf7kU%2F5VJV3Um4hU6fdBVmfLdHpo%2Bcqagp2HPdgYRLASXGMfdizt3l39b6ev3vYGEKNhWHX5XXcaMtyMPdBpWauiHc9bbz1PPW7oMeQxFSHjgdpcbF1C%2B%2Bx0WNQNnvK6wgOr3HWSQwA%2FcI6u76Raz%2FNjjpjtT5JF52Lt31Si%2BeMfzxFCeOuv24T46LwQk3OC7GWnAlbW8M3gpmSGvNh0lIaYaiGqkwvPqpGaXUJBNruQKpDBlIxBokhx7ZBT3xmqYrLxQLeYitZENyBb8F6AxdbC2iUNF6q%2FGgNf%2BRFCw%2F93tU7Je9lDpE5kJuAPuD3QqqR3aBYzjKEutMSJ7ds%2Fmf3jwL6I%2BY93E1PIlRMKz%2F9NIGOqUB2n8Veb%2FlwbIjHeD%2FKK1yCgd8lLeqUGtW8Gj92Z3B2xfKVsRiVTvn98p7d26avpY7UMn%2FMfw1lLoO8JyqUmV%2FDPlELwZU70JSjWknTFUilGwkQbcPf4lC%2BXmKrBkC6QTgFB%2Fa%2F0VWI5vmXUSYqkYTkGX%2Bf3iDKvp8OYst%2FxOAoHZmC8Lb0%2B3pDEGIdrLQPKEQbHdohBROsLgvc0oz1A4M3Axt1a%2Bu&X-Amz-Signature=18e12836566fe22ac3bdfc8b53df151eb416a4e14b91cc1ec725a9af355f49ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
