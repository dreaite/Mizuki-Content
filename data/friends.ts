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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTVPXOZM%2F20260714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260714T080834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIFPWZ3WZHT%2FemvOmQc%2BYQ0AUpx7xyUhOyMjJYDkrob0iAiEAtR2nUM7KNPTIUheAuFhbcbbLNW5PDLmBxjvECb6FfNgq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDHHTDodSyZ%2FVMfar%2BSrcA926Epad3KctNuyH3gSVz3fMGpoClBTDcV6lC5X6G43Pm%2F2uCw6NjZ4irnAC%2BeHPMJX%2FzLd7Y7jwRC3cIVLDF8EsXiU3kid39hdFkmzYyJBpaDX%2BUTEIPZRc265lVwSffetpSYtRATYyyRHc0gigeVrfLdNXBimcc%2B0ks6PBVprkZcga%2BOzYj9JujxHnilphH8HwnIF1QkHBeBCQpPwLP804TNI5zlwbdU%2FaBYWsuzsuDsd%2FemP%2F%2BoXomlqtD%2BTx2g9LpHmJJDEWxZq6lQzN0c02IH2Xicw24iAZoPEtttLiKS%2BeolPNew1N2TvuuSbHHOzVkg1U%2BPrMu2oVPvRSfnGwgNDhnQJ313gzvWWR4z5k4gaIWqTIzHdV8tkh%2Fm43YNYh3GDHdCb00MpGAID3yKF3t3u5gABaNOGz6SJyKagU5nFp%2B7ZKMnYopJ7MttFBNuPriZzlf4lz0viJdSNINICutXh1JY5%2FZfrbD4hYn3Cle6g4wqa1nfu7RsZrsteyitW3jDOSlg59W6GWaEDEgafRHIoiQFnFbuLdG77LbWC0b19Kh0Qfsk9vUV5qKAIeixsdScUy35BD9ckBIoZnMK89j84CR4O%2FGMl0%2BmACx4bBovGUxjqo3bqBMnSQMOrN19IGOqUB2yVvjqHvSc5nAjeK5TybxdV0vjETEf3zOiNaba7yKkvacWw2HWLO1MOeh3LP7kwwLIpQivq%2BxHwmQ34B9t2G62K55DlJDu6tpqV2dGEagMgNCenweNNHgjsrlbSpEqPIHkHYtNQzQi%2B2p4FST8GVJmUG2ok7%2FK9aR09EDwZcrjZTMdH%2BV4i6oEdILcPsaGwHXjs%2BpF14h5n4Iwh9UwTTiMKWzFe%2F&X-Amz-Signature=da5b0f655b7b3453825a5de0669dbc40cebb023dc0b872fa17553d2eaf4f80d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
