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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZ5OQPNV%2F20260724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260724T121947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJIMEYCIQD1fkcR6guIooooEAWGwGrQHhfa1YLm9hiW8fyzW7yNTwIhAJN%2BoMTRvwhBjC%2BhhZNSAqLesBgfqOVNqRwutaKJJFSFKv8DCAMQABoMNjM3NDIzMTgzODA1IgwlUiwhbS3xkfFr8%2Fcq3APxzEqVAfQz%2FDz1TiQW9K%2F7aGndXPCgQx0tEl6HZxaLvNLapUP136oLdgGKOtjQCf%2BEhjwT3hzHgZTmTG4EsULXUsai1NCT%2BSxAJLoBSHIlRi4yTs3jVm34H7AaSYVvLyC%2FdUl9V5rmTom1L542mMFAHL41Cx3W0W5Jd4xOYmHCTOeOI0NLGxWvmQaODBtzngqSEP0CThFtB0aaVKm%2B6v%2BFCbbYjpz%2BSbhKTXJMtIYT1robga5aW7HcFsskwJZDpVQ3PqTEBfjqk0wqH%2B5D77rMXNdWqwHMnBF0njraumkyMs8KpHRSmn%2FjwgnwooeVOCOLszAafxWtI8UPgLgxw6IsFUpJdt1LdsDKYVo1balYWs6gXyuXvYzfPw0ws7w3fZx%2Fs7z3sLCVpSk8z%2Bhje9CsVfi7uIA%2FiSaRhSJW89NTg7ztS87npiYcHxIhKde3YDotSOkJhDvCNdvtLooyh3ZYl4hlURXLI96%2BnwumrNPLpog8A7ZPLu4BQhn6MiSsfaMA4SObkVKGwTJy4PVfBArVyCQek3mr2cUXxqC8nksfWAISVy5TdcNRusyngCQ%2FlcngjMOVl73Rv%2BUe%2BE4RkfOeokeN52Mg8YieTVsceg59jJ5%2FZ1aPd5NgZHO%2FuzCD5IzTBjqkAeo5SQETEJ3T%2BzisVeT4%2Fmu9TzZLf8Tn3sKM67wYP%2F2OpDEmVMhvuHGjmSpSTCaaLasPTbdsXQyph3rt1kPplhOwFVc5SicNjNFzxHGFZOuohXPFNv717pnFLC%2Bs3Qj8G7xqc7A45vBPkw7BY4gDi%2FNXVcNE68LwySMjaWLB7isX%2BPmgT5FAGIug5BLqNcGBSyexpuaEEOix2C34YbeDXDyfSXmA&X-Amz-Signature=c74a71d561c12945c507d442222e2e4ba35d7a27a8dce2cbc720728f8229aec8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
