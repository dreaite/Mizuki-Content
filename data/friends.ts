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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JO27QDW%2F20260720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260720T021012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPM8fzI8dusazUnEGuGUscfG7eML4V7MhW%2FOJIYdZEFAIhAMh9%2F7gLdMANTnu8JAtjY%2FoAPS8uoWEae%2F%2F5PNSHv2GiKogECJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxrbxfIXby16nmoi6sq3AM81vOR%2FrpUiCcF1LhjWdmi6GUwvM65zreBXaO8I%2BW8rvtl%2FxVzBtZehABeXXWi5M%2BKIiij5y9j1UwXWFFryWYKGSK7B0uA%2Bpkh%2Bjfyro0WQHgZRentTG35M%2B7kaht4pzEewyj3H3hWZ2IpQLBEvi%2BszthtdcOfTIH7LLlC13blVSTo31qWvy1SMhJvDsmtIyIXMSiqxwBX0hEsPcZUeyHh6zTRDqooDcbGKXVZSWNmZs5XLqhmph05PckdCFpGLeaFiw1fb3JjcqbD1lMvFVnxcTqc3gxC9UjMPje2NPJ1r7woGVvHMjLiUP1uyJPdIa%2F27Zbt6fKHk11CXxLgNbiFAdf9Ntb18E6hA8fTCPLf%2FS7QJX5T8kXoYGTln%2B9EZFgyHDqHgIkU4q3CuIaWdZgK5%2F2yantn0VtSIuTjaSAfONMxt9WaHvuOeegWv1d2ER%2BJIMYKtyDaHym9H7ThW9ZuOff5eug%2FgkkZFyWasJjCm%2F4qqVmrF41zXIWX9psCOH9fM%2BkLcR1KUg9%2FtP9flrkbcqUuJni3t1W9x9gE30iqn48U0otW%2FqOXx4di7BZuW%2BeaYfUrqyvwftEQMvEuNH20hM%2FzRYXRm8cQVHz8UGIJzIB9HB1EvTcZYWi44TCSrfXSBjqkAQdwPOEMZZmmC1OoX1F3ygvhHqpK8QWDWezva4uYudCBLnzERAyThQW1SUE8opPLxp4leKwCFvkOxzHlW9%2FAxgNcbO8wwKmUUkE1cZd%2Ft1uMlnq55kdyZ3dSZ%2FeQzG0PmrZxahVZYnOJCkE6B1H04e%2BB0kwE3OrBcy6f1a9OAOE%2BNvFYwqPTDIXnFSzjdERjNQecJQzTViUBqaeyjQUEcVewicZB&X-Amz-Signature=b7230a3ffd21fc11ed85f32718679d0d3a0d9ed390f294adb86c8d25a8a4de88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
