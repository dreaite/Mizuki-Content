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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3NQRNZX%2F20260815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260815T063940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJIMEYCIQDfeIS%2By4sxf1Q0RNMunRFwKw7p5qQzZDj7kfz1aadN2wIhAOgM7g6JJw8b7b74QtUxQ2EXub3WftE%2FJSnp%2Bo8oWrptKv8DCA8QABoMNjM3NDIzMTgzODA1IgwUZCme04I5Hi8cOjoq3AP%2FkwEUXJx3%2BRbdAb1%2B5chi%2FtrDpdctCj2YmTrC%2F4Jc8%2FQUxG1T6A52s%2Fiy7SeWdosCIy5hmIUPOvpsr5ntSL%2BAY3%2Fy4zZTP7YWvVQsbO5Ts%2F%2F0DaSm1q9InaKp7J1%2FA3Z8jpzPwST%2BpjKhZ4fbd9qFs5XWYrwB2KJDJlYcZjk5wa1WolOTmnA0i7ZkjDyNX7jR2xm%2BzXbZYs4fr16QKsan0GvAZmF71C1poscbBSJDQHpHVGnIw9sTvw0zaeOU51ToJ32HBfTsRlCF1cjI116ic2817%2F13MOoaWCFtwnWGnlNRA1ltZycyEp62g0x3scTKOjy85n4aZSlbEcpCV0s6TOR4QnjmBq4KI0ElDmZJzsO4fNBAj08MA929u9KPETMs2ZA8YJxV86CXBndICh3hnkH2HCMdLSgnf3SPJKolhz4nNgLPteGfIYtL2IrJSnC7dBgFW%2Fa0Jx3w9TsdrBH0XM%2BD%2FdRWvmY7qWgwk1TLDBEK7OfOTItCUFYLW6254JUmVPgo%2BgoWC3E8%2B2iAIOTnV7GY8R4hF87E29AaKA2e27A8DPvKaCpB26FZDy5oTPwn3Gb%2BFJCAMvnbMdRYaxwrE7UODRRslcx%2F6yl1PVdCtmCRD1xbBDPVNfNlWzDQ%2F%2F%2FTBjqkAVlaraOKue6aNZxa9dYYVFTo7AbldjRV6LNom2h4V55n3cghx%2FswWGFO8N%2FjCB%2BVAxHhguQfiNEmpSzzjgZfEmg%2BicT4O6sUjaWlC%2BhAo0cW8qndPjDLl6Sd5y0s9DB9bFEKOCd1toLnkTBacYVFBTkT5Nv063hpdwzb7Rz02r%2FOOpQ2KiJcNzDjsO%2Fx%2BQbgsMPpANLewCfIX%2FxvvUm10YPnfPX7&X-Amz-Signature=b70f5981aeae792efa315d0db4745ca7925c43aa05ce3ea9131170d18f07e905&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
