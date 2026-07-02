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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJUGPFNU%2F20260702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260702T220828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJIMEYCIQDnpduZ5Z2R%2Fnzacycjovoo2sN%2B%2FGcXgWVbdp8YU9v%2B1gIhAPRpLBCXgk819fuzdgkjlfei9R10QjpOVAjCZOUOxntnKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxQTHxjQ%2BXoMc4vu%2FMq3APdrigyS1zD8dTn64%2Bcd0eh2b61Zglkz%2B%2FDLceZX%2B8w4T8ey1yBwBGAVivt27jM4BZ9h6Una1RPu%2F7iYAeu5ieJLPvFre3p%2BzHm6f1ORtwjKVBiDO5YFDMdvI3b%2FPqiYKv3pP3%2BllUgYC0zmndVHMQPPl0PtK6MwnHixjxdDkMYF7EawQCGnErwOeGBJn6RJgWNyVvZ4%2FNQpEc%2FBqXsWR9I4cTyxFdSjdGlfXIUNrO%2Fupwv7iWhr%2BMMHxBPBx%2Bw8SHB2Az0tywMffs5e79CUHrjV3FS%2BNGF3sKJGODwOYm9oc0s2PCMwry7OFqJZMppQi%2BwtN1Gz0BYuR8%2BZpLxariJ5c6Eksbg4XaRKQTnVD2MAIciENTcMGnmA%2B8ucI6C5aKCvB40Dr%2B6%2BlLHWBwzUU7EdGcB39uWP8qu7akJgee940rry8qmNOlngO5jMpYGzX2sFZrm1%2BuyRwbG3B4cPEOGk3wgAuyKXqYYZ%2FTWwWXrZpYZRsaKUCZJmbH3Bm3fGA%2FFFYiq5HdRxaw3dnSHmlQIF%2Bb4aAmPL%2BrVyY%2F82CIKLiHnSl%2BtUcIeh4VyYLkRFXoQUy5p41R7MfhEs0HHlnko8zKzFTPLobNeSARuqnOMwuZy2kZ%2BiustroirdzDOopvSBjqkAc16ValbFYS0kFCOpU%2B7pmZhJrU93ju54f7lgwMtziKQhuCLFmdSeQikm6dcX1tzzFK4pWHbND1kqvEuYvYuIGHuh00OT1%2BTMhQKNUeJK8xSAFgbdiTxSs6d2lm09tnK%2FSPJYAwrpeLqja0jkXQwTZcehT2%2FiwVcKxFyGgCHRUJJbfDJN08gJ0Mavjeu6i%2BolDH85ME9GVwbOR6tUnvWckpivnGb&X-Amz-Signature=54a22da933b3c8c5c3a62dd49287367b9ef07630206743760de15116f52dbcec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
