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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IWKZ7UD%2F20260712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260712T215248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQCd2z%2FUFa%2FA4hZI8bwfDwWe1RsvHFSc3NNNXCEDm3lm7gIgG30G%2BcwqAcpX4pCkiOruDNvI8ZQXUsOCeaoNqrjql8gqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK5RcRT6UPOPoK234CrcAwHKr3EJiqDf9KXAUhg%2Bw76auFHtZiyxJFxiutq0Zfjp5HKpO4Kqt1m7bdPXiykm56Nw3WpSn9b3QK5sgrXjFU5rVAh2WYCvKSngVKCvnc9cnFAQUOh0KAJ9gpQ1Kjd1qqJD6liAfswb74%2FNGdxhGK7FBq2ZwPf9NTv2Hxby9wOzg4n%2Be%2BOF%2BQ1XLOYNGl7Z%2FpZyIlinw4DyLSJo5PsKXvpp2wcWlxiW6jnL9x0vgFe4%2BeNo2IDAkmnPTrPA44nnuHQQoHoNSoDyRrBVWYgPRPvNC6SpFn%2FV9qZOS4DBL0mJE%2BSt9IEgbRWYEuwnrjZSFOJm8oUq1avILCe%2BOwU%2BfJ9ad24noivrlY0kmd9h7mVYlh1%2BQqb3BfwB%2FfQI4JX84d1Hu86Z1GqgGcd5kwDk5rmGzPBhXcxQ20BDWYq1cW8TqLMD%2Bi8i1WDVAndxDkq84xxDv9IPbvWgx9gKS6MUw1X0sHnQlesZNPndUEG32B5jxc4RAlb4iHEXskqb%2FYPI3Kd%2FO0EXPawTgsGIVpKb8uYn6UgJOtK6YbNY6l9IBwEA1L0fH1PKE%2FcHbtcymHjWGl8nc%2BOKY0h%2BuA7pWtYqxOQwhuRuLUoGdAfbuQ%2BB6LxZTTBW57S3BViZ34IeML7zz9IGOqUBClMlzPJJE48LhtZWvunS1Za5VHtO2COntkRo9lO9%2BxpxMxihCx6Xm5%2BskgYgoj7kUl%2F5yql8p8WQ24N9oX23Wq4UCCIj0VDLQkd2yKAtrc2yo%2BHvAI29OtG%2Fjgk%2B4Xatf7qDoAWuqUZOxaeOxBDJB8yEXckeG%2Fe1oUrutwen6%2BJ9%2Bf%2Bq2gIblV9m3vwfXmYLi3Rz%2BVdCLtfhxWyuis5lroHvk7fD&X-Amz-Signature=090fcdee01b1fafb286efa94e70480ab2821a7ebfa58aaccfbeb8f01ea6df1a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
