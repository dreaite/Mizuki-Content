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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UW3OY5X%2F20260716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260716T191355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQC%2BZU3vN4sLgJD6lMAW4GWagHMyaI4eN8btrzHZRTJsUQIgMn1abcSrFe1JXv0Tp%2B9KNUHZ2avH5ln%2B86biGN6V%2Frsq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDHjA0iKVkv5zNRpvGSrcAzKwBR68%2FDdV8hQ8xqLka5ywd%2FbanFE2I4%2BmDqVQSs%2BYsvHzZKdi8kjNHjI2nziQaQJ6JGwv40pJEUnR6uDSdBzBVFo0ZWiBnDELsYoShtDMyNgIM4I2mV0Cyd%2FC2MjeBTIIHh00BADKF0QrcAiCKJRZli1Qvf1Lrd104Zc7D4S8Ua2OmJjJ0sIMg17q1YumL%2FHQ2M2rS%2BmjBP%2BgE0k%2Bf0AbGeQWC8Mq5XQTh3hOcwVMD7hZdXJygHyNd19wVzwBg0b2MESCGX3BAx2L1TTcgZbHmlXqT4qvVDi5FMbyxtuc5%2FIt2c1k0WhwJpgBlzZt%2FBKx12dwRQX9CcsWaaV53AuyUI30mSyRz3TlSXSjt1dG2Nna8P6sofbv2dfCpcpV1j8ubrl2XEt4FjTjTkHmxZVsd%2FH9uJj9mv8Askqpckb0JCSMMAg1sUyunvBnz%2BqJGM0ICW44ZM2HiupMgSsg4E6LesMQK1BrG2SkefEnjSvFjd6OdLuBocPh3XfcfBKeK%2BiPxrdoXKsVk52VvV8aQP0iLdqtIozK8nMAyTid5efaugP9DyK%2BDeEoET7i0Vcy8KpMFolM1rRtBL2NqxA%2FSrPLrs2xlMM9zSMRIag6l5h0CUrzkd8UyZaDYfKKMNHA49IGOqUBl5t0zaMJz4%2FaFPTZOvaAQy3qc%2BWvNLvsfQv%2F3qX8nQlS76sul25tRbONDeHdqcs0WTCjg7DDXp%2FKN7QeklWm529CM8NRcwEQQIPT3twXvhjbWmn%2Bz4cjIfZLZQFCsy2IRAyH5l3Wh399rFQIKX0RA5L1%2Fz%2B5gL5M%2BRUn1Yr1tR%2BvCWZHQWOu2dJtU7jAch6K5Fqoc1M4sh1LAdspu6UVQFFVFlVa&X-Amz-Signature=15446e9781b24a1e1e06ea0e31de528b0d295122c1bc651fcd8277aa00754731&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
