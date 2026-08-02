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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQDIRGBY%2F20260802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260802T150316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJGMEQCIFGpyLp3z55lAs7UQddGIAwNRqao3HXah5hsiQTLEKEHAiAQr86jM%2FDHTWR%2FG96iBqTt4yskv0VMV6cfswVfwaWnsCqIBAje%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0vKWp%2BH2GrWumW%2BgKtwD%2FQrUeuiyfNb34ZzzuoZ0xWxgEQPGCakfiHtBx%2FRq2IT7gpPpJwcjt2TMf5sfKuvSArLFi97x21A61Hra8Gtfj16D6JgM5O6o6PYiP8XV%2BZU9EzCHJRT5mNG51is4RjLQUf6Zdf87%2BxcTqc1O7Nh4MYehPjv6IPmGpy4lrGVvHSJVdnyP4lcCzpqhKNPr%2FpnCG5%2FKDzMXLDsqYYZG0%2FTrCng8MHyIFC3IeV%2FjhSpZCME%2F2qVqQ4fcUd%2BiaDBsdBCBXUf8aXURLPK6FIl5zIdyVfEjEbhxDJOGnbsJWwJBalP51pcU1NVgRYWs64Uy57ENWv6jjTBLc47o2Ili2mCAtQ0xTvYxtjVLsnYuyZJ6oX%2FQQiGgoUBleeZ4%2BUwTy%2F4HwVg%2FOsR2Q6%2BqhMf9p7M12mhTBbRnzQ8MPNuGaMlGYcCEsPrnD2BG%2FvOr4yWoB9SJN8p3EmqDFRKVy%2BjVJ3VJ8wPYf8HHEzXJFVkr5LpuxN9rr%2Fx2NgqSkzS2f6AFkxdBBVTpuj3LpckkhNXwOTjM6fwpU7BwZYtj2GlrEMCh8umh2JiQ9ayzEec9YMRy%2B0sxlDdTyOM9Y%2FuM%2BK8MOARZpQAQw044FhckEF6WQKwx7Mvw8ZOco3qkB3mi13gw2Y%2B90wY6pgHPt%2BUQth8z8jAB4UedF5P3QSuq%2BqE0cBDesqlDH0x0735%2BmCFioo3mI7r9ehpQJXBR9CQVvPwWZJ%2FoNegdE0MirmovsuewdV6oN02NMs9tFIyx6tQVhA337iucgkDMXiMylDKiaQXc1qcVkDytIKYE6dhqGRO%2FLAD3FggbDgRPJZYjASzphAPCLK3F%2Fw1AhY%2BvfP%2FLpkxnuPt52kgJgsntyu%2BHvGff&X-Amz-Signature=f69132bd8ff5be9dce9a9ea7dac11e9a2ebe2a3010d7db0b9545bce342a5746b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
