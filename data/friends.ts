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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WT2FO7EF%2F20260727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260727T083137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHgr%2BeUdqPoODt1gJ1z88iE9GvKKCWcz1mdB6mr48jfvAiBRS1VflYEy2vV68aUuZWwlXliISXGZwOxZgwlGVefdsir%2FAwhJEAAaDDYzNzQyMzE4MzgwNSIMtB%2BwmGXpeMHcR4v%2FKtwDCYuDlebIjcZZHWaOZ4ok%2FPiWJr0T%2FecfTI3GiZ2Me1ff%2FJOwDdPOQ6CZoKN5a0tCtUD%2FAlYIPtCvQFFP6O4eoYeiiq%2FuXrDxsFHa8mS9ZwgfE1Lj%2BsqERfD5WIIPJrAafKpniWnCBNvff87hSF2XCkYghQaiCsAcwb3%2BU%2F2ltm3xtZcNjxS5cLUCZCuU3X7Ehwl%2Fq3m30ekSWOxcW%2FhQKYvFhOxEk4jTRxm4bF6l9y4jVJO8mxTcnXyNcKAdEQofdsZKeqq%2BzaQIV30siaLLxvwCO%2F3J8yTW0IZkn4VfGMq3R1XWFPIk9TmBcllS0TKeTWnu1awWHWUNOeFAyaEUv%2F94jSQAnBiP8GiAVT6D0KAy%2FABC6rSnKB8pU7alfzUA66ckqJCDdT45x3giJVkRapHGtYW%2F9REb3dg8MnAKa9C5VIgaAVzzqjcXD6imalQYN1m%2FBPt2w7o%2BlPj6iNynBs29prkqe2pNn6qKiaQp0ZmnWeLyh2v18Twmgx5Vw67R00yhPnCjprdD8LNjL0llJm%2BrZdlSiKooDMSSjeQf2aI0Jsas%2Fr5%2BvxbnVabqrw%2B2Z160Gy4OHcM%2BtY63yVynxDV%2FUvm7uf2lr4hfbOPrCGl5aI6v8R2wG5N3re0woZWc0wY6pgE59YUBEko9CK%2F75f49FVCxlyu9Du4bWg7vUb9u86bTyErobTStrFHVAF4nUz6mpAn%2BG3fgg0LHTjbSPSXQj7f8ADfeFNmFbY1aHq%2FDuVJ%2FML3o66T857RH2vcXQMPktC04IgDkD%2FTOLCEVngwQnBruGL24udGeaP9wCoSTu3j1bqfoIW7ytzTkuONouv%2BrrcN1bQwYqmvhVjBY4pkRUE64EFBIoYK9&X-Amz-Signature=b7288b506b436c7a082c4511e35fa78baf390341eeb46238adbf6df461843d49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
