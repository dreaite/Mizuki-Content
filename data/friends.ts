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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPWIT5VG%2F20260809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260809T203348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC11ymg4rxglV2F6UaS4JXdZFF%2BnoGkICkpIad7htsFrAiBzA%2F72chP90cCQaox9tlyPzSC6NdubxCShvXUFPootOCqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2Bf8uLLnuD02EejO3KtwDwzIUOn41J6a8gy5DxEj0KtPVP1mTM8XUHGQTtuwm0Gp7cpSHQGHyGCwW2dAACD3W02WnYNGb4kxC1fzWcwgh7KARt52aT%2F9j7aCbBikYRl0EoMbFy3yVKOcBRCUguQj4bfUgBYCe15TWdYVTQBBkKw4TjAI6CAeBdxHStZalqvBeWybpTGMXPH%2BC9P2oucveLH1gY8yWHwatgdB9GmxyTj050kw1G82MgflG4mn%2B%2B7g1wiMkFhS6rSRo04WnpmAz36b%2B6kdDurA2aJyef%2B5gzlvE7x926C4HDHnCYHMiy5fyTVKWkq1C7PrVjOx%2B3J8Z3amacF2%2B8mrFEaUnWUGq6%2BsEIM1cL9uFcdkV6kratwaZx1EYqKL1thI76tRIzgwh8B8p%2Bp7eGYLEQXxVdEVrsaFxQuR%2FINXvmTXGJ%2FnLBRmX0tHRsTnQvt6%2BqJEWWqMJIO9577mVJJ9qnZw842WcvxKDSnllo55KizbIoIFy2nro6ABNz70%2BhtJ4aLgblVV5QHy2%2FPgoPszH7eVO%2FLqKHTavPT%2BgvNs%2BU7MwyoWqsD1NB0urB2mDZLFhtvIb%2BEC1d4ce1zydMFnfcRg8XJi6H8qdAV8wMYMK98p3igA%2B5lihksq5W3r5kkYCZ44wkZrj0wY6pgHdkh%2F96hKcC23G9mq82Kv8Ov0sEy4HYoai13rOgmKy89ZzO5V3rYnatEVoA03HVvaKtT%2BdaIXa2tN9Ek5JSDgoh2D0BJpbIeEV%2BzWS%2FFw1rpbWGdTCpgJMfsaMWFFzOwLcelFJQsEC4Ws%2BO%2FTFgM5wu4LzNq7QIF06ZhjWpzKJy6hDEwGOB1tVB8OTMtmFM6zGu8Rjrgtc4cw3W5ri6VswaMQ40DfN&X-Amz-Signature=8acfd5bd7cb646ca213de96cd047f48524d15f2843a94b10b0121a28145b2244&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
