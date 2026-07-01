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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KANZMI4%2F20260701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260701T154316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCICAD1bu41mQOeHsHlpdloHSJ6EL064Fq%2FUk%2FHvw8nPQ8AiEAqu81IvY6mNP8739%2BoClCKM%2FfbtpEYncQqAmLzmeKD0sqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHm2vsqcDMDjd0rVJyrcA9rro1MYeegZ%2F2fkNWyvA4iJu3UAgX9%2BhoieWGjQBiIoEwpsw4PQkmcZo6TEBeB7b5tfR%2FXpy%2BLl2oiF0rDKJBLYazT%2BPp%2B%2FjU3yCbTv%2B9agZ6mrWhbNnoQEKMYPeoNF7Bjp2%2FbaQCJztBz61eP0G75v%2FaNmFi93aUApN5QRCfY3MAvEARcup%2BA%2BeU9HyglYA9lUfn9dytkPobVI4Hq52%2FTHAexA4wu1ol0i03Q13abzbq0rJQRZ8bnq7aveGVofHigi%2FmVX1SigPqynhdjjLLZhU0Fk6nTWb%2BZOERO0Lej5gl9q0m7gWRqsbPWOHE6H%2BdMCEHKdhNJxSKCz%2BEq0Zsl9otc6ukLn6KOoy8isdO6vS7FXa6Qah0xmxaM9WD3gjuYYxbcDUhJz4%2FScVJLoeQwQyAopC3%2BST4XJWnu8ZMuDWHS9CZIAui6u%2F6fBUzR%2BdhUZJrYEWnEVO6KlyGVCO0c%2F1%2BfmFQMMcjNyXOlHlsEk8rRut8F7GoTzsE5IP2Gwdm8yAGLyGV2T%2BE5RA8dL3LDOWj6XHj1z1ocTc0MU4HSM%2FcLzShH%2F5CnVy%2F1RvRUlVCT65fRXXMDlQqx12R0W6L65XhW8CrfvWrSw6BY2%2BlI1RvjZu5H1CmBfHzk2MOXGlNIGOqUBHVytigfDAOLWxsR3XPNKSzSBUYIeOpuLjWTmt40E%2Fa0P%2FP2hPN%2FsvEv%2Fp%2FFr18UP2Sp3QmOqA%2F1zy1gdoudIZwJKhdAxEnavx8KDGu8V6hBfZBSivCAexou9WMY3jxlpLZ8JYsAdiQ%2Fv%2FWsSX9iUqGJ8GDUGS1pW5nIjyrekBshu1SqsIuh0KG13%2FIL1WDbrS5FQgrd1OymHR7pkyHuNo7vyVUMd&X-Amz-Signature=ae0ec22f522a3dfb530775c07d60aa39fc949f3c21ba5c3e4252e72e6d682151&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
