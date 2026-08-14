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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQBQ4AHZ%2F20260814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260814T145241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQDpwXjyMEKFJFNME7wQLIcdJwtEK%2B4QrP8rdlYyHewhIgIhANfyArNIH3klIBML%2BCR43MtOPI5Wu0nl1ZvtcjjDlWmoKogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgymwpI85iQJjD%2BGOSYq3ANxH6OFpvnMLyh5W%2BCLIAmO%2F%2BxuwmKP%2BblCp%2FDQJl7lOGTr6f6OZ9x5hfu0mtw8cQbnvsI4STfaZo8%2F%2BKhNDySzpBuIbY20KxZpRYLh1dtRTilsp9qY8rKIvyvljslrsSGHAJ2%2BV8y5wYmTsjSoYganV0AFK1uJHZ86NxWBh0pBe9EzkigDgjwnCs5GTy%2Bva6x6fGhPhsEK0%2BqnxK%2FVOGS1EIFxYSx2ypk7NZaqUnyXxPblzbF16%2BfNxv9x6aBCAm8D%2F29VBaBewEg0BD2%2FrD%2FsSC2cMR62lZaI0SVZGBygkSrk4TyKwB1iBqONfiFPQWNDzICf2xSmZc%2F0ErtfoIMHQXJBuaLQc9fQZ4mYJyWeIrUrQ7BGA14gTyrFj%2B1vpK1UOR5C%2Fmc5U8341O6kD%2F0j%2FzJIfHOoUhSCjVF6%2B2xt%2B%2FFxnFk1KZjlm3ZjWZ4J2J%2BA6nGfaBJuOzzw4w4BSqWSRB0%2FNwZqQ2ZhsPnnpITLXSq9R3QvETMJ9tMgnwwNfPNvy5XnLzCPrLFH2Xc5gfAkcl%2BYcP9D4KKSXE73X84%2Bt%2F24DESk8BKD%2BF1IAoauBS%2FHOeBEwn8WYl9U5w3REZeUd7txLwU2IjuIv9cvDdB%2FAgZzIv0k6WboA6QmUDDSwfzTBjqkAaw7g8%2BGVZ1jVC3hWqxvOzTZrpOdVP5uQ%2B8GGTmFI5eH8AO70VMlwz%2F4HBnQmlglmxL5nNYMj%2FAePCqQxwoHO%2Ba2hmZ7HJWf8tGk23LTvZ%2BBHmtsUR58hXu0Vv5gMh9dJ3twbZ4O%2FyWXigAJ3iv%2FPQCCYkYLkKHN%2BmNcYM1xlw0HvrupZ%2Bqcgnj%2F2UwmnEdcFvQYlLLyc8gICsiKfB9WafkfNIiq&X-Amz-Signature=cfc5039ce44213f5454a69e5f2c9492cce684990442beb264b4deeef32b0d760&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
