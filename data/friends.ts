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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7WG2GCG%2F20260815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260815T092650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJIMEYCIQD5rdIQfBGPhPq4x0%2F5dojpbwmaaDTMVO50xBEhEkFdKgIhAIqZPMTlqVNInSDZkSjMTQH2iBNLuwVwsXxXBIOjNsNsKv8DCBEQABoMNjM3NDIzMTgzODA1IgwYwdX1wt0Vd7K%2B7PIq3ANQUjZ6kTT2O61geSRzmjkuJ286r6S2wm3mWkbTxYG50aROT6aH%2FYLtDQidr25UcGb2D54M%2FPw6oQzJ4xkljwhUDBeR0afSJXS%2BPuqpfaUP5OnT6vnoBLprRk4xWUAyASPvqg2fj13amgB59SbZ3k%2BVWL56tJJhVGpCCvGh0HTcYMo3HbaSN%2FB5c%2FoJDp%2FJgNsIAl1Yk6KFIPU02WebFqC5aC%2BL%2FboPyJIQ0NtYOuUIcsviB8%2FNObUJsSOkU6c1AQr%2BAMOofDzjUle0y1VvFMkjRJpCoNNqSz3anLHlV9DGqRX1gaN3uYtz7gXT%2Bs78mFpe2DAc%2FN%2F1MFmaaBn6hY9utj2DizZDeqalZ8eXXst5Yarb8tdb8gLpsBxVkWddRp3ldBfECFRUfH6SdGPc3MKiv%2F%2BzhbkUSB7QPWhvsD%2FrdKEqEiiLJmqereRUOZ%2BGJEEpfiqY0l%2BeYpGG4owXdZA7lJHSWHCZtaddYFz2dDeYbmuP09DiwLSg%2BCH5fdkA3%2BWxTqgcI1exz5N2i3X5jvBEbYZfmapKlnfRW3iW5MQUdrh3WVLnP0uQOf83WR7MrV1Av68l3NDXbK%2BcntrHfGXgNC6MwKHuzV6Pn%2B36PhFDwe73xIQa6ct9%2F5S95DDiuIDUBjqkARB39DRmDV2H3oF0DsS%2FTUEKb2V7EEza1ZKJ3UMhr6Z5Zf7cQwlm9vY9oSwpOfBh0N%2BX87tqrCloB9qroxx1yycxDRSzD%2F%2FC8zUsAG5b%2BDfKHtMgbZRccMUVeKfN9WgwC5YW82An7ykIuPoKEk%2B93kmxHt%2Fng2JmWybCt%2FWH%2BJmH8opbl1F5WZxFIp5qT%2FimoaogyUGbP1L4t4y%2FipbrvPaV6tAA&X-Amz-Signature=77fe456c6a4b3150df0cf9f0087e89fac524b5ad78c81fd126891d298c3f6682&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
