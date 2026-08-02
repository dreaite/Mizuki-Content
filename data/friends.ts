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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DBMT33R%2F20260802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260802T132428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQDE8A6nwHYExquvxMmBUqa6jmY9IelHmAAOP21l0cO0HwIgTWLqX5SVVjOR39xSSbrge%2F17J%2FxkvpOIr7hA2iPcxw8qiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF1HFfgX%2BQayYO8jHSrcAwH2Vdghv877pZ6Np28uBF8FpsZLAXj0eh0rYyERrPQ2wfohJmmdPKY5QeZc92v9Ok0vAb712%2BbiPYmc%2BoB9K%2BXsnQYlbF16xfYfJ7GdRrsLuMnq6iG6Okr4Tptd6h4UNkwCFkN39jjVkgCdObOd3Y7fOCrYdM%2F10H0pg9GRn8j6gC%2FKK1tcI8fQ2LwsWIT3ivOXVbLKX3V%2BBhOECVEzi6IFkVcBvOpiVBcTiyWZh%2B20zf5iItj8ybgSJp6yW6ToTWEbhUI1qi%2FU6OE6QOyx0cqBq%2FFLOpdzyLPNQyHHu8gC5xz2sSlPqU%2BSQ1AYBlu1JVSeDN21jW9K6V0ZCkfrQ8noPoER9Z44YCKf8hOaledIOoAIFvp7y9B0bZMX%2BynvTNmGVzjlrjSJUuS79bbkK58K6r2dpi9Jo4jEU1cyQpj7RaNgQR23Jxcdgdk%2FJCMHQpHRi2qjJx%2BTAkEXU20kMLNPoiFafScmCv%2FXNLaSwbz3JR5jI%2F%2BOroL2pYukKDxkIUk15SYKIiExnzX6y41hxOeuRhY32PfZxtJgvK2d8GdtWLCRDJhkB0Gdr0YsCp24iDnIolIya5wdNWoBNkHak7NrNxSqKAl3avPchDCICLeC489rzBXew6D34IapML%2Fwu9MGOqUBb977ww7OiTjEhnM3pKt55nyLXhM8EpGKDJcvT3kOMxmQhIXWoMdkTO2YzA7ZqLoXfZdy5xEPqmV6%2F%2FAhhboWmBXRxeYHfzWKdwFnK6L7dysfoqHUxfqlNFGGfthten1UzsnbD1begEJx0OaX2JnAwrSJ%2BsguhqteIndh5TV5l61pTzhcobOKyJI4otFpaJhulnhXeLnSDIarB%2BJcBlxRbreY%2FXT2&X-Amz-Signature=20126ea669a689e377310fc127aeef1751cae8dcc368eb76d77c97e45905ae43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
