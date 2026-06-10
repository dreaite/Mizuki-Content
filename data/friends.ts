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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDYQATEE%2F20260610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260610T135434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQDu1sKVAB%2BCJDiDAs%2F%2BnXdjSBCFVJWc2u3Ipobnl9TCrAIhAICeCN%2FfWgJq0x5Xphlin%2B1X4epJRAmc1KDQ%2FyBjfnmWKogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy2KFhHPLVHeFaVvOMq3AMA%2BG3Kd6j2gzHpFXk5y49%2FWCCzeTnAg%2FyMofRh%2F7GNXapkuxn%2FIXci37UieHOax7brV2%2FcO%2FuKEc2clYNH2PfVh1Zb2VUky%2B5CRPX%2B5TcQUVZx7FYdaI%2BOYTdaa%2Bppf6VkaXQbZLTzYLzdsNCXBBLk%2BnMpvvsidvHEjM%2F7qXNCvx5LmQ%2BMA6PCVSHUYmz6dmuH1%2FdiHR8BmdEYu%2FJFeVSN3DnIvjunu2bTfD7yywVtPY5aBklTHbOfNIyOrjcwmJSf0vzr2GmbQcCoshpu95LZgmj%2BUQy6nMYXwoxw3T0nGk6TUBFCNG0kUTNCikzwOi%2FKfL0H6liCqJ75Ld7OKVwKoGojB2UXeIN9GVrjpx%2Bbxr46vmd6jI6abvaHLhhWs%2BYwfKQmhJAbI%2BjF2x3TQH%2FnRcEzOdFpyTDmDcVG%2BMUhMXyM%2BTALbzPJTDX7S191s54e67KJEMDOmp56UhDPBoqq7TjHAIwcSNnAV6P3ukRBmsFSwCHsqk1UXGVbVnQcUjOczrn4fqOJ4FlxiKKmbnwRau5EYTv4hVIj%2FgbjKeA7MyrG%2F54eolI3ME5zjk1cM%2By%2BAnW2snddxipaoaUS5djG17E6iCmg18IDfqLD9SzTrulbuBaHpmbyB%2FjQGjCrwqXRBjqkAfXfSs6seTTAWob5STrMrqNoHvcfpCZp%2BS2FFZh0c3S1CC6wsC1ctpa47vQQmOvy6LuzB6wey%2Ftynvu%2BrEoDIkVo%2BI86nyvRbeXbkRuK73YOM%2BINrfCmNHdTUy5KeZnH87nSVtQzEkQXRkIgXwJgaFtHeXpOtu5yVyyg69g0BVB1se0Crf5145esQBut0LQ%2BQR6rZ7zeCZy7q%2B2Y8IaqKCqwDGJI&X-Amz-Signature=e16529f58fab7da47e3663dd2af2306805a64a4c42019ffcae1b5f4cd9a7eba9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
