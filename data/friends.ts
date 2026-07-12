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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXTMXXOP%2F20260712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260712T225145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCQI8Ew0jX4STP%2BYsZUDR6%2BjSRR3D0j2FHtNh%2Btsybs1wIhAIgaHL3GDEbyjUZvSTZE7%2BMglfSHHRiqBQJ3znFTSeWQKogECO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwH25SPWmK8lIa801Mq3APbKaC3SjxNDxYJZBDT6po3H2LWEX%2FG6G98qwtZr2GRWe2zl1tCGhiI3N3PGiOdV7DNF5%2F12SS52tDW3sB9oYXPa14MQAg9HeE1KQ59rFjXcamUyNXMskuFBvUzpz164ObLwDBa7WaAK9aLQR2hvcrn1vImyHWRTwRk5IBAL%2F7bTpNNDe9SZ6Xne655se%2Fl4qzLeyLOn%2FqtpsdiytGH%2BZcz9UK78rl%2Fc9yigTTkW9Jlgxkn2ok9RLjNeh6fOi4MfWFPqoCJAcJrkcvrBqRzM8m53M%2F0yV8OR54qGvCeWl8w69zg%2BJY3Bp6J6ER4EZkjYMCkNIY5hxBVBjzejgNrUiQe3VUueTJr2ighV%2BtGuPq9rMRHSMdYoYSPZboB7IfDPMZCMMMZtv39suZo6LZkqHEw%2BDI1AMR8LqYcNGQvIFDXV9ziAgxejnzux6brzYqbo%2Bmrm3uehYH7%2Bm%2BixYZ9WGF%2F3%2F1h013pjZE4l3cScsR6eHqfDUYA2%2FFn7D8mAk%2FbynRJmPWAvJ4qZsA%2FYY3DxOz4ZDeYKciR1ssaKJbZ8lcoze6lkCAMbQLb314j46ZWYAhVHr1OE6FMqXIVvinoKhmpqqBkWr7VGVqoL4YENJbV3flYV8RyEYc4qY2FezCe9c%2FSBjqkAfjY4i%2BO6WvvRJr6dKQMHWQvXTNDne%2BaRNGivn8agbHExphYcEjeen2kCovFJQ3yPrt9G1LHeVst7lx9EUgwQBdb9aVv7VDdnWPFxgvHX6mW%2FFMkPj20u94FfoYBKp5FBsaYRb9gLH43RzpRHK3Rh6w2rllk%2FG6ZT1MID8jsXoL869Kyfn%2FAxi95RxDT%2ByAM0boNBQTRN1zWw7lwhmlZN9xDTwTI&X-Amz-Signature=5c16846f2d0573957a53db9372fc20f677c480e57db856f4a0b85561272f4aca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
