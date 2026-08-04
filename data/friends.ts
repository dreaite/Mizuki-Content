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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665V6ZCIV7%2F20260804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260804T112421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJGMEQCIDkL4278T1mpLDC3Fs3dnUbHORu0xdJN1dNRgi9O3OCMAiB9%2B%2F8cHHR0KN1Ml%2FTN7ty8dQR3qBh4J9%2FWIr%2FnXfx9Fyr%2FAwgLEAAaDDYzNzQyMzE4MzgwNSIMAIWoFm5igGDG6CO3KtwDHRK2heEXrxchSpVY1y9vaUIHheC1uT5etoaN14%2FmCGMoAP%2Fp3PH5Lzw2D%2Bn8DdY63FWVEYUH8Kcz0qmPZttjcE7ulQbWWMmyroGqiYVDkKIpaYlO0K0svo3Z3lbmtxePFIvKAtxCsotGG05mb0sUSnUdN%2FHLuFjEf2hsCJL5gulQGU9XpLNop%2FLoiAHR2PbfyVAzGRkdOKBzaBFwz2eE6CtAwjBpPMr1QAyeNJ6pDh53C%2FBv8vyZzKvIlad7rbEK0tOAYf5l9EnKx1OPUhow3fMFbPXE4ptlTJPqVZPgaEvxKgQ849tsWcbQwLjSLaubxQU1RRcWw0wFX1NpfpUCaiROHre2wjE%2Bij80f3BEQwmQ8CD3tIXnw3d%2F4tjjF7G4Rd78J0FG2pZ%2BwxcnlP6ELg%2FoxTkuJV17YuK6YnAR8a1qXPQU3D8aF6XpwN8lXh90wzGKqNemn9kTSUdMtqYidcpgJxg8ybJZfwjJ3mLn0owXaj%2B%2BRMjD%2BJPlC%2F8Qo365TGD7V6TLJI8JivukbF1aTG6WXlAvkOTrBmL62YwH%2Fgw2Sb6%2Bv1wPmgxnYcwQCOvI2nB7FU9VMTrNrDvXHU%2FCHkTB%2Bm8OwlqmXcFIDzJVyVN7EjwTi20xaaEhkQ0w%2Be3G0wY6pgH8CkXFCgQCAeDL5IhiIe8rsaJTMIEyDMwNnu1QRLEjemIWystiZrJUX9axi1gq9v6yChYR8pV6DQe4O4%2BiFRbqzk82dS3DYwcEQRzpTogm%2Fidymac03uaMe7tLlXK0UsW%2Fwa26xlanyxm7EhajJ%2Fpfpq%2Fz%2FCZTJd%2FrrF5dlYrpOz3KtEQNQgPqaPPM8VvHeZb51zwAr8y4UMtmO1uxHvkTD2zH128N&X-Amz-Signature=2dbba0c48eb78e190fae35c2493b79401357fbaeb60c984b489590af9b441b1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
