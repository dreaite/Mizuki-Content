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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VXKYZ42%2F20260628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260628T000422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwizYl%2Flqq%2FhZee9F7CBoh35ba5Oz7u%2BUtdxvmYCtdPwIgHy5ULuofeuVGpZ0ph17Y%2B5ustjRn%2FKyBS0BvmOlhCMwqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBlyYXfqfn31ilJuGCrcA4oBiEabrgY7jvEhFu9OHhVj8kziC0cTm6xvWvE0f2u3ApjyAuSG%2FeAPbHjuNN3rrL8gEOTJT4LxHy1IyKb8lJZ%2BZ1DvyO%2FEcq96XMz%2FETbLNO3oA1GUVMP2%2BpP0b%2BWZOFYLVClDszhfs7kJcm8Yn634vqCLik27zyaCygrjPWSJDZVwsZI50Sem%2BtRO6veVgkYSzpdsaLHxQnYtgaC7MO04jZHZGwOrAD6ACJg1xeN9CWklOPoxwRT66meahFI0%2FFGVxb%2BbuTRVhMV1cjG6C2eQBypchNkYf0szKFxwkJUXTETyWyrJiwvUM2ykbN3gXF2brS6tajaTadOkc1fooXTX%2FwesO1HwDDe6lMVUwPyUKDzEr7f7BTS%2BR3kYYl3seC6QFVynvzxeADEPkKmeiuifM%2Fy8IGRGkWA4G%2FDqo67PQpRWt7mPwWfVwBxw6%2BDXX9FW3btMrh3CHbxfxaUZzBsu81amyafdb1jU6zOfBlkzqPcIyH1k581DD8GwpvKV2yhWgtCbnYH2jDZQX6hwvzBnZ5Qu3RasAFb0rtFt0xn%2FLM76hUmZ1mnepvJeHPBmFKh2wC80kR9lI%2Frr1jLjx0DMgIGaDt5WRrLGWmoLiJfGTxZVwS%2F0%2BjLUBSqoMKnHgdIGOqUBY616Ybntzg8qElISXYaqhnqBoU%2FyO70xtdAeQaRYr13t829cUjoSCsGD8dPTlN%2FTIJ5Ep1hwjxDrpoBUZQASNK%2FxChxAc0kF5vS%2FBff%2Frcm8sKDg3FyafNp36UCUK8nd8xC1gdtDIla8TdmGMmGNvL7phsEW2%2FAvy1irOCdypSKGzA%2FIExjEX5LqsH0UEMzSJ0MSleUlA293X8Ju5yITdyWDtxuz&X-Amz-Signature=f9404b277b1dee985f3f1085a622eba1cc52803ac91063fc81b5fc0f1e30905a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
