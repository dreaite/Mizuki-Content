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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUXQSS5X%2F20260803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260803T034508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIBIEZU3gjknCiV0gpiJVlxRSyOoW%2F5SHqw8bm6fIDGfbAiEAuWPyyRNFcWs%2BVUj9gCXuP%2FDy7L32jA3Ra8joUS29gxUqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMFdrI2Dx%2BsvfhpxvircAz8nNKj4zyKNL6OTX1vSYCvlmIOBuqBASyu8UXjp1PiJgplDJRzdBVC717Wczof9cMptf9%2BoqS79ab%2BuxTHUeok78okQTuhxuidVMaD87Ol1irae5kCVgMAhdkg2MpXCuqjWsobvBtHC%2Fw%2FqTyu4Q57Nx6inOW1h7G49JX1B8hs0z39GkxrSTB4P4Ws%2BB3k0ZGhAnn8uhXqFMQaHyAcUAohA7aAYtz7N67EUnxIcR8UE67KaEv3kmoswKgbwzRirwA%2BLpmd%2FO44y4wEDyNOTHvma4jPvFVGTQRX4YrKb5%2B6b3uJv1o4yGbOu3S1NfQNSqIwLBwehSbirAAFi05W0rkxUY9kfkIoA3hdGd0ZiKMzFtSkcH28wbmuqV0mrxz1xakgN4TUcxarSvYToxrwM2J7wdQ9czYo%2FHPOEggdbAti9YXIbUGLsMtPea1mlC7HiY08f3Ztc3QYp6AwPM3StvOU0WFwIaTE3c0%2F8SiFCeCAxmrSnv7t7o%2BRTRdtlpw0zk9ttOvYfBtkI6rHNdGZkfnvxF66iuept7%2Bm%2FUZABbIz3aPlYHYAx%2FWDQvuY%2BXSUf1WCxBRTcNxWnY0DrnS%2BM2MwuTQ%2FT%2BX7r7YZRacTgrqrctQ%2FYuaJ23aKiCdx%2BML6GwNMGOqUBCaFWet8NuJo9WxkjvtoHKbP9%2Bvoe2sMnigjoRNudoAM%2BxmCsLU2sF6i2P4kK%2BTNV%2B54iVDtz7%2BvJHmpYRH0wMTjUlGiUXArqzQk174nxAer1jLXJqtuNKe4po6eeeYiM1YN9GBEkfz%2FcSEhOpbdnSkIRnYohroLf6iadi8mJWJ2vD2AWXG7zo3s6yRAC86N1y9b0VMg6M%2BLbubaogKmc9sEhlQea&X-Amz-Signature=c3c003199fa09e843a23c0da49c282f21e1873e2e06036fc0b2f48bf3866ae4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
