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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQFHTF24%2F20260725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260725T041146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQD1HFUXchYcbjcq6dE9b45H5%2FBzfkpkVPShVH6fRUBgogIgWYhIaOnjGKWM7MtSHYJRIvB3TCyf94H8A8OTd2mynWkq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDFoEjo%2BaKVupkbGivircAz4nWsY2FajGk9%2B8mrIxs7N2xlY5cUGseUTJx8F3EEoR%2FUGO7U5EY7WXfi2WSCK7WbvMOLxd5Z3lVoQqFhiO4qC%2F7HqoBGBr7cAWmibsG3q5wC7vFonPjVAH7TTfc2ZlS3awRcDcyo%2BmoMvBDnlTMhQwoP2JEuxAjZ%2FJydVAxVkJoDdXDTdhaf%2FLWO9Jbzi0229b0JUx3tNEGtg508ivQ1slxp7dwdD8udMfcQSvhQv9PVvwjHUl6wGV2%2FIbru%2FZNQqsUkWefUmpha1lI2QR3g7t3SSY6UVDSyErG2bdFCN2U4vJzaEUMf7QbIfp5eyadBMKYjeuV75oO2FiP9c5XmV0VMG%2F5cp0PRLGX%2F4oPB%2Fd%2FSyP6R6dGULp34KNIhMoNaRZs%2B5jePXFw9UoZCK%2FVWDH9o2h0uNVlt9PQrjp8AvPEPyfA%2BjpPf75FPun6uMx5d4ZQnhescb%2BLz4gGfQkfH8YwL%2FitnxkWEMbrn93Dl%2BVh2YKIpVyfwsggkd3u47BRcBO7o2sI818q2L7QjDF6vgieK0AUplKjQWoUxmV6wTDENqLDxJ%2FRNDTY5WaZBi%2BgT9niMQ1TSEG5bX2KSDoIEmwAq4Jm3vGpHmdyYg%2F%2BIFHOTuHc8%2FMx9o7b0LlML3BkNMGOqUBDqFvX2mM0%2BJvQ8iBOvJgEyx0wQ1rDlXgY5vCpWtnXNZwsDBAes0DovxUDltWaFYczsyKczyExcGRAmVx%2ByFmbbRmIFPfSN9hC6LQbl0uRk4shJHnJYFOU2p9ah1x3qTTYAQWj0K51H3N5t75ZhT11LbiF8ElL9epFwSEc4Nv9N4F2B7qonZtiKowxKiEjDq8WOZS%2FxiJpx9ppU62on%2FDL2k3Ay6m&X-Amz-Signature=1dcc22e8d39cdb076738078d512587ed02e9284e7b9a5212ded2412f4425f122&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
