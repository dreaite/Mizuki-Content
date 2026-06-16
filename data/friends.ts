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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQAZHOY4%2F20260616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260616T100936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGxNx7J1rK75W7gRV7fU7ospaMjLLs8DNAcGI99r%2BChqAiAkQ8nKobulvwnF75bnwkiaa7eywhmez4CQqo%2BZWXxrJyr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMXxVuVCYvCFa%2Bv3w4KtwDRTtbLatgXE9mbC00QdEuWnAzfJrW6b6KQrTPknlgYhTDVQbwDsyw5PyWRwn3SxJVzu4haKhfuExYQlQV7b5JL5YZFDbB%2FAeJh0ht7y6qBNpKEOPadTei0zZhOXTHRwSisJB8kzyiMelBqoUzNyEhJp6ejLpOIPIcqwBarx3KttW%2Bz%2B4tDc0jKkXox80H29MZ2HWJRUc6kPtPjAQB%2BrPZQyTX7P1KHbpDrMUXdeqtHOY74DbdRf20CaX5Zn8p333fTYvXLLe1wXAldbVqA5r0%2BR78OfjIIh4%2Bws0vXCV5AsPKixXSoYKeFzujq9YbCUKWLvS8%2BhECGb6qOYzLQ5ek6ZBDwyG93yjdN4gSEm4zTR2KgmtA2cAl5J1lNMNVvEJRmFcLOIzd7CqTBbxW7n3aYjcys2foT%2BbIfPTQ%2FekgO6bJScTpDb7K64QJB%2BdwWY7Mrx0Z5U8okd0Di3HyAmDxNxCilSrRc2ULzjL3873YhUlk3yU0BBtcYJ0iCIkIqtA8foDKUL87sDVQqhvVLpi2xDT5XlrJ9AhsKJFxWNitIK%2FhjSBfd%2Frv64irWdXfuiq9CGBZAdoUZsdyF4Zajt1q0pod4%2FStIKqyyWE8E8A5v24H4omE3BXTCHp0G00w3dvD0QY6pgEKq55XJnQhMHG6SFnEQMPBDGyRSeR7VOIi6EgJsjE0hoJu7VVVKzHKB6jTxRXniyBnC6Sa4d1BrRigWKK9Zd0ciijyELXuUSmABWf1aen0xrGDjeqvCDGBDwdAtSo4Fmb2%2B8kuktm78TXZrjZYMhCGrDXm0SHT8Mq8c48b8XAOxlPXCzn92Ml7IRKz8joB3o%2FzKGH6S2IJ2cC%2B2p8ry6gTfhi1NnCR&X-Amz-Signature=946ccb9d7f834205ff8b349c613384bcd71addd5b6f9395ec0a4a2aaa9911899&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
