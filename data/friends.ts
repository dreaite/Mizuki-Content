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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBJUPE56%2F20260614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260614T221259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTn3%2BaDVR2j9rXuDQxLmaLIkCIPeebYD8WzADnw5tXSwIhALifR3X4qzuUNnijvK198bNzBfBbT0sElsg2jUeWHEAeKv8DCE0QABoMNjM3NDIzMTgzODA1IgzvWpjd3AZ0L4im%2BuIq3AO%2F7Q0xvKsoAmYQB7CPs3MiPKLRB89Dz6K%2FhwKw6Y95tvvqaFW%2FSOyw1aPDp%2BiuQdgtXtF6UVG26W%2F4kcKFT85hjXfKRpnBK2iuMH0th92JunQ8J0fY6ayQDRlavVYMPprX26HW046%2BA93wiQx7nRHwdCrRMPMSYku8MTu6JgraoEGR8vCWYElQBi1ckzDTZIjHWspZxrZSylFTK7faKhhmQ8z3tKeQSOMb1BcdFVyvCsh28NlRRcvZisIOiuMvLcLOBOucPXUPob4PaFvaU7oeJRSAyO062wadFPf92qozHdQ%2FVlm1xtSdQSofyN90%2BotXdbZ7a04XBER4ADOVhPPfsD6MuoRZ2ILm5y%2F3c98mKEA8RB8LjjW2zdFxSPv3rG8FpbaNRvJvD5U0i0zab5w9ytZEQvO%2FDthSISbxbrkNr1CEp%2B1Cq9myWxP2GT8Lmy41S5A26%2B39Mhq4zQhnAYoyu%2BZud7OybTSB1hR%2Fr0hd36xKMHzo2T4LNBOt%2BgZsekxs%2B%2FVj25C4VWbGrrhgpBovCIVLhYgX%2F60LsFjVHh4ivPQS%2BrYerAvLNSi1o4JJYbixcEdJeFu5WiFZanQdILkDVz8sEbi3EupbvyEmIBkuj0hCxr9b22cn6G2HQzDUlLzRBjqkATeKXmFAapCbX3HyhFQakmdEGmVrcpQzX2PXsp0Zz1IOfPNXMHKNfVP74rnePwNYaDLJWZF1TOAedd97Uw1OqzIIMYXdN1hxZuSwYAi8pSDFq1Cu6a8utoNPDxRweoevfxFLNS8H1TvyaNsQyn8V8Fk8q6MdPflGvtRv%2FK6Ehflnloau%2FSCoUZdvtxkGxzG1qA9autnq62B%2FeY8%2BoRxLIBZETJ%2FM&X-Amz-Signature=f1cabfabd7533ef799a506f4cdb1eed0babe4054992ec79dc0990024e4fdb99e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
