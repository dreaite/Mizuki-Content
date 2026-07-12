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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDCBKG5I%2F20260712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260712T090250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJGMEQCIChJ09BD5yD2R9T9r6DlpkV2qTmsQeAMD%2B%2FQIQ1lEOBfAiB0cAkQhnvWo%2BdjD2ZXUMvxHmvuIjZB4UXAl6p54ByG6iqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNn5aGDHUOcNKiJkdKtwDSbxRwRaI6TJapeGfbYU5%2FOiQy4uCJUw2WKQPA3u%2Bpmpm4NPS0b%2FTHliiVqYCOAYOp5gax7IEsSK8uGlC90t3O14hfLxTgkxzsMLK8EeTuB5deWHdgd4%2FvP2%2Fx4Czwle6rbaXaCid4Gdaw07CR%2F%2BUYZTZlxJaYjUs5fS6PUUh%2B20hcS4LOrGUIzoz3jdGH72nstlaufZQ%2Fo0UEDJ7G8coQw8bnCrx7DdzT6C5vnqL0r%2FAuLmnEWtgRANsLW9uQ7OBdZ8AzFujsWsSS7pL51LCJPR5sBpCyQ5i23Q3hAYM0eTD9Cl%2FHPOhoodmgr2B8x0S3Ki78AaHhMlKLYFqj%2Ff3dwXxaAkY3njHItLWsQxPrF8c7KMMquP1Tvmhausy1TcvXwHfx0VPNpwh56mRYrHEK1ZoTKyG6L6f0uqTICLRC0AHkgksW5fe%2FDiud54LMuYdYXM%2Fp9f6Zg43uEfl4nriYOjoUcIRQETyLsq1Jt5GohdcN4HIUOiiyBWevKr39BUcIa3d2wI2U1h08OlRVvA%2FJI%2BAU%2FdYcMFgWww40CpTVRSVTHw6H1o9g4PnpnurgAS3j70ISvRn0I4e%2BtBV18h9Jy2BTHxW1cO2K5OctSSBDr17TVVLullewCCsgKEwwIrN0gY6pgE6AcgEH9D9OwoAZ4A6jAOs9p9bv2tyK%2F%2FD2JRyv00BMb%2F0Tr%2BZHzYCgRi3if4HmKJHEIrvy7tQHRi3quP3ukxYaacj6zY1ayKgRiGzPddSeoTWIzsKwaiuBsOktxECJs1dv4Tg4nRpHsYplhXFcB7lK4HAR%2BYSWCs6Z93PZA36atn6RKARQ%2FNz2wdBQF17fMkWP2VE5HFDMkcG82uhLDSjHukyAphV&X-Amz-Signature=1aced93420da0c41dbe1de4551743c033406f4553a2e0ab876be3ee72edba98b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
