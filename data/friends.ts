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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3KMDL5F%2F20260718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260718T060630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD67ewXOY%2Fxh5vI%2Fzq%2BL4CK7NUmjkq3YJ%2BqSdoa7t%2FPfwIgN3AAGxTv3V8mIbfV91bNbt0oav8Y9TV042t4TSOW1gQq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDIKFhhha1qnBftccnyrcAxSxlK1Xbd2NfsTctqGbYCHEodRXjchDLptIemxz%2B6sDIeALyLt04qprYIrxAXnaiy2VeeVhOArEutFrik%2BUTPPLKKDvhd%2B%2BZILhc4b6XdbyTxmWHr%2BKwsa9SeycjSan%2FAzmTtc3rdxyPBRoCQpgFZa9oIfFn3cxGVyTmS1rKlR2uartgPKNhg3UHXBk4PgzPiN57O1HpFyI4G5UOuDB8C3R2ZC%2Fk0w2Z0oZ%2FxDee4%2BCY27nbJ9%2Fml6t9efmRKdYUe2jXrvqa6ybnC1nXgkEhbj5MaIx9ZfD9V6YgY4rsdfU9pOOPtKdet4JNIh2APn11s5sM0lxhU5ag5jgIFrjhytadcSGk0RUPqP4OtuDUIrRanrLaedgnbTbm86RuKdL7MRU%2F11kKGJWaWyRy1N%2B%2FTSFSLrgyf0jG455L6UcnDq8J5voZIDYSZAq0%2BoeEgmPWI07Wf2pd1rXP3OwFvd5giqi8n8KJBtC%2BNdFJ%2BFoN3W62K1jlURh6h1w7%2Fl9ERxesRlSkKpz1BxEk53ve%2Fyj12tT25v143RMi9ueNItCDM%2Ft4V%2Fc%2BjtD83vueptA%2F1CUup4Ez4E0tQSCtBPstgzwRZOUj01xE8o2Ltbz3Lso%2FEgtc651j6z6Ol1%2BY3R3MMSR7NIGOqUBBmcDcbeHxrGN1bBZVl%2BYSbqPaE1X%2B62l%2FthfYnbnEKTgXaUHHgJiO1BQ7vpYV74fA6u6ki16b8VZafHTGM%2BzYdULRVsuW%2BaEK%2Bp%2FZJpr47t57MudUCE3JPfsGpLopyCZID%2B9pOr4dcYGI8verMBFcqR74rR5saCyuEpdXt8dO3i6d%2FluNEDfsL2gNz5EsjLo4qdnP%2BgfZx0NeSZsISMxveRYZ%2B%2BG&X-Amz-Signature=481c034c5703b84a51ae575168c02b30725f4cbc274d6f24eac7581e2e9f15e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
