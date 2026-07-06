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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZTSEBF6%2F20260706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260706T174506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDsCbh52%2BFocSxr8K4WUi4%2BeS6BJUkYErQxNTvaljpliwIgAfizV4PNb%2FfbR84mgCK6d11vGZsY9243yAXuzeR7e4Qq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDDVIgldaNkuTEVWG4yrcA9wQoOiiP7BCu4eBHRxgubqWWU1ihXr4Lf9ztPBwt62421Tw7n1rOouNG79umbqV%2BdNMwCwiGgmQ1e%2BMzcdIqPpMNfwQ0pTzwxq%2BIPRp1nqVDiEZwcfHYshvCTpX81zu4Xs0OUfcgFC5nlssyrMwBcu7%2FhOMIf8brPh86g4yHhDGQPb7fP2Waa69CALVtYr9kIdgSSaOoVcKfBOk%2BbQh%2F60Rs%2BLOvcf%2FlxRdWk4O6x3a38Yi8OHJ9HRF46MmE%2B6hI6BH4iNb%2BPMAvHFEH%2BMMSZyFaAtQ2zQqPrIT2Amn4NEhfyt8Xc2077rEv4UI4vJgaQO2MCFdCgOlqC8ir6eOV1Q7Uu1oJ5VOu%2FibD0TFUOo8eWjI6sqGuh1Wn%2Fz%2BdWoJ2dh6IbGc0TcGNfmFbagOZ2WsZA1K2fq91BxQ8drwxzjAW%2F97kTHs1v6y1xpPoCqiYjz4On%2FzZGCYKN2hCmNL%2FhLu5gsyTQ7Ee80lh3qIh%2FUhhKD2CjtHyLi%2FWVJdA9pfPj1Fjn6JH4O%2Fq0lSwMzAMTkS0Uk1Wop%2FbDuMlepWDZR49t4fb%2BH2TJ30s4SZ2ogmMDYgkMOR9FrJhb485URtxaJG4bvpvadU%2BimvEz9on2y25bXbTqyKwA65OAZiMJ%2B3r9IGOqUBvZqBGmA%2Fkys%2FBNFVQzhPX4pk66UMdV9zwRwC7zRN5knKa%2BWlwUQeFX45OcvWimtskTT%2FQUzDUShZVk6Ir9Far%2B5kg%2FpV2u1W9Eukd8wbUKQ3oDmFHhzJyLM%2BArE76Sy%2Bj0L14tI4a0Y423QIex3SaAEAmGAovgDqnqjWyav5zIDBcNYYjhQbcqws0zWYVEns6F8c3n%2BKRKSqK6DaYTJ6YZn2YdA3&X-Amz-Signature=13bcd92d629e7a860f837de97ba99a06a14a8167406dfa842accaefcea2254e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
