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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGJGEBKK%2F20260812%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260812T100654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIFkQwmJdqH2AE%2B4dKXh%2BtXQMT3lKf1kaWHsvDuJONOuEAiBOXYk%2Bpl4PiDD8j6sJiS1AmqyMnbZOKYPrmCU3W5LrTSqIBAjJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3j5RQhkMOQ5ocsBQKtwDsIRZlRmVuBbE3l6VoAQrUtbnN0kKyMH5w85yAdb4EgFIVLTFHXWGeiUxwt8ynJUEK6PhV%2BLpNp1%2FMrUNhRH6o%2FplnYFhXBnDZGJzhhuDErzsGloDyXjsgdg31gCSsa4pSJLd7sK%2BHLyngH4cQ2WScLaeoFtrxIchM8j4tyzKl4naP735yYQjguFgctGTiIg76wTNXzdlewsJf%2Foe4S4HXtBDiDJw%2FQ79eePlNbcOcE22STN0eJwWYuZEZms4ZIH6WLvUyjG8I%2FlzX%2BUfMaNjzfy5vVWNzA9XW4XgbLCm6b1f1fqeSHE2%2BrWn3wgPMxBjfIhFV2K0HiimLfsgWur%2Fs1EglHmhZktg6OV6U3%2BiDLwAwSypEegyTeOONA9MvlJRX%2BspHkz%2FuczsVFNcMBXmy3ST5efVAAkI%2BzHKR2h%2FDdHn6sfqQKeEot2RomauO3D6RdY7qpRfIoKI7fzmHjmyHdNx7kwtxVpBYhZm7eAvMUoCuFUZT5bCdGB5tx9hbFG7YmyT9eb3JEL2ZCWbc32uKr3E%2FbvMwMSfyH8iLuFXDw8FShlmaiYpZaC%2FgNZe2jGCUm6UuhklGWUuH0UgvjXkh9YH16HdZQLJxTdDo5KTIKZgSZucntJjZ%2BwlZ6sw29bw0wY6pgHvSThso%2BGGLNAtfKbgIryRp8EvdrVMWJn2mO0rXwYWrgT%2B%2BEb%2F54GPBSKO4ARILHcHYxaFBF7YTzz2Zj2Ana8%2F8eiXQ0a3iDOIlo09I0QQUgTsMIk%2Bs701xH0ZbX0crWzMkX2VR05%2B0P1e0kB%2B4gpfLwhn%2BbPuyiyhvH1ZlTrDJ68rTeZR3g9RP4AZCtXHq6KLkL2IgdoJi9KsYhdewwMBDjA10o5k&X-Amz-Signature=ccf2bc25e45209671d31630858c70143433e55fb65184f91f51b1165f25e6633&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
