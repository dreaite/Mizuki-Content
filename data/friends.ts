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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSPDODIG%2F20260811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260811T070956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJnFHScp6F6DrmthyaWojJOo3lTF6w1AoQ8KM3oeHTIQIgc5oXrGbtYsCg5ruqJCaUNmOqxgPgBeX%2BThWDpsVHYOMqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKQz5HOVCkmbpb6iHSrcAxXr%2FtfVkWeZe9exU6XXskFcCMfZ58VGdn6r18Ziynqpplb%2F7YSj1wKihvcRo4TdNa1u1q4hcDX6Ow1fsiSlBIbn8XyTi0dinqbuuyJiFg%2FRtXrAM8MK9SDdHBpNoCZwOi5V7MrlvZEHT5GJDleULBN4vEAFEJeBZQqsGl30Qmy0Wxc1EBN3%2Fgs0j39jIUNaTeJ6jerv%2BkPJDvCueItMtepGye9ybNpfydF%2BEa1k%2BCqulCLvormIQi8kWgSbsg%2BFQpYBg03i2M70WMdE5glL2D5f5Hb0qZOEBni8raaUgvq6FTL%2FfMR326nxwi4uJ1vGqMrfGRC0HYAZ7OUI5zihlbUn2dfM8oCY0I6jC%2BcK5UCt0PxzAywAcYjUJoG0Oiwd6zzM2XKG7Z77CKBochGM%2BntDbJK12IHs0MhV0RkdO9bK1Mxf3S756CS3X7hhZligWI0L2NzSnFEmEdTr%2Bm4lyAe45xo%2BKOKfkSFn9Jbxc0Jje%2BVGQHSJiHM1agqli9QEY0Rz6G6jxoieO%2Bc7Ct5LpMXF22bNZ%2B9aQr0j4NRlRVBPdiw45nO%2BoCIRu264ceg5Q%2FGh52%2FKZHlpgwyygonZcazrWU0%2F6D6gsFxvIWIzJEX6kRIpAl%2FAZgaMNqtEMPKQ69MGOqUBNRssXMr8qdcDnFHZY0eiv%2FeRcRkUi43NCg1wHcVaHTIh8RjNMIt7NmTwSis6C1orcNFx54jx73TnOYxRqB%2BLbDhjq768S2uiMm4OvkaLtQhYAxi9qKD85kxk7Od84urNUmIPexOGSRcVkLGHLRmXvR8xkxVypkStHzHWqqoyo%2FLTLsqPUpX48q0jdX2pLjhoGSCl1IRs04Qs7tLX8KLDqD1Siito&X-Amz-Signature=05a26a056e5e5fa17c003c9a7f88bb163b6127ee20d14487476c5de5333bcb87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
