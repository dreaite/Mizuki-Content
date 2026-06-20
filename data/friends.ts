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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SE73QS5Z%2F20260620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260620T162030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJIMEYCIQDGpoX3wtfgW6H4ZiaBNe3cu7MDV0ttnsrnn1kDMtjvHQIhALAh4uE8AVGoXv10m0JXIg0qPfDEDNR1A9rZgbhPLgufKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgynMXc0u7Fdp2f4yBEq3AM19KDEIpElj1b0ipmqsMgwBe3K3rY015IdbDqBYIKs0EZ6WuhhcfANjzvNRKDEeUxDx3leDCw3FFvouGkhQd7N6xG8zlJdWBIwz%2BkCwS%2FAggqeVA7WjE89mQCoiRRMD%2FtInY10nk1%2BrJJPtG3Cr7DHcIOIjeJKvhXb0p1Rhu2g2SZfjv0qM9wqC%2FzmNwKh0NZGq5o0Zcbo9lrz%2BKoOakcjAc7%2Ft6YewoYOmWmt%2BUQNUgBjRUs926wO7W%2FUjAfHTgyAvnEzXfmzftWMBUIBH7M1w48SP2w8l1nRLSeXfxcyFUnYBsiG0wHWDOCsKTqGWHLIhWLAdIk%2B70evHi44vaIpnhswSe3G9FT2fZzOGAefLYRllc5ALFlkNqJ%2FDoSXI9MSoLNKXLPD8D1j6ULguzZ15xvPlJvzq1ORbzUZPMOfBfy3ByVsDB2A6QCoEUvKcmtgbFKpVIvxSWln5CRqs3L0O9DQVRKuYfd6FlA6s7kMq2D8W3M5jgyC0%2BgfY7W7bt5b3TWGUCYHSgi86WDwQ48wuHzw6Y8jSw2ObgV8MXRhl%2FENgLO12qXY61eyoH7kcNnppXhRXgh%2BfTcYXCUKbxe7OfBsAOGwXf3EV44tIXcR0CWzqhKvZHtDMsfN9zDV69nRBjqkAeH0PxasYoBFeGJB5E9doS0TcF7UOtnGYpHdn%2FYWwTBzrdwOuQrpTm1LxI2hzJ52SeGTRxljADMPH7%2BMBDScMyvaFCGuYRmGZXW9w5%2FWK5STondgWdBURx9OdTGG3aihHCyXK32fJGkRmGVxZcGyX0QzEP8tRtWbJ4tpuW1JMDXVURsml%2FEkmtEyIpdwVQoVtzYJz64l99UnwTAJIk7SS%2BMjXeKv&X-Amz-Signature=fc342c2a33d2fbbd17eccaf1238d097f442089a8c62684769fea8f00c66eec1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
