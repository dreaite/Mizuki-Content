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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RZU47PD%2F20260620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260620T220959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIH2LXywqyEna%2F6vY6cGJqZwMPEbccN7EmvZ97PN9CapSAiAgKIk4rp2gWsnWlYBQWL9lFucOOuH%2FcuJbvVJz8%2BgniiqIBAje%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYolcif12K%2Bg%2Bfv%2FPKtwDKVHW%2BYR4kQzoWTNqCQijCY6P4LR8nYBMszv9sR1zqtmm8GMoJ6JvZc3uJlaVJbOSahb1u4snHCgDHYc7i7JlEflYK%2FT%2BlxRS%2BO%2BGgJb5CFlE6m%2FIrMBo9hkTTJWJhUDW09WTzXY644u%2FhvoCcWkb51xOQB7ekSl9aM%2B2584jt1UBlKU%2BGmu%2BLxVNlbU04c0iJp6Sl7gDoJEKo%2BSQmg%2BRwhofFoBHQMKimSkaIAwlYIR8xlkWmwgvaSWcjZlOXoFwBQacw3AUBYf7g8UFndRQpePw88vxU3l%2Be7m4fZVfAQtvPR0Vio3tGhVo43YqFafXknWgcdxG90mtTsU%2FSz1xCHyPLOx9laCmcac5K1ZYcpYkLpcf0Rfn7d5fdQirmVr2tYuXfxL0ozwue6x5kqLd0a6V14mIf1BA5os%2FUBQs%2F5ISZ11uLaj4KmZ9oHS9toEcJhj%2BicWFGM9jmMucUwjNGDRRfWTx5Z8%2FZbgEvA2JRdR%2FqyPHDSQIrVmW81jKps84xGj2d%2BOGKbZY5dlaelwNku%2FNehhCbtAHbkaGlN2Udi5pjuWJ8HtBrfewog6PhXay3B9k24UFgduzjr5yCFIgKIiWU6F43JfhvKYi410GCULkf7vqj3yjKNz0VFkwhfzb0QY6pgGgX7qv0y2ClxFL5%2BceSJUwI4JFQ2oquoyUmqx50tOaZNwIQbyyACe3e88zTnuqQBnwzgjbi9cNSTpaWqyjP%2B0XVGsQBqyQuyDwkpzUy34SNNb9ztgp%2BCjKSrRPWcDt2HY1LQKNq3RBntYMIpr%2FO1nVVKSu4wtcqHFGXa4OGjIO6rFKnhAB9ZK5Y4OJF2cNvVxiwZtQedNFzlbAhvGYEWLwArpj7uF9&X-Amz-Signature=10fd115d6b008457432fde133667cf0f9dd652af5a2d5133af3cfac1661159fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
