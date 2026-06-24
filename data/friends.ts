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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KCT63IR%2F20260624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260624T212416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQCQV%2FliU3GSkm%2BvEK0WJCeksO8Kcm47IYqSuYK7hDYd0wIhAPuv5OCru7ILcVGIfIf8WgMzdifc1uNGTHKtsurbOGiqKv8DCDoQABoMNjM3NDIzMTgzODA1IgxFinqflEDB%2FSiSF50q3AOPI%2FmvSNNzNobLa9b1k6AKYPZa97lBC2HG10PhPNM2WojEkdZ%2BWGpcAlcArZvfF3yvEPmftHVVmm9gsigM3l4EG%2BVoQzYiXa%2BVQQyMBKgDSxxIirlHSikz%2BLb3ihhnl47%2Fw2F4R8Tiy9QWZU3eO53mLJ6oXYP%2FFt%2B5glXgYgm7R%2BXLObjrXOrrJZr%2FJjUlujM1fvmmLvjf%2FM48eyapZ%2F7plDlwBEZBJWbp1PtVnZ1obq55kw%2B%2F5YW8YDEVrSqaRsGwhQkofPyDCstIOUDLHa9H4aH9ouKeupr5AAXFb%2BCKq3XPyEtSeJ%2FUlmZO7WG8ILFlHYkXtSHDuhiI7KG4v5YpKKwhVMParfSKo8RQMvjSSVoduwONcW2%2F%2BgLtVnIB6dBC4hKg0IFIR5gr127eAD51uwM5A6lSIXVfujB2o5jlt9SfZEC0O1lLsuVp9nYZre2ofR3L522z7kZwOzet0Uegr1isI2b6l5HBVnTNqHLGWW1KhFLaD%2BFInWCH6q1FrPQWd63A0N3FgiPyMBWV1Jz0iS6wKi57GEWiiiGAKJOrTTd6EiLgcjQiXGFOCE74n%2BAv%2BJAuSSXWN8BQ8mNxHitOcH2BWVntJfVufRtJBS7HIBTa25SlrAAPHMVjyjD3kvDRBjqkAeO0uLvqQ%2FQCvtJ6nO6cnjNWoGKhsnklo3dvxix2WZe%2BLzR3hrXi8U%2BZzjlKiRK5U8Y6ate8nlj1G3DPRkQvm3IjlNu74sbQdazWm4JHFXijDw0eo6BEM%2BfA%2F2YIfObWvLsSXGm3%2Fv7u4xgjI6xZQ8%2FKD8cmjDJNOyGASCF%2FVVkwmR%2FTansrlyaVfMcJGye68Aw7ilDER5%2FciggkOykzU528%2FIte&X-Amz-Signature=c5f7ccae22370fd6f098ae988184c022f246d6ea5726efc0c449fa7040b9ff9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
