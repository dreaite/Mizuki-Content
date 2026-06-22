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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRHILAOH%2F20260622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260622T193119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQD3kgOcQPZVdzoTYB19CnwkNmf%2BlyNVxktc49bMW3VL0AIhAPf35jiewnREMLFMpMNkmqi2DaqUu5Kmn6gNW5UzQexdKv8DCAsQABoMNjM3NDIzMTgzODA1IgxHahR0KZSauprsPIQq3APzAD7WH5oe8%2F%2F%2BIvmwpilPkXUX8NHx3YMzyauPtDogykByWspawXona1fCHQW4rIDGDNw3X3ILAR4UB9n5aJf6Az8mBoQInWIwv8Z2m6Tg8Pqtlmrplcn3oCTraoY5MjvYrBzK7%2BUHnSejo%2BnTvkdt16OsyUn6i0CF3xUC8KPhImq5%2BI8Myp%2FWO69TJ0BrLjRTxZ7oKrO1n%2FybS22jsLaS4ctTNKOCK3iw8aP0B1d9SRiC%2FxqMdOyQ8QWucgrEFlROI%2FfdZoS39S11iUHWk%2FKLlDAwyAuerDmiyu4V5Zt3dsV0eOlQ5xViBRJlMfsEZqnGYK6H%2BP1SF%2FAE0QCUYRfZrqg02r4X8V5IO6y6U2G9xNP6Ml20Jr4aosGTRnTBRcyA3ccstDMofH1R9rs%2Bj807o8hmNaL0BTW8ENuuAmmv9GU8NpKpDsiAmYoO2d12tYeMJm6z20KCP9HfN2CzMj6KnXFQ8uOxjwag%2BhsKVxGdo97HdX74XDXAGcyF8tv0VpHd8HgPKvNhce2sduWrzEcuBIjqED2oWdMAPjlzjcr4PmAZQsvPn7y9%2FIOAJTz4WNgYcIRU33HycNXEbMnPHwhbUnz3%2FCf%2BoQezkjxQQYCmfQ8nlt2dOEOWeU7xpTCp9%2BXRBjqkAZdSTJ2fQL0q8ka%2F%2FqRlCGFdn4OLm%2BxqvshzIKhhmqB6YML4%2BtZCrLYwrx06JtkUfp9CSpciKeEgjkmUGbFJjrqmtLQ7R0WsZMkPHItRUv584XEhv1zdz1gkhSpw5d8b%2BxnO71ObdrqRAde16sDC3R7wRyoiffUAulMrvb0Vu6KdehRgUeII2qLlfpts9f%2F1BhHPbZfN5hKcrJAN39DkDn5ODH8H&X-Amz-Signature=fa6789187e957d006a4064ef9776ba2d6fd8bcf840ada016fa8f10880fd87874&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
