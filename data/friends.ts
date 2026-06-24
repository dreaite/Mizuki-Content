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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFMHY3EP%2F20260624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260624T114623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCICpxperPtafWOuKoMwTAXEIIbBM2ZeHu%2FloIsk1fVYeWAiBG3zPYBw96zuA8IIakPrhnOnd6VaYM%2FaW904ySELyEHyr%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIMPJtZu2okvDuCnVn4KtwDox%2BeVbw5%2BDgETg4q7bPsrqF5OjyORsukHPG9HzhS0nj2XqjfxJeT98vd9aBpVmQE6bAi9NbQR7h3IsJfC3LoDkkkJuc%2BQIl8VA6oYVk2aBWiKICW0AR7E%2FTrC7DjJRoJN8i5G3%2BHDskV781Q5eMDWu%2BImN9wHzvDCgc9TLT8Fyy8l8P7BPAWOWriSxnJKVl6E%2FkczwtvLmsBq0IjMPlIhZfa0wEbWhEo7Q5BUj5g2TfXYCWlRaDomsw4vMby%2FRSel76YdCGGrMWg5Oy1k0tyhe5xjHPLYcRORJOo%2FRG4yHfBWnr7oe1JKLHIXi4XlBmknpA8xy8qp%2BIUdF9GelHoCZUwhr0%2FTbArvHsDkjjtAwD8fvZN3MN2Xx3aPVDKQE9CjxgiQFl1lc%2F4WymzSmyQaWfioLLsMAAFS8Uwn9qMNa70nq5NrvfkoPrASi2WppV3Ei97tDGJ9%2BeoBvFC2QR7a%2BAqT7GsTCCNpM1A%2F0EhiT11I5Ygbem9CDUYmvboEJJ%2B6uVBGrwNIhGCD3lyapnW226K6NhnUIwg5z9wjgFLtj0fSSMtTjbx6VxJL95BIMBtAS0qZVrggtTlG0Em5fz4%2FMPqiNwRTiE6P5NbTvi4BjupETObCI5itzykp5UwtsTu0QY6pgEpsTXOujZlBqFPYiTGlqWxmek3NDDa8%2Fcm50RsNiGi0faYPCN8TP84lRJv8RZeBZ7kj%2BJY3m7hVLBCL%2BPycCHnF5H5aAY39jx2ImgrvrSOQus6QKWU7NtxzJcKhYeRS09Hf16CBY5LeKx%2BF7BfBDRQo%2F5FxG%2FrWGUjzB2zbwH2x8%2B%2BB3WEPFQTYTpAsNnr8AYImXd9f3DSmPLHKyKcrOFAnzbGZ4ep&X-Amz-Signature=1fda26f68c1622ff69556d48545e369e4378a77dc209a0bef3abfc78a7ba4dd8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
