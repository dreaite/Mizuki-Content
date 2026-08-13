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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTPZUJKC%2F20260813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260813T224234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIHzDZmjDW3h17dJO8e%2F%2FP3AFI890ayM9rb%2FJQpnFzZlmAiBMe0Gk8cchbWBH9lNu5Zdfn4fQlAHDJz1mAs0XN7LAOCqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQx4sA%2BhXMqQ4pYoDKtwDFO9U3OOUHBs2BgYuMH5OhV0%2BB%2BvRSN5135gcda%2BpyZmpS%2BYTWS8WcEtJrbj39VO9%2FQ91VlsYlbSEAzasmfM5bSJUWtuk8ox6ZPvtVIteXHiO1KEMYDzsgO%2BxQX09YHh3%2FBk4e7i9QMFhdbUpEcDCgwRbG9hcAba6ka1gPnJ1bQLp90L%2BCxC6dcIL14hy46SzsKfsnocKnhPzsTu5lFYeY0dMcABIMWYK3ENycIlwkS8EXg%2Fzy%2FztvFFZmJ0iMYdm%2FiVmgWEkr4oYed%2FBp3xq1u8yRlJA%2BxuzwMMqwgfcOJ4K%2FiRCK0Obx8vOWzXfnISkvAmUwC%2BxhamDpUeU9M5wEPZn%2FY4ZHmS1q2g85iMtlFuIVISNYL31cfDhfdwoRNA722VdRRTHi9%2FxTkFg2SJg9eE2EjSqtQOk6Cl%2Bwbo0z97vjju%2BMbkX%2BbgygYMpiba%2BW6rTT0WcsXln3KmCFE1oTZoYYH8JQr5uym%2FyN5HpRGUHimqDxhnE0Bj26ikkLea53ntE7rhkWBYCZe8Jp4AVSB53tTAZ3Li3wEzs9QR6ohrHF2yZ6bV7LFos3mfgzwSi%2BspHLCSQCikeoEU4ABfuVnJTwTvXKkaNJvNAsUoOG9aCpAuofPYpW04VxZswl9340wY6pgGHQ1eKYyFCyTzn5wB9962gtFY73C6K7MOj3iE%2BBzRNQtlczC0JmjB%2BiNJDcTefqlIVRALIowFU6PFHe%2FJrChV6TRuqRzNgoIvAO7qlVGk0u%2BwM4v4sNu3jNzoOmP0GbfNqgiMFRb9SLYCclDJl4a9KTqTZAIjd6zd7r8oCk%2BdObOaiP04o3hvH%2FVkwpOUT2zFSVH6phAQz2UijqRqoC90bt2cTJfpz&X-Amz-Signature=359a14e3b1aa49809b671163ffa56fbb39c0b5a3e2009e640a56f6d886b40658&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
