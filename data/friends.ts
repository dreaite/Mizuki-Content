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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7RBBPP6%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T170045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIGB6b7H0xfmtRGUEgafkP0QKB%2Fk9JL%2BnQQmhUon14S7AAiBA8npbkOcDzklMHz5YY8F6zPc86EI8nhU32qtQ8DDdciqIBAjI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCYwUCgaorE5G6O6BKtwD4QmcfiV5KTPnmg2fEw2pD192kRXFmtQxtCJQgf8qKrY1Y7T6K0xZzYiCGgiwb4sED69MKLQETfKMEtON90LA7jrFpLAbRh%2F5bDeSdwAJ20mCu53RqfgY2z23tLzJltGW7pxwtVKXFtCxrLxOigUt9kw5bTQkNbckTrdIAbCy6KmAsZ5ObzXqpWXw4t0KZbe1kuVg%2FKRG3%2B8l80fWQBpXv8n0pDTHEO6upoOiae1Y92KOF0RJfv95zkoMzlkHoXxFSu4kUnewheODWcLxUYNw0qA%2FONBdZvFIb1OOBHGriBWx%2FdFBwtu9n3QjNPsn3hVkivhbwpteOQPFp39uYkDaD8ISG9vEVUsoVy9WJNmBwMDPhOP%2FXY%2BDxAJtX9eo6dS9v6e67%2FJJP3oEsrQOozkWvSSJl4lHmCbIiMKvIIu2V%2FKim74Bv%2FuWzaU%2FGpFPivEfAQ8Tpp0ghC0ddbsGi0Jy4DgmCSqYBSz%2B1gYQIVncZ5egFajw2sPL60KSUzWN9%2BKncIl73H4IXNfbnwcYwh0MEOgUtDL6nfmdKrRNge2bGsdDYBQbFqkNAacVBwGbDjR5tB2ZxrDfQ35r%2FEU2eYOFLrR3I9nUDfa9SF7H7LlsLSRxMzupvDz5NCmBcIMw5Jy40wY6pgGbAkC9bVna0rlR%2BinIm%2FUJrEdT1zxd%2FHGabm7tExqS69wb%2B4lt%2FrOcqHfLWTv4MdftD9pvUYtp4v2U7rw1OKzqdNhwmBCUIIObSt6g4Qs7q%2BYZE83Nzz3zirh3joezf0hc3qOeq%2Fl%2FH7dxifZMmBbU0sxwjg%2FLtc%2BBn78HOb0Poau1dP38%2BOUFvZFIJz6ICPrxRmM%2FQXfDovjTCB0KV%2F5vyOHwjCdC&X-Amz-Signature=9d0862f0a01a57520ea391fd5e30e5891d6a107e19a05f0857bef688fa6b1f11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
