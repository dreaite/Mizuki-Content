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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6MEY3FU%2F20260815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260815T083035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIQDQsT%2FX3lSWFAJjp6JWvqSRJy18Er2EbF3lXnauPhIddgIgFc4D25Th0w2BuVx7Gpr%2BE%2BHeH2A6gDxUlI0L4%2FbWlBUq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDKGU4AgOwu9buZjvaircA78ZdjpUY2LE8DX02fOb5tzd8JvoHeug9uHe9nB8%2FGNBmjv3ESdnZeapsbztf9FSW5oyGLyjMEfQXbosq3L1iE%2FAJGuGU2IZftdXpFD4vXUtruZ4KiXRlwpcpbtQX7cIFjle%2FAC4IO9DPnnHRm0%2Bgz9qIajNJEKZglqq8fPO9rSoHZ2DRhRKKLI%2Bg2O3pAsBGuA8bn%2BOm%2BFpI3Q7h6pkcub0ZeAcdh1Ka3LHzW5Srj92amOFAfX5k%2BS%2Fmz0Ff4by5z%2F4psC0vf5ElZZmZCGKvSS1%2FZ%2BqlxIz5cqMPd3RKbjA2nvDoA9G6pUUkvJXs8H3bPYXLvyDUm061v0afeskiEBVt65jMuxdpH5TzGrM7MJl0dWQVSTW2obSVieCpUac2YqRcjs%2BXZ4Z7Hx2e7NhudwACbgNc6onjR6BDwA1k8r9Y4D0EtXzgLJ76N7MYJpKsh0VMrEvoqIHfxK%2FMyaFpdzSykzHNA2kByVfZl6FPYcMxlCra3TRRMHBJ%2Fa0NSAVKb9fCX48neGdvPQlpeJ6AY5dpV%2Bldykufg4xDUUHlU%2FWbQYRINPtQF5TgvRIiLzejI7I3IDvYtmbJp%2BhurTKiE4G0QajHpTFeGZzNIPEi2my1Z15AwOtY3X2T7GqMIC5gNQGOqUBKuObF4BurqWjTVMdHxUiOgmQ7vTvy4WiKpiYpQN%2Bgf0RTykh4AVc82cguQW031VOGsrjAm6poiQs%2B7D3tGgTHqSeTBHoTmuLO6fpNmOqsZAmDe2ZAa%2BuBItjOeoywAcUBpG4B2hAr9XiAtoGf%2BptVL6%2BbcAxbEuCQZKIcEN4LZrrDi46KzTQcv96he%2BI8WECzrdET59UUW8SVY01zVkpJd8voEpn&X-Amz-Signature=e17164a4f509cd2d74b433a6ca994bd13d25e19ded944a804825c11facd95dac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
