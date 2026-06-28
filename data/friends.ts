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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEHZEQZV%2F20260628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260628T135033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3yZkLVtZxv1g0zjfoIDZacFRvDqLkMdIIGGRt4ku98QIgfED2s2Hhl%2FwQOa8dPX%2BPp8p7lL5X9C6C6SqrWOahyCcqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAbQoAjfWmHwFg6wvCrcA3ycfXIzMt7YmxRA38UfUE71XjkPNPNhC1c%2B2D52YSM19OoWBqwqAwPyK5BGGyvlZ7MCO2Tec%2FLwwAxjmpHNgsz4nnX5yeQ9XL8pf3CNjRFz6F%2B8SccGuvcm1qhiMZRz9xsBb8L0zKTR3ql5c3ZKdE0VKd2JfFqnNLoMN07fLu8At0qZ5m9uCL4Wx44wCxsS5mJleWBVc6%2F%2BUUQ7lScAw9BAwUbqT6Rs0385k3MQfQtwYTQh6lv9JpwipSwdPQm5u1plv3wdT3BAlWCzHsr8m7wm9q5pCKbw4NpPYfA5wCGUyHCZtF9kLvF7FBADslJOh1tym7QE22PPj5aatr8xaWqPSa4KpMg%2BIpI0%2BTOUjpdCZO1LhEKAp7BDQDStZ54XCKrqqdHF7DFQeMju2h1DHbiAqQGTunaLQLjjk%2BSA8sWY7hTbijJSrCVEhBzy0h9dMD9106jA0XlsZkpszfaHLehFej3ned48cbv6Xtu4NkRRvPMa1Gh5vWiFxznSzcIkKHvC074eyhdqTjU5C76naMAo83Zj1%2Bt%2BkxShI%2BbcbMsDmL1qcwuN%2BsTkS54ORGjpI5u3K%2Buw5DkigWb%2FwhhucKWDKhEw1l88QR7tckhJ6uY5F0gWq71QTd3Qa2VPMOjPg9IGOqUBrbP7n0QFwdc%2BacPgdrZscDrhUWLKoHGVRMr7AurA225Q2S9YEt9leAYfP3p0AoXpxUfHF8hf7qXr1U%2FbWSk4C5RvkhzIMQdWrU7ONSxuroCmrw%2FF%2B5u%2BL7L2UT8m1Rm3W2aV2CRdg3LewkG79lDXOXvVvK8V0LSDGOYs1kJf4QWRlYB7GKvOAqXkRk63nM48x%2Bt72WfcnTg8bhmB8qrAs7FshyXv&X-Amz-Signature=47126b9c1798c7439473c602393be14e8268a7c517b02fef62dc78a6199cc5ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
