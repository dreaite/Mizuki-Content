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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDZB3MSI%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T220309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIE8Gp89fRr5okQedaox5B8lkJ0CcWwtY5fpm29ofqC0zAiEApnp9qXL0vB1prB44e1CzLFXBtqxHHzFO2OVXfYxx%2F8Yq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDFspxRTaBV4ovVhmySrcA%2BnxMNK9C7ozj7mwu%2F2GsHmdxnHDbCVjcRqVGRMYRVBHixZp8%2BAlk82sXTON4NsDb2cOfhRdxXLxHc86ba8V0778oIp39PpfEG77ITWQLwRqhH0ILmmiVD6n27TSXZsZtkKmT6WGoTuivEikfwtehavPwaQY1%2F2x31Em681WpoLx8KzHONkikWtcdN2uNP24CkzswByyP6qWR2erHMVktSy1rAgjDPOvhOvu4Fv4HiK36mqESwze0QbwdsQx8QQSoVfNDOWi2XlhLqluNsU2S6TLYUxmDHQPyDrI8Ubl08aW%2FVeEmS%2FnvJ6ZrLzlSwcFFje5kzPRtJoYvxKJkSbowbHAiguAgfeV8XV6WpY1S3VUQLaDtvCUTpQfDQGxVQP2eKtojlp1z4qFZ59vYfUoo6RlSQ7RubqFF7xDKkkdAzcLYrbFIfOcOQ5DvmKsJDoVITBm1595%2Be7q6yf9gw0M2YPFLB3CkTwO9GwXM1%2FpDb53TWhb1CmCUlDaUsJuLMGyNgGiivuHYzh4%2FvtV1j1zSgPlRcjp8xvv9TEXcQ7wrUQr0Uy4ddjV3Q0fRfM71LQJUcMjFyPLf5S9ZsnTTwdBMKXmptzC0n%2B%2F8AdP8RjhBCOADjiSlfAFchlI1Ce6ML2Bq9IGOqUBI7TkHFJ%2Bh%2BP7nhAdUcjLKuYy%2BUQrvpS4UvLgOwu7%2BAIb%2BV9CYZgLKeKlzHhDBz3eQhvSEKMfUFRR3xqDz2OpeU80i%2BQZLE5lCujQ3A%2Bn868ZoAVTxHNKpWlwWjqBsub9bcjRyjGyh2V4zJ2X31fXd30J9vZXdXiTMler3sueozZuAq%2BWMjWTby4lYRoFydmGs13YrR5PM8NjWYZCfcsbMjpAYJv5&X-Amz-Signature=33b67e807bb0a1e8baf6da991b9c19ea1b077dafb6c310c8113d36a387a67f08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
