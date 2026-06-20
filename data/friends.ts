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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5LRUS43%2F20260620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260620T141936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJIMEYCIQDEq0A5M83gga%2BZ1IBchR8RI3%2Btcb9L0uz9KWDsoKQ%2BsQIhAOaPTqVelSVtC4RpZQeyjSlURwVKeRnsZ7aZb8OeNeK%2FKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzFXYD1rtRN8UcLKnYq3AMYrjAG8HBlXvkkEEgc7kLfSuH8ShC0utG6oPQqvJeiJdbTkP1YAtyKMtDlnUdLSgbOC98iCfiN%2BYoHAAf7NfdBB83BkYs0Ud0EiHWfjnraZd1u4kL1KKQxlnD%2FK59PIYni5%2Bszo%2BPgWiaUfkw3WprkBOMKB9X8GGk4WmO71ugP73DWhBObQjBOHzso0DeekKVPwoe89ypCrZ6Ydy8NB9pbUOcMdA4Swa3tgp3W8%2B9tVcF2o3fEAIXhwlA7SeUev3UWd7rFv9vpFOFKsORLpXrXMdVr0NFkdEf9jNTeT14GuHK3axyCBatEUjM8VcpMJEbrwjh8P72Vo6gXDg%2FwnSVt4qyPKGgodlrnOTVoCp3EwOiMlxuCFH28jqiH0PhqxgYBhOE2V%2FbgHc7DHxLVbgpLjT%2BpaqZl1lrPWeYfr8dEz44pcWoPM%2BfaFopwJuZU3zYU3zcx7atj%2Bmm%2FvToD5tm37vpCYfP9uy3DsVO4AYLHQ61FhkTnsJwWVHndLKdWPqBqwD7rOd0rhOpkzShctM3%2BEFrZfOt9j%2FVypQuhMEaGEbDiYyWr6UHD6mi8YK%2FFpmu2JvZoLwiwWxK2IbAYvMmw77XRJTCrFCCmyw%2Bbn7Is66bj6Pw7qb6DvHxzZTCB6dnRBjqkAfJRTcIMS9cxSTw%2BovsRc0NmQ9iVUi0w%2BrszgBl6LmVlP9Kl5CGNNqlMNXK6191epyOrE3zvoQrcMWc2dCkcvkUwiP46NSFAt2MOZ5A66dlZoQb3QvbpQaRNHhs9g6iGS9dLO5aLwayBHaHCt4NCi7aiXBU%2FbVO85gn6iQgtWEgTO7aZ5qZJaOFuwKDf0n5YYXWCTHxHEs2ukTabvf4txK4NxlJ%2B&X-Amz-Signature=19bccaed3da8ffc684fbd639bc47ed164bec3432b1372d44c76a32b0b1962af4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
