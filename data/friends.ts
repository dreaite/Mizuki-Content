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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7LWEX2W%2F20260729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260729T220539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxXv5FXJ6jT4Ek784ukN%2BVcqXVKHxhs2lX0QycMYA%2FUAIgKglMuqGj63Ma1PcIp%2FN6LnjWzxJ6SzjDbsUzZc4FoQsqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKamYvZe9y82kACVqCrcA%2FW5st3wiCbqi%2F%2F%2B2NTRxD6%2B3cDeF2i7q9S4XQc47unFfxVj5Etxu20E%2F65lEQtKw7U2P368kvFhDDfqoK43XrSGJ8ly4eYwARCB%2B1G8%2Bj6iZEYLAImtTFXobvJuUsrxu69woIrNic%2F%2F5pFPlqGeabr68LlytP3kp%2B9nvziIzeQ97DfJ54m2TL2s1SBVv%2Fu1ATEsW%2B7CsNTAurJ%2FxTiknftO6G%2BR2j2Xmr9fwxRBGh9yLs2qqP9%2FolvlgL6LCe52LSbfj1kwNOkoSJ3HaYbEaHw6jU6ZUz4%2FRchZ8irGDubzXZP6DxN6HY3eZqrHz4wPLkZlzKtAcUAnmcpGwo1JzEGrPk%2Fn%2Fz8nrjL5SfifK4zSU2ohjIjmDgNyJOTJdTUKyZwz%2FSd4eoFtA6QToH3kt7BbD28hC5r4XSo%2Becffs60c8bw%2BZ%2Fx59SJvzMS%2F25%2Bm5VWtRviSSW7MV%2BxFXc49gKhnlT%2BNwaYJNolB8QB6dDJ80LZJ1SBZz3izJOUpJSWWzCgkxm95hPvsBLdM%2FPrhhP0aoN0%2FyKj2dCNxG8e0%2BgnA4vn%2BE3Eb%2BnQpYi1CeCbWPSU6ic8hBlYu%2FYwfUKXDX8ona2%2BfGZbvkMjzkc14WYXksYJiSTGqVV3prpubMPHXqdMGOqUB3pKtc2xB%2B6BJKjRK4F4S8A8lwZ9oqkboEMqP0FnwkyEApFM0WVm9ANVmhc0wZnLZz9Tc81wIXvXLT1NXcoZ%2FfvdmbwG3ZgPoCC%2Fd7l3Gu09c0BAeKAFeKPsvPfIMqtaulq2gTemiInEgKBHo8RT99Lts2AdWDxzclL9w263RxNH%2FAPitThV94Q4N04wFwqnU6KKH46prc9n%2BIP3sjcPo83PHiwa3&X-Amz-Signature=281b1e58862e5b5bbae09a3e01640f582ae2500a570c6cb6c3eef074c474307a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
