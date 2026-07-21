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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Z5NRJVW%2F20260721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260721T172200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHNunlORK2%2BbpLdVseu4MbC9EXmvdnnoMIRLBSQVi7H5AiB8IvC9F0i8GSEjem5kku6BYS1MKvMoKB10Uc68obpvZCqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTe4xspYu06z5gdlbKtwDSy3VqNXAmPbAuCcceiW0bmq8uIT5W38XgG6wwrSdb902V7g60KeD9S43mwLBIDpxoB18spukOuXnKqjmkgd%2BYfJShuM9oIpviN1rFP3iUWX2NE5X7Rv6j95BdKpTugitfOAuWszQUIHZT2WpxYIE9%2FcI0dNRZmntHWTEJoIrLRhavxRtu%2B7BpWwJEJLinSxIPWZGR%2BZ2WaOyoe8ZK%2FqifFEN2KfTkL2WPsoJcu2ivuHzIUtpDnP2u9tMCC1UgEP1ORrKqHHbG77haeh5C9n8i49Cbk9ZEBx6ShGP2M2d0g1zhByXp06rDA0ZM%2Fh38LbmVFumFpewHFObKS8dIPAucQOoovusYpZ0KyUJaW79Jmqje14xZ976k8RrQXxihs%2BAkNI%2FJWNgTvfoqHV2I8id4fdw9svSdnGWaUP4WDG6VZGPp0lFxLdCZRCdfYL%2FUUBUWHc%2FVC1m6ZYdhgR1cQPItAVNGSvOcks4doKVKzNw0lB81J9oBTXd9pEiBvOXQhspddSsnk9TPSXFE4Ucs%2FZoLSAF4n69Q%2BpTo9mMtVJxHnHoPH%2FquIcqmv3zFiW9ba3FlPH7wIfvwp67bRvODAGm2O8wUIc4%2FGCdTqeT5Lud80KJ0yvZQUDh09G8rXQw7ar%2B0gY6pgHd9oCIzxAdpLsLQYUutuB8UBFfBoebmLlDxhvkLXkGX%2BwCIuYISIFS19GAehn8UEBtvXF5LWnmX%2FQ5eobIAl3u%2BPCrBq30fNZsgyA5kasjLsvKZvr6u891%2BIeev7%2BYKLvIonKu01kF8hFsqZK74NGlHH8gLEwN0g8guy2r9iyg119lWb%2BcY1Ry1HU39yxyk9OMT4%2F3ukTnuzE7UtZKYeD4RIpIrvD7&X-Amz-Signature=09f30d14ae8cd670e2d471a64e50f04ac682980fd6007f19c23ca3c9fdaee3a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
