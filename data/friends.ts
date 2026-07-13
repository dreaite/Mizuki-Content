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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRSFH35H%2F20260713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260713T163520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQCdyfyEj1nYYWV9qfCKMhZHRyLR0Oi60QDQMvCe25QjRAIgB%2BkS78WvxG72QhDLKTEAkI0wzvBmEezD2kSMk6sq1i4q%2FwMIARAAGgw2Mzc0MjMxODM4MDUiDOxyLVQmB1dl8GJY2yrcAzbm1JJdZFEnDhtj5Yz4f7HB6N%2FuOAM%2BfEIWH6azHS5c5aYQypsTh8J9xXNU%2FC%2B6mONbUl1gbsxEBTvWz8iXvDDe3BUe1w6Ocfbsp8PGYOP%2B0x5gXKmc%2BhNk6%2Ft5hn576Uj9lzkHXGthFGf%2FtlAzeoumDumoeE0lUdXIyONfBNK50MW6yal2mHVKW3t3%2BNVXOIsvW18rlP82Wl5VhpoHOUanmbnXrRyetu8PVXNVZhjjPj49NSWki2utAXDpj7c%2BNOn3fHfxSBDO1LJoOwHFA6Tz9qeahbeyKMf8IWMO%2F7rOO%2FFrJ1IVAX12%2BLhY6rT3eqKKjv%2BaYAqia2ItLAPUBBJ1j4%2B0Lu1vj7oHpEjMx9PJkSi4k5FeGQ5pg7QmWZUtgKe7xnl33cU2bhTVbZLupKkdyQDDcsvQVTHh7xM04WN9hkhhox%2Bns%2FFWXokBGJDrn0On6cCYrSBBMazjoAwFVXPCsBg07X4yTeLLo3qet%2BwqcyBqG7nbnfkdw7oSe3fxPO%2B3XNGk%2BcGzgQP8a5N1sh4Ox9HAS8pLPPAOC9kVJW4hUhZxeMhMn%2Bz6mk61e%2FHnKEXRYFZ%2BviaDbzlkI%2BRmCS233GyeLaitP%2BkIO9hGaGfiw4N8m%2FRPjvycpU1vMIab1NIGOqUBDxYunidEMRZizBeDC4nX3TNpPuBlC0G2ZkFZ%2BbVNPncnaI8xn8dnVCfBszsLIrXHrMn2f%2B7oAQ3HNWIpVenApBIAMO9imSZ%2FQz98xDr%2FPSaQZqJqs2UZIAykVaA0uaxrEVm0P4C6O%2Fq92JF4gngtM951fV6bpV4S84fYHYGmrKE3W6eqhjjL%2BzJLO%2B2lzllZfViHkuRfIFAGpbHCRiuRnw1Hjsyo&X-Amz-Signature=f2df4fe92cbca29493f79bd3a21dce9ee500e282d51a33a3b7a4cd26172c55d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
