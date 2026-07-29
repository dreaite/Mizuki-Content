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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633ORPMQT%2F20260729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260729T191841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD838RwXlhM8ihoN0KqCWpG5LRi41fy2SCj1SlMDMD6%2FQIhAP09qgIFKbc4NPW8VskUejfBmgxEadU9DS7Fk7sMpze0KogECIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx9e3RmHUZnNqqD33kq3ANHN%2BBl2ZyINvtznvRg%2BTJBG45rtXOSTnGgo9jv62z7ngdKXDGNDrNexy8DNyQMOov7XpLj3CuF%2FgZ4OX2qmU4Zr6nc1Geu25HC6me1Xzq3jcX0NW8%2B2kaZbY0nvydi6P145BVtroSvefXzvD%2B0ejKvll8sfcKkY1lnhzG48OdyxHGF0CfZ6iUwAyUGGg99dLDNwWn0s58fXovasBmvGpH8FapG5RFvxliWF4wBcnYvB8q5qUYm6SyCxQMWaJar84YOa4Z%2FNH2EM0AaV9q3ld3C2Co0bP8kAY6NNoFpmUd8yoH0HJPCkf46WHg9x3Yv634MJu28WDPFuM8LmEp1HIaXAsgjPyNtEhX%2BLGF6obx0VhBA4KI7P8t07Ee1I9ylzrVfEj7f5Na6CKXa23p8oRawdt2m0xRHpHTdHS0uFXwsorGksAhXuOE4bOk2AKcGVLohtgLI1rUwWup8PrmXgy36w2K2y%2FyUjYm2m%2FGJGnlN0yNTIO2qqXLBiEDsM%2F%2Bu7DaZM301UqCgSwQu5ud6%2F5cJLybnKaBKDor3uKgbjnOsu7VGC27fFvwxIkBw1C9zX6A7tx2evlIPVg4bKTv5Wj7XeI%2FkyD3q3ATZ5NIBofaJ3Yq7s6tBylYfdf4FIDDAi6nTBjqkAQa8iufqzKVgt26HXyhYaUm5YF6SkD3%2BfvyMEpYK5Gegxlh4HWN2s9b2VqE5fT%2FA8aqq1Uza3Hzztd6GJHTSexKT6uEOHbfaiqgf4B9l%2Ffh7%2B1VBskhrScODtN1XfQXXPTs3PhdU5gymcJ4lXNDhi9hkeo2FIUKEScHkS797nB2uwG47mNmu9E5ohGLztn%2Bw%2BwpehCFHkQTeU3mY5vtuvLqpVjcP&X-Amz-Signature=cabf8959d2efca09cc5e065914b947a924afa57e9289cbbf7acf786f56a1d6de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
