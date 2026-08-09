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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPRUHLMF%2F20260809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260809T050602Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICbpIt34hesGP2%2BzKZ4MD%2F7kwbQUtkseFG1VqV9nbu9rAiEA4LvAols9WrPdIbnYAW%2B4v6PNZnnVNPHIWBe0%2B2WPGVwq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDOUtPP0g1WVXp51kWSrcA1H25IIkeOKzjTEk6lvn6dn07rIEc8RP0NioLGFzoAFxNs50cH0OhIGQa4d7MfM5T84UVsX9KQ3NlyQ2jgqsYi1b3Wbw3o88YuUUh4lqbG2RNIQN4T6eJUJXkwXFHt4fICzMmmYfszwlO%2BhtRNOO3qViiP7P8qkMCcuSVpGl0IkMz%2BUYU0eivoCDx8VdGQJNaVymCwk5PwOuXQLilcEBiZoP5GTpAdsob94Q1JGV3s75UH1u2wTXnHvm8HXsAgW4wBdbbP%2BoMB3pmm3ug9LEgI8j2zLdekGbeZ6xILj3LHaPm3Q01mcfVcuOrbabdTxJD7ACzXXwdkZgZN7c%2F7bDS0K5XFqbg%2FMyMPwvrSQlWlyQk6ntjsTuE6PmOURxxOjgbwYLVNhDwqa8UZXZxBJ3DDf%2FEQ2KCd8IgJLYI%2BVBkFmM%2BfCEquROAPz90WG7R4i2OymMY%2B8tRTNIgBGEC4tM7eKPva42eg3uOIyctCqupEdAZSOoJv2V7XORmoo1cSocn6q%2B4jMpCPkEDwWeAnvWp0395C4B8nbg%2BdBrRdu87JjwxtylpSC2etOpygYVgZeRd6jBEC2PZD1FJkqFwja1veTC1VrazcKs7o3KdwPQ5lfe8%2F9px1VjOtpyuxCDMMv539MGOqUBgGiJRZaGyhoWXKWpnDYzI%2B7heVK%2BtpGBLhaq%2Fjta44bQ9TfdDN8GTDALBnnq%2B5bQFo3kB2fkUqVoXKKREfHLON2gLc7%2BHVX0kxXxYWbT0wjnhOB5l72khWRdlOzUSAWwOiTdqYlfvoK9U93dQFKmwPmLPByXHXM0czHmg70ApWGaJz9h7zvtxsqsth5vQZ91mJQ0wDdhtdB52cgmp4C%2B52f1UXMo&X-Amz-Signature=30525b482a0bec128ae84c6c913bdfa456a68b092f7d0b77204ec510384ec53f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
