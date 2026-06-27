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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5SM5OYW%2F20260627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260627T001010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCe9YNMwx%2BBDgZqK6ggF8onuSK0fgIpoyu4W8vIjG%2FH0wIgYempsV5U87ZQnqYXPWbWlkTUtiX%2FHH3kkeAgkNVWCz8q%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDAdxTE9zhAmkMc3KTircAyrJoy8gGAU2yeAGCFYwfiCyYyGlyw9ICDcGqBpnJW%2FtWwwwW8iSKUySFvBKExzv%2BMb%2FXdwDKdZKzkLN%2B9A%2Bn9vglj1kEQ%2B0fsvUQNMOJbPRTAiT9j1lBZ2LIva2us6uv%2FvUVvNofBStWLlX8dsjboSbgPnxNycYMR2abtmfdvHJZXl5kf9nmihxcATcSAw1Cf1dm%2F5iFHVW5StwVZeWdippeUldjDngAs0ZfHVt81FNk6xDHroOvxSHRjfdbUI%2F6O9ZqD2tLmbU%2BmqypQtz73EzAXuYIGGa%2B8QpkVQ3b1O6eFIsYsCEOhdsNoWwi%2F6GdejgTgKBadvGrWOpYs%2BMZuUsFbeuRQVqGsdfYY427yiVQthAxupKAZrmdGfZArj8TzjOBv%2BEi0qKZSl422nzIq2xkUxro5FO8Db4kuzU2UFagPIe%2BMHiZldFxnyA8erqVVxDJenXyocpQB0WeDRMMTP6O8BpHKI4laOCDLFB%2FGDiCHzsjb8gS3luymUaYkGWbzjjwAmg6yuNXMjt6w1Tt%2BNru7xZil08Cx7ZNeFas2zv%2BYp3ViAcCZ5hMe2UxLwBdm8104YkXz9shDT9xJ6B0TBcPgfiYUT1NUFz4csGIUcgFbwMcdZqzYhsYmOzMP28%2B9EGOqUBzWGzL8731jQq72sAhOD3FKQCyWu%2FJK%2BatSWc8llxZWu%2FtLNkk4qzosHa5B67eoAqt8ULys35yFEw5KoL9zhpBEHOVJ5lYghCT1z4HxZKxsdVIRgtXLgASUVQLFHuIHvy2HSq2761zA%2FuHnvOdcsqtgITyPs7hHt0%2B8wGeIy7uPk0o6SUkeELAa%2Ff7jQ0B%2BBjklV71fuztF8HWvQljvEZVrlz5Rt3&X-Amz-Signature=cc9f89461c7011f6bbad6d34987baecd0aa4dad38935b95d0c6724cfa9554023&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
