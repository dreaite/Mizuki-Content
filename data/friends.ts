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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663H2UVSGY%2F20260714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260714T180453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIDwvXUrSGKEpNgjLRwC%2ByShOM5qyUFhqAyQVDQqmkrHZAiEAvzUu6a4D06iXvn9K%2F4jmkT4oLRVOhKz0GgkMU7Vh9Isq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDMhhUlk%2FAY3DT0fBVircA2go6NeNFVCLLb0XcRX0BtSwMjniK7NiDVrg2i7JqaPEksTvdftyoVvWsz8PuKw%2BxehVh84TgqtJuXaHSVuHA0mbruoiy4JaGOuz1MwYSAn7nVeeQK30lbnNxIRqHlz1Fodi1ZWAjTvOkEDgKf6FFzDmQsr5Ivnoo6MDAUs8BlxeSYHMlR4xVbtSnRN23mIq4uYSLzCv3wryHAxxIRAzvrLOQ18eMAIo%2Fnf5emKqSRF92iLsdYDpBT9fBCNaS%2BJcuyUe62YZOplJvCUju2Qbe7B%2FlEsk7Hxo%2BS2Dmi6dZGwYZ8nk0NmehMRJYWTfVRVs9ZJMVfzCLMe9Jd%2Bm1dfnA%2FMztCLK9jp%2FtzhvM5xMNYi3pl9lMZ2Blj7KVpjaWjQ2ODUojlKU1zaFIfjdW7rJOVS3UTiYmcRRrjtfyOGrJXQy3rw%2FwCwcmUow39vodyGUqUWqNAWsEu9KQ3T%2BV3sfKJWckulfLhKaYOUVvzfLCNxVY%2B53fva1A%2BhxN2Eb95xSeMehURL0K%2FJn5by23mpPm40vJrXaSlUwggsWkaPPbLBFwAFDbljPmA%2B2DZ0McirKc0%2BHcKLc9flc2noJ3Wb2U%2BcXNk5X684o%2FqUg5CgMXRd6a2gP5Q7M4SB0jmupMJvo2dIGOqUBGkPy8J34SzDQUcS3g%2FPK8dkFCCMHOira1omW3BgMBya96JQZD1FzltTk2wlysNzjajVdUE3ciWc%2BMkqn20Pbl3L5FeSJBxJC9pMdKCHvXpF%2FZgZrL0%2Brs00ZG%2FqBQ9Yf5X%2FN5AafEJB5tS5p1CFMzN8YRvTe0SOhcT8wlqpN9dPYqxUK5OJRwK38QZPr4wjwMK58FcdOMXwjaTd941N3rYqI5vK7&X-Amz-Signature=229ff3cb07bb35519bef2b33c3ed88a55ff42699e56d4ffe3fb92c6bfbdfbec3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
