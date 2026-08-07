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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPFT2N6O%2F20260807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260807T223657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA6fQCutCjE0roTJSnJeGQEYopO0vdK6y2LvMbKl2SXyAiEAmZ%2FS3bcxW2jZlQ%2BIFH4QBtYBE7C9vurXlPa%2Fx61HnqAq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDB5vsiDGCTgxEE7n0yrcA4eUuKfwUmQ3mr%2F2hD0FfIf4i1iBcbrozNuG56ay6ODV1IPj%2BiXBKN8S8N6LtK0knheg01OihRp%2BYET8hxPAKSd2%2Bnjbnh8G%2FKtdZCEzt01zgKP0RNjUHyVyKCszqYUYMq9xxCvvWoYofHf3N%2B0S2AZdInTGsj4GIAjY4X%2Fma8qxqWa4G%2Fx05MllPih57366tOY7Vb%2FQrK3Wfls3dPSkzezHyYdsv0O8ZzLbp%2Fh2AhsM5ZzIVCN5WwpL4pmiPPHvGrGR%2FtspnedeUPZdndBwGVl57HkFzhIpbQyyjJTPdCTEGdpf5zAXTMULAE%2Bp4ictefqg%2B1ryjIvihgtCQUUqQidFiRpa%2FlCiHKkXzdcs8VJ3MARYGLB8V%2B56mNqlvDHSrCwA1p%2FDnCjGWp63DOvfYu68pZ58I4p1HILgZggFQ24UePeEMEKJsi%2FJjRchsX9rwuf9fxuq5z%2BgCtU1Jru28Lraonk%2Bd%2BgTEygsDtkRuGI6xyNCD5GouCLZotK4XQhGp3b4%2FeN8X54fUv0Hi%2Bl5wYCikcZCyrlSvk6ZCj3FtM%2F956RDB0cQrsCEbyggvSIDESoLpPrOCink5ipsrSsbqkY%2FsZOoKoLJYX%2Bh2KhKKYNwh5qt0%2FFPoONogRQ1MPm02dMGOqUByueJsk0EwpYgFa5MYaohAToek5kNGySOtUr08IR0p0XDzNujeuLgbs16T1mlY0n5MGXVzwJKBYQp%2Bx%2B0u6dcoJrhZtfFNY1gjmvadDgtjDC%2FinOm9q%2B2pZ8M7aAbDInk25prBF9FmSrGWA6Ldk3An1filJtaWPPi%2FJ3a%2F%2BH0Zb25Z52STK%2BIae%2BtGzIhux3tWAP4%2BbpA2RpjZSFQ22abClUoZgzc&X-Amz-Signature=419a7965c80192aa4b47e06e4351dcbfcf80d7fdad5226638b0363057a8800fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
