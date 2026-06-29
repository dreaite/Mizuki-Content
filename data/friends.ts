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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RMHBKJT%2F20260629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260629T092714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGdx%2BPdeUaeuPaMF3ufH4rCYSmbiDa2c3YBdmb3YfK7UAiABrECK5oU9l86TGpP%2BO9EGxm0L6F5ut78ZoXa1gmVNECqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJkoL4mhIbqQEd9x8KtwD1GTR79goEFdosHkoWWihSQ23gfeEJGgYXMAoijPW1KZyZV5qc%2Fj59d6%2BvuGl8ClLo83FCK1a1OWqdmhx5P3U9BchkjF3pct0%2FRp7vosUJEVCMJv1UpVebdbQNONoVipmQrr1t%2FHKRObasGIRyKBOt4u%2FfjJxcqLWNmJIykAY13kFmuCrA8iMHuG1sPVUP4vOvyq2Z24jhNLh2v1GU9oOT2Kv69vCqXO9DwrdgmtU90%2FdWEhsnX1kcUlvRS73CtyDDny8JfgLFcdXL%2F1JfKOCxUxgdaYjUkGFh0C1JqWKiAv16KDMR%2BMww2TzxTuLt8fiYRUNw5%2BOgKQna0%2BdyQkWIToStXC4R%2FUS2l1X7rbyOD%2BSZxLmn%2Bm7GBJbjAVVQPEqSNa%2FJq3f%2B7X5WFPiYiOJ0HotVnVJ%2FEL8it%2BPj5nIpJyjk%2BOoegeMVPg4PaIVfYXoX7vkziZMbuoadWO3%2Fd1I4IGgCW5%2BRbtKuvNeieE%2BS56ubdeg%2BXIvHCBIwafVMt2QwidjxWHVHW%2Fb6TItB9YGEiIrC37vuXm%2BoHmgKVVeK6qdMedkrrC2ssCphYmbvSKL7%2FTAt6wyu7jcjKj10DEmM2Rm%2F5%2FzYsc7cZC5IgDCfGg5DSRACfE7J5T4Snowt9mI0gY6pgEX5HuWszX3A7nSZCiGbF0uv58zJUCSnNbTHwkvQatRxUVe8hMJkGfC32TMTYwFs40LZGXeDqxFJnBdcVoS%2Fj65IlRHqt%2BdkC0q9cWCmGfRVgUgTWLWLRG7G2m%2F1megd8cX%2FzMDO1dUw1qzy9wK8I5Yv3EuDHw6xXHdVXdpPXg3kE0D18oT3cMXDWPoYb%2FXgMQMwjQFJndipAi98QgJRy0nIb%2FBEKsz&X-Amz-Signature=a50f2b5c029201e5407138d97079b3be8b1ba8ed8c7cb8ed00ab129e4ba8fa5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
