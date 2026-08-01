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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUA4QRKB%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T060236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE9g0EFZ5%2Bo5jus2e5kVJ8qkPZzBMaXT0zm9yLQjVIveAiEAvcdgS8y%2FJmjVTKcx3R85A5qaElvnXfKq0byy51KSI2kqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN%2BEEzp3GFelHUmX%2BircA1%2Bu%2B9%2FFE%2B1m%2FN3RK6KAs680pIzf0bfTbwsmHMVeU2SUcaXFKiwc77iLIHOzSnMIjLBjxfXUbODBrkWV2%2FK%2BW%2FQmOcd7XP0LNMZ7oEFg7G2ODF%2Bwnu%2FIqzkrariJchK078Hwn%2BVqIIUBpe6Uj5rQr1o4dRzelVQSpOSFvMRB7rTeWYDhHXF5seOXkV%2FTHahEhrjxM4jLwR1ePIwhuaSbH0eEyulr%2BqhujFTJTGHIvs19yLyF8I%2BUhZq3XFCncyJ5wikoEOcYhcy%2BCs4JRXnQQT4CnwuK35dnBSBODHbjREE%2FfF%2BhJowksknJLaUHf58oerCix9ZXde7GKDkwTOSbqn%2FGoXhXdOTLUrxpIHImQ4iK6hkT1zox0%2BeisYddNl%2FuZLcFfhhieHKQXosHxpWBccw0scMwmAYUspM%2BLxV0Eh%2BIdRND%2FVLLeDZiPlhFdXzN4%2FjcZVXSEOLmZZDt89agp902IvEof%2F84JtcJGNnl7pj2uLCxoRwflQUGxPHYT6n5dpdLB8JMLTs1ZJDeZ4DxmYqYlxtgh2Fu598mmQmXeaH4tMuCxTeTIlFPrr%2FyZKMTVvtB%2BoqGi6ss8dRTibm32XR%2FblERw1MBpppYbe%2Fk6IqyCCGqppTOs%2BebUGnJMNmKttMGOqUB4Czo7rrfwVAP1IOpaOIiY%2FazS1pGc8414%2B%2BbalVQUHMN%2F6DAXoQ%2F8upcBryqe1vuSecEcHTgPH6uW64dMUMafZN9nyaRQ5iWNWfCwlkCLVgmKr3npZfkqjFN6leZ%2FHF4idkQYOjgjjBvcVK8VCnWrsVjQtbW9yzPEZbbeMWDH9xr%2BNYdsxsKMAoEFjYMczxF2uxeoVaLAs1I4XNCD9r9xhQAWSpE&X-Amz-Signature=915441aebae4565997478356ae2caa88a44322d185fb89664fb9de1155ccbf51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
