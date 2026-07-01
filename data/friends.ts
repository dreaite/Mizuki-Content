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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632LIGXF6%2F20260701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260701T221836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQDMHpmhxuOqqx3h3keckvPHOs0TSBdJ4QYPSabagItCGAIgTakQcc8vPdYZ5e63PIwUuqILi9Syv3n8pV7V2MtB1RIqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEkUCkrzDq15xdvX%2FircA%2BzbDtsaTp%2BY58ucTGhT2tu8LxgGLEgfUdXtZl2qusQmUFVZoBiay8glQREKHJo%2Bl3XnptVP1HRSWasyj5wWrgC1U3lCm4Px9CGrTocl3NOnSacaEbRA9XFRZqErpvu2MsCS2R3K34xkF1NK6uzzO2XpRUGdDiDyk8mSuEw8MaWcK44NV%2B4e9kBMB2MdSSu7rgY4h2MsEvXa6MHAlAZ8KBXwwybzF9ZrdFTuR9TLgtSPE8KrXz%2BeQHkCXspWgOceWGvvFTQG4b1cC1k5lk3GiYExFjl34k%2BQqDneUa8VMO9zuvpDBEBSUZCb9qqzfFHs9xpSmvMl3u8%2FabLMOmivRfuVNwYcwdX7oSDUFGfRLxhX4QxiU3ng01J1jicryyFKWP34orTfBB%2B4d%2Bm6ke3BRzoR9b6Ouci24pN7K%2BJo%2BtcI4BN0FVD5BTEI0koKxdC8HeZn%2FDTm3YNwal%2Fc2QlNCquENVKOrRaRiHTbtcQ6O0yJ%2F04sLNLXLYdBPT9rgA%2BAss2xSa0yhWAc94pEQgBDv83NowfTfJaGbue3VYe%2FIbD8lAoDAvfm6r%2B2zAyYnMdwWbhPWnUtemr3zzFylKRFHTRrT58Rkeh%2F71mxVVz3K4UExOS3xCT%2BbdD8%2B99lMLb%2FldIGOqUBBKISkadzbGnYmtE3sQTfAexXh8XRqCMiXiOiE45rbj0moBCNVLgPjavm61fXRX9sSbgYl1qBfSNEeUND1wUliB8vMF25Hb5rkIzbXI37P6u4L9DCEaJxxO1GTEGJNl9bfRd8T5LdmR3ffJdUYTByw7%2BWvTODdYEK4c7VpJC6Z2Xvn8IF5C70AnyT1sdH31UtJEJzPSM49Dy1oK0nQ4acMvo70XZF&X-Amz-Signature=ce841978dd8d9b27c8505b1bf0a6825114ad2f45dfd7e1524e896a17c951d5da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
