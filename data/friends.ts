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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AV5WBL7%2F20260709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260709T155707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDuAu3D%2FavExJ6%2B0V4QuqzVj6h3sk9CQ%2BSpH1WDT8dZkgIgBo%2Fra8ef5SMbABDzNhZoIFs4CUXOcd3UR5A0evaressqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMCqBAHovGGjINpsoCrcA05q2jfwxnIjINFU7bl9hO%2FHxTUH5W%2BzgaHDWFt5T6GQ3ZWPuhOkXI5mzC0JKA56faLLuvA2YstdenWiS9xG3YmmTcVjivnWlaFnCk94BuBP4xq6mYczj5NpR3fjwUns2ZEBvyR9ZV3h2bgGvENJA8pGEERffwZPEQ%2BqSkslCSRML4nzMxokX9isoh%2Bee8bKg7M0qbOuSa6BMj9D%2B8kPFBIl8XdS0F6mJayl3srhoqmHIrbXGK6CEKjK4GDt440gKva79LlLCBynJHr%2FI0DB%2FFzW2EfyeogsydEjNVE532lX5tyV2r3TcP01CGWqm6tHqU5kzWBeLyoTV%2FoPB6B87Gj3dyV%2FhuvNImCXyXiG29tZUm4Nfqqqy%2B7o4JgBh6RiuopnZPrzcEM09xucH79T7T2HhW9i622WL8%2Fyd0LUgCeiog8qrlMXEMh%2BA%2F93EQAgeyCHzzlABzotmkXPwi6aD74fMORwqW%2B2PNWxTVlUL7S499iMjneivwXQqNw9%2BSgSOKVdhFGF16iEepkgBWFmCMMM%2BZNZswglYGJDUrmNVBO25ov1ha5RdidL5kn1LlGkU611rT1KY%2BWJkbvMxVnw3A%2BpolE9rvbrJLFmCfuvkOKklGCkOLaZ6FswX3cmMN%2FvvtIGOqUBfeA31Sr%2BUzb7FXGWp8RINtYcO4WFwJOuiDfQz0Nlxlw0BEoA71I45w%2F9G8W6q9PQZqiQ3V%2BDsTYnoRuzQb%2BEdeCh0raecCnphcKmUQgHq4j1quNymfMK%2BtJQ%2Bo95TEg7eMWLdvq089VytN3ADfKzZ6CWnkd49ddVUcBApx2g7cuOuBuIUUN0X6tEl6rpDhYM3dOHQV4SlCOhti3oovrQEULDdhS9&X-Amz-Signature=4ad39a895b10d40301cc26f57fee8965080b646e16f992ce30b70c7d93607c38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
