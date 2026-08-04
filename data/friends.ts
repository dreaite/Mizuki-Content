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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFRVT336%2F20260804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260804T182742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJIMEYCIQDUfiMTSf%2BfJfY8R8JzeF98xy6mwEj5zLouB6hU3CsZiQIhALetsbSRpIU77GA57jey8KTuiFy%2B%2FTZ%2FoVsGDsxU6If7Kv8DCBEQABoMNjM3NDIzMTgzODA1Igy60OmYoDa58MNeQ9Yq3APP0ZH0nhgn%2Bl8mCSWT2FlhwIKT7Wo%2B06PZdWGFZuHiT3CI73TSQZ47Co4bv3W%2FoCxKlBeWtQJIG6YczKuhQ7u3uGL4GZuNvg2%2FOGCQwcD5Nyd0sIDpIqWvMRAYaDSlyo2WgocGThBEOn3a55hvlqS9khR1q%2FrZ1YfTrP4mqOafcc1IhyvwhjB7VgFE%2B%2Fb9PWKykMRchwdeXA55QomTBm%2B3o2Wa07TGqkmrrBtR688SaTTqHkzqJuw186NIC2sDb%2FMR%2FKTR6fj565Wbi26PoFe5Ao91oDaifPBAVq0V9Vcj3FvRaqN2T59SJIethUmW5SqBQUF%2F3oRq3Jq2VT4U6qa8L8z6uolyHhqCzOm9HlcSg1zH7mCosAaBCPOqgbGr97di4jcpbJk8zpxNIOZdBz0AoA4T%2BO6ejQmB1uC0xQzTp3EGQivFJrolDfLuaaA6HAsTBTKgcBTmNmorpD%2FpwS9DYHjC72A3WepZJwb4ZjpSCZWrniiI6WBuJsy6pWNTojlDXFc7V2i31J7oD89ieHUuQpw5hSBTdEH2kTSpvgrXyOVu81y2izc4K3khkv9A50oafy0hwY2S1XKuYWUVac0Tk6Jya2AH3o%2FLBkZH8xIrxwniNw96yGwagsgURjCwksjTBjqkAfYiFOF29jQoN6SEsSjHoaewIhkCGPIFf722Z1CTuLNOzu0%2F%2FZLCd9s0hIZ5MaCJCXw4mhY90DKugSTYGwMkzmyYmWCWzrciL5vdzXqAtq0h3FitwmJstn2q3rCEwrtx41Cfu%2FAeF85hnHpNj9f2%2FsUQh0Nf0CJL1nWfvGm%2BPzbhr1vB7JpSDXPkXqgBEH3h2Ww9JdZSPb2FDJH9jKLuy9CGsmtR&X-Amz-Signature=68c5f9c552c05f076335dac107689f2b8641a4d29225751d19ea9b2400f365d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
