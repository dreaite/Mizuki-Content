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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6V5RDFI%2F20260809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260809T084932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGhep%2B6KJqRLM0mpZ4SF1upkPdamWDK5Dt7ty4qKtK5IAiA3fZSgYHSSmEx%2F1PKufVmbhldk2HX9%2B6KPgSXAt50kiSqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNv1m0wii6HCnts3gKtwDswTU3W7qJr2M2qb0pQ9ORDQiMyljjz6028LESkHGCyNpH6AzAW3qRr8WICCEoSg80BQpeH89%2FSYrPq8UO%2BVITPKHCGyWnmxZACvr8vI%2Bq2i%2FSIREVzduGvnI2BpAstpr4dwBZeXDlebNCjUrNn84smBjiKH1dEq1NIyxDegB2gpaHLJjSCJOD5Utj3cSrTobx5QGGHRrOjna%2BZUxYpdNiXQd4ks%2FlHibHfSAIzJzcb3wTtH00LSfVWqKYnJpIpnMwjhguBnor09qVSLGFDT%2F7tjHo2cVVgVlIMrSyGl1wD7ghSLXVA9GyFo%2B8ZEogzb2ZqC%2FEzTY64VIqR%2FM%2BG99iGmdvvfi3Kblqk2eTV2siBLwc3pMyuX%2BTNZOywahaMT29KoaVQ5rM2A6kMYYGchpPSS8pmF0r2hhBx0sBGi8OpoXLH2S8UO2bOTK7yf4oXlDks2Dj81wZcelBF%2BRIHToVD5sbco1bxztnk9gQV60aDhWu0pkHIlyOMxKvUiuQ6CPF01gElSNKlHAhG2eQ4LBv3tvLWh03sJG0DIYp8ywuEIhHhU4QqVFZQ%2B1AGBlRfOw8WIXxX6dG9J27tUr%2B73ePwIdvpabxqFgcgeJPQgKUDSYIXx%2B%2FGVW4cMR7C0w6fPg0wY6pgFCvzH0rfY5bD0KWo392rWhhtaMaOAOnWxMgfEHh3ngCnv3t81fxQi5JD5V4K0G6q%2BCloZ5vuvwbl%2BfMK3xD0%2FR2kN%2BppwNi0qNZqB%2BrmtQtmyRVlJ%2F7kl1aouXHIqrbg3%2BdHUg2e79DANQAzmTOvQxNMajykQzqFszx%2FNAir0N7emMtCF%2FDZYspFWiqnFnWT6KZ9RdckcAACzyu0%2F77dzIQ0dtLc3k&X-Amz-Signature=f91366f9f59e5aafb7c99b168be98b096fb8c70f6d9cfefe7b4c5fe0a697d4e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
