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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FMUIS6X%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T175757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGwaU76DD6EkfKiCn2qM6k4dJm4bidXeIyR0mRP0DC1BAiB7z4jc%2FG%2Bb2mAiDKjQiiogLKiD91G0yVBAex3ZAucuWyqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSYt62kiDBFHhJTMzKtwDkLdg3pjQRWkSIjxW4FF1gpZLpaMIqNfZ2cvotfgrH2cn16TZPyDPcv5pe9VYZD387dutBwoLDf8oFaEfGLrP9%2B28ePI7Tc8FJTm7p6%2B34C4WA68Uw10YO3U5w2vSBFprRioXXi%2FWdFunLZO3FeDlKWFvZcp%2FcvA2pI86ZpBH04z3zvLzZy7i%2BUYLlMMf%2FEDasnrv3Hovlc0QO9Q%2F45sEjAGOCnDpBSwPN4x5Q2lEyOm66s30pwnCC%2Be1BjSxQE5H%2BXU2gd7uezOXMk6VUCoPRCHhFjnUnb7oEeBS8SOlw1PckyVmkvdZNOGhW2lPbu6uwzkZ%2Bn2WJvWs32O9zgfxSXptgMJIcFNaphfQDdPaSH466kEnkKRTCrA2r4BQHRvu9CnHmai%2F%2BdKImLjUiDr8x3wdQakYZ3EYqLAO2G78tWa8BXXAzdY2RPjdIsCCWB%2FDzWb5EtpMloJXK4e7Jn2NfHIqepqkAWS9bo93P%2FAbcYswO68Nk28tG609bHUs2jh0aWbe1I%2FAe8%2FHMfC8en4gEQmK6UxDEKk3eda%2B23rPwjWaaoyf4R9NQlVs2YT5BzSTdEkxx4QcuqGDcXhOPoiK60elS25u%2BGpJIhOwvx51dqihpJdTxBRq6jZZ2MwwmIb00gY6pgG52Yf3nK8OsuKuoxiN4Fq%2BRT7FJzlxYZ55Ld3ET5UTE0n3R3irJO2ZzMrIbNSmhZw4IIjigptyIrQynoyDRerpIP4AhNjqWKyiIH9Y8%2BBy28YmK18FQjX9GoLO74JtDr3CEtgvWhDcCcnpVoWeZmWqISip%2FMeU5mbCfLDJmkQRyjbQC0S7A1ErtfVpTlyZrkPq2WJqvLbgzX8DYYeW2Gm0NHOOWKBs&X-Amz-Signature=aaa368af845acf51ae849533f673d0bba9ff161138839d241085d948d6de2926&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
