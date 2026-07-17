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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTRRCAHA%2F20260717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260717T151439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA0%2BvWCuFAyWEpQGMHrpuVidmhuatj%2B8PpEpWQhU6s%2FvAiBFSdJ6Iq0yBDsNqMzCifenaBwY%2FX%2FZfcQ1Hrlh1qS7pCr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMtzBqta50LH3%2FEu0hKtwDmPfPoVxX2dJLrG1WRfChXNmpZYfzISnwXW8hovKkSPVlxngbBAPTjSQ7sHvHSGBmTu3m4%2Fm4%2FfMqw2dIZGJscPmN2pAqrR3Q0rQmeXiZ7Xevrt3lDiUtXbg112s3z7S5QVpOY1ljFWipMU3QQlgWf6iW7PG%2Fb9oShrBfuG24%2B9CeO2YTPWWB4c7NcSSHoUCt%2ByPQ%2FsrVKdYfq6dDDtQWTH6N9s93edSaOtPrz%2FCTA0oUUcBYOIsr09sSrkekiKVi5qsFm9HBKyXJyDasWvkzeG7SDLpwmdOnB1cxrW61gTNvejKsDw8QBeoa6Gc8auQPKqFsIxzL7m0PqGLN9X%2B%2BBzEvV2YoUJc3jBjOy5ToKhrkqS1Vp8gdVS514Your3WQhLt7ybLQ3dHqdsnctt3OVwwABAjjqmd6%2FqAVBp7eRdZuYavPV5pYrWvTza46ZXtgIds6Ghp9y1Oe2a1i%2BzU0%2BIvxDoxfnksef9OFHj43v5NJGX%2BPYUeaYTYYrinmVctP6Da3PysjXrl5wIIJ%2BaPTPHbMXUTsMxca4%2F2nOkHHH4vMU7TFAMNg2FyNkUyq4tXYQPEfg3HoOYcZCsL8rWx5f0WTiy6ykuStBHx2JHiYaydbnXai9yP50o1GiIYws4vo0gY6pgGOkaVX9r4va7t8OPV7z%2BMFS7IaYPOQsGK0vA8STHIp1Nsps41PDeyz2ea9G80wqT3s1HjfJzGk7T6TxlzQvC2sU3cN6208jx2y59GoNqGv00EhjHUIhApR2fQOFzP0DbUMr5zT%2FJbpWuLVkZL1CCm47gGtf0APjm41QiMeqeHLC8JhpAvHge73cHzQ12C1JyA1d1kIQS7JnZ0mE5Zo1JVqBTIGoLw4&X-Amz-Signature=2ee65a0175f3f648cd7ff292e63e250c4ce65fd39580632c11b55ab581186e1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
