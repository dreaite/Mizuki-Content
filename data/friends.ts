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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJTSPBUO%2F20260802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260802T170055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCICrFw%2BC0ayw62xe03h7MZ4NOGidp8F6u1zPD4CUBdUFlAiEA4mEtiIwyXIGph8qBk%2BQpcK4Sw9gPpPSYXrrf8K4Sl0YqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIcBD52weMm1aKT6mCrcA9MJzAfdB5Oxl5bvIA2Y9ZwoQBO0doRq%2FOhsm29AR0amWn6vEfmNSfyYA06LnDXOb0xe0OSE6SR3ZSELPBLRO7zvKHrhJiTKtWZu4JTuYmVFUV0FfFlM1X6UA5ToDS8u14mO%2BQLhsV6DjgBPgeQtcNXBTgrR30IXKWa5KkwRAoOAM4pR8OD%2BEnQgYQTkokB02kIzW2HTDJjGWoEBIYQl7qYe9TmwoGg21hQGf6i4duVuWte16lI5%2BoOJkjAESRSHEK%2BEDIwhYqMNKgLZDSKvGPgEGiDPDYu1kX4G8OZtWpYsSKg42giK48m4MC3d2HoOLD9GDWP7AUgcDJTkywVXqBc59zjWP5ahJvrzIFK7mXPGNjzJf8mdBpZ7odxZbfzq13RVO9VsaLhcFaUj4TNz2B7KxRCoMnuK6eIJDuMO0kTiPbqXBxWzIGPp9ZZGlTvg5DDx9XoHl6b6MCTe4ZTh3H6b5FiizSWAsFX7Nhh73DyygOOQZU7d1ho41SX0z76drnMzpnBF4FaLmOVjCSSOEDTg1fwBL8fyu9fpxCvYXFy7lgjsUTV9KZzDNmO2IBmrgdauGf4nUndut%2B5ZhL23JjLR91nNmK5VnT%2FNQJNZSWjyrT7SudlKLmwqhXMCMJ%2BQvdMGOqUB2BwMNEsuiLkeHoNj%2FoKhuOGR7U3PHon5XSw%2BoPREMfhiox2e2akhXp7Wg8fIolXUy6I3ryboJzx5Smfb0XiuULUtreVbqSHtdr79MSuSAi0KdWz5z4SATm89v1%2F%2B3h3EmRejplMkvJvtLUMOtl7sy2d%2F86sVSid%2Fwe0KtbZHZXiQCrAtfyuMSx3A2Kz7dEzGCF1mPYqEn0pFMUgjNYpJPKE%2BOw6j&X-Amz-Signature=f16610eb593ea5c9fe7d79fdd755ee1e78a518c2de85942fda400dc74865dcdf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
