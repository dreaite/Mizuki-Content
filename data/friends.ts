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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2AIM3OT%2F20260714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260714T230424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIDOaPlPfg8j%2FVENHYDu082hzL8Bc1XegyoCGs7URgz4oAiEAsqqDbk2YGfWLnO5RKqsmQM3cSBTUgtf42u2K9jLBAqMq%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDA8IJOozW00beh9ipyrcA0FKqoFP0EveSRnAhMM2H%2Bci4YPWrj07f5hckX0BuJP%2B53jzSSxGGETfZT%2BLnl2tiGyfpk3rhGFyorrQtyvwXapbifWN82VbhbmZiIAYzW3%2ByQIwF%2FUcsSksgkTEHm0x6QsYQyLwuWhUcDZ99htQAa11YTvci0rnaJ5v2Rft42E6KglLmF%2FcK3ppEQBAORrGz5oLH%2B7XPsgtsdyA3V9yM%2Bt1OwESe8sMdsZwjTex2PIn0eJEBfq3p5%2BRwhrMNwzXNu6MZek5zv4i%2BokrKq1zxR%2BF5g2%2FEgr7I00LfyqwE8QGPDSBQwE209EiqhdMpPjcBxE1nohEM7vdYjU0RWE10udtba73FUGZWL3TR0o7O3cG1rjtneNFgQ3e2ZpkWs87vx%2B%2FdA%2BRJPbwwyNvyGS3l22dt94yp5IAuCOQgFiGVrNGunGUhS4MMQIXNPBzuk0FR5X1msXlme2SYMRUQjkwRVqNOZ8QEHRGg3nOkUPgpSTtswRk2oSso1QPaopQEaMHebySGMXfeSoSXMMas1KhRb1cvWcXK%2BdIN52QAnyq7PpsdIYoSE7h6k%2BqxVHaIfocY0hCIh861oRn7ctEXyuExBMyPd%2FrVBoKtR1jk2Yh0ZK32jbeiEO5gAeYmYi0MJrS2tIGOqUB3Z5i8pVb5ySAhcWKFx6MzuFA%2FVcPnUir2%2F7jUlCSfLogTh46hryoYB16e3JOaX3JNWjrthkAcyVEiLN5pbVeAT%2BnMwnGyRp7hpRiR%2BZkMuw%2BoW%2BULl4PDDuxPn%2F5K7gsduRWkywfN4K8oD5Y9Jz3Ixdoymw8UB%2FWV%2FF0Mqz%2F9JGdeUTYu9ErujbKaWEFBMOO8TetMNKUN5IQqTPKWGwv5vRUiQ9e&X-Amz-Signature=b9ab701cbfe462477e66448afae310650b3ca8ff2c52e42771c1140595051976&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
