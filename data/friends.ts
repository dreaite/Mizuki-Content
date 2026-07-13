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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4TBRKFK%2F20260713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260713T184431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQCIDIUrPyK%2Brs06Z6lFFT1gh3OqqdAI115M%2F14J%2FZf87AIgQS7YcvDxR9cM0v%2BHR0hikRVG7g%2BZSIo%2BwXZUavffBlYq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDKdhtBMV9YCjZX2ydSrcAw8hxMqQ5jW3%2BCHfY8cnQs3KAqAxDCmS8ljV366CdmK6JfWh6V4a%2BMn2g7w0GnGUJweqX4Qwmix7Dv2GIQuYXqBuHGKVvyIX5%2F1MYUJxOZNm7zptLVwntYKGpzwqk2KoBwfkXGnR9G0yHZ3rM1bV2aHFpYUTL3x7wt7D24GG71hzzDs5PesduqxFjjRHiKFyhSjxSCwAQP231q3xuiFz2jpmr5OzrRNqaO7dS0MsMBM%2Fj6TNwmbANpBTDkNe3R3gY5jagr219kqjCTjHM7X7b1m%2FpjeNquRNKSRO5HoqBIHc%2FXh2PgR4GHwuHANV0byrOwTuwpi3AdiSlHDxhCGHexKHb83dY3Uu8WMrXIvKCG3MWR7WzX437qMcBiaAjZE5LwsPj8JAAcAlbdgMGFJoRvwyWg0cuS%2FCGgkKZL4UIusyw6oDN5IAQx21IyPXq7mL%2FMJG%2F%2BIiey%2BqzbLYH7dibo6gB7SSiwzTPwCaWphQfb5ZR3PVoo%2F9UJJH1GQen24IF6vNmAEG8x5woOenfAN5AGfi7wECC8T766OOGz60YwWU7H45OkCacrKvV%2FZdecYMJcOjEaXRm8wYTOwjqXLJoJKu27qbOjv1d3I3OfDkO4KG2vXcAw5FxKYHKmkrMJjU1NIGOqUBvvxY3P7advE47KpBxHNPDWt%2BfgYyOHovr%2FxQM0mOpaNl8xWaAr6ZlRIoo79fNrHi4W%2FoouB1Q78gy6fR3USyDucbyuo0b6xoY7gnbGlNxeb7v1O4EQGXdl5BFpFjWCQdm12gH5s04imgbAhJ2kIItJEjinm4q44TTQPXkucBynoksrjnj1sUwQfRUTxEgjiLKt3g237UXNpxsxqdBSOuPDRLWg6l&X-Amz-Signature=b9cfb720042e11ba103593d9feb88d5dad688952110102bde511cab180a09e17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
