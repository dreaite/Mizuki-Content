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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UJWGQRD%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T054847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGpmAPgmhUC%2BHSS1pd2CIRcwhK6RyaqzaA0vb2QZNy0LAiBW5UPJI0W8Dkv5LateRX9%2F6ivN%2FXV6jH9elCbr8HNo1yr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMBgM62sfx0S3HU4qQKtwDeD8VMeOF%2FvwpY9z5SwEIhqRh7Cv4c%2FfQuqjaT2zBNyQJVmkepKGKyz80fpiVPEPUw1lBHwORWtKeC3MNRvMqjon%2FuPtnQCRqJpovT3%2FCpA0sBV%2FA0Myj7cdKrFt1jDww6R3%2FZtLTfohII1AZ3TmhVhoNhTlKvBxpX1t5EKOpHxKip%2B%2FQ58KjS%2BpU0bW7r0HEK666bZYLc9DvtYvZG9DGnDEAv3snb45mFbrMMVVCzsGtLooyaddPzkNevfxhTiDSJ29fLF5bmL4PwQrsknrWvwVD6QoWhF45%2BWYIuMpM%2BU36mwMM38GMnmuPpTKcI18L5bFWmxtdZZyS9hZPOvgVcAcfwvRa9exxXprK%2BeXE%2FKadeM%2B2s2mkxRmYIklYkXfiKH0iR8pt2DkX6ghrrUS%2BXN2HLN0Q34ZnCmfWqhrV8benSagKDN7CbahzFqcloG7iAOvp7iaGn61E1XAS8nN2%2Fy4Sf3ssGVIndReItWE6EfvQYiQSDLoh2WKgdj4Xzj%2FeLM97vCZF%2FOgzLDrf3EROc6sSmtFvnTGfnP5JTxO3rc93GYeTO16XNPOwRVDhXjwsgAKQwC4u1IttjlOAly%2BHpff%2BsG6%2F%2FZHQokZoA6lDjXM2vJDYYHC26TZig%2BQwmO7a0wY6pgFMhmAo4VHMXBrJUgU26MonX1mloXjeFQ7ElOrU1GK4SRjGhQpDcOsneLJ69h%2FxWjxZrLMSUuFni%2BKt79kj12INy4V9OfMIeZBXoiKDfV8MB1M%2BikQCG3KglRK7IVwiPM2fxOZwnuVJNiebFSQ2TTbr%2BZ7Mwc8myAr26qdksSXNHR7%2FAoSbd9hRw2HX24UaEtLyt9KvncYSWondUnknR1I2L1nbHsZN&X-Amz-Signature=f66815b5806874964a5f41db0ceab8ef0a22e8c865f5cc94a6df17e92452d045&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
