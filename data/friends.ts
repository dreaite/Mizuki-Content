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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PTFSQ36%2F20260810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260810T233610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHajp8Z5eZ0r2Lmx2v0G6QIGcAG1Lg0bqcR3iPw527oZAiEA0oBXGvWrInjOya1JHiDUfilGy8ohlqmaUII9RhQamd4qiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDaQVa3OK8IZBk4kJircA%2Fuxrj8Ker65Lwix%2BsOOJz7gU0wSvZ4Ibijd%2F6%2BHEVLK72%2FkIW9x5DyBWljn2cQw3O6Ss2fly%2BYbASa0lzwPPtVUI3oM8wxJ4fKkvowFxidx2GeAsv8MWTtG%2FP1%2B0tWtD8PiAK7oJcAq%2BPfDasmEAjDf608R6XDl%2FmvYK48bxh21L%2FxYah6DI1jIF7Jlc6wordaCwqqUEFIawIt9NkToMPIbWUcRZT6lxqcd%2BHl87weFD594ABne5MlrVYde%2BbvwVtl8ehLDfGs43VkpDdjcTzmdsSKiCh0Uvu%2F4Y1oRKIYImcdQja4VFELFILKTCXJr%2B8wZ0oEmF6lLNu810csUgOOohAK4JFbEjTzraEMmZQXuMQMQXrJCBFAB4%2BNUbuj4M5CmZui0HM3SlvBsIvWIkCfk0DcyE58nNhJvUZy1DZylRWwHGGHrHzf93mhAWMp8aUbLMFK%2FXVqGTpE5VHjyefhpzims3OivB4Z6drPJW6iV7AcShyFCfCr%2Fr0rMg%2Fks1VVrSybLl%2Fb8A4WYSuSYV7Gq%2B%2FdSmhC6x3LsJygp8R100RkQRs2f2HANkhXO754aWZYah40ClawEQ0ODbOU54FvFFfceHucK8BboAUt4mWuwlh72Jmvb%2FPs5Rul%2FMIG%2B6dMGOqUBFUI4XILpTI4tWQ4ynDYrnoDnkWlqaatE74R2MKqe4BIuWgbdeQ7IX%2FinrYic2cLMmC2XDgt%2Bi%2F9vZBByfMQdQ95XLfVJKuJyTB%2FcxZsC89mIPB6NgCJVIB9IZ5Z1ymf1%2FoX90Rb8RZ57jaUwxLBkeL7fs1kLPRX1XJcdiU2SzSzpi85wSvD3vzZ89GJz4ACZPbIN6myohB6qUGHmQ9hbSbyNTweR&X-Amz-Signature=4fe61ced2b12de428a5170bc3796dfdbcad7a27d1af99104b9546c78d71b009d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
