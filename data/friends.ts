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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJGWBSH7%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T205205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDsQVhbMAifj91uO1j9ZHkhzfLxgg05tjrkq85jP1EXbwIgHppNeUawZXenatdlrJ5x3tFBgFP7S5oVoVdhgMMr6DoqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAuM9TsiL9TRTEH5jircAwAzox65aqAYKXwi948xRKxrjqDd4r4DGlhqnGTgDLacQkIEx1GPnot8udclA75k046e8vk35LAsArwiR5Se3bjvuwBFHnAv585LiGopgrwWhpJPzD%2FZ2gfVhSawnNO6x3w8WF4CfLWh%2FaZ85Nq3UvDVpelq3gS%2BtHqgIVvu6v0ja%2FY77ctWeHA6AWhi2eOIdAvYEkIUdVjeTjilpXlFkwO8gkh9ZPa%2Ft79%2BkZMhH%2BqGgrZDv%2BSB9cBIqSKzKBxQrnc5LbRqUEknRGwPNR6AdM1DpBVKpIGaYOa2VcOfRqGDfoOTL8TsSzb8d%2BKe0gSFTdiepovLHO5v6MmteCHQSpgLMrLeyvM%2Bphra2YeWINFvMvAvQjBe%2BbnR0hiEBtpk36joraA1XHtqZXHyGT7EUyox%2BiORgPs3VlV8SR7MoIS1JB%2BZje31eAZG9HPnZRuSbF0szTkapU4utcXrglw1TfJeNJLNLTqmKpgyAYWpdSWOPzJ126pamiFMH4cCvh3QufibTYquFsJ5o%2F3tvfNHuqDLb9C0E%2FCVr7BQS8ZjFKxiAWGOpkNx8OSZ2MM5v8RLFi0mACvtYCwo6nzv6S5RJ%2FtsGbMiFjQy%2FvUQizYT4Anonu6zLTb3QjJy1MkgMIrD9NIGOqUBN8dodoYYdd01O04cS8fwHhCNz9SrXf15WE2eTLv4eEqHR1lHnaCNhZVvfCzWfJwS%2BvqUGmRMDM1bojXrZNYtDjBXl560swK%2FjXZNwSzgO0mbFbx%2BM2%2F7bjZoat8DKxN2BgyDsZ2UCyIH9hyeJruEo4HADGtMyC0TMPdSYWccGoeV38ARmLy%2Bo7ccUXX7enijZfcKWmqAnQM3cAQST2crXeMixAMZ&X-Amz-Signature=bec5f062683672e5f6a74fbfeebc58058b78b3811f85843b2070341aa7bd5de2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
