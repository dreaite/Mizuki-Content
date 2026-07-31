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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672P3LVDP%2F20260731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260731T000332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCe8LEMynBTYsJBfDJVxEcnADireOI%2FNE78MHdQreiG%2BwIgQzHeBqZBEcZtvwvApFpjjQ0L6l2JVx5VoG1a6pq4CF0qiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH7%2Bf5%2FEiB0CerTGdSrcA5SQquUfy6bLrKHbyDP%2FoGm%2BpXZWEXSWkv3ctJTkQzQjr%2B%2Bib%2F1DNB3mOgbfU0wTe64E%2BR6nAuNT6iVElSiEwZT2Ge8YzpplI%2B7c7ochDprxXVsVBt1ka50CkwERSKK0SZaSajh4VEnTyl%2BF6oy5mz2zsa1W1VrqIDAVD0v7uqeTwaKXoZNOWv2RvVwt1UhuqtmVNoM6hflqhUitNPg8vCZvxRyRar6m%2F0vsJS6VlIqN8AUn%2ByjOY3ZIx9SqVneurejBdijhAQDDiBAAKxcwoyc07EyP%2BdAI1VCN3LH0dkpsGmou%2FehjXlvWgoP5LyN6L2mvz6Ir71eB8FkTXDwVRYEmbhaBgj4MJgHVsrdTVKEJc9M4uSC66s3fPngZp6iPkPo7XW5sCO4m9Fy7p9jXvPS%2BxY%2Bjq98ikZ72ibjFKRBl%2BszI9qw70jYpn7Le3r%2BlmzfF6m7sl94oDpcQ975whEBjBnI%2FZD2m6%2BdIVmmBpAncd4syuQEJB6w2gzEYOoMSbsi7%2FGZQoHR1yx6paQI2Mj1LL8hSuMqCucNiLODvUb1U8avKYGjk8Fk7W8mCvzGQAoPvV8wFaWV%2FsC28zaHKZ%2F5UipeiLZsRIUJjKlfXMcYbNiJ2pkVbv2AGXsZ6MOjDr9MGOqUBDb6gv7E%2FIBhb66HGs8c1VnIPq7KP2j%2BahRrTsGcBUMqxUvJqIlwPw7M31XTAD8OaRqJigEYeHggfAiHRLIfhNmQroHz9sKTwJPSV2mVJaL%2FBm1bLltMhyOZBQDJJ79gHu8%2F2Ri00jWLFFJJS4Tg4ZqbEulnKw2we0Ye40%2FLlJ3M1swh1MkQe%2FXbW3qP0FA0WNuCWijqZrd4lvSanZLZCbPJR5ga5&X-Amz-Signature=c318268ad9b8edd1b0b7256c8775e6ccbb56907802167d12f60f727f54c63310&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
