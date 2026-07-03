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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SH6MWT3%2F20260703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260703T000725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIH5WwKMkeFKhuhCH%2BDibqGfjKtKhKfDM8fdw74RUAv29AiEA2Nf5neZpTBk5ctU1KeDiPycAnl39GxiE7f%2FUSTlHzq4q%2FwMIABAAGgw2Mzc0MjMxODM4MDUiDFKLl9adzYcrgIzQTSrcAy%2F3Mwl9VL9gF9RBAas7sUA1lc8tDuGLFhRQmSGCv8y%2FOk3Y1BGl1q9x0Xw5iPH6mqmTPwI8XEDiabHJjrbIxBqL4lf8BP43X%2FQ8nLTZNCKuvu8MhMrEiCjREVzE7AvGPYqKqWW1%2BeUoaT46szzzAb3lFiF1XaD2z1KiIYf44boiKLndfeVUWFI9kfm5%2BxmAgXp6UtyTqE4FhtuNjwWuuueqAc382c44FVKoKfc3P1AXmdsEnn8eJmdUCmFvM8whjdAY7bHIgOvvm3EP8SjQlDeqDo9ev3uD2KEw8zybyLofYO9hs9ajXXm7WKmvG4JHCdWP39SG8uGfAFIrQ2%2BKMRZIf5WearE7SLzaC0v9J9Y0o6R%2F7TQLJd6xMyTiAhk%2BL50A07wSKiCibehmd8XJBy245R6cf%2FTkS%2F44tvq7jqie%2BqtNvbA2Kc7232em%2F5AhPXE4%2Bbp3uPt1i64QtTgS7Vuq6IwUzpbF81eVSskTi3KrbRYPnCYK0l045cref6Z%2BLlnPJu10rPrDsMRMyIvC0RJt%2FYEvZEoEnEjuGmbZbYtIEJOzPbzRD%2B72p4Ssqj3RXk8sxfUxhrRh7IAy4jCAudBuKsVeSd%2BrigoeYJi%2Bjj%2FIy%2BggL3LLlis1aKjPMODUm9IGOqUBHVPN3kI8NsA3j84tnH5r942OFYe7yPEPMBFUBG4mNDuBGL2HWd2O%2B9iZaUbju%2FMj6LVhTaxgwz5GBC8IAoaaLmObXkirejWWlMEEcHa6Uf6f1FRIxtmmLO%2F7T468bRiygImK4Z7RbY7n9JVyrY93XWoGQfaVdbohfuEXrqjnDXWvQd6d4TfQOEAqqQcrMIp6AGFs0W6IYqb7L%2BN%2FUr2EFt%2B5hD5q&X-Amz-Signature=a8fd1a700c58bc0bdc9a630a5ca6ae2f1424bb154b585246957677ab118953a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
