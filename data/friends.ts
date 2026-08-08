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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DVNZGAZ%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T213150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD37XfhKnzd%2FMvFKxnQFFI8gdTnNj8%2Fvo9qJejVvufnBAIhAP7nipWRmm0wqdexBzxS%2FDoRx%2B71%2FydHjxhABcVEIsihKv8DCHQQABoMNjM3NDIzMTgzODA1Igxy%2Buzk%2By8112T94Twq3ANR71%2FAx6TArcCtkKoeUVZA%2F15kB9UFZH2FY%2B900gZ1bLVwC3AblPtxa2Q229F%2FVOe648xKTjvYmV6epqBtdqWftcDTKVIckYAEyXG3ygzHyoVv3zRwaCqT9d5hMX40zPOz%2FAWFhNyhAlJ5hF5l%2FaGbTEYN4L6O1FBDj5VmfDle97izhHXjNPQckeyS49qAsM5y3w92F6wpJT4vQinfCBJIahf0s%2B8zayp0wMRM3Hb0KEw0%2BkOc0wRaOk1VVyPg9heHLkpmDEoa2eMbhWYQETIbfDwmGMiiaX4wWr%2BKHse8rbUdG6nXcuBaqTzASQKKlnU%2FZqBJRr7BvqvjID8pJX6nvCVhZHRY36sYSl44rnOUotEB8AmAAgQ4j8XlWDMI3SLTQqoUq6XyE1ReJr%2BhohdDiQlAB5EfI5HM70X4RssJ9IitM0X83a%2FaBfLOits7maZmA0uxZdcbThIOKMPYonlHRGf6Uwv0mNw%2FHeUXm22vp%2FyJKF46JqGtdUp5Qc5%2BXugtobvclNjM2LKzaWLkTeAFS2W3wtSt0uf8wiLpTgxBqhgRl%2FYVjOnxRvoxTsLfINBWErso9l2pftyRVBV0minKtUIMk8C6kcEbCClwFyRCYqqaQWz91r72Go0wMjCzhd7TBjqkAWT%2FwfAHUj0R6EiSOtvkvBWvSANNL6DPLGNstICQWqEEmcFuUrhOd6ATOmM5S1qE%2F3nMvEo3sOgLKmo862mDE3mJii3imt37pDRTIcNaXOWX36MApqolS0WQyUKFrHn%2FJi4UMNvYMOs5ZrIAMW6ccCrUcS83NAixzvaqwG2X4%2BO1zREqlTdQh95VwmKPLDGnaqzsAETC0oEA5FQz4IdbR0jAPNtn&X-Amz-Signature=4af5884c2c21a48047d486016ffe00953e55572a2563f6b857c09a4acf797bc5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
