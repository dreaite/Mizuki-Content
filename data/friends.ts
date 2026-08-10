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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJE6U66B%2F20260810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260810T223817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChT8x5VeyNPqZpyZ9D%2B%2BzfnTEc2qyuE4aiotHm61QirgIgIfwmyQtaMfgvXiFy98P3dAAFp0TtZBLK4yfAk9IHpXgqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFpLYYG0DqU1iF7rrSrcAz5k%2BlQ%2F8cOmEYcUqVkWdjtxIPRaEqSix1MnP64OOvTWfYDsKKnj2gW4kGfp6b3hw3mBVWkCpo%2FlScmjNEg1rRFEKIe3DvhKFK0T4%2Fi79UpsoiuWGgsEkd5JMwFLOwVxDey3kuss8up6PIl%2BE6MKAEX4pLWn4qkrtLpCjllwFYQkxmgSrzBniDnyz%2B67D0IMryjf8kEtHfXoQcmHObEzPYNZoZ%2BmNVOkwS60zBTMWKALF0Nh7a4XF3LLFXiRYPTQFHApypo1YfN9QTUVKOApogrVyUej3N18S4N%2FABOuIjY7yoS9fJw8QoP8pC1bEkCru6kUMyC0EA1yFwwMAcBKKfquLVyBCk3d9TYwFPjXTaYFU2B7xO9mJjq%2BlYjc491acVgv6HkyUxtxcXmvLceicUZmWA9zgZ1L%2FJGkwcBxRSEx6wyr%2F%2F%2BdSyyAGG8n%2B3j%2B1bOLr0V3LmKCncBfDq%2Fk6eMpO7SpDp5n9vKAK7eHAQNjMn%2F%2BbEzhNd2ovca9Fagbn7oubNm35Z4vtNTLiwH7BChZmzpZVb1RhzV%2FNog5Dutw6ovOkLUs6FaOg07LhcU%2FZavxBJL4CzfyQF6Z3KQpVSSORL3fjH0XaBq9axvJYWKIVFB7M%2BTTBcDefnPjMIf06NMGOqUBZTsO19BmxJejqSZZPQT3mKm8ZrlP7caLva8xQ0fzAphvr%2BtNF3%2BUcTTk2kwG8uwqcLbPAPwTidBBtsyZ9Q2fxS1%2BwIEFza63xVlo3q2SUQOePBGfYudW8Ez55ikJ%2B8%2Bw%2BVYJlEfM1xrhBJsbQX%2F0xBpEqQ8gV%2FiBmxCMG5Pm4ZQP58UaQHmbyrJ%2Flrv9hzlJKAXI0iIMgef1iySZSfCPBuNnTmbK&X-Amz-Signature=46458531fe1262b8681e2c32ab0edd66044e0f310d9cc8e61233023b37d99352&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
