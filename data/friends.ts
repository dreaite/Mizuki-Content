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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664S3TA3KC%2F20260709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260709T222318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHZaqZWY7ogIBDq81rl8OWhfFn36Fyqk5Oud8nQcih55AiBdMoB76o4AZlGiF%2FxHS7%2FhVShAshrDxCGqTDA%2FHhoNnCqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMefgQiyCNHCZvEE6nKtwD9pYYE0w%2BKNeyemUg5%2By7r6NPSgHhbJYS7SG%2BVYq52JdhqHb3jPdxSFiuNzf4xceFcMjuwK0hSlTHVeANgcwLhQosXxwqOdK2eXvfZkcWAmkIY2iTrAd5vbMqyc0ey8dDNhuDAa19IM2eofeXs%2BA2SEbTSxrDuxMCQ7%2FgfahFMwTIvqeuLr9Xo0iYZ%2BcY9GamupF8kEONeHCwldI54TJsM8pVtgfHm7su74y%2BM2Yrc3V3JUrKeXrcrLcGBCBcTAKYfvBp5n4lFc5bHHs6T%2BwPWqbyDtnP6GGiYJyQORlxuf5y9Eyym5%2BdXAVDZxf%2BgoEs7TirZsuHhX%2Byft0pxkr43eC2hYvk34wAbqvnxVuHCLl5BysOWxNNk%2FPkbrD1WjlgGGRxMKcNDWAvr1ZCXC%2BpNuCMDY585nXVI1C2CJSbrw%2BmNH1YV%2BYemiW7oVaZRh%2FuTHoQ0QKKpgDzKeYeodG6S4rZsaUc6afIkfEMfUgoekWqDPmAsRQEbP4qeJ7ufo1Bqoe4NdEF6IIPmV0wX4noepCaa06acPMkWbc5p6zdJiQkiYO7vZh7lnqZ58PwRIuR6rNFyHD9L6Jlmqzd0ZYu1q%2BYcK3CO14z4y8R1D2yE65LduGOfDGVGDg7P0EwjIzA0gY6pgGzF1iIPE%2BF2PNRlTOvGkEJ2KGfNZ374fEpEg3XpCjE5UMbGWwPCUJ0o9mxPNQYyAlV8SS26kp3%2FtVRNJpZYYfbr78NXQCHK%2FVDW3qr4zVRxbG3eEJrC2iN3v7rA1dWbT10AWyi47pthpyQdRN0EVKod35zTjJLzOEVN1LJRg9Fs1xurHzUBpqovPEJYI1facvWOCHqSA25AEi83Lyv6hGE5NWrbCtI&X-Amz-Signature=5083f92a19d969f09dcf92f4d7da349d80c31292a023af2d70c92b1db38bdfc8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
