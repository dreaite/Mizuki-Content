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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6ROQDL7%2F20260718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260718T145448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFBrlj0dUFJQBpgWBfsd66vreBbe2LPQipKZ2eJc0XXMAiB1pIJ54rxJeHtGDrpk7MYSA8L%2FYLSEPEpOE2JejSybxSr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIM2AMtHbG8%2F0VJDBDOKtwD1X7SPNsnT5lFiHlnR70J8y4XlD8pgOOO9mLVkhnXHdaRYlLfk4wTMCuMeZ3pZD1Kl2afn3UvS9v2bWau%2Fs5vm0WBRjRLtcFVz0KQUkYrVgQKbYT0%2Bf9fLZ4euRosMYPlhN1yVo1Z%2Fmbs97Y101coDbs48V158O40pOIl4tgrHjuf5Yg%2FqZl5aKTkG%2BsDxFV3WU4UjxQ4hoKyFG01YeBNbTD6v20SvMmisBQSrOe%2Byz3%2BUNhXVQq2Ci%2FzFwk3XYVGNhhOUTJRq%2FIoPMZi6NO3U%2BHXeuj2KOcOGmJzZ%2ByWFcQr%2Bo6DY1qLVu197zWUEvsmns2rZSAb%2F9gDg6qhbWFxOCrsnQF6xdaSy5cStzRK61UEcg74OCUBC496KyKE52RAgk6us5%2BMqtEmCCzexQMG%2Fpk%2B0EQb9Nwz6ytOx2w4jWLu4J7TWorb2EyJGKTEtIBSI4hHODHvLi4frJiGYsRVhxUfTzjWkU03t5mMUTxqDI8ZUrqiRk2Ovgmk4jDywWzPVw4xsLmjMfEcgiUF80MRU9Wn0vCFgX1wn1sj60%2F1W1J4Dn%2FZCONN13iAYe1QURCrxmwVNVmpZIh%2Fi5pyHCWOl4BfverBQrP81q%2FFuuDbe6rQpeEVYUKUm3qXv%2BEw4P%2Ft0gY6pgHCt8WxCQqJ%2FWJrri3JdjQR2eUNrgKuE0I01DhQiyxd3gtBwxp9CZRSX%2BSONpMaHyeA6yYTJRegDspOQy19U5NX8tHoWuoswRdcW6gDud%2FuP9StDJawSvKZ1CVU%2B8%2BQtvQV6WOoZy7fGmOLAHpTSCkXchI9Hr3gQE9YDB1%2FLSRWz4yqBYmgJ7cpL2bKd74w6%2Bo%2Fk57bSrQrMp2yc4PFWTW%2FaYyRtYgp&X-Amz-Signature=9dd9d4636835b49553ae3c132225148772355e6f1b48379e08710d1a5fac2d65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
