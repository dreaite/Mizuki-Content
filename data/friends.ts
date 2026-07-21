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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BLTIHBU%2F20260721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260721T092729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyQau45NhBkLPJXMYOUSnnQhrthzNviBcJpZT1cmdrCAIgS8%2FH2RkvkyqyMu5Ro2dkea2xVOcfL86sm23nf%2FfPC9IqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP%2BU2L3%2BIITbrKljNircA8UweE3vf1e3LOW6KFCzgKgWmqHVoRkOFLEzvP4uX%2FgVKF6BfMMp8lhnabwyeq5q46zGyP4nKKbdnf41yVYo9rGo2ryhDC%2FK0MyUKcw3sYxHXoXgD%2BvL3xupO7HRqY12JOsdw75fEYhBhj8NnT2s0bAq3M4dpQE9M11WEv4ZeIblh25%2FNFrtmIhxJCvLabyn1BA7cx%2BlM8IbIZRchYLU3fNtGdeEkXjlkZlKdz%2F%2BBgaaT4fwkztADys4%2FzgKi8ntPJb%2B67584wqE65IvuYEtSkfDkTR1iixAdgnQy%2FxGRkJpeAew9apyHlkHaCIdHcOC%2BPYxlLHwZmNjcQvPELMwK8za%2F269A6b%2B8oP5iYdDmB%2Fu4MFwZxlKl%2BfAEuT15q2eyBPGi3skie3pVvH2Y4sNsc23Eu5hkVNiGGPSx52DF%2BqVoEh7ZgHpDftvWDfoX%2BqH3eXpVDWEfGxYB2Ja6ShBU%2FNphos8FJ6Flz%2F0xgTdRweTxNM8iFbXrLK86QHIS1aCbDSXRSq9CcCKJASpZelIrPuCIDIqdv2gNd16P9EyuH5aJ1qDTSMMWtQVRT3hxOqYODG3B7Dns147Ym0mcgfXfueC7MPmo3blHphBBgqcVqWa2I15U3oDuaxd7CDJMM%2Fd%2FNIGOqUBQ%2BUhX3gBb0wGHqyfgogoahFGxZVu6CtIRnjIu2IrIse4kACO1ILxbyh55Zup4RWzXW6JXkRF38CT%2BvN5oUO2fisnN32Ha%2BHnRuaAGCsWToHjtFCODD6vf%2FuY1WB5qUqpKh5jWFbg0EN35B4j%2BIXG2sCYvONN5%2FWa5x%2FpFrh1imrm08przSFEexPRVXlAIN3hDF85uwQlN2holDDf2VqAcxdPf0yu&X-Amz-Signature=81f494debc7ce7fcccd54e7adaafb012129a09f9d24e936f29d3645a72e20c90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
