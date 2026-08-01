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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMGBOXDK%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T090606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAjAIErAqaOVhSc06UM0xV0A7pnSn%2BIihbRe7elbAoYGAiEAnXFGyyagm9NUPxks6sSAkF2p8KD9tNsWIWf3xXb44zIqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDwtKriSFvIrKyGN8SrcA512O9k7uJBQYnLyNxkOpChFNL477i2aCwTWg9FF3aGfPR%2BZBDdRHpy27tUqsqn7yWmwtSoXD0okXDIlWqTEd45iasd5D5N9AuD4IGqU1JtQNN5bnA2aU7Sdt3UENg8rENGHYehtxmaoDKLy0Uv%2F5j1gITx1NdQLMTUIFBlzqk%2BVPpBxUDjz1YrNkPDsc3vGagXPFgpJRSnP7HXfmodM0zVd%2FWIRdQ6p1MrdpHsLHJqHcvQI%2F7On%2BKS23YBFkHcu29J5kLc%2F55g0uPVWD2XniKgcPOCcyZ3RaeUr8dzkvBt4Xm3wYRL6TfDAjWxgrAXFMp4JpQyJwulGVxNGuJqHyElB8yo6gG4UkdjqWAW9zwuM5WSWMd8M%2B%2Ft1ZoRMitvPw7u%2Fug5zp1Qy2r%2FK3YnVHah3qFh32Kcb2KoVabUPIJkcZ9oSGkQ9Jvu%2B7MvAjiKo39gGefQj00Lp7sKzk%2B9Sbt7pj%2B93Vp9tqc9yRIiQ1bJnEBGgh6ZWQxpC%2BNq95vDrMh7gf63SPKRaVzbyWO2Wg9FMA4aA%2B1if%2FqlnwOSpoTjyQF5yP68A5bvij6SX2%2BGILfqAyaGpEo%2FDKKB2kdmEYscsm3gdnM4lUx44JNm8mPiD5cjghR3FRvHfVgcCMJvUttMGOqUBxPFqn3lyHfYiPlxNIah5pylYhr%2BaIFf4i%2FDo1wuxLfrsdDR1Y%2FpPIk53vuemNz5YOh9YL7eOoGFWNvOjF0%2BZ%2F736puH%2BvtK3yc4OZin2%2FyRMD66lOoAFevVYpi%2F91%2BZl8ooqvhTH%2Ff4WqMzHJVmN2nt2UuYaU4UnD4YvFbyJ%2F8i0o%2BI01USukpz3aGY%2FRm6QwTDLDhNipeWLwHPKlp6InGIvleDv&X-Amz-Signature=384981ed92547be8fb236c5767e898fb09dc8ce72d0008bdea4ca3c9287b5dc2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
