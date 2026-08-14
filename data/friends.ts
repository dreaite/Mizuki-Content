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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLWA52JP%2F20260814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260814T194926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJIMEYCIQDzDb%2FZDQBVYYF33Pk0M66%2F4RoPWr%2FYKQl2r0aqmPjzegIhAJSKmedtYUUNehfSiuAnELIqABxP0IOa1nQGibFnFEBRKv8DCAMQABoMNjM3NDIzMTgzODA1IgxnzWQTK0I%2FHgnaxFUq3ANwWVg7nBWInvTmF4ejrL3pmiNNA9UR1Y%2FU2mvsSMS8P75s0l5gsKPcmQfp7jJbEVyzW0Eqrx2h2l4NeN2nqd%2BbmjeirP6VeD8eMjDmLqA0KD25PoMeBLIHdPK2ItUTwYELK3KJg9AUASXcaJ1D%2FUME6UcAUd0SLxhsMqz3OxlOWoQ8hjme1SNU2BV4YFKI25AGxAMXkXqZwpxX6o%2BeZPao8oiXUceCg%2BkU7qfivv0wi7L%2FRKprYNgWEiOQICnMAr8nTCbr5AYrdeFhTrW%2Bl3PMvu6DSFEsP6lLaWfqBx2Sa8W%2FmSp%2Fy%2F%2FmxBuRdjC7DHF3e3A8qTTW55XvUJoi6enGBS9KmtGTPDnxKyJgA8y7rXwlfaE80EjKLjkjLbdCZY8quCjkTXSeI%2B3HAhLKzdIjr3gONRCKle1XYq0bDq6qDoFGgn%2B4oEoRHqpcJielNumtyY0tgBk5JvmkIOjnqBQG%2FHioqSXTSYWgavTps6NdrqZWUQ%2BSZyh1t3ltbhriCD8GP%2BcQdqef8ppwitE9fyiRuGC8jW12D1KHeX74e%2B3ZMqj0nX3jfW8Z2Kq3oljsiVl4PkC3K8Gxxw7SQAwBYWHh3qfVPDJKUXh4KitWC9dCzSep22zim2yMFk450zDxtf3TBjqkAQLLZUTLg7qsk2L0a2IshGmtC7n1n2SAIKq%2FiaXV%2FfaeuMhpjNBI%2BfuoKNlgeyiCOr7IHlqA0Ru0FJEwi8UydpPXvMSDffed4sp3umve8YkWpTsjtIyVnT%2FUZpGz%2BlwCDKq4JJquIzb2WzripTLDvpLpqEFOs4yBGGi2wauEqoIYtfuAgFtbAFUFhPNQP9yFfWJA%2B%2F561WwO0MNfHiYzd1TsxD%2Be&X-Amz-Signature=b9181033fd55e09017c5604aecafbfe8ea4f69055670b261e2e59fa435e2caf8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
