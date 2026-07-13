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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SXL2FHQ%2F20260713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260713T132442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJIMEYCIQDsbTy0u5VuSlBTYWz2cZdKEqgqNcryJzxbAiPeML2qgQIhAIBlM1wnQlYN2q0Uv%2Fh4FE%2BFP6ovB1fPgfQHdErIJRhaKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyO3MT3TTg1ZQFCBXYq3AOoywjraia7iIKGy6%2BTW4p%2BQS3WBy4McasW%2By9dd5jZuY8UqI1N%2BSy6iODV9Mljiwjz2elr%2F21x8VGXrkjSJy28j%2FdAUQN%2B2eYe%2Bjb5Bv3vH15ZakyliTMCadKEL14Fbcp7SPLEeeHohofkyjBkeIjgkBT8BS0WAsa3dfzBWkiAaSuXSRRzIQY1rWFOESIg%2FVZ1xrPS6PGvpJV%2Fw6FZ9irHW%2F2QzgMB6dsHw7pcxa93w9qRUMtajATH3Uz7M5t%2BzpGLMlz1uDP7BXhXyaCUEvSc09ioFU%2FxplNhbK259JNGgH1CHlMww9Nz7geYx8cfUYA4SlMC4UntKVj2WpjqeADJXlNw%2FONmtRYMG7GBRwu3APKoxkGReu5QwTBmoFoElygWxcm8BYONFnX9%2FdjWO%2BIHE1pWUNnkkCU50mGv5akYOGw9JbPk9mBsezCOXnbzYpvxYVCdQWDaEzbUrwX8kbtUGC9Bxf6t9tQQfr74%2BxfQO7GNPqCOtiGpPOyLEu4NzrhFsbZvmGqJlbgl6YFjV6CvZKxj8%2FuqlQPGaJBB%2FPaJjjBSn9U2GcQtI8KcNnSEPBkNsmOX8QqJU4gs8f%2FHqxHBcdr3y85EfxKPxqss0S5YmZh7MZtZ4%2F5gfwQxwTChtNPSBjqkATxhb8g5NkQHGTWdM5kTCUgol8AlJOMoYl4ZQ9Xw85AOnjGJWbPfFCTIXsObNUU2tY9ohN8YdWJEiwCyKrpHoYtZ5SgiWIO2m%2BeH1nYqem1MrWqmvqjjCZOlNJF8n%2B5TIC6%2Fv0yjuMKafHaSIBSrG93oa1GP9ouSCY%2B8aaLthOcC7Ex4WhRbJjlJbB6HIe%2B8Yl9dD4k9w0CPPbzAsQOxkA0qt48B&X-Amz-Signature=fd766eb62272d74a2fed63fa9c98b75702fcb524d4c9e7a19534e5633c7a3a0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
