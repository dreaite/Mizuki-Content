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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVK4WFM2%2F20260809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260809T103554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCIL1tVoqvFJk0q3rU97wxNTlpfT%2B4Uogy8hsEglfG%2F0QIgJMkTTBU5hEPHtLQCybbW2lVOXG0vtp7bFVFDmapDeU8qiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBCmCW4pnHxCSMBeEircAzn4geEksyze4P7J0YMW5%2B35Xcsqq3CSePkBIrLX3tNVQa4ce865ZyoLyV81MkUOAwE4hsHEiooXNZJo3mBPw%2B5juT1B9OEFXRHHjxGq9bo3c8KnYsW%2FVP%2BMhhBBowqEdHMNrSi%2B8uuqRuTIxArKdZOzQqz2Obwmb6sJJ1Qxrpz%2BmvpxLYYMkVPsdSMJB%2F9umg%2Fmfi5TqmOQnNfnqkc4U4EYQXi8hfhDJEvVjFv5aT2UJSxCK%2BMT93CSgprA1kWoZRa1fQv5U89j9vBoRkfI2vWCA9ujTnVMpZ4aro%2BK06mbUJ4CIjhrwBCuK9C5NMdF8raKHCU7D%2BzOE7dkw5uDFa0sh10eYopCvYbuztfU0lJaInr5srq1gcmOUeXA3lINFRNRU9HMlL7kr4bruCd1yeQOwgG75Hs5S%2BesUhkyDspfuUQJGqa6ApF3CnmTxxBjFL01%2FILyZNDVm3tnhodLGBqc9a9rvG8lj2Iixx%2F1J26tWF055VXoRvu5e3rSF6d8T7NOxllwIB2OHrV12qbuBzPTFBY7MPUQsL2lkb1z9ihOSL2iDD2%2BuSOlXQt7yEy%2FLshf66YEYDen2vcp25roVhDt2D9%2FqfTgr%2Fp7yJDq%2FblFLq7X01K83mLSnaZeMIOl4dMGOqUB5Yu9aimc7mEzMWbYCPcPHgQS4C%2FSpc2d0BvROrCJ1eyWPm75hQ9Z%2FE9vXPqOne8NnM3oykEv0BbRh8NOQ8pc5lsOA4f49q7uqBBqEl5840ZKjfqLs%2F1rSUCspaPyuQrgjrxTHcYsDHqcFAD%2FHwmflifVSlSqwRXgJ4LL7Z3MLYZuLMzcGndmaT4hOFDcKpXfQY15mK342ySdG80bBSAcl4fBxOBM&X-Amz-Signature=4663b6cc87dceba056c7b96fb935c81b54ac3ac4eacf5885210ce06f333f2635&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
