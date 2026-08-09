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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYWAAB2D%2F20260809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260809T173207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBON6E1m3J%2BgRuw69NDg5hwqMLR%2BMGP6IfCfYdGFfY7MAiB07dwPJ1pzCJeTUOW4LISKPvyK5px%2Bvz98BFdHsQYCGSqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMH9aoKeRN5DQ8l0riKtwDoajrh1L9cP23wIV05qYFJQtXEKUMnt7cymLEivrAH%2BRxil9%2BHhWqh2pUl4k%2B6tGw6juGzo90pyQapmj2Pa899ZqTG9aw6HwfTDffCmYyPtlapaEcT8iUN7lppmXwtUpx63ilRHwTCfkJQrejDj34w%2FZi%2FQs2UPL7TJ9GQEhHPrVj5eMspmgx2C6TRROQI9kcjeX02GBSQlccGG3itkkiYZWoo3lruEWLhu881KaluAvf285GL%2ByvA1OfZqqdW%2F%2BhGxHssdnFgLzNmi%2FZ5U59NUoGuRxBpVxNklzyPsyas9gcYd1PdATXzyMa1g6bJFg8SW5dvMF7T09MYaBL0Wv3DsbWwx3PVoTLTD%2BAiqQZCBMRvpfgLN2MpMCnlpwzkWbX56QtZMyDL1QoiqPUBQdR44AutGHykov7RHR%2FIOqxmWApR%2BnlRIHS0sUpgJNQpvTwwh3nGZKhGT8VPHfBPanIGzkEO%2F7IF1ijeTpRc%2BIWYVAnbmJYuiAjKKTLLSV%2F4NDeycNQWsKo1EtcJE%2Fk74oMboXWwHRKZ9vZaM6NdexcWVp1%2Fr2QKBw0aq2cXKXdN6ixxbQJMHtMZOJVkifo9Trawg8D0AmrfjMSa6xDSlQ%2FRxcPjN8pNZOB%2B%2FwaEcIwzdfi0wY6pgH8WBWgDy1E%2B3EG0DzyyGNrSg4mlUNNfdwsgi9zq0S3RAyGQdk9oMTcIkIxPNOSqkffXAN7pMOGRU4HRFklwj7DbIiIWUUDlZerZFeqWCoKBzdIwF1mqcBzQvjMZzujDM%2BFDDczR22LRbecO0rlHfmtFVbNQ8kf50%2BvNim1HbT0dQd4vk1g7JtKRXXCnUc%2B9aEiBQwf8T6vqJWzv6RRbkbtpdv4Orjt&X-Amz-Signature=fe380e08597051c47090240362d7a7bc6fcb2e367c0a660ef647e93862231546&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
