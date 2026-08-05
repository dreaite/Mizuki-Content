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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PAO4AYQ%2F20260805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260805T103632Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIHrVGg0xnELgQE4u1YaUJVt9AEqBL%2F6YQ5lgu5CsGfSjAiEA0SPd8e8UvcsV7OGFL4Ft1LE0erRFl0q%2Fy%2B8WJPkHAnoq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDO7UfM1cIWHD2Z4tWCrcAznxArFJOABNGvOFK%2F1MBWe4MBtu%2BMQoL2hhWTBMl5KXL%2FodpSvlSL9gKC0RfLn4lQcaRI0dUMQdmqHi8R24Sw6tADUjwtz2wTVSgq5za4cwFYL6VS1dPg9WRegMiZLMN9HfbdKNjJE%2FJrnxkEKZfS5%2FXEMilZ%2FgbkaFPCIzn1I7DjrT%2BmLILVINACNDefI%2BqYsSHdGPb%2B2mIAm0qnxZ5SpeWXI0UJkuLeBJ%2B9cZBWjzoKOlHo1CRFZRsiP7bBKRlQIdu3t58HyULPPObhzdSRRQNg6mH9IjIcRurDK1TU6cxttkwjckXY7Ky2IUNL7nZCKkwEnGpntpo8rJ9VYAH2bv98jT%2FQX%2F8rH%2FsUAJ0oKwsxe7IzaCn%2FAK%2B4w0V4SI2zs6X4Jwd%2BL0NTXUC4JSUyXRNDa6Dh56pQmnPCqrjgUoo7a5cCarmnOG11ThhP0bT2E%2BQnxXY3YVz4qC%2B1hWhw1zAdNmlrULpkeO2BEhGfhLuqBqOG5ARlw9w0O5a0ZoWUpm9mMsCK6bYzk0AAjFj27L%2Bef8EygqvmSydQIvthvq%2BxMeZN8PssijGCiobMSOxcLraX0K7gC2dVlMA3brIs1J207lLp8AeWYgTmFwU8sL6s%2FARUgaKu2ETuQHMOyMzNMGOqUB1YtcTiknwnVuAMxRYLMEh%2FI%2Fvsg6hwCg01QtZhLdDFNWaBfxuGhltIzA1k2U5ACYPx0WvBGUJ9x92e%2FCax1BigPKtW8S%2BMZYYPaIm%2BakfAjtHmErSGCWeHoVevDooD1K3C4oF4CvtNM%2BYsjvI6e7wT9E7%2B5dLJI8OkAAjH2ao1RBCufy2SBpdUjToT2syMEBlaTVR%2FAOybWVTv%2Bh5bb6GfEbNvvN&X-Amz-Signature=ae9fdd659c8d05d0940fc77270d433c737a76d1e72ed9a981aff98eada0819b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
