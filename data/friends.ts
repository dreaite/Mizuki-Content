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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625X37PIU%2F20260624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260624T170625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIDv1bHh%2Fjzu%2BB8fqnrgqFi4gM5jOdlbiAyU4iLqXZz%2FUAiEA0%2B%2FRAc5cC7m%2FDNB3GQPdWDquO%2F%2FCBGVCzIiU8xTdZw8q%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDBISBaUBfXkN8QsDYSrcA4s6RGer2cuZ69YzJy5r9bhahrAspyMcAaZn58oVayfVsuhi7mkFiYXEKjlgLuiAARO3ILveCz6ZP8yzyi%2BInftZkuZynEtqXx004xhQt2X%2FhuQnZ0E1WZGSyNvO4AbdGAH3tXHoD091MyY4aDNd71xDv7VKeXekqXEVGiqOyHIv%2BCmsNwkhUoDqb88u0yAZL2cIs5QpHBI1nvAVMcryrt5SUx7Cch6mB49oco1cmeZaffRgyKFqewfGHiivURhkWW2AMbcHD%2F5M2xAwFxCAI8NgjPLuhjt%2F9z%2F92u8MwOBb4hwax3%2BibCn5yv24QCe0%2FUIvvwHudoAG6dHtuOKUiE%2BZLYuD77pDh2LBIiy0EfXwApvCfHv7mdp%2BLQlo6INVf9fLh9zGa%2Blt2Bu7uESJjzgrhpqS8snNyKdIYmaBm%2FfGPsS5J6WqOSQBX4a8r6MPIDUGRu59B6x%2F6ud4YiD1o0rAAByoVmRy2FjLIZCjlkzoLv1CJSqMNx%2Fw%2FKLrftJtI4IB3ZWJwrm%2F%2BAyfwlDpvB%2B0cKQgisSf%2BYKvMJEEUY6xINw2no%2BbClX5OmL%2BzLtrt22Cpj4cqNqF%2FMsGpJy2lE1tIDIBIs369FJ6nemycEeSe3uJqASY02Qm4UIKMLOW8NEGOqUBWcylr0vUjwKk%2FdcuVCI3JV81Ym0S28CsH0Mb6REQEaFPY1gfLpCHTX6UV8WuEUW6%2FHJO%2BmhUHoU8oE3zsDUB3yizZcOVFHTPsYPV6CoTZIap%2BqD%2Bf2kE20aSCl4OOF8BL7lUWNSG26GaxEGAfwFtCNIK95ovrA9%2F4XsSvrUTVbBMPZVODJonUGi3I8p5WediavFWha4wigcUurGynY4wsYcDuGME&X-Amz-Signature=29af8d1fb09c51b278e5701344e19ebefd722d8b341ff3450b1f19dbcd46344b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
