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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7Q6UBJM%2F20260722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260722T135922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIQDk%2BDwe7vFeB9smlg1%2FRaDeLUf4ODe2x%2BOPL59h8O%2BUJQIgG%2Fa%2BKIFTmuKDwiL63F5TS2SW0Fj3dT5YVawV9qra9oMqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBOmgVTLHib%2BwBDPCCrcA78JGn0FWxy0uFs4iqH7bO7%2BefyhgtMgxM4uFRtD7%2Fa1UGGpn8w%2BxCET4vHoOOOefXpn%2FOJ313FbVbxcQmvMvp1Lh7M1sLR39YxRPNZc9HHkB78KBj7wELIgMLQ95ynq2zKSCCR5X9feCy8Vi6oR2PVSTaru2ndiBBh%2F4Gy04Ar3%2BIa7eo9b5o9Q6gEBWDFeuD5efkclJ4d17QKN%2FlWn5oiTbrZpU5vshfsjb%2FJ9BmvbeloJSj04s06rZCYlRIp%2B3n%2BYZwYbc5LCS9Sy0lq0hHuiVYQUXrlB%2FbVeVsQHptPm%2BirW9rhR9kzZF4vAty7BxKniw2J%2Bfhng4sT61iDlLmeCp59VjlDN9BBtkzlGKp%2Bt9yV25rePYL4B9SiKyLjfNXCK2RRS0IMBTAuA0vLv%2BCe9zL1mFLeHI3y0V70KWa%2B8LwZdpEPHXACGr%2FI%2BWMu4ndlbz5dlVmUrwYOMpoWkP9nnzoTzszwFAWHErWY62UUWnN30nQrAGjjrIX4yzEkHCX8fVzJrM2euRHfPjOpl%2Bh5R8QzIDmYzKf9DzSLTpap0EDdq63MssCy1xuknb4CQFmLh5JdrMW5VMUaGv8WalsVhnlALTTM%2BSAJreN229%2Fz6p2S7hFLTHbWB7E1VMKeSg9MGOqUBKl5qqJNylFbfUCyst5O2TS7Q%2FuuARBTGBzZY1a5ZuCiv51ZgH1%2B6UPRzz7%2BqKC%2BdbcFzkGpMRNjnME6jHuYt6WvR%2BNnH4tHPstP5MQLY70JlHh4xsWYWpEHnNxQUcYPjAi2%2Fpjz9irIRhnLFtTLpqwuiLxlcp7GDugAICKxjVxJu4dlzNlLQ1biNf8H2iC8ZkosB7%2FJqcJHL%2Bsi%2F3h2qjMH4J5r1&X-Amz-Signature=c42b9ccb3195907c830d6054c56ad823364d75b5ae7b96d3ef6b4fbebeff6c06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
