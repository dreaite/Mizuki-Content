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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZUIOIKZ%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T134653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDVawQrY3G5KS6jqjc5tQyZ5b%2B1IQubUDCqzEDvD86A6AiEAndIRFzy13dfgGYIXggakxuJiWtKrM90NRNFYLiT1gn4q%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDO4NQM%2FiQKd28WChpCrcAxtluACOpB%2BeMawmiBWfv%2BYM4M2wnYpkG%2Bzxfits32%2F8vLwb6NXE4gi84LsCnL%2FxlAUcoFhsoat4mz29PDRv7oysjRqK%2BjIRu5XU3TUJNObo2PArjl0kV01nkndCvy88xGauNPfyZdGAZFHAmgAskHVVCUCgrrwTnOqeNiae3cp5NGFG5r5w76262kZ63qVTtOYd%2BkDzTRV6fvyQrT93LxXQpnUF%2FygBNSYavIa8Wk3bcgH%2FpWqtq9McM1ms3Jwg4umVDRWdgUhWaX7u%2FGN2H3M3Bmr3WcgyptOri29%2FTCNZupGcGYIMtwv%2FqH%2B0b5hv7KCt46r8flWJVe377Yip8FrI5vt%2BXtQgGLHr%2FvrqOAczzra0iJmDiyBfDMK0CvVEm3v9u8MTyeAKVOq1VO6xn3y7RgOJQO8y7UoUakFbMC5bndVDgg7SZyL7%2F8Apac8mT8Wn3tLELyzjgXhpdmSclH3cRhOPIvnI6GhvOmQlRjT4lYWLbPnKQN3FIqNaKw0eMzmnDGINnT6w8OZWacfD8hTu%2FgUmGMSlMKVPsOc8EKOwmFEuksL%2BxCQVStmCqOQx7ESdOdd%2FMHRUiLlWWcMapyOsLom6E3s02c4osF1QRgEcdzB6BBynrfkPDuhKMMLW29MGOqUB25BhAzUR%2FFLlNAJPNsf%2F2Wb8NlytSZPBtlYuhiPGzDjWXKTzjsQ%2FUHbOvW9W8AybMRW92TTHF%2B0BOZr1P31kO5c%2BbT6wfSZYe4gt4uep2DUBiQE47D%2BEHMiGh%2FC%2BjVsoxknKcbF3vaoJl4kPu5qVjjcoSsnCOuRzdZvzgLwLwDWFTfOavvYxEysa5HSQpd66CkJrCW2U3S8%2F7BXQBZdY2YUYBCSA&X-Amz-Signature=5fbae2fa0613cc43775b14a820e4963070dde9f3aaa97bfbaaba70d4ccfdf998&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
