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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TR664OMJ%2F20260707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260707T230328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGMknSFOfcd2d9oCoH91jzt4zgDyIEE2gsQtkuk9Ka8rAiEArqFdGyTdgUezJKwemdBNJw3VKCYJtccLxPyvDyt0TAcq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDLvKALV%2BgqLZiYmiPCrcA5%2FmlHtyn1q17u2MGEqbhROeQf5e0vFX4yY%2BxbdMdbyQDtmR2PAhPiUFQtqtRnPFIXKFSR%2BqsIm9Y3zqNLYkrt9I0MfFSUcGg%2Fdl16WwlY%2Fx5XRQ%2B9d%2FL%2FarqU1U5YnVcL1kiz8eAW2cvuSpd5WVKPOeimlFgpqB4dqQgetvfL4ChhMgueUpZoleJYvEyJae1QcSC8p7PCtxcCkHV%2BfoX4T8NLSy1Q6js8op0qGV9YItXbByqW8Zoip5eWKqdsoi7P8b14u5GvoMf7EBjZRWi05YvRkoJPvWhXPTRote54cT87dentWQSlACJ602I9dqlRLhW3sBA3fl63nCQElRNEw9iFhDefHz%2BF2BZ73QM%2BQqrLVXPQCt5YZn2A2moGpk1AJn%2FKDwu1tXjNdJ2R%2Bg4%2BLkZdzrnQvJM%2BkWoxH95OSFliC%2F9ZeMpO7T4xLX9ozHvikq0JiDY5cUW3loLS7zO%2FTNHg0ZYduwUKLKndFHABIwfUM%2BuQMek9dwM%2FZnv%2BsNQkqT9cqWmw8%2B1D5by%2FxZqPbniRAs%2FyXvYK1QpeKC%2FXVsbsisy0%2F4J8kb5Z4RN%2FZ6Vn28AqH8MerIGwoYOR0Nzf0ydqbIBfr6B246CrEP7%2FfAw5%2FRloweY43rRROmMLDMtdIGOqUB1gabXwmqbWpe7J8O9liMYTiVJ7KP4VJVt0wQS2eFjMC3DFIbHKYcxMLDkowFlvsfiLISWrwjvStIkjgsKixEr%2Bux2TX49aThKkA3Tg9iyPszFl7KJFkcozciNtlsTlE%2FmOi9U6RfYTVqizni8ah5II0qC88%2BJvaKqyXfEa04veymNLwTbNOsBR28sRyDbr64T2Rg2VT3JJR11pOx8LrHoVuFHYoF&X-Amz-Signature=9ea6ecb8a661b867a848ee623506428215e28620376e25f4e197e13b7883a12e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
