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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYBCEPA7%2F20260723%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260723T083650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIQDeb7IC55klRSOV0jyuWO%2F3oSPvOQrHzZisVmmiJ3Ml1gIgUdkVKqVBuUeSt1yCs2ASqu2i1ly3IayeadBTqIQ%2BX80qiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKB9Sz43ONYNz3CGByrcAzSmKUInvOL5tQVgehEN%2BgMKZ7TfvHrIc5sCPXKC9Rn2H5MqYZ4mcjpywPsE1jWyH3kng%2FSZC7hWMGUtOjn%2FWuubph1fsldypWeub2hBP6L6gcK8ZtJ5Q%2BRsBFikxM5wgY1d%2FQwAr2Pu%2BGSSYqJMaA0LY2x1NI%2FeHjqjvqZz9ZrGlugw85Bmiu0vc4HdsWqKCk4OQVbFpj1AQN4eVNd6gH%2BWPJ%2B3m0BzuHYFHeUpwKqHSThfp2bAz2SPuHAaa0lzOBe9fxunhf4lbzy6GQ%2FbGMxJ24BS1C2X9cFEktatKZgxmNfn8plJaYPmJfhJMoqrlDSS4vPm32Ije%2BLK5k6I3z7y0q5yjcozkj9ibWtsUmJjEWSMhpzxycJ747%2BFYzeUTSMKyYZo%2BgGhN6%2BuGspg%2B97J1C4a7KrUxFRBVvdSCGvmwWeo8Y0LycNQ6FTEvcD1FF2oZJrww9%2FfG1mJamWhlDOOlBwzyk%2FtAQcnJV%2BxekZn5IhFkN0bA9aubRAkoBejDX6hNYzhtVnJwWFUuC3tiO%2Bzij6yftgA9fyGfLRL%2BwDelGFsUcoPQjUAJbbh1hfLpZIIOGyvi2C%2FXZl7ux0CC226S%2BcCt%2BF1pxO3DiDX5cpRc9Z4MLMq9xYpkysoMPqZh9MGOqUBlIQXXqSAs5GKkuHcAucl7AWdt7LSuNMAnxjYQkXryzOiksWDdjLvCZ9acNonT6QmE1gVVUO2IhDIwsOesDv0Kld80L9agBDIgijurDeud11O%2FIiO3aSvI1a7AWPMkhpCmiYCvc8MBbGElscrRwD3Ub2Gn%2BvkbKY89%2F11HUA%2FsiQa6HhaffowKctRJCwiVlWIT5ogzs2FZTt3ZDB0G0Rz75jSKG8P&X-Amz-Signature=1de0529616ebe6ec8e97af473b695025ab278d91a4fffda26cf836c7d7acaa1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
