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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WFGIQPY%2F20260811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260811T145840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfHv%2BWqzyH2cqFRywvW81HSG%2BUO19PCldEZGmg7KfSnQIhALy5MdExL1wbYb6LXCs18vJuZHACZE%2Fip5yhYuqUK4JNKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igww8NHURyITzX91D9Yq3APp8wuWw9Y3RCcRMFSpEMkYx%2Ffk2%2BXkSZ7ur3iVhlGSFwsX8Qx2oFTybL%2Fgk%2BYb3E0flCZr6jZFas%2FYBdS1CGZOcZywdKnSYA%2BBWaC3VGwHLATjIuIsCl7mZjjLaLkxq4mkt01yceI17D0qanvPfNEihS5lxXRtmZAwt8R6F65MhvqNIGqDwIwKTR%2FIC4YDlyfhZVozDsZBs1XIxix4UPLroKgljwtTSWOq1vRw35nTgE8gR94lEZr5pUO2zHPFD6YSPw0SMdAeK8SNluaYDhLDptoDzogD0wzA7D%2FXhC%2F8v4VC1aYp%2FN2vEH9xoHdANwmCR3FoProeGm0biFlJ7RjpOK9d66uvVSFs7z2DQ6xZVOKSEaIp2JIaozvoadefuexq6XSzbPKMU3A0x3evntQFier8MWaB%2BQncNGoVu5qkmoyp%2Fnb0XEW2W7mdnrFuBR1Q66dVg3dqj%2Bw51g88oOVvq9aGZHnG6ZVROvQP2WpIDyc4OnmhYcB%2FT0KwG4VFz23QLMQ94mGHbiNCi%2FN19sJOfPXhYdILXvwnkQ1Dlky7x869QzIJm%2BUDJGis6R60vg3%2B2BdwyJLJy0Tf51xRH5MaAatbAJ48AfcACbJnaSbvCgfCbz8QHnSj3BRTRjCM0ezTBjqkARf53oFJo3xzpC5fqz9B6lqo%2BgtXskihUH5hKGdBPDiPfRG2wFyxlJXk77c2zl3PbAhkDhRQ1siczVfQC5tcmjfZ586zgQz8v%2FnXc6FhW0HPyymDEbUHhQKah9dJRXT1YnhSGcpL0wZPq5YZWmZUUJShWSbi6RPK6RHCiG9nmKZC3uI5TT9%2FKhMJL%2FNidHmC5vnGjaKo899Z6eJvtD0zq1%2FYIstf&X-Amz-Signature=596146d83e81c0d8c075d138e3df1d0b39cbf5f2f56e3300f91a639489da93ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
