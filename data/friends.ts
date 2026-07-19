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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z32U6CIC%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T134430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDfwqqzB57ff15htwo0i5Hqw9SPByFuv0XsCfgDoyW9cAiEAl7o83PVgyxW%2Bmhy%2FzG9QxDYJq5b6%2FVNXK5XjOa58qpwqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNeQkZ5ZqhkCA6lJGCrcA7VFMYor8wnSqdsoANjxi%2FtE6v4JauP2On9mwrw6Mj7Vz7z2JKHUh8zAec5Tv0afMdLt8SyGxJGzX0ri6CxUAfcrMm0diqkUeM1lToOVgPAnYSJ94jsgz75tt8iKqaK4eAbJsFcW0VePDEcjcM1hseaY6To5jRewWDIeXt8gsO5l3LZwbaPf1wlacv845SU%2FzhKCSLU3eT0HFp7TWlMaC3RleSfla5nT%2FTq3TtVF5VmLHdKVjkgUN1UgQGxOEkOl7qkpkeLI%2F6Mw%2FZ8nTMNmWsbqfMOA9An7uGxpLyj7WZZESMCw0Bse%2BEUGjnFgbAMRDQLmGjU5scOVkXLKHCGxH1IGI8iKjoftRfkx%2B%2BhJel966cHxayjuGCxKpobks19K%2Bsy9fJ6XNAiMkfwUl5PX3EYumXUiemeOEdvg4D7PRbshzjS%2FVRBZMur%2FycloZOPGTretepMnuxn6rFIORg5aqSv%2BO3By0SGHITm1aB97%2BGghpILA8q4lVcnGfmtLyEUREMQew32o2dowgTQ5pScpch3kYnwloeYy7PzEbDOvHqfdjeHWIgyiNvLraPRJGX8LbJv3b9cF8kdyJcblJKG2Z0JavTgAi2YafDhAWF3rk6l%2BQHsjUgdRSTdUEDMQMOei89IGOqUBHxek6z1vduEF57Gt6fbwvypkC0IhuVarWKllAKO%2BXTET7CWTeb6%2FdIr0Uc4u2prVyrcmoU9MsDeEhirvNABUtOs5bU9IOPQDtoO47VAQ%2Fosf34nfZ8d1meXFbgbw3KlogcqnLxSvH95US1rzey48LY4eCQSLQ6Hm8FD26%2Bf%2B42V3%2F1fccBREz%2BqvKZlAG5reSsx%2B8qOYVc25WFOJfbV%2FQl57pyTM&X-Amz-Signature=f98da0a0e5b267b9b7428b57e58843e44da01a1c76ec753b35fda6cb4a024daa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
