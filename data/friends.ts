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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MEFKBBL%2F20260625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260625T190603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGwd2lU8KjQW1wY7jIbBpK9LTJBbSnre%2Bdj6Rk%2F6oCjMAiBB1DRevKBmMTdQ9KL4dKoLZk89j6BzGcFCGYpich7fDyr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMpUq%2BCgCgn3UHqaUzKtwDqR%2BXqzZPmfj3z8NKSwJDvinmZGnOfa3C7Drnqnu5hrVn13K5RDoDu0mlaNe%2B3%2FAlgtVusHLcnXfcYDF9B%2FOQmUAoCKjzmzW1Fro%2F00KezcZkTnPyhihvSq6v1XutpLIS1l4S9gw1ZASJzcGPiAtDUsgiYJL5xhmzXdtuvXpepdvUImLwwPRWvsIeHZ2OzNHnlQz3FI9zSDeYD5N%2B4gwY8j2n5MG%2BvtHH1zqXdTuNR1gdFHCCvASwmmO0zPjl%2F25sG6MR6abDMQUn6wMPYC7XB5btxaHh2tOPqZu2rSrRjI9hoiKbofYCZRfo3hr4F6sInRK4%2FI6KZbvbCE0YZdxI4ojpHJsSdXIZ9bpWUr5J4K6RL2rM6dmPiYt80P8KbFy3p0esqyqZl4oAckgsxIdsFvmvXbSyF2Mjt5VhsyNlXTzxe7e9Tr83N%2FZX7Fyezqq3kf4RqB%2B4o1SqnNxIvHLdrB1w%2F69j188dfxoUp%2FfEuLZE9PXF1dB6YU48NW9O%2FXsRE0IDZqzFp%2BLyxWq0AyXhr%2BNYyS94btjws9TSm0LENBt4jnLBqX4gzGedGgErt58Vvd4oG3FA7cWCtlCUwHCAqe5tFBtpJbVzcmXBOFZxDGzyOXbK6DBebx8FNEswwtz10QY6pgFqx%2FqD28fQEQTUehSb4R0lQrZOC9I5BI4713rKg6k44Lr9MyUIpiCIgKztDpa38hHhIyBWSVkZBkxNN3rI7VvuEDHPJl2eU7XPS%2FX2a2XwBm88%2FazFP%2BHHQ0QAqG07ht2Xb2dxFysI%2BAHlNJO%2F38DH%2Fgms99jxCu9k%2BOvQ20vcIDsxyXrCSu%2B%2BnFC3lcaMj730mJttBkMLBbwlhPDPTPyxRV66%2BRyY&X-Amz-Signature=686a96d26ececee620494d7c3b324b4feec5c2f83c6544ccda2a0d0a44482eec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
