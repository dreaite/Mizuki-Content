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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTZL7GKU%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T082303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDbHphAnB0PZbP538oJZqnn6rx3E4VYKgc63QFSt2icKAiEAxfpIWLkCXT%2FnjLPvqRjANp91lKah5zKnwn2%2BcAXLzuAqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDImYOi1lQF6sM%2F%2BzBSrcA%2BXZ1LBjjZ%2B%2BlcNGjMs1zLtf6EQJanKDdWkkgItJyjgBFHucP2otIr9BKq9i2mKQptuEbMpgbfu4ANXWzWhzphbBQasOojx%2FpEKVWL7nCWSD3Hv1V4XxB4LepGry65ZfzUoLKO4u2VLiT9matbZE%2FhJ2pufh2EAXUAZK4b1eE1ycAn1yz6juSyFeorgiRLZASwkLt%2Bv6BUSzSS25aK%2F%2Fm6rsv0C9wgV6yQxVWmqf2hedWeE3%2FQuLmrG12y8AJBpAiPzZQpxz4y5%2B%2FtFog9HdbXXcO4wOXhPMdXo90yCWmj%2BGLWz5o9ZezNeSOOq%2F80Wx3sUIZnVdIA%2FzclHukf8onglnfVcX2Q6tzHY51%2Fo0iZpG15Inu8HRt%2FZ3A9lwHZzSdlxwKmalZAtWBJ6D4PWnu14UTUM2ncrJsP9YgfE9KW7WtjIzsRjusNCzTux950%2BMZbCn1FUU0brPdd2zDV8K8vHrAGzvRKIDj992DNcd2aO6a2DyWA9O12kntlHHC79EGf5Qdf9iZvXJj3Lypw6dCrUFqrW%2BI4oolROEJRmn3E1fWXqt2tx1JyOuFF6SlIlLMeGKAlNlWqyDZHkjPF0tAJQIalVVSrsNRjQIWZ6y2qeEvMOTbZOoBwB%2F9V0zMLjq8dIGOqUB8sboechJYgb1mPOMIUSiXlki2bkpu950JmXfSx1zXpx4LzawJ6GQy3krmUJR9H8BEhnpUImU1xEej9znTMZUi2tdUhRV%2BPP9aa7pLPjcaYjuHG39Rh7v0qFysjqkX1Lb8dF0YWMKkCihOdgfM%2FDbMADTZ2VTzEAq9APfYGYedfERYrdniRaZT%2B03sWnB1R%2BeugfyGdTtxACg4XjJNVYTlDENm1nf&X-Amz-Signature=6e919f18db78b34fc83e8b6205d8f1ea3deb99d94a9ebd2410da6bcd24a68f28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
