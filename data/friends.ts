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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7JVHGOF%2F20260708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260708T181859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDhJCt7cvR%2BJPDyHnyaf8mU79I%2FCpBsTpjWfYbFNCCulgIgccE%2F7yMlLj0KBh0qOLgu10tmOvCR5Vo6XjVNrdohKG8qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNt7im7FQG2R%2BHuOAyrcA6ZYLci93MmJxqF72UFn1r%2BDITmAMAUVbnfCFclIeolHeBPpB360VKSt1FtYoeGCP1Ph22%2Byku%2FwEMPxMs37f3%2B7kC30p%2BPToNc7LdpH3jwfjPfyt5N60QC%2BRDIQa%2FzfjIe7QbsclN3Tbe7zluhY0laaljC6FOd6OntjJE5g%2Buc2nAovjl4t4YnTG%2FEbbIecTMgjExXbpRxbJwKRb7kElawZI4jj1%2Bbjn%2B0dAvRuU6MCJV%2BUb0bo9XO8vd58%2FjHfWOpOhy9bE07O29nnj1uXHm7gj1dwIe4tE0RCKB%2BrpujDNz8xtQie9pCPoKIq4j34d4yElpYhk%2BQaqHJHrqss2iEhasC%2FVFmlndVpU5BJzS0p8BPypTDUt45g9OAQmQOQk3ND3I7APBKxhhpyGENab%2FLknJDVNFQvl%2BToeWo%2BllQhmIEdF1UdNfpBkA2BBazSHi51EtOXwCZ2bPB0NsrKGO2Wy43YuUnm3IDZOCdMJHXV9RJFE%2B4tOOyS7e2HfgRjrpL5qBEWSDIYVZCDwYE6CqGvCUJfx4UnB15r9sb6IjaK2ftxznDvoogWDMjPP1tl3tbi0ZOdfFkZjmtewoL4JCcPtUFhCbVX%2BKXpFoS4W9VC%2FTQx20KR3Wydgn3LMOuQutIGOqUBSDalnVXDf7Sn1gX1XnHoAHG%2B80Y6ngPI%2FNAQa2oc%2FbD%2FZCgwd6PER2jtUhj%2Bz15UAQB%2F2sV%2FzoINbwqjuIe6pApkg2do%2FIbcgVGuXOawM5heFbcImf5GC%2FxCS55KK0nfcBlwwF%2FzGOQfMZ0rKFQj5hKX6MCHIcl4EGWvs%2Fllc2MW8wvvmDDKGSO8KZ6V2YU81jTmgZR7o1z9rdkbF2YE8gn%2Bwyz0&X-Amz-Signature=e27bdc4f8e34566294b86f855134785c578ad0b2553b68eaa1e9a512ab0a09e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
