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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYSBFHYG%2F20260716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260716T210110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5Mmi%2Fgh0%2FJW0kb26IYlvsPPG2Xo4l69sXmPjxrS1BmAIgE5mw18x%2FYJXnAIn2PX5GbftidvAIiyDo3xCl7W78qJ4q%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDPxncT4Tr24xf3EYkyrcAwNdkQjk2Tpz9KvHHKhtQl8vApZp9wbCoTI3OhTGA1Rq5%2FRiITIXJQK%2Bn53DeRdyS1M1L0IB9Fqb7VUGJQMWgsjK7hPOsVXw4bjwZwcdoYUeMd1jUPSK38DeNYlxcKMm9Y8IAIrjOo6TXJRNuZqTcNWImZZMZ81Sg6A5ZolJnDih2DZ2%2ByHp7EdvlvNgmdSYc8ULzGYLuRRQLqxKCe91HHhgtPhEVZnVgMIRzzjdhHWwQOSEd2rwIpSRG9R%2Fd%2Ft67mkfR6OYJPHrpYHqrnpRRlye9jMk62LYsQWAWTqLR8cL6KmeZLKKublQXjGzFWJWCwkJDDpJzZdo5mLJr04LsHvgDM8NTU%2FSU%2BLoONS5KuNYJ%2FbzswPz0S%2FPHYUr8lSqa%2BMAa1jDcrrHIi6P%2Fx2e%2B4q5ok43IqpbGUzeN8%2F1W45SoGIqKogR%2BL5courWNRRyvOLgfOq2xK8BOBo0XC9hVeu61GJMK1P2bMprjRaC105t6VvvYdFUbJLy1JaOq9V%2Fm8RqJm7dKU65dNKMjmWcN%2FA8mlQQIOQYBLDNHEHJHYUtLYwXL%2FTvrjpZOi4ag2VhlyhJPkRby5ZfmGxjVDRbMLDaUfyuQ6BgkslTuG%2F2lTXoljOnn5xS%2B3qppPR0MJqJ5dIGOqUBMtDojujqQHmKx%2FoQ%2FykeoWUDZWtT7CN6WFvyMeXrJ%2FcJGpYgg%2BoOxqP76lyTJbDawQP7QvK5st%2FaRILAq1w8cfz6cp6Sf0xCenRze0LzE%2Fq7VhOK7W6Wyfl9vFYKkgfWzbYuJsCxnU%2FLIbjPFSNRVcmxfYIfY30VSR35Jhe2%2FVx96b0NgsCdOVADALN6v6K4K8kLPpaq9ePKQ6j38fxVS59Mc7Ce&X-Amz-Signature=94779aa820ded66fa9bc3d282252e0f8c4067008d67c87a784c0967c8e870a64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
