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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664G5LYALI%2F20260702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260702T201950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQDguGqYfDL4ttdi42a3xFZeKajlxCWvjMbjPpzrBAw6OwIgdCSXRU00jtXskSRExCSg5uu%2BYensNoBeMpQ9xQLpnvkqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMya1WhGe9LZa6Ux%2ByrcA70MrHstlkzChDedGgU4V2V%2Boj2IzrrH6qrVfF7CHqVueCx2x2d7%2BRd8N5avr3J4cz2nD8T%2BLRHJ8JItY%2BxpaLzY0j7CB9uJ6Gzq8qV7cn%2BpLR%2BKU9rn0KXaoG0Us7T5VbtnyEVWPDrGwX3KpmEjfk%2FXtLknx0Bll5bC4Hrf9XB0wfBI67pwsTw82pQlfyQxlaJp8WwFV0dUgkhqL78miePG6WvGtkN%2BfDqKLZZUSc%2FiyqjkPGK8i0qPCIgJQn1qHPbU3dfu38gNqoZbchIaeXQsnaU4kfpC%2FNL4LHVpp3ZSUzLpuLf%2BwbF5cO2eKNtDbus7RSl1cp8943%2F8or8ZhFN8998ZUbNJH2KnvRuwRqST7%2FVLOmGXMmAUyYkVJ%2FduSo%2FvqjQQ%2BuT1fSYd8rUMW%2FZONEnjbHpoEAmG307y7CmSH6PI90i2xySxI%2B5%2BDgQwEb%2Bk5p8Obd%2BGvJF%2FkdkKHwVpgOppfqGgW2KH0FYCZsORndwI140G9TqW2K4TX3UD7lPrrpX%2FcCM8%2FvMBsi2u70cCxGTQl3lSC%2B%2Bta9D31kMp3bGE1Z1hwSnOtPtClfu%2FE7cb3QMF%2FNWecghg7LDc1E8XdSU504TAB1gAKs1hs4NxuTJ6%2FRh0dTsFE41lMKH1mtIGOqUBHr3Eb2yUIcYoXW1Vd4Yaoy9uwz9iNmKCsIMiG5r%2FjFe78O4yIWbbB9Pu2I7daRAdI6HPMvOWVb5OaMZL1h9oTQO8rbijc58ktzBUlqxUCuPT0lL17UcoS5kmdh1y%2BjD4AkDIFR%2BKMmsWmjFry%2BoqNVT1vjZ5qIZFS3AljW%2BY5DAiKV1N4xyF45Lc6Lpfegxm%2BjD1y2AyhKi4NBSRBxrFa8kkU4OT&X-Amz-Signature=793da08451a30b510487330b207063d1dd874bbb760e582ee59903d0be81029c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
