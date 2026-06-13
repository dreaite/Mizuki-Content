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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VX2JELM3%2F20260613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260613T201641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIB9sIDRbV6oXEyarMfn6vyjgaeMBSRyvtdYp%2B28l9K0CAiEAjqFFjU0zxYuWFlqHe1rUKG2zovxB06hqZUcpiL44dfkq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDDqxhfbezUmz6qJjSircAz57ZnQoMbAjCYkTpJ01voRBNsLQIxSqVR91wMy56NYe%2BLN1gliHcyOQzMdmiPbXegXVCUKX%2FofxnwMKEiu1tYtO96h7KVPuQVLlzb3Qkv7GCNNyrqx%2FlCEw5cxti35jHgxxW8HbXgtrxAV9LMX5m%2F0CKNUZmZ6MHcz3FKQKUe%2BzCTO%2FkszQGrYpGlN6zgRxykQNlY%2FOyTSkIA76U6nxiclmh2pCRj%2F4xCZ%2FPDg7rUOtYMKIrvmfPy60wOh%2FUnlUwsHrXefagF4uYJv7yEML70I7GzOokKUNq2QcEiXDxaN53CA9Qq5Kld%2F9VxF%2BUlW85%2FXHL6pT%2FmS2Itm79jzIYgfTUW2wFAJwomMR3hGBku1CQMMx%2FZvRPAgHjqFpr4SpPGBeooILzN2ZusOV9whav2nAyvmKtUj%2FylxZLS2E%2FvusLPXK6g8uXZGuSaTHt5QKw8rzsZBnQZV69J1DZFSdjGoHNDnJ7MsxvG6QxZbn93fLoeLXYX0%2BRIiUW1oz5fxHKA6RfLBLK%2Bn3KfR87sj3oXp3oEdw%2FR%2FGwgJH7pp6n9o5O072rIH4KBPi%2FKO6JfXD4S%2FLXUb%2FNLPwvaZP1NVpxBMhtxILRCAWJ6BTjgP0nbuMXp0mRIfVf%2FgmtPkMMPDwttEGOqUBjYgM2TZgp7flmDH9fbL3GAQjOgCVKo2TchT%2BkBOwa9kHxWRTEMQjILyESOZ4YuCG8w1JZBl9PaK9G%2B%2BQeWBdKIpi7dX%2B%2BYB%2Bbmbi1tkvdXmLnvYDrlnLZcn4pI43cNPgWVq23ojoLk5jSD7DxoS5aUpvRZo6HuuIzSusPwINGm4qBjOMeP3R3VnxFq80EDYy%2Buc5Odn8Z%2FvbF%2BFE9E5bmtNidGd8&X-Amz-Signature=866f9de9ddcd0835c5a1064a37413f3403f6131a98dbf5a1a863f80651bc3c12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
