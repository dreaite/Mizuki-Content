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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YA7AIYVL%2F20260625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260625T232001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCwFGAAdrT6knLgNgS1qnvx5A6beORUqaSfKWOxnbhYZgIhAIlZ9ET3ROgaOBoMXSHzc153jWxloL%2Fu5LDO1sijU6S7Kv8DCFcQABoMNjM3NDIzMTgzODA1IgxF37r%2BcdrvYeJGf8Qq3AMSw4dXHXuXgI3Vc2fU9wgyn8AP%2B81%2BsKERIjRyfuc9RHQslqEwbHJfqjRh0LZ9p5F6tLRKOMlzm7fOD7yrB4Qkbq7%2F%2Bdb%2BIg%2FY3yK12RfdE%2BqcHjM%2BSV8RW3IEgm9XAehfQrkDuLDG3FDNRfpTp2%2FoHLjNk41YBod0BtWxlTnozcyVmejlam8f4yHa3juHkbq0KstVmcJEQEhsK1WpHU1FPHnwK4UXmw7%2ByE1LcqWJv4Rd%2BzBK0%2FiTg4C49CG8RNQ1ulwecAwrhxqcTFbPDRX0wkdeTgqvXdq%2BpNBvstl9JegKJ%2FxeRcQVm3wv7x7mPxP9Wd0TC5x8Aq7u267%2BUYzcdzScC31ySPJwHnKrQu9Lio57bVTF6zvB38sN9CbFt1RePl5bsrZpKXrFSAK%2FyV%2Bj%2F67L6igApvh4nZB0FPTJFHZGSZ27SVWrQH6oO2A0SaluT8uQgKMMHpuUDIMLLJogQwxdhLoDtKCv46FW6InrRTwEj6kBZ2FIi2i8dCljeW4I0ORQYCn6mNIe7MJ8HF2QHt%2BWokzVHe6WwAC8vMQWAFUPxUvnSTCKHcp9jX6CUqEyBd1h9MTR%2B2wzvdgPEWrvYFYjLx5V77%2BCubvxKHXRboy41%2FNZ1dbXCM9GxzDC0PbRBjqkARUWiLlUPb7ELeGEkzam%2FDuvc9DHJiNrXv0FUle8S9x4ZR84XTc1Ms1ztNNUz2OiEtApUNHfyAUMEHJjQlh1is4Rn4D%2FMo1xHGCOyDN2nJc%2F2P%2BErnZqynxcloIkUCktV2HGIwo8JQXORhceQ6oR8Zd257eSwEyULtbvVzWdhyPOPxVNAlwBDbtwLFQAF%2BhOrN%2BB%2FonRtZWeJtdZSOloYsLd41yN&X-Amz-Signature=48d69594e97a7e84e7af1e3e79df67096ca9146383f8d032c1d04c71a5e87b57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
