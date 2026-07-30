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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XRAK4JJ%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T000104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFtEcIlpiRBZ3IhPBBGy2woKHtvMRQfUaX%2Fhhi0mbLiYAiEAt7zzHHjS4I9b4F0y6NwHv7bH38KJIWCNo%2FWO0Zox9%2B4qiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL9wMptHwbpDe%2F%2BiiircA5UkG%2FZfYoYFcFyZUNfNDcapDVeEOW7ihyxzgLlmQkwXJ9YQej%2F7Xv9gckNpxZacO90cETlpb8qnTlvaE7wfFjoJ3MePkmnMKyhx1cVJDRl%2Bv08JIPe546sktzD%2BJq5urXgeBq7UI8%2FzZKlFyQdLzaVJzFv6K3VpHv1FDLV8VqMe1AT5pX4HM1MM7IEggxEmYHNkUO7pTI8ONd3PeJCkXpfaIJBUMOFc08q9NsnsQI3NErDBaz%2FWnms732plsVaY2fhosexL72WlaqK4xZPcvgXs02Dp%2FAhMqWg2yNRxOez6aUWfHoph2ABmf%2FpPnqjRKitwT7jvPBDkWtGacA2muer3j9Cys%2FBbtJs8WfeLgD5mJONkqEJrJyMN1hbTaTAGJ0RojU0WxNGVIY4qkSrNfFQSd3qcuzuXUFFqdt98FTLNbwK4hTSVeADGm84p3Tozl3PdnnzsPot7KLI3ouyzxGFgFE02XyTdIW22ZCXWr%2BbdcO0JacaxcgulyzcWXepTkcEotND0u%2BttpawNv%2FPWwCndIcZ9bdZg8BI%2FDi%2FncXCFEJpKu7WZ1C0%2BQZd7Ic%2FOCWJTQFUeEci2VrsVf6Qa2YEAKeW0dG%2Bo4%2BNZYUaaUY%2B34wz60KgpER7%2FBL7nMMSmqtMGOqUBK6qyGmhvRCQvPHC0bjRG65voWjpXR1EuOsBqeqKNz3vNh7HJNA%2FAGQvITzA0b5BRxGXTDYK2ouiHnadYAfy%2BVRR8pdJ%2B2iQNCXygMnGLmy8Hm3rc4QQN14ZHI%2BtWXL86CXxzZYsKFgyStNbZI0vUQWKdRhGbbIgCHP%2BGwpHTJ%2BKYizELfYLdxEGRLnldeL3nCmToOsHH07q7R%2BrsX1HBDuOScAZY&X-Amz-Signature=06d178bc89aae1ec7bb4bdb5ce5e97637fc139ed6cd1adf91da90d85cbc1128d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
