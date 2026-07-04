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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AC7R3EQ%2F20260704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260704T120740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIH%2BwBYNdqnXs4Eopzuszdu57458qmr8bIV4FC7Efuq1cAiEA4RuhQ0kgDR6bMNBp5S%2Fji8guR7IO6Wnx7Wua4vTg64Qq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDO5o5nuFly2g1gn%2FxSrcA4AfLyXXhks3JNCJg%2FZ5w9otqcyRLSsFwMg%2BzFw0xIzhF%2BZSsClzVxBtLKphdo5lc5tAsMJ%2FLdbH24kVfik3JIar47Wycc5ppYMHXJmh3JMX49Ou4G1%2FXTS6cl%2Bn3M6%2FbMMJ9q19ge8DOkg60a%2B7IBT3AP9%2FNMxPKus7bwQnKKnwrJrHX1g%2BdeDxPgDkRHlZp2pCFw2c0ZfE%2FSchIR1RvhJ0YPHm%2FupvNE7Q%2FcP73ERURR3%2Fy8FIkxC5pMfFDigL0wa3JUcy0PqIoz3hUzRsGsk5T5vQMplwDD7NhO9EIXWUMkF7%2B42LTt0bVbAVwM4XcpqrhbaB7JFkY%2Fq%2Fxt0YamJhFuvKUmP5uMvoAoiAkfP2Kb5uAZ8jZDpGqJFCnIZFBSN3wsVq3RrYJVlBuVO33bzTUwOwT98jupGg%2FCfbTXerjPkI%2BHnLCP6W7rNO1j5mNE6kS8eFSnUic%2FYYQfojWQsn0y7wh1%2B7aVTbkwhnpzfuE882i1fcsSunboLOTzVe41gQ2%2B5q5t%2B7a5mKH7RvrR%2F6T%2BQudrEnjW2IOwFgACW5Z%2F8J0lsnQNKKda%2FD%2Bm%2BpqMRys8UqiA%2FFB1tpqz%2F%2FpEwTbdxV5zToVsH25Ebfghv%2F9p88M2qnWK5aB5U8MIKgo9IGOqUBNLZzgq0VEOszATfvqrReV7E1Yu%2FIZp6IP7eaWjfbAfEm%2BNCqvGa%2FbaDJk6y2aOk6n7BME0nNyZTFbnebl1s49bB9B8FtyJ5JxPvOL53umUPQJe5gdQL3o7LZiKku3c67quyE%2FlFuUP973vv5%2FvecrVcmQmy6Nj4gez6mj7ERxmSSPqkRV%2FXbY7w7N6G%2FRn4aKUKsX7AAQh%2BYqAhh5wFep8avJLWy&X-Amz-Signature=baf4cb6321d38c5cc4cbd27a1c85c82938793824e0d034f314412f61bfd37d43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
