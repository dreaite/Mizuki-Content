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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQD42CYZ%2F20260810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260810T145914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBdqLCA%2Fd2WLm2tY6c%2FMjXaXN%2B1c7OJJcRn2vEXVNt4DAiEA%2B5Z2IPulbpM5v5wZYU2gyClyR7Hy%2BvFlL%2F%2FutgEGaHMqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDDFOCtKNsnQIAxqEyrcA4jrDRStoV%2F8cEs16zBi7Z7%2FVUy%2FEh9CcgUEkb7oWuDwmCnrSN%2FmymKCTnHb9QU14Ordds%2FuQeHvAfbT7pMlrQSgdAFNlhzoqkYI9902zcwp2nUDTDBhCd8xW7Ef%2FK%2FLNGW72fZzMEi0NKSEPP5yknO0XOfnAU3bIWpPCyLBAAhS18L7TedFFrjyMhCXqKH2DzbdVI2CE5SSSQzwWPvNP%2BtSIgjkbbDAOSJ0fn7n99Y%2B1cSs8rFM9Tunt0D0FA5VSAlx5l8stt7UZG6AuSCM2Vaws1Y%2FcPjJzB%2FXKx2et7H35MjJbQyj%2F7FWzcdd609V3hAg6YhCUQ8fn9TqqF%2BRk5hh8MWw1ASzh1GQAX0BXpVst4aCcV33%2FX1B67iHsSOBH3HKvXvfO1b5P0ga5gTUB%2F2Cjzt35E4bT%2B4gbsU5vaYxUAaI6vCdmP4iQywxWcRPhQPm6HeRh4FgiWM82pY1LBySSu61niYn1toaGsFq8vgYhy%2Faa0lrVASR9UnhJ0QBduM2%2BR5Yrn9gzzR60%2Bsv0ZKr9NDXpCCnC2aV1j%2B0sp5ecQ1PkLvJiUJlM5veyFQQskJnYuz4MeAbk5Z8nsvyzXYgRRljgEJu2OLPd6rFPLc%2BakG1KHPrUnu7CXuIMIm559MGOqUBSsbSi7yTS7h2WjwbC0VCesy4Mr%2FiJ5PrUN7Pfy36hsQuzgU87tQsY7So7e%2FRNwGJLkIvf%2FWr%2Bne9UBFYNT8ckxI3IO8Jy6az2om7EBPvU7LPSqh7EUmoLE1ikhBlUGRY8lOPiu9OPcCSx6d%2BuEGXFVUEo7EKP%2FpFKiulXDDnVX81nktZ0WPeCq%2B%2Bh93Hq6YBQp2J8y9LA%2BRKDE7%2F6oLqc4ACv0Qj&X-Amz-Signature=7b1c96fc64c47265f606e1e51600b295293637f62bf347104c47c3c42fa69785&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
