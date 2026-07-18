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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JDNBJXN%2F20260718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260718T101927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYapuo9nIThXIEStlqZHTa8f%2Bf1mC8NSuDGmbw0GVD2AIgL4FenJweWKWnYG4A6cUDCqy2FKLsx%2Ffeeb5KrOUuAbYq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDE7clLCx4om2HT%2FgGircAw%2FA4YefjLQRTgop1lAsuPhC57YWPBWAucKwGwmPHD%2ByVuil%2FZYLRWuZguImT5QIjL6tVn50HBIiDh3HlmjlPrgRc4A0Za9zHgRe85zGWm92OK2kB1TrSLRCTpuxzn8NiSmwfuMM1pSBe0miiYiOsHl9kdsQwC07IkvmIRuZzsAt%2BKz0K8jCVGc5g%2FFOPJfcjRztOjPjPDxMm9pKC061%2FUX27NPGNJiPkNLUeGy3vz9SVX5Zn3AGTT1c5EnV0YGiZneYdBZs4tK4v98YR1K3BQjeCJyujOukNpJtYlI02qXMmiypGb2Gb8Obylo%2FwFUWGitpUveF8ErNop9Zb6zIbg7sQLKPjim%2F2FFR52Xk4vGc2m266FEPQufgOtX8VQxNYcXLvVkH6CuGgGHf8Eq6ltjUxPBL8cyBeVXPV8Oxb60sBy5fEXSJRUixu8WNvAhzFeBypJO8eyccdBZ6NuPgf73UQx5D5gxR0Szw%2FBt%2ByytzyaprQfprmtJ0wpX1w%2BjR3QZeO%2BAEsFU7SY1KqkcCk%2FTcQaspLAoxM%2BKsUVPJ41t%2Ba9VDw8Ho2gAgePOgE9ZCPMl8BvZ%2B1t0%2F1KcKY5istu4h8BzXceBKYQwkGIW4%2B728bhDBe9vkxn5CbkzUMLej7dIGOqUB5RXXUIwJJZIc68wP5BsvF3Y6iyAGMYMa3MxckIsbdOawJmQp39ZtdTSpg3k4RbpwxmsdSk%2BuxSwAbZKVj8CB43XFSGon%2F0fm4pBpaYoSLhrvmIsognlcwnjShFk4HMqZQw1046vsThRLpIEdOhSlztyI8DFghmyFRSLH0xcx3OBZwB5PWJQywyStONywWKx7O5guZr3OGcGrueGBhrVvABozkvqU&X-Amz-Signature=e470ab767a20cca8971f75ef9d1e70c317ded03040c3dcc638026979bca73db7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
