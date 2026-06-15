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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637GVGZVV%2F20260615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260615T234648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4BiZzJ6nd58dFjRRl3KoULwxxwzcaUgQryv1Kdg93bAIgSEu8H74nfpScoAB4Dk%2FuXDTDF%2BjmbBaHCflPjrjABdcq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDDzdIX6ElSkTJuMigircA0l0rLWqmUlhNLcLsgUaPsIF5bo0JrGpjAD74dSQlHkjwoOZhtj%2ByT67YN%2FWOn5VC8RdwGyQ%2BLoqkYdXQESZM63DCbZBoiSznz4wQ3JcMSP6Z%2FCSbJZTcZvOwRTzcI8ILzqL8KEIQ5i%2BdcfIhM3OVZYGhNcozkh%2B46CATyumPLe0k2b7hInVnLTu5dRgMOpnTMdahtLmxFmA6XPqwJzeCfMGtKbgeMlWANDElqfveA%2F3B7kgVixMTO3rTUD7OWutm%2FAztwc2vxnWNiZrcCjVhHcOFmZMc%2FBsRSH5JM6gqCplbVHCU7ZQ%2FhtmyNGj%2BwHIMCV0S4TLeduiLt8tcoeZXZSX7neCFC8NI3LJmgEMvGv1oJjlw61rW915TUA0SzriaJnkvZhFvNr9MuGbteJkupamRnysZip4bto0o8gURzhar10mMKq2c6k7VSHDJhnD%2Fnpzqh7qyI%2BYGP2GuGACQ2RoI1oyoHFpKhF7H5gEvxHgDePVs%2B83HZXRCBnRNAnElTlo6gCJDzt8o2lWLekNaqunJIyHwxjutqSaQkn2bLewVXBBx9W7VKOVGoVZlQq0rq%2FC2BdFANeM5mwJE0Kl5xw4baRmI7O7c49vmHGwSsKVNR8ApjbcRc7366tfMMmFwtEGOqUBReATHrRXcpqansUI5o7B5fX1YntUv1c2EPM4xjlbN65DuMJ8pqK7pVfQnp4BJguzhG9SPs8%2BVnlby0Q9ylFGR7FsGZpfyTBNjAvc6fU9wyG7tgqU0JIhepHQpdnVn7g%2FMMy43091nCVpEI%2BuEkR1QEorrvHIjqM%2BRu3IDgy43rlUf8xJxJ7UOO0gFnJFBes3CIfErn1Rdb6s3Yj%2B3nJS4m1M1DrS&X-Amz-Signature=7e7c07fe1402435a59cab1fe2d9c16e2ee56c7aa4fadbd8271d5aa1d64e251bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
