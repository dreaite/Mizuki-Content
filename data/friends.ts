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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4ZO3O4Q%2F20260712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260712T111129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQC5cPq8gbxYM8dTLB1tsuySglKy9IXS%2F214whFIweVSOAIgd6HnjN%2BY3WahCj3NTKxid1TtGzG1f6ofA%2BliH1lUfcQqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO1p%2Bqs1d8AjaRy2iircA%2FYaAK2dc8%2FMmg7N3r24br4LdMAKparquiFi8YrNVff%2BJdatlT0sdeTNXqLqe8ybYlytz0ocagMO8XwgqBJnKCk9mldiB17K%2BKiHQvxaHBw2vis466GmPgL59kEogHNLalXlyYL3MCwj23Pz8IAHi1UxDW%2BxAjdFx1qoYR0hfAc8CQzZ%2Bf3huw1URS%2FHgvizZDuxYiR4gCSRZF6yWjuIWZrWiBqTQrZ5YK80gCiHuOokZQa%2BUBWXvm5fo8Fb3aHx%2BsNVUYhJTnUtxloWKTFrgEH1%2FYeVAyYQe5mwebHedgvl8utt8AzzSRlbnV9rMoNwwY4dHsQzqtnTf9KIrFNraRt3JiVznDlXGfYxMGrefCOCJ2QABvtpIRky7uUM6I57ThAstivFmVM5XbS35KqJfiuZVvssNdljisAq%2F1C%2FO9VHVhyq2GWucHdLxNQktsncN4cnLv9E13mGzeSqEflpB0T1zmhgVAm0GuzNVsGfmsHmsahQvuDZErVNsPhThbDvXs9qRj92JnKrjWke6ghbTrvGF0Fua9C6ZLoOxgyQGU6mYs7KfAss4PN2ZBMhZEym8LBafQ7v7DPJg19rDj9qQN4Q4M68KKzstuQuSv2loPvToIkSRz0KsajRJUo2MPiHzdIGOqUBAUX535%2B13WKa3hIOHgj3Mrx%2BNfAt0W%2BWUg%2BTOk980V0G%2BlT6oSsiFBtuxWlAt3Nmma8a3CV037pNQ39eEA%2Fm3HZoEbrKBsVM5WNF0l33jhykxUxtMPLmIfUb0SxNAfH%2FAz2888hYYboaZGu97sA52UAdMiyrb21YkWcxA22BmFF4TqncAqyr6RvLcy6p4ziQ2rQLN4diKs4RkUGzrXh4Rdf0Ro9z&X-Amz-Signature=e9d2a39e4d04e53a8d4b4d3c7bb5f6d9d61272521f4275f21c6d4d192cec6c58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
