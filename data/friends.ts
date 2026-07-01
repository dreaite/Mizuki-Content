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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DHD5DSN%2F20260701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260701T200552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIFyFAxP4CzCIiI%2BfzJt6dzMlUO6J2POrtLsryzZx67ABAiEAyxVzcW%2FLlCNHCR%2Ff8Zl9LCgxEipDpFJ5QyW124e%2BavUqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJam%2BOpRU6990lGEFircA9573I3ovif2mKkemVZ9hNJ7s%2BPz93nxKd8DyFa9Yn6ZrmwNrAfwGJEKAMBh0tdObVcfK6bIJgCVWFoSWiPQKNlc0Aha%2BJF2rQo14CmhEJzFfyuLpw6EDH7X%2FXyP8xuDmEnnufm%2FqUtfcBmP6PViQdq%2BT1q6O%2BoC1NZiBPM0nmAXk3tZvs8CKbe%2F4MzACbhYnrlgvDkMobBxGlbxTimJJaLFDU2msAiAEimuzJzDbD5x25cHCozoFTMn48qlgSIt0ScCL50s6ELfzrHeO%2FJW2ub%2B23uK4hc76JKjQ0LYmIY7aTIItilXaalVtyHE%2FMTeuigX025F0Q%2B%2Bfz1820KxYUdowDp0s5i2lIYCvm9ysMYz8CoCchy%2FgtfcoEX3vhciBb%2B25DKlt0oQMMLdiwJLzy5yK9zPcg7yG22QEH4oqIcHmStjYtIs82LMPWlH6Z1XdpZ%2FZKTpP4WKr1QmkVa9XLEB5fb3ulM8%2FwZRx3PF2jW7cyQPq1fOWddqVzifVIKox4TePbXkhxsEn%2FssQciTJeh94RhqM%2BZStnSMP3F7I1MvnpTS3m0bCzYu%2FWVOFhUdwR0WvuHacH7Qdu5iU39TIInp5e%2Bitek%2F%2F7VIQjcnyBMvfDoTI62iMuRj7f1qMNfUldIGOqUB1J7jbIuZV3Fzarrdkvg3mj5ea33icAkrs4JRwSCEUKcr%2BQ1Bqnl6rgddRER%2F55jlcvsvzIiUqiZsntXFfRkZmV9Md0WTHXIXDRZKOuigxFRrCUeDeXKDEk%2BkOxvTKeam%2BsfzGid5BzB2SCob5YygR2X0PAhr3zH%2BvX2U2f4zuW5pLtrCjtJd9vSfIUjBZk%2F7lYiIQGpPEHVLNC4SG7sd9p%2FMESQ0&X-Amz-Signature=9618480fe153e359ed676f8258a48b7b9e9a25c05b0aa201f5aecaa9221116d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
