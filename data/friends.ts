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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KSWLXCD%2F20260814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260814T212605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIBvbzLQCY%2BS0se%2F1iueFAe0qCEZq%2FoeWU1yagwSIqh4YAiEAohhnhmP4%2B12yHMnJ3Yjo6%2Fh3aa%2Bh9OXTz6zJlStvmIEq%2FwMIBRAAGgw2Mzc0MjMxODM4MDUiDNi0%2B7WZlL24ELu44ircA56tXbUlMP03%2FoA9sN%2BHhiU5oOrjh53xvDHdP1n82GfRdqMPUta0J%2FQ0CHp0z%2BhrREseyuCR7BI83qDB9Meb0u8F9JxNEkIYaq8a%2FVHpi4mSJQcJtGv8X6iZqbnMtSIKPtdIg7wiU26U61YdHr3rY9DFzfBHx3K6onkuDWolAmh1hgSfo09keaQvvvldHzaifcpNULPW9cnzn4SNJ%2BflMjrvBwrKXNibaiMB7PoVNWtG628D1HGHBGVIQfs3Jcc9h9%2FAvHotadZgPUTgkqpvllOauZ5QugotYm2FxrRy3dX3Mrn%2BGPFsva%2BhGjomVfbQPXHqKJmfku1K7%2BGcOU2XKaqAIs%2Fl4uDpyQMhSSbfOtFw%2Bw3xR3mrHtdvVTACWxHGIRcksPE2iR1ki%2BBrQ9zrghbsKC2L%2F%2FfAopj6MxuF6%2BJ%2Bc2vqJaoPB2HU5tDPL3VpWcGlT%2F47mdv4L3r7SUE88335VxSBn0GQWgo3QfYgWmRGMOaTHk19RF%2FVUD%2BWBiWoPVG3AFF%2FyecQ2Bt1a%2BBrg1JtqBHQb4UHhlKCnx0xQ%2BCPF5RNHVt%2F%2FbZiAFjZEdXNwoNlflvR21fbkF%2BQf190P2PzDH%2B2ep3H3UMqluFRNk5UfQWJfPVC5dPNKQs6MP3w%2FdMGOqUBENfuPEYD9Ror6OSlGuTb51lbdYa2IC4Ddzh5qmnPLEHPE2kUkcezSXd1N%2BD4BX3ltDUYOW095%2B6CqTn4tVTw53jxe5JhiNmjC1dcCyBEmiQdupXuQL%2FkbGfP0w0FRZvcjNXQVk%2BWtpXrCKMv0AOV7fmJABTtxWqBIca%2BCfUbEKXPlGI17We7O3rjlULeq%2BLSiPbP710f3%2B17Cjk835GR5jTjzB%2Fa&X-Amz-Signature=ab04af2f6cabc4aa2f6a7b91fe82a4b947d52baf8c43551311a287a2a1130682&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
