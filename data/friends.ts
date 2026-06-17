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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QCBYC46%2F20260617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260617T001833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2RBI4zpGbaDsgCgiBaC0kcUtl2K%2B%2BK96xdrEM8DaQCAIgay5F91%2FCGc0VzkI4GwAiyXIIlWd5cyTHQa28HNXluKsqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAJ%2BjojB97WEaAQxcCrcAxASjQYSkpjitClKlxkkSoMZpF3sbgZrskAYujrZ%2FjE0eO9XlyKpDbBJd3iaA7T3As37n9Fv%2Fuf3zTkFulNisZJ2gD57P3M0RT%2FZhiPVEUKr8qBOxiORJikB%2FDUsoQjUQAZwF3Hfm5ZgmG2lHZ02fRvfCkF%2B7KaWUnMuqNHOV1n3rkczJ9UFr8C%2BJ5i%2FNE5zNzdIxAMqSrHE0Osd2fxZm5riKX4bt9SVdPs797jm9ca4tJfHM1G4pwBCZhr2tqKCFppnod7ZF3uQv43Y7b0y1RLKOlG%2FV3U5hSdYPRtorXLPJYL%2FX%2Fa8PhVrW5x%2F1Fx6D15WkcwOtLVWTCy2IHghRPzetfw6lSxb8bCewiWDFJ7Wzh5kL0ugPEaQRvEABQ19s23%2FbbNirIx62K%2BxJasUP%2F7FeeaEMZ%2F%2BSyDN3F4xpMJJFpu%2BE5zXsSlkK339G9KJe433iG5WKMWHnKR7Bl8a6h138%2BGtFw3QkzLqXBB1VGh%2BqtVtGGpY9LZVO2%2FtiWbJOyHGUDIhNvZ5Vp9ncOsinPj6YAHnSKkU6YE87U%2FQTpHfj%2F0WGWEk0vgB9HHdDhTcB4%2BmEjJmJya6bLk%2B8m2fo4PC9Z5IpoJ%2FSx6X8UPPV64YAMXNw0eA8pVd%2FlUiML62x9EGOqUBXkIxEMfF2O%2BJkE%2BnFmpGzi8kT3c5NZ5%2FZQcN9ovcIaWZfDXXoWXhihhddov8qCo3aFpfpDcuO6Qq3ndmn1mAZg9c8XjJEeZK3UzNZwIgPhw9s2u7kXX0Uu9zIKg6Xw%2F1EWg92iBq2YDnRN7oRy4u96WBv%2B1I6Q3fLQju3XLbMX%2Bvy3737R5JaepMvL%2BDf7YmH1OvAzVjv6Rlluy3KVkkYGOQoWwW&X-Amz-Signature=7d3f3991433c2ae593045ec54649f0ff2ff9b0bf87ef6d3c27958da58545b59d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
