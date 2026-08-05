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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCC7ZFIF%2F20260805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260805T125334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIHcmJZ2p19hyFnnGGKDuQMF4wpp8bRuVIrPcod45EwSZAiEAq6U5Nh0Fz5Qi50N7fsCCuUNT7nDYcs8asHQH3c43Gwcq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDEWt5j%2FLu2IgK51rGyrcA2NZqUFHuKuQIlEiCxoN%2FkcSAkkmuGUYLfV1JRMXhrSxnEKBYYjGRHLpkWQAk0Dr68I%2F%2FyZGKukeFLGtkF%2BHOCrPIWb0wCElZE7IF9Cas3SaY6ttvWrjqr6uxJovTdc39hje4uwgFe7alGC6AJ9%2FvhoUWKA8ppLMKv6sX8axGhFq74ZUmcnNAcQ7xICX1fxiNUs9fFJYlvLX4zxwdhdpvhTilakbzVHuTZoC0DS7eboqyRp%2BosfeQp4iwIJzWrSn4Y8cU3uPEZj8a53gqxCod%2B6Qbp9kjQFlwN4lpC5IandLMwAc8BiGKK%2BbO295VKO7S0%2B%2BE32GcWcE8bGH6GdsC2DYnpzo7doXUe7dxLizctq%2FpfxKpczBvjCK%2F7XoK%2FlkpB1p9JjD2zTOyzHBwUgvQgEvpTmU5XpuHLD3q7DpZ8f5%2FcMH3Ou3vQjkrbqOUxNlqd%2BCGynhG7BKqItOQgFE2l0TOSq1yFWJpzfftHTGBRf%2B3tS%2BEnIk017cah%2FoGdrEy%2Fmq9IlKpROcFtU69YC2ZIse%2Ba6BqlLaQCdfUXinOVQUOeQhi5HBcIYC1IjPKhCxZE7b2y1pkF6iPw5AA%2BDNzELm2MCqSJf7%2FsxmX%2BEvq%2FMe%2FdevOZcFD0GXDhdmMLm3zNMGOqUBaBZoVd9sLRhr3xyu3K2aXdgA3p5hmNDvI2A3%2B2U7%2F3NrjDrt2xtVRNz71lDgNDq6qAu0HMX%2Bl5HLzul0tPzxVBVx%2Bx9cECfEPGLcDpLoaW7Anp5el7NsXPDmtyZ7sR1c3brWY0iVqUTIqeblh0%2FRRmcViFgTlsyuPAOb7UTmjVSg%2Fgc1av2qq584eHUJNbcW0tqzzC3qkwjJjX6Fbd8ppw%2BXTzH9&X-Amz-Signature=223f455dd6a7ba41ad262d894eacff1ac522b013bf8fbe0df848d527672937bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
