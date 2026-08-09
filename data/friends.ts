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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZ2MLPZH%2F20260809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260809T065828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDzELRrzUJvqIeOliKrK%2FPKuJeA8%2B%2BjGlCq1ObHwrZ%2BnAiEA%2F4EN0eaEQHgThGK0g6pQMfhhBSf6rRxGbPGcOExibmYq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDOa72CkLaUwCHZzbMCrcA7wh7SlHczt%2BPcYrLUowiIfVLwvfjmLMQWikB6juBn2DvjV5yccK5KLlNyPt%2B2ongg3kBP320UiHFpf9aQ59Fb%2B0etZSspQMkGU4xjkk4dKS1JnSf5Mjw1%2FFvrBOTSVHa4JftYF%2Bgb4V0AVDPURtOx%2ByU9yVC3OoYYaGyLTJ4ksh5idCNQ2BQ7aIPOgfnZg%2B4o5gNF5iSSNr3obmxT5S38F4Hn4FzDSpA%2BBtxdNyoKOKHMfMamSm1PUmjXuygM4SHf45wz0k4ZdDMy2lzPRR9YbYkfwqSdpbKLT0YhUjN218x5iThqqfB%2B8jtaegkjI43SEr06tEx1Owie6bIGtUuucQ1%2ByQED%2FN%2FMw7Ksvlivjhq69YXsn2YMPR8eSHdhpKlO%2FicPxAvFys%2FVGxggaDKtZ5gVKOgOaq3NeViYim%2FgpX4kHt3H8ANg1m3gCYl1%2BKU2sVP9SV0mQ3nLvOs%2FJomClxKN7dWXOzN0Hkz%2BBOD%2FqZCbRquTw8MYPMjbsedkJSxZJvQgr8DDP8Lh2F5L%2F%2FCbHfOi65IW2SgpH%2BwTbplzBg0Uqzw6rsbvrC8aJX%2F7OiU4%2F2hYsGUWYMslouNG4XGC%2BUHq3PGLfHL6DN0PVL3uD6srmE%2F%2FXjcD6VZWSYMLnx39MGOqUBcBFJR%2BLtAGXD6CaLqQTUB4AnmreH2lIJghpJg%2FA6RJGR8yiONC%2BDxbFdBpqAga0zTHP7mkirGpWMU%2F6riSuyJl8A5Ojn5jts0zzmZ33tzI3jmh0%2BE9sMQXpnqBRvQnIZ4CJF0wUerua%2F%2FMzafMZ%2BF0IxxNKK8XS%2BCmoxQjXCgNEwMbj7rT8XdCWL02BOIbCued%2Ba4tpFZ6qLbHO52cQ7hrIJJMjy&X-Amz-Signature=d29f0a04dcb62617c43c1f4bcfcfbad56ba8f272624f19ef85ef70fc4019828c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
