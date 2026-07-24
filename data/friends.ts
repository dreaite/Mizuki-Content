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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DK5CXEM%2F20260724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260724T220519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIQDvRH1UzIdEzrcb3E%2Fah1sxH9DAfZlZU%2BCiPK0skfNooAIgPs5WPBpExr%2FeQEZxUofV3DnsmX%2BzaAQ6uLhmSKy5mkkq%2FwMIDxAAGgw2Mzc0MjMxODM4MDUiDHQo%2B9ZnhPpRtLg4dCrcAwR8uaNHUxAsgmYQ9L3pc%2BWgjN4nHj%2BCoGK3w2cQaoDS%2FZAWXbrjx9bEaMlaH4VjhKgEDDwWKNBmqiN29Z0j%2Fkv6KKAOLg9DkvxnDJYv7pDzv56pMAiNzUfMIH5kkcuzsrgBMhC%2Fhbe%2FY7o%2FpyeRWH3%2BvX%2F6BwxFvHSAInSR%2FXn1OXEFUEDyEJJ4dajH%2BkAu7%2BPWHew8y5xhCGR2RZUW0WEKd5tZLxSoL4QfqtFJA4hoj6FJyB%2FUUtAjatbrEckwx79Zo%2BMXXd3ICSLjoUP4Q78ev9kFu4DDzjEdK8kYFeTZlb7AkLjpoHmYtWigaOXWkYbC0uB7EStIPHRMDAYE9a2fCWWp0CbzGDrXOflBvpjdz2lDwDL4Y4SRmwxN7QMFzHPtF5Si%2F7NLDy8E2Ey9mRxXRcwa85HOI86EoQPYEn3ECIjtsFEduLdpRq%2F3opYMGVjwZVawXjgv%2BIv4fcMK2OYaX%2F7QDIRSqrCAPk3oWpp%2Fr8MDNZdk8eT10PaX6%2BdqmKaybQtXPIP4M4kAApBsIqzwoHrsctckoft9Z3YUmLBAithHY7iSKwgQEMo1%2FkC4PZfjVGwDClaXTEiiQV1tvVNmBlG40q6nfM4wtWSctBJ6hPv%2FoYkwXzY9OudoMOi1j9MGOqUBlVJClQ2JD%2F87dVEOI%2BNo75rUqSUGi495p7XVMJEDXbhN1B4J7X1%2FpfewjW%2FWQ9Db4%2BTqBrLYbSRfyy4QivjFZJbU3Zz2aa5z0UEX%2FoQRfDXOAKPON7%2FgmPueDGVK%2FRG3WHgYZ8I4Rn885f6D4VZIydoV6eRUrP%2BFWRlV6YFfGHCXFBACj5wxRDA2N2sNpN9mKUbd%2FIWfo9V4hwCCRPIYtz7DiSss&X-Amz-Signature=f39e2528a45a8d4f7108ab6c2d7a0adee8afc396ac4a86c58cf0e92f78432393&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
