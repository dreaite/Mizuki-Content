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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7VEGFV4%2F20260807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260807T054053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDUCVsKukbWcu8013S9Ewr1gfd1S6RkzfqGGTCcDy7%2FJwIhANlxv74gRP0G%2B99cqu%2Fw3pimv%2ByOuktqZ%2FxnLVCxvLXdKv8DCE4QABoMNjM3NDIzMTgzODA1IgwlGCoannLg6YagD18q3AMdEB8LJexVYMQO5Z4DBkcC1sttjMdRW7b2YoKG%2FydW7NUA%2F0WX6ZcDzLd1iCB1ZQeEmgrN%2FEegrYq9%2BYFLCap11leA4wyaz5KkF7%2FzwOHwAKiV0MI%2Bt0cd8KyG7F5aggBbZyVgTFEBS3XcdJ32QiroUf6EDixXZ3WNRvW8tbcchA0AWXmECmoEp6TAuxA%2Fq6p3V8ZNv4fSbe%2F5JJ9bjqXw28Kq5Zu8XLfJ%2BEq0jX6g1WesnTSh5jCQtO9r%2Bfl2JRG%2FBRzecSO6HiAPzwZSFqq%2FwOMWHG%2B1x3s80NeRl2gF0fRNVHrS2K9A0qmNGWAnTGErZ8d85aml7d78Ba3HagxAGZ2PlybqzCtcvnbEoY8q2d9AYa%2Fz7Num7lFOJXibPEYM98NqXkklUzorIJ7s0dbXDxjoksBwX478q999pQyrJz8kjgloEtNGCnynwyJfNEvMKhvKohL2uQCuMfd9wfNBjhs7Yu8YAhwHYF5VEg93yabLD%2FOdSmn9h4lqGrJjuorckPDSASLrQ8xaJwcmY9aMxjKJ9LGzSil880r%2FNR6qJc9LEA4JA7RctildNsKAEytyclcrVk29BnfeGWsNiYFaonzNbcLffLzFVrOWRBPC3oFhOSq2GYMO9WGHnDCQ0dXTBjqkAd4LwTMwWufLZNFJwXfIiGnN4uQWdyouzeRjxguoNT7SYwDOiEiPPKYCGuBD2et4A6ouWLwmA8Ct%2BkZ0czftLyXNHgBOElbtM1UJndg1mvTqjAyLtgwTk9UT3RV%2FwbTAIAR%2F%2BG5iG6n8alEG0VUpe1dwexxMXGr4UiE2mn9LqyaKa0eGI2Xr%2Bi6jiecTB8XxIv33orT10rfovYgWdij%2BAkwX88MG&X-Amz-Signature=1e80ccac93bb6ce86fc28894bb07a7c797fbec4ae98acb42e53116023eac2f25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
