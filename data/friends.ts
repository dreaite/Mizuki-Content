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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XUSG5PT%2F20260610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260610T232619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIGvwXFqGz4IoYUH%2B8r8ciDoEJNiwR4tbDLRD%2B9DB6NABAiEA%2BmreLpsAIoohd7btS8xYnxD2p4k8W1QlwqiyiAqkSBAqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKQI6CjjzBpwgLT9RircAymw06ZlqjjqtVxCX%2Fz%2FwwXjan05nFCIWzD098pQsM84%2BbECFWZwOSeG0MwITRBPq8xUPaCmLC9BnyFXjgzhXbDX4vSFh6xU%2FadQ7VQvPxVD2PO%2BA0kioPNS0idweNjY%2FGfCnhF%2BNtOYhgkme2SkbE7oJxgIa4umgC%2BLtc%2Fz8cuROhkOsxC6k0E6P5Ikquk01WU5xPAi0VugsZP5utpAhFID1Ar6kIfyHi6hsCmBtpqxzh7SktHS5ZqPdBL6cxbPpbUWJSAlvSq6OzT280TK%2B%2F8SOJrcDekeUe80gWKrC%2BuCg6ha%2BcNllQXPCjTMMLmYdnQa7JQoSThZKHa%2BQl51S6PNereLE6jyf9t3%2Bk9VZzsi%2FdpKjKTfgmgpukzVwlPzojLt5JYbj34JWWywIjYLs8yzmrd%2FdxDxm3yYcviUvhMSogy%2Fe0VWrSzZjaZ366hWo8vPrbAIJfFfjzERLk9nlzbbMf6Mr9pjj6cBps3RTSc8km0u%2FldNo3qmCjMx4uiNU1s4GjxmyiZYbSwKyoCI%2BSrsK%2FK%2F6FQ6%2BYlQSWNlW3nEmZ3IDhwYH4tM1w2IS%2FTum%2Fl7mn5Hs4O8BakpuL5b2YF8GYruy2yjidepo1ps%2FFY%2FJrwFGHue3BlLUjycMOe3p9EGOqUBU2vSZFTK78uSMF%2F7KQJStbE3nO%2BKP73PcuH%2FXOdMMAO5Oa6bksBVQslv2Qq9bF3BxAm8UbnTxZI83WXkkFA4%2B84%2Bd1fkg2IXSzpgCL3AWXCtDsybILMYnzHE9nYEf5ZgPt30kGYrK5DSaeWXODLy2sAj422yGnGpIXvj4gt5KqVWK8rtL3%2F%2BnfhWPwsQQatmKxFR%2BZg3q8lqmlNcQwzJmhulXsXV&X-Amz-Signature=2c249e47d7f19524244d78100ec77e4dda85629bd447b878d05a8f3ea55b8f00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
