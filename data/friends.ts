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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMVHNQZU%2F20260715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260715T145202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCID4rfjvksms30lRDMJ1RnzVE%2Fr9DbppSCYl%2FO7k2XqirAiBH3O8gyzU29jpMmUN8iipvt9yuoJEhEl%2BZml7nT1gG5yr%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMbRC00t4DuG9uHZgzKtwD4zOyqhzZC%2BZRc7LloqKcQdb5w%2ByLj7YI0lVVpNziwSWYQXfxN5HIt%2FeUEu6xNke6MxIg12O8hePBGbibEUb6f6bwxs7aTkRkDqnrwcYPgB7IlS9Ki%2F0vrV4VG4REtRoyyQ2KNk3t701uIswN344kXR%2FA7Gfa99OW7I%2BM4%2FBpDWnylL%2BvElSYVeNDm3bRSzyXa7FWLtvTmbbF2OqaZErAICXbXZdws7JXH1DYKs81YQAQ3kKHsrTjp1GAFRQxztvO8yap1n1Gbe9MCVazqMCZnnnWVbDAXdehUae1NUSYbD8bUxbCavTkQjMyoyfgCUQoyf1nJvcCRrmKyQEcK3ZWrc0Adx1eKZLdzgBwxpics9b2d87%2FUya89FUi5DkFVXOvE%2F7B2SyrCwFdmjruNpCdu89tbtCtz%2FL3kudmDyvfEVqWGEMEinInnWX7C2Fa5tNYd%2FrjX5WYajKAaErA21VBUY03OK6nQADZ66SdFy8SOeRhxRX46eaPZbtOI5%2B5Fhia1Ik8Wc83S%2BdJO1fTt5uNASfESceprAB%2Bqwl%2BICD3hFRV5Cr7GMY%2BFm%2BIuF0FA9RWldrBaA%2BM%2Fwo8%2BqKTT4ErWEw4O3XZGlEvX48%2B7qG2%2BnlJCEEQqVuPMJRq8sEw4Kje0gY6pgHaIQkRl%2FZJ7cuuWWCehQnYv8QvYTKVH3rQ2klcqLpd56vCHpNBtX1djv%2FH9gtWmX7fwK34p%2Ba9CggH3uHIXCqkOsrzrfjB%2FNlMJ82NdVGG8kra4BoFmHFW5v5fdBQsarRieNqTXeH1UzwiymhHTYc3iJwcgPlcnoqaOQ8fi056QMPpzUI1SJZUxBfxyz27XxK%2BjTyO5RC%2FB8b5dG1J7XTqzcUhK0UL&X-Amz-Signature=85d3258688a1cd5686d0e0905e89f2f67825c07a262e2edd66dd8229017ca5ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
