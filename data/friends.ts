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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNGKCR35%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T161045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJGMEQCIHksUssEINLVETi5tekzCAWhfphwNZhBeDyMdTsXLr21AiBcXg2Ttj%2Bd1b2v316N6EU%2BD8GdAnqMDzi7eEzGuzeCgyr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMDkClTmar5KciRHuYKtwDvHFEkAdYG1vuexfsUXgN%2BxQNsQTr6Flod1am%2FgzuDNz8aiH%2FAT3c%2BLsSMzQp5VK9XYCo8IsSGYjvtCGy9b4%2FObfyxKdHvBL9O24Ppm%2FLDMbiiJc78j7q6j5AGKkKceC5F9FBlqUyc4ybs6BmcKwFMf%2BRE6DAcUpFtN2D0wxyX2HdQ5WURn2%2BYeyAgsKNZOsv1kXnhCjDKAaKZBbFAf1fGjTyj2s%2Fi%2FRZw0k84%2BSuOwkUlJzuGqhwm219o04AEw0Ma6eQlgIHBH25Lq81b3QBs3qnn0x4hfIlcgyF3oznp9E%2FBcmThr5m3%2B1nX6IJCVl5zsdfEf4BXXJMWZ5qj%2FUXBBkN2B%2B9Z52rPSYpA5SzVFflJTQrF2S0wiktHRWuK%2F6J5McQeZk1pFy%2FOIg077%2FNCzrzdDeDZlNezHn5B%2BUkv9sH0Ld3R%2FTd8Ye418q6WHxGP%2BlQKULzFFxCqH6darprtBG2Ko7BQ9rmYkLgLuFkKjxMfo4JwcFXTgHPn4xKRWHguKWrmC%2FQCG4ggjhdFHf5IewhaBQQH%2F9BICkgXkJLUh5wBJwJYKoG%2FXy7BqhSsYq1Xn0QS45hzarKl%2BmYC%2Fo3Zj9B2NsNi9SPAl2lowIzuAPx34vWIpA%2BuVD9Xf4wxfWp0gY6pgHGRYl%2BDJkm2Gnmln4wn1wT0pjU8YBA9R4I1QT8psR20pBhdm93%2F%2FPHrSko35Q71ydA%2FNJbF3DFPpymZo0dMXTurXbf8Q87OJBiXRklB%2F5iSugzSuNQgFvJGUYLef5JJGbcyeIq%2FWhHrw1Pl24ax%2FG8cLGOs%2FaMLfmgYfDo3ciPbBiamzmV2KuIFbx%2BxGcOm4%2BxAtazLa8K00n8k%2Ft8vmdsbJdJOgvN&X-Amz-Signature=b5f0f9324cf33f0548e2ad2cac434c2b4e018287323fb16ae8c3ac744be70314&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
