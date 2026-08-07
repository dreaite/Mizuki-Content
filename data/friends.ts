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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UL4EW2V%2F20260807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260807T090029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICo9eiOXkRDXuS9ES3Mzr2N2TAM087QIsVR4DTmoRGcKAiAwDDtkCZLD%2FX5BGT8iBuliUS3ZLTu34uZX3G4tbOhC8yr%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIMbilQvx3gz2vU61rQKtwDAf3FXTEM3t3m8Y6chJxYpa7uMRObcndBi03wGPSOZlot6mvo7T1UgoDHgHZgsg7Db9neqCMes45HhZpHfErUTNj1920P%2FxXqCHlZXXWRObsiESi5BJ8OIPPsbAAW0OPXOH5RxUVVIWFMOwwN9OQl5wq6arwOEerSZ56Bm1VrEOqZaHVDECHa3nePWnZbe2diN6wMGyE64rKNYiFa4bKMm%2BQAeun%2FIhGCND8ckfVZ%2F6Rwe1%2Ft%2BXYzdon8sx2jo6emQKJp%2BlTyze5w7Ait4weggt8cghz7kWpoISuxXcG0f3J2JKqaIKJZE%2FVv%2BqS%2F1mJoNOGDM%2Fcuq%2FVQ3OVjziHei9Qg%2BWs%2FqQwF0KqsHlNUkyk%2F%2F6CMdPg8VwxSgfzni4%2ByFaP0bdeTRaR4DMktbhQ8VdxfbrcAE4YXA4ocaSQtfSPnOgZ6f6HKl2XvGWgL485a1gssrUluoUOWs1yIcJn44g8mQ4KNk0O91aejYhUOtyF%2FgFuI3TQFxHhoItAvrWLR2bHmXSL0HWc5T35lUKNOO4xHdCoVeGJ4uiWcLAg0NocPvLrNRxrKrcW7aIec%2B8TR16p60Z%2Fbw2wKzhrHsPg9feFMqPo9z099NqRjsi6KOkQQVUfEc9jpkIicRrow%2Fo3W0wY6pgFDey75P8Mvrjq2wzhqyI2vxZhc4Elwa3BG3b5Se7sFF3HW72pHzL8KILH7ot5sXHnLKfMr5g%2FlvPyhmyPs1md4JI5b%2FpXSzgF9MWf%2Bp5o0HuU5TaXUxGA1rXgeJU90TtSRJ6K%2FHOCtDCxGGI6hr%2BCHbtH9Mh84YQwrPv3hdwBxpeuG3VHlgFmMFJfw3qAf2M15YihJ3TiJakHCnVqsGsDxlLqsl1yE&X-Amz-Signature=bafff30f5f1014da9845608cfd0dd82a39416c268c119ede487a290f7d5838ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
