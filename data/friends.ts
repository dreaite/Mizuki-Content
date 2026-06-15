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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627D74QVT%2F20260615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260615T214415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFwy%2BEO18fCsahUDKrkGRTuNZyxddpxg9%2FCrNFhvJ5dhAiEA%2BKdKM3ASPzkc5Le0FYaWgrTSjixGFhueH0jA82jeQxQq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDD%2BlLkPxBqN4n0MieircA8Nh12BAy7zoM4bbgSua44HNBuJQ5FEPO29%2BnIN5sdZgvm213NHnbi1OIWX%2BpojC9Egbic06sFAithvdrlorqGdmCetT7PeIF1GkaNWeZWEtS9A9Rx%2FoBQsR1C9gthji9FA77hPC1aZGPPFU%2FAKMi6rbPBDn87xNb66XV7P%2B2SSlh54gPicY6z%2FvldH68jvxnW8NvFlGeStQ3Qg2NVqDTdQFdpjldjYSwWnxv981dg0PJQlGVIvGaYarBx59fW4nq5LtdqVgXKbgzrlhwCsXcE835IrJfH78AoIJun%2B1qByC88Hk6FZWtP2WJSAm5k43iNLzU0n0EKVR8Z3m7hmz5NV90YdQ4hAKP3BgnYPime6gikqlzhRbmWh7DJnxM1N8rbfWN1zg17w%2Bfo9MX1yewCru9ahPTWFvPz9%2BQ68q27gTTG1b77y908caYTovI0M2YlY%2BKZjEKIULQRJmw9BYQYOWjbgJ64k9SsrnXfkd3RefWWmI59TgQxq3yI%2BBAqncnJpx4w1Ep0WwuMuEy3%2FcPDHECARmWtj9D63x%2BP45ak4y0rpXWhRVLsov0PfXOqbDkRrfZuDaxgKgMggs4Ue2j1hwTUUhl8g%2Fbsmygs5W5%2FrhcNk7mKCai9uscj3pMNHWwdEGOqUB7DNGgc3DLkWQ2eevtMrjqZbYmGI34t6vmGfrkDExqgeAopXlYjP1jhaJ140TdnxvSa4CD3Nf4QkT5U0Pkm%2Bqbyi4w5zv%2BemRcYey8LHSEOf0NcDlOtY2b%2BeXAH1y0C8HjaE0x%2FZmc25frPBUdS2NiDo9fOF0wUmU%2B0u1YeQoR5Jda%2BWUC%2FDFwMeepHhps08bivkP%2Bj73p9xl77DqXmzNxDgY5lxb&X-Amz-Signature=64938a13b6463e6a52f21a87e00c566fbb5e1704ecd9762d1cb316c54c81e5e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
