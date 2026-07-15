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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBOQF7M3%2F20260715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260715T162336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIFrhNU6XfpSAeJ0XBunY%2FZMfAKu30Fi0GC9YhKdHspUNAiEA7S34jvppe8pDCriqlPTqx6JjknhZUCBBGNr2nEIQ2pQq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDB7F%2BhgATTjCBRFoQSrcA1TqIBMYVL97nJNrDwLwtjGwVZPwD2cB0ebp9k%2BBWmjCMnNUXGPtENvNmFXUqlkBWA9l9s7aeQ7hbgqV2d33opqckK7JUXxMDLvd%2BsQq9jmyi44UoTLTkOwGe1AejyGJtggTUPXrgDZv08pQnqb86rjQu%2B09QilgJVat7QYPLGL2S4jCQ0RDIRSvoEnyiG54K2d%2F27SYhvE4sezrOn8ouL6sVPl329MMKpiPxcBPVhMS2alG3ppEtp7E2p0Qw8jlNM7cZUn8VlhvCNbiND%2BcrnSWm6NRBOxhE6HxbtD5ta3LsJD%2FGyrkePUVjeI7gmHE%2FmErk2Eqa0MKX8CE%2Bh8W2J4LPDMihuIV3dkFgNWsfNtdlkvFrXXfEeJNJk%2BPmZoQRRlXSM1DouRnVH2bNHcd%2BbiCtn9e5g41gRKqGX4Avdz4cAm8zJ2vhPvCHRIm914KLbFiJo%2BuXKVg2X3vkw3zUTnfGeVPvllgZ8RIvqUmlyNe2szLPv3YXM6ci4s64ICTkZc5J54LJqezrrfqRciex%2Bt%2BYLNoR6xmfFq%2BecGJ%2BWgeBly92FTT6YgJOkY87Pt9fK8zfGJ29Uxg%2Fd4JyerTiFykQln2wKAbiIG%2FgFd8t4zvnjTMaksBROwYDlAoMLKq3tIGOqUBK7G%2FOur%2BjQz0sVqZ46EJ9c%2FT7mQ7f0mnezrUCziTQveyriBSK4iWXM7Eoau8FD8Ip7TlCJIxtXtXfsQ%2BwxBGilQUpUjB%2BgWqtD0rQV16dV0Ck2QAZnEn5hdotzNHoxPg2MYsRgyHyeDBaC9Z59X2XWDp02vTI%2BPip%2FJLB1BwnWiocAti30crE1jbqsT6zVkzTx0o4spIotGEe0sWsWTl9hH0Rvnl&X-Amz-Signature=e9f4160b160cbbfb6164b2866f3702e1092256b6b01cc5bcab9b162d453be544&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
