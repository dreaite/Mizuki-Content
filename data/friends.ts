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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLXIFXXJ%2F20260702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260702T115014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQCKs%2Fp9lbqwhs%2Bkc%2BrwQmt5i5XpFuY6YVGkPitzQjhJFQIgRar%2B%2BK6eoTnWV%2B9jYQFbUu9RMJy1jXwFxpgi7mdrPaIqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNfWunCUeg7gNWLCbyrcA6BqjG9BhbDS8wF95b%2BDM%2BrVX0zISdhgSxlmyNTKNfAiLEOj1dfPprqqrtmLE3WAb72trCW6CJZzuWmYpuYi95kSopojtEeI3g%2BXKDaXm65lTgMmV%2BL1vuaBEMqOw3Her8Tk0FJZ6r%2BwX%2FXJF9X71CPmnEdcNisC0sauQxc%2FxNSNoSmDa1yngrZG5r909g90JGFOU9zFphSB2ylGYBzs%2FtVqa%2FT7dfKuN8vdDq6cZ9SXxpeOll52261CCiIK%2BZlPBP4slN69yeoYdTDEngdSMsHHBPcBNYyQKyPnfeXCAHsYPCnTb6TP0Q%2BVNshtf3uiz4shkMyQOlfSbTp3FVsrIIkcHK2kGZTv4bsJxsuzd%2BVUOjnvdmEoa4P4XWwfKsLBBnO6Lzqkv03yNJ8TkRpQ9%2BO3BPiDLX4xkEn8iremNsIdKnts4j1EJQuLbK3a1cHafBesLVaAm2yrTWNw4HU7%2BFN5AJDnrFpFM6qxFO9f4Kgwg6%2BStxaEZggKcCMmCS4NWCACeDwgRUDEY0ErFElmaxxdh%2FSM6rpJRCXAE35WnwOvClFjc0cvcTrLnxKmaH7eiK5Q646bHBc9h6DhwJmB3CaeIAa5HBl35GSkiLfGPQ78uGJXdXOrlnu2OmsOMIXXmNIGOqUBGbOYkPDtzQNCnNOw5CGhdX009ttEgoQgJzQglTNWENg5U32iYeNZ5gWh7I%2FWfWYrfp3S6FoMYblbBHwrbOHyJeJ3MWX104YxFrqfLH29fVyHeTGt%2BPMeAqp4moFwkkZg%2FoxIJRxed5327tDzeja3Mp24nEVovTtGsDXbBSJxhxe00KrWCi5nlDi5POEVgdqCZzSRxg%2Fdp%2Fxs4XOuZdtbRY5Z8D7H&X-Amz-Signature=0b808fa1d1aa34ef8e77eec7a8b995cb2ff76ddef51e282fd5b1be254307ea60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
