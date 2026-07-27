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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEQO7UAI%2F20260727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260727T000054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJGMEQCIHRxbj5NfikDJAsKRznqqECxI%2FrRvb0fpZB54uVaid%2FpAiAe3XpvNmTbXuodm3e3bwKXV28RiHOGA8GLgSvbmZD40Sr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMrVRVILvzHkPeuLlyKtwDfSC4C8rjNXO6vY4BfcJuDl478FMm5ImQamQwBw28%2BFPcgxmgRHPTxnRaJOYbYlQUrCil4cGHnkATKU2tRyYD6DlTEEDnbeNzrNH87PC%2FM9FPKyMZ%2FlDakcxO6s5ixud8WlHuX8Ljzlf%2FIhhCrEtb6%2FPKxbQ6Ngh6XlnP7xBdtMCvvbpNvpDYigX8to2kBWfJbKhvZfc8ZBm6Be7lGfgT6dgDko%2Ffk%2FBjHAXEDUBLhr%2Bgblj3K4CYzxjKa5ORSqPT%2FoSqImmaVtlPJic777LZeLIq0EAOtcc8frLrlCvZ3bOAGEDFPDJZ6O9CfJAvm7p2DCtS1Tymp88fXEYxJ7kDQUQZBEkWKJXhhRdio4y38H4NGSfEnnOGmV26u0OwiYlkkcxPkgHaqBxafpuLoGRhqG2juqWR%2FFFGfgEb8XWi8o85%2ByVH6sc5uZn0glvcANQcujKikbcxbUXCr2369OgjiJJ7e4H%2FzfOnxmLCNdMWYsZLkG4J%2B%2Fksv%2F%2FKJBo9qhoXuwllPlfhBqtS3ExYXxrt4diINFMxi37KyIU2XLJlANHKud8TN%2FIOnWlAKt3c%2FZg0YGkrgWpydpNYMomLmIBeIAaU8BYnFFtTNzJQ0ED9KnQiBAD94tKVZMRsCtYw96ea0wY6pgEJQMXdn0r%2FeffrUGm5pa36XQOmCZdzJoyVqnsiH0%2BLcSrwng%2Bug%2FI30D%2FTIQVz5IUCEuIhABdwaSDiU4UvtKX2HcfHKVdeOwsGrn8na2VW5KQd%2Fw4iLEXSYpX9Rq8q2nBKFEOPn%2BJoH7woa5QnpKR0i7xIXTgRBp6QPMH%2B4NgtHXeCNR6XXbOP575TZN0jKjYiUKNP8LVh7Y75DW7T9%2BGtNlw85GZM&X-Amz-Signature=2eab359d2db041101f60d3f77c28b1fdc90d4ee916466bec481ad9ed150ebee7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
