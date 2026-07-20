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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFOQINEB%2F20260720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260720T130727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCuq98lrMWxPQm3WWAeYPPXela1dNsci8VBj2Zm1lzFgQIgGmzn55q0AnHLiB%2BjkscVPitIMZNV86tQLGuxjRrH3%2FAqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO08m5G1NwBfA9HXKSrcA9RUhGywG8SD9s%2Bzh2sNN80ZL33MQFWPR1J%2FhmKp%2B2SJipzg3CBlXcaZhr2shB4Ji7fLeyfWe6Ag9iSw6Gxw5uqgKDw8D%2BTNLtiuDDQ3dGOllE17mPS1XM0dTzXSlCoqLY54DCUldBTc1p6Gkr2Zc5neqPjSJjGBbz96a3oRHX9RTlStZnHIAsje%2FtUe6K%2Br8JQRyT%2FMP5g4iaReBEaQZ5LK9aauu9FEsA%2F%2FHCvL0SpBLnccCQiDtBQO41ESbvcAjKlIHQBqPZPjgDkoXmUzPNay%2FBkeA%2Fyf%2BsZ0PUWqfABN5LYLLW9iJc4WAasTLiIV%2Bv8etrYZNV2JkEqNh9UzQco1XWyB8X5GrBMWvFjHVGtqDVtxf%2FRRwwgiNM7tNNpPAmr5uZodVXwoVOiAT60je5h8arpVuoNOZFBsCdGOpZyNHE5NMDRH8AFg7yaBGgNeRb%2Fm5HHS3JasOYnSJ65Ix5VMulcMT5cnWOz8gHzKfjghuzqyWOwDsTtJ0%2BIHjooiFSBbp94H4s1vRAedSEQyGajlAFatLjl1TR%2B%2BCmFpATp1QTJUhuhjY9em2iEnVya9Uw7YKreqQEYurg503Aa%2BkqRCACuuy2IobqqYi5kUD%2FYVapBhwjd1cjXWLtcmMNKt%2BNIGOqUB2qaj7AZtcZpS2MlFB7t02JkTHiFhes5REjW2%2BtSdCRWsqEfOKram3t00Nepu%2B0LK%2FU%2FFbTJZ9vatqcMzvy2rhMqZeY0cc3Aav%2BS2gaWQOolX1Wdba5WxbPk23ti5bHoCyucbS6noBdeG%2BS4BEQpZA%2FYyiHYOQQrjJ03qcl0cZnU8Q5auscbbCivW3UrY4C3kTMJabmFDE6ljUR0LLdxmFl9JsM2W&X-Amz-Signature=abe521e625442fdba6940a4607a5596df242523ecdb02e9280e1bf7046590e3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
