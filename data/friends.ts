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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CT4H5VM%2F20260706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260706T221417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCC9MtywglBN1Cnj24MsKsnVsO6h7e%2Bszgy3P168lL7NAIgE%2FsdnFRwq5uZJLtwdCNAMi%2BFsg%2BWHZmpaOoaM7MYi5sq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDNZt5qSDPQnOTMgj2SrcAzOg0ID5H3iH35D7QqVZeKFiZqQpLTpBT2JLGwb%2BMDnhWBEC9gjt8gNfyq4NYZgeIcRjpoc5f6EolVJIWvIXIwU0emnNcRCMNxr7lKFa3d%2F%2F0xZtK0FH2t8ykoZ9KQcZ%2B5DtIzB%2BRnH3E7T1Hog96vLJeFk8EkaF2NiPcC%2FqqD0ICmGocoxyBzeeb9IUCsOfRarrUs%2FbozLz3QnvX1UfEOBxKtMWUKNJqODpWsbNouaovrAtI2%2Bw%2B1DTP2tUM%2BfqmCgm6Myld3nQRpU%2FicF%2BCeqYCG%2BHnMFHyyjjVv42xCs6uMOE47XAiR1W%2Ba%2FQ7uVaLhiMvZ1bMkyAMjsEx8%2Bfdhaes9LuTgyGMD%2BQ2qJ6kMjRBKYOMfmBVykcmC71vN7FtEJMckSRfaEBtjG2VdUz1SQPeEGsarcpQQEiSu%2BZYknkVRF%2B1th81UrbgkMnwj07QXXwJB6NVVvwb1vK0joalgUHSzk3nXhf5KfIoEbWlmdVPCfcT8NUiPQtCMwjplMN7%2FsYMz0LksmpaztJ6r8Pz7cjsK%2BAufdOv8w5F3bk344Np%2BQWjj%2FXz%2Bl5f67Xt9QPQHmIwGEC5Qz8EORRtWtMFqykyYGMM%2FCjlDkLuyS9KLhQ6sS7PIf%2BmpZXJR1FMNyysNIGOqUBFsfPU5tIRYrU8grUWQnNxIRoF5nVNL%2BrI1p3geOEfHqLYPhgASwBcJq1I3RTpfeAOfeuRQ7eJQMw3N0IJ8dX5MuI%2Bp%2BMZwXpSPCvZDB3nAoWMO2VX1U7sFZk7rF6v37UsGuhqDHfH%2F2kKDi3WB3EjJHQhSVUABmXPKxBZZs0%2BnN8fdQQhYxXbCmmzr9lVKNUovqgdN%2BP1A2jj5X843%2BCq2T6UVYX&X-Amz-Signature=ec65cebfa21a3902340d787c55ce7a0c6b77324ea4ea473b42d7f838acb7e6b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
