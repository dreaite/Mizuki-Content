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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664K5C3BNP%2F20260703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260703T181325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQCM6IO8%2B9i6nTu1Rp33Op5GPWgatvo40fe7FtIc3efnwQIgNMecBct47SfkQHwIZCesluDJHbzu%2BkQKltpaZBs7guoq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDGpKSidgpR9cR2mbOCrcA3uxoDgdNaW%2FHo2YIBe49VWrMA4BzlUicaut2CdSUMCaJGFep2D6zTLDPj0cr27sJM4pf6vrYqvGPnLxqHVOAIJJeHzxdVOvIQH%2FVRaobvWle92hkNUzaXzvOaIfnscMVc6pzM45pyQdyaXSC4NRajguG3aVXNhv9Pjcl8c6isRDOQV4UrkoLgFW7gpd6LhURLId84irvX%2FgvCC2F8gyaG1bxu8dnU4bD9f2XmgQgMZZOgWMze2r35IEHXHXqdEjtYCbcgaBW8YdOrEGjx2y8tvsTOn%2B53ydKyUVsubMKyoyoZValHpbpTjsHYJmm4r5j5UV2%2F714XUXfaqP3I2ANxLoEcMmXHQvqhgc641tA4vdrLyjtY4pNlYBV4QI7hKaorBB%2BrMT%2FgN9ejrBnvffdJlBkntKG%2B92ZT9Ro4tScbW5J6z3j5PwKNVQs4PZbimpCr2M%2FUS8fuV3tZaj9tNaSm27jkYK9w2OL3qdd8%2F%2F1kbl0CJ26JcN2v6ju5xOddE8Qt%2BvXwcWWBdHyakAk1s8iLhFroqoommO5zDHZkObkC6Ye20efOX4gp%2B3zvpEBOiO%2BJYVAFfurQfv6Z9227n0EIiHfKnu3D%2F3Get5qo901tFqNy7oBVlAHYsVsArdMKvan9IGOqUBPYzOU77RhyMNL0PURnZpDNmvw%2FSwHGYGVhgrNgYuG2dFAX2zHW2rB07HguWnT4juyTF9t4Tsag5Fk4q8iPJ6ym77BUdgA4MwtC2sFzve6pXBfWABrw%2FffL2Dr8LTQe%2Fj6zm74izHm6Gg1NQkvidg%2FvmyPAaeSZCK3QLBIN7whbYICWvrKBdwnaNj0DgRdDc5fLGgKI%2FiNrD3P0yqQu8RTO7Qkzta&X-Amz-Signature=fee06a33f1022891a254af05f78a27d01c9b56058f2140f5876f2a5d20074047&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
