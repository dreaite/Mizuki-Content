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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WV6N6QCH%2F20260814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260814T114401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJGMEQCIFkc7X8tlt2O3YHX32eIZ5Xa%2BxDcPPSAt8uv3eHO8t6KAiBHOYQ%2Bz4gBEteZT461U74mA8mEZAqOjRlcBZfcD7nsWyqIBAj8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUga8nTJw4nMYdriSKtwDNBwetQSQcj96BJiFFluYLdEa34tTO8TFYZtWy9PFpFnYMoB5Fh83dEEKY2ZZrlik8V35SjZpUKXjsjnojOuLZ%2BgLzViNCTzAIaBN8HKTy72vopK0UQqD%2BbpCm2R%2BYvNedSRHRlT1b935PKxaUbVf9%2FdTa%2BghDURfybxltxIByfBOxatvARJK3InE0wVnRlPYfae7M%2Bxw2V2V2ScsGen1EMKR5%2BGJsQzutFjfxI5GmUVDZ65K%2FckGSDtKU%2BKxitEp70LR2dKz7o2ffD1cXx786xJwXM%2BzGjjgnNCeZrSW5zzc5q0fuju5E14W%2FA2UAvGEIFHCn5HUkUag%2BjNN2OM3muiOOB6QXmS2YqkIvwU6ivm6s8Hj%2Bj2HTbHQ%2FBOcRsvdXRtzqwFz0c%2B6lnVrp%2B4iU8EIWNFow1zoLUxht4sfynNK4XOvFgNQi%2Bi8FH5zLhcmBzl7wA1AsJPk83YCZ3%2BA6TrOZNed7qR%2B0svam6METKuS%2Fhsq1mPbz35oAyr1XcEeAxyb85ivkxT7nnbDLLnWactOebarUObgTLCtC8ees4oOvUjGU5eFtB9AKDRqDomMlqoauJuZQ50xvDbIm%2FiGcDac9pxZnFc3EHcDUqsTVNECUc1f7ZQaZ3LAot8wle370wY6pgEnmZDCDY8GOMxQ1rxYIPvo3gUrqDfUhmsiW50Z5IZ3IojNat%2BEcO0rFldgsgMsDlJn%2Fvzg3FVU%2BEjTA3iJ%2BfzVfPC1GSEtcIwXX1Qhhop1y9z2We051Zw29cHWTnHEFr44EpV6O1crhoRr1JmiR7b9pChPI1A%2BpEjpM272sZdQw9XQWDZ2nSaUeCX7DoOS9zUWGX9mnEc5t7XNGXlvw1iglL5nF4mN&X-Amz-Signature=6833631a38cefbf80bd5ef080e02e3173eb9a645d5b8b3bbdacd7407183c5fbd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
