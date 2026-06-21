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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CK7WT7Z%2F20260621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260621T194506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQDSXc2f%2Bb7Zs9EayBEa5wWM7ybBmQn%2B5yY%2FQBZyNrRiXwIgCqrwDVZ203YZrptpYhui0xVA9Dy4S0Gq7WMnqN83SPQqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJBbuWtHbCVv3MmCLSrcA7UJJ0ysR%2Bqpw%2BJHQ8Eh%2F59oyAHupcOnILlDHYL18qUVA%2BnmDrVxgYNoX5pBukuM61AN0GlrfOS9KEpg%2FvE5P3nfBE4rNuH59KpnkQhRsOwBRbFGRaJpDEmEV1r778SMhil9Go2c%2Bba11Tacqi8V8WbW2sco7f2xZ4qo3lDjdOPpNsbH5Gc9shKCKarqHNul%2BWdglH06AU9qex7sWGAdpDAS1ZnGkO7SxDv%2BY7x7adCvD5MsW%2B6jwJRc0bErs7D2S7OyFsEqDOLZeAt%2F0Z0eJOpZI%2FZdg1%2F929icvYqVrcYKOdSBuTbPyqbalnqTsbIigBmb8hphV28Mcf2Cb74U22qjITkx8WdI7mtp9ovJlxphthNslfcEaPUnrZ%2FOQiYtDPx%2F2GDFHb16BAQ3nbmbp2U2%2Fus0ht%2Fs%2FKWzH3jL9NtsGcMtJk3rbZRUfZD7wsokQGMqisxKnsxDlQifE4yTThGChsPvuUBYu48xxAPyD99G2P8SWDcDFQo%2Fn2%2B6ulhSzy472N1CrQ%2BBlW54T8%2F1dTYyECCnW55252zsZ0dvT%2BW%2F3GXWxJPP4zvde8NSFNXE24mQI8D%2BVunr%2F1bFklz%2FIOec%2BMOMi7owyCT%2Fxz%2BIk2rGAWwEwihMZilRCKiNMLek4NEGOqUBXz8Uu2aqfzqdc4XOGBxMLiCOdiJF3LHTVpyEqT1vQO6GK1t3iVkXgwC0GFx%2BnQZNLN7getGJCfSSYw%2FHU4pnYAm7huXiTgSQbBCT1k5WNULI1xVQf%2Bpmy0dXwhqwT2DYxtpaCRFj53QJjS5zH8E7b6K9TNmV50U3%2BLQYbPNvvERFoBe3py%2FcSTxc6wj8rsodcxGWVcpxfjjgd0g4Aj7zpYKaWPwM&X-Amz-Signature=436901d70a0e5de6b531cfbb4fbc02220fa6edaf2b1d1e8312b88875cdd40a74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
