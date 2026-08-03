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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZK7NPK5%2F20260803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260803T072817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIFVtz2lOjjQxrJNUAuTy7X8XNv0Gd4Su4wwa2My2gAiIAiEArC%2FEF2ZEcCqEfQbqDs1Gsj8hY6l0D%2BmkIAQpmY7OTOwqiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGjWvY%2BNEUpOcig53ircA2eHMNRjsUudauEx%2FJcxlW4qR0tbjMBOvP2ntWOl40MRUdmVDz02cVUuX1c%2BG1U6xUjzfEuMgDem%2B9VauYU8Af9brSotF%2FeTmkD5V6atXvK2ttRU9uYCs8F%2FGOQHzu2RU28%2B4Xy89FRVcerCQi6uJrRemSk010Y6zLHBuJl7fOIFJsIwXyGFC%2BjZnuEhERDhlkvVBTbkA0BdA1H%2Bhd16c2LcrbhvAW8grPth7I%2Ft0mLWDYEk3cKWEd7Zqx9HGCeakmQKnf%2FzIxN%2F1YR11Su%2B0xe%2BfC0O6sBHdRcfr6yB5cO7Pjklm163tsKM4MFkQniNMapG0ibjQ%2BNkDcToWSxzudPZTFz4hEyFyCwwBR1%2FyESWFMMeIgQ0qt3%2BDifu%2BrxE9PdEjzi8hRv71oQ00weA0f1lJf4wZSQiqKA7CEG%2BbpoCvKLkFNS8ZokwrDcuNcjOi8T7wBPep9IIAJY7xWRWo7k3VsnHN%2BJzu1i8ji5AYKuHPdmWMZU15VVdXRewChMPlTHhF4MTwdpP9nWVum1PN9GJXergf4SP0Qw4MxxapyNqXMKW1nUFaI8mlvkAVZ6q%2FjPQtCuoHArPd886LWVc19aqjHhzRCzVAZTWKDc042XKn0%2BNfLyh69O31gdgMMHnwNMGOqUBNSU0XwTy2vDtf8fRLlD%2BHD2YNol0HDh9fWDOsj%2F%2FH1rGiKBVJP7bNEf%2BwmBN4LOhizL%2FFkt2KSC9l3s44KMwUbac6C%2BjowI%2B0J2RVQwQGMPurT09AbbrotQZ1q%2FLPY%2FIVhLwNt8VIuUlEpwgyyxhZuRRnUCxDeZgr3l99Vgxbvbzme4sijrq9P3uJs%2BwSxSF9CV7za2y2JSZoVH%2BH%2FtMr6Y%2FsRHF&X-Amz-Signature=110cd2795c3adaa07ee0b11cd5811524782f8f7681988a6a9e0e86075d2a03fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
