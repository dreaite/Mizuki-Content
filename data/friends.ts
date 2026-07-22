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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWWONHRH%2F20260722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260722T092713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIEK6ZhWqjhaalDdXTMUuFlLAkSeboAt4Kl4eib0abfspAiBr8P5I4t7vUxAEtsFARLY0QdoexIVmGeHvNG2geFUxAiqIBAjS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvOFp4XCMvmqK6yQAKtwDNEcHrqSLSV8j2GtsZ9NbHeOy0bzgRKfpHVIyJf2HgO91yj1Avb9acU2BH1STCxW0Quz9zFhmus0ZfKDb6NHz2NNBUe85D9NxUheyEAhmQ%2BpDOsGNouOi1u02Vq6dBg9j9xbrTIUw9lhK%2Bhek%2FufceOz8Xhoc5akVvXY2cuYt8ocYlu8upAq%2Byl3yj%2B8TQgBiHDXGUM%2BzHhZ%2BydrwBGRnziTKa1%2F6WTy2u6ax%2FMyG%2Bwa25oT9GqjX40O9NTH6BBC2xHrkQlsNr4P%2BJYsIoKJ%2BIMa%2BW41Z5MRS6ZiiOmACbI14Fk0SDwfC%2BditCrXO9GjKNAX0zMvS6vCinVt%2Bsj8LZM34UVlMi9PSSs3dVFkgKX8EyZAFJOT0kLkL1GYaPZ4Z7ymkaWz%2FoEekqbMK9lWXU0c5CORemCj5P2V0CgwtggAd48qC2TNbwC%2F048%2FYXzb2a8qde5FyeeQdSCyrqAreZgfBz2loY5Tn93IMEBhiqG7TOe1rFVwg8%2BqFPck9rIx4kDm7eqcU2%2Bh0FejqD%2FBNKPL0%2FTNYfR8BS%2BdEuYef5MenrnRFX0bheFLmES21XpprBHmNTwpqDz8J5X%2BHmcRrMGvO3v0Kp0MEZyJPj%2Bp3Chn4oq7RLJRv74qfjuIwloyC0wY6pgH7QCTYRtW2Ae%2FpUDM3444qfblX01LHcVaHmtDXAZqfCLwxcZu2BocCJaNMsVz7a2fDjhsOJOP0rSACcRfoaHjpJkFifRM5YG7mD%2Fhsc0g4LTWnqlTutdgi7PPi0DUQWEIhxRTvVKcfDSsLYEnhiu%2BL7RtYeoLth99bZvG7PaXhFRyrTd4C2wOh%2B31DhZCRPp4cJoDvpCBb0%2BIDgDE6gcGe1N%2FqTPsI&X-Amz-Signature=3082d0e9858efe984c616ff7ac43ca2e956df0af59ac603e1ab61028d5392299&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
