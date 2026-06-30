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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBB3OYX7%2F20260630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260630T152925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC323X8AgCB%2BaZmemmOtp1EUO15egks5YFUkuy1ObzjnwIgd%2FJujkR43XC%2Bu8HO5zBcMrzHkZaxILBepvF6Cdvn9lkqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPadpoXvBqv4dpcv%2FyrcA4laxCEvKNrOZp1Wfy2yjyl2mQoX%2F9axEm9jNco5EfkzzZ92p7ZJBBM56TuKkVZGMqXi9U2oiZcgGKqRujrlhoU8xZwy7ldd2CbdLcojti7YFeAzmIy03ZvKnvbhbOSdJqfYI0fNGdl4W0nhKqF5ZLMYXNKFV3L%2B5A2iRQgR%2FGWUpdK7S3VeeyrwFQ0G%2FNIWn1ibFadUed5T8nsBSu41wIBhcdBRVGbrBfQ8%2Bx%2FKoJYiRGcEEvkvjq01dSfPxoZuz6WCJLyTq9tHJVVUAnPOrnkwXv3LAR6pwhexdd%2F91%2B7GRj9NqvL5YfI5SA62EJByinxM6vZMEn%2BrngNZ9%2Bt4KWyVLZlw76GuZfpXO7dp4rPu3TodZWjZYEA0vloPxdJJTwLY599AUcnqcUdkQDGp%2F70bWRCdXGFPgokvW72YkeF5UJQ6jIhqoXepa2JiJXusXIB1KfwjeouO3BVRMeUpB69xPi5OpbzABsQXfeGCrOTnlHyGDGTPCnjHjVSCv%2BDA3bAIqjSUcjQBmltT9%2BB%2FO9gT5IZjAFj1ePf5sK3dyQnYcC3rOlz61ZSUZj%2BHAJaNe%2BvK83DJjR7o5MzrOVyF6JZeRz2nMcfx7jgZiX7CFyZbgZZU4LgeMcFEN4SnMJW1jtIGOqUB3RZ12Y%2BEEmlzq8h5I2t15HlOKtBVVQeT6rUFScJbWlk7o70kotMYwD06X5ZsyZylTgTDKIg4IuVPzAe9psDwRLZ38R12UCRz%2BVoTwN7wfRSGqRjVUfRzV4%2BIwu7Jii6Stx%2Fb4NMfqmWPvodNMMgWik0pbDGqc5dsZLy%2FQ4y%2FvPw56Bi9nluwXGOa63mHLNZezPjMOMSEw%2FYCKBLee8ylkh9PaEn9&X-Amz-Signature=b70d812b09b737ceaadc444d81ea3c40e3bc8da8373762e982369ec44ade4bc1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
