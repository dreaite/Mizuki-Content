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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STE6YUNP%2F20260809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260809T193359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC658ZELaVvlB3raKiUhJA7%2FAAQZBmyDO073UHiMSqL0wIgf7rq2cGUQHHCe9I7LfvB5CavKTn%2BisxM8XS1e6CQfrgqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPCi2AQ8TuVbgH0AtircA%2BGei%2FMGWhTnupphC1ieALrNC5J69D1kbNoCNIvok1JaQxidK%2BxvipQs%2Fi8OgJvqqUYjiqhF3vCBHwzaw0tGkVs0ftEUp%2FWFc9%2BksuAJL%2BKamiIWRyXAmOgWF7H73FjoNCvw9vImG3qeTeKgz3B8Qj453tw2xM2QDc1CN%2F7nZayW2Qg6pb5Acesqy1GivCQNApZ5QokRzNWDDtJjaSx2jLkzN1MflmgWrRgwKbo2Bz%2FxGZ8KU637k6e48b67OqwT09Dh2bCRDQMkRMol92v1w4ipWI2taYGUaZ8WgDAIwpwf4OyYLf3Shqkb9Ti6fTEftN6PFN8%2FsQN2hbnCdh1o6KpRb%2BU2FaDgSz0TgT3ExV0mqH0KQhzdIzDhSS6xPpcU7%2B7S2WM0oD5y2vlEv2qluxBAgnWwhBKXfoLGf%2FM5jeTit6VRnSxmsa6lfbzlHVlkfps36YpQTQuFD5n9n1wjaJvJNmgKF29ZTTy%2B5iN0%2BuetOvhtJQdxMIJfi991lbhofrn8YoL%2F%2FOT6iAa5ilCFtRyju8zR3sOn%2B8ZKsYmjuKEWETXmgxnAV%2FFh0vemsQLOv9%2BHl0RMUikarBA1zsWFptBjZBFh1ZmClvpFlRVs9fV5ODM334UnnhANwCnXMLea49MGOqUBgNpwYI8n%2FFOl6el0J7dH3EUQOd8xS0uZj2BvS8VuHbWEncJ%2FyN15SFonMupX8sU0rQ8XuZKi6FfNgLiRxtCaWRXZR%2B3h2%2FtGPoG9Vm%2BSX7NLawY29y8YkVRsi6vMSS%2B%2FG2mKuHHVHXirQSKg6jdqjnwg6TZRuAbCf6Hm6eGnkBi%2FMScDKqcWv7n3H%2F0AW%2B2DjEVzA6YnklMhp09oVMcLeUQuWJHF&X-Amz-Signature=5fa7b54d733cb4cedbdd26fe133374846f3fb1cc8ed497788dadf9b11500732a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
