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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4IMUTBP%2F20260701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260701T123437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQD1KfohpvPq%2BjGNeRQhuxcXaYsIl40YHO9HX3zYNZMLNAIhALHyj3XQjA22JINGlPhV%2F6fQTDiYZtQQpKNz6Svqyf4PKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxKW%2BvpayAQqnTZj%2B0q3APE%2FitVBVixjBMYQfk2EcqRd0KREsEOZKdh%2FTA0A8bx9MStErqeEc8Yjy%2FF%2FmwCOH%2Fn9IICI%2BkGDbUIn%2FKHR%2B%2FUE7N677JXN22x%2BApSFGEi98Lb%2FlL9o7gBATqZQ3nP0RVLxhLzPJe7sCTBfklTSSOvVYmJUmrbB01Oc26kZJTKub3IS4IUeO1OynWwoKHOGL4MSgrCllcU7CjEiH7aiidhwlpYc8Twe%2FsnZeo1YHAQ7tLM21B70AcADk0LUrLa%2Bd7bz%2BwLLqmBILQ68LhEH4IbRgfgZmBI3bWpWhBsZY0%2BoBc4yQJqoJhRc%2FwFoC%2FdORcrUTCcF6E9oOUru%2BDFT6Y6rlkcwBCLDwQfVxGA%2FAXUkZkpPaAJ0HIUhQLHYw2vqKmLLVdkhq9GOb4bIq%2BBcmtlaCMyRID3IIwHr%2BU82ptnOW%2Bf4Ya66YLyYMzp7ITv2ByQytFzfiBzC9eQeaISqiOQ47UiRC%2F431e3uxt%2FQSCi5w%2FmnJo3OM7VSVVXftssVUYfwoZCwKoG0jFUvey%2FZc2xlK7cQV4aiwGnJvOXAmlL422HNrwv8YDDKC92phYt6pswcyxFNapfuuAYfr85lRdqzfIboxA0cwI1nKCBwsY6ygFNaXaPLvdTn2qMCzCuopPSBjqkAbNBdITj5LFatU9qU9ctkhNIxWyKUmb%2FLZKegMNKMEGHLDdH4MusHIJ5HMxqo2EWRm55rzsoiug8O%2BXA%2FuhfwYeQGkUeSxRFFq5pODiF8jMr6zCzb0JyK%2FoM2%2FQt9hgTcoPcD2BWOny5KRQiyLLkCCOSnx6%2BnlOCQAypuaeQ%2BwkdD4WVnGmiKxW0IF4%2B2TJ4wPLJJZjt3beULtbKn6lw0m%2BwxC1u&X-Amz-Signature=712458cccc18bc0d9688717e2425e9980b7d19ffc051348d2a876c56b388887c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
