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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HN45TWY%2F20260727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260727T193532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJ6eRA4ZwDwJG91Ue2oG2%2FSRSPlvRgTJfe9eiSLonG4AIgWduM2RgxylOJwRjqEhjFoQqsAP3uzWvG28MTthNEmkYq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDIUUpoWCbCoyyHS4YCrcAw%2FMnEY1iaCAeV0sQ%2BIjSc9xY5Sv%2BLjIls6Q5hC8TcxwZ%2BcdhZfWycLwqXmplgMlTLShVOVx8e3MK6%2F4cpR3b%2B9VcCNwbfpcnbmjpKtfC7NhtXkDwoJ0BFEH80J10KS814mv5VuZQ%2BTEASukGBn3NoEi0pTrRqwg%2BorN7dPjqMcT4ARZKhzNyS8niBeJjZPDO8d9ZVCfOezWVCAwgZYwx4h%2FFMwdef4FB7LejeRm78TBfk7kalqLNAC%2BTgkMKFi0MV72Bzal02Lk9CkjQkTd4dvblA5kGuXopDPZO2L7CFSrC%2FxbnbtBdsXd%2FBbHYwE4y0on6idv9SlWFpZx0IQ82myUCl9dWQpyxaB6Dw6OFxDEHN2fd1mELrzGsa6bneF53HWjWgruQRpovFHsHIGKV13GKChnDOsEz4JeRQam4tnId9dU4D1Gqt%2FljZrZw8UXWVNV8MNzwNZzV%2F1lEZicdttaJ7GdpLzZdUrbBeNSlQM6D3wDKbJy6jLDIPoF%2BkRob61LOxc7OzFKGEO4KpEXS94NE3A%2FiorZpy0qjesDHgLYwYYpjoff20ZGY9Cp%2FQ3%2FcuR7G%2BXmTUlCkjT5qb83x3zq%2BfOV5pJD78e36dWtsc1nLmbkTJC1FRuX8T04MJLGntMGOqUBU%2BYhBogQk6K3jg7c11gbww0hKVxXwzMNCfzewZ%2FXE%2B0mQGbs3McoAKg6rerK7VtscmJfLtq35CRF58%2BQp76EIP7cD1cMm8ZXvDVSSzBOdAUwFQpTBE%2Fh1KLe6S8s0u7PbNZfXxBZzrzLnb%2F3Km3Z%2FyamMW0nWs7OtaT5tU%2BiAVhbG5kWnW5RDk5DZrmU3BvfcQYfBzlKBGOsQZAi%2FwdHrA4mUXC8&X-Amz-Signature=ef67dfc731bfab4d572e4bf17c0dec7ce2fcf48a27c9de68e8eaf58e47f6a729&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
