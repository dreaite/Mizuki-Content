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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625J4DFFN%2F20260704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260704T160354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJGMEQCIFSKknAVwa2IKzCUkMK8a3qI6AaVqtePms0n%2Fqf1wLagAiAGBmBwCG4RlDlyM7kiqXdJ74gjaA%2FLTIrp4AMU5H0YVSr%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIM%2FfzchJzvzZrNjdhgKtwDIEwiRCRzX8by48glwegpzs4kcINy2zwJ9W2a3dTchr5V0Y1UwFdL3YuQXc52aUE1dLKJwzJ9uM2Qd6Xv4%2B%2BdiocWHhwfSNWK1Jj6TRdhYDc94dgUJpUp8Jj0eH5XPsXiMcqz%2Bua6qiXmi2zTL5rhlxuOq%2FPiMnA3fkiK47j%2BArIGbMgt4ZHRsELo7FhPvMPkRjOXLxotS0HA8wHM88de%2Bf7kod87mJIW2MarafcfubKFGG4BNy72kD0Q%2FGc%2BL9dZQblOr6urQjdlpwR2AXMS%2FAfh0tqbCunzqcj895iH5nkV5QdmgagxuIv0K5Bu%2BBSGyoP55259MtEHL0hhMGWBfVHz6anqk%2FVgtBdDd113LxJcFoAT11zesWun8pgEZPC11FQedKW%2FQ4MnLtmeitGhoKVCpiGum7hX768RQgcYDjUXJSZTqX3rGJv2etcOCS%2BofnyVBO%2BoZ%2FjA1dbvIUotAS0CMY0tgz%2FfbMyNR7SyD%2BzFiupSouRMnXJqnFXG5rsP33Elf9qN4HRuu79VG0JtbNiVGVk%2BhMtDu4dWWiBrKTpAOPtKIy3vsGUtEY4Hm19Tqg2EbS3atR52LC0am3Jkfc59SJ5ptwoc9vUFc%2FzcIPAA8D6yoGSUNFeHmlowtcCk0gY6pgESqAHPdCS4WRCWHXvfg89RSPNBXzf2LeaeiknTr6r2Xpwwe8G0Q0BohYjfGVOZjre%2B0U3wctVNcc6PvTEXIo6jLJ7C9IcRrDZsKW1UcYlySb%2Ft8%2B9BCM%2Bao8D65Yf0dprCR4cnbIWFQtsskYQTrw5rWZFEQjSKeMbz8MoarVSpBSAJcXHE2M1tg%2FIRr3AkmrEE%2FaJKKzQ9yj%2F0NQEs9qZd8FgCvggC&X-Amz-Signature=f567803ac953cbda5d66fdc810d7913126595fd6731b47d68039c69829b766d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
