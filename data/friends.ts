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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4UWYHIG%2F20260701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260701T000642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIELTXCCKWCvm%2F3RHXK7tcWuKOLRe7oyG1sOA4q5gTIaxAiAaqQgrQSw4WPf1ykyf5%2BHxUI97UvDTiFCPOHWqVjFmniqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhG46etk75kFdE2GPKtwDv1nHkbgGC4NxoLoNAsO7ew%2FhS7Xk1wRstWIAD5D42lGJYvH00jkqVU35pfegLHEz734GdEFtqiMES9oI06ZigcHbjFHbrc995EjY4S7bd8EDAF7buy8odt5gKsC%2BR5gNnpMB7tRvJTWYTmG0BMsL4SEfHc35kDREMmwr3rm9I7pNyYR3zxZ4lN5k91GZZJbHYT4o7zkf01QTxAHdCFJhN67SrVI99ALolngdc6LVAZ2V%2FpVj7ghDXUilM80XYH%2B3Bsr0oGj5z0CshB4YiH0su7GU4ryr77o5rVaLtKFAM8wdUxicxOBCS16xU1Yowf7bqpfQGZDRJXuUa17iIlUxJh410TUuaSrTjWp9drDE5sRei3EF1AJYv1zv1yNLQVtr%2BDAVww3jVHo%2FwaqiHkGllmR4pH2dwE6I56Dlo7TgY94%2Fg461otsyQQflpYsg1Of0gMhD7GANeDegw28%2B8PPKPS14U0DineNf9ZUFWuC35mBqk1Z3vlrM%2FjuXU7ZIPGb%2FPutJ3%2BpCqkgJlYDTrtYlTufoAJE8H0m0dnbRPPhXcxtdn3U4f7FRYm81FaiUsw47MkyVZ%2FoNTQB8rCTUvmzFZAUgn88BjTBv9d24XIaIw5mka4yRkHDJTMFXeYcwoemQ0gY6pgG8FfhfHx81E4R0GeWobaigtiK6On3n9CsXVHwOu%2BIA0HF4ebgJBD%2F5AhAQfh5QCwwgVagFpb42uYXV6Pr6Emi%2Be37me0cxoPIQxAG9pX%2FRPUHjDb1pazwsFZk2r%2BeHymDsc0vkDmSB%2FyejFHwdSUHb7HcBg%2FPdRQoxq7U%2BEOhCvWZu2h8wc%2FFWsbsOdG6Bk5hV6UjgBxBCWJsdaxC1LER1v2Gl3%2For&X-Amz-Signature=cd6573744543843e02419c600d51a4be6c87ff909fa0b6f76818a4ee7d8e8602&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
