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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466626IVWYW%2F20260811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260811T130818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDsLpbd50hDHT3VKAzN2yGTwJC6yRxxRejc2PhIrYZPlwIhAOHubQDACAN2ccfLESi%2B%2BaRl%2Fi6XYVRJ5%2BNv7acRNVLcKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxaOFZF2ecX2m0GRnEq3APj5oGC8JtymjOiLOZbtsv9V4kkVmolvAUtW%2FmIRKYKzaTqGU3IW1Ry8V20%2BGBlZ0quiKSTTfhFVpOAFSRHwHRHXjfosm5WLjIDuzP9Idn3pnD4g4NfzShrDxkUD7eXkWJOi0Ut2bGAQFX0x0S5GN8nGeyym96Q%2BwHNl1vJCkCGzbFmW8eepb9r9tVSWdkB1Q5y830yC%2FkOvbK%2FPcPiG5bZ5dfkhkeu9DGmujTYyvK4cWptpdi3Hheb%2FY6ok%2BsUDxSWEYcuE4Q2BrUONPhz3TBfQyPSLxhirW5T44veo4J48%2BmIB4EZO8o1iFftDSNKgb6rBPW6sccZlZsHnNk%2F6seDBlteJdIXoUabjAyzcMWeDhDtworLxwXktLvuA65oelQ6SGS8z4TbC0z8OjnrTPqBO6wXqgt5x%2B%2BSLo64fmskJZeRjOj68NicBYuFeBryW3lpyxvrZWKPObNzh4FI7nynK%2F9MyRhyJye1Vd%2BVBr1XzBWnLdGDmmo8F6%2F6TG8mB949oySbOb%2BCUXHrjkBOKC7FqKhRWLpofuhJ7XVC1aF%2BBUdO%2BZLUZnZI8E%2BX5XBy9191FsETw%2FHY3%2BtcYuh2OYiUdtir5aYfC%2Bj5nfuLCANrqY6RuoxgWbtgaHB40jD0luzTBjqkAaWNjE7XOqCL3BBXbczuVeixnsqZQt%2B2T5eHuZ0GsdN0WBhEHshNZmK%2BG8Ff6e3INi%2B7VgEnxE3xPSdpgI2fn%2FiFOfBJm%2BiRUXWt4MuqeAbucUPP7khreadChhkDwAVJAfIrSbTmIwApFtbRDHOv2kUr9SPRJ5tCmhbeGDt%2FCfQ0L5bSMj7POiwMkubPQxAFkpOyqI6eiE%2Fz3mEEo1tjRZ%2FR1j9O&X-Amz-Signature=6ea2a5bf1266d65c329f57d20af2b65a0ac7ff9bf3545204242f8326029c9c82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
