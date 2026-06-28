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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5QVQNFO%2F20260628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260628T051829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBFgrDnEZXm2Q3BbhmZOlSa0ZkWStGNsylnEbbFTNDOCAiEA8wU1V%2BkkRo43pQtwjXR2nWf7O2oR8xhHIR6jcnadd90qiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJiZLiCTk3MWNMzsIyrcAykSPhW2Lbgjgh12jKCCNPLO7oVw1Gmmgqb1c9tr2L55rQXgtRhE6FUnX7chTPpJqmt6Wqj2WlXrOlJKpKOcjdWNIedNsgkrOd8fc2VI2ZITe7Yiue7RDo02AtWJ%2BCnoIGh5KWbT10BVOjP5JD%2FZfy9uBziBDrbSqSD5asKDds01zBXRF0l7HpUzSEA11SQhtC8CaT4OJmRQ7J%2B8FvpthKQjUGbPYNIR3lRzirESQ7qqCQn3Z0gDbPgfeMoQEyoPU9toyjruIOi%2FjLSQyAmgzmIuMpvZZwXo2RADAgnHhkHCagC3ZcmlsFPeQFu9Xbun6HnVxQsutuQEIZv7obJXBhawP%2FbAEgBl2WvSlNGm%2FwOMob0rbmcgFDhZVH2A1njAdwZG5hIdqQx1geNhm9k%2FOTlkcEtUW0P0ktHQW7mVN7GNVu%2BtLCa6MPNt3GptOahTfxg3j3thZbfH4bpKSIPUKdfk8RzPdE9doLKLcNXOBaXKyj1SvXl78JNlWJbW1ihsh0BWCtHsLFkSh9E0Ims2OSyg8WfEYUpJ3C5UDGYiA6OcSokBw04PMckeVnyc0Zn1UlOtQT6%2FNlkre8nzzZdGI0Ry8lEPEA2aWP2eLKfjtKmaDnII0S14wXQspwfJMOTMgtIGOqUBJjmkpA2u96zCcyOnc2UmzV%2BZVzcUoBhf2ojw%2B%2Fu8ei3bYvBLfXb%2FjcoWwv15%2F%2Bw78lPqiFcN9Nr6kPiRmVurVXjUfLLLYqNqb6Io2eNh9Lcw8H0FaougULSXl6bBfEPoi2u7XiJ9A2Zv2fFx9uFcRMuh7pfOGUOkeRyijcEgQEbKlCD9Tp9oHsE43WZoZgioNUwoFic%2BSm9oj0p2BP3up01QAUJh&X-Amz-Signature=aa9c7ed49d27d08ebf10264f1c6c9e74c2c8e837a27b19ac366d553746554a17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
