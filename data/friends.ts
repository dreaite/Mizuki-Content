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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJLTQFQE%2F20260708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260708T110617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAAhq9pqWPBE9vo2JrTiaQ9zTlERnROaZRfnh4%2F5ipzwIgS2MGpIxnZgPs%2BdobW3%2Bb4Eqaz%2FwDJtAbBb8lU%2FAcnt8qiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKyeRlh8m6kJMzdTCCrcA%2BkFBRy0vkeozYQJ1P0j7UHQQKELM2JiEIZ12%2BQxsxUNyR4M0hSr0gfJVc7qPGE63uWZRHzshAu5F6MUp1o7bagQDRzr6%2FRVOzaPaxfP8Y4XekzDVHc6ow1r6LHYC4aBcGuodYnBCbu2aWCv0VXYYCNKjGGpQ2dijtlpD7HNLcPronkEG6a32K%2BsxlryqYfNdoQq2i8HeLkiQLXF%2Fbj3qwwUMJpBzHjZwnE1t3peLVpArFaC%2BBk1lL47hoFU0VxylMunAlI5LbwXYGs0aHcBpDWrr5JkVi6hT2ygoITdVtCz3JHt9KAYzpdGzxAlJWe4pIdqrUgXjAknmz4P4IsQZaRyLXuWAVruKE%2BV29O%2BN%2B1jid2bv5tcRNx1f3MC%2B2wnkLSqXaJC74dHBiiFjPKPLiEuGt%2B%2Bbfshaj0yxDl4yps9wGYozLUVVTW8n%2BPVR3lMt21BQFhrBLgM%2FNUHq9CwHS92awSDop0Y1vhPIo9ISv3M8%2F53e1vwy05sB0Y1UdGeQ5TnMf4rEJj3sb4FWY4%2B%2Bf6Aho5f5g3VgotKJr4OxsylNXWw7JpT9LV0I57pH1UA46yANctgMMiVALb50cowDuAFdgINw6V70W8p%2BrzRPW090F7TRgLBwNTGONu3MNy%2FuNIGOqUBf6KOxNIcN36jKnvmvTkf8iS3aZr4%2Bi9lcviZru60tTkr0j%2FM3W7vdSnmcA0GMHHRLTtxie6FkPWDKPzPZ7PSEVUCT2PO51W%2BrbqhqkXa0ZA7mFfcrhP61P7NEe0xVUxJTA8pSIJlICJQVPw%2F01d8jIM8eTV6rgzc9yFlO2MF3oPhTRYDKSygwDxqgJDnJzG9Q7psxHc%2F4IYOtxGMXTwTk9i4OtIf&X-Amz-Signature=05c14604fc5f9509111f1e725890cbaca9e51f76b6bd843b736c940b94d48c79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
