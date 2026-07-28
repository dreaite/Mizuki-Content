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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YGWH7NY%2F20260728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260728T235830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCs3lkjW%2BZbPspxySmXMtWbk0fGuLcmoMsrObR%2F1DOdfQIhAMu9%2FEiBk8oOwoKV1gwTk68kAzKLewCoCMBWcMT1oe6fKv8DCHEQABoMNjM3NDIzMTgzODA1IgwQvZbJ3JjLDymCssUq3AM%2FnfA5y7RFcgAqGwaJlS0yOIt6ee0MUQZM1DaqGf04Zjm3Bw9X%2FYb9WaCs75EUyPSJHxf3NhJTBw3335sjF5ZI7O2FQiiZmViuahc395lV3bPHKLRwQMDU%2BidWCRwn9AZApPNV0GdqtjU9TT4NxS73IGHDy4M4Pbf0uZCnHowePxhX2lh2t%2Be%2FOY4Cj7ft1sL1pXfzjjYSsEdKvfX6pO7sSrTcFrKG77jxIu0KmASLW9G%2BM8rQC6VSO2lMj8iHArzVbDMbFYtg1E0wiRAkmFavcqUU6kJHXCyOaGPkcZzXTanYweb8aV8i%2B3zllgTfMImWCIwOlHqkOGp4k0%2BoJpzAuz%2BYaIvfZBDZhTM0TOVyZ5fdURiVtoAqz3qYZ20pKnf7o4vu7jQFrp2Ugg1Yy9sVxdUJNT%2FSluzPib%2BrUmYha5PmBxCs%2FXx1oF1e9u86dGH9y4ZBtiDUD%2BhOMe2G%2Fuv8hL%2B1ZKh7SMOEFApW2um5gCWoINALHBNabD%2FqdKUMaQLgaWNDoyl3G%2Bt535NgZt%2BECJUgrH2iNw2DBH8XCMOdgEYBi4rOUfdZd3FceyrxJnn2vnS9BfjMT8eN2ufYADS9V%2FH6sSdBYwTPoBFX7XWIZ0yg6NcDgdqltDHZFDCZgqXTBjqkAYLE9s6tJk%2BGrWENNI8ijwgZ8S168vEePHlPnCz3houjzfmxulyKkgkCPH%2FSfw8t62HiFnv4BjYkGosGBa1NPGti%2BzX3Z43KahVW%2BHeKVzFghQFRd9WyFSKqVlZNEZ8dTSP%2BceUwoiZOS5xVavTI9KgiZj%2FCZtQB8a5qlQpKFNusMFkZk4%2BR1mFhvp2%2F7bcJiIcr1zhAHuGVUf7YXTvDoe%2FkHG3E&X-Amz-Signature=0694966225cde4fc94c8db0800089fd16aa6633cc0a0600167fcd18d3e5b2d1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
