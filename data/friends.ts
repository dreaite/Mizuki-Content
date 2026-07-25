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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPYD6US2%2F20260725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260725T111134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIFQ0QwBNvgrw8mx2V9z17GTYdQSRzKNqShv7i6wAiJ3VAiEAkdkVUMN49jq460Dd%2BWG1d6mZJid6OzNtc6Y2oUMc6v8q%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDDYMdHxOoFYYGWuKEyrcAwaWzGzzbsN22lcp8QgkaTNXoU474JGlGxzplpB0pTRPQNWcS1uaTvXlZFRqpeSuOU3NkJcpbe4LtuGRZSEqeKOsB%2Fdf3dzysoE9X6E2Vd8GsevE6PlKzCsg6bBeSp8dkZZQOjFlUy7wPzjjmJ%2F%2Bx3FvfE4B72HSh9pR9emlWIEBUKBD9qf99anbZ7N3iQgD92xVvGlXyfYtIHdTu845zR1ZsRWOU69rQQ50tZxdixIwYOURgXtpLzYQw3nfTWI16BDQvX8STY15nmqp3bw0PQAgBhI1%2F05p19N8aZx9u7F4EtyGbJ%2Fn2VAGSF3GcqOLLj4UJW%2FZ8EQOLrl7D%2Blx0oSx1PFFvpEF%2F5qjfOeN0%2FK7w6l%2Ft8h%2F4Z3ziqChE2tN6MQpBDrdfpqWcyT66dh6wUuBeBVlKqTyux7Qwan3OUoiGbBDg42vOtNgcpmF4%2FJ3xxSM8MNVI8mfxOX9Le6ORHCaBMGfEdOlQH3GuMy92E13qrCX5kMmOlvS5%2BM0MiwNfNCa62tFJahgcn70SkgS3RwQcHie7u6ZwckxHc7q3l%2B1ZCKGkzaeoB86%2F8IetWlQ%2F7I%2BCbzA9kRxiFjrgsnWHGybcILpo1RaiOgI5VNUUokgZSAScVzeGxc7acQgMJmfktMGOqUBIpqja6ZdSSwRy3nyPciM7s9b22wP3Qvb1hkK5fEbCv6h2ll7dry4fJdEc5RKNcLG8JYto8A3HxXzXmzkYC7gYh8Bz%2FQYQD3qA4IrJ1ydNQWxIIur8JYkViW004Pxff8PUuh1anyuaFCPy9LhJhDnDY44hT8pwwb%2F9qmyG9UayJSQJ5Kn6l3qFajYxqMeyZu9yX6k0J0MIygSrq4SQagiuXevbeax&X-Amz-Signature=288e6d0dc18e20372e4e835f36fc669ecd57b2726058cd6650c419784a6f4298&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
