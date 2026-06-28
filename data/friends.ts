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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HPRUHAA%2F20260628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260628T210326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIElwGVxuE14IzOIUMOIlbN3oVf2cup46ceFL8%2Fzqej1cAiAVOk8NdOD7xO3Z73vnL1Nxvx4XY3TC6OthmmhH86pYKyqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMViPIRAMi1DqVYgbfKtwDxt74V49wsGt03IgG6Fyk8VErjJSttVE7U5VrX3L69pejOlD6%2Fg14UpBhaBzzxBwMsPlRFQtfqo4gMx2Tve7b4yO8Lqz9Dlt7%2BwGaWAS37NIQ6UpR5dptUm9EgwV3PBHiccKjVGPBLpCkNprG8%2FXFruIo85t7q8rz3yh4z8sNSz5A7E5BxlhdN2Oz5KrYHk1VotGg2wEcMbEcVi9fM6gEmX8DGZ%2FO4SsyX7cCxQLX52CNCnzn%2FtuxnuMSqvE7CK1pXNEzaVz7Yeqr06eW1HtU%2B%2BfR8eA%2BhDodTo1FvBQnwoGZlAEvbmY%2FjyEknSONh3kWhML2y1X%2BF7Q2QLkE8zw8jA81RSDa5QmagYF2iKnLm2COI3N5QAKNA2bAo3JWvKa%2B2MXshDrBzf057utJY2VN6GhqBpdZg%2BPWx5YViNiKOndSb%2BYM04v5uN5pE7a1BoCxkCDNwnIxBULs6pNWotUevVKfFjQn%2FHimCv1%2FC9hA47tRwQBEA969KvJp7eUTEx4DgxMq2dfhj9FOxpkF5IABQ8hP0BJPQnsH0LS%2F9qIsOX2gvnag2zItzAAW4KiKbE6LCDndMDdrxf%2F9sDhWICmLf425rmQyN4lRol1O1pyhYejx506S7LEEgTEPT%2B8wxrCF0gY6pgGy1ohY4V5YFSjdhrBiR1WIVOH1Gq0OK%2FnIdgpsBnjomACl9pq%2BQ3p1opDSpoliKeYtFSKDTRmkJvIXa0q8aqFGxyCyv%2Fz9G6zEPbdrHvAnWYx2kZ9uSkFGumyVmaaRD6C3Xke7OhEShFtKuiYZ31%2BKd7nO7Pw1x3h5GxEjCjZsR1oUtd0VdRxaEsJYaKDFprljHevJDNJuPuXYgoVEtX7z4alnC%2FwN&X-Amz-Signature=94a16cf43fb3d911ab9c118b7845b06d7067c84830a291fdc2c740c5b16c0066&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
