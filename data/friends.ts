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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662P643QZL%2F20260815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260815T142344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQC3iguSx60k9YZygNhqiMqTvGMjd%2BXxcO9eo4XMbX1epQIgRNEC9auuqWbKmAkaV4yXQwifWs%2FzSgnFgHxcU9yvcPYq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDAv6Yo6aKq8QpfWY5SrcAxW0VqMVW5F3eJ4VovpFrKaDKcd%2FSgB%2B5ejtchVDWlZ7iQv6xGmPLJ%2FCGfnItm1K35XiIaDify1O9ot5UbIawqMCMtY3hdBqZIhxofSbgXWI%2BaexuaJDpXKOVVDKWmDEcjOR4ImnX4xodVerHlRhOFAdKq2rYCvyD2AgtMAZCIzDEpzC3GuEu8cQyx9KI3LC5WpeNSu%2Bg3Fk%2BwcJ4OeQko%2B0AWsb8Dr6tD4TWuDt00%2F0G2p20ItYEPUSy7IjXkhXtHl8cv3SuAFEWGM8TV1nx56dGTsfUY9sIg%2FWWVLn6p9W3o5ses7NT5z6KsasJIiGft5%2FunfIEOszYthNtyiiGGVHqoiZCtpuzmYpikL47Z4qob2%2B0p6Gld9%2BmngmNdaUtDlypMdtl%2BsSW6ZAkz3MYOUHS0BFqUoIhAjxKAhjCLTlufp2UXLB8gM%2Fh7ghYlUAfqYtR9hTNAI3yHDoWSDxUO6lFplTT%2B36OHLtxD%2F1KNFVXXxoBnTTg97zFD%2FsII%2BcbMM1fT8h7v3T92aZaFWjHvPTKBQOuX7YXUSQdFcC6HwHK7u88FjQZq%2FvZyNrKOuKCc3HaGNhwq8AxoKBegS%2FGt1NuNg92iIL2C2quWhg7eiiIuYjQPJOtKex30%2BrMOWcgdQGOqUB%2BRiNR4QYn5FHrb5VJATAw8HEKCxf1MUZbFzKg%2FIMLRFibg5yWsvaZtAqd8tRw1prXQFpHNDrzNteMYGlxA%2B%2FhrlsrTkAaHlXamJs1gWpIPWXMTBNW8T02kn01K%2B6JH2i%2FHq492vKgtennv%2FVOjJ5m6FBhoJWAjOqgKeynoPnF28AUdrIwUEb9QGD2dVSzsED4n6C%2FwSUCoXBdedNO%2FXzR7r3zZ7Y&X-Amz-Signature=a62e6ea5fa138fe7545c69ec8b12362a8350779d5b79fcc2a472a7933782a138&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
