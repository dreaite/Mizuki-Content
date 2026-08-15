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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSENUANX%2F20260815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260815T123921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQDcpV1beFUialguLqfPCSrkGv3Ipm6VtlWHU67Q9pJNcwIhAOJhb3%2FqBZp9JYMOND2gkzK2BEqn7l1kFdZ02IdRoJPBKv8DCBUQABoMNjM3NDIzMTgzODA1IgyLzNnqVEx5MztNZDEq3AOeLtMi%2B2Gw40HUTI768XQgUG7OOsVsESxaBGwBd87UoYhEm5jdSCJbbj5BBHX2vlcQjfCAR2JQJlnEPGU041lv6s7en0uoay7wodUwRu6YxZbpnocrZdxHsYwQzzJdtuNaye95luQ4yN56f9PjT9smm7Pq%2B%2BYwRiFCXVv0B1i886PJcfeEDt9C28kqizjKzaBoCGEDZj%2BpNl%2FDrlmzZ4nIMQZaUe05T3u1wOiHCN%2FGe9jf6IIffX1Dv6thWLsQH4ekkhGLkcyy6MnmLiIKnCd8WyPSG4iPIZiQV838quRHA1jGOMwHNc00gtn%2BzYkg3TnTtBDdfgAMpSt3%2BSQi011V2mFiHyGM%2BfnH8f8wV8F9%2F3rTOLAaja7pbw9L5HQhuuF3SOZ06vqHiySxxVy9S728mKg8NV9HEKD8jsneK607vC3gWKo9gEW%2F0nFXobYGGZ3eryfY8QHpsn9UXw2SgQNOCkv0Td715L85rSE6r5nFjCzdFv60B%2BBRvLs0GMtbW%2BfWSvnQrotu2dEAp58yLtPM5vrWKQwA9SJ%2FpLSROzMSDqksLtBKwpmVx%2FgeVYq%2BKlYpm84pPq0wa8dMMOytZWmjY3CwyHF7kRxWHvZiVceNpk9Mgugjon5l0Xe3pjCpnIHUBjqkAQriBpLhjZYdphx8nI0HplI3Y0rudFxhhZYZsFf60c4KdGTonP37D5BkvkN4A0YgJx1w%2B8a2OqOO1neBO%2Fa75D7DTIu7egWRL3s0yWSsz0PzdUokvWrL6IaIoDhKUDywU7B6nQbbC%2B6OBeI2SAnontqTmRLTUxfFzKhYwXw19g%2BaWs5y1NPjpiwSzS%2FQDO0MlSmGPlBGxRu7b%2BLklsjJ2uPYgLiY&X-Amz-Signature=2b14119fa6568a66483611e013cdafa5046bbecc8aed8df6a210d3648f7c28a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
