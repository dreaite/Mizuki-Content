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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FDWE734%2F20260623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260623T123426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIB2zg9jl3lf9noFr1Nh1hGvDcS3vaMZEGzIpPijjjFsBAiEAy%2BkVQ%2Bv41Yb0UhCq2w%2BwMdBgb9O9qWYWHvXFmI5o7nMq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDMQaRUkqMezapxtm1ircA4gsVXVtbu45JbiErsMbIzxIGqX2wpLa3iDIsngfWZoYo9aoo4g8ctSPc3d%2BpkPP%2BDrdfLdFZkVXjW1lZZkNeRbLyN9iHpO8JN%2FLIUJLMsTLCZ9fmC%2FOgK5y9q37Z6sNmfEepwmDOzoqX%2FH4gdlITI37oI4xlQm60ndfwwIycCTZqytmxMsLXDhihpnRRVdJFadImvWcmFvwJs8vAbP%2BrMRIDtIu7hnbX6m43CgUWXGn81wPVVQU0vSXnMlI0%2BaR7yx9RzMRNaxPDLuhQ%2BBMlbrOIffrztPfXtvumtkxLiPNBsKkiujkit0SRKz3Z%2BSb0avu3uAmXMjOgg3Hs2Robb4rLe5pTb43c8cfx9rkQyFWsAiFuoVVqds0Hm6NPfL5mSkzBWoRQcvOlRRFzgRHcH2mOOnrf0ZHCeUdR%2F2knQTAXbB6eAou1tJrv3wSDFj%2FU4rv2RQdIaRtM2nvE1j2A63hqt0lWUep7DGYXs6zyKDJbwbpgaM1aPTbss%2BbahTEm7nRP%2FJP6voMNzgqBKhUisqXPeLnuY60xzhIlUfs6uimA6aarVvNthL4mJc%2F8Yql14gaFb8xmyix0tmPVJiRNuYxXwFTdidJ9UkMZ0xf%2F3xy2DPO6slJx3t0xT%2B1MKDW6dEGOqUB9WxVaiLJh4i4Yqe7tbj2yPaU69cAP1YYikMHobsw471zGxf9hybbYduSICLDCr%2BrhluxVUhpNeQ5P%2BJbzf9lXDi5pLoOn1T5Ybn5xFWHlTEAYHqMKlgs52d8xuT3p8r41cFq6ScVCTNFkujJLrg4PVy04HL8cfapTlW2bls%2FHtllGef6wmALFVC515Vj9i%2F8Znd6UQXXkJUJ35VLb8X%2FxqBU8bIS&X-Amz-Signature=862aaa95e40e836d5226764e873d562936a5a97a50aeb5044da39d0d5258ab63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
