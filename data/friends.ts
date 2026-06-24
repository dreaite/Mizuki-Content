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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665M6FHMGE%2F20260624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260624T230517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQDw9cmbrxuVN%2FIVBYd1nLF0wFyIkajk%2Fse4ZxrZXTqlIwIhAPmI%2FrvmDkbtcx6qvqXNtRLh8MvJsbZUXELRrMpWapwiKv8DCD8QABoMNjM3NDIzMTgzODA1IgyzJBhUG6LuNW1BIxkq3AMAyvG3FHV5rUvrvq83KEPTALs5afml%2BOmyTlg6vf97NJQzDoPWfMzWrdLFsldrVu5q6bccmAHrI4KMfRXlxX8llgkzEme4RZfOIwlyK6%2BaSgTnmWkRN1e4wdLWAhVmioeUhK%2F%2BvB4fbP8GwzFxM3RGIihPrgJ7wxFZsK9omk68NoHv%2BhBcrdmyqgzuhELaumx944JTVHgdTk7%2FSiJEz%2BsJbhvmrFRXOI4WssPSXInjNcQbrYi87waErmyXtTwLR3XSwQstOF9aIn%2B8o3H%2BVKWqb%2Fdv3uyYQaronXCnWP5AhLvWNYBB5EvxXW6nWx1sUQ5oRA6YV8Vo40Z1BORTTJ%2Bz8QqeFb06JQvgJLQu1aTQfklT2W0WjEFhD%2FjEa2n1eaGPI8Tmax8QoduAR7ikLo2bk1LAAfFpXHx3jlrhhDophTOq2GyvNttjhCWtyRyxkYZUr9vkY3oJUlMlOzkY1BCLlrTBUqASmFN9XAS5ek%2FIrJALtDvC%2BsGA5VsOg30tj0KadshTMis%2Bsa4lfbrU%2Fr8o3nJNmVcsTvM6Ejq%2FMsAEjfuJ6BN4xguLmKvrPSjN9FA3Xk8kwQn%2BMNGvuI%2Fj0WkYZIllc70z9f8l8OQ0iHsaydd9Z8D6UzCz%2Bdl8DzC%2BrvHRBjqkAdoFOZMEraez4sSsR0qLhkGIQbTsAY0xlL0ER2MHheulOxel%2FnybbUYNh%2BwaCwVLiOZhQsCmICKgTV97fXBMxfWifWDyGehsGkIYAfzdXGalOL7bdoURomquMSziV6VXlZG%2FLaoBQuGfk1Ui%2FJr4%2BpvSnLShsP1LzSGvP3MSGFTqAGhoh38S5ZOUONhxgPoTWGfe5eoPCMKZNLq8lCONeBDu3aAk&X-Amz-Signature=5c5b441f6914133ff47c93f9d855a1d0a65ac36cd1bb8782224f5872bae3197b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
