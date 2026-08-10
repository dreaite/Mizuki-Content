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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHXLFDCE%2F20260810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260810T131131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJpWSxSWlKveaOUqdhsH%2FddmMGsxtBSOFDnCiATO33tAIhAPj9i4PtBo0mAJ7YIcHaSEzV50sGHlZaZsGsiR%2B%2BBSsmKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2BrShvq3XlicVOY%2FAq3AMGiBvKDyWwuVy2KhSdIHFQL%2FhZown49wkv7kdF33yK%2BFz4eCd4UwnQAMGCQnziDfseDJd0DjFEfXwEmnnvn35dFDmm3Lw7V10WS%2FXcpSIdaAm3hTmlCMG51KSDf5ii8DvZuEyc8MB%2FPobKFSVCdyFQw2zxBFaEjqaKR3hx9LHfhvlMiRQ%2FfcSohReTlRFg%2F4f%2Bm9WbAmQ7p1gzt7%2BmBL2SF%2BJnqugQdIfADz7GnnyfbfUJHUXyT%2FZT2vTYQbYQEupcqm%2BMrs16smG5CPiTHRYE96gSUxqG87pE2NpNCI9ipXLekEMLOVgVqdKAV10x3puINpcxakeSO1SgPn7GNjec4CrFs2fYfe1C2FzB8p4BCl0xj6FtbPcUN%2FUS6x5Nfg3hqKjgHHHunCgGlYTp51jAV1N8UHKmaK%2FJVtx4FwosTa4G3YCPIa4WetZwaIZqPC5Qr3ewzkoYuIIOReywMaiWPHE65rSOk31oHD4U7a0Ob0MAzs42n7T%2FV5aLcakIQHC1sG0yt2J7Zhs%2FNMjfybJwekzjPc8%2FUb%2BDSndgvYIhIdpZR%2FIGwR%2B25IXfteXuFJThbpWIqq3%2BHcLXtuw1IY%2Bic451Qvwq%2BDvXMmoRNhjXhchdLMXJERwe5yIwtzCY7ebTBjqkAS67QFP1uME9EaRJ1AE3CgKIlieaRcUkix0NqFEHrtYN2QXMQQarrUIfYRQNMzJ3w%2Fyh9%2BzoLfQMTGz0kqOZXQk6LF7Hg%2BjeqX8ABkFVDeC5%2BONjZSmtRN%2FjX0xnsW%2BVJMXdlV7hZu%2FtO2dbN2nSZddlTsPC0QQ%2FBtDA9OBwblzpPlbxNJ8LvTnhpoXUaO94Ny8wBjt8g2h71QicULdrNTTTo44p&X-Amz-Signature=4f578c8a094b11ef1592f3c08a39ef90e8defc52b108d7aa59a81ea4bcf54ded&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
