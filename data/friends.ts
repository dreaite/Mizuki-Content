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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466235QEWPE%2F20260809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260809T153232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDK3d%2BFXI6I8xgErwcchg3xC4LbkFd9ZN5TNVOwMr%2BGrQIhAN2k1ZHAMihfnAwMJspwQzc8JuQ0qynA%2BGwMb67Y679YKogECIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxGFXMDGew8ZSrZGJwq3AOa%2F%2FszRxUOGjZb5hQz%2Bo6gKSrJw9JA5MbIU1wSZCV17p8ncDMi8hTa6B1g4eaDHRdiCDLFwBdqQgsOvZsAts0P%2FSsqvZP7QdM3x6ddGllazieI6hDagUTYBXeyOHlOdxW%2BTSJGIiduS8eUAm0KPTcP7XasLL02WuidAaIOAgLxx9OvDrc5EPZ%2BVxjMRQ8qvRb82LkGMKTxmXNMhtqsvFw%2F7ApSSqbpz24QMuO4yObUJhcYYWDm8YQFUcMxy8I%2F0x1HUMuwEJUopQ2giGwo0u2hFkNW%2BE%2BLU0cDbWW8QhAYseQN1e7XyQSKVXiUZECNGj0XPE7Mwy%2F2p9vfZZB2NRBTeEqvU0QiKSuxXamK9TTTvknm6BA2PVgLhxgSWw8QYX6W7EDkgrt2XgVqblknThvVzM6hTLiG6Y3%2BcjYNRGJeTDG6LGkdhVVrhLv7YNEi3gqfkP3PJLxSkxpsyxNaVbDD7neU3Urun9uGjweO9eUKzxKN%2BQFqdFsQbly9OuLhqm3KVinxDlg%2FXCDyvjX0kP%2FILm8YoNppp3E4g28k%2FiwgMU6AJzqjI9QGJwFUSY%2FTztNR3%2F84wZLiSWMaF8p0CdRGcWn6y9hbg5HbDMkgaUxC%2BRfp09%2F5qnR%2FbLByjjCno%2BHTBjqkAUD7IbfPLwkBXbmFbzoejz%2FI6dol%2FjXJea7kEoBD5gpU1rNuGW6I7%2FQXTZQJY5K%2FZpKETZkHASITnYU6nrqPV4RzLBl9vz%2BSpTB%2F1v3XdDRadLT1HIIzYENwooTdh1Pz34T4Cof48%2FgAXlIO6wQQ75wWFF7Z3RSNg819IMbFT1%2F%2Fd%2Fn99QnZrfNAFZdPbQKGvgBcKZn1feaglZddFfqj42Adn9ZF&X-Amz-Signature=36875f729f2ad1da9f6be13987f0f86e12fe93636757e2fe5943ea86fe333aa8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
