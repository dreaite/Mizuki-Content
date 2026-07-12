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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYFA26EA%2F20260712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260712T175942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIQCLM%2BNMx0BMeaESlEzGGEEb%2FWZKymkOVSFSac5Le0k9RQIgU1gEYdFCnnVKtz9%2Fbf3wl09StYE5dQ6bemgcDg5LvVYqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPY7kwYo16D4s8eX2yrcA5nFhxgc51B%2FHK%2F2WClK01c4hpDO7wcX6Nw0D7OIVcZAWVfqt1f8LEmsSdvkyrN1xx9kbSC5%2FnchfEZWunimyui5cNN568MjbieE3Vg2p0kzAplJboxyZsXC5K7dE9YuwkET9PJOdnu%2BMknl1DPKapBEwDJYVvKRTbM0K9Wt74g38ba1qk%2Fkt7wcKK%2B3Oqu1iAFKdTG0TtnB4Q0MLFYfZlfNew8r3nwTBCfQWqUf5EDRd9NQ1I5J%2FefHev6%2F03HsD9ml3pDzePaHEcvATFwwGZuaSjmYfoFvn5NHHZ4leNw7n9FB3ehe9jPOPF70BqbaT0uTabGOyrAWgJV4Ag%2BMMQwGdKRyt5VkewM7PGkHvwPqB8Qtmf15mRACCHrm%2FO9ySyJwx1QlfJIbHTgkqrJYOYI5IkddH1chAiIRpBNG7pcM2Jk732S42czQeBjx6iI10lngVWazrRW4%2FXb9pmYm%2Bx%2B6MlGA2tsp63KoJITI%2FqthRfhpR1x6YC%2B26Sh25YuENouhZP8oJTvi0BqlebdW%2BkkhkQaDOhsgr4fKGBW05mO1reBhPtKeI5%2FF8W%2FbN1z6hQVLbr0uSzToB%2BtaoLFh4dXxWhkxDLZq64u0r6CgBNVgsAhxz%2FNISY%2BORlqmMKmPz9IGOqUBkyVk0Sc7OsJ1FVn%2BuDXDC4WOb92GkiDthBd4hnl3qdQvgHj0MZ5BNhDYvCd43DijDgzj31rK9VtnlvSzU8AfczHuMP6UtN7PCS1tB2dYWml4srZZe8lddQV3yC%2BMb7bJ%2BStAF3sKEIF1IF38VVS2BWfU4VPDSRPUrJ3%2BKWBlz%2B7U5ojf8G%2F0K53EkZaBHqffNwIO9dz7dgSabkox%2FNLglD3z0t8W&X-Amz-Signature=57efb6b28acce8bdd563be9430aa46c3a64e7b95e27706dcd5f6baf231738d2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
