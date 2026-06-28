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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTHJB3OM%2F20260628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260628T171447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbbZRygj0l4Yj2%2F6FfXxESWj%2FCQt2dIG5v9YrkZkp2rgIhAN%2BIsoAPEQVHyMB5vp24xCCeyNkNIpsrXSfsKRS%2B6F5dKogECJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwgaYOlIhol9zU76Fkq3ANeAN7lAGtp%2B%2BndQaavNMx%2FlpKxEwTImE%2BZwLBTG9bJpFy1xD1NAc5bDIN77Jxf4Tcvzb7W3xjB9rvDIGuWhSanznF0lyHD5RAVkxlh9mim7GAjk%2FkcC%2B%2BU%2F9YbxR6T10aUlqQh6OD%2BExGrTtdsdFRD04mrEFDcm%2BzEBDQb9VfFKOr0lnacuGMNDxIJFzHFFL7X1MovffiAHugScWNIiGjj%2Fe9LMyKjjXZm4%2FkxZrwMvW%2FUVOcXLLsIiglQq4vcIwWytqsIctS%2Bo5fRrFc%2Bd6CxiIPSfyao%2BX8wGkKdkM4jtvORf7NTFtp6jjmh6SOMYNMEX6LoKJerjEyAoMleCNYAUnaDSayDHYqYitN0QJjC1bv9GWNvXnXwsi%2FIZ%2B0t3WfwYs7BIZHF4elMvU0o9cyPOwuP3UIJHuw52ueM6K0ffc7hVWS4eMvYX7mb80Uq2Q1g5VX4hpZE7VObaHVAMTckQgPy5W8RgKM5lhbet6DZb1KQKiZgjYjxL4HI3AhecktgpbGEma70mo0LMAhjOmLfP0sns%2F3xlmksv45jYQh9kY4Fq5bWlcF%2FYHZdIW4fG0V7EnGFxrweq429g5t4pni7XKcv%2BuaK%2FNSvksXRNLpHOp5ekREdHr8Ous%2FitjDP8ITSBjqkAYYjaTA%2FWI7fanlOYin5VLrLLh4iyhtDfjzi5MitALsebdrkAcy7eQfn18fDQgDE6Wtx948JfqFMDER2vM%2FRP4ygOTj4weVd65cwJcJdQlwBODu5UuUjyLINw0vbxOuz5HasF8YrZF90AkLJP20ZZjR%2B5oz436xr4RU8asI6M3wXPMqKOlfW0WDZxo5eKv0jdXppo%2FPr563%2By2jVhGiZlxJl97fq&X-Amz-Signature=869ad018ba0365f867d222e675ecb0f1458872099739a39d788a8b116769426a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
