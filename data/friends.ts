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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XEQS7HE%2F20260703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260703T201521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIHny5LehZXqAHIfj0QSpiF2W%2F7e1F8VxhNnhiicBLxLsAiEAiNb9gW%2FpYmC5eqs3QQ5BqEv02s%2BtWZbw%2BjBPyfENIQkq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDPeCbHBdDcMpUQQyOSrcAz45M4%2BLC2loKabA%2Bena6yGSHl0Y3abfo9cJUvrDal0isWOOepU40hkHsCUSV98JH9WTz3T%2FddMkEI9FaTAkBzcRQaTzug8vK3%2FPYjZp%2FLou%2BADa9y7jiTAin4ymdezRGv6Rz2X%2FSVNJWMmju585eNROv6sFPtUle7GYbJdlHdGq59FIxjOPjCZnqmWK5rDAeHTZAoRK8esl5p%2B5PLfnyaTGVTJ7d8LD%2F4kn%2F5NNas1LXWvBPzzoTPDqsPEYoPQDUurQyUzyUqnzsO0g%2FGwCZmUbeDFOTBKUeltZEp0vDkGipQmksU0mJlI1thVUi9Z%2F3N6S7rnSMZaJ8IGpPjezIRNFRqbY9ZHW9wBRdyC5ZaYEhz9hpIrAZZF2kIPW%2FN%2B0UXzc1RFzeD8svkgOlnWBEGqwHQRVMAi9y7rNy%2FayRyvoN5zSAE7GHGoh4735fqirxvUSWNzf0hJfEUyPpvNVrxaYNQO3xOGRPzj7%2F1Uzaf5r%2FN4gQjBAHa%2FZsRTtd1fgkCDWNZ1Nt5wOwmg1xRMDMg%2F1NX2S6MzTJ%2BuWSk6X9Zw1kH%2BCssY351msV%2BW5%2FCL3E8TAcVe1QgAhrv9mVH11HoZoh1QHEj03%2FOY24I%2F2ymaB399cOufLp3XIGAirMLeJoNIGOqUB7ULQffF4dK0WYEf8vIRB3rATt3uAj5rLbUaWHd07e8IBC5HnQXJOZX8xV4Dp3e5z%2Fus%2FQWIyL7TNlQFSWqTsnFT7zIKB01f9sqpgWtQTRhSts2a57DZXS0n7LdSAm2aM11xewaNYpizyOsRfDbRnLtdUlupu9mtIliY9eJjjr9yd1OEbF4CHfvQ7r7FnLhpvjei7QJLvsuElY5%2BvpdFFGUNGt8T8&X-Amz-Signature=5a88308fc7c0671d9e933a2ca133b3abc6acf4963e80fa64d2316ffb6e8070d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
