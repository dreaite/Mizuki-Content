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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SUA4FWM%2F20260712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260712T235608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJGMEQCICL5q8DJOKZqMvvJe3bx%2BatQzfn4AW9YaytFrP%2BIxC4sAiAjnFv859PCP34ucrOR%2F1c%2FA9FukVRsWT582FmlCZGVJSqIBAjw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuSmOx7iL5hFTH0jQKtwDgR9NZWUpDyO4qCfBw%2BRxu%2BXmQtko5rG7VtclvoFE0zMZO%2Ba7HQ7AroCSAoPz7OCpWv0LhwRhbgjIHADVA2SI7craSVLPuxxK8wvLFZH5bK71cDL8iR2zYoki7wdLSNFoJ%2FeZ8hXTGEsFuVVdju8nIiQiqgu9%2F8V%2BxuKBMspDS3Yb%2F5U2NFnrTIpTVIDlThGdnu0%2F19Vf4KGsTjki8uBDSFp86oD6rVwQoMgKCfBdWP%2Bt9abMwVqb%2B3yoi3nI1SFk17lQM3D9XF14Cs9vHTBRPLjZCr0ZxUHhBp3ysoEcAsfjfx9Ngx41Eu%2FadGlp1V8X%2FuQWz7TEklv89Z8eJGh1zBLhjiWgzA3Jmis8aFsyboE1T%2B%2FcSTI3FlVIaJIqF6nr%2B9moQJWOC5j59BlF2YBRC4zePseIya2INe%2Fkcg5BbidUzGyIlpvpo%2FnGi6a5Bc8cVEZ5mO4Nr2vIvBbJaDyXSGHTqz7XX12VGX4bV4wBSgmwQQl9Hu1gaDtazp3BnqgDSv%2F7sPxcnJ4ss81YK%2FTuIlYu7reWDghuFC8z4wgNycNf4LcW9Epg6lnyGD7Rtyv30C5RlPkAV%2ByqBNXUKjJHs0rQAZsCPBTNgQj92ufARE8IVs32WyS0lo2W2sYw67nQ0gY6pgFodW32aNvzvhtxfLvVvmzN4kyt9sK0jqhQHvshwtN3wJ3WLL4mCI90byZDro7Ru6Dhnkmr1ANH1eETPtW2aZmDtN4kpBm0FYfT%2BVcNZH%2BxJlCMRFxKFEUbn2Q39lXwDjDgKmduo7x9UUKvDaY7EduhtBXwPWWZvA47KF9Yy1BLQWOm0wTC02B2SbqzN2LoXfC3XtBMv6qgwuIPMXS3TSNTvwYdNaMR&X-Amz-Signature=aff4087eea614de0b263600fdb821c26b7eba4da1a6b8cb146db30bdb0d69bee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
