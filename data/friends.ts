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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKY6FMMJ%2F20260720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260720T101259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB1R2IeKk4mODrf4mt0tBNMaJN%2BvezFSlrDB0SSC3LKYAiAfoLZSqGEhGMJZ6ow2t%2BKDv2xXknCcSKSw231RBcdL9SqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMugZE9bj6nGfs965wKtwDdgnOk1paWLk83t8T66UMtge62%2B1agqaelVC4%2FiR89Bt2Dw%2BH3z5ACE9U7Nb8OPDwGZJ3RO6bsnyBg02HL6738SwCKI7aOmxiOjPcDoWtBxEOkutAuRLwh2G5Qd1LtalweSV68ROz5Jk2nACrUkTc4S%2Bz9svhMjGt9WsZPHwd2JQD4e%2FiAz65JYVXgrSIuRYJ6VrZkdDbYpkoWwB2MdRmHPnGtXhZ0w5fat8IVPn6FAuhks9QTBYMyDlC8BGXlvdjfJcCG8izxVQTI9yAv1vngrUwsmYbfg4iB7qC6pCKkxWtvb2a8bi5qKU9S%2Fe3PCUGNLNQDWaG20xX1ZRr5uOUpn8KUxuLoZQ%2Bbm1jLHMe3OCsxkGYOb%2B%2F05AOSe76iNq1fZfW7a9mZ%2FUsfFsMvgsdfxQkjPMi78rVxiIx7sGlK2Uz%2BF1dHvC9d9NQMSAEeInpGanRCjV8dMci4pReotOaD75dzrstwULTpWGxRHQCh2k%2B26uES1Z%2B%2BNjhW4L22%2BYIl713styERZmiz2DKv5tdp5xgBsyieUQwl%2Fx3vLS2jB1TxRciOPEaDMd%2BfYCkfoFa3NsQl8WCOCnzMlI%2FHr22uLrvm%2BZhfy77WcSigp%2BB%2BwWlEfzEUOAGDdOqgjEwhs330gY6pgF4zg9lL0iU3XqYsvTGzA81r65JOCNdIYatA0Mz6eAlFEngbmK0So6Lr74X2UHkpPDe9TA51KI7%2FRNPqkQqRfJrhMe4XzKdhA9CbVYFXGNgaBK%2BgBfkUiFkoq%2FkGRQck4W3cxKubMu%2FFbIBzDNhKJT%2BAMUCFZESnIb%2FaU65YScmSNE6FL6ZduUfpaNgZkFGqLEfxIRqdQ3DLTCvURz2lcdx4DUNmzb%2B&X-Amz-Signature=86453f475302fff635d57df753314acbbe7eceb166f29b008646d029af366669&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
