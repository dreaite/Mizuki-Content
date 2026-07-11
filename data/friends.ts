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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWU3XLIO%2F20260711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260711T084829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQCMVVYMiTsYXPeG%2F8ursKt5mvUfkaSKNB%2FfxhJpUQlVcAIgKpFcylerVMTbpUB%2BmaykGZA0t0G6yoydKs7HT%2B%2F5GLwqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEvxFkyzvwbamC4BJCrcA73%2FWU%2Faj3ybDOF65s3n3eQ01SITiJOTJr%2FFnQZhmYjysTesF2GYDdUwu5m3bnYdL7tgfM%2BFJjESkUpuspaXxlIZa3VxHD8jb4QDhB5KxSh8XUJgTBTw7tTYFTWPRH8O9wvDUdwioXrEHXRgL5caO3yY4dJiehZHJWao0ui7K0ivL1Ich4wv3TDclfI0%2FbRerEwwp%2BIA%2BI2kcEJVrf7YM24BuSodEduoSFxWbm%2BuESYFHHvkdoIypyM2ZlR9%2FanTnhcZwwvYFjvpumzcSjiKvSgxIWabIO8Hrc%2BpcMO0bBPlGmF86vgTKhsdn7KuXiN%2BNt6swLt489qL3HmgC4vuS8l2XufEezRKqWMPUYdsDjfJoIEzN%2F%2B92%2FzePUJLp01P768yyxDNtTBR%2FYutr1ZmSbZCqu6oAVmpksGdDDqnQcm7pgbsZMrpXzkKxI%2Bsv6vkgNDVmPWOdJV9iaZbQJR3t2Q%2Fla5LjZarnk8Lx5m5l1n1e8B9xlDQ%2F5hip%2FhGvRxa80TduWXQ8ICgrwpuYIM1HO3le54mz3xxiZ8YxUmfnVnKTVPoH4ER3k6p1%2B6AgFCG7n7fz0ESS3WFfDt0HOuYHBGVpgopbNSFTCmtKAUek7awrFgA%2BfWgLkvXinygMJD%2Bx9IGOqUBornHAopRAt4f2qYGHs0W8FEbea4BbCBHj538t0dKi%2BD%2BEBeV5bFU68AoFhRAGFQUVNKCOxlq%2FOZUGXKFLf7sGBrk8ibZFAQgxUKayusUOOxVOu%2F%2Fy0y4oqbYBNccPczbWCuoXa9ZmFP%2BZyce8QSyv28SYy1nDAzmut4CTjSPPcgzqoR3iANf4CKBS%2F0fgwLpeRGbI3fh5TyTdrHUE6k4LeKLGefW&X-Amz-Signature=ea620e050518f737466eeb641ceca2a7752d63c227f1f9635ce06e733eefd88f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
