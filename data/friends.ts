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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7VCLCNX%2F20260813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260813T214658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQDT67TxIQ8jjQeOb68jloZ7CpmddojcFpbluY8sYYf%2FmQIgKZA4HNmeJFqaWS10eE41XWo8P4LyIrOexj%2Bh1iBIAbMqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDaJn3gWPOIb5uYrPCrcAyZHQDbX0gzY9l8FI5LKJaVHakxQ%2B4aLspic6liiEFUCs44WLGcr11BebqUjgUAjUktQjTKAH86JDHGd9OvDc1wN3khzBjwb%2BxJTHboxyzRZaHdhiT5LWgoG92rz%2BYuYGof9z8J3n9BZdNBSTGtX9Hmz3u14VBZbPmxhOloltZE4dMdgA2Nfl%2FS4z7mC8mCqHNqlT53DcQECja%2FXkV6QKD3xoz78NngDs6MitcQ20RahbPvNxILKkhBZT2FHTTDSEw4K59pcjXEZCooo0WhkHCi39qgoE97DpEXSS5rNpKXqWVs9MC%2FdUN8UHWDlenULu5DrR5CeixuedwNE1o91kNojgyQhr3xwamN0JUFlqoRgO1q%2FLJbmTnZr2c1GyKlnuPYwc2OCgW9Y37SftjeNdhUxuGEq4tu4kJlqVLkKHUhqZGWW4JlsCi0C9VNU7UV%2FLgXdIexQII3hctgT5AdsL3EbE3DANvMI8pNs34FtoEpRK9f6NcmtCp9lpemhxYEhLDxsWCxrYa07Fm7JIsVBOUN6e6toMgpACsuDnWpcKP5z9DNS8Ad6kol0zdEJuVHxVbrpU2VBziqVwP%2BnoeEi2U86woBszMBHnWPeum5LroNygfumPmL9TnqgaOyCMK3d%2BNMGOqUBS8bMhA38OpT9k6glFIa8AwIx5HY3tK%2FJZ9guFMlkUV1N%2BcwAyxkJHZaTcBh6zWE4Umk618Odepq2c8RXWzno3pY%2B3BfG9Rl4DolcqtkwOVVE%2FefzkYmUne8TSSBHBlmj5bc7vAh1dzFj%2FRcXEIa3vp4ZVNfNeyw6eGzZWWkNyI9szx8HyrFlMh5V2U6I6lghACEs0kTG95o5lCkJe81LQxpS5pr%2F&X-Amz-Signature=dbe5d26efcc6e14c52421106ba3ca4ae207dc75603aa7dca6322767e8471cd89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
