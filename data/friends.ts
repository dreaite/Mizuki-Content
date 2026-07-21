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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3FJQMRU%2F20260721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260721T225829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCf4Zqh0FNoNjgbA1YU9COLjaJ9J82DHDhJ3FGHb79IkwIhAPXByYlOhwjqViYWqUh1ko6h9ITScupK5UVikCrTccRJKogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx09fAd%2B9%2FJKohKrywq3APMvlMRwcVXQGh%2BGgL%2Fg3eUKuekBaNCUR3A9wC%2B5X8kBnQIzL9POUVAfkrAweZIdJClTIaQRgg86MkpTls2SI3OpBg%2Fuss6rNZfli9wnt8MWnNs2lDnzfVnNSWLOFilvWR6Rt0YLRlAxZGHFIiNAqGiciYd1N2wjG%2FzMEpjLGuTvbMkVjmIYO62xlEUabha1YU89%2FPtyXKhH9VZZFisnIDknv9DWRrG%2FcFrFCb8X2WzcK2KnhE1cpIn69IKo7oyigQ6sKvmLdVR7klyvJPXlf8RER3f9Kyax0w3G588fYwwlu25HgJshmzaZMxXBM4fv3i8UuDskNyrdvzRUkqb4HYW3Hobo9c5LnqYb3QqNvOMoEUcfQpwO7qMmpsqEVa5tOI2uRDPhO2CfkvqyZMwgqi1Ts4VtuC7%2FS8ptKfGX6%2FrlqXhWnWHnn4L1ClyfKhYZgIIpZg5eDFhlSTtUVLdLo%2BX8RUB8bGC5gd78YSeSFkSb20tdLonNMuqFHZ4XGa1RBbwmOG%2FhWYGWs4poLw8N1th5xaCvmHCQnhlPKDlM32S9LG7IaTWFQiwRFRfoJckFDYcEnddT4H0JjQbXRexcDwacO0nt9EsgN42fRQkBbvs2lACfEq8%2BZRgS%2FC4xTDfuv%2FSBjqkAX8g1Zbf7tyJVpFbBy1F9mT6caSvFBymzKantI2QigvnRnsUmtGwdNEL4MEpxHNufVFLD7evxjoNXdRnkZeeM86fp9BbW33h9%2FFMNIOZOMkVgGULIBi1fWP6UzlE4flDi3jZE5ey8%2BhC%2BYdg5b4cD%2BsSKpSio5AcieA%2BSt1PQsdwrCoZKpDg1HjsrzU8jrm3XbIaACdJeali1r7bQ3ztUcvJuead&X-Amz-Signature=015ee10edc9d2fe90d5f179b18d6f77d3bc714baf73507f681ab15d891743766&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
