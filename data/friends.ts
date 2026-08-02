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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666L2ZA5FE%2F20260802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260802T205650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQC9PULiQ73UC8QxFSovbhADFWS28APA7IjNYVI9lQlX%2BgIhAOPOV02lF5WyMhShbP6Gb3UrcjSu%2BC7XIZ%2BVJ2zXr8%2FNKogECOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxtA1ijSWXvRCEFSaUq3AMPUko2BZThRAN7bNQWCTQ%2BKe1P9hQT0z5l3RjHApyBnjnSVF%2BflSxSI9CcuCByuYPTf%2BQ%2FIAO1cEsT3Xy2fxlf%2F7AzhorXSvkgx6R3VKLUYKvff138bqgkzRVr7PFhlYHdBHZgzj1xHwvwuwqyz0MU6Yl0ntyqWW%2FNMkV%2BZ5yVnm9s6omkY1j%2FRLNZf%2BW1fmQ6Alpcefhyi%2B8y3z%2Band%2FMoGGpM60IdG9t7drut90HnQ6czNPnnzeDQ%2FCn9yejT0kjIKJoo3scN9WUKlaS%2BqyT9tpRTVpENkB7oE7TemNuyiW0Th9gc52CGhVyWrjmMHmODyZWP%2FZKDf4kPaEz6UqVJElPlyylN9GIcpKP51PvuqkxcXXvxZ8I%2BAarq7m2LSdg1cBT2ckvxH%2B13IwrRa%2BpLJ0Z%2BB0lDhSEOcqrrvUTwech4Y2sZIzlHfGFlA%2Fa%2Bin931ipVeBAHmB1KOUgXv6p1CYE0IXTiwGUcSqc4gyhQYyBG6RZGTalx1TRdL7hpcbWPRCQQoyfiT24GZGjcZUh%2B0nsJDATbFxehHin5E%2BmXEIHaqdiJt74TILtdbDfR2%2FGIStQdYfL%2FMvGS2%2BtMdOe2sG1U6xQ8wvdmxRJG1lY%2FcHzwublArZOWvhOrTDozr7TBjqkAUdyhCmy1mu%2F8vDlLmX62OQ1P2mVo4ic%2BUfpVsSdr3x3dOdFsEjLm69VxUw1pSmNYEZdcqnZvO2UdBjIhRepzz7btHG4suzKxW87nZULRnAC1%2By%2BtkmP%2FzjH22Y%2Fl8opXfS92E%2F5DZmAB%2FIVsXCzXzcO6l7u7dPr%2BYG3PXIuNtrO84tAGCPTw8j1pQUYK%2FfqmUquITyr8rkqwF0b4aStwx29R8qn&X-Amz-Signature=e1878937a2c8e5c935dbc02af87a6e637b0f49ec333d4960fa0b5f4106722184&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
