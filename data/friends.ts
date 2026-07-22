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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEPHURO5%2F20260722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260722T114818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIDkyqNZluvstsBNaybr%2BK2AOYnC6AbgrQCCEBLZpAzm7AiEAoRLCPY2F%2BhDFLYiG0MFLbRYPblTClVEcfkI7%2BUBdCKcqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC%2FbOtRIfx2r3hNcmircA8HvAUJEOQMh6ZIatEIurAuZO5a3yIqMNwea%2B842FEYt0k%2BRBwEWXYKh1CbC03T26POaGRyI1eiphg0u0LnnxjNXYpIoT7qA1%2FNnRAT8m%2BoDhyzWt%2B5ufsA%2FMl0GWlKNv6%2Btq0nVe6UL2vV6wun0Z%2FREhvxJoDkkXsjGbj%2FRTW%2Blc%2FroBgNjBd4XPiXZCNjCmFxpZY9%2FWeJBm%2FOqviRBR8%2FvgYjkKuMvKPgbZKgKGHTPP9oJND1J%2BV4lzlPlttAGz%2FwSaUOTTw9AcppVylDMkKMIBjLqwcLZcUiwxJc%2FbP3ICSBnaI1P4A2Mdna5EUG9Dj1%2B%2FbO%2Fb2fcEZOZeUwuUyGq1rDbZ8npZm9GZNEBhCvxacQHjoRh%2FfFMhDDSHYJNxwRcn%2Bufjf157G3glw82KZccv94HQenBgp79dlFAvGyPM8okgJ9yUl00dwDsNHLGuUX5VYolpbkAK23SMY8yJkmU6R32htBEagLHduuIiAv1HaACj4CYVO%2BMtR3zoQw9%2BniHkPJB4UITkvso%2FHKbdEnjm%2Fl%2FdjeKmLBv71isNrmjbN6FO3RRCl1th6mxpQTnHIG2D3sDhJW0n6WquMM1AhE%2BVsIbs9xZtTXu4pRI7EKYcwXof3uNmib%2FJmwwMPS3gtMGOqUBBwqlaN6p55cMh%2Fl34c5ns%2Fa8J8jab7VclvjKoC2Bss6O9jUWd8sIRDZLF7RhcGVwzwo3cXKltnLQXQsiHsNto%2F%2FzWVhVq%2Bjj4VkwoQNA%2B9KPehvXwumYAMLWGM%2Fw6K%2FQuZZPxB0UumRY8w%2BaRxa8WydOOdP5uGKS3tcLK4JQaSj3x%2FeH3HrEeqaa8SEXerFCqVgPKMCUEtN0SCrlvDZ1NQlFhFE6&X-Amz-Signature=cc0bba0fe5f089a36e69ac4d89a4c1680f8f0a5755abe63b0f5ac3e186814ba0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
