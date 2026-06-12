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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQ5CGQIF%2F20260612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260612T141016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQDiBcdTXOIflo8gwD5d0lbKLzdwUVhlrYuaVG34LCPbVgIgEPQLwG%2FQdeJj4euWsQrQZxSmg%2BXbAiP5l1v1aj1g3w0q%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDDJNQ5Vjmjh1QG6bWyrcA11IKeduWjURbd8CNZYoS0dDK4W6%2FJtJrVQfUypQhgiUF3lYQj6NeoRCIEYf8FoMoFPoEx0Z2MDSEGTH3Pnlouxcnlhcre%2FS0jojcJV2V5%2B2%2FEzJ5yf%2BV8Yxi5VZqbHZA%2FenlIf7sBQA1DzA8Hz3guHn785bdaa4woL2hpMB6odKvksd3PLKQ8DsgoLoBHQ43%2BC2qzCQHpIOwzTtT6tsXOuYW2nHxZ3xcXpobQ80EBFfptSThcBa%2Fo3lXSy7vkqZcn%2Bca8hl2Dkje6LWS%2BSBS66OzceYxLD1gH6Mm3IsYCln5KBX4h66oZSJdqfM5qyoroBvoBwJu9gTUBZZyo1a1C0TLJ7diVW1Ja6Q9BK%2FoO0J1FQUPnl6GD%2Fqk%2Fkp6U8eeFdUtV2ozmgTiafrpb5OLfxc00xa29EM95epY1Idv%2Fjz9ctPBN6ajsjl18AXLIakrj7rfig7IbDJBneIJcx1bc8duHCMKtsTR5qaL62OFehz9%2BKgV0l%2FevDPzShVUz42Z%2F93epW8%2FVBvWy5b%2B8zeG3oU2u6Ic0FTk6KtLl6c%2F2MN%2B3nx9iWd5sdVrGVFCabk9oG32nhVTcOrxTCuGTZAVd63WSuL%2FoXibXEz3uE2IAsuDfMzX4un53QTht%2BfMLSLsNEGOqUBDo6hfyXHLEY0oDuv3R%2Fq24ucNh0BevKVnRBAx5u7sgJR6%2FA29T5LQbBVrLkAp9y0XwOyXwUQA6PZONZqpE1tCrwcBx8bxKxPLJCPSMV0N%2BKCNNvf5fK8bpwI57IZdBHGntOTCR4IEdvBQfc%2F5VFPZFEJzUaAGeD7CbgZhOdKbsAIz6%2Fl4elpTsDoph62tTiEO79UJ8iPM2vlu4%2FJheEI5PfBZ2gR&X-Amz-Signature=23624f4b27eaf2079f46dbf628bd9887e863878d2d29cc3fadaa8a2f3d1dc93a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
