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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665I7B35XU%2F20260613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260613T161416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIHlhUGko%2FHHi7TZmaK5c8ucBGfpzMSW3Lv%2FdMhSNZSpbAiEA%2BoR0eck54l16ShG3SNGDny3U0bgXostf6P%2FeyDQO6xYq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDEE3bhW9aT8CkPNsPyrcA5CFaWFSgGGrBloIDQNE0HC%2F25O6wEKGIV0eO75jpTfCecuEsLSFXRJprCIOJAfSu8dqoibr%2FYTQRUnT%2BORGP8A8kQDCjoEHUtgOJmxb%2FgRR3DcRXR%2Bmdkx3bEPjvXyK2a7UrohrZ1roKhODRhqSI%2Fg1O6ef9praNCRSUfPLJyie8Ptfnp%2BbEedNobZDalqeHH60EYwJNr%2FkAyl%2F9sNJsXCrTch2og42PiIw4NOYLSToCb0%2FOYjOl57aNQH2xUOiJxTmg0R2ktkc%2BcJ7YWHu%2FJ6utigQavMFfq%2B3IN%2BbizdD%2BnVNPdDnuQDSIxHgau%2BJyQjHlqYZYA7Y3N4VTaUBdcip5Jbr1c7F4F5mBGwuJBRqho5mdaK0TRh0jY4fZuK4mUhVu3y069ipfOyyO6ti1D4pDJMKnUQtKRnIcHp3pzS%2B3%2F12589h0wfHaFvqIVrs9K4figETY%2FjNMWyjPbaMtn0oaFIJTIgk2ITJZdsMFCB%2FvNQ%2BUzx%2BCD1HH1kZvDF64jszfkEyIWtCYpLjJAjH%2FfWe%2BcqbGxpn6IoXpYxgHBe8MMdYIH9n9KQidyRK5RhvYZMKNvHAGEaKtjKFC2py97AEVQqf2fCpsKQ06%2B7PaqZZ9bXEQErlfxU3KFa2MMvstdEGOqUBKU2YQTWnMIl%2FMXnDKhD44T9k8WcJ%2FqRzaJbenW86pYWVfRDT%2FQaowkS2TbC3e%2B0qk1XmV5U%2FdZH6mkVHOrpoK4I80DTkYqM%2BFL%2BjLhVo2EnLsXH6YD%2B%2B0PTuKz6bUd84cJYUa6qtdn4Ldqvgd6Hin%2B6NBR38NmD2IaaWZ%2FE7aiUrTvzIwR%2BztSTQFyKaU%2Bu2NNMEExF6V%2B%2B6%2BUG7y%2FQuuSqjSwkm&X-Amz-Signature=04fd7380fa1ec406c29e746fca25ae727822254e7ba9218efdbea137e501580f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
