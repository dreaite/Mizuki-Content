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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CZWQA7A%2F20260709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260709T001222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDBtPvx5pajJ4fjlEfj4QlzZqrXDYqPOv%2BhTiX2coRDhAiEAuoCZaOOpUwb7a4yQ%2FcE6y2XRy6fxUxBsR2ZcglECNGgqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE77zR5jWphWJwZ7LCrcAydTWvXVpRyERHBy%2BIbZvo3Ai63OMPoDcQh7gQND9tzS%2FgomR%2BY%2B0FDIYojT7mPCC3ndO722m9mAqpvvZRvRivxF0RQCu6r%2F17ucYBkNajl2Ds3tkTfv7UDj0ip6kBAL6giF49b5FrBZpRSq4%2BRZ8QMUupGYSIGpMAnkOys19IJ%2BgwT37vK%2F386OHKGz0RcH532pHGcH9Cs1I1h2WXSLpZQb%2BQ3Q5YDv6G0FzuBUQ2H%2BPE%2BGvR%2FvxagSXjpUyN9vIk0zpbODW7KAq9Ge1SR%2F5twUIcsm38jipDrDGeEt4O317PaXS0aTN362pufxw7xtX08nbPzF%2FwYIBkxKGfc7DrKqi2GWkIaRKWcV0SWwXTVwf7HHAr3UwAugl9MknXtSN7c8divmWXMlTupGFF53RxbrGYQlJ%2FBBjCGGU5uD%2BtJwhMxFYoZV%2FP2DJsFHxiYSv%2BJF67vI0iykRB6LQbg5KZwvFxNCInNUYae6ULAbH3NI2ZhW4Y7Jrpv2ZjqOt5958wiV7g0lkgP3oIo8Zc7dTB8RBbOs8x7ZBQMCkanWO%2FsIGkgmLHGp5BIotM%2BXyDWJXZ0C1C3N0eafIysBkCDcBkTivw2QVWR6VwyAkyPNudYZH9A%2FDZuT1JUIbeR%2BMP%2FDu9IGOqUBkVSvHiTm%2BuwSA4k%2FHDOtL2zhjeQweUZBkuMAJPgZpBCjKuvH9fMa%2BF0PKZcpAhZ9fyD0gDiH2kg8SlJ6%2BW0yLsI3PS1zz5iwHgzUqbd%2BkaT4yCZNxcOmJs2Ta%2FyY2LeO32lQVy3P12XvNSpgGuOvE9Qxeq964mLLcwlhqgocQWTuHg%2BLW0hIt%2B%2FUYWrffciobXwq9D4VD3UV407pTUL3ZevTC%2BJj&X-Amz-Signature=a0802b9ab0b2e0f0d011d1b9fa295963619bce075e8aa7753b776f956263a068&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
