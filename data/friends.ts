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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTAKMCBX%2F20260815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260815T172051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIF8FhAFsMxSKUZ%2FfX1ZRZHnSOn7KwPmREh8ujtdSsYT2AiEAst%2BRTwC25niuahMMQZ1idEr4iBFPhfAMsH2Vwm45Fmoq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDJ7OH0nTB%2FtOFNvvcCrcAyewWdxZMC%2FhUaUCGrTvfwPdl32V6bTJl6H%2BgvYC7oktC2JCBKBsryrwgd4T0m5d21Ywrc9Svrn4kuJFyKsTGpzv%2BoMw6U2awDO0BNxkjbWKHaYr7%2FYiMON0RYdsp%2FgD9L1MRUiJk9LojnmddFhYfy4%2BXWQ21F4AgNwCY61%2FwRkhMN2ruJIgMdwiywIL2VoEAWuF5fdd71KqUBhpWO91J%2FQV%2BLN0dBfkcccqC4v7w474tS2iL8VpEjhNA%2BNNaxH8BYAz5cL91GSvRlTub8Fqqb514ausNDxyO08HJCvwXbobdt6jUi3gfAwioG3lS%2FLF23t%2FnjaWl7GF5UnZ%2FnzB9%2FY%2BchUe3KxJxWyJyoPdTaPFAkhJAlokcYyYro%2BcC%2FSfiq4VyO8BfppaRHvxafyU5W8FrsxQ9xGWnwfDMCm0%2BHiY6cgdzCKHFnZ51sTMySHL5%2BxC%2BckSSUWXUoiTcdGEE6b%2F96LiDGzNU5QAylkoc26EYsSPYDYyDWGeMb1HR7PIMyVGz7%2BOpDS1rQ%2FTnpdRb4cRFFfZBLqZQiB5mTQMD5I6KOJ4WG%2BTu5o9bvhhhrcD9%2F8eRTxox61gisae35LrFyenNjqTex5UhkRlxincxJXFNbd1frGDlBWTeGkoMO2dgdQGOqUB5tERx%2B9XT49oa4azG2U1ntu7maMzoI6%2F7zs9tv4QFIcJ1yMq%2Fq8703YRi9%2BvWulR7YafuIPSTMMzxHFUqSIlB4geSWN6IXO9eGs2apR5rsn3%2FYq6KSIBZptHog2oD0hNX%2F5bxLxBnsRsahZfgxjE%2FCPg95X0rDZv%2B7juF9KmFwLoXtcS%2BmBrplaznMD3wxQ5sJYkC50CilUxOiLucN9SWtOI3AHq&X-Amz-Signature=58d574747988106133859a5f7f1db4f0966183761058b36210b4bec87910b8e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
