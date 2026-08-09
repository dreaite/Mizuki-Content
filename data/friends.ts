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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKBPR2DA%2F20260809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260809T113026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAKO7t%2FeUE%2Ba6cj2ueSUW%2F8dWaqHkK0Rw1nzgRGbfeBOAiEAugcDe9SDBywWDalJHCwryn%2B8TTEKDRekR8eznHgX1UcqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJDTmQpqPgJ3%2BQ%2FNAircA0ubyWBvjEP2r6UwwN9c4Cx6HqajhSIG85j2VxRkVz268MeaKeYRaapNlQ7F%2BtJ9wt01WFifUKEUW5q7AyKJM7n%2B9KKLTbyoqGJThHgK7X%2Bt44NNmt9M6A4tALZ78mC6d1vtM7RtPEWUBGQinWonHQ7eIksbIJZSgBVwwbxN40g%2BSQI2xhsdL%2FG26qHZg2k00W5S0axq33dMA2qdAvnjNLYCQD7GHGDxh3e%2BIeM8YVRcqcTDxot5orwxuXEqr7tJR920KeviJ18TEwXlxgUZ1ETU5yHBnxGhGnWBgQ45Pv3QTjNslimq7I6O7Z3LI4M86U4MnRDNIPdMUsLhfK4SKqTzHCT3VGnmAAfkPIMmWxCZaHdtl5jMQC6fPxBgNwDs%2F7e3P%2B%2Fwz1%2BgUaqNdqzmqCTY0Y8QiHwrYCA8adBBBc9P4dEa8hZRcsbrmYZzwf98GQxGrB7imWLy91P8WFrUGlWe0T6T8kuvIn1CD5FGWzF3774z7D4JBg%2BUUQ9Rki2Amj9%2BCXa7hSE19zlFcojv%2BiYTJODyNHGZbHopWYxxA6PEQg6PoP%2BCQ1uDZzGqsraLbuCOPO5hY7MrjJxjgQ2m%2B8BbjsEO5gOWrAG01ZI%2BIpDJE9%2BjpO%2FnM2d6kHyDMP6k4dMGOqUBMZFyVF2FXN2hS2dGnPETwz0DcHpB9o2pLUFZ1nkSkPlCY4uGb2T1Owwd6zSRoadYVulgkUrDfWUMfqe8WPtYndTVbFhBAj7z7QQJPyWi5KEm1js5jBrH60NoKkjSrygWybYAhDXptJyHl25k5BTuo8ZUQkpa6p4bux%2BuZMLvfPMpQFETNblPl6xoZK2kzwlYZtEo0uN%2BxrkwJNkt1%2BEjnYbWwHwA&X-Amz-Signature=cb7aac9082e0b35148524956035cae7af9d0d264c0a2f1240968fdced45dbf78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
