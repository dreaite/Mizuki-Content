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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2SBF7MR%2F20260707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260707T115203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBf5A2O3kg9n8VwamU5lxiKGXBqQ5AkcUTh2DgPBpQJoAiBcOqB3tekUqnbFOoyPKCLQ2%2FuolC%2BcIl3Q008AQxwEaCr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIM9PbKAzfKPLOYpFJWKtwDzhv1G7zmNBBkVr8%2B95eY9V1F4aP6D2ECDFMuF%2FzXG4LqKJ%2B7fyPDQc3Y2bi4l4eNNy9%2BhL6SKWnHtdmF8qETHQZwmUz%2FC40UMrJhe4Xkj0Xe%2Bfv0o3sby4XfuyHLCboDb6CcVPhTVLc8RASl00KZz5D2j2DKpKmD3z0GPFHDEWey0cNsvUpa3H3vcZ19EJI4OEmstJuUF1l2K6KtgzTQ3eO4O6SQA0KEJbGrEGEse6oPPaGeKrKmPyzEV%2BbmyY5j22H%2BBtsU4tFuxtgfZQyc76SI3g9%2B5k9T5toTp6iqgeXUeRyWOdBzKWgjnYQVY917J7y2%2BvHgs0w1YUtxHhXjBcPehbIzBetyM39iinJ4hi%2BT9pYLTrk8Bqo9MZ2ag8W%2Bd7f9ZZu6k7GnuhxtLeI%2BiHbFAQUqDbdaWgtm37KmIf00w724kIjAj9eU6oKY3bWj%2B%2BA%2Bppc5SfTtqxkaA5zAaaceKZOafiSBw27X%2FLRKFI6XC8iryCP%2Fee1zVf5ODJMW5eXLx3d23Kiw2SqNZeM%2Fq0dVY0%2Fov9l7l2ZZreIqvor%2B7W%2BZJttHhh%2BVcsEdOKZpN3teobee4tygXmaXfsAJZwVpwnL874bzvybyqIuNAX3i%2FtrpADi1tBA3BkMw9bqz0gY6pgFdlkx36G8LkIdjL39LzbuQ%2FvSXcmR0xST8UFAEytSfUpPbOP0kk3j5sPhN2NaQ5AxsPP6bKEr4aqE8%2BfPcpS8M0M2d%2Fn1enkeDGdpkFim4RCJw3p2QbBhvEA7tg8Ek9TUQ%2BENOJce0ifPyjR7KE02e%2FKbrNz%2B%2FV%2BCw4mNur%2F5y9yTd7x9YRzXI3yIjMEvWXeyLd1grP1kws1NvrD9ijtuCqVkIAjIs&X-Amz-Signature=5bfc13bb6f1229409a51aa5f4ac5eca42c3c175dd75920257e2e55f3731985a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
