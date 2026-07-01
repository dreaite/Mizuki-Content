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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BVERPCQ%2F20260701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260701T095126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQDhkoxLVK%2B8sRGZ56a22Xbfkg%2FpgKg2cUk%2FhVQAVO34XwIgT48fE%2F03JVUTBaDTAbrYxW8hraHlG0bP4xUrmakLTuAqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFGGMzPHnt5Ly2bw9yrcA2bSMMpgMuiYNm30D4FrsuZ8LG8NWEC%2BZcQHz36qba7lgxgrLU%2BpH%2F80JI0hoXXhFZBcGW5%2FgUCCsl2vQHLfc%2BMwy16btqOgmgThpcc2flI8pv%2B6DtQZbZRCg3dSJtX15Bnsu5uegq0J26AH6MDXM%2FnZZWWUE81gg9clmZ%2FojQwWkVEMAgrYdK1ZaTeu0SBCceTQ5VQdCskmFJfcYj2WYgDQ9czaF94dR6pGo1UkOtwP%2F298jX57xDXYBmppFdFXmIoVsjQGgMux4d2ltlQGD5ysC%2BBUJgbu59tg4XmsKaR2MQ6RKmSNzqNS89dZIPssT%2BLC4QEwgd5L6jV0tZdQvx28BKJbq7wDCgxphsxmJWsSSk34tyMYh0Q7j9Q6aP1Cb5Wh48zkjPrLt%2FtuTz3awzSkmcLNW140YzrGuf%2FfuecVWkOrlVXo7r3cUtRxhpg5X7zRiVQ8wtrsF9XYxX0zu9SYsjWLS3X7hn3SXqgE8GtcVlE1vckPsxccM8CDkFs7%2BvxUVtBCa3L%2FXGQWbw5JHpKyqxR1nEleZCu2lnchfF0ERyGJLVkM0P%2BhYe2lKvHJEKg4azTV%2F8VciPYEvK2zPftKLwjTXv%2BzUVIflZMTC92Y9dXftdoEJKQkoYLaMNGsk9IGOqUByGcOMeOQPy3NlYjBmLnb4hZSWdbgfrBPNl%2BpdoH32nrKprOOQngd30Xwkk1uGEumhIX7s5ptlM2DtJLFXM2tQ4POrS3RjKfQbCVA1l0g5qFrVpS9ucCuzYDe20vYnIdXQ2zfIDw3ZF9ucIsEiaKffOV7zB59d%2FhOmgpOLnUHjJsuPnDDpXACP03w%2BfAvaeHXeeEAFhfBWlnOUSf4TYphFiB8FwVE&X-Amz-Signature=7b08d51aa9fc2249a1801522e219e9fce549563cc116c000de6e1b22772bfdcd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
