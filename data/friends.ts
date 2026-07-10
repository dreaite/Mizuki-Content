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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IRYB5DH%2F20260710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260710T115303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDc3t9tpBdFXokHj0saKMrpeTlf4L8zaA964Vq3%2Bud2%2BgIhAP138%2FQrdJEfEpZHjlgXlmIY92DzV7n%2F9tn0OFuvcWMpKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzXN%2BMAMzBBdam7DV4q3ANmLrmp7RKs4NGZLA7WmlCmy8%2FWYHQIOf%2B9%2BAIjnwYVitByp6MYs5Zt5E1%2FK%2FDWZo1fVrCN2WTiXovudMOPQ4CQV4TazPDWfJ7udxrQpfpPqW%2B%2F3GasentGIyvsyVpjxZQywV5ZTqyA3CxYKxrY98boAPig0Auopazpw5BAniExfXlmOaT1aJsENvCWEPLVeI2Rynkt3E%2FU9t86IUm9F1Vyd8GZjvi3FfXGA3Gz%2Bvf2E9Xi47vQSjLEr9STPesJ2K95Blq9ldg3kSRL3FFjroEQhYQtEw4wPWNqdMrl0Ya7wYbze3GjyDnrvzbFsjOZrHEZvyhE%2BHuxHwH8BDKVFbPQHNugspap%2Bi4Mgpc351E2oZY78vDRYmB64ur8k3sOgK8aXbwQ%2BrK4NiyyF3K04%2F7RguTZZanLZYgPioyofKOgy%2B1spNo8hncewbfhFnHBDrxeFDI9ZD0p3fzkbrUtoKoQ68W4KvDuHB62Q5uRoH5g8JaGTPfFyllIULfBNb51aRIaBUjkyYZEQPWZEjW1QfTXbk%2BUHlwpqMkA6qqbPdk7w%2FtC9trQJZ0oH8oYen1cFwvgMYD98jIaj9V0eTEajE6yHEfTUfQz83F3eKlP0XrO1rKPmE8Oe7KCG4EmZjCqpcPSBjqkAVzJJYarQ0YroJJy%2FlPv7S9vonwtN0H6vuDqDjTPnRpPSJAiD8Z8aZieqeel5TywXBMsa6ataIZF4Bz6GZPxuQcTktc2rxnTQXYQf5RQ4WaC2AKUlZ2enVDaj705EAwXvyw%2B1vSPzSXxzgX%2F21rIDNOPxkA6ZM5zOF%2BgHCIj73BHzTh2taaG9otxIQPCamh3GwWoTvWGidGRhtC97QLWBo7fpTXL&X-Amz-Signature=68c1e0965167cf87744e644cd7577312132f89c6cd2db4049ffde2c8d4c1138b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
