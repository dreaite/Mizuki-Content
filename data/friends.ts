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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHO6QQIE%2F20260813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260813T100801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCICHOBtaQ3synST%2F1jsNIYB3wTk%2B131cSye%2F2KyylRIWfAiAhl4wloX6M%2FBmNuNPTsvogHhP9HCzPCuznn9dsDdwKvSqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUkFelMjkoDvb4JrZKtwD1WvK4B0FxJYyTrCR3hrxolKkiwN7wa3Cd2y5qGc2P8o85%2FmqXPtZvXbIsGBG4N%2FOOPQNuBtTMEbbm%2FnD%2Bb0WS9Gob9PEBg8I5qAdhtGuAj6Ox4cuxF%2BQzwQ%2F1I2Fe%2FjNyv6ZFKr9lvyU2w2Tm%2BSC5KtiM%2BcqhsbHEF729xeVYzA3D85KkTGiHRAvO861Zn46De4bcGGwkE3E2mg4UmDDRXNtl0UQb1wgMD2tyw5z5bZj9aoFNXqVXutqvvgNc7zB6LM33H0qhoV%2B%2F6zSXPL%2BPC7h1sBnuYbwzoxeRI7BsSInyq%2B85TDNpfdWMnVZNqcpJRnqPY0TUBGLU%2FupmyGUgVtvApzoUNjBumywgGtWPqlNA01bunxt3hROvhYnywxrPAfHdwvzAAvlycg3TZOQRlH8igJpS2Vf0jUPRbBDLd1vht%2Bp8sNT%2FDEmexuICt%2FauUFek2qySqvXDN5kzrr9LDlsECZlt%2B18JbQcxO8AHPw3YhYCABvvzbILe81F6nS1dZCKZ1MkYUPiqwEq0mfGq%2BI1apRVMKifitrH%2BsEK3hcl5nJEdxwFjSvK5CNdFHHm7DeJmRgVJ0MrYQuwgCy62mZk3OFrzQLTbQjPlUkSavZGCiurDb5D4R5wk1UwhJj20wY6pgGT2ep%2BgShMHl8VENbQ5PCWMYN6sLh6tVMqmXGDWDz7adXvkyIxedvoSVVku7Bxnv%2BfJFbzZ7WgN9WtNhDZWnw3KVpxEWtJvNqZIaifIkT6JqY2kL%2FB0OuVnEC7p%2FwjHttiXWiKyMWNL5L5Nun%2BJBZ9O4JTSVv3niI8lRRuGeZQOkIA1G7bgCJ6%2BVmGidbGHOlmlgd%2B6N%2BftY%2FcRm76ncaso71YtCLE&X-Amz-Signature=20d1d4cabe1316eaed9f0df944f97a87b558594beec76d1677423ac46152767d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
