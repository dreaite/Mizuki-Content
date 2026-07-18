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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMINBXN2%2F20260718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260718T155841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWOCi6lvWi8djLXoMC2mJdkGAYpoBp88xmtNrsmrEqAQIhAL1pRKfozSovMaCXex7gpLZ242BntWSzXDHtrzVbhmu2Kv8DCHgQABoMNjM3NDIzMTgzODA1IgwWDqI88yyFZ1Ti%2Bbcq3APkOeRoI199HdvwX7nuCfbY1izgBN7%2FGhGOnGH4NClgSsXt4Aan7PFYh7FGHB0f8h6LbA8FzHuvC8I%2F01YFxoS0O2YKnmF%2F2qtMzyLlrV928PX%2Fvk6ljy2Y4%2F531yBedAAS2MReasLlC4NVUis0XBvHsgRRIZeeciJEixzE%2Bmvgt2PDA3tLIH71eQjVqXMff8lxzGuz4FXanrnSvMoObt2zpfvnFTNtXJWrwY44iZ9Rq8xaTRY0xc4WMu6UTsH4UZhNqWNyh9eNv400E1xgpoIYiFtQTjftamOB6KoR6xJkeCeWSYGdmhzxgqczmfOiYXSJYzC8dkrUDOeTILrSxTz31CCyhrafZrYQugiLGh84PWa8Kkdj7PjGcDPWlkjIscnHLc45jKbUfHdmxe1w8frOehJpIfZQaqWdqjQlVoogZ5%2Fd3JWBrrcXmZLtaq5d8duUrxzcLwIFj4aCl5jfoxYY4PnUUqdfhxzMFy1z%2BeP2%2F9lnT751vuTYPcjP1ErS4alWZo7l0LqBQyxDm%2FIay3PLeutxC1D5oT9uNmKZ5qMMSk6usaYhQc5coWEK4DBiNxNCLwehf0oab7v0q%2BUl5BH5qPPX9YgNkK6RIPQyggyJlKgO0gPEorPJ49Xd7zDzr%2B7SBjqkAZNbER97lC8WYGkdgTU96nPQ6KfsNl2q4if7%2Faka2tz4I7W36y98JI27yBD5R3hFOKkwRy%2BjafCWMv2%2BFHH9hc%2BjlP1QeVj3zZZNQ45YTLpBDqhoHhb3pIz0I%2BeuZGMs7utrjujCsdnK4sOSuedjOG0Q5aCC9pSQv%2B9A%2FwJCiCNQjosUT1J%2Fjt0xbIm72FdjkTrs266OsBx9gKNxDYvMYqP6Z6TW&X-Amz-Signature=9aabe950670fb4232451fc843b3aadb36aa3288d2bafb25957486598d6c296f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
